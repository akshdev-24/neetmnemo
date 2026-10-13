export const chemCh04Mnemonics = [
  {
    "id": "mnemo-chem-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Steric Number Hybridization",
    "mnemonicNumber": 1,
    "title": "Steric Number: Instant Hybridization Formula",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFE4FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Steric Number = ½ [Valence e⁻ + Monovalents - Cation + Anion]",
    "memoryHook": "SN = 2 (sp, Linear), SN = 3 (sp², Trigonal), SN = 4 (sp³, Tetrahedral), SN = 5 (sp³d, TBP), SN = 6 (sp³d², Octahedral)!",
    "fact": "Formula: SN = ½[V + M - C + A]. V = Valence electrons of central atom, M = Number of monovalent single-bond atoms (H, F, Cl, Br, I), C = positive charge, A = negative charge.",
    "breakdown": [
      {
        "key": "SN = 2",
        "label": "sp (180° Linear, e.g. BeCl2, CO2)"
      },
      {
        "key": "SN = 3",
        "label": "sp² (120° Trigonal planar, e.g. BF3)"
      },
      {
        "key": "SN = 4",
        "label": "sp³ (109.5° Tetrahedral, e.g. CH4, NH3, H2O)"
      },
      {
        "key": "SN = 5",
        "label": "sp³d (Trigonal Bipyramidal, e.g. PCl5, SF4)"
      },
      {
        "key": "SN = 6",
        "label": "sp³d² (Octahedral / Square Planar, e.g. SF6, XeF4)"
      }
    ],
    "doodleBadge": "SN = ½(V + M - C + A)",
    "doodleSubtext": "Hybridization Shortcut",
    "explanation": "For XeF4: Xenon has 8 valence e⁻, 4 Fluorines (monovalent). SN = ½(8 + 4) = 6 → sp³d². With 4 bonds + 2 lone pairs = Square Planar.",
    "alsoRemember": "In sp³d (PCl5), lone pairs ALWAYS go to Equatorial spots to minimize 90° repulsion. In sp³d² (XeF4), lone pairs go to Axial spots (180° apart).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.3.",
    "neetTrap": "Axial bonds in PCl5 are LONGER and WEAKER than equatorial bonds because they feel repulsion from 3 equatorial bonds at 90°.",
    "tags": [
      "Hybridization",
      "Chemical Bonding",
      "VSEPR",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the hybridization and molecular geometry of Xenon Tetrafluoride (XeF4)?",
      "options": [
        "sp³d, See-saw",
        "sp³d², Square Planar",
        "sp³d², Octahedral",
        "sp³, Tetrahedral"
      ],
      "answerIndex": 1,
      "explanation": "XeF4 has steric number ½(8+4)=6 (sp³d²) with 4 bond pairs and 2 axial lone pairs, giving a square planar geometry."
    }
  },
  {
    "id": "chem-ch04-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-3",
    "topicTitle": "MOT Bond Order Rapid Calculation",
    "mnemonicNumber": 2,
    "title": "MOT Bond Order Staircase: 14 Electrons is Peak 3.0!",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "14 Electrons = 3.0 Peak! Step down by 0.5 for every electron added or removed!",
    "memoryHook": "14e⁻ (N2) = 3.0; 13e⁻/15e⁻ = 2.5; 12e⁻/16e⁻ = 2.0; 11e⁻/17e⁻ = 1.5; 10e⁻/18e⁻ = 1.0; 8e⁻ = 0.0!",
    "fact": "Bond Order (BO) = ½(Nb - Na). For diatomic species between 8 and 20 electrons: 14 electrons (N2) has maximum BO = 3.0. Moving away from 14 by ±1 electron decreases Bond Order by exactly 0.5.",
    "breakdown": [
      {
        "key": "14 e⁻ (N2, CO, CN⁻, NO⁺)",
        "label": "Bond Order = 3.0 (Maximum stability, Diamagnetic)"
      },
      {
        "key": "15 e⁻ (O2⁺, NO)",
        "label": "Bond Order = 2.5 (Paramagnetic)"
      },
      {
        "key": "16 e⁻ (O2)",
        "label": "Bond Order = 2.0 (Paramagnetic, 2 unpaired in π*2px, π*2py)"
      },
      {
        "key": "17 e⁻ (O2⁻ superoxide)",
        "label": "Bond Order = 1.5 (Paramagnetic)"
      },
      {
        "key": "18 e⁻ (O2²⁻ peroxide, F2)",
        "label": "Bond Order = 1.0 (Diamagnetic)"
      }
    ],
    "doodleBadge": "14e⁻ = 3.0\n±1e⁻ = -0.5 BO",
    "doodleSubtext": "MOT Staircase",
    "explanation": "Stability is directly proportional to Bond Order, while Bond Length is inversely proportional: Bond Length: O2²⁻ (1.0) > O2⁻ (1.5) > O2 (2.0) > O2⁺ (2.5).",
    "alsoRemember": "Bond Order > 0 means stable molecule exists. Bond Order = 0 (He2, Be2, Ne2) means molecule cannot exist.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.7.",
    "neetTrap": "O2 (16 e⁻) and B2 (10 e⁻) are PARAMAGNETIC even though they have an EVEN number of total electrons!",
    "tags": [
      "MOT",
      "Bond Order",
      "Chemical Bonding",
      "High Yield"
    ],
    "quiz": {
      "question": "Which of the following oxygen species possesses the shortest O-O bond length?",
      "options": [
        "O2",
        "O2⁺",
        "O2⁻",
        "O2²⁻"
      ],
      "answerIndex": 1,
      "explanation": "O2⁺ has 15 electrons, giving bond order 2.5 (highest among the choices), which corresponds to the shortest bond length."
    }
  },
  {
    "id": "chem-ch04-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "VSEPR Repulsion Hierarchy",
    "mnemonicNumber": 3,
    "title": "VSEPR Repulsion Order: LP-LP > LP-BP > BP-BP",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Lone Pairs are Lonely Bullies: LP-LP repels strongest, BP-BP repels weakest!",
    "memoryHook": "Lone pairs are held by only ONE nucleus, so their electron clouds spread wide and push bonded pairs inward, squeezing bond angles below ideal tetrahedral (109.5°)!",
    "fact": "Repulsion hierarchy: Lone Pair - Lone Pair (LP-LP) > Lone Pair - Bond Pair (LP-BP) > Bond Pair - Bond Pair (BP-BP). In CH4 (0 LP) angle = 109.5°; in NH3 (1 LP) angle = 107°; in H2O (2 LP) angle = 104.5°.",
    "breakdown": [
      {
        "key": "CH4 (0 LP, 4 BP)",
        "label": "Regular tetrahedral, 109.5° angle"
      },
      {
        "key": "NH3 (1 LP, 3 BP)",
        "label": "Trigonal pyramidal, angle compressed to ~107°"
      },
      {
        "key": "H2O (2 LP, 2 BP)",
        "label": "Bent / V-shaped, angle strongly compressed to 104.5°"
      }
    ],
    "doodleBadge": "LP-LP > LP-BP > BP-BP",
    "doodleSubtext": "Angle Squeeze: 109.5° → 107° → 104.5°",
    "explanation": "Each lone pair on an sp³ central atom squeezes the adjacent bond angles down by approximately 2.5° due to asymmetric repulsion.",
    "alsoRemember": "In Drago’s molecules (PH3, AsH3, H2S, H2Se with central atom in 3rd period or below and attached to less electronegative atom H), hybridization does not occur and bond angles are near 90° pure p-orbitals.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.2.",
    "neetTrap": "Electronegativity of central atom decreases bond angle: H2O (104.5°) > H2S (92°) > H2Se (91°). As central atom becomes less electronegative, bond pairs sit farther away and repel less.",
    "tags": [
      "VSEPR",
      "Bond Angle",
      "Repulsion",
      "Class 11"
    ],
    "quiz": {
      "question": "Why is the H-O-H bond angle in water (104.5°) smaller than the H-N-H bond angle in ammonia (107°)?",
      "options": [
        "Oxygen is larger than nitrogen",
        "Water has two lone pairs exerting greater LP-LP and LP-BP repulsion than ammonia’s single lone pair",
        "Nitrogen is more electronegative than oxygen",
        "Ammonia has sp² hybridization while water is sp³"
      ],
      "answerIndex": 1,
      "explanation": "Water possesses 2 lone pairs on oxygen which exert strong LP-LP and LP-BP repulsion, squeezing the bond angle down to 104.5° compared to 107° in NH3 (1 LP)."
    }
  },
  {
    "id": "chem-ch04-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Dipole Moment: NH3 vs NF3 Comparison",
    "mnemonicNumber": 4,
    "title": "Dipole Moment Showdown: NH3 (μ = 1.47 D) >> NF3 (μ = 0.24 D)",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "NH3 Reinforces, NF3 Cancels Out!",
    "memoryHook": "In NH3, N pulls from H in the SAME direction as the lone pair vector (arrows add up). In NF3, F pulls AWAY from N, OPPOSING the lone pair vector (arrows subtract)!",
    "fact": "Both NH3 and NF3 have pyramidal geometry with 1 lone pair. In NH3, dipole vectors of N-H bonds point toward N and reinforce the orbital dipole of the lone pair (net μ = 1.47 D). In NF3, F is more electronegative than N, so N-F bond dipoles point downward, opposing the upward lone pair dipole (net μ = 0.24 D).",
    "breakdown": [
      {
        "key": "NH3 Vectors",
        "label": "3 N-H bond dipoles (toward N) + Lone pair dipole (upward) = Combined additive result (μ = 1.47 D)"
      },
      {
        "key": "NF3 Vectors",
        "label": "3 N-F bond dipoles (downward toward F) oppose Lone pair dipole (upward) = Subtractive cancellation (μ = 0.24 D)"
      },
      {
        "key": "BF3 / CCl4 / CO2",
        "label": "Symmetrical geometries have net μ = 0 D despite polar individual bonds"
      }
    ],
    "doodleBadge": "μ(NH3) >> μ(NF3)\nAdd vs Oppose",
    "doodleSubtext": "Vector Sum Rule",
    "explanation": "Dipole moment is a vector quantity (μ = q × d). Even though F is far more electronegative than H, vector cancellation makes NF3 almost non-polar.",
    "alsoRemember": "For cis and trans isomers: cis-1,2-dichloroethene has net μ > 0, while trans-1,2-dichloroethene has μ = 0 due to 180° vector cancellation.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.3.1.",
    "neetTrap": "Do not assume NF3 has higher dipole moment just because Fluorine is the most electronegative element!",
    "tags": [
      "Dipole Moment",
      "NH3",
      "NF3",
      "NEET PYQ"
    ],
    "quiz": {
      "question": "Although fluorine is much more electronegative than hydrogen, why is the net dipole moment of NH3 (1.47 D) significantly greater than that of NF3 (0.24 D)?",
      "options": [
        "NH3 is planar while NF3 is tetrahedral",
        "In NH3 the N-H bond dipoles reinforce the lone pair dipole, whereas in NF3 the N-F dipoles oppose the lone pair dipole",
        "NF3 has two lone pairs on nitrogen",
        "N-F bond has zero polarity"
      ],
      "answerIndex": 1,
      "explanation": "In NF3, electronegative fluorine atoms pull electron density downward, directly opposing the upward dipole of the nitrogen lone pair."
    }
  },
  {
    "id": "chem-ch04-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "Fajan's Rules for Covalent Character",
    "mnemonicNumber": 5,
    "title": "Fajan's Rules: Small Cation, Big Anion, Fake Noble Gas!",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Small Boy (Cation), Fat Anion, Pseudo Noble Gas (Cu⁺) = Maximum Covalent Character!",
    "memoryHook": "A tiny cation with high charge polarizes the floppy electron cloud of a large anion, pulling electrons between them to create covalent bonding!",
    "fact": "Fajan’s Rules determine covalent character in ionic bonds: 1. Small cation size (LiCl > NaCl). 2. Large anion size (AgI > AgBr > AgCl > AgF). 3. High charge on either ion (AlCl3 > MgCl2 > NaCl). 4. Pseudo inert gas configuration (ns² np⁶ nd¹⁰ e.g. Cu⁺, Ag⁺) has higher polarizing power than noble gas cation (ns² np⁶ e.g. Na⁺, K⁺) due to poor shielding of d-electrons.",
    "breakdown": [
      {
        "key": "Small Cation",
        "label": "Higher charge density → stronger pulling power on anion cloud (Li⁺ > Na⁺ > K⁺)"
      },
      {
        "key": "Large Anion",
        "label": "Floppier valence shell → more easily polarized (I⁻ > Br⁻ > Cl⁻ > F⁻)"
      },
      {
        "key": "Pseudo Gas (18 e⁻)",
        "label": "CuCl (covalent, insoluble) vs NaCl (ionic, soluble in water)"
      }
    ],
    "doodleBadge": "Fajan's Rules:\nSmall Cation · Big Anion",
    "doodleSubtext": "Polarization = Covalency",
    "explanation": "Polarizing power of cation × polarizability of anion = Covalent character. Higher covalent character lowers melting point and water solubility.",
    "alsoRemember": "Melting point order: NaCl > MgCl2 > AlCl3 (as covalent character increases, melting point decreases).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.5.",
    "neetTrap": "AgCl is white, AgBr is pale yellow, AgI is deep yellow because increasing polarization in AgI shifts charge-transfer absorption into the visible spectrum.",
    "tags": [
      "Fajan's Rules",
      "Covalent Character",
      "Polarization",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following compounds exhibits the greatest covalent character according to Fajan’s rules?",
      "options": [
        "LiF",
        "LiCl",
        "LiBr",
        "LiI"
      ],
      "answerIndex": 3,
      "explanation": "LiI pairs a small polarizing cation (Li⁺) with the largest, most polarizable halide anion (I⁻), maximizing covalent character."
    }
  },
  {
    "id": "chem-ch04-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Hydrogen Bonding: Inter vs Intramolecular",
    "mnemonicNumber": 6,
    "title": "Hydrogen Bonding: o-Nitrophenol (Steam Volatile) vs p-Nitrophenol (High BP)",
    "badgeText": "NEET PYQ",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Ortho is Selfish (Intra = Chelation = Volatile) | Para Pairs Up (Inter = High BP)!",
    "memoryHook": "o-Nitrophenol forms an internal 6-membered hydrogen ring with ITSELF (intramolecular chelation), so it cannot stick to neighbors and evaporates easily with steam! p-Nitrophenol links across molecules (intermolecular) forming long chains with high boiling point!",
    "fact": "Intramolecular H-bonding occurs within the same molecule (o-nitrophenol, salicylaldehyde, o-hydroxybenzoic acid), reducing association, melting point, and boiling point, making them steam-volatile. Intermolecular H-bonding occurs between different molecules (p-nitrophenol, water, alcohols), causing association, high boiling points, and water solubility.",
    "breakdown": [
      {
        "key": "o-Nitrophenol (Intra)",
        "label": "Internal chelation ring → Lower BP, lower water solubility, STEAM VOLATILE"
      },
      {
        "key": "p-Nitrophenol (Inter)",
        "label": "Extensive intermolecular network → Higher BP, higher water solubility, NOT steam volatile"
      },
      {
        "key": "Separation",
        "label": "Separated in lab by steam distillation based on this exact difference!"
      }
    ],
    "doodleBadge": "o-Nitro: Intra (Steam Volatile)\np-Nitro: Inter (High BP)",
    "doodleSubtext": "H-Bonding Contrast",
    "explanation": "Steam distillation cleanly separates an ortho/para mixture because only the internally chelated ortho isomer vaporizes with steam.",
    "alsoRemember": "Hydrogen bond strength order: F-H···F > O-H···O > N-H···N. Only F, O, N atoms form significant H-bonds.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.8 & Class 12 Alcohols Chapter.",
    "neetTrap": "Boiling point of H2O (100°C) is higher than HF (19.5°C) even though F-H bond is stronger, because each H2O molecule forms FOUR hydrogen bonds, while HF forms only two.",
    "tags": [
      "Hydrogen Bonding",
      "o-Nitrophenol",
      "Steam Volatility",
      "Boiling Point"
    ],
    "quiz": {
      "question": "Which property allows ortho-nitrophenol to be separated from para-nitrophenol by steam distillation?",
      "options": [
        "ortho-Nitrophenol has intermolecular hydrogen bonding",
        "ortho-Nitrophenol has intramolecular hydrogen bonding making it steam volatile",
        "para-Nitrophenol has lower molecular weight",
        "ortho-Nitrophenol is a stronger acid"
      ],
      "answerIndex": 1,
      "explanation": "Intramolecular H-bonding in ortho-nitrophenol prevents intermolecular association, giving it a lower boiling point and steam volatility."
    }
  },
  {
    "id": "chem-ch04-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Axial vs Equatorial Bonds in PCl5",
    "mnemonicNumber": 7,
    "title": "PCl5 Geometry: 2 Long Axial Sticks vs 3 Short Equatorial Spokes",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Axial Feels 3 Bully Repulsions at 90° → Stretches & Snaps First!",
    "memoryHook": "In PCl5 (sp³d Trigonal Bipyramidal), each axial P-Cl bond is at 90° to THREE equatorial bonds, feeling strong repulsion. Equatorial bonds feel 90° repulsion from only TWO bonds. So axial bonds are LONGER (240 pm) and WEAKER than equatorial (202 pm)!",
    "fact": "Solid PCl5 exists as an ionic solid: [PCl4]⁺ [PCl6]⁻, where [PCl4]⁺ is tetrahedral (sp³) and [PCl6]⁻ is octahedral (sp³d²). On gentle heating, gaseous PCl5 decomposes into PCl3 + Cl2 because the two weak axial P-Cl bonds break easily.",
    "breakdown": [
      {
        "key": "Equatorial Bonds (3)",
        "label": "120° apart from each other, shorter (202 pm), stronger"
      },
      {
        "key": "Axial Bonds (2)",
        "label": "90° to equatorial plane, longer (240 pm), weaker, break first"
      },
      {
        "key": "Solid State Structure",
        "label": "[PCl4]⁺ (tetrahedral) and [PCl6]⁻ (octahedral)"
      }
    ],
    "doodleBadge": "PCl5: Axial (240 pm) > Eq (202 pm)\n[PCl4]⁺ [PCl6]⁻ in solid",
    "doodleSubtext": "Trigonal Bipyramidal",
    "explanation": "Because all 5 bonds are not equivalent, PCl5 is highly reactive and readily acts as a chlorinating agent.",
    "alsoRemember": "Solid PBr5 exists as [PBr4]⁺ Br⁻, not [PBr4]⁺ [PBr6]⁻, because 6 bulky bromine atoms cannot fit around a phosphorus atom.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.3 & Class 12 p-Block.",
    "neetTrap": "In SF6 (octahedral sp³d²), all 6 S-F bonds are EXACTLY EQUAL in length because all positions are symmetrical (90°). In PCl5, they are NOT equal.",
    "tags": [
      "PCl5",
      "Hybridization",
      "Axial Bonds",
      "Class 11"
    ],
    "quiz": {
      "question": "Why are the axial P-Cl bonds in gaseous PCl5 longer and weaker than the equatorial bonds?",
      "options": [
        "Axial chlorine atoms have higher electronegativity",
        "Axial bond pairs experience greater repulsion from three equatorial bond pairs at 90° angles",
        "Axial bonds are pure pi bonds",
        "Phosphorus uses d-orbitals only for equatorial bonds"
      ],
      "answerIndex": 1,
      "explanation": "Axial bonds suffer repulsion from three equatorial bond pairs at 90°, whereas equatorial bonds suffer repulsion from only two axial bond pairs at 90°."
    }
  },
  {
    "id": "chem-ch04-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-3",
    "topicTitle": "MOT Energy Level Switch for ≤ 14 vs > 14 Electrons",
    "mnemonicNumber": 8,
    "title": "MOT Orbital Switch: 2-1-2-1 for ≤ 14e⁻ vs 1-2-2-1 for > 14e⁻",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "hard",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "B, C, N (≤14 e⁻) love 2121 | O, F (>14 e⁻) follow 1221!",
    "memoryHook": "For ≤14 electrons (B2, C2, N2), sp-mixing pushes σ2pz ABOVE π2px = π2py (code: 2-1-2-1). For >14 electrons (O2, F2), sp-mixing is negligible, so σ2pz stays below π2px = π2py (code: 1-2-2-1)!",
    "fact": "1. Up to 14 e⁻ (B2, C2, N2): σ1s < σ*1s < σ2s < σ*2s < (π2px = π2py) < σ2pz < (π*2px = π*2py) < σ*2pz. 2. For >14 e⁻ (O2, F2): σ1s < σ*1s < σ2s < σ*2s < σ2pz < (π2px = π2py) < (π*2px = π*2py) < σ*2pz.",
    "breakdown": [
      {
        "key": "≤ 14 e⁻ Order (2-1-2-1)",
        "label": "π2px = π2py (2) < σ2pz (1) < π*2px = π*2py (2) < σ*2pz (1)"
      },
      {
        "key": "> 14 e⁻ Order (1-2-2-1)",
        "label": "σ2pz (1) < π2px = π2py (2) < π*2px = π*2py (2) < σ*2pz (1)"
      },
      {
        "key": "C2 Molecule (12 e⁻)",
        "label": "All 4 valence electrons sit in π-orbitals! C2 has a DOUBLE BOND composed of TWO PI BONDS and ZERO SIGMA BONDS!"
      }
    ],
    "doodleBadge": "≤14e⁻: 2-1-2-1\n>14e⁻: 1-2-2-1",
    "doodleSubtext": "sp-Mixing Switch",
    "explanation": "In C2, the double bond consists entirely of two π-bonds because all 4 valence electrons occupy the degenerate π2px and π2py molecular orbitals.",
    "alsoRemember": "In O2, the last 2 electrons enter the degenerate π*2px and π*2py antibonding orbitals with parallel spins according to Hund’s rule, explaining paramagnetic behavior.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.7.",
    "neetTrap": "Most students think every double bond has 1 sigma + 1 pi bond. In C2, the double bond consists of TWO PI BONDS with ZERO sigma bonds!",
    "tags": [
      "MOT",
      "sp-Mixing",
      "Paramagnetism",
      "NEET Trap"
    ],
    "quiz": {
      "question": "According to molecular orbital theory, the double bond in a C2 molecule consists of:",
      "options": [
        "One sigma and one pi bond",
        "Two sigma bonds",
        "Two pi bonds without any sigma bond",
        "One sigma and two pi bonds"
      ],
      "answerIndex": 2,
      "explanation": "In C2 (12 e⁻), the four valence electrons occupy the degenerate π2px and π2py molecular orbitals, so both bonds are pi bonds."
    }
  },
  {
    "id": "chem-ch04-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "Formal Charge Calculation",
    "mnemonicNumber": 9,
    "title": "Formal Charge: FC = Valence - Lone Dots - Half Lines",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "FC = V - N - ½B  (Valence e⁻ minus Non-bonding dots minus half Bonding lines)",
    "memoryHook": "Count free valence electrons, subtract all free dots (non-bonding electrons), then subtract 1 for each covalent bond stick connected to the atom!",
    "fact": "Formal Charge (FC) = [Total valence electrons in free atom] - [Total non-bonding (lone pair) electrons] - ½ [Total bonding electrons]. The most stable Lewis structure has formal charges closest to zero, with negative formal charges residing on the most electronegative atoms.",
    "breakdown": [
      {
        "key": "Ozone Central O",
        "label": "V = 6, Non-bonding = 2, Bonds = 3 (one single, one double = 6 e⁻) → FC = 6 - 2 - 3 = +1"
      },
      {
        "key": "Ozone Double-bonded O",
        "label": "V = 6, Non-bonding = 4, Bonds = 2 (4 e⁻) → FC = 6 - 4 - 2 = 0"
      },
      {
        "key": "Ozone Single-bonded O",
        "label": "V = 6, Non-bonding = 6, Bonds = 1 (2 e⁻) → FC = 6 - 6 - 1 = -1"
      }
    ],
    "doodleBadge": "FC = V - L - B\nDots & Sticks",
    "doodleSubtext": "Lewis Stability Tool",
    "explanation": "Sum of formal charges on all atoms in an ion must equal the total net ionic charge.",
    "alsoRemember": "In carbonate ion CO3²⁻, average formal charge on each oxygen atom is -2/3 = -0.67, and all three C-O bond lengths are identical due to resonance.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.1.2.",
    "neetTrap": "Formal charge does NOT represent real physical charges; it is an electron bookkeeping tool for evaluating valid Lewis structures.",
    "tags": [
      "Formal Charge",
      "Lewis Structure",
      "Ozone",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the formal charge on the central oxygen atom in an ozone (O3) molecule?",
      "options": [
        "0",
        "+1",
        "-1",
        "+2"
      ],
      "answerIndex": 1,
      "explanation": "Central oxygen has 6 valence electrons, 2 lone electrons, and 3 shared bonds: FC = 6 - 2 - 3 = +1."
    }
  },
  {
    "id": "chem-ch04-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Shapes of Xenon Compounds (VSEPR)",
    "mnemonicNumber": 10,
    "title": "Xenon Fluoride Shapes: XeF2 (Linear), XeF4 (Square Planar), XeF6 (Distorted Octahedral)",
    "badgeText": "High Yield",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "XeF2 = 3 Equatorial Lone Pairs (Linear 180°) | XeF4 = 2 Axial Lone Pairs (Square Planar) | XeF6 = 1 Lone Pair (Capped Octahedron)!",
    "memoryHook": "Xe has 8 valence electrons! XeF2: 2 BP + 3 LP = sp³d (Linear). XeF4: 4 BP + 2 LP = sp³d² (Square Planar). XeF6: 6 BP + 1 LP = sp³d³ (Distorted Octahedral). XeO3: 3 BP + 1 LP = sp³ (Pyramidal)!",
    "fact": "Central Xenon steric numbers: 1. XeF2: SN = 5 (sp³d), 2 bond pairs + 3 equatorial lone pairs → Linear geometry. 2. XeF4: SN = 6 (sp³d²), 4 bond pairs + 2 axial lone pairs → Square Planar geometry. 3. XeF6: SN = 7 (sp³d³), 6 bond pairs + 1 lone pair → Distorted octahedral (capped octahedron). 4. XeO3: SN = 4 (sp³), 3 bond pairs + 1 lone pair → Pyramidal. 5. XeOF4: SN = 6 (sp³d²), 5 bond pairs + 1 lone pair → Square Pyramidal.",
    "breakdown": [
      {
        "key": "XeF2 (sp³d)",
        "label": "Linear shape (Lone pairs at 120° equatorial positions cancel out)"
      },
      {
        "key": "XeF4 (sp³d²)",
        "label": "Square planar (2 lone pairs at 180° axial positions cancel dipole: μ = 0)"
      },
      {
        "key": "XeF6 (sp³d³)",
        "label": "Distorted octahedral / capped octahedral"
      },
      {
        "key": "XeO3 (sp³)",
        "label": "Trigonal pyramidal, polar molecule"
      }
    ],
    "doodleBadge": "XeF2: Linear\nXeF4: Sq Planar\nXeF6: Dist. Oct",
    "doodleSubtext": "Noble Gas Shapes",
    "explanation": "Lone pairs always occupy positions that minimize electrostatic repulsion: equatorial in trigonal bipyramid (sp³d) and opposite axial in octahedron (sp³d²).",
    "alsoRemember": "Hydrolysis of XeF6: Partial gives XeOF4 and XeO2F2; complete hydrolysis gives explosive solid XeO3 + HF.",
    "ncertConnection": "NCERT Class 12 Chemistry p-Block Elements, Group 18.",
    "neetTrap": "XeF4 has an octahedral electron geometry (sp³d²) but its molecular SHAPE is SQUARE PLANAR.",
    "tags": [
      "Xenon Compounds",
      "VSEPR",
      "p-Block",
      "NEET PYQ"
    ],
    "quiz": {
      "question": "What is the molecular geometry and number of lone pairs on Xenon in XeF4?",
      "options": [
        "Tetrahedral, 0 lone pairs",
        "Square planar, 2 lone pairs",
        "See-saw, 1 lone pair",
        "Octahedral, 0 lone pairs"
      ],
      "answerIndex": 1,
      "explanation": "XeF4 has steric number 6 (sp³d²) with 4 bonding pairs and 2 lone pairs located axially, resulting in a square planar molecular shape."
    }
  },
  {
    "id": "chem-ch04-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "Back Bonding & Lewis Acidity of Boron Halides",
    "mnemonicNumber": 11,
    "title": "Lewis Acidity of Boron Halides: BI3 > BBr3 > BCl3 > BF3 (Back-Bonding Reversal!)",
    "badgeText": "NEET Trap",
    "importance": "High Yield",
    "difficulty": "hard",
    "visualType": "sequence",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "2p-2p Overlap in BF3 Satisfies Boron! BI3 Stays Starving!",
    "memoryHook": "Fluorine is tiny and has full 2p orbitals that donate back into empty 2p of Boron (strong 2pπ-2pπ back-bonding). In BI3, large 5p of Iodine has terrible overlap with tiny 2p of Boron, so Boron stays electron-deficient and acts as the STRONGEST Lewis acid!",
    "fact": "Order of Lewis acidity: BI3 > BBr3 > BCl3 > BF3. Although Fluorine is the most electronegative element, effective 2pπ-2pπ back donation from F into Boron’s empty 2p orbital decreases Boron’s electron deficiency. Size mismatch increases down the group (2p-3p in BCl3, 2p-4p in BBr3, 2p-5p in BI3), drastically weakening back bonding.",
    "breakdown": [
      {
        "key": "BF3",
        "label": "Super-efficient 2pπ-2pπ back bonding → Boron octet satisfied → Weakest Lewis acid"
      },
      {
        "key": "BCl3 / BBr3",
        "label": "2pπ-3pπ and 2pπ-4pπ overlap is weak due to diffuse orbitals"
      },
      {
        "key": "BI3",
        "label": "2pπ-5pπ overlap is negligible → Boron remains completely electron-deficient → Strongest Lewis acid"
      }
    ],
    "doodleBadge": "Acidity: BI3 > BBr3 > BCl3 > BF3\n2pπ-2pπ Back-Bonding",
    "doodleSubtext": "Acidic Hierarchy Reversal",
    "explanation": "Back-bonding creates partial double bond character between Boron and Fluorine, shortening the B-F bond length and reducing Lewis acidity.",
    "alsoRemember": "BF3 reacts with ammonia NH3 to form an adduct F3B←NH3 via coordinate covalent bond, completing its octet.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 11 & Chapter 4.",
    "neetTrap": "Students intuitively predict BF3 to be strongest acid because Fluorine is most electronegative. Back-bonding completely flips the order: BI3 is the strongest!",
    "tags": [
      "Back Bonding",
      "Lewis Acidity",
      "BF3",
      "Exceptions"
    ],
    "quiz": {
      "question": "Which boron trihalide is the strongest Lewis acid?",
      "options": [
        "BF3",
        "BCl3",
        "BBr3",
        "BI3"
      ],
      "answerIndex": 3,
      "explanation": "BI3 has the weakest back-bonding due to poor 2pπ-5pπ orbital overlap, leaving the central boron atom most electron-deficient and thus the strongest Lewis acid."
    }
  },
  {
    "id": "chem-ch04-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Sigma vs Pi Bond Strength & Characteristics",
    "mnemonicNumber": 12,
    "title": "Sigma vs Pi Bonds: Head-On Sigma is King, Sideways Pi is Vulnerable!",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Head-On Crash (Sigma) Locks Tight | Sideways Hug (Pi) Breaks First!",
    "memoryHook": "Sigma (σ) bond forms by coaxial axial head-on overlap along the internuclear axis (large overlap = strong bond). Pi (π) bond forms by lateral sideways overlap of unhybridized p-orbitals (smaller overlap = weaker bond). Free rotation is allowed around single σ bonds, but FROZEN around π bonds (causing cis-trans isomerism)!",
    "fact": "1. Sigma bond (σ): Formed by end-to-end (head-on) overlap of s-s, s-p, or p-p orbitals along the internuclear axis. High electron density along the axis. Always forms first. Free rotation possible. 2. Pi bond (π): Formed by lateral (sideways) overlap of parallel p-orbitals. Electron density lies above and below the internuclear nodal plane. Weaker than σ. Restricts rotation, leading to geometrical isomerism.",
    "breakdown": [
      {
        "key": "Bond Formation Order",
        "label": "Single bond = 1 σ; Double bond = 1 σ + 1 π; Triple bond = 1 σ + 2 π"
      },
      {
        "key": "Bond Energy",
        "label": "Triple (>800 kJ) > Double (~600 kJ) > Single (~350 kJ); but π bond alone is weaker than σ"
      },
      {
        "key": "Bond Length",
        "label": "C-C (1.54 Å) > C=C (1.34 Å) > C≡C (1.20 Å)"
      }
    ],
    "doodleBadge": "Sigma = Head-On (Strong)\nPi = Sideways (Weak)",
    "doodleSubtext": "Coaxial vs Lateral",
    "explanation": "Because π-electrons sit further from nuclei above and below the nodal plane, they are easily attacked by incoming electrophiles, making alkenes and alkynes chemically reactive.",
    "alsoRemember": "Pure s-orbitals can NEVER form a π-bond because they are spherically symmetrical and lack directional lobes.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.3.4.",
    "neetTrap": "A double bond is stronger than a single bond, but the second bond (the π-bond) by itself is WEAKER than the primary σ-bond.",
    "tags": [
      "Sigma Bond",
      "Pi Bond",
      "Bond Energy",
      "Class 11"
    ],
    "quiz": {
      "question": "How many sigma (σ) and pi (π) bonds are present in a molecule of Ethyne (Acetylene, HC≡CH)?",
      "options": [
        "2 σ and 2 π",
        "3 σ and 2 π",
        "1 σ and 2 π",
        "2 σ and 3 π"
      ],
      "answerIndex": 1,
      "explanation": "HC≡CH has two C-H single bonds (2 σ) and one C≡C triple bond (1 σ + 2 π), totaling 3 σ and 2 π bonds."
    }
  },
  {
    "id": "chem-ch04-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "Octet Rule Exceptions: Incomplete, Odd, and Expanded",
    "mnemonicNumber": 13,
    "title": "Octet Rule Exceptions: Starving, Odd-ball, and Super-Sized!",
    "badgeText": "Classification",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Incomplete (<8e⁻: BeCl2, BF3) | Odd-Electron (NO, NO2) | Expanded (>8e⁻: PCl5, SF6, IF7, H2SO4)",
    "memoryHook": "The octet rule is broken 3 ways: 1) Starving / Incomplete (LiCl=2e⁻, BeH2=4e⁻, BF3=6e⁻). 2) Odd number of electrons (NO=11 valence e⁻, NO2=17 valence e⁻, paramagnets that dimerize!). 3) Super-sized / Expanded d-shell (PCl5=10e⁻, SF6=12e⁻, IF7=14e⁻)!",
    "fact": "Three categories of Octet Rule violations: 1. Incomplete Octet: Central atom of Group 1, 2, 13 elements has fewer than 8 valence electrons (BeCl2, BCl3, AlCl3). 2. Odd-Electron Molecules: Total count of valence electrons is odd, leaving one unpaired electron (Nitric oxide NO has 11e⁻; Nitrogen dioxide NO2 has 17e⁻; both are paramagnetic and color-bearing). 3. Expanded Octet (Hypervalent): Elements in Period 3 and beyond utilize empty d-orbitals to hold 10, 12, or 14 electrons (PF5, SF6, H2SO4, IF7).",
    "breakdown": [
      {
        "key": "Incomplete (<8 e⁻)",
        "label": "BeCl2 (4 e⁻), BF3 (6 e⁻) — act as Lewis acids"
      },
      {
        "key": "Odd-electron",
        "label": "NO (11 e⁻), NO2 (17 e⁻ brown gas) — dimerizes to N2O4 colorless solid"
      },
      {
        "key": "Expanded (>8 e⁻)",
        "label": "SF6 (12 e⁻), PCl5 (10 e⁻), IF7 (14 e⁻) — uses 3d empty subshells"
      }
    ],
    "doodleBadge": "<8 e⁻: BeCl2, BF3\nOdd: NO, NO2\n>8 e⁻: PCl5, SF6",
    "doodleSubtext": "Octet Violations",
    "explanation": "Period 2 elements (C, N, O, F) NEVER expand their octet beyond 8 electrons because they lack accessible d-orbitals. NF5 does not exist, but PF5 does.",
    "alsoRemember": "AlCl3 achieves an octet by forming a chlorine-bridged dimer Al2Cl6 in non-polar solvents and vapor phase.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.1.3.",
    "neetTrap": "NF5 does NOT exist because Nitrogen has no d-orbitals in period 2, whereas Phosphorus in period 3 easily forms PF5 and PCl5.",
    "tags": [
      "Octet Rule",
      "Hypervalent",
      "Expanded Octet",
      "Class 11"
    ],
    "quiz": {
      "question": "Why does NF5 not exist whereas PF5 is well-known and stable?",
      "options": [
        "Nitrogen is less electronegative than phosphorus",
        "Nitrogen lacks vacant d-orbitals in its second shell to expand its valence octet",
        "Fluorine cannot bond with nitrogen",
        "Phosphorus has lower ionization enthalpy"
      ],
      "answerIndex": 1,
      "explanation": "Nitrogen belongs to period 2 (n=2) and has only 2s and 2p subshells with no vacant d-orbitals, making valence expansion beyond 4 bonds impossible."
    }
  },
  {
    "id": "chem-ch04-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Resonance & Bond Order in Carbonate and Nitrate Ions",
    "mnemonicNumber": 14,
    "title": "Resonance Bond Order: Total Bonds / Resonating Structures",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Resonance BO = Total Bonds Shared ÷ Number of Contributing Positions!",
    "memoryHook": "In CO3²⁻: 4 total bonds shared across 3 C-O positions = 4/3 = 1.33! In NO3⁻: 4 bonds across 3 positions = 1.33! In Benzene: 9 bonds across 6 C-C positions = 1.5!",
    "fact": "When multiple Lewis structures contribute equally to a resonance hybrid: Resonance Bond Order = (Total number of covalent bonds between two specific atoms across all structures) / (Total number of resonating structures). In carbonate ion (CO3²⁻), there are 4 bonds (one C=O and two C-O) spread equally over 3 positions: BO = 4/3 = 1.33. All three C-O bonds have identical length (128 pm), intermediate between single (143 pm) and double (120 pm).",
    "breakdown": [
      {
        "key": "Carbonate (CO3²⁻)",
        "label": "BO = 4 bonds / 3 structures = 1.33; Formal charge on each O = -2/3"
      },
      {
        "key": "Nitrate (NO3⁻)",
        "label": "BO = 4 bonds / 3 structures = 1.33; Formal charge on each O = -2/3"
      },
      {
        "key": "Phosphate (PO4³⁻)",
        "label": "BO = 5 bonds (one P=O, three P-O) / 4 positions = 5/4 = 1.25"
      },
      {
        "key": "Perchlorate (ClO4⁻)",
        "label": "BO = 7 bonds (three Cl=O, one Cl-O) / 4 positions = 7/4 = 1.75"
      }
    ],
    "doodleBadge": "BO = Total Bonds / Positions\nCO3²⁻ = 4/3 = 1.33",
    "doodleSubtext": "Resonance Bond Order",
    "explanation": "Resonance stabilizes molecules by delocalizing π-electron charge over multiple atoms, lowering total potential energy.",
    "alsoRemember": "Resonance hybrid is a single real structure with lower energy than ANY of its imaginary canonical contributing structures. The difference is called Resonance Energy.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.2.1.",
    "neetTrap": "All three C-O bonds in carbonate have the EXACT same bond length and bond strength. There is NO distinct single or double bond in the real ion!",
    "tags": [
      "Resonance",
      "Bond Order",
      "Carbonate",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the bond order of the phosphorus-oxygen bond in the phosphate ion (PO4³⁻)?",
      "options": [
        "1.0",
        "1.25",
        "1.33",
        "1.5"
      ],
      "answerIndex": 1,
      "explanation": "Phosphate has 5 total bonds (one double P=O and three single P-O) shared across 4 equivalent oxygen positions: 5 / 4 = 1.25."
    }
  },
  {
    "id": "chem-ch04-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "Lattice Enthalpy & Born-Haber Cycle",
    "mnemonicNumber": 15,
    "title": "Lattice Energy: Direct with Charge, Inversely with Size (U ∝ q1·q2 / r0)",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Multiply Charges First (MgO = 2×2 = 4 >> NaCl = 1×1 = 1)!",
    "memoryHook": "Lattice enthalpy depends directly on the product of ionic charges (|z+| × |z-|) and inversely on interionic distance (r+ + r-). Higher charge always dominates over small size changes!",
    "fact": "Lattice Enthalpy (U) is the energy released when 1 mole of an ionic crystalline compound is formed from its gaseous constituent ions: U ∝ (z+ × z-) / (r+ + r-). Born-Haber Cycle applies Hess’s Law: ΔfH° = ΔsubH(metal) + ½ΔdissH(non-metal) + IE(metal) + ΔegH(non-metal) + U.",
    "breakdown": [
      {
        "key": "Charge Dominates",
        "label": "MgO (+2, -2) has ~4 times higher lattice energy (~3791 kJ/mol) than NaCl (+1, -1, ~787 kJ/mol)"
      },
      {
        "key": "Size Trend",
        "label": "For same charge: LiF > LiCl > LiBr > LiI (smaller ions pack closer, higher U)"
      },
      {
        "key": "Hydration Competition",
        "label": "Compound is soluble in water if Hydration Enthalpy exceeds Lattice Enthalpy (ΔHhyd > U)"
      }
    ],
    "doodleBadge": "U ∝ (z+ · z-) / (r+ + r-)\nCharge Dominates!",
    "doodleSubtext": "Born-Haber Lattice Energy",
    "explanation": "High lattice energy makes MgO ideal as a refractory furnace lining brick due to its extraordinarily high melting point (>2800°C).",
    "alsoRemember": "Solubility of alkaline earth sulfates decreases down the group (BeSO4 > MgSO4 > CaSO4 > SrSO4 > BaSO4) because hydration energy drops faster than lattice energy.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.5.2.",
    "neetTrap": "Lattice enthalpy cannot be measured directly by experiment; it must be calculated using the Born-Haber cycle thermochemical pathway.",
    "tags": [
      "Lattice Enthalpy",
      "Born-Haber",
      "Ionic Bond",
      "Solubility"
    ],
    "quiz": {
      "question": "Which of the following ionic solids has the highest lattice enthalpy?",
      "options": [
        "NaCl",
        "KCl",
        "MgO",
        "CaO"
      ],
      "answerIndex": 2,
      "explanation": "MgO features divalent ions (z+ = +2, z- = -2, product = 4) and smaller ionic radii than CaO, maximizing lattice enthalpy."
    }
  },
  {
    "id": "chem-ch04-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Bent Rule: Fluorine Takes Axial, Lone Pairs Take Equatorial in TBP",
    "mnemonicNumber": 16,
    "title": "Bent’s Rule: More Electronegative Atoms Love Low s-Character Orbitals!",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "hard",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Electronegative atoms seek p-rich axial spots | Lone pairs love s-rich equatorial spots!",
    "memoryHook": "In sp³d (Trigonal Bipyramid), equatorial hybrids are sp² (33% s-character, round and bulky) while axial hybrids are dp (0% s-character, elongated). Bulky lone pairs choose equatorial sp²; electronegative Fluorines choose axial dp!",
    "fact": "Bent’s Rule: Central atom directs orbitals of greater s-character toward more electropositive substituents, and orbitals with higher p-character toward more electronegative substituents. In PCl3F2, both Fluorine atoms go to axial positions (dp hybrid, 0% s-character) and Chlorines go to equatorial positions (sp² hybrid, 33% s-character).",
    "breakdown": [
      {
        "key": "Equatorial Hybrid",
        "label": "sp² (33% s-character) → Shorter, holds bulky lone pairs and less electronegative atoms"
      },
      {
        "key": "Axial Hybrid",
        "label": "p-d (0% s-character) → Longer, holds highly electronegative atoms (F)"
      },
      {
        "key": "PCl3F2 Geometry",
        "label": "Both F atoms axial, all 3 Cl atoms equatorial → Dipole moment μ = 0 D!"
      }
    ],
    "doodleBadge": "Bent's Rule:\nF → Axial | LP → Equatorial",
    "doodleSubtext": "s-Character Allocation",
    "explanation": "Placing electronegative Fluorine in axial positions of PCl3F2 results in complete cancellation of axial and equatorial dipole vectors, making PCl3F2 non-polar.",
    "alsoRemember": "In SF4, the lone pair occupies an equatorial position, giving a See-Saw shape.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4.",
    "neetTrap": "In PCl3F2, Fluorines do NOT go equatorial; they go AXIAL to minimize total system energy.",
    "tags": [
      "Bent's Rule",
      "Hybridization",
      "PCl3F2",
      "s-Character"
    ],
    "quiz": {
      "question": "In the molecule PCl3F2, where do the two Fluorine atoms reside in the trigonal bipyramidal geometry?",
      "options": [
        "Both at equatorial positions",
        "Both at axial positions",
        "One axial and one equatorial",
        "Randomly distributed"
      ],
      "answerIndex": 1,
      "explanation": "According to Bent’s rule, more electronegative substituents prefer orbitals with less s-character (axial dp hybrids)."
    }
  },
  {
    "id": "chem-ch04-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-1",
    "topicTitle": "Intermolecular Forces Hierarchy",
    "mnemonicNumber": 17,
    "title": "Intermolecular Forces: Ion-Dipole > H-Bond > Dipole-Dipole > London Dispersion",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "I Have Double Luck (Ion-Dipole > H-Bond > Dipole-Dipole > London Dispersion)!",
    "memoryHook": "Rank intermolecular forces from strongest to weakest: 1) Ion-Dipole (NaCl in H2O). 2) Hydrogen Bonding (H with F, O, N). 3) Dipole-Dipole (Keesom forces, e.g. HCl···HCl). 4) Dipole-Induced Dipole (Debye forces, e.g. HCl···Ar). 5) London Dispersion (Fluctuating dipoles, e.g. He···He)!",
    "fact": "Intermolecular attractive forces (van der Waals forces) determine physical states and boiling points: 1. Ion-Dipole: Hydration of salts. 2. Hydrogen bond: 10-40 kJ/mol, strongest van der Waals-like force. 3. Dipole-Dipole: Stationary polar molecules energy ∝ 1/r³, rotating polar molecules energy ∝ 1/r⁶. 4. London dispersion forces: Present in ALL molecules, energy ∝ 1/r⁶. Strength increases with molecular size and surface area.",
    "breakdown": [
      {
        "key": "London Forces (Dispersion)",
        "label": "Weakest, scales with molar mass and surface area (Pentane BP > Isopentane > Neopentane)"
      },
      {
        "key": "Dipole-Dipole",
        "label": "Permanent dipoles aligning (HCl, SO2)"
      },
      {
        "key": "Hydrogen Bonding",
        "label": "Responsible for abnormally high BP of H2O (100°C), HF (19.5°C), NH3 (-33°C)"
      }
    ],
    "doodleBadge": "Ion-Dipole > H-Bond\n> Dipole-Dipole > London",
    "doodleSubtext": "Intermolecular Hierarchy",
    "explanation": "Among noble gases, boiling point increases down the group (He < Ne < Ar < Kr < Xe) because larger electron clouds are more easily polarized, increasing London dispersion forces.",
    "alsoRemember": "London dispersion force interaction energy is inversely proportional to the sixth power of distance (1/r⁶).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 5 (States of Matter) & Chapter 4.",
    "neetTrap": "London dispersion forces exist between ALL molecules, even strongly polar ones like water and HCl.",
    "tags": [
      "Intermolecular Forces",
      "van der Waals",
      "London Forces",
      "Class 11"
    ],
    "quiz": {
      "question": "How does the interaction energy between two rotating polar molecules (dipole-dipole interaction) vary with inter-particle distance r?",
      "options": [
        "Inversely as r",
        "Inversely as r²",
        "Inversely as r³",
        "Inversely as r⁶"
      ],
      "answerIndex": 3,
      "explanation": "For rotating polar molecules, dipole-dipole interaction energy is proportional to 1/r⁶ (Keesom orientation energy)."
    }
  },
  {
    "id": "chem-ch04-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Percentage Ionic Character: Hannay-Smith Formula",
    "mnemonicNumber": 18,
    "title": "Ionic Character Formula: 16(ΔEN) + 3.5(ΔEN)² (50% Ionic when ΔEN ≈ 1.7)",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "16 Delta plus 3.5 Delta-Squared! At ΔEN = 1.7, Bond is Exactly Half-and-Half (50% Ionic)!",
    "memoryHook": "Calculate electronegativity difference Δχ = |χA - χB|. If Δχ = 1.7, bond is 50% ionic / 50% covalent. If Δχ > 1.7, ionic character dominates. If Δχ < 1.7, covalent character dominates!",
    "fact": "Hannay-Smith Equation: % Ionic Character = 16 |χA - χB| + 3.5 |χA - χB|². Pauling Scale Rule: ΔEN > 1.7 indicates predominantly ionic bonding (e.g. NaCl with Δχ = 3.0 - 0.9 = 2.1 is ~67% ionic). Dipole moment method: % Ionic Character = (μ_observed / μ_calculated for 100% ionic transfer) × 100%.",
    "breakdown": [
      {
        "key": "ΔEN = 1.7",
        "label": "Exact 50% ionic threshold (Pauling criterion)"
      },
      {
        "key": "ΔEN > 1.7",
        "label": "Predominantly ionic bond (e.g. KF, NaCl)"
      },
      {
        "key": "ΔEN < 1.7",
        "label": "Predominantly covalent bond (e.g. HCl: Δχ = 3.0 - 2.1 = 0.9 → ~17% ionic)"
      }
    ],
    "doodleBadge": "% Ionic = 16Δ + 3.5Δ²\nΔEN = 1.7 → 50% Ionic",
    "doodleSubtext": "Hannay-Smith & Pauling",
    "explanation": "No chemical bond is 100% ionic; even CsF (largest electronegativity difference: 4.0 - 0.7 = 3.3) retains ~8% covalent character.",
    "alsoRemember": "μ_theoretical = q × d, where q = 1.6 × 10⁻¹⁹ C and 1 Debye (D) = 3.33564 × 10⁻³⁰ C·m.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4, Section 4.3.",
    "neetTrap": "CsF is the most ionic binary compound known, but it is still not 100% purely ionic.",
    "tags": [
      "Ionic Character",
      "Electronegativity",
      "Pauling Scale",
      "Class 11"
    ],
    "quiz": {
      "question": "According to Pauling, what electronegativity difference between two bonded atoms represents approximately 50% ionic character?",
      "options": [
        "1.0",
        "1.7",
        "2.1",
        "2.5"
      ],
      "answerIndex": 1,
      "explanation": "An electronegativity difference of 1.7 corresponds to approximately 50% ionic character according to Pauling."
    }
  },
  {
    "id": "chem-ch04-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Odd Electron Molecule Paramagnetism: NO and NO2",
    "mnemonicNumber": 19,
    "title": "Odd Electron Molecules: NO & NO2 are Paramagnetic Monomers, Diamagnetic Dimers!",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Single Guy is Magnetic, Married Couple is Diamagnetic!",
    "memoryHook": "NO (11e⁻) and NO2 (17e⁻) have an unpaired valence electron, making them paramagnetic and colored (NO2 is brown gas). At lower temperatures, two molecules pair their lonely electrons into dimers (N2O2 and N2O4), becoming colorless and DIAMAGNETIC!",
    "fact": "1. NO has 5 (N) + 6 (O) = 11 valence electrons. In gas phase it is paramagnetic. In liquid/solid phase, it pairs into diamagnetic dimer N2O2. 2. NO2 has 5 (N) + 12 (2O) = 17 valence electrons. It is a brown, paramagnetic gas with an angular bent shape (134°). On cooling, it dimerizes completely into colorless, diamagnetic N2O4 (solid/liquid). 3. ClO2 (19 valence electrons) is also an odd-electron paramagnetic gas.",
    "breakdown": [
      {
        "key": "NO (gas)",
        "label": "Paramagnetic monomer (11 valence e⁻)"
      },
      {
        "key": "NO2 (gas)",
        "label": "Brown paramagnetic monomer (17 valence e⁻)"
      },
      {
        "key": "N2O4 (dimer)",
        "label": "Colorless, planar, DIAMAGNETIC solid/liquid (all electrons paired)"
      }
    ],
    "doodleBadge": "NO & NO2: Paramagnetic\nN2O4: Diamagnetic Dimer",
    "doodleSubtext": "Odd-Electron Pairing",
    "explanation": "The unpaired electron on NO2 is localized predominantly on the nitrogen atom, which drives dimer formation by coupling two nitrogen radicals into a long, weak N-N bond (1.78 Å).",
    "alsoRemember": "Bond angle in NO2⁺ (180°, linear sp) > NO2 (134°, 1 lone electron) > NO2⁻ (115°, 1 full lone pair).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4 & Class 12 p-Block Elements.",
    "neetTrap": "NO2 is paramagnetic and brown, but its dimer N2O4 is completely DIAMAGNETIC and colorless.",
    "tags": [
      "Odd Electron",
      "NO2",
      "N2O4",
      "Paramagnetism"
    ],
    "quiz": {
      "question": "Why does brown nitrogen dioxide (NO2) gas turn colorless when cooled to a liquid or solid?",
      "options": [
        "It decomposes into N2 and O2",
        "It dimerizes into diamagnetic N2O4 as unpaired electrons pair up",
        "Nitrogen changes its oxidation state from +4 to +2",
        "It reacts with moisture in the container"
      ],
      "answerIndex": 1,
      "explanation": "On cooling, NO2 molecules dimerize to form N2O4 where all electrons are paired, making the solid/liquid colorless and diamagnetic."
    }
  },
  {
    "id": "chem-ch04-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-04",
    "chapterNumber": 4,
    "chapterTitle": "Chemical Bonding & Molecular Structure",
    "topicId": "chem-top-4-2",
    "topicTitle": "Bond Angle Hierarchy in Group 15 Hydrides",
    "mnemonicNumber": 20,
    "title": "Group 15 Hydride Bond Angles: NH3 (107°) >> PH3 (93.6°) > AsH3 (91.8°) > SbH3 (91.3°)",
    "badgeText": "NEET PYQ",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Drago Rule Drop: NH3 is sp³ Hybrid (107°); PH3, AsH3, SbH3 Use Pure p-Orbitals (~90°)!",
    "memoryHook": "In NH3, nitrogen is tiny and electronegative (hybridizes to sp³, 107°). For phosphorus and below, central atom is large with low electronegativity attached to H: NO HYBRIDIZATION occurs (Drago’s rule), so bonds use pure 90° p-orbitals!",
    "fact": "Bond angles of Group 15 hydrides: NH3 (107.8°) >> PH3 (93.6°) > AsH3 (91.8°) > SbH3 (91.3°) > BiH3 (90°). According to Drago’s Rule, when central atom belongs to period 3 or higher, has at least one lone pair, and is bonded to an element with electronegativity ≤ 2.1 (like Hydrogen), hybridization does not take place. The lone pair remains in an unhybridized, non-directional s-orbital (nearly zero basicity).",
    "breakdown": [
      {
        "key": "NH3 (sp³ hybrid)",
        "label": "107.8° bond angle, lone pair in directional sp³ orbital → Excellent Lewis base"
      },
      {
        "key": "PH3 (pure p)",
        "label": "93.6° bond angle, lone pair in non-directional 3s orbital → Very weak Lewis base"
      },
      {
        "key": "Basicity Order",
        "label": "NH3 >> PH3 > AsH3 > SbH3 > BiH3 (matches decreasing availability of lone pair)"
      }
    ],
    "doodleBadge": "Bond Angles:\nNH3 (107°) >> PH3 (93.6°)",
    "doodleSubtext": "Drago's Rule Drop",
    "explanation": "Because the lone pair in PH3 resides in a pure spherical 3s orbital with high nuclear attraction and low directional character, PH3 is barely basic and does not form H-bonds.",
    "alsoRemember": "Group 16 hydrides exhibit the exact same Drago cliff: H2O (104.5°) >> H2S (92.1°) > H2Se (91°) > H2Te (90°).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 4 & Class 12 p-Block Elements.",
    "neetTrap": "The huge 14° drop in bond angle from NH3 (107°) to PH3 (93.6°) is due to loss of hybridization (Drago’s rule), not simple VSEPR repulsion differences.",
    "tags": [
      "Drago's Rule",
      "Bond Angle",
      "Group 15 Hydrides",
      "Basicity"
    ],
    "quiz": {
      "question": "Which factor best explains why the bond angle drops sharply from NH3 (107.8°) to PH3 (93.6°)?",
      "options": [
        "Phosphorus has higher electronegativity than nitrogen",
        "PH3 does not undergo sp³ hybridization and uses nearly pure p-orbitals for bonding",
        "PH3 has two lone pairs on phosphorus",
        "Hydrogen-hydrogen repulsion is greater in NH3"
      ],
      "answerIndex": 1,
      "explanation": "According to Drago’s rule, PH3 uses nearly pure unhybridized p-orbitals for P-H bonding, resulting in bond angles close to 90°."
    }
  }
];
