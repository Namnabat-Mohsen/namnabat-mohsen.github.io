/* =========================================================================
   CONTENT — Edit everything here. Each section maps to a component.
   Drop images/logos/videos into  public/assets/<section>/  and reference
   them by path, e.g. image: '/assets/publications/paper1.jpg'
   Leave image/video/logo empty ('') to keep the styled placeholder.
   ========================================================================= */

export const profile = {
  name: 'Mohsen Namnabat',
  tagline: 'Pharmaceutical Biophysics & Drug Delivery Researcher',
  intro:
    'MSc in Molecular Biomedicine (University of Copenhagen). I work at the interface of drug delivery and pharmaceutical biophysics — oral peptide delivery, lipid & polymeric nanocarriers, epithelial permeation, and the molecular dynamics of self-assembling systems.',
  available: 'Open to PhD positions & research collaborations',
  photo: '/assets/hero/portrait.jpg',
  resumeUrl: '/assets/CV.pdf', // your CV PDF (in public/assets/)
  email: 'namnabatmohsen@gmail.com',
  phone: '', // hidden from the public site; still on your CV PDF
  location: 'Copenhagen, Denmark',
  socials: {
    github: 'https://github.com/Namnabat-Mohsen',
    linkedin: 'https://linkedin.com/in/mohsen-namnabat-0a5abb196',
    orcid: '', // add your ORCID URL when available
    scholar: '', // add your Google Scholar profile URL when available
  },
}

export const about = {
  paragraphs: [
    'I’m a molecular biomedicine researcher (MSc, University of Copenhagen) working at the interface of drug delivery and pharmaceutical biophysics. My focus is oral peptide delivery, lipid and polymeric nanocarriers, epithelial permeation, and the molecular dynamics of self-assembling systems.',
    'My master’s thesis combined experimental release and permeability studies with atomistic and coarse-grained (MARTINI) simulations of nanocarriers on HPC. I’m comfortable across biophysical characterisation (DLS, zeta potential, ATR-FTIR, NMR), scientific programming (Python, R, MATLAB), and HPC/Linux workflows — motivated to apply biophysical and computational methods to the molecular mechanisms of permeation enhancers and oral peptide delivery.',
  ],
  interests: [
    'Membrane Biophysics',
    'Oral Peptide Delivery',
    'Molecular Dynamics (Atomistic & CG)',
    'Lipid & Polymeric Nanocarriers',
    'Epithelial Permeation',
    'Release Kinetics',
    'Scientific Programming',
  ],
  languages: [
    { name: 'English', level: 'C1 · IELTS 7' },
    { name: 'Danish', level: 'Elementary' },
    { name: 'Persian', level: 'Native' },
  ],
  stats: [
    { num: '5', label: 'Publications' },
    { num: '12/12', label: 'MSc Thesis Grade' },
    { num: '5+', label: 'Research Projects' },
    { num: 'Rank 1', label: 'BSc Class (of 40)' },
  ],
}

export const education = [
  {
    date: '2023 — 2025',
    degree: 'MSc, Molecular Biomedicine',
    institution: 'University of Copenhagen, Denmark · GPA 11/12',
    logo: '/assets/education/ucph.svg',
    description:
      'Master’s thesis graded 12/12. Coursework: molecular pathology, statistics for biomedicine, data science for genomics (R, sequencing analysis, PCA), medicinal & biostructural chemistry, and hands-on CRISPR gene editing.',
  },
  {
    date: '2019 — 2023',
    degree: 'BSc, Biotechnology',
    institution: 'Yazd University, Iran · GPA 18.31/20 (3.76/4)',
    logo: '/assets/education/yazd.svg',
    description:
      'Graduated rank 1 of 40. Relevant coursework: biochemistry, biophysical chemistry, medicinal biotechnology, biomaterials, and nanobiotechnology.',
  },
]

export const skills = [
  {
    group: 'Molecular Modelling & Simulation',
    icon: '🧬',
    items: [
      { name: 'MD Simulations (GROMACS, LAMMPS)', level: 90 },
      { name: 'Coarse-Grained / MARTINI + Polyply', level: 85 },
      { name: 'Molecular Docking & In-silico Binding', level: 85 },
      { name: 'Structure Prediction (AlphaFold, Rosetta)', level: 75 },
    ],
  },
  {
    group: 'Drug Delivery & Formulation',
    icon: '💊',
    items: [
      { name: 'Nanocarrier Synthesis (nanogels, lipid, silica)', level: 85 },
      { name: 'Microfluidic Fabrication', level: 75 },
      { name: 'Release Kinetics & Curve Fitting', level: 85 },
      { name: 'Formulation (lyophilization, electrospraying)', level: 75 },
    ],
  },
  {
    group: 'Biophysical Characterisation',
    icon: '⚗️',
    items: [
      { name: 'DLS / Zeta Potential / NTA', level: 85 },
      { name: 'ATR-FTIR & NMR Spectroscopy', level: 75 },
      { name: 'Osmolarity & pH Characterisation', level: 80 },
      { name: 'X-ray Structure Refinement (COOT)', level: 70 },
    ],
  },
  {
    group: 'Programming & Data',
    icon: '💻',
    items: [
      { name: 'Python', level: 85 },
      { name: 'R (data science, PCA, statistics)', level: 75 },
      { name: 'MATLAB', level: 70 },
      { name: 'HPC / Linux Workflows', level: 85 },
    ],
  },
]

