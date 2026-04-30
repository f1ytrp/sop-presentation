/**
 * Expanded Slide Content Data — authoritative source for all slide text and sequencing.
 * Topic: Role of Non-coding DNA in Evolution
 *
 * This file is intentionally content-first:
 * - slide order stays stable
 * - text is expanded for seminar-level explanation
 * - layout variety is used to reduce monotony
 * - diagrams are reserved as placeholders
 */

const slides = [
  /* ===== 1. Title ===== */
  {
    id: 'title',
    layout: 'title',
    sectionTag: 'Seminar Presentation',
    title: 'From Genomic Dark Matter to Evolutionary Innovation',
    subtitle: 'Role of Non-coding DNA in Evolution',
    meta: 'Aaditya Nair · Muskan Vikas Bhagotra | Molecular Biology & Genomics',
    diagram: { type: 'inline', label: 'Title Artwork: DNA Helix', imageUrl: '/assets/title_artwork.png' },
  },

  /* ===== 2. Why This Topic Matters — SPOTLIGHT ===== */
  {
    id: 'why-it-matters',
    layout: 'spotlight',
    sectionTag: 'Introduction',
    statement: '98% of the human genome is non-coding DNA — once dismissed as "junk," now understood as the control architecture of life.',
    support: 'Non-coding DNA contains the regulatory information that controls gene activity across time and tissue. According to ENCODE, ~80% of the genome shows biochemical activity. The central question is not just what genes exist, but how their expression is controlled.',
    callout: { icon: '🧬', text: 'Small regulatory shifts in non-coding DNA drive large phenotypic effects and evolutionary innovation.' },
    diagram: { type: 'strip', label: 'Genome Composition: Coding vs Non-coding', imageUrl: '/assets/genome_composition.png' },
  },

  /* ===== 3. What Is Non-coding DNA? — FEATURE GRID ===== */
  {
    id: 'what-is-ncdna',
    layout: 'feature-grid',
    sectionTag: 'Definition',
    title: 'What Is Non-coding DNA?',
    subtitle: 'DNA that does not encode protein — but controls when, where, and how strongly genes are expressed.',
    features: [
      { icon: '⬆', label: 'Promoters', desc: 'Initiate transcription at the right place and time' },
      { icon: '🔗', label: 'Enhancers', desc: 'Boost gene expression from distal positions' },
      { icon: '🔇', label: 'Silencers', desc: 'Repress transcription and compact chromatin' },
      { icon: '🛡', label: 'Insulators', desc: 'Block cross-talk between regulatory domains' },
      { icon: '🧵', label: 'ncRNAs', desc: 'RNA-level regulators of gene expression' },
      { icon: '🔀', label: 'Transposable Elements', desc: 'Mobile DNA that rewires regulatory networks' },
    ],
  },

  /* ===== 4. Human Genome Composition — STATS ===== */
  {
    id: 'genome-composition',
    layout: 'stats',
    sectionTag: 'Scale',
    title: 'The Human Genome Composition',
    subtitle: 'Genome size alone does not explain complexity; regulatory architecture matters more.',
    stats: [
      { value: '~1.5%', label: 'Protein-coding DNA' },
      { value: '~26%', label: 'Introns & UTRs' },
      { value: '~45%', label: 'Transposable elements' },
      { value: '~15%', label: 'Regulatory Elements' },
    ],
    note: '"What was once called \'Junk DNA\' is now the control center of life." The non-coding fraction carries instructions for regulatory control, chromatin organization, and transcriptional timing.',
  },

  /* ===== 5. Thesis — FLOW ===== */
  {
    id: 'thesis',
    layout: 'flow',
    sectionTag: 'Central Thesis',
    title: 'The Big Idea',
    bullets: [
      'Evolution is not only changes in proteins — regulatory change is a primary source of evolutionary innovation.',
      'Non-coding mutations drive phenotypic diversity by altering gene expression programs while avoiding damage to core protein function.',
      'The regulatory layer defines cell identity and enables complex multicellular development.',
      'Old networks are rewired for new functions, driving speciation and adaptation.',
      'Regulatory mutations underlie human disease, making the non-coding genome the next frontier of medicine.',
    ],
    flowNodes: ['Non-coding DNA', 'Gene Regulation', 'Phenotypic Diversity', 'Evolutionary Innovation'],
  },

  /* ===== 6. Regulatory Toolkit — SECTION ===== */
  {
    id: 'regulatory-toolkit',
    layout: 'section',
    sectionTag: 'Part I',
    title: 'The Regulatory Toolkit',
    subtitle: 'Promoters · Enhancers · Silencers · Insulators',
  },

  /* ===== 7. Promoters — SPLIT PANEL ===== */
  {
    id: 'promoters',
    layout: 'split',
    sectionTag: 'Promoters',
    title: 'Promoters — The Starting Point of Transcription',
    bullets: [
      'Promoters are upstream DNA regions that act as docking sites for RNA Polymerase II and General Transcription Factors (GTFs).',
      'They define where transcription begins and orient the machinery correctly.',
      'Not a passive on-switch — they actively integrate signals from multiple enhancers simultaneously via chromatin looping.',
      'They control transcription bursting, pausing, and overall efficiency.',
      'Promoter architecture encodes regulatory logic that defines complete developmental programs.',
    ],
    diagram: { type: 'right', label: 'Promoter Schematic & Pre-Initiation Complex', imageUrl: '/assets/promoter_schematic.png' },
  },

  /* ===== 8. Core Promoter Architecture — STEPS ===== */
  {
    id: 'promoter-architecture',
    layout: 'steps',
    sectionTag: 'Promoters',
    title: 'Core Promoter Architecture',
    steps: [
      'The TATA-box (–31 to –24 bp) binds TBP (TFIID) to orient the Pre-Initiation Complex (PIC) and facilitate DNA melting.',
      'The Initiator (Inr) motif (–3 to +3 bp) marks the Transcription Start Site (TSS) for a precise start point.',
      'The DPE motif (+28 to +33 bp) controls developmental gene expression (e.g., Hox gene patterning).',
      'The TCT Motif (–2 to +6 bp) is a specialized element dedicated to ribosomal protein gene regulation.',
      'Small sequence changes in these motifs can profoundly alter timing, strength, and tissue-specificity of gene expression.',
    ],
  },

  /* ===== 9. Types of Promoters — COMPARISON ===== */
  {
    id: 'promoter-types',
    layout: 'comparison',
    sectionTag: 'Promoters',
    title: 'Types of Promoters',
    cards: [
      { title: 'Constitutive', body: 'Active in many tissues; maintain steady expression.\n\n• Active across virtually all tissue types.\n• Drive continuous, high-level gene expression.\n• Often associated with housekeeping genes.\n• Use dispersed architecture with CpG islands.\n\nExamples: CaMV 35S (plant), CMV (mammalian)' },
      { title: 'Tissue-specific', body: 'Active only in selected tissues for spatial precision.\n\n• Activator-driven: limited TFs activate gene (e.g., liver HNF4α).\n• Repressor-driven: local repressors silence broad activators (e.g., NRSE).\n• Epigenetic Control: DNA methylation locks silent states.\n\nExample: MaEXPA1 (banana fruit-specific)' },
      { title: 'Inducible', body: 'Turn on only in response to a signal for temporal control.\n\n• Chemical: Tet-ON/OFF, Steroids.\n• Environmental: Heat-shock (hsp70), Pathogen/wound-response.\n• Optogenetic: Toggle via light (660 nm), non-invasive.\n\nAdvantage: Absolute temporal control like a motion-sensor light.' },
    ],
  },

  /* ===== 10. Focused vs Dispersed — TWO-COL ===== */
  {
    id: 'promoter-variants',
    layout: 'two-col',
    sectionTag: 'Promoters',
    title: 'Focused vs Dispersed Promoters',
    bullets: [
      'Focused (Sharp) promoters have a single, well-defined transcription start site.',
      'They contain fixed-position motifs (TATA, DPE) with strict spacing, typical for tightly regulated developmental genes.',
      'Dispersed (Broad) promoters initiate transcription over a 50–100 bp region and lack rigid sequence motifs.',
      'Dispersed promoters are common in housekeeping genes requiring steady output and often overlap with CpG islands.',
      'Vertebrate genomes heavily feature dispersed promoters to provide flexible initiation platforms.',
    ],
    diagram: { type: 'right', label: 'Focused vs Dispersed Promoters', imageUrl: '/assets/promoter_variants.png' },
  },

  /* ===== 11. Divergent Transcription — SPOTLIGHT ===== */
  {
    id: 'divergent-transcription',
    layout: 'spotlight',
    sectionTag: 'Promoters',
    statement: 'Many promoters fire in both directions — revealing hidden complexity in transcription initiation.',
    support: 'Promoters orient transcription in the correct direction, but many also initiate a reverse transcript (Upstream Antisense RNAs / uaRNAs) that is usually short and rapidly degraded by the nuclear exosome. This proves the default ground state of open chromatin is bidirectional initiation.',
    callout: { icon: '↔', text: 'The promoter\'s primary job is stabilizing the correct direction over background noise.' },
  },

  /* ===== 12. Enhancers — SECTION ===== */
  {
    id: 'enhancers-section',
    layout: 'section',
    sectionTag: 'Part II',
    title: 'Enhancers',
    subtitle: 'Long-range Regulators of Gene Expression',
  },

  /* ===== 13. Enhancers — TWO-COL ===== */
  {
    id: 'enhancers',
    layout: 'two-col',
    sectionTag: 'Enhancers',
    title: 'Enhancers — Long-range Regulators',
    bullets: [
      'Short non-coding DNA sequences (~200–500 bp) that act as "volume knobs" for gene expression output.',
      'Act independently of orientation and can function over hundreds of kilobases away.',
      'Pioneer factors (e.g., FoxA1) first open compacted chromatin at the enhancer.',
      'They act through 3D chromatin looping that brings the distal DNA into contact with target promoters.',
      'Transcription factors, Cohesin, and the Mediator complex stabilize this loop and recruit RNA Pol II.',
    ],
    diagram: { type: 'right', label: 'Enhancer-Promoter Looping', imageUrl: '/assets/enhancer_looping.png' },
  },

  /* ===== 14. Enhancer Types — COMPARISON ===== */
  {
    id: 'enhancer-types',
    layout: 'comparison',
    sectionTag: 'Enhancers',
    title: 'Types of Enhancers',
    cards: [
      { title: 'Typical Enhancers', body: 'Standard regulatory elements, typically ~200–500 bp long.\n\n• Support cell-specific gene regulation.\n• Form a single TF cluster contact with target promoter.\n• Example: Alpha-globin enhancer (RBC-specific hemoglobin).' },
      { title: 'Super-enhancers', body: 'Large clusters of typical enhancers spanning tens of kilobases.\n\n• Densely occupied by TFs.\n• Drive exceptionally high expression of cell identity genes (e.g., Oct4).\n• Often hijacked by cancer cells to drive oncogenes.' },
      { title: 'Poised Enhancers', body: 'Epigenetically primed before activation in stem cells.\n\n• Carry H3K4me1 (permissive) but lack H3K27ac (active).\n• Ready to respond when signals trigger TF recruitment.\n• Decommissioned by LSD1-NuRD complex upon cell exit.' },
      { title: 'eRNA Transcripts', body: 'Short, unstable, non-polyadenylated RNAs from active enhancers.\n\n• Indicate that enhancers actively recruit Pol II.\n• Their presence is a gold standard marker of enhancer activity.\n• eRNA transcription mirrors the looping state.' },
    ],
  },

  /* ===== 15. Enhancer-Promoter Compatibility — STACKED ===== */
  {
    id: 'enhancer-promoter-compat',
    layout: 'stacked',
    sectionTag: 'Enhancers',
    title: 'Enhancer-Promoter Compatibility',
    items: [
      { icon: '✓', title: 'Selective Pairing', body: 'Enhancers do NOT activate all promoters equally. Promoter sequence and architecture determine which enhancers it will respond to.' },
      { icon: '🎯', title: 'TATA-Specific Enhancers', body: 'Prefer promoters with a canonical TATA box sequence and are often incompatible with DPE-containing promoters.' },
      { icon: '🔬', title: 'DPE-Specific Enhancers', body: 'Prefer promoters with the Downstream Promoter Element (DPE). Important in developmental patterning, such as Drosophila Hox gene expression.' },
      { icon: '🧩', title: 'Precision', body: 'This selective compatibility creates transcriptional precision, explaining why different genes respond to different enhancers even in the same cell.' },
    ],
  },

  /* ===== 16. Silencers & Insulators — SECTION ===== */
  {
    id: 'silencers-insulators-section',
    layout: 'section',
    sectionTag: 'Part III',
    title: 'Silencers & Insulators',
    subtitle: 'Negative Regulation and Boundary Control',
  },

  /* ===== 17. Silencers — SPLIT ===== */
  {
    id: 'silencers',
    layout: 'split',
    sectionTag: 'Silencers',
    title: 'Silencers — Negative Regulation',
    bullets: [
      'Silencers are regulatory DNA sequences that reduce or repress transcription.',
      'They physically block RNA Polymerase or recruit sequence-specific repressor proteins.',
      'They recruit Histone Deacetylases (HDACs) or Polycomb Repressive Complexes (PRC1/2) to compact chromatin.',
      'They ensure tissue-specific silencing of inappropriate genes and maintain boundaries of silent chromatin.',
      'Defects in silencer elements are linked to severe developmental disorders and cancer.',
    ],
    diagram: { type: 'right', label: 'Silencer Repression Complex', imageUrl: '/assets/silencers_repressor.png' },
  },

  /* ===== 18. Insulators — TWO-COL ===== */
  {
    id: 'insulators',
    layout: 'two-col',
    sectionTag: 'Insulators',
    title: 'Insulators — Boundary Control',
    gridVariant: 'wide-left',
    bullets: [
      'Insulators organize the 3D genome into Topologically Associating Domains (TADs).',
      'Enhancer-Blocking Activity: Prevent an enhancer from activating the wrong promoter when positioned between them.',
      'Barrier Activity: Stop the spread of silencing marks (heterochromatin) into active chromatin regions.',
      'CTCF and Cohesin are the primary vertebrate proteins that bind and stabilize these loop boundaries.',
      'Disruption of CTCF sites breaks TAD boundaries, frequently causing limb malformations and cancer.',
    ],
    diagram: { type: 'right', label: 'CTCF Boundaries & TADs', imageUrl: '/assets/insulators_ctcf.png' },
  },

  /* ===== 19. ncRNAs — SECTION ===== */
  {
    id: 'ncrna-section',
    layout: 'section',
    sectionTag: 'Part IV',
    title: 'Non-coding RNAs',
    subtitle: 'The RNA Regulatory Layer',
  },

  /* ===== 20. ncRNA Overview — SPOTLIGHT ===== */
  {
    id: 'ncrna-overview',
    layout: 'spotlight',
    sectionTag: 'ncRNAs',
    statement: 'RNA is not only a messenger — it can itself be a regulator of gene expression.',
    support: 'ncRNAs fine-tune expression at transcriptional and post-transcriptional levels. They range from highly conserved small RNAs (miRNA) to less conserved long RNAs (lncRNA) with complex 3D structures. Different ncRNA classes act through different mechanisms to add flexibility, specificity, and layered control to the genome.',
    diagram: { type: 'full', label: 'ncRNA Regulatory Network', imageUrl: '/assets/ncrna_network.png' },
  },

  /* ===== 21. ncRNA Classes — COMPARISON ===== */
  {
    id: 'ncrna-classes',
    layout: 'comparison',
    sectionTag: 'ncRNAs',
    title: 'Classes of Non-coding RNAs',
    cards: [
      { title: 'MicroRNAs (miRNA)', body: 'Small (~22nt) RNAs processed by Dicer/Drosha. The guide strand in RISC scans mRNA 3′ UTRs to trigger cleavage or translational repression. One miRNA can regulate hundreds of genes.' },
      { title: 'Long ncRNAs (lncRNA)', body: 'Transcripts >200 nt with complex 3D structures. They act as scaffolds (e.g., assembling chromatin modifiers like HOTAIR), guides (XIST), or decoys to sequester TFs.' },
      { title: 'Circular RNAs (circRNA)', body: 'Form covalently closed loops via back-splicing. Exceptionally stable (no free ends). Act as miRNA "sponges" to sequester miRNAs and prevent target silencing.' },
      { title: 'siRNAs & piRNAs', body: 'Small silencing RNAs that form the genome\'s immune system. piRNAs work with PIWI proteins to suppress transposon expression and protect germline stability.' },
    ],
  },

  /* ===== 22. ncRNAs and Evolution — STACKED ===== */
  {
    id: 'ncrna-evolution',
    layout: 'stacked',
    sectionTag: 'ncRNAs',
    title: 'ncRNAs and Evolutionary Adaptation',
    items: [
      { icon: '🔄', title: 'Network Rewiring', body: 'ncRNAs rapidly rewire gene regulatory networks without altering protein-coding sequences, enabling systemic phenotypic change.' },
      { icon: '🎛', title: 'Master Tuners', body: 'A single new miRNA can shift the expression of hundreds of target genes, creating a large effect with a small genomic footprint.' },
      { icon: '🌱', title: 'Rapid Evolution', body: 'lncRNAs evolve faster than protein-coding genes, allowing regulatory innovation to accumulate rapidly in a lineage.' },
      { icon: '💡', title: 'Fine-grained Control', body: 'ncRNA-based regulation tunes expression levels rather than strictly switching genes on or off, providing fine-grained adaptive control.' },
    ],
  },

  /* ===== 23. Transposable Elements — SECTION ===== */
  {
    id: 'te-section',
    layout: 'section',
    sectionTag: 'Part V',
    title: 'Transposable Elements & Pseudogenes',
    subtitle: 'Genomic Parasites Turned Innovators',
  },

  /* ===== 24. Transposable Elements — SPLIT ===== */
  {
    id: 'transposable-elements',
    layout: 'split',
    sectionTag: 'Transposable Elements',
    title: 'Transposable Elements — Jumping Genes',
    bullets: [
      'Transposable elements (TEs) are DNA sequences that move within the genome, comprising ~45% of human DNA.',
      'Class I (Retrotransposons): Move via copy-and-paste using an RNA intermediate (e.g., LINE-1, primate-specific Alu elements).',
      'Class II (DNA Transposons): Move via cut-and-paste using transposase enzymes.',
      'Historically dismissed as "jumping genes," they are now recognized as obligate genomic symbionts.',
      'They carry regulatory sequences and distribute transcription factor binding sites across the genome.',
    ],
    diagram: { type: 'right', label: 'Mobile DNA Elements', imageUrl: '/assets/mobile_dna.png' },
  },

  /* ===== 25. Evolutionary Role of TEs — STEPS ===== */
  {
    id: 'te-evolution',
    layout: 'steps',
    sectionTag: 'Transposable Elements',
    title: 'Evolutionary Role of Transposable Elements',
    steps: [
      'TEs carry TF binding sites that create new promoters or enhancers upon insertion (~25% of human TF sites derive from TEs).',
      'En masse TE insertions can rapidly rewire transcription networks, co-regulating groups of genes simultaneously.',
      'Species-specific TE expansions contribute heavily to lineage-specific regulatory novelty.',
      'TEs contribute to exon shuffling and occasionally donate functional genes (e.g., Syncytin for placenta development).',
      'The host genome controls TEs via epigenetics (piRNAs, methylation); failure of this control leads to instability.',
    ],
  },

  /* ===== 26. Pseudogenes — TWO-COL ===== */
  {
    id: 'pseudogenes',
    layout: 'two-col',
    sectionTag: 'Genome Fossils',
    title: 'Pseudogenes',
    bullets: [
      'Pseudogenes are gene copies that have lost protein-coding ability through mutation.',
      'They may arise through duplication or retrotransposition.',
      'Although once considered dead, many pseudogenes are still transcribed.',
      'Some can act as regulatory RNAs and influence their parent genes.',
      'They are genomic fossils that can still participate in regulation.',
    ],
    diagram: { type: 'right', label: 'Pseudogene Regulation', imageUrl: '/assets/pseudogene_regulation.png' },
  },

  /* ===== 27. 3D Genome & Epigenetics — SECTION ===== */
  {
    id: 'genome-3d-section',
    layout: 'section',
    sectionTag: 'Part VI',
    title: '3D Genome Organization & Epigenetics',
    subtitle: 'Spatial Architecture and Chromatin Memory',
  },

  /* ===== 28. Epigenetic Memory — STACKED ===== */
  {
    id: 'epigenetic-memory',
    layout: 'stacked',
    sectionTag: 'Epigenetics',
    title: 'Epigenetic Memory',
    items: [
      { icon: '🔒', title: 'Chromatin Marks', body: 'Cells remember their identity through stable modifications like H3K27ac (active) and H3K27me3 (Polycomb silencing).' },
      { icon: '🧪', title: 'DNA Methylation', body: 'Adding a methyl group to cytosine (5mC) typically represses transcription, maintained through cell division by DNMT1.' },
      { icon: '🔁', title: 'Cellular Memory', body: 'Epigenetic marks allow cells to remember their lineage identity through division, providing robustness to development.' },
      { icon: '🧠', title: 'Bivalency', body: 'In stem cells, bivalent promoters carry both active (H3K4me3) and repressive marks, keeping genes poised for rapid activation.' },
      { icon: '🤝', title: 'Integration', body: 'Epigenetics works alongside non-coding regulatory DNA to lock in the proper enhancer-promoter communication networks.' },
    ],
  },

  /* ===== 29. Development — TIMELINE ===== */
  {
    id: 'development',
    layout: 'timeline',
    sectionTag: 'Development',
    title: 'Development and Differentiation',
    stages: [
      { icon: '🟢', label: 'Stem Cell', desc: 'Open, flexible chromatin with poised enhancers (H3K4me1) and pluripotency TFs (OCT4/SOX2)' },
      { icon: '🔀', label: 'Commitment', desc: 'Lineage-specific TFs activate; specific enhancers gain H3K27ac while stem enhancers are decommissioned' },
      { icon: '🔷', label: 'Organogenesis', desc: 'Stable enhancer-promoter contacts established within TAD boundaries; cell fate narrows' },
      { icon: '🔶', label: 'Mature Tissue', desc: 'Highly efficient, specific gene expression programs are locked in by stable epigenetic memory' },
    ],
  },

  /* ===== 30. Orchestrating Development — SPOTLIGHT ===== */
  {
    id: 'orchestrating-dev',
    layout: 'spotlight',
    sectionTag: 'Development',
    statement: 'Development is an information problem as much as a biochemical one.',
    support: 'Promoters, enhancers, and epigenetics work together as a coordinated regulatory system. Different genes turn on at different developmental stages and in different tissues. This drives organ formation, body patterning, and cell specialization.',
  },

  /* ===== 31. Conservation & Evolution — SECTION ===== */
  {
    id: 'conservation-section',
    layout: 'section',
    sectionTag: 'Part VII',
    title: 'Conservation, Evolution & Disease',
    subtitle: 'From Constraint to Innovation to Clinical Relevance',
  },

  /* ===== 32. Conservation vs Variation — SPLIT ===== */
  {
    id: 'conservation-variation',
    layout: 'split',
    sectionTag: 'Evolution',
    title: 'Conservation versus Variation',
    bullets: [
      'Ultraconserved Elements (UCEs) are identical across species (e.g., human to zebrafish), signaling extreme functional constraint.',
      'Conversely, many regulatory enhancers evolve rapidly and provide the substrate for evolutionary innovation.',
      'Species-specific TE insertions create novel enhancers unique to a lineage, driving divergence.',
      'Variation in regulatory sequences explains much of the phenotypic diversity between closely related species.',
      'The regulatory non-coding genome evolves much faster than the protein-coding genome.',
    ],
    diagram: { type: 'right', label: 'Sequence Conservation vs Variation', imageUrl: '/assets/conservation_variation.png' },
  },

  /* ===== 33. Why ncDNA Matters — SPOTLIGHT ===== */
  {
    id: 'ncdna-evolution',
    layout: 'spotlight',
    sectionTag: 'Evolution',
    statement: 'Small regulatory changes can create large phenotypic effects — without damaging core protein function.',
    support: 'Regulatory mutations are often less lethal than coding mutations, making them a major source of adaptation and species differences. This is the central evolutionary message of the seminar.',
    callout: { icon: '🔑', text: 'Evolution works by rewiring gene control, not just inventing new genes.' },
  },

  /* ===== 34. Regulatory Rewiring — TWO-COL ===== */
  {
    id: 'regulatory-rewiring',
    layout: 'two-col',
    sectionTag: 'Evolution',
    title: 'Regulatory Rewiring',
    bullets: [
      'Humans and chimps differ <2% in protein sequence; regulatory divergence explains our morphological differences.',
      'New enhancer-promoter contacts wire genes into new regulatory modules, altering when and where genes activate.',
      'Small non-coding mutations can shift developmental timing (heterochrony) with dramatic phenotypic effects.',
      'Regulatory mutations tune expression without disrupting the core protein machinery, making them highly "evolvable."',
    ],
    diagram: { type: 'right', label: 'Network Rewiring Map', imageUrl: '/assets/regulatory_rewiring.png' },
  },

  /* ===== 35. ENCODE — STATS ===== */
  {
    id: 'encode',
    layout: 'stats',
    sectionTag: 'Evidence',
    title: 'The ENCODE Project',
    subtitle: 'Mapping function across the human genome at unprecedented scale.',
    stats: [
      { value: '80%', label: 'Genome with biochemical activity' },
      { value: '400+', label: 'Cell types analyzed' },
      { value: '≈4M', label: 'Regulatory elements mapped' },
    ],
    note: 'ENCODE provided important evidence that non-coding DNA is active at genomic scale, helping move biology beyond the "junk DNA" paradigm.',
  },

  /* ===== 36. Disease — STACKED ===== */
  {
    id: 'disease',
    layout: 'stacked',
    sectionTag: 'Disease',
    title: 'Disease Relevance',
    items: [
      { icon: '⚠', title: 'Regulatory Mutations', body: 'Mutations in non-coding DNA disrupt regulation. For example, TERT promoter mutations are the most common non-coding cancer mutations.' },
      { icon: '🔬', title: 'Cancer & Development', body: 'Cancer cells hijack super-enhancers to drive oncogene expression, while TAD boundary disruptions cause developmental malformations.' },
      { icon: '📊', title: 'GWAS Variants', body: '>90% of GWAS-identified disease-associated SNPs fall in non-coding regions, affecting enhancers, promoters, and insulators.' },
      { icon: '💊', title: 'Therapeutic Targets', body: 'CRISPR editing of non-coding elements (e.g., the BCL11A enhancer for sickle cell disease) is a revolutionary frontier in precision medicine.' },
    ],
  },

  /* ===== 37. Final Synthesis — FLOW ===== */
  {
    id: 'synthesis',
    layout: 'flow',
    sectionTag: 'Synthesis',
    title: 'Final Synthesis',
    bullets: [
      'Non-coding DNA controls regulation.',
      'Regulation shapes phenotype.',
      'Phenotype is the basis of natural selection.',
      'Therefore, non-coding DNA is central to evolutionary change.',
    ],
    flowNodes: ['Non-coding DNA', 'Regulation', 'Phenotype', 'Natural Selection', 'Evolution'],
  },

  /* ===== 38. Conclusion — SINGLE ===== */
  {
    id: 'conclusion',
    layout: 'single',
    sectionTag: 'Conclusion',
    title: 'Conclusion',
    bullets: [
      'Non-coding DNA is not junk — it is the regulatory architecture of the genome.',
      'Promoters, enhancers, silencers, and insulators form an integrated toolkit for gene expression.',
      'ncRNAs and transposable elements add dynamic regulatory innovation.',
      'Regulatory change drives phenotypic diversity and evolutionary adaptation.',
    ],
    diagram: { type: 'full', label: 'Evolutionary Branch Artwork', imageUrl: '/assets/conclusion_artwork.png' },
  },

  /* ===== 39. Thank You ===== */
  {
    id: 'thank-you',
    layout: 'closing',
    title: 'Thank You',
    subtitle: 'Questions & Discussion',
  },
];

export default slides;
