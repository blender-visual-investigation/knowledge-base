---
title: Methodology
description: Understanding systematic approaches to data collection and analysis for visual investigation, including the Berkeley Protocol standards.
sidebar_position: 1
---

# Methodology

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>ADVANCED</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>20 min read</span>
  </div>
</div>

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="What You'll Learn" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-book"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>What methodology means in visual investigation</li>
      <li>How to document your process systematically</li>
      <li>The four essential components of methodology</li>
      <li>Templates and checklists for your projects</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Key Concepts" 
    headerColor="#1C75BC"
    icon="fa-solid fa-clipboard-list"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>Confirmatory vs exploratory approaches</li>
      <li>Chain of custody for digital evidence</li>
      <li>Decision logging and audit trails</li>
      <li>The Berkeley Protocol standards</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Why It Matters" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-scale-balanced"
  >
    <p style={{margin: 0}}>Methodology transforms visualization from illustration into evidence—something others can evaluate, reproduce, and build upon.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## What Is Methodology?

Methodology is the systematic framework you use to answer a specific research question. It's not a tutorial on how to use Blender—it's the documented reasoning behind every decision you make during an investigation. A methodology explains what you did, why you did it that way, what alternatives you considered, and what your approach can and cannot tell you.

**The critical distinction**: Anyone can create a 3D visualization. Methodology is what transforms that visualization from illustration into evidence—something others can evaluate, reproduce, and build upon.

In forensic contexts, this distinction has legal weight: it's what separates an inadmissible graphic from defensible analysis. In academic contexts, it's what makes your work scholarly rather than speculative. In any investigative context, it's your audit trail.

This approach aligns with internationally recognized standards for digital investigation, particularly the Berkeley Protocol on Digital Open Source Investigations, which establishes that rigorous methodology—not just compelling visuals—is what makes digital evidence credible and potentially admissible in legal proceedings.

## Why Blender for Visual Investigation?

Blender serves as an investigative tool, not just a visualization tool, because it:

- **Tests spatial claims**: Does the reported sight line actually work? Could those dimensions physically fit? Would observers positioned here see what they described?
- **Reveals hidden relationships**: Three-dimensional modeling makes visible the spatial patterns, alignments, and proportions that remain abstract in written descriptions or 2D drawings
- **Enables systematic comparison**: You can test multiple hypotheses, view from any angle, adjust lighting conditions, and measure precise distances
- **Simulates experience**: Rendering engines can approximate how spaces appeared under specific conditions—lighting, weather, time of day

The key is using these capabilities systematically and documenting that process transparently.

## The Core Question: What Are You Trying to Answer?

Before opening Blender, write down your specific research question. Everything else follows from this.

**Strong research questions are specific and answerable**:
- "What was the driver's line of sight at the moment of impact?"
- "Could the witness positioned at the doorway have seen the events they described?"
- "How did window placement affect natural lighting in the workshop space?"
- "What was Vehicle A's approximate speed between these two points?"

**Weak research questions are vague or unmeasurable**:
- "What happened during the incident?"
- "What did the building look like?"
- "How did people experience this space?"

These might be your ultimate goals, but they're too broad for methodology. Break them into specific, testable components.

## Setting Up Your Methodology: A Practical Framework

Methodology has four essential components. The complexity of each scales with your project—a forensic reconstruction requires more rigor than a historical exploration, but the basic structure remains the same.

### 1. Define Your Approach

**Ask yourself**: Am I testing a specific claim (confirmatory) or exploring to understand spatial relationships (exploratory)?

**Confirmatory investigations** test hypotheses with measurable precision:
- "The driver could not have seen the pedestrian from their position" (testable: yes or no)
- "The reported speed is inconsistent with the observed distance" (testable: calculate and compare)
- "Window X provided insufficient daylight for detailed work" (testable: lighting simulation)

**Exploratory investigations** examine open-ended spatial questions:
- "How did the spatial layout facilitate different activities?"
- "What sight lines were available from various positions?"
- "How did lighting conditions change throughout the day?"

Most projects combine both: you might explore spatial relationships to generate hypotheses, then test specific claims confirmatorily.

**Document**:
- Your research question (one clear sentence)
- Your approach (confirmatory, exploratory, or mixed)
- Why Blender specifically suits this question
- What alternatives you considered and why you rejected them