// Software / tools grid. Add `logo: '/assets/software/gromacs.png'` to show a real logo,
// otherwise the first letters are shown as a fallback badge.
export const software = [
  { name: 'GROMACS', note: 'MD simulations', logo: '' },
  { name: 'LAMMPS', note: 'MD simulations', logo: '' },
  { name: 'Polyply', note: 'CG polymer mapping', logo: '' },
  { name: 'MARTINI', note: 'Coarse-grained force field', logo: '' },
  { name: 'AlphaFold', note: 'Structure prediction', logo: '' },
  { name: 'Rosetta', note: 'Structure modelling', logo: '' },
  { name: 'PyMOL', note: 'Molecular visualization', logo: '' },
  { name: 'COOT', note: 'X-ray refinement', logo: '' },
  { name: 'Python', note: 'Scripting & analysis', logo: '' },
  { name: 'R', note: 'Statistics & data science', logo: '' },
  { name: 'MATLAB', note: 'Numerical analysis', logo: '' },
  { name: 'GraphPad Prism', note: 'Statistics & plotting', logo: '' },
  { name: 'ImageJ', note: 'Image analysis', logo: '' },
  { name: 'Linux', note: 'HPC workflows', logo: '' },
]

export const publications = [
  {
    journal: 'Molecular Biology Reports · 2024',
    title:
      'Novel and deleterious nucleotide variations in the HAND1 gene probably affect miRNA target sites and protein function in pediatric patients with congenital heart disease',
    authors:
      'Tabrizi F, Khatami M, Heidari MM, Bragança J, Tatari H, Namnabat M, Hadadzadeh M, Navabi Shirazi MA',
    blurb:
      'Identified HAND1 variants that may disrupt miRNA target sites and protein function in pediatric congenital heart disease.',
    image: '', // journal cover or figure, e.g. '/assets/publications/pub1.jpg'
    links: [
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/scholar?q=Novel%20and%20deleterious%20nucleotide%20variations%20in%20the%20HAND1%20gene%20miRNA%20congenital%20heart%20disease%20Namnabat',
      },
    ],
  },
  {
    journal: 'Gene Reports · 2023',
    title:
      'Association of Pathogenic Missense Mutations of NKX2.6 gene in patients with Congenital Heart Disease: Bioinformatics Prediction Tools and Structural Interactions',
    authors: 'Khatami M, Ghazinader D, Ahmadi F, Heidari MM, Hadadzadeh M, Namnabat M',
    blurb:
      'Used bioinformatics prediction and structural analysis to link NKX2.6 missense mutations to congenital heart disease.',
    image: '/assets/publications/nkx26-missense-structure.png',
    links: [
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/scholar?q=Association%20of%20Pathogenic%20Missense%20Mutations%20of%20NKX2.6%20gene%20Congenital%20Heart%20Disease%20Namnabat',
      },
    ],
  },
  {
    journal: 'Cellular and Molecular Research (Iranian Journal of Biology) · 2023',
    title:
      'The RGD sequence improves the binding of collagen IV-derived peptides to integrins: an in-silico study',
    authors: 'Chamani R, Namnabat M, Taleghani M, Imanpour A',
    blurb:
      'In-silico study showing the RGD motif enhances integrin binding of collagen IV-derived peptides.',
    image: '/assets/publications/rgd-collagen-integrin.png',
    links: [
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/scholar?q=The%20RGD%20sequence%20improves%20the%20binding%20of%20collagen%20IV-derived%20peptides%20to%20integrins%20in-silico%20Namnabat',
      },
    ],
  },
  {
    journal: 'EXCLI Journal · 2022',
    title:
      'Mitochondrial mutations in protein coding genes of respiratory chain including complexes IV, V, and mt-tRNA genes are associated risk factors for congenital heart disease',
    authors:
      'Heidari MM, Khatami M, Kamalipour A, Kalantari M, Movahed M, Emmamy MH, Hadadzadeh M, Bragança J, Namnabat M, Mazrouei B',
    blurb:
      'Associated mitochondrial respiratory-chain and mt-tRNA mutations with elevated congenital heart disease risk.',
    image: '/assets/publications/excli-mitochondrial-atpase6.jpg',
    links: [
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/scholar?q=Mitochondrial%20mutations%20respiratory%20chain%20complexes%20IV%20V%20mt-tRNA%20congenital%20heart%20disease%20Namnabat%20EXCLI',
      },
    ],
  },
  {
    journal: 'Conference · 10th International Congress on Biology (IBC), Shahrekord, Iran · 2022',
    title:
      'Identification of human papilloma virus E6 oncoprotein inhibitor using docking simulation',
    authors: 'Namnabat M, Chamani R',
    blurb:
      'Docking-based screening to identify candidate inhibitors of the HPV E6 oncoprotein.',
    image: '/assets/publications/hpv-e6.jpg',
    links: [
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/scholar?q=Identification%20of%20human%20papilloma%20virus%20E6%20oncoprotein%20inhibitor%20using%20docking%20simulation%20Namnabat%20Chamani',
      },
    ],
  },
]

