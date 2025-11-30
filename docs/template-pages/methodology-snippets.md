# Prompt for Agentic LLM - Adding Methodology Documentation Snippets

You are working on a Docusaurus-based knowledge base about using Blender for visual investigation. This knowledge base emphasizes rigorous methodology and documentation practices that transform Blender from a visualization tool into a defensible investigative instrument.

## Task

Add a "Documentation for Methodology" section to the page about [TECHNIQUE/TOOL NAME]. This section should be placed at the end of the main content, before any "Related Pages" or "Further Reading" sections if they exist.

## Format Requirements

Use a Docusaurus collapsible details component to avoid overwhelming the page. The section should be collapsed by default but clearly visible and inviting to expand. Use this structure:

```markdown
---

## Documentation for Methodology

Understanding the technique is only half the work—documenting it properly is what makes your investigation defensible and reproducible.

<details>
<summary><b>What to document when using [TECHNIQUE/TOOL NAME]</b></summary>

### In Your Method Section

[1-3 sentences describing how to document this technique in a formal methodology. Be specific about what parameters, settings, or decisions should be mentioned.]

### In Your Decision Log

Record the following when using this technique:
- [Key decision point 1]
- [Key decision point 2]
- [Key decision point 3]
- Date performed

### Verification

[1-2 sentences explaining how to verify this technique was applied correctly or how to test its accuracy]

### Common Limitations

[1-3 sentences about constraints or limitations this technique introduces to your investigation]

### Example Methodology Statement

> "[A concrete, realistic example of 2-4 sentences showing exactly how someone would describe using this technique in a formal methodology document. Use realistic but generic parameters like [X], [version], [number] to show where specific values would go.]"

</details>

---
```

## Content Guidelines

**Tone**: Professional but accessible. Write for someone learning both the technique AND how to document it properly.

**Specificity**: Use the actual technique/tool name. Reference specific Blender tools, settings, or add-ons where relevant. Include version numbers in examples (e.g., "Blender 4.0" or "fSpy 1.0.3").

**Practicality**: Focus on what someone actually needs to write down, not theoretical concepts. Think: "If I used this technique today, what would I need to remember to document tomorrow?"

**Scalability**: The example should work for both simple projects and rigorous forensic work. Use bracket notation [like this] to show where specific values go.

**Brevity**: Keep each subsection focused and concise. The entire collapsed section should be scannable in under 2 minutes.

## What to Include in Each Subsection

### "In Your Method Section"
Write 1-3 sentences that could literally be copied into a methodology document, using brackets for specific values. Cover: what tool/technique was used, key parameters/settings, and how accuracy was verified.

### "In Your Decision Log"
Bullet list of 3-5 specific items that should be recorded when using this technique. Focus on decisions made, not just facts recorded. Always include "Date performed" as the last item.

### "Verification"
Explain how someone would test whether they used this technique correctly or how they'd verify the results are accurate. This should be actionable.

### "Common Limitations"
Identify 2-4 constraints this technique introduces. Consider: precision limits, source material requirements, what it cannot measure/determine, conditions where it fails.

### "Example Methodology Statement"
Write 2-4 sentences that sound like they're from a real methodology document. Use realistic technical language. Include specific but generic details using brackets: [X pixels], [version], [Y meters], [date]. Make it concrete enough to be useful as a template.

## Context About This Knowledge Base

This knowledge base teaches visual investigation through Blender with emphasis on:
- Forensic incident reconstruction
- Historical architectural analysis  
- Spatial sight-line analysis
- Evidence-based 3D modeling

The methodology framework is based on principles from:
- Academic research methodology (qualitative/quantitative/mixed methods)
- The Berkeley Protocol on Digital Open Source Investigations
- Forensic chain of custody and evidence documentation standards

Users range from beginners learning both Blender and methodology, to experienced practitioners seeking to formalize their documentation practices.

## Important Notes

- **Don't overwhelm**: The collapsible format is specifically chosen so readers can learn the technique first, then expand for documentation guidance when ready.
- **Be consistent**: Use the same section headings and structure every time for predictability across pages.
- **Stay tool-agnostic where possible**: While referencing specific Blender tools, emphasize principles that apply regardless of which exact tool is used.
- **Connect to the broader framework**: This snippet should feel like a practical application of the methodology page's principles, not standalone advice.

## Example Page Types This Applies To

Apply this to pages about:
- ✅ Specific tools (fSpy, Sun Position, motion tracking)
- ✅ Techniques (camera calibration, photogrammetry, lighting simulation)
- ✅ Measurement and analysis processes
- ✅ Add-ons that generate data used as evidence

Don't apply to pages about:
- ❌ Basic UI navigation
- ❌ General Blender concepts covered elsewhere
- ❌ Purely artistic techniques without investigative application

---

## Your Current Task

Create the "Documentation for Methodology" section for the page about **[TECHNIQUE/TOOL NAME]**.

The page currently covers: [BRIEF 1-2 SENTENCE SUMMARY OF WHAT THE PAGE TEACHES]

Generate the complete markdown for the collapsible section, ensuring it:
1. Uses the exact structure shown above
2. Provides specific, actionable documentation guidance
3. Includes a realistic example methodology statement
4. Fits the tone and technical level of this knowledge base
5. Is formatted correctly for Docusaurus