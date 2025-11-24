import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { ModelingMode, Point } from '../types';
import { chaikinSubdivide } from '../utils/geometry';

interface VisualizerProps {
  mode: ModelingMode;
  resolution: number; // 0-5 for Poly (iterations), ignored/fixed for NURBS visual logic
  points: Point[];
  setPoints: (points: Point[]) => void;
}

const Visualizer: React.FC<VisualizerProps> = ({ mode, resolution, points, setPoints }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

  // Handle resize
  useEffect(() => {
    const updateSize = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // D3 Render Logic
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const { width, height } = dimensions;
    
    // Grid Background
    const defs = svg.append("defs");
    const pattern = defs.append("pattern")
      .attr("id", "grid")
      .attr("width", 40)
      .attr("height", 40)
      .attr("patternUnits", "userSpaceOnUse");
    pattern.append("path")
      .attr("d", "M 40 0 L 0 0 0 40")
      .attr("fill", "none")
      .attr("stroke", "#e2e8f0")
      .attr("stroke-width", 1);
    svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "url(#grid)");

    // Draw "Control Cage" (The dashed lines connecting control points)
    // Always visible to show the underlying structure
    const lineGenerator = d3.line<Point>()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveLinear);

    svg.append("path")
      .datum(points)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", "#94a3b8")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "5,5")
      .attr("class", "control-cage");

    // Draw Main Curve/Mesh
    let pathData = "";
    let mainColor = "";

    if (mode === ModelingMode.NURBS) {
      // NURBS: Use a Basis Spline to approximate the smooth curve defined by control points
      const curveGenerator = d3.line<Point>()
        .x(d => d.x)
        .y(d => d.y)
        .curve(d3.curveBasis); // B-Spline approximation
      
      pathData = curveGenerator(points) || "";
      mainColor = "#3b82f6"; // Blue for NURBS
    } else {
      // POLYGONAL: Use Chaikin subdivision to show smoothing levels
      const subdividedPoints = chaikinSubdivide(points, resolution);
      
      const polyGenerator = d3.line<Point>()
        .x(d => d.x)
        .y(d => d.y)
        .curve(d3.curveLinear); // Straight lines
      
      pathData = polyGenerator(subdividedPoints) || "";
      mainColor = "#ef4444"; // Red for Poly
      
      // Render vertices for Poly mode to emphasize the "facets"
      svg.selectAll(".poly-vertex")
        .data(subdividedPoints)
        .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 2)
        .attr("fill", mainColor)
        .attr("opacity", 0.6);
    }

    // The actual curve path
    svg.append("path")
      .attr("d", pathData)
      .attr("fill", "none")
      .attr("stroke", mainColor)
      .attr("stroke-width", 4)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round");

    // Drag Behavior
    const drag = d3.drag<SVGCircleElement, Point>()
      .on("drag", function(event, d) {
        // Clamp to bounds
        const newX = Math.max(20, Math.min(width - 20, event.x));
        const newY = Math.max(20, Math.min(height - 20, event.y));

        // Update local SVG immediately for smooth frame rate
        d3.select(this)
          .attr("cx", newX)
          .attr("cy", newY);
        
        // Update React state
        const newPoints = points.map(p => 
          p.id === d.id ? { ...p, x: newX, y: newY } : p
        );
        setPoints(newPoints);
      });

    // Draw Control Points (Interactive)
    const controls = svg.selectAll(".control-point")
      .data(points)
      .enter()
      .append("circle")
      .attr("class", "control-point cursor-grab active:cursor-grabbing")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 8)
      .attr("fill", "#fff")
      .attr("stroke", "#0f172a")
      .attr("stroke-width", 2);
      
    controls.call(drag as any);

    // Labels for control points
    svg.selectAll(".cp-label")
      .data(points)
      .enter()
      .append("text")
      .attr("x", d => d.x + 12)
      .attr("y", d => d.y - 12)
      .text((d, i) => `CP${i}`)
      .attr("font-size", "10px")
      .attr("fill", "#64748b");

  }, [points, mode, resolution, dimensions, setPoints]);

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden relative">
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded border border-slate-200 text-xs text-slate-600 z-10 pointer-events-none">
        Drag the <b>Control Points (CP)</b> to deform the {mode === ModelingMode.NURBS ? 'curve' : 'mesh'}.
      </div>
      <svg 
        ref={svgRef} 
        className="w-full h-full block touch-none"
      />
    </div>
  );
};

export default Visualizer;