// GitHub repos (fetched from github.com/Namnabat-Mohsen). Add a screenshot/GIF per repo
// in public/assets/github/ and set the `image` path.
export const github = {
  username: 'Namnabat-Mohsen',
  repos: [
    {
      name: 'osa-ha-martini3',
      description:
        'Martini 3 coarse-grained force-field generator for hyaluronic acid (HA) and OSA-grafted HA chains — generates GROMACS .gro and .itp files at arbitrary chain length and degree of substitution.',
      tags: ['Python', 'MARTINI 3', 'GROMACS'],
      stars: 0,
      image: '/assets/github/osa-ha-martini3.svg',
      url: 'https://github.com/Namnabat-Mohsen/osa-ha-martini3',
    },
    {
      name: 'osa-ha-builder',
      description:
        'Martini 3 coarse-grained polymer builder for OSA-modified hyaluronic acid (GROMACS-ready).',
      tags: ['Python', 'MARTINI 3', 'Polyply', 'GROMACS'],
      stars: 0,
      image: '/assets/github/osa-ha-builder.svg',
      url: 'https://github.com/Namnabat-Mohsen/osa-ha-builder',
    },
    {
      name: 'ibuprofen-research',
      description:
        'Dexibuprofen crystal and amorphous MD simulations with LAMMPS (OPLS-AA force field).',
      tags: ['Python', 'LAMMPS', 'OPLS-AA', 'MD'],
      stars: 0,
      image: '/assets/github/ibuprofen-research.svg',
      url: 'https://github.com/Namnabat-Mohsen/ibuprofen-research',
    },
    {
      name: 'cg-mapper',
      description:
        'Coarse-grained mapping tool for preparing MARTINI-style CG models from atomistic structures. (Update this description with the repo’s details.)',
      tags: ['TypeScript', 'Coarse-Grained', 'MARTINI'],
      stars: 0,
      image: '/assets/github/cg-mapper.svg',
      url: 'https://github.com/Namnabat-Mohsen/cg-mapper',
    },
  ],
}

