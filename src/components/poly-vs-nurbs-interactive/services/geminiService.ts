import { GoogleGenAI } from "@google/genai";
import { ModelingMode } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateExplanation = async (
  mode: ModelingMode, 
  userQuery: string,
  contextData: { pointCount: number, resolution: number }
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const systemPrompt = `
      You are an expert 3D Technical Artist and Instructor. 
      Your goal is to explain 3D modeling concepts clearly to beginners.
      
      Current Context:
      - User is interacting with a 2D visualization.
      - Current Mode: ${mode} (Polygonal vs NURBS).
      - Control Points: ${contextData.pointCount}.
      - Resolution/Smoothness Level: ${contextData.resolution}.

      Polygonal Modeling: Uses vertices, edges, and faces. Approximates curves with straight lines. Higher resolution = more polygons.
      NURBS (Non-Uniform Rational B-Splines): Uses mathematical formulas to define curves driven by control points. Perfectly smooth at any zoom.
      
      Keep answers concise (under 3 sentences) unless asked for detail.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "I couldn't generate an explanation at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the knowledge base right now. Please check your API key.";
  }
};