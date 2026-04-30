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
    meta: 'Non-coding DNA · Gene Regulation · Phenotypic Diversity · Evolutionary Change',
    diagram: { type: 'inline', label: 'Insert title artwork — DNA helix, root system, or branching genome visual', imageUrl: '/assets/title_artwork.png' },
  },

  /* ===== 2. Why This Topic Matters — SPOTLIGHT ===== */
  {
    id: 'why-it-matters',
    layout: 'spotlight',
    sectionTag: 'Introduction',
    statement: 'Only ~1.5% of the human genome encodes proteins — yet the rest is far from junk.',
    support: 'Non-coding DNA contains the regulatory information that controls gene activity across time and tissue. Its importance becomes clear when we ask how complex organisms arise from similar protein-coding gene sets. The central question is not just what genes exist, but how their expression is controlled.',
    callout: { icon: '🧬', text: 'This large non-coding portion was once dismissed as "junk," but that view is now outdated.' },
    diagram: { type: 'strip', label: 'Insert genome composition graphic — coding vs non-coding proportions', imageUrl: '/assets/genome_composition.png' },
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
      { value: '~45%', label: 'Transposable elements' },
      { value: '~98%', label: 'Non-coding fraction' },
      { value: '20k', label: 'Protein-coding genes' },
    ],
    note: 'The human genome is large partly because it must encode control logic, not only proteins. The non-coding fraction carries instructions for regulatory control, chromatin organization, and transcriptional timing.',
  },

  /* ===== 5. Thesis — FLOW ===== */
  {
    id: 'thesis',
    layout: 'flow',
    sectionTag: 'Central Thesis',
    title: 'The Big Idea',
    bullets: [
      'Evolution is not only changes in proteins.',
      'Changes in regulation are often more important than changes in coding sequence.',
      'Non-coding DNA drives phenotypic diversity by altering gene expression programs.',
      'Regulatory mutation creates evolutionary innovation while preserving core protein function.',
      'This is why non-coding DNA is central to modern evolutionary biology.',
    ],
    flowNodes: ['Non-coding DNA', 'Gene Regulation', 'Developmental Programs', 'Phenotype', 'Evolution'],
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
      'Promoters are upstream DNA regions that recruit RNA polymerase and transcription factors.',
      'They define where transcription begins and help orient the transcription machinery correctly.',
      'Promoters do not make protein themselves; they determine whether the nearby gene is read at all.',
      'Their sequence composition affects strength, precision, and responsiveness to signals.',
      'In this sense, promoters act as active control hubs rather than passive landing pads.',
    ],
    diagram: { type: 'right', label: 'Insert gene track with promoter region highlighted', imageUrl: '/assets/promoter_schematic.png' },
  },

  /* ===== 8. Core Promoter Architecture — STEPS ===== */
  {
    id: 'promoter-architecture',
    layout: 'steps',
    sectionTag: 'Promoters',
    title: 'Core Promoter Architecture',
    steps: [
      'The core promoter lies close to the transcription start site (TSS).',
      'It contains motifs such as the TATA box, Initiator (Inr), and DPE.',
      'These motifs help organize transcription factor binding and pre-initiation complex assembly.',
      'Small motif changes can shift promoter strength, timing, and start-site precision.',
      'Promoter architecture is therefore encoded in sequence, not just in general "location."',
    ],
  },

  /* ===== 9. Types of Promoters — COMPARISON ===== */
  {
    id: 'promoter-types',
    layout: 'comparison',
    sectionTag: 'Promoters',
    title: 'Types of Promoters',
    cards: [
      { title: 'Constitutive', body: 'Active in many tissues and at many times. They maintain steady expression when constant output is needed.' },
      { title: 'Tissue-specific', body: 'Active only in selected tissues. They provide spatial precision and reduce unwanted expression elsewhere.' },
      { title: 'Inducible', body: 'Turn on only in response to a signal. They provide temporal control and flexible environmental responsiveness.' },
    ],
  },

  /* ===== 10. Focused vs Dispersed — TWO-COL ===== */
  {
    id: 'promoter-variants',
    layout: 'two-col',
    sectionTag: 'Promoters',
    title: 'Focused vs Dispersed Promoters',
    bullets: [
      'Focused promoters have a single sharp transcription start site.',
      'Dispersed promoters spread initiation over a broader region.',
      'Focused promoters are common in tightly controlled developmental genes.',
      'Dispersed promoters are common in housekeeping genes that need steady output.',
      'Promoter architecture is matched to biological role.',
    ],
    diagram: { type: 'right', label: 'Insert side-by-side promoter start site comparison', imageUrl: '/assets/promoter_variants.png' },
  },

  /* ===== 11. Divergent Transcription — SPOTLIGHT ===== */
  {
    id: 'divergent-transcription',
    layout: 'spotlight',
    sectionTag: 'Promoters',
    statement: 'Many promoters fire in both directions — revealing hidden complexity in transcription initiation.',
    support: 'Promoters orient transcription in the correct direction, but many also initiate a reverse transcript that is usually short and unstable. This "noise" is not meaningless; it shows that transcription initiation is broader than the final mRNA output.',
    callout: { icon: '↔', text: 'Divergent transcription adds hidden complexity to promoter logic and non-coding regulation.' },
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
      'Enhancers increase transcription from positions that may be far away from the gene they control.',
      'They work independently of orientation, so the same regulatory sequence can function in either direction.',
      'Enhancers are major controllers of tissue specificity and developmental precision.',
      'They act through chromatin looping that brings distal DNA into contact with promoters.',
      'Transcription factors and the Mediator complex help stabilize this long-range communication.',
    ],
    diagram: { type: 'right', label: 'Insert enhancer-promoter looping diagram', imageUrl: '/assets/enhancer_looping.png' },
  },

  /* ===== 14. Enhancer Types — COMPARISON ===== */
  {
    id: 'enhancer-types',
    layout: 'comparison',
    sectionTag: 'Enhancers',
    title: 'Types of Enhancers',
    cards: [
      { title: 'Typical Enhancers', body: 'Standard regulatory elements, often 200–500 bp long. They support cell-specific control and localized activation.' },
      { title: 'Super-enhancers', body: 'Dense enhancer clusters that drive exceptionally high expression of cell identity genes and developmental regulators.' },
      { title: 'Poised Enhancers', body: 'Primed but inactive regions in stem cells. They are ready to respond quickly when differentiation begins.' },
      { title: 'eRNA-associated', body: 'Active enhancers can transcribe short non-coding RNAs. These transcripts mark enhancer activity and state.' },
    ],
  },

  /* ===== 15. Enhancer-Promoter Compatibility — STACKED ===== */
  {
    id: 'enhancer-promoter-compat',
    layout: 'stacked',
    sectionTag: 'Enhancers',
    title: 'Enhancer-Promoter Compatibility',
    items: [
      { icon: '✓', title: 'Selective Pairing', body: 'Not every enhancer activates every promoter. Promoter sequence and architecture influence enhancer response.' },
      { icon: '🎯', title: 'Regulatory Specificity', body: 'This compatibility creates specificity and avoids random activation across the genome.' },
      { icon: '🔬', title: 'Context Dependence', body: 'The same enhancer can behave differently in different genomic contexts, making regulation modular.' },
      { icon: '🧩', title: 'Precision', body: 'Regulatory compatibility is one reason gene control can be precise, tissue-specific, and developmentally timed.' },
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
      'Silencers reduce transcription by recruiting repressor proteins.',
      'They can compact chromatin and make DNA less accessible to transcription machinery.',
      'They help keep inappropriate genes off in the wrong tissue or developmental stage.',
      'Silencers balance enhancer activity and preserve proper expression levels.',
    ],
    diagram: { type: 'right', label: 'Insert repressor binding to DNA schematic', imageUrl: '/assets/silencers_repressor.png' },
  },

  /* ===== 18. Insulators — TWO-COL ===== */
  {
    id: 'insulators',
    layout: 'two-col',
    sectionTag: 'Insulators',
    title: 'Insulators — Boundary Control',
    gridVariant: 'wide-left',
    bullets: [
      'Insulators create regulatory boundaries between genomic domains.',
      'They prevent wrong enhancer–promoter interactions and protect gene specificity.',
      'They can also block the spread of heterochromatin into active regions.',
      'CTCF is a major insulator-binding protein involved in this boundary system.',
      'Insulators help preserve genome organization and regulatory fidelity.',
    ],
    diagram: { type: 'right', label: 'Insert CTCF boundary / domain separation schematic', imageUrl: '/assets/insulators_ctcf.png' },
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
    support: 'ncRNAs fine-tune expression at transcriptional and post-transcriptional levels. They add flexibility, specificity, and additional control layers to the genome. Different ncRNA classes act through different mechanisms, but all contribute to regulation.',
    diagram: { type: 'full', label: 'Insert RNA regulatory network or layered control diagram', imageUrl: '/assets/ncrna_network.png' },
  },

  /* ===== 21. ncRNA Classes — COMPARISON ===== */
  {
    id: 'ncrna-classes',
    layout: 'comparison',
    sectionTag: 'ncRNAs',
    title: 'Classes of Non-coding RNAs',
    cards: [
      { title: 'MicroRNAs', body: 'Small RNAs that bind target mRNAs. They reduce translation or promote degradation and can influence many genes at once.' },
      { title: 'Long ncRNAs', body: 'Longer than 200 nt. They can act as scaffolds, guides, or decoys and often recruit chromatin modifiers.' },
      { title: 'Circular RNAs', body: 'Stable closed loops that can sponge miRNAs. They add another layer of post-transcriptional control.' },
      { title: 'siRNAs & piRNAs', body: 'Small silencing RNAs that help suppress transposons and protect genome stability, especially in germ cells.' },
    ],
  },

  /* ===== 22. ncRNAs and Evolution — STACKED ===== */
  {
    id: 'ncrna-evolution',
    layout: 'stacked',
    sectionTag: 'ncRNAs',
    title: 'ncRNAs and Evolution',
    items: [
      { icon: '🔄', title: 'Network Rewiring', body: 'ncRNAs can rewire regulatory networks without changing protein sequences.' },
      { icon: '🎛', title: 'Subtle Tuning', body: 'They allow subtle tuning that is useful for evolutionary adaptation.' },
      { icon: '🌱', title: 'Flexible Control', body: 'They support flexible gene control across developmental contexts and environmental conditions.' },
      { icon: '💡', title: 'Evolutionary Innovation', body: 'Because they are modular and diverse, they are an important part of evolutionary innovation.' },
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
      'Transposable elements are DNA sequences that can move within the genome.',
      'Retrotransposons use an RNA intermediate and move by copy-and-paste.',
      'DNA transposons move more directly by cut-and-paste mechanisms.',
      'They make up a large fraction of the genome and create sequence variation.',
      'Their mobility makes them powerful agents of genomic change.',
    ],
    diagram: { type: 'right', label: 'Insert mobile DNA element movement diagram', imageUrl: '/assets/mobile_dna.png' },
  },

  /* ===== 25. Evolutionary Role of TEs — STEPS ===== */
  {
    id: 'te-evolution',
    layout: 'steps',
    sectionTag: 'Transposable Elements',
    title: 'Evolutionary Role of Transposable Elements',
    steps: [
      'Transposable elements can create new regulatory sites when they insert near genes.',
      'They can reshape transcription networks by distributing motifs across the genome.',
      'They contribute to genome innovation rather than acting only as parasites.',
      'They add raw material for evolutionary experimentation and regulatory rewiring.',
      'Silencing systems, including piRNAs, help keep their activity under control.',
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
    diagram: { type: 'right', label: 'Insert pseudogene-to-parent gene regulatory schematic', imageUrl: '/assets/pseudogene_regulation.png' },
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
      { icon: '🔒', title: 'Chromatin Marks', body: 'Cells remember their identity through stable chromatin marks.' },
      { icon: '🧪', title: 'DNA Methylation', body: 'DNA methylation and histone modifications help maintain tissue-specific expression.' },
      { icon: '🔁', title: 'Heritable State', body: 'This memory supports stable development and differentiation across cell divisions.' },
      { icon: '🧠', title: 'Memory Layer', body: 'Epigenetic regulation gives the genome a memory-like layer of control.' },
      { icon: '🤝', title: 'Cooperation', body: 'It works alongside non-coding regulatory DNA rather than replacing it.' },
    ],
  },

  /* ===== 29. Development — TIMELINE ===== */
  {
    id: 'development',
    layout: 'timeline',
    sectionTag: 'Development',
    title: 'Development and Differentiation',
    stages: [
      { icon: '🟢', label: 'Stem Cell', desc: 'Open, flexible chromatin with broad developmental potential' },
      { icon: '🔀', label: 'Commitment', desc: 'Lineage-specific enhancers begin to activate' },
      { icon: '🔷', label: 'Differentiation', desc: 'Regulatory programs progressively narrow cell fate' },
      { icon: '🔶', label: 'Mature Tissue', desc: 'Stable regulatory programs preserve cell identity' },
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
      'Some non-coding sequences are highly conserved across species because they are essential for function.',
      'Others evolve more quickly and provide opportunities for adaptive change.',
      'Conservation signals regulatory constraint and biological importance.',
      'Variation provides the raw material for evolutionary novelty.',
      'Evolution needs both stability and change.',
    ],
    diagram: { type: 'right', label: 'Insert conserved vs variable sequence comparison', imageUrl: '/assets/conservation_variation.png' },
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
      'New regulatory interactions can emerge through mutation, duplication, and transposition.',
      'Old networks can be modified without destroying protein function.',
      'This changes developmental timing, spatial control, and tissue specificity.',
      'Evolution works by rewiring gene control rather than only inventing new genes.',
    ],
    diagram: { type: 'right', label: 'Insert network rewiring — before/after interaction map', imageUrl: '/assets/regulatory_rewiring.png' },
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
      { icon: '⚠', title: 'Regulatory Mutations', body: 'Mutations in non-coding DNA can cause disease by disrupting regulation rather than protein structure.' },
      { icon: '🔬', title: 'Cancer & Development', body: 'Cancer and developmental disorders are strongly linked to regulatory defects.' },
      { icon: '📊', title: 'GWAS Variants', body: 'Many disease-associated variants from genetic studies fall in non-coding regions.' },
      { icon: '🔄', title: 'Evolutionary Link', body: 'The same mechanisms that support evolution can be misregulated in disease.' },
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
      'It drives complexity, development, and evolutionary innovation.',
      'It is essential for modern genomics and medicine.',
      'Understanding it is central to understanding life itself.',
    ],
    diagram: { type: 'full', label: 'Insert final thematic artwork — genome-tree / root system / evolutionary branch', imageUrl: '/assets/conclusion_artwork.png' },
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