export const thesis = [
  {
    name: 'MSc Thesis — OSA-HA Nanogels for Oral Delivery',
    description:
      'Environmental Behaviour and Release Kinetics of OSA-HA Nanogels for Oral Delivery: An Experimental and Computational Study. Developed pH-responsive OSA-modified hyaluronic acid nanogels for oral peptide delivery, combining microfluidic synthesis with release/permeability studies and computational modelling. Characterised environmental behaviour (DLS, zeta potential, ATR-FTIR, osmolarity) at gastric and intestinal pH and investigated hydrophobic cargo loading (Coumarin 6, doxorubicin) alongside peptide release. (Drug Delivery & Biophysics of Biopharmaceuticals group, University of Copenhagen.)',
    tags: ['Microfluidics', 'DLS / Zeta', 'Release Kinetics', 'ATR-FTIR', 'Cargo Loading'],
    image: '/assets/thesis/msc-thesis-nanogel.svg',
    url: '#',
    outcome: 'Grade: 12/12',
  },
  {
    name: 'Thesis Preparation — Coarse-Grained Models of OSA-HA',
    description:
      'Development of Coarse-Grained Simulation Models to Predict Structural Dynamics of OSA-Modified Hyaluronic Acid Nanogels. Built MARTINI coarse-grained models using Polyply and GROMACS to predict nanogel self-assembly and structural dynamics, complementing atomistic MD and NMR-based validation. Work performed on HPC clusters under Linux.',
    tags: ['MARTINI', 'Polyply', 'GROMACS', 'Atomistic MD', 'HPC / Linux'],
    image: '/assets/thesis/thesis-prep-cg.svg',
    url: '#',
    outcome: 'Grade: 12/12',
  },
  {
    name: 'Project Outside Course Scope — GluA2 X-ray Refinement',
    description:
      'Refinement of the X-ray structure of the ligand-binding domain of the GluA2 flip variant (GluA2i-LBD) in the presence of glutamate and a positive allosteric modulator. (Receptor Structural Biology group / Kastrup group, Department of Drug Design and Pharmacology, University of Copenhagen.)',
    tags: ['X-ray Diffraction', 'Structure Refinement', 'COOT', 'PyMOL'],
    image: '/assets/thesis/glua2-xray.svg',
    url: '#',
    outcome: 'Grade: 10/12',
  },
  {
    name: 'Internship — Drug Repurposing Against HPV E6',
    description:
      'Comprehensive Repurposing of FDA-Approved Drugs to Target HPV E6 Protein: integrating docking studies and cellular assays for inhibitory-effect evaluation. (Biotech Cell Laboratory, Isfahan, Iran.)',
    tags: ['Molecular Docking', 'Real-time PCR', 'MTT Assay', 'Cell Culture'],
    image: '/assets/thesis/hpv-e6-docking.svg',
    url: '#',
    outcome: 'Aug 2022 – Jul 2024',
  },
  {
    name: 'Industrial Internship — Magnetic Nanoparticle Kit',
    description:
      'Design and fabrication of a plasmid-extraction kit using magnetic nanoparticles. (Behyar-Sanat-Sepahan Corporation, Isfahan, Iran.)',
    tags: ['Magnetic NPs', 'Silica NPs', 'Surface Modification', 'Gel Electrophoresis'],
    image: '/assets/thesis/magnetic-np-kit.svg',
    url: '#',
    outcome: 'Jul 2021 – Jan 2022',
  },
]

// MD simulation videos. Drop .mp4/.webm into public/assets/simulations/
export const simulations = [
  {
    title: 'OSA-HA Nanogel Shaping (MARTINI CG)',
    caption:
      'Coarse-grained MARTINI simulation of OSA-modified hyaluronic acid self-assembling and shaping into a nanogel, run on HPC.',
    video: '/assets/simulations/osa-ha-nanogel.mp4',
    poster: '',
  },
  {
    title: 'Ibuprofen: Crystalline → Amorphous',
    caption:
      'MD animation of ibuprofen transitioning from an ordered crystalline lattice to a disordered amorphous solid.',
    video: '/assets/simulations/ibuprofen-crystal-amorphous.mp4',
    poster: '',
  },
  {
    title: 'TAL2 Mutation — Structural Effect',
    caption:
      'Molecular dynamics showing the effect of a pathogenic mutation on TAL2 structure. Animation created for the study below.',
    video: '/assets/simulations/tal2-mutation.mp4',
    poster: '',
    source: {
      label: 'Zare Khormizi et al., Mol Biol Rep (2025) — TAL2 mutations in B-ALL',
      url: 'https://doi.org/10.1007/s11033-025-10229-4',
    },
  },
]

// Honors, awards, and certificates
export const honors = {
  awards: [
    { year: '2023', text: 'Member of the National Elite Organization of Iran' },
    { year: '2023', text: 'Graduated as top student (rank 1 of 40), BSc Biotechnology, Yazd University' },
    { year: '2023', text: 'Accepted as an Elite Student at the University of Tehran (MSc Nanobiotechnology)' },
    { year: '2022', text: 'Graduated BSc in the top 5% of the year' },
    { year: '2022', text: 'Ranked 4th, National Olympiad of Stem Cell & Regenerative Tissue Engineering, Iran' },
  ],
  certificates: [
    { year: '2022', text: 'Drug Delivery System Design — International Institute of New Science, Iran' },
    { year: '2020', text: 'Bioinformatics and Drug Design — Institute BIOCAMP, Iran' },
    { year: '2020', text: 'Genome Editing Using CRISPR/Cas9 — Yazd University, Iran' },
    { year: '2020', text: 'CRISPR/Cas9 Workshop — International Congress on Biomedicine, Iran' },
    { year: '2020', text: 'SPSS Workshop — International Congress on Biomedicine, Iran' },
    { year: '2019', text: 'Primer Design and Real-Time PCR — Yazd University, Iran' },
  ],
}

// Nav sections (id must match the section element id)
export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'thesis', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'software', label: 'Software' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'GitHub' },
  { id: 'simulations', label: 'Simulations' },
  { id: 'honors', label: 'Honors' },
  { id: 'contact', label: 'Contact' },
]