**Example**: "This investigation tests whether Witness B could have seen the traffic signal from their reported position (confirmatory). Blender was selected because it allows precise camera matching to the CCTV footage while simultaneously positioning a viewpoint at the witness location. Two-dimensional photo analysis cannot account for the three-dimensional relationship between elevated signal, roadside obstructions, and witness position. Specialized forensic software was considered but lacks the camera-matching flexibility needed for non-standard mounting angles."

### 2. Document Your Sources (Data Collection)

Create a record of every piece of evidence you use. This establishes what the Berkeley Protocol calls "chain of custody"—the chronological documentation showing where evidence came from, how it was obtained, and that it hasn't been altered.

**For each source, document**:
- **What it is**: File name, document title, archive location
- **Where it came from**: Who provided it, which repository, URL with access date
- **Technical specifications**: Resolution, format, equipment used to capture it, date created
- **Verification**: How you confirmed it's authentic and unmanipulated (for critical evidence, include file hashes like SHA-256)
- **What you used it for**: Which measurements, which references, which parts of your model

**Scale this to your project**:

*Simple historical reconstruction*: "Floor plan dimensions derived from Smith, *Architecture of Colonial Boston* (1982), Figure 12, p. 47, cross-referenced with photograph dated 1898 from Boston Public Library Digital Collection (image BPL_1898_047, accessed May 2024)."

*Forensic reconstruction*: Include file hashes, metadata analysis, custodial information, equipment calibration dates, measurement protocols.

**Create a source registry**: A simple spreadsheet or document listing all sources with columns for: source name, type, location, date accessed, what information was extracted, reliability assessment.

**Preservation principle**: Always work on copies of original evidence. Document any transformations or processing applied to source materials. This ensures that original evidence remains unchanged and that your process is transparent and reproducible.

### 3. Document Your Process (Method)

Describe the specific techniques you used in Blender to transform sources into a spatial model.

**Break this into**:

**a) Establishing spatial accuracy**
- How did you calibrate cameras? (fSpy, manual matching, reference points used)
- How did you verify scale? (What known measurements did you use as references?)
- How did you handle photogrammetry or point cloud data? (Software, settings, alignment method)

**b) Reconstruction decisions**
- How did you model specific elements? (Which tools, which techniques)
- When evidence was incomplete, how did you fill gaps? (Comparative examples, period-typical details, educated inference)
- How did you prioritize conflicting sources?

**c) Analysis techniques**
- How did you position viewpoints for sight line analysis?
- What rendering settings simulated lighting conditions?
- How did you measure distances, speeds, angles?
- What physics simulations did you run?

**The key principle**: Someone with similar skills should be able to understand your process well enough to evaluate whether your approach was sound, even if they can't perfectly replicate every step. This aligns with the Berkeley Protocol's emphasis on reproducibility—others should be able to follow your reasoning and potentially verify your findings.

**Document**:
- Blender version and any add-ons used
- Specific techniques with tool names (not just "I tracked the camera" but "Motion tracking using Blender's built-in tracker, placing markers on static reference points X, Y, Z")
- Where precision was possible versus where estimation was necessary
- How you verified accuracy

**Example**: "Camera calibration used fSpy 1.0.3 with three vertical reference lines (building corners visible in frames 100-150) and two horizontal references (parking space edges). Resulting focal length: 8mm, sensor width: 13.2mm. Verification: rendered view overlaid with source footage showed alignment within 3 pixels for all reference points. Vehicle tracking: keyframes placed every 10 frames matching observed position using semi-transparent overlay. Position accuracy estimated ±20cm based on pixel resolution at vehicle distance."

### 4. Acknowledge Limitations

Every approach has constraints. Stating them openly demonstrates critical thinking and actually strengthens credibility—a core principle of the Berkeley Protocol, which emphasizes that transparent acknowledgment of limitations enhances rather than undermines the value of evidence.

**Common limitations**:

**Source quality**: Low resolution footage, damaged documents, incomplete measurements, contradictory accounts

**Technical constraints**: Modeling simplifications, render approximations, occluded areas requiring inference

**Scope boundaries**: What you deliberately excluded (distant features, interior details, environmental factors)

**Methodological limits**: What your approach fundamentally cannot determine (what someone was actually looking at, cognitive factors, attention, decision-making)

