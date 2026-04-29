# Arboreal Genomics — Diagram Integration Guide

## Purpose
This document explains how diagrams should be added after the text-based slide structure exists. It is meant for later integration, not for defining the presentation content.

## Core Idea
Slides should be built so that diagrams can be inserted without breaking layout.

The safest approach is to reserve diagram space inside each slide layout from the beginning.

## How to Structure Diagram-Ready Slides

### Option 1: Dedicated Diagram Slot
Use a slide layout with:
- left text panel
- right diagram panel

This is best for:
- promoters
- enhancers
- 3D genome
- epigenetics
- transposable elements

### Option 2: Full-Width Diagram Slide
Use one large central diagram with short annotations around it.

This is best for:
- comparative mechanisms
- conceptual models
- final synthesis slides
- timelines

### Option 3: Inline Small Diagram
Use a small visual embedded inside a card.

This is best for:
- simple motifs
- small regulatory icons
- minor supporting illustrations

## Placeholder Strategy
When generating the slide deck, leave stable placeholder areas for later diagrams.

Example placeholder labels:
- `diagram_slot_main`
- `diagram_slot_right`
- `diagram_slot_full`
- `figure_caption_slot`

These placeholders should be visible in the code structure even if no diagram is added yet.

## Diagram Types Likely Needed
The following diagrams are especially useful for this project:
- promoter architecture
- enhancer-promoter looping
- silencer and insulator boundaries
- ncRNA interaction network
- transposable element movement
- TAD organization
- epigenetic chromatin marks
- development progression
- conservation vs innovation comparison
- evolutionary rewiring summary

## Later Diagram Insertion Workflow
When a new diagram is needed later:
1. identify the slide where the diagram belongs
2. decide whether it is a right-panel, center-panel, or full-slide figure
3. insert the diagram into the reserved placeholder
4. keep the slide title and text unchanged unless the diagram requires small spacing adjustments
5. add a short caption line explaining the biological point
6. keep the diagram style consistent with the existing palette and line language

## Diagram Style Rules
- thin-line vector style
- limited colors from the palette
- minimal labels
- scientific clarity over decorative detail
- no heavy shadows or complex textures inside figures
- use the same visual language across all diagrams

## Caption Rule
Every diagram should have one short caption:
- what the diagram shows
- why it matters biologically
- how it connects to evolution or regulation

## Recommended Diagram Behavior in React
If the slides are built as React components, each slide can accept a diagram component as a prop or slot.

Preferred pattern:
- text is rendered independently
- diagram is rendered in a fixed container
- caption is rendered below or beside the diagram
- missing diagrams should not break the layout

## Safe Diagram Replacement Rule
If a later diagram is added:
- do not redesign the whole slide
- replace only the reserved visual area
- preserve spacing, font sizes, and card structure

## When to Use a Diagram vs Not
Use a diagram when:
- the concept is spatial
- the process is mechanistic
- the slide compares structures
- the slide would be unclear with text alone

Do not force a diagram when:
- the slide is already conceptually simple
- the text is enough
- a diagram would add clutter rather than clarity

## Final Recommendation
Design the slide deck with diagram slots from the start, even if the initial version is text-heavy. That makes later diagram insertion easy and keeps the presentation visually coherent.
