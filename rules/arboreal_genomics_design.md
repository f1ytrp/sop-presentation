# Arboreal Genomics — Design System

## Purpose
This document defines the visual design language for a seminar presentation built in React. It covers only presentation style, layout, color, typography, motion, and visual atmosphere. It does not define slide content.

## Design Direction
The presentation should feel like a quiet biotech terminal in a misty forest research station. The tone is scientific, immersive, restrained, and elegant.

The visual identity should combine:
- organic depth
- molecular precision
- academic seriousness
- subtle atmospheric motion

The design should support a seminar on non-coding DNA and evolution without becoming decorative or distracting.

## Core Visual Metaphor
Use the following metaphor consistently in the UI:
- hidden roots = non-coding regulatory DNA
- branches = evolutionary divergence
- loops = regulatory interactions
- canopy = phenotype
- growth rings = developmental layers over time

This metaphor should appear through layout, subtle line art, and background structure rather than through literal illustrations.

## Color Palette
Keep the current palette. It is well matched to the topic.

### Primary Colors
- Deep Background: `#15282F`
- Surface / Card: `#114643`
- Primary Accent: `#068176`
- Secondary Accent: `#A2B568`
- Muted Forest: `#697431`
- High-Contrast Text: `#E0E7E9`

### Usage Rules
- Use `#15282F` for the main canvas background.
- Use `#114643` for frosted panels, cards, and content containers.
- Use `#068176` for emphasis, active highlights, and scientific focal points.
- Use `#A2B568` for section headers, diagram labels, and evolutionary accents.
- Use `#697431` sparingly for muted structural elements and secondary borders.
- Use `#E0E7E9` for all primary readable text.

### Accessibility Rule
Text must remain highly legible on every slide. If a background image or texture is used, it must be darkened enough to preserve contrast.

## Typography
Use modern sans-serif typography with a technical feel.

### Titles
- Suggested fonts: `Syne`, `Montserrat`, or `Poppins`
- Weight: 700–800
- Style: clean, confident, minimal

### Body Text
- Suggested fonts: `Inter`, `Source Sans 3`, or `IBM Plex Sans`
- Weight: 400–500
- Style: readable and neutral

### Technical Labels / Sequence Data
- Suggested fonts: `JetBrains Mono` or `IBM Plex Mono`
- Use for genomic coordinates, motifs, short code labels, and figure annotations

### Type Hierarchy
- Titles should be short and prominent
- Section headers should be compact
- Body text should be sparse and easy to scan
- Never let typography become dense enough to look like notes

## Layout Principles
The deck should use a consistent widescreen format and a reusable layout system.

### Preferred Layouts
- title / section divider
- two-column explanation
- diagram + annotation
- comparison table
- progression / timeline
- synthesis slide with central visual

### Spacing Rules
- keep generous margins
- avoid crowded center layouts
- maintain one clear visual focal point per slide
- use cards instead of large text blocks

### Grid Behavior
- align all content to an underlying grid
- keep edges consistent across slides
- avoid arbitrary placement of text blocks

## Card and Panel Style
Use frosted glass panels for the main reading areas.

### Base Card Style
```css
background: rgba(21, 40, 47, 0.72);
backdrop-filter: blur(12px);
border: 1px solid rgba(162, 181, 104, 0.18);
border-radius: 18px;
box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
```

### Card Rules
- cards should feel translucent, not opaque
- use thin borders
- preserve contrast for content
- avoid multiple competing panels on the same slide unless necessary

## Background Style
The background should feel atmospheric but controlled.

### Default Background
- a deep teal or forest-teal gradient
- subtle noise / grain
- optional soft blurred organic shapes
- very low-opacity line textures

### Background Rules
- background should never overpower content
- decorative background elements must stay quiet
- avoid bright patterns behind text
- the background should support the scientific tone, not replace it

## Decorative Motifs
Use sparingly.

### Acceptable Motifs
- thin DNA helix line art
- branch-like evolutionary lines
- faint genomic tracks
- subtle node-and-link shapes
- low-opacity sequence text textures

### Placement Guidance
- use corners or edges, not the center
- keep decorative motifs thin and minimal
- avoid cluttering content zones

## Motion Language
Motion should be subtle and slow.

### Allowed Motion
- gentle fade in
- slight zoom in
- soft floating of corner motifs
- smooth line drawing for diagrams
- light emphasis pulses on key terms

### Not Allowed
- bouncy motion
- aggressive parallax
- fast transitions
- animation on every object

### Slide Transition
Use a calm microscope-like transition:
- scale from `0.96` to `1.00`
- fade from opacity `0` to `1`

## Visual Tone Rules
The slides should feel:
- scholarly
- precise
- immersive
- modern
- restrained

The slides should not feel:
- playful
- overly futuristic
- cartoonish
- busy
- poster-like

## Consistency Rules
- use the same color family throughout
- keep the same card shape and border language
- keep typography stable across slides
- reuse diagram styling
- maintain visual continuity from first slide to last slide

## Output Expectations
The final presentation should look like a coherent scientific series rather than separate slides assembled independently.