**Document**: 
- Specific constraints and their implications
- Margin of error where quantifiable (±X cm, ±Y km/h)
- What remains uncertain or speculative
- Why your approach is still valuable despite limitations

**Example**: "Source footage resolution (720x480) limits spatial precision to approximately ±15cm at relevant distances. The area behind the delivery truck is occluded in all footage; vehicle trajectory through this zone is interpolated based on entry/exit positions. This reconstruction establishes physical possibility of sight line, not proof of actual observation—driver attention and interior vehicle obstructions are unknown."

## Documentation Practices: What to Keep Track Of

Methodology isn't just written at the end—it's built throughout your process. Set up documentation habits from day one.

### Decision Log

Keep a running document (can be simple text file, spreadsheet, or notes app) recording:

**When you make significant modeling choices, note**:
- Date
- What you decided (dimension, placement, material)
- What evidence informed it
- What alternatives you considered
- Why you chose this option
- Confidence level (certain/probable/speculative)

**Example entries**:
```
2024-05-15: Window height set at 2.1m based on measurement in Figure 3 of survey report. Alternative: 1.9m suggested in written description, but figure is more recent and detailed. Confidence: High.

2024-05-18: Door placement inferred from typical period practice—no direct evidence for this wall. Positioned based on circulation logic and comparison with similar buildings documented in Jones (1995). Confidence: Low—speculative.

2024-05-20: Traffic signal height: 5.8m verified by on-site measurement with laser distance meter. Matches specification documents for this model. Confidence: Very high.
```

This running log creates the transparent audit trail that professional investigation requires.

### Organize Your Blender File

**Use clear naming conventions**:
- Collections named by evidence type: `Verified_Elements`, `Inferred_From_Photos`, `Speculative_Context`
- Objects named descriptively: `Vehicle_A_Honda_Civic`, `Signal_Post_Measured`, `Building_North_Simplified`

**Use custom properties**:
Right-click object → Custom Properties → Add
- `Source`: "Site measurement 2024-05-15"
- `Confidence`: "High" / "Medium" / "Low"
- `Evidence`: "Survey document p.12"

**Include documentation in the file**:
- Add a Text object in a dedicated collection with project notes
- Use empty objects with names like `NOTE_Camera_Calibration_Details` to mark important reference points

**Save development versions**:
`Project_v01_Initial_Blocking.blend`
`Project_v02_Camera_Matched.blend`
`Project_v03_Analysis_Complete.blend`

This versioning creates a record of how the model evolved and allows you to revisit earlier states if needed.

### Visual Documentation

**Create comparison images**:
- Source photo alongside your rendered view
- Overlay of model on source footage (at 50% opacity)
- Before/after showing modeling stages
- Annotated diagrams showing measurement points

**Document sight lines**:
- Render from analyzed viewpoints
- Add translucent planes or colored lines showing sight angles
- Label key elements in the image

**Show your verification**:
- Screenshot showing how you aligned reference points
- Image with measurements labeled
- Comparison of multiple interpretations if uncertainty exists

### Write As You Go

Don't wait until the end to document methodology. Keep a working document where you:

- Drop in source citations as you use them
- Paste screenshots of technical steps
- Write quick notes about decisions
- Record problems encountered and how you solved them

When it's time to write the formal methodology, you'll have all the raw material ready.

## Practical Examples: Scaling the Framework

The same four-component structure works at different scales. Here's how methodology looks for different project types:

### Example 1: Simple Historical Exploration

**Research Question**: "How did the 1850 workshop layout facilitate different craft activities?"

**Approach**: Exploratory—examining spatial relationships to understand workflow patterns.

**Sources**: 
- Floor plan from historical society archive (drawn 1895)
- Two photographs from period showing window placement
- Typical dimensions from craft manuals of the period
- Comparative examples from similar documented workshops

**Method**: 
"Floor plan dimensions transferred to Blender at documented scale (1:50 drawing, verified against known building width of 8 meters). Window positions matched to photographs. Work bench heights estimated from period furniture catalogs (typically 90cm for this trade). Lighting simulated for summer solstice, 10am (typical work hours) using Sun Position add-on for documented building location."

**Limitations**: 
"Interior details are speculative—based on period-typical practice rather than documentation of this specific workshop. Actual arrangement would have varied with proprietor preferences. Analysis focuses on spatial possibilities, not definitive reconstruction."

