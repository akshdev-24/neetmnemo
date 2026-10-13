export const chemCh14Mnemonics = [
  {
    "id": "mnemo-chem-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Spectrochemical Series Ligand Strength (I Brought Clean Clothes...)",
    "topic": "Spectrochemical Series Ligand Strength (I Brought Clean Clothes...)",
    "mnemonicNumber": 1,
    "title": "Spectrochemical Series: I Brought Clean Clothes",
    "badgeText": "Memory Trick",
    "importance": "NEET PYQ",
    "difficulty": "hard",
    "visualType": "sequence",
    "cardColor": "#EFE4FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "I Brought Some Clean Clothes From Office (I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO)",
    "memoryHook": "Halides & O-donors are Weak Field (high spin); C and N donors (CO, CN⁻, en, NH₃) are Strong Field (low spin).",
    "fact": "Spectrochemical series order: I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < N₃⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < NO₂⁻ < CN⁻ < CO.",
    "breakdown": [
      {
        "key": "Weak Field Ligands (Halides)",
        "label": "Small Δo splitting → High Spin (t2g³ eg² for d⁵)"
      },
      {
        "key": "Strong Field Ligands (CO, CN⁻, en)",
        "label": "Large Δo splitting → Low Spin (t2g⁵ eg⁰, pairing occurs)"
      }
    ],
    "doodleBadge": "CO > CN⁻ > en > NH₃ > H₂O > F⁻ > Cl⁻ > I⁻",
    "doodleSubtext": "Strong to Weak",
    "explanation": "Crystal Field Theory arranges ligands by their ability to split degenerate d-orbitals. Strong field ligands overcome pairing energy (P < Δo), forcing electrons into paired t2g sets.",
    "alsoRemember": "CO (Carbonyl) is the strongest ligand because of synergistic metal-to-ligand π-backbonding.",
    "ncertConnection": "NCERT Class 12 Chemistry Part 1 Chapter 9, Section 9.5.4.",
    "neetTrap": "Oxalate (ox²⁻) and water are weak field, while en (ethylenediamine) and cyanide are strong field.",
    "tags": [
      "Coordination Chemistry",
      "Spectrochemical Series",
      "CFT",
      "Ligands"
    ],
    "quiz": {
      "question": "Which of the following ligands produces the largest crystal field splitting (Δo)?",
      "options": [
        "Cl⁻",
        "H₂O",
        "CN⁻",
        "CO"
      ],
      "answerIndex": 3,
      "explanation": "Carbon monoxide (CO) is at the extreme strong end of the spectrochemical series due to synergistic π-backbonding."
    }
  },
  {
    "id": "chem-ch14-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-2",
    "topicTitle": "Crystal Field Splitting: Octahedral (t2g/eg) vs Tetrahedral (e/t2)",
    "topic": "Crystal Field Splitting in Octahedral and Tetrahedral Fields",
    "mnemonicNumber": 2,
    "title": "CFT Splitting: Octahedral Splits to 3 Down (t2g) & 2 Up (eg) | Tetrahedral Flips to 2 Down (e) & 3 Up (t2)!",
    "badgeText": "Concept Rule",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Octahedral: 3 below (-0.4 Δo) & 2 above (+0.6 Δo) | Tetrahedral: Flipped! 2 below (-0.6 Δt) & 3 above (+0.4 Δt)!",
    "memoryHook": "In Octahedral, ligands approach along axes, directly repelling axial dx2-y2 and dz2 (eg set rises by +0.6 Δo). Non-axial dxy, dyz, dxz lie between axes and drop to form the stabilized t2g set (-0.4 Δo). Tetrahedral ligands approach between axes, completely reversing the pattern!",
    "fact": "Crystal Field Splitting: 1. Octahedral: eg (dx2-y2, dz2) raised by +0.6 Δo (+3/5 Δo); t2g (dxy, dyz, dxz) lowered by -0.4 Δo (-2/5 Δo). 2. Tetrahedral: e (dx2-y2, dz2) lowered by -0.6 Δt; t2 (dxy, dyz, dxz) raised by +0.4 Δt. 3. Relation: Δt = 4/9 Δo. Because Δt is always small, tetrahedral complexes are ALMOST ALWAYS high spin (pairing energy P > Δt).",
    "breakdown": [
      {
        "key": "Octahedral Field (Δo)",
        "label": "Lower t₂g (3 orbitals, -0.4 Δo) | Upper eg (2 orbitals, +0.6 Δo)"
      },
      {
        "key": "Tetrahedral Field (Δt)",
        "label": "Lower e (2 orbitals, -0.6 Δt) | Upper t₂ (3 orbitals, +0.4 Δt)"
      },
      {
        "key": "Magnitude Relation",
        "label": "Δt = (4/9) Δo (due to 4 ligands instead of 6 and indirect angles)"
      },
      {
        "key": "Tetrahedral Spin",
        "label": "Always high spin complexes (Δt < Pairing energy P)"
      }
    ],
    "doodleBadge": "Oct: t₂g³ eg²\nTet: e² t₂³ (Flipped)\nΔt = (4/9) Δo",
    "doodleSubtext": "CFT Energy Splitting",
    "explanation": "The barycenter rule preserves the average d-orbital energy. Splitting depends on the spatial alignment of ligand electron clouds relative to metal d-orbital lobes.",
    "alsoRemember": "In tetrahedral complexes, the \"g\" (gerade) subscript is omitted because a tetrahedron lacks a center of inversion (inversion center).",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.5 Crystal Field Theory.",
    "neetTrap": "Tetrahedral complexes NEVER form low-spin complexes under normal conditions because Δt is only 4/9 of Δo, far too small to overcome pairing energy.",
    "tags": [
      "Coordination Chemistry",
      "CFT",
      "Octahedral",
      "Tetrahedral",
      "Barycenter"
    ],
    "quiz": {
      "question": "What is the relationship between crystal field splitting in tetrahedral (Δt) and octahedral (Δo) geometries for the same metal and ligands?",
      "options": [
        "Δt = 9/4 Δo",
        "Δt = 4/9 Δo",
        "Δt = 1/2 Δo",
        "Δt = 2/3 Δo"
      ],
      "answerIndex": 1,
      "explanation": "Tetrahedral splitting is approximately 4/9 of octahedral splitting (Δt = 4/9 Δo) due to having only 4 ligands and non-axial directions."
    }
  },
  {
    "id": "chem-ch14-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-2",
    "topicTitle": "High Spin vs Low Spin Pairing Condition (Δo vs Pairing Energy P)",
    "topic": "High Spin vs Low Spin Pairing Criterion",
    "mnemonicNumber": 3,
    "title": "Pairing Condition: If Δo > P → Force Pair (Low Spin)! If Δo < P → Stay Single (High Spin)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Δo > P: Strong field forces pairing (Low spin, inner orbital d2sp3) | Δo < P: Weak field stays unpaired (High spin, outer orbital sp3d2)!",
    "memoryHook": "Think of Δo as the cost of jumping upstairs to eg, and P as the penalty for sharing a bed in t2g. If the stairs are too high (Δo > P), you stay downstairs and pair up!",
    "fact": "For d4 to d7 octahedral systems: 1. Weak Field (Δo < P): Fourth electron goes to eg subshell → t2g3 eg1 (High spin). 2. Strong Field (Δo > P): Fourth electron pairs up in t2g subshell → t2g4 eg0 (Low spin). Systems d1, d2, d3 always have same configuration regardless of ligand strength.",
    "breakdown": [
      {
        "key": "Case 1: Δo < P",
        "label": "Weak field ligand → High Spin complex (e.g. [FeF₆]³⁻, t₂g³ eg²)"
      },
      {
        "key": "Case 2: Δo > P",
        "label": "Strong field ligand → Low Spin complex (e.g. [Fe(CN)₆]³⁻, t₂g⁵ eg⁰)"
      },
      {
        "key": "d¹ to d³ & d⁸ to d¹⁰",
        "label": "Configuration is identical in both weak and strong fields"
      }
    ],
    "doodleBadge": "Δo > P → Low Spin (Pair)\nΔo < P → High Spin (Unpaired)\nGoverns d⁴ to d⁷",
    "doodleSubtext": "Spin Multiplicity Rules",
    "explanation": "Hund's rule is followed unless the energy required to promote an electron across the crystal field gap exceeds the Coulombic repulsion of pairing in the same orbital.",
    "alsoRemember": "[Co(NH3)6]3+ is diamagnetic and low spin because Co3+ (d6) has high charge density, making Δo very large.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.5.4 Electronic Configuration in Octahedral Complexes.",
    "neetTrap": "Co3+ with H2O or oxalate (ox2-) forms low spin complexes despite H2O being nominally weak field, because +3 charge on cobalt significantly increases Δo!",
    "tags": [
      "Coordination Chemistry",
      "CFT",
      "Pairing Energy",
      "High Spin",
      "Low Spin"
    ],
    "quiz": {
      "question": "Under what condition will a d4 transition metal ion in an octahedral complex adopt a low spin configuration (t2g4 eg0)?",
      "options": [
        "Δo < P",
        "Δo > P",
        "Δo = 0",
        "Δt > P"
      ],
      "answerIndex": 1,
      "explanation": "When the crystal field splitting energy Δo is greater than the electron pairing energy P (Δo > P), electrons prefer to pair in the lower t2g orbitals, giving a low-spin complex."
    }
  },
  {
    "id": "chem-ch14-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-3",
    "topicTitle": "Werner Coordination Theory: Primary vs Secondary Valency",
    "topic": "Werner Coordination Theory",
    "mnemonicNumber": 4,
    "title": "Werner's Valencies: Primary is Ionizable (+ O.N.), Secondary is Non-Ionizable (Coordination Number)!",
    "badgeText": "NEET PYQ",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Primary = Oxidation state, Ionizable, Satisfied by negative ions | Secondary = Coordination number, Fixed, Directional, Non-ionizable!",
    "memoryHook": "In [Co(NH3)6]Cl3: Primary valency = 3 (satisfied by 3 Cl⁻ outside brackets, precipitated by AgNO3). Secondary valency = 6 (satisfied by 6 NH3 inside brackets, non-ionizable, gives octahedral geometry)!",
    "fact": "Alfred Werner (Father of Coordination Chemistry, Nobel Prize 1913): 1. Primary Valency: Corresponds to oxidation state of metal, ionizable, satisfied by anions, non-directional (shown by dotted lines). 2. Secondary Valency: Corresponds to coordination number, non-ionizable, satisfied by neutral molecules or anions, directional in space (shown by solid lines, dictates 3D geometry).",
    "breakdown": [
      {
        "key": "Primary Valency",
        "label": "Oxidation Number | Ionizable | Satisfied by negative ions | Dotted line"
      },
      {
        "key": "Secondary Valency",
        "label": "Coordination Number | Non-ionizable | Neutral/anionic ligands | Solid line"
      },
      {
        "key": "AgNO₃ Precipitation",
        "label": "Only primary valency ions in ionization sphere precipitate as AgCl"
      }
    ],
    "doodleBadge": "[Co(NH₃)₆]Cl₃\n3 Cl⁻ outside = 3 mol AgCl\nSec. Valency = 6 (NH₃)\nPri. Valency = 3 (Cl⁻)",
    "doodleSubtext": "Werner Valency Rules",
    "explanation": "Species inside coordination brackets [ ] satisfy directional secondary valencies and do not dissociate in solution. Counterions outside satisfy primary valencies and ionize freely.",
    "alsoRemember": "If 1 mole of [Co(NH3)5Cl]Cl2 is treated with excess AgNO3, exactly 2 moles of AgCl precipitate, because only 2 chloride ions are outside the coordination sphere.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.1 Werner's Theory of Coordination Compounds.",
    "neetTrap": "Chlorine inside the bracket satisfies BOTH secondary valency and primary valency simultaneously, so it does NOT precipitate with AgNO3!",
    "tags": [
      "Coordination Chemistry",
      "Werner Theory",
      "Primary Valency",
      "Secondary Valency"
    ],
    "quiz": {
      "question": "When 1 mole of [Co(NH3)4Cl2]Cl is treated with excess aqueous AgNO3, how many moles of AgCl precipitate?",
      "options": [
        "3 moles",
        "2 moles",
        "1 mole",
        "0 moles"
      ],
      "answerIndex": 2,
      "explanation": "Only the single chloride ion located outside the coordination sphere in the ionization sphere can ionize and precipitate with Ag+ to form 1 mole of AgCl."
    }
  },
  {
    "id": "chem-ch14-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-3",
    "topicTitle": "Structural Isomerism in Coordination Complexes (Ionization, Hydrate, Linkage, Coordination)",
    "topic": "Structural Isomerism Types",
    "mnemonicNumber": 5,
    "title": "4 Structural Isomers: Linkage (Ambidentate), Ionization (Counterion Swap), Hydrate (Water in/out), Coordination (Cation-Anion Swap)",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "classification",
    "cardColor": "#EFE4FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Linkage = Ambidentate ligand | Ionization = Exchange inside/outside ions | Hydrate = Water inside vs outside | Coordination = Both metal spheres swap ligands!",
    "memoryHook": "1. Linkage: NO2⁻ (nitro, N-bonded) vs ONO⁻ (nitrito, O-bonded); SCN⁻ vs NCS⁻. 2. Ionization: [Co(NH3)5SO4]Br (gives AgBr ppt) vs [Co(NH3)5Br]SO4 (gives BaSO4 ppt). 3. Hydrate: [Cr(H2O)6]Cl3 (violet) vs [Cr(H2O)5Cl]Cl2·H2O (grey-green). 4. Coordination: [Co(NH3)6][Cr(CN)6] vs [Cr(NH3)6][Co(CN)6].",
    "fact": "Key markers for NEET: 1. Ambidentate ligands (NO2⁻, SCN⁻, CN⁻) immediately indicate LINKAGE isomerism. 2. Water molecules present as coordinated ligand vs water of crystallization indicate SOLVATE / HYDRATE isomerism. 3. Exchange of ions between coordination entity and counterion indicates IONIZATION isomerism.",
    "breakdown": [
      {
        "key": "Linkage",
        "label": "Ambidentate ligands: -NO₂ vs -ONO, -SCN vs -NCS"
      },
      {
        "key": "Ionization",
        "label": "Swap coordinated ion with outer counterion: SO₄²⁻ vs Br⁻"
      },
      {
        "key": "Hydrate (Solvate)",
        "label": "H₂O inside coordination sphere vs H₂O of crystallization outside"
      },
      {
        "key": "Coordination",
        "label": "Interchange of ligands between cationic and anionic complex entities"
      }
    ],
    "doodleBadge": "Ambidentate → Linkage\nIon Swap → Ionization\nH₂O Swap → Hydrate\n2 Brackets → Coordination",
    "doodleSubtext": "Structural Isomerism",
    "explanation": "Structural isomerism involves differences in bonding connectivity rather than spatial arrangements of identical bonds.",
    "alsoRemember": "Coordination position isomerism occurs in polynuclear complexes containing bridging ligands when ligands are distributed differently across metal centers.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.4.1 Structural Isomerism.",
    "neetTrap": "SCN⁻ bonding through S is thiocyanato; through N is isothiocyanato. Linkage isomerism requires an ambidentate ligand!",
    "tags": [
      "Coordination Chemistry",
      "Isomerism",
      "Linkage",
      "Ionization",
      "Hydrate"
    ],
    "quiz": {
      "question": "Which type of isomerism is exhibited by the pair [Co(NH3)5(NO2)]Cl2 and [Co(NH3)5(ONO)]Cl2?",
      "options": [
        "Ionization isomerism",
        "Linkage isomerism",
        "Coordination isomerism",
        "Hydrate isomerism"
      ],
      "answerIndex": 1,
      "explanation": "The nitrite ligand NO2⁻ is ambidentate, bonding through N in nitro and through O in nitrito, producing linkage isomerism."
    }
  },
  {
    "id": "chem-ch14-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-3",
    "topicTitle": "Geometrical Isomerism: Cis-Trans in Square Planar [Ma2b2] & Fac-Mer in Octahedral [Ma3b3]",
    "topic": "Geometrical Isomerism Cis-Trans & Fac-Mer",
    "mnemonicNumber": 6,
    "title": "Geometrical Shapes: Square Planar [Ma2b2] Gives Cis/Trans; Octahedral [Ma3b3] Gives Fac/Mer!",
    "badgeText": "Visual Hook",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "visual",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Adjacent (90°) = Cis or Fac (Triangular Face) | Opposite (180°) = Trans or Mer (Meridional Meridian)!",
    "memoryHook": "In [Pt(NH3)2Cl2]: Cis-platin has two Cl at 90° (anticancer drug!). Trans-platin has two Cl at 180° (inactive). In [Co(NH3)3(NO2)3]: Fac (facial) has 3 identical ligands on the three corners of one triangular face of octahedron. Mer (meridional) has 3 ligands arranged in a plane passing around the meridian!",
    "fact": "Geometrical isomerism rules: 1. Tetrahedral complexes NEVER show geometrical isomerism because all 4 positions are equidistant (adjacent at 109.5°). 2. Square planar [Ma4], [Ma3b], and [Mab3] do NOT show geometrical isomerism. [Ma2b2] and [Ma2bc] show 2 isomers (cis and trans). [Mabcd] shows 3 geometrical isomers. 3. Octahedral [Ma3b3] shows exactly 2 isomers: Facial (fac) and Meridional (mer).",
    "breakdown": [
      {
        "key": "[Ma₂b₂] Square Planar",
        "label": "Cis (same sides at 90°) and Trans (opposite sides at 180°)"
      },
      {
        "key": "[Mabcd] Square Planar",
        "label": "Exactly 3 geometrical isomers (fix one ligand, rotate 3)"
      },
      {
        "key": "[Ma₃b₃] Octahedral",
        "label": "Fac (3 ligands at vertices of same triangular face) and Mer (meridian plane)"
      },
      {
        "key": "Tetrahedral [Mabcd]",
        "label": "NO geometrical isomerism, but shows OPTICAL isomerism!"
      }
    ],
    "doodleBadge": "Cis-platin = Anti-cancer\n[Ma₃b₃] = Fac / Mer\nTetrahedral = NEVER Geometrical",
    "doodleSubtext": "Geometrical Configurations",
    "explanation": "Geometrical isomerism arises when ligands can occupy mutually different relative spatial orientations (adjacent vs opposing positions).",
    "alsoRemember": "Cis-platin [Pt(NH3)2Cl2] binds crosslinks in cancer cell DNA, whereas trans-platin cannot bind effectively to the same DNA helix strand.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.4.2 Geometrical Isomerism.",
    "neetTrap": "Tetrahedral complexes NEVER show geometrical (cis-trans) isomerism because every position is adjacent to every other position at 109.5°!",
    "tags": [
      "Coordination Chemistry",
      "Isomerism",
      "Cis-Trans",
      "Fac-Mer",
      "Cisplatin"
    ],
    "quiz": {
      "question": "Which of the following geometries can NEVER exhibit geometrical (cis-trans) isomerism?",
      "options": [
        "Square planar",
        "Octahedral",
        "Tetrahedral",
        "Trigonal bipyramidal"
      ],
      "answerIndex": 2,
      "explanation": "Tetrahedral complexes can never exhibit geometrical isomerism because all four ligand positions are mutually adjacent and equivalent (109.5° apart)."
    }
  },
  {
    "id": "chem-ch14-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-3",
    "topicTitle": "Optical Isomerism in Octahedral Complexes ([M(aa)3] and cis-[M(aa)2b2])",
    "topic": "Optical Isomerism in Octahedral Complexes",
    "mnemonicNumber": 7,
    "title": "Optical Activity: [M(aa)3] is ALWAYS Chiral! Cis-[M(aa)2b2] is Chiral, but Trans is Inactive (Plane of Symmetry)!",
    "badgeText": "NEET PYQ",
    "importance": "Must Know",
    "difficulty": "hard",
    "visualType": "exception",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Tris-chelate [Co(en)3]3+ has D3 propeller symmetry → Optically Active (d and l)! Trans-[Co(en)2Cl2]+ has Plane of Symmetry → Achiral!",
    "memoryHook": "A molecule is optically active if it lacks an improper axis of rotation (no plane or center of inversion). In [Co(en)2Cl2]+: Cis isomer is unsymmetrical and resolves into d- and l- enantiomers. Trans isomer has a plane of symmetry through the metal and chlorine atoms, making it superimposable and optically INACTIVE!",
    "fact": "Optical isomerism criteria in coordination chemistry: 1. [M(aa)3] like [Co(en)3]3+, [Cr(ox)3]3+: Chiral propeller geometry, always optically active (dextro and laevo pair). 2. Cis-[M(aa)2b2] like cis-[Co(en)2Cl2]+: No symmetry plane, optically active. 3. Trans-[M(aa)2b2]: Possesses an internal plane of symmetry (and center of inversion), optically inactive.",
    "breakdown": [
      {
        "key": "[Co(en)₃]³⁺",
        "label": "Chiral propeller (d & l forms, optically active)"
      },
      {
        "key": "Cis-[Co(en)₂Cl₂]⁺",
        "label": "Asymmetric, non-superimposable mirror image (optically active)"
      },
      {
        "key": "Trans-[Co(en)₂Cl₂]⁺",
        "label": "Contains plane of symmetry (optically inactive, meso-like)"
      }
    ],
    "doodleBadge": "[Co(en)₃]³⁺ = Active\nCis-[Co(en)₂Cl₂]⁺ = Active\nTrans-[Co(en)₂Cl₂]⁺ = INACTIVE",
    "doodleSubtext": "Chirality in Coordination",
    "explanation": "Trans-[M(aa)2b2] has an inversion center and horizontal reflection plane passing through metal and both monodentate ligands, eliminating chirality.",
    "alsoRemember": "Square planar complexes are almost always optically inactive because the molecular plane itself acts as a plane of symmetry.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.4.2 Optical Isomerism.",
    "neetTrap": "Trans-[Co(en)2Cl2]+ is OPTICALLY INACTIVE because of a plane of symmetry! Only the cis isomer is optically active.",
    "tags": [
      "Coordination Chemistry",
      "Optical Isomerism",
      "Chirality",
      "Chelate"
    ],
    "quiz": {
      "question": "Which of the following coordination complexes is optically INACTIVE due to the presence of an internal plane of symmetry?",
      "options": [
        "cis-[Co(en)2Cl2]+",
        "[Co(en)3]3+",
        "trans-[Co(en)2Cl2]+",
        "[Cr(ox)3]3-"
      ],
      "answerIndex": 2,
      "explanation": "trans-[Co(en)2Cl2]+ has a center of inversion and a horizontal plane of symmetry, rendering its mirror image superimposable and making it optically inactive."
    }
  },
  {
    "id": "chem-ch14-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-2",
    "topicTitle": "Valence Bond Theory: Inner Orbital (d2sp3) vs Outer Orbital (sp3d2) Hybridization",
    "topic": "Inner Orbital vs Outer Orbital Complexes",
    "mnemonicNumber": 8,
    "title": "VBT Hybridization: Strong Field Empties 3d to make d2sp3 (Inner)! Weak Field Uses 4d to make sp3d2 (Outer)!",
    "badgeText": "Concept Rule",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "d²sp³ = Inner orbital (uses 3d, low spin, diamagnetic/low para) | sp³d² = Outer orbital (uses 4d, high spin, paramagnetic)!",
    "memoryHook": "[Fe(CN)6]3- vs [FeF6]3-: Both have Fe3+ (3d5). CN⁻ is strong field → pairs electrons into 3d to vacate two 3d orbitals → d2sp3 (inner orbital, 1 unpaired e-, μ = 1.73 BM). F⁻ is weak field → cannot pair 3d electrons → uses empty 4s, 4p, 4d orbitals → sp3d2 (outer orbital, 5 unpaired e-, μ = 5.92 BM)!",
    "fact": "Valence Bond Theory (Pauling): Octahedral complexes have two hybridization pathways: 1. Inner orbital complex (d2sp3): Uses (n-1)d, ns, np orbitals; formed with strong field ligands that pair up inner d electrons; lower spin multiplicity. 2. Outer orbital complex (sp3d2): Uses ns, np, nd orbitals; formed with weak field ligands where inner d electrons stay unpaired; high spin multiplicity.",
    "breakdown": [
      {
        "key": "[Fe(CN)₆]³⁻",
        "label": "d²sp³ (Inner orbital, low spin, 1 unpaired e⁻, μ = 1.73 BM)"
      },
      {
        "key": "[FeF₆]³⁻",
        "label": "sp³d² (Outer orbital, high spin, 5 unpaired e⁻, μ = 5.92 BM)"
      },
      {
        "key": "[Co(NH₃)₆]³⁺",
        "label": "d²sp³ (Inner orbital, diamagnetic, zero unpaired e⁻)"
      },
      {
        "key": "[CoF₆]³⁻",
        "label": "sp³d² (Outer orbital, high spin, 4 unpaired e⁻, μ = 4.90 BM)"
      }
    ],
    "doodleBadge": "Inner = d²sp³ (3d)\nOuter = sp³d² (4d)\nStrong Ligand → Inner\nWeak Ligand → Outer",
    "doodleSubtext": "VBT Hybridization",
    "explanation": "Pauling assumed ligand electron pairs are donated into hybridized vacant metal orbitals. Inner orbital complexes utilize the more penetrating (n-1)d orbitals.",
    "alsoRemember": "[Ni(CO)4] is sp3 hybridized and tetrahedral (Ni is 3d10 4s0), while [Ni(CN)4]2- is dsp2 hybridized and square planar (diamagnetic)!",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.5.1 Valence Bond Theory.",
    "neetTrap": "[Ni(CO)4] is tetrahedral (sp3) and diamagnetic, NOT square planar! CO forces 4s electrons into 3d, creating a 3d10 configuration that can only use 4s and 4p.",
    "tags": [
      "Coordination Chemistry",
      "VBT",
      "Hybridization",
      "Inner Orbital",
      "Outer Orbital"
    ],
    "quiz": {
      "question": "What is the hybridization and magnetic behavior of [Ni(CN)4]2-?",
      "options": [
        "sp3, paramagnetic",
        "dsp2, diamagnetic",
        "sp3, diamagnetic",
        "d2sp3, paramagnetic"
      ],
      "answerIndex": 1,
      "explanation": "Ni2+ is 3d8. Strong field CN- pairs all 8 electrons into four 3d orbitals, leaving one vacant 3d orbital for dsp2 hybridization, forming a square planar diamagnetic complex."
    }
  },
  {
    "id": "chem-ch14-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Synergistic Bonding in Metal Carbonyls (M-C σ-Bond + M→C π-Backbonding)",
    "topic": "Synergistic Bonding in Metal Carbonyls",
    "mnemonicNumber": 9,
    "title": "Metal Carbonyl Synergism: Metal receives σ-donation from CO; Metal gives back π-backdonation into CO π*!",
    "badgeText": "Concept Rule",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "concept",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Give and Take = Synergic Bond! Metal-Carbon bond STRENGTHENS, Carbon-Oxygen bond WEAKENS!",
    "memoryHook": "Step 1: Carbon donates its lone pair into empty metal d-orbital forming M←C σ-bond. Step 2: Filled metal d-orbital back-donates electrons into empty antibonding π* molecular orbital of CO forming M→C π-bond. This synergistic back-bonding strengthens the M-C bond while weakening and lengthening the C-O bond!",
    "fact": "Synergic bonding in metal carbonyls: 1. σ-bond: Carbonyl lone pair → vacant metal d-orbital. 2. π-bond: Filled metal dπ orbital → empty antibonding π* orbital of CO. Consequences: Strengthens and shortens M-C bond, increases M-C bond order, weakens and lengthens C-O bond, and decreases C-O stretching frequency in IR spectroscopy.",
    "breakdown": [
      {
        "key": "M←C σ-Bond",
        "label": "Donation of lone pair on carbon into empty metal orbital"
      },
      {
        "key": "M→C π-Backbond",
        "label": "Back-donation from filled metal d-orbital into empty π* of CO"
      },
      {
        "key": "M-C Bond Result",
        "label": "Higher bond order, shorter bond length, stronger bond"
      },
      {
        "key": "C-O Bond Result",
        "label": "Lower bond order, longer bond length, reduced IR stretching frequency"
      }
    ],
    "doodleBadge": "Synergic Bonding:\nM-C bond strengthens ↑\nC-O bond weakens ↓\n(e⁻ fills CO π* orbital)",
    "doodleSubtext": "Metal Carbonyls",
    "explanation": "Back-donation pours electron density into the antibonding π* orbital of CO, which inherently reduces the C-O triple bond character towards a double bond.",
    "alsoRemember": "As negative charge on the metal complex increases (e.g., [V(CO)6]⁻ vs [Cr(CO)6] vs [Mn(CO)6]⁺), π-backbonding increases, making the C-O bond weakest in [V(CO)6]⁻!",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.6 Bonding in Metal Carbonyls.",
    "neetTrap": "Synergic bonding WEAKENS the C-O bond while it STRENGTHENS the M-C bond! NEET questions often flip these two bonds.",
    "tags": [
      "Coordination Chemistry",
      "Metal Carbonyls",
      "Synergic Bonding",
      "π-Backbonding"
    ],
    "quiz": {
      "question": "Which of the following carbonyl complexes has the longest and weakest C-O bond due to maximum π-backbonding?",
      "options": [
        "[Mn(CO)6]+",
        "[Cr(CO)6]",
        "[V(CO)6]-",
        "[Fe(CO)5]"
      ],
      "answerIndex": 2,
      "explanation": "The anionic complex [V(CO)6]- has the highest electron density on the metal center, maximizing π-backdonation into CO π* antibonding orbitals and weakening the C-O bond the most."
    }
  },
  {
    "id": "chem-ch14-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Chelate Effect & Enhanced Thermodynamic Stability of Ring Complexes",
    "topic": "Chelate Effect and Ring Complex Stability",
    "mnemonicNumber": 10,
    "title": "Chelate Effect: Polydentate Ligands Form 5- or 6-Membered Rings → Enormous Entropy Increase (+ΔS)!",
    "badgeText": "Concept Rule",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "concept",
    "cardColor": "#EFE4FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Ring Complexes (Chelates) are orders of magnitude more stable than open monodentate complexes due to positive entropy (+ΔS)!",
    "memoryHook": "When 1 polydentate ligand (like EDTA4- or ethylenediamine 'en') displaces 6 monodentate water molecules, 1 particle produces 6 free particles! Net increase in particles = HUGE increase in entropy (ΔS > 0), driving ΔG = ΔH - TΔS heavily negative!",
    "fact": "Chelate Effect: Coordination complexes containing multidentate chelating ligands are exceptionally stable compared to unchelated analogs. Examples: [Ni(en)3]2+ is far more stable than [Ni(NH3)6]2+. 5- and 6-membered chelate rings show maximum stability due to minimal bond angle strain. EDTA4- forms 5 stable chelate rings with Ca2+ and Mg2+.",
    "breakdown": [
      {
        "key": "Definition",
        "label": "Formation of cyclic ring structures by multidentate ligands"
      },
      {
        "key": "Thermodynamic Driver",
        "label": "Positive entropy change (ΔS > 0) upon releasing multiple monodentate molecules"
      },
      {
        "key": "Most Stable Rings",
        "label": "5-membered (saturated e.g. en) and 6-membered (conjugated e.g. acac)"
      },
      {
        "key": "EDTA⁴⁻ Ligand",
        "label": "Hexadentate ligand forming 5 chelate rings around metal cations"
      }
    ],
    "doodleBadge": "Chelate = Ring\n[Ni(en)₃]²⁺ > [Ni(NH₃)₆]²⁺\nDriven by +ΔS entropy\n5/6-membered rings",
    "doodleSubtext": "Thermodynamic Stability",
    "explanation": "Once one donor atom binds, the second donor atom is held in close physical proximity to the metal center, dramatically lowering the activation barrier for subsequent coordination.",
    "alsoRemember": "Chelating agents like EDTA are used medically to treat heavy metal lead poisoning by forming non-toxic, water-soluble, stable excreted chelates.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.3 Stability of Coordination Compounds.",
    "neetTrap": "The chelate effect is predominantly an ENTROPY effect (+ΔS), not an enthalpy effect (-ΔH)!",
    "tags": [
      "Coordination Chemistry",
      "Chelate Effect",
      "Thermodynamics",
      "EDTA"
    ],
    "quiz": {
      "question": "The enhanced stability of chelate complexes (the Chelate Effect) is primarily driven by which thermodynamic factor?",
      "options": [
        "Extremely large negative enthalpy change (ΔH << 0)",
        "Favorable positive entropy change (ΔS > 0)",
        "Zero activation energy",
        "Decreased lattice enthalpy"
      ],
      "answerIndex": 1,
      "explanation": "The chelate effect is predominantly driven by entropy (ΔS > 0) because one polydentate ligand displaces multiple monodentate ligand molecules into solution."
    }
  },
  {
    "id": "chem-ch14-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-3",
    "topicTitle": "IUPAC Naming Rules for Cationic, Anionic, and Neutral Coordination Complexes",
    "topic": "IUPAC Naming Rules for Complexes",
    "mnemonicNumber": 11,
    "title": "IUPAC Naming: Cation First, Alphabetical Ligands, Anionic Metal Ends in \"-ate\", Oxidation State in Roman ( )!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "1. Cation named before Anion | 2. Ligands listed alphabetically | 3. If complex is ANION, metal gets \"-ate\" | 4. Roman numeral for O.N.!",
    "memoryHook": "In K4[Fe(CN)6]: Cation is Potassium. Complex [Fe(CN)6]4- is an ANION, so iron becomes 'ferrate': Potassium hexacyanidoferrate(II). In [Co(NH3)6]Cl3: Complex is CATION, so cobalt stays 'cobalt': Hexaamminecobalt(III) chloride.",
    "fact": "Key IUPAC naming rules: 1. Ligands: Neutral ligands have special names: H2O = aqua, NH3 = ammine (double m!), CO = carbonyl, NO = nitrosyl. 2. Anionic ligands end in -ido (chlorido, cyanido, hydroxido). 3. If ligand name contains prefixes (like ethylenediamine), use bis, tris, tetrakis. 4. Metal in anionic complex: iron → ferrate, lead → plumbate, tin → stannate, gold → aurate, copper → cuprate.",
    "breakdown": [
      {
        "key": "NH₃ Neutral",
        "label": "Named 'ammine' (with double 'm', unlike amine)"
      },
      {
        "key": "Anionic Complex",
        "label": "Metal name ends with suffix '-ate' (e.g. Cobaltate, Ferrate, Cuprate)"
      },
      {
        "key": "Cationic / Neutral",
        "label": "Metal retains common name (Cobalt, Iron, Copper)"
      },
      {
        "key": "Oxidation Number",
        "label": "Written in Roman numerals in parentheses immediately following metal"
      }
    ],
    "doodleBadge": "K₄[Fe(CN)₆] =\nPotassium\nhexacyanidoferrate(II)\nDouble 'm' in ammine!",
    "doodleSubtext": "IUPAC Nomenclature",
    "explanation": "Systematic IUPAC nomenclature uniquely establishes the identity, connectivity, coordination sphere charge, and central metal oxidation state.",
    "alsoRemember": "In bridging complexes, bridging ligands are designated by the prefix Greek letter μ- (mu).",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.2 Nomenclature of Coordination Compounds.",
    "neetTrap": "NH3 ligand is spelled \"ammine\" with TWO m's. Writing \"amine\" with one m in competitive examinations is an immediate distractor trap!",
    "tags": [
      "Coordination Chemistry",
      "IUPAC Naming",
      "Nomenclature",
      "Ferrate"
    ],
    "quiz": {
      "question": "What is the correct IUPAC name for the complex [Co(NH3)5Cl]Cl2?",
      "options": [
        "Pentaaminechlorocobalt(III) chloride",
        "Pentaamminechloridocobalt(III) chloride",
        "Pentaamminechloridocobaltate(III) chloride",
        "Chloropentamminecobalt(II) chloride"
      ],
      "answerIndex": 1,
      "explanation": "The complex is cationic, so cobalt retains its common name; NH3 is \"ammine\", Cl- is \"chlorido\", listed alphabetically: Pentaamminechloridocobalt(III) chloride."
    }
  },
  {
    "id": "chem-ch14-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Denticity of Common Ligands (Monodentate, Bidentate, Ambidentate, Hexadentate)",
    "topic": "Denticity of Common Ligands",
    "mnemonicNumber": 12,
    "title": "Ligand Denticity: Oxalate & En are Bidentate (2 Donors); EDTA4- is Hexadentate (6 Donors)!",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Bidentate = Oxalate (ox²⁻), Ethylenediamine (en), Glycinate (gly⁻) | Hexadentate = EDTA⁴⁻ (2 N + 4 O donors)!",
    "memoryHook": "Denticity is the number of coordinating donor atoms with which a ligand binds to a single central metal atom. Monodentate binds with 1 tooth; Bidentate bites with 2 teeth; Hexadentate bites with 6 teeth!",
    "fact": "Denticity summary: 1. Monodentate: H2O, NH3, Cl⁻, CN⁻, OH⁻. 2. Bidentate (Didentate): Ethylenediamine (en, neutral, 2 N donors), Oxalate (ox²⁻, C2O4²⁻, 2 O donors), Glycinate (gly⁻, 1 N + 1 O donor, unsymmetrical). 3. Tridentate: Diethylenetriamine (dien, 3 N donors). 4. Hexadentate: Ethylenediaminetetraacetate (EDTA⁴⁻, 2 amine N donors + 4 acetate carboxylate O donors).",
    "breakdown": [
      {
        "key": "en (Ethylenediamine)",
        "label": "Symmetrical neutral bidentate (NH₂-CH₂-CH₂-NH₂)"
      },
      {
        "key": "ox²⁻ (Oxalate)",
        "label": "Symmetrical dianionic bidentate (⁻OOC-COO⁻)"
      },
      {
        "key": "gly⁻ (Glycinate)",
        "label": "Unsymmetrical bidentate (NH₂-CH₂-COO⁻)"
      },
      {
        "key": "EDTA⁴⁻",
        "label": "Hexadentate with 6 total donor atoms (2 N + 4 O)"
      }
    ],
    "doodleBadge": "en = 2 N donors\nox²⁻ = 2 O donors\nEDTA⁴⁻ = 2 N + 4 O\nDenticity = Teeth count",
    "doodleSubtext": "Ligand Denticity",
    "explanation": "The coordination number of a metal is the total number of ligand donor atoms bound to it, which equals (number of ligands × their denticity).",
    "alsoRemember": "Coordination number of [Co(en)3]3+ is 6, NOT 3, because each of the 3 'en' ligands is bidentate (3 × 2 = 6)!",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.1 Types of Ligands.",
    "neetTrap": "Do not confuse number of ligands with coordination number! In [Fe(ox)3]3-, there are 3 oxalate ligands, but the coordination number is 3 × 2 = 6.",
    "tags": [
      "Coordination Chemistry",
      "Denticity",
      "Bidentate",
      "EDTA",
      "Coordination Number"
    ],
    "quiz": {
      "question": "What is the coordination number of the central cobalt atom in [Co(en)2Cl2]+?",
      "options": [
        "4",
        "5",
        "6",
        "8"
      ],
      "answerIndex": 2,
      "explanation": "Ethylenediamine (en) is bidentate (occupying 2 coordination sites each), and there are 2 chloride monodentate ligands. Total coordination number = (2 × 2) + (2 × 1) = 6."
    }
  },
  {
    "id": "chem-ch14-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Ambidentate Ligands: Definition and Linkage Isomerism Pairs",
    "topic": "Ambidentate Ligands",
    "mnemonicNumber": 13,
    "title": "Ambidentate Chameleons: NO2⁻ (Nitro vs Nitrito) & SCN⁻ (Thiocyanato vs Isothiocyanato)!",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "concept",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Ambidentate = Has TWO different donor atoms, but binds through ONLY ONE at a time!",
    "memoryHook": "Ambi means 'both' (like ambidextrous). NO2⁻ can bind through Nitrogen (-NO2, nitro) OR through Oxygen (-ONO, nitrito). SCN⁻ can bind through Sulfur (-SCN, thiocyanato) OR through Nitrogen (-NCS, isothiocyanato). CN⁻ can bind through Carbon (-CN, cyano) OR Nitrogen (-NC, isocyano).",
    "fact": "Ambidentate ligand definition: A monodentate ligand that possesses two different donor atoms through either of which it can coordinate to a central metal ion. It coordinates via only ONE donor atom at any given time, thereby producing linkage isomerism in coordination compounds.",
    "breakdown": [
      {
        "key": "NO₂⁻ Group",
        "label": "Binds via N: Nitro (-NO₂) | Binds via O: Nitrito (-ONO)"
      },
      {
        "key": "SCN⁻ Group",
        "label": "Binds via S: Thiocyanato (-SCN) | Binds via N: Isothiocyanato (-NCS)"
      },
      {
        "key": "CN⁻ Group",
        "label": "Binds via C: Cyanido (-CN) | Binds via N: Isocyanido (-NC)"
      },
      {
        "key": "Consequence",
        "label": "Exclusively causes Linkage Isomerism in coordination complexes"
      }
    ],
    "doodleBadge": "Ambidentate:\n2 possible donor atoms\nOnly 1 binds at a time\nYields Linkage Isomers",
    "doodleSubtext": "Dual-Donor Monodentates",
    "explanation": "Steric geometry and metal orbital overlaps prevent simultaneous binding of both adjacent donor atoms of these small anions to the same metal ion.",
    "alsoRemember": "Do not confuse ambidentate with bidentate! A bidentate ligand binds through BOTH donor atoms simultaneously; an ambidentate ligand binds through only ONE at a time.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.1 Ambidentate Ligands.",
    "neetTrap": "Ambidentate ligands are MONODENTATE, never bidentate! They possess two donor atoms, but use only one at a time.",
    "tags": [
      "Coordination Chemistry",
      "Ambidentate",
      "Ligands",
      "Linkage Isomerism"
    ],
    "quiz": {
      "question": "Which of the following is an example of an ambidentate ligand?",
      "options": [
        "H2O",
        "en (ethylenediamine)",
        "NO2⁻",
        "C2O4²⁻ (oxalate)"
      ],
      "answerIndex": 2,
      "explanation": "The nitrite ion (NO2⁻) is ambidentate because it can coordinate to the central metal through either its nitrogen atom (-NO2) or its oxygen atom (-ONO)."
    }
  },
  {
    "id": "chem-ch14-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-2",
    "topicTitle": "Jahn-Teller Distortion in Octahedral Complexes (d9 and High-Spin d4)",
    "topic": "Jahn-Teller Distortion",
    "mnemonicNumber": 14,
    "title": "Jahn-Teller Distortion: Asymmetric eg Orbitals (d9 Cu2+) Cause Tetragonal Elongation along Z-Axis!",
    "badgeText": "NEET PYQ",
    "importance": "Medium",
    "difficulty": "hard",
    "visualType": "concept",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Jahn-Teller Theorem: Unequally filled eg orbitals (eg³ or eg¹) remove degeneracy by distorting symmetry (Cu²⁺ d⁹ is classic)!",
    "memoryHook": "In Cu2+ (3d9, t2g6 eg3), one eg orbital has 2 electrons (dz2) and the other has 1 electron (dx2-y2). The extra electron on dz2 repels the two axial ligands above and below along the z-axis, pushing them farther away! This produces 4 short equatorial bonds and 2 long axial bonds (tetragonal elongation).",
    "fact": "Jahn-Teller Effect: Any non-linear molecular system in a degenerate electronic state is unstable and will undergo geometrical distortion to lower its symmetry and remove degeneracy. Strong distortion occurs with asymmetric eg filling: Cu2+ (d9: t2g6 eg3), high-spin Cr2+ / Mn3+ (d4: t2g3 eg1), and low-spin Ni3+ (d7: t2g6 eg1). Asymmetric t2g filling produces only very weak distortion.",
    "breakdown": [
      {
        "key": "Classic Ion",
        "label": "Cu²⁺ (d⁹ system, eg³ configuration)"
      },
      {
        "key": "Geometry Result",
        "label": "Tetragonally elongated octahedron (4 short bonds in xy plane, 2 long bonds along z)"
      },
      {
        "key": "Drive",
        "label": "Splits degenerate eg into lower dz² and higher dx²-y², minimizing total energy"
      }
    ],
    "doodleBadge": "Cu²⁺ (d⁹) = Jahn-Teller\n4 Short equatorial bonds\n2 Long axial bonds\nAsymmetric eg³ filling",
    "doodleSubtext": "Tetragonal Distortion",
    "explanation": "Because eg orbitals point directly at octahedral ligands, asymmetric occupation of eg causes large differential electrostatic repulsion along the Cartesian axes.",
    "alsoRemember": "[Cu(H2O)6]2+ has 4 short equatorial Cu-O bonds (~1.97 Å) and 2 elongated axial Cu-O bonds (~2.30 Å).",
    "ncertConnection": "NCERT Class 12 Chemistry Advanced Coordination Concepts.",
    "neetTrap": "Symmetric eg filling (like d3: t2g3 eg0, d8: t2g6 eg2, and d10: t2g6 eg4) does NOT show Jahn-Teller distortion.",
    "tags": [
      "Coordination Chemistry",
      "Jahn-Teller",
      "Cu2+",
      "Distortion",
      "Advanced"
    ],
    "quiz": {
      "question": "Which of the following transition metal ions in an octahedral field exhibits strong Jahn-Teller distortion?",
      "options": [
        "Cr3+ (d3)",
        "Ni2+ (d8)",
        "Cu2+ (d9)",
        "Zn2+ (d10)"
      ],
      "answerIndex": 2,
      "explanation": "Cu2+ has a 3d9 configuration with an asymmetric eg3 electron distribution, causing significant tetragonal distortion (Jahn-Teller effect)."
    }
  },
  {
    "id": "chem-ch14-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Biological Importance of Coordination Compounds (Chlorophyll, Hemoglobin, Vitamin B12, Cisplatin)",
    "topic": "Biological Importance of Coordination Complexes",
    "mnemonicNumber": 15,
    "title": "Biological Coordination Metals: Mg in Chlorophyll, Fe in Hemoglobin, Co in B12, Pt in Cisplatin!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFE4FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Mg = Green Leaves (Chlorophyll) | Fe = Red Blood (Hemoglobin) | Co = Vitamin B12 (Cyanocobalamin) | Pt = Cancer Killer (Cisplatin)!",
    "memoryHook": "Four metals you MUST memorize for NEET: 1. Magnesium (Mg2+) is the central coordination atom in chlorophyll porphyrin. 2. Iron (Fe2+) is coordinated to the heme porphyrin ring in hemoglobin. 3. Cobalt (Co3+) is the central metal ion in Vitamin B12. 4. Platinum (Pt2+) is in cis-diamminedichloridoplatinum(II) (Cisplatin), used in chemotherapy!",
    "fact": "Key biological coordination complexes: 1. Chlorophyll: Photosynthetic pigment, coordination complex of Magnesium (Mg). 2. Hemoglobin: Oxygen carrier in blood, coordination complex of Iron (Fe2+). 3. Vitamin B12 (Cyanocobalamin): Coordination complex of Cobalt (Co). 4. Carbonic anhydrase & Carboxypeptidase-A: Zinc (Zn) metalloenzymes. 5. Cisplatin: Anti-tumor platinum complex.",
    "breakdown": [
      {
        "key": "Chlorophyll",
        "label": "Magnesium (Mg) porphyrin coordination complex"
      },
      {
        "key": "Hemoglobin & Myoglobin",
        "label": "Iron (Fe²⁺) heme porphyrin coordination complex"
      },
      {
        "key": "Vitamin B₁₂",
        "label": "Cobalt (Co) corrin ring coordination complex"
      },
      {
        "key": "Cis-platin",
        "label": "Cis-[Pt(NH₃)₂Cl₂] used to inhibit DNA replication in cancer tumors"
      }
    ],
    "doodleBadge": "Chlorophyll → Mg\nHemoglobin → Fe\nVitamin B₁₂ → Co\nCisplatin → Pt",
    "doodleSubtext": "Biological Metals",
    "explanation": "The macrocyclic porphyrin and corrin ring frameworks provide optimal cavity sizes for tightly chelating these specific metal cations.",
    "alsoRemember": "Wilkinson's catalyst [RhCl(PPh3)3] is a homogeneous coordination catalyst of Rhodium used for the hydrogenation of alkenes.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.8 Applications of Coordination Compounds.",
    "neetTrap": "Wilson's disease (excess copper) is treated using D-penicillamine chelating agent; Lead poisoning is treated with EDTA chelating agent.",
    "tags": [
      "Coordination Chemistry",
      "Biomolecules",
      "Chlorophyll",
      "Hemoglobin",
      "Vitamin B12"
    ],
    "quiz": {
      "question": "Which central metal ion is coordinated within the structure of Vitamin B12 (cyanocobalamin)?",
      "options": [
        "Iron",
        "Cobalt",
        "Magnesium",
        "Zinc"
      ],
      "answerIndex": 1,
      "explanation": "Vitamin B12 is a coordination complex containing Cobalt (Co) at the center of its corrin ring system."
    }
  },
  {
    "id": "chem-ch14-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-2",
    "topicTitle": "Color Origin in Coordination Complexes: Ligand Field Strength & Complementary Absorbed Colors",
    "topic": "Color Origin in Coordination Complexes",
    "mnemonicNumber": 16,
    "title": "Color Wheel Trick: VIBGYOR Opposites! If Red Absorbed → Green Transmitted (and Vice Versa)!",
    "badgeText": "Color Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "color",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Complementary Color Pairs: Red ↔ Green | Blue ↔ Orange | Violet ↔ Yellow!",
    "memoryHook": "When a coordination complex absorbs light of wavelength λ corresponding to Δo = hc/λ, the human eye observes the COMPLEMENTARY color transmitted. Absorbs Red (low energy, long λ) → looks Green. Absorbs Yellow → looks Violet. Absorbs Blue → looks Orange!",
    "fact": "Color in coordination complexes depends on: 1. The magnitude of crystal field splitting Δo (E = hc/λ). Strong field ligands produce large Δo, absorbing higher energy (shorter λ, blue/violet), transmitting longer λ (yellow/red). 2. Weak field ligands produce small Δo, absorbing low energy (long λ, red/yellow), transmitting shorter λ (green/blue). 3. Absence of ligand field = No splitting = Colorless (anhydrous CuSO4 is white, but hydrated [Cu(H2O)4]2+ is deep blue).",
    "breakdown": [
      {
        "key": "Red Absorbed",
        "label": "Transmits Green (Complementary pair)"
      },
      {
        "key": "Blue Absorbed",
        "label": "Transmits Orange (Complementary pair)"
      },
      {
        "key": "Yellow Absorbed",
        "label": "Transmits Violet (Complementary pair)"
      },
      {
        "key": "Anhydrous vs Hydrated",
        "label": "Anhydrous CuSO₄ is white; hydrated [Cu(H₂O)₄]²⁺ is blue due to ligand field"
      }
    ],
    "doodleBadge": "Color Wheel Pairs:\nRed ↔ Green\nBlue ↔ Orange\nViolet ↔ Yellow\nΔo = hc/λ",
    "doodleSubtext": "Complementary Absorption",
    "explanation": "The observed color is the vector sum of all wavelengths transmitted after specific wavelengths are absorbed by d-d transitions.",
    "alsoRemember": "Heating hydrated blue copper sulfate drives off coordinated water ligands, causing crystal field splitting to collapse and turning the salt white.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.5.5 Colour in Coordination Compounds.",
    "neetTrap": "The color of the complex is the COMPLEMENTARY color to the one absorbed, NOT the color absorbed!",
    "tags": [
      "Coordination Chemistry",
      "Color Wheel",
      "d-d Transition",
      "Complementary Color"
    ],
    "quiz": {
      "question": "Why is anhydrous CuSO4 white, whereas hydrated CuSO4·5H2O is blue?",
      "options": [
        "Anhydrous CuSO4 undergoes reduction to Cu+",
        "In the absence of ligands (H2O), crystal field splitting does not occur, preventing d-d transitions",
        "Water molecules emit blue visible light directly",
        "Anhydrous CuSO4 lacks d-electrons"
      ],
      "answerIndex": 1,
      "explanation": "In anhydrous CuSO4, without ligands to cause crystal field splitting of the d-orbitals, d-d transitions cannot take place, making the compound colorless (white)."
    }
  },
  {
    "id": "chem-ch14-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Effective Atomic Number (EAN / Sidgwick Rule)",
    "topic": "Effective Atomic Number (EAN)",
    "mnemonicNumber": 17,
    "title": "EAN Rule: EAN = (Z - Oxidation State) + 2 × (Coordination Number) → Aims for Noble Gas (36, 54, 86)!",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "EAN = Z - O.N. + 2(CN) | If EAN = 36 (Kr), 54 (Xe), or 86 (Rn), the complex has extra stability!",
    "memoryHook": "In K4[Fe(CN)6]: Fe (Z=26), O.N. = +2, CN = 6. EAN = 26 - 2 + (2 × 6) = 24 + 12 = 36 (Noble gas Krypton)! Follows Sidgwick EAN rule perfectly.",
    "fact": "Effective Atomic Number (EAN): The total number of electrons surrounding the central metal nucleus in a complex, including those gained from coordinating ligands. Formula: EAN = Z - (Oxidation Number) + 2 × (Coordination Number). If the EAN equals the atomic number of the next inert gas, the complex possesses heightened stability.",
    "breakdown": [
      {
        "key": "Formula",
        "label": "EAN = Z - (Oxidation State) + 2 × (Coordination Number)"
      },
      {
        "key": "[Fe(CN)₆]⁴⁻",
        "label": "26 - 2 + (2 × 6) = 36 (Krypton [Kr]) → Follows EAN rule"
      },
      {
        "key": "[Ni(CO)₄]",
        "label": "28 - 0 + (2 × 4) = 36 (Krypton [Kr]) → Follows EAN rule"
      },
      {
        "key": "[Fe(CN)₆]³⁻",
        "label": "26 - 3 + (2 × 6) = 35 → Does NOT obey EAN rule (paramagnetic)"
      }
    ],
    "doodleBadge": "EAN = Z - O.N. + 2(CN)\nGoal: Noble gas 36, 54, 86\n[Fe(CN)₆]⁴⁻ = 36\n[Ni(CO)₄] = 36",
    "doodleSubtext": "Sidgwick EAN Formula",
    "explanation": "Sidgwick extended Lewis octet concept to transition metals, postulating that ligands donate electron pairs until the metal valence shell mirrors a stable noble gas configuration.",
    "alsoRemember": "Metal carbonyls obey the 18-electron rule, which is the modern quantum mechanical equivalent of the Sidgwick EAN rule.",
    "ncertConnection": "NCERT Class 12 Chemistry Bonding in Coordination Compounds.",
    "neetTrap": "For monodentate ligands, each contributes 2 electrons. If a bidentate ligand is present, each ligand contributes 4 electrons (2 pairs)!",
    "tags": [
      "Coordination Chemistry",
      "EAN",
      "Sidgwick Rule",
      "Noble Gas"
    ],
    "quiz": {
      "question": "What is the Effective Atomic Number (EAN) of nickel in the tetrahedral complex [Ni(CO)4] (Atomic Number of Ni = 28)?",
      "options": [
        "34",
        "35",
        "36",
        "38"
      ],
      "answerIndex": 2,
      "explanation": "In [Ni(CO)4], oxidation state of Ni is 0, and coordination number is 4. EAN = 28 - 0 + (2 × 4) = 36 (equivalent to the noble gas Krypton)."
    }
  },
  {
    "id": "chem-ch14-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Thermodynamic vs Kinetic Stability and Overall Formation Constant (βn)",
    "topic": "Formation Constants of Coordination Complexes",
    "mnemonicNumber": 18,
    "title": "Stability Constant β: Stepwise Formation Constants Multiply: βn = K1 × K2 × ... × Kn (Log βn = Σ Log K)!",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Overall Formation Constant βn is the product of stepwise equilibrium constants: K1 > K2 > K3 > ... > Kn!",
    "memoryHook": "Why does K1 > K2 > K3? Because as ligands attach to the central metal, positive charge density decreases, steric crowding increases, and fewer vacant coordination sites remain available!",
    "fact": "Formation of MLn occurs in stepwise equilibria: M + L ⇌ ML (K1); ML + L ⇌ ML2 (K2); ... MLn-1 + L ⇌ MLn (Kn). Overall stability constant βn = [MLn] / ([M][L]^n) = K1 · K2 · ... · Kn. The instability constant (dissociation constant) is simply the reciprocal: Kinst = 1 / βn.",
    "breakdown": [
      {
        "key": "Overall Constant",
        "label": "βn = K₁ × K₂ × K₃ × ... × Kn"
      },
      {
        "key": "Logarithmic Form",
        "label": "log βn = log K₁ + log K₂ + ... + log Kn"
      },
      {
        "key": "Stepwise Trend",
        "label": "K₁ > K₂ > K₃ due to steric hindrance and decreased electrostatic attraction"
      },
      {
        "key": "Instability Constant",
        "label": "Kinst = 1 / βn"
      }
    ],
    "doodleBadge": "βn = K₁ × K₂ × ... × Kn\nK₁ > K₂ > K₃ > Kn\nKinst = 1 / βn",
    "doodleSubtext": "Complex Equilibria",
    "explanation": "Statistical factors, increased steric crowding around the central atom, and diminished electrostatic attraction ensure each subsequent ligand binds with lower affinity.",
    "alsoRemember": "Thermodynamic stability is measured by βn; kinetic stability refers to the rate of ligand substitution (labile vs inert complexes).",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.3 Stability of Coordination Compounds.",
    "neetTrap": "Do not confuse stability with inertia! A thermodynamically very stable complex (huge βn) can be kinetically labile (substitutes ligands rapidly in seconds).",
    "tags": [
      "Coordination Chemistry",
      "Stability Constant",
      "Stepwise Formation",
      "Thermodynamics"
    ],
    "quiz": {
      "question": "If the stepwise formation constants for a complex ML3 are log K1 = 4.0, log K2 = 3.2, and log K3 = 2.4, what is the overall formation constant log β3?",
      "options": [
        "9.6",
        "3.2",
        "30.7",
        "4.0"
      ],
      "answerIndex": 0,
      "explanation": "Since β3 = K1 × K2 × K3, taking logarithms yields log β3 = log K1 + log K2 + log K3 = 4.0 + 3.2 + 2.4 = 9.6."
    }
  },
  {
    "id": "chem-ch14-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Bridging Ligands and Polynuclear Coordination Complexes",
    "topic": "Bridging Ligands and μ-Prefix Nomenclature",
    "mnemonicNumber": 19,
    "title": "Bridging Ligands: Denoted by Greek 'μ-'; Ligands like OH⁻, NH2⁻, Cl⁻ Bridge Two Metal Centers!",
    "badgeText": "Concept Rule",
    "importance": "Medium",
    "difficulty": "hard",
    "visualType": "concept",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "μ (mu) = Bridge! When a single ligand connects two or more metal atoms, prefix with μ- (mu-hydroxido, μ-amido)!",
    "memoryHook": "In [(NH3)4Co - (μ-NH2)(μ-NO2) - Co(NH3)4]4+: Two cobalt atoms are bridged by an amido (NH2⁻) and a nitro (NO2⁻) group. In IUPAC nomenclature, bridging ligands are preceded by the prefix μ-.",
    "fact": "Polynuclear complexes contain two or more central metal atoms linked either by direct metal-metal bonds or through bridging ligands. Common bridging ligands include OH⁻, O²⁻, NH2⁻, Cl⁻, CO. If a ligand bridges two metals it is μ2 (often written simply as μ); if three metals, it is μ3.",
    "breakdown": [
      {
        "key": "μ-Prefix",
        "label": "Designates a bridging ligand connecting metal centers"
      },
      {
        "key": "Common Bridges",
        "label": "Hydroxido (μ-OH), Amido (μ-NH₂), Chlorido (μ-Cl), Carbonyl (μ-CO)"
      },
      {
        "key": "Fe₂(CO)₉",
        "label": "Nonacarbonyl diiron has 3 bridging CO ligands and 6 terminal CO ligands"
      }
    ],
    "doodleBadge": "μ-Prefix = Bridge\n[(NH₃)₄Co-(μ-OH)₂-Co(NH₃)₄]⁴⁺\nConnects 2 metal centers",
    "doodleSubtext": "Polynuclear Bridges",
    "explanation": "A ligand with more than one available lone pair or bonding capability can coordinate simultaneously to two separate metal centers to form a bridging link.",
    "alsoRemember": "Fe2(CO)9 contains 3 bridging carbonyls and a direct Fe-Fe metal-metal bond, making both iron atoms achieve 18 valence electrons.",
    "ncertConnection": "NCERT Class 12 Chemistry Advanced Coordination Concepts.",
    "neetTrap": "The letter μ (mu) in coordination chemistry denotes a BRIDGING ligand, NOT magnetic dipole moment or micron units!",
    "tags": [
      "Coordination Chemistry",
      "Bridging Ligands",
      "Polynuclear",
      "Nomenclature"
    ],
    "quiz": {
      "question": "In coordination chemistry nomenclature, what does the Greek prefix μ- (mu) signify before a ligand name?",
      "options": [
        "The ligand is chelating",
        "The ligand is bridging two or more metal centers",
        "The ligand is ambidentate",
        "The ligand is optically active"
      ],
      "answerIndex": 1,
      "explanation": "The prefix μ- is used to designate a bridging ligand that connects two or more central metal atoms."
    }
  },
  {
    "id": "chem-ch14-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-14",
    "chapterNumber": 14,
    "chapterTitle": "Coordination Compounds",
    "topicId": "chem-top-14-1",
    "topicTitle": "Applications of Coordination Compounds: Extraction of Gold/Silver & Water Hardness Estimation",
    "topic": "Industrial and Analytical Applications of Complexes",
    "mnemonicNumber": 20,
    "title": "Applications: Cyanide Process Leaches Gold/Silver [M(CN)2]⁻; EDTA Titrates Hard Water (Ca2+/Mg2+)!",
    "badgeText": "NEET PYQ",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Gold/Silver extracted as [M(CN)2]⁻ → displaced by Zinc! Hardness of water estimated by titration with EDTA⁴⁻!",
    "memoryHook": "1. Mac-Arthur Forrest Cyanide Process: 4Au + 8CN⁻ + 2H2O + O2 → 4[Au(CN)2]⁻ + 4OH⁻. Zinc displaces gold: 2[Au(CN)2]⁻ + Zn → [Zn(CN)4]²⁻ + 2Au! 2. Water hardness: Ca2+ and Mg2+ form stable 1:1 chelates with EDTA⁴⁻ at pH 10 with Eriochrome Black-T (EBT) indicator (wine-red to blue end point)!",
    "fact": "Key industrial and analytical applications: 1. Metallurgy: Extraction of Gold and Silver via dicyanido complexes [Au(CN)2]⁻ and [Ag(CN)2]⁻, followed by zinc dust displacement. 2. Purification of Nickel: Mond Process forms volatile Ni(CO)4 which decomposes at 450-470 K to yield 99.9% pure Ni. 3. Water Hardness: Complexometric titration with disodium EDTA at pH ~10 using EBT indicator. 4. Analytical: Ni2+ estimated as bright scarlet-red precipitate [Ni(DMG)2] with dimethylglyoxime.",
    "breakdown": [
      {
        "key": "Gold/Silver Metallurgy",
        "label": "Leached into solution as soluble dicyanido complexes [M(CN)₂]⁻"
      },
      {
        "key": "Mond Process (Ni)",
        "label": "Purification via volatile tetracarbonylnickel(0) [Ni(CO)₄]"
      },
      {
        "key": "Water Hardness (Ca/Mg)",
        "label": "Complexometric titration with Na₂EDTA using EBT indicator"
      },
      {
        "key": "Ni²⁺ Test (DMG)",
        "label": "Forms rosy red [Ni(DMG)₂] chelate stabilized by H-bonding"
      }
    ],
    "doodleBadge": "Gold: [Au(CN)₂]⁻ + Zn\nNickel: Ni(CO)₄ Mond\nHard Water: EDTA Titration\nNi²⁺: Red [Ni(DMG)₂]",
    "doodleSubtext": "Analytical Applications",
    "explanation": "Selective complexation enables separation, purification, and quantitative determination of metal ions in metallurgy and analytical chemistry.",
    "alsoRemember": "[Ni(DMG)2] is a square planar, neutral, red precipitate stabilized by two symmetrical O-H···O hydrogen bonds.",
    "ncertConnection": "NCERT Class 12 Chemistry Section 9.8 Applications of Coordination Compounds.",
    "neetTrap": "In the nickel-DMG complex [Ni(DMG)2], the red color and square planar geometry are stabilized by INTRAMOLECULAR hydrogen bonding!",
    "tags": [
      "Coordination Chemistry",
      "EDTA",
      "Mond Process",
      "DMG",
      "Gold Leaching"
    ],
    "quiz": {
      "question": "Which reagent is used in complexometric titration to estimate the total hardness of water caused by Ca2+ and Mg2+ ions?",
      "options": [
        "Sodium chloride",
        "Disodium salt of EDTA",
        "Potassium permanganate",
        "Potassium dichromate"
      ],
      "answerIndex": 1,
      "explanation": "Disodium EDTA forms stable, water-soluble 1:1 hexadentate chelate complexes with Ca2+ and Mg2+ at pH 10, enabling precise quantitative titration of water hardness."
    }
  }
];