### Example 2: Incident Reconstruction from Video

**Research Question**: "What was the approximate speed of Vehicle A between intersection entry and collision point?"

**Approach**: Confirmatory—calculating measurable speed to test claims.

**Sources**:
- CCTV footage: 1920x1080, 25fps, specific timestamp range
- File hash for integrity: a3f5d8c9e42b1a7f6d8c3e9b2a1f4d7c (SHA-256)
- Obtained from: City Traffic Management, April 2, 2024
- Chain of custody: Original SD card → department server → forensic copy → project import
- On-site measurements: intersection width (12.4m), camera height (8.2m)
- Vehicle specifications: 2019 Honda Civic (4.63m length)
- Weather data: clear conditions verified

**Method**:
"Camera matched using fSpy with verified reference points (building edges, parking meter at known position). Vehicle tracked frame-by-frame (keyframes every 5 frames = 0.2 second intervals). Position matched using overlay method. Distance measured in Blender: 28.4m traveled in 6.0 seconds = 4.73 m/s (17.0 km/h). Margin of error: ±0.3 m/s based on positioning uncertainty of ±20cm."

**Limitations**:
"Footage resolution creates ±20cm positioning uncertainty, yielding ±1.1 km/h speed uncertainty. Between-frame positions interpolated (25fps = 0.04 second intervals). Verification: calculated speed consistent with observed motion; no physics violations detected."

### Example 3: Architectural Sight Line Analysis

**Research Question**: "Was the altar visible from all positions in the gallery seating?"

**Approach**: Mixed—confirmatory testing of visibility (yes/no) with exploratory examination of viewing experience.

**Sources**:
- Original architectural drawings (1887, city archive)
- Modern survey with laser measurements (2023)
- Historical photographs showing sight lines (1890s)
- Seating specifications from church records

**Method**:
"Model constructed from drawings verified against modern survey (±3cm agreement). Cameras positioned at eye height (1.5m above seat, seat height from specifications) at each gallery section. Renders generated from each position at altar-viewing angle. Occlusion analysis: columns obstruct view from seats G12-G15; partial obstruction G8-G11."

**Limitations**:
"Analysis addresses geometric visibility only. Historical congregation members' actual heights varied; 1.5m eye height is average estimation. Original seat configurations may have differed from recorded specifications. Analysis cannot determine quality of view or adequacy for liturgical purposes."

## Templates and Checklists

### Project Setup Checklist

Before starting modeling:
- [ ] Research question written clearly (one sentence)
- [ ] Approach defined (confirmatory/exploratory/mixed)
- [ ] Source list started
- [ ] Decision log file created
- [ ] Blender file organized with named collections
- [ ] Version control plan (file naming scheme)
- [ ] Documentation folder structure created

### Source Documentation Template

```
SOURCE: [Name/title]
TYPE: [Photograph/Drawing/Measurement/Document/Video]
LOCATION: [Archive/URL/Physical location]
ACCESS DATE: [When you obtained it]
FILE HASH: [SHA-256 if applicable for digital evidence]
SPECIFICATIONS: [Resolution/dimensions/format/etc.]
USED FOR: [What part of model/what information]
RELIABILITY: [High/Medium/Low - why?]
NOTES: [Limitations, concerns, context]
```

### Decision Log Template

```
DATE: 
ELEMENT: [What you're modeling/deciding]
DECISION: [What you chose to do]
EVIDENCE: [What sources informed this]
ALTERNATIVES: [What else you considered]
RATIONALE: [Why you chose this option]
CONFIDENCE: [High/Medium/Low]
NOTES: [Uncertainties, assumptions]
```

### Methodology Writing Template

Use this structure when writing your formal methodology:

**1. Research Question & Approach** (2-3 paragraphs)
- State your question
- Define your approach (confirmatory/exploratory)
- Justify why Blender is appropriate
- Note alternatives considered

**2. Data Collection** (1-2 paragraphs per major source type)
- List all sources systematically
- Provide full identification details
- Note any verification procedures (chain of custody, file integrity)
- Acknowledge limitations in sources

**3. Method** (3-5 paragraphs)
- Camera calibration/spatial setup process
- Modeling techniques and tools used
- Analysis procedures
- Verification methods
- Software versions and settings

**4. Analysis** (2-4 paragraphs)
- How you processed the model to answer your question
- What measurements/observations you made
- How you verified findings
- What the results showed

**5. Limitations** (1-2 paragraphs)
- Technical constraints
- Evidentiary gaps
- Scope boundaries
- What cannot be determined

## Common Pitfalls to Avoid

**Claiming certainty you don't have**: If something is estimated, say so. If there are margins of error, quantify them. Overconfidence undermines credibility.

**Forgetting to document as you work**: Writing methodology after the fact is exponentially harder. Your memory will fail you. Document decisions when you make them.

**Confusing visualization with verification**: A beautiful render isn't proof of accuracy. Always verify against sources, measurements, or known references.

**Under-explaining technical choices**: Don't assume readers know why you did something. "I used fSpy" isn't enough—explain what references you used, what parameters resulted, how you verified alignment.

**Ignoring failed attempts**: Document what didn't work and why you abandoned it. This shows critical thinking and helps others avoid the same dead ends.

**Treating all evidence equally**: Some sources are more reliable than others. Be explicit about your hierarchy of evidence and why.

**Breaking chain of custody**: Always work on copies, never originals. Document every transformation. Maintain file integrity through hashing or version control.

## The Berkeley Protocol: International Standards for Digital Investigation

For those conducting investigations that may have legal, human rights, or accountability implications, it's valuable to understand how visual investigation methodology aligns with international standards.

The **Berkeley Protocol on Digital Open Source Investigations** (published 2020 by the UN Office of the High Commissioner for Human Rights and UC Berkeley Human Rights Center) establishes minimum professional standards for using digital information in investigations of human rights violations and international law. While it focuses primarily on social media and online content, its core principles directly apply to 3D reconstruction work.

### Key Principles Relevant to Blender Investigation

The Protocol's five-phase framework—**identification, collection, preservation, verification, and analysis**—maps directly onto the methodology described in this knowledge base:

- **Identification** = defining your research question and sources
- **Collection** = documenting data sources with chain of custody
- **Preservation** = working on copies, maintaining file integrity, version control
- **Verification** = testing model accuracy against independent sources
- **Analysis** = using the model to answer your research question

The Protocol emphasizes that **methodology transforms digital content from illustration to evidence**. It's not enough to create compelling visuals—you must document the reasoning, choices, and limitations that allow others to evaluate your work's credibility.

### Why This Matters

The Protocol was developed because digital information increasingly appears in courts, tribunals, and accountability proceedings. Its standards help ensure that digital evidence is:
- **Admissible**: Properly collected and documented
- **Reproducible**: Others can understand and potentially verify your process
- **Credible**: Transparent about limitations and uncertainties
- **Ethical**: Respectful of privacy, safety, and appropriate use

Even if your visual investigation work isn't destined for legal proceedings, following these principles strengthens your methodology. The Protocol's tool-agnostic approach—focusing on principles rather than specific software—reinforces that **methodology is about reasoning, not just technical steps**.

### Further Reading

The full Berkeley Protocol is freely available online and provides detailed guidance on digital investigation standards. For those working on sensitive investigations, human rights documentation, or any work that might be used in legal contexts, reviewing the Protocol alongside this methodology guide will help ensure your visual investigation meets internationally recognized professional standards.

---

## Summary

A methodologically sound investigation with acknowledged limitations is stronger than a polished visualization with undocumented choices. When in doubt, document more rather than less. Explain your reasoning. Admit uncertainty.

**Key Takeaways:**
- Methodology transforms visualization from illustration into defensible evidence
- Define your research question before opening Blender
- The four essential components: approach, sources, process, limitations
- Document as you work—don't wait until the end
- Transparency over perfection: acknowledged limitations strengthen credibility
- The Berkeley Protocol provides internationally recognized standards for digital investigation
- Scale methodology complexity to match your project's requirements

**Further Resources:**
- [Berkeley Protocol on Digital Open Source Investigations](https://www.ohchr.org/en/publications/policy-and-methodological-publications/berkeley-protocol-digital-open-source) - UN OHCHR & UC Berkeley
- [Analyzing Data](/docs/data/analyzing-data) - Data analysis techniques
- [Organizing Data](/docs/data/organizing-data) - File management and organization
- [Collaboration](/docs/data/collaboration) - Working with teams on investigations
