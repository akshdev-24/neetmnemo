export const chemCh11Mnemonics = [
  {
    "id": "chem-ch11-01",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-1",
    "topicTitle": "Nernst Equation at 298 K",
    "mnemonicNumber": 1,
    "title": "Nernst Equation: Ecell = E°cell - (0.0591 / n) log Q",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Ecell = E°cell - (0.0591 / n) log([Anode Product Ions] / [Cathode Reactant Ions])!",
    "memoryHook": "Formula at 298 K: Ecell = E°cell - (0.0591 / n) log10 Q. Remember: n = number of electrons transferred in balanced equation; Q = [Products] / [Reactants] raised to stoichiometric powers. Pure solids (Zn, Cu) are omitted (activity = 1)!",
    "fact": "Nernst Equation: Ecell = E°cell - (RT / nF) ln Q. Substituting R = 8.314 J/(mol·K), T = 298.15 K, F = 96487 C/mol, and converting ln to log10 gives the standard form at 25°C: Ecell = E°cell - (0.0591 / n) log Q. For Daniell Cell: Zn + Cu²⁺ ⇌ Zn²⁺ + Cu (n = 2), Ecell = 1.10 - (0.0591 / 2) log([Zn²⁺] / [Cu²⁺]). Increasing [Cu²⁺] increases cell EMF; increasing [Zn²⁺] decreases cell EMF.",
    "breakdown": [
      {
        "key": "Nernst Formula (298 K)",
        "label": "Ecell = E°cell - (0.0591 / n) log Q"
      },
      {
        "key": "n Value",
        "label": "Moles of electrons transferred (e.g. n = 2 for Zn-Cu cell; n = 6 for Al-Cu cell)"
      },
      {
        "key": "Equilibrium (Dead Battery)",
        "label": "At equilibrium, Ecell = 0 and Q = Kc → log Kc = n E°cell / 0.0591"
      }
    ],
    "doodleBadge": "Ecell = E° - (0.0591/n) log Q\nDead Battery: Ecell = 0\nlog Kc = n E° / 0.0591",
    "doodleSubtext": "Nernst Equation at 298 K",
    "explanation": "As a battery discharges, reactant ion concentrations drop and product ion concentrations climb until Q = Kc, forcing Ecell to exactly 0.00 V (dead cell).",
    "alsoRemember": "For a half-cell: Mn⁺ + ne⁻ ⇌ M(s), E(Mn⁺/M) = E°(Mn⁺/M) - (0.0591/n) log(1 / [Mn⁺]) = E° + (0.0591/n) log[Mn⁺].",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.3.",
    "neetTrap": "Always balance the net cell reaction first to ensure correct stoichiometric exponents in Q! For 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu, Q = [Al³⁺]² / [Cu²⁺]³ and n = 6.",
    "tags": [
      "Nernst Equation",
      "Ecell",
      "Electrochemistry",
      "Daniell Cell"
    ],
    "quiz": {
      "question": "What is the value of n in the Nernst equation for the cell reaction: 2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s)?",
      "options": [
        "2",
        "3",
        "5",
        "6"
      ],
      "answerIndex": 3,
      "explanation": "Aluminum loses 2 × 3 = 6 electrons and Copper gains 3 × 2 = 6 electrons; the total number of electrons transferred is n = 6."
    }
  },
  {
    "id": "chem-ch11-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-1",
    "topicTitle": "Gibbs Free Energy & Cell Potential (ΔG° = -nFE°cell)",
    "mnemonicNumber": 2,
    "title": "Gibbs Energy & Cell Potential: ΔG° = -n · F · E°cell (Positive E° = Spontaneous Negative ΔG°!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Minus n-F-E! If E° is Positive, ΔG° is Negative (Spontaneous Galvanic Power)!",
    "memoryHook": "Formula: ΔG° = -n · F · E°cell (where F = 96500 C/mol). If E°cell > 0, ΔG° is negative (spontaneous electric generator). If E°cell < 0, ΔG° is positive (non-spontaneous, requires external electrolytic power). E° is INTENSIVE (multiplying equation does NOT change E°); ΔG° is EXTENSIVE (multiplying equation multiplies ΔG°)!",
    "fact": "Electrical Work and Free Energy: 1. Maximum reversible work: w_elec = -ΔG = n F Ecell. 2. Standard State: ΔG° = -n F E°cell = -2.303 RT log Kc. 3. Intensive vs Extensive: Cell potential E° does NOT depend on stoichiometric coefficients (intensive). Gibbs free energy ΔG° doubles if the chemical equation is doubled (extensive). 4. Faraday Constant: 1 F = charge of 1 mole of electrons = (1.6022 × 10⁻¹⁹ C) × (6.022 × 10²³ mol⁻¹) = 96487 C/mol ≈ 96500 C/mol.",
    "breakdown": [
      {
        "key": "ΔG° = -nFE°cell",
        "label": "Links electrochemistry directly to chemical thermodynamics"
      },
      {
        "key": "Spontaneity",
        "label": "E°cell > 0 implies ΔG° < 0 (spontaneous galvanic cell)"
      },
      {
        "key": "Intensive Trap",
        "label": "Zn + Cu²⁺ → Zn²⁺ + Cu (E° = 1.10 V). If doubled to 2Zn + 2Cu²⁺ → 2Zn²⁺ + 2Cu, E° is STILL 1.10 V, but ΔG° is doubled!"
      }
    ],
    "doodleBadge": "ΔG° = -nFE°cell\nE° = Intensive (Never Multiplied)\nΔG° = Extensive (Multiplies)",
    "doodleSubtext": "Thermodynamics of Cells",
    "explanation": "Multiplying an equation doubles both the charge transferred (nF) and the energy, so their ratio (voltage E = Work / Charge) remains perfectly invariant.",
    "alsoRemember": "To add two non-standard half-reactions to find a third half-reaction, NEVER add their E° values directly; convert each into ΔG° = -nFE°, add the ΔG° values, then solve for the new E°!",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.3.2.",
    "neetTrap": "You CANNOT add E° values of two half-cells directly! You MUST add their ΔG° values: ΔG°3 = ΔG°1 + ΔG°2.",
    "tags": [
      "Gibbs Free Energy",
      "Cell Potential",
      "Faraday Constant",
      "Spontaneity"
    ],
    "quiz": {
      "question": "If the standard reduction potential of Fe³⁺/Fe²⁺ is +0.77 V and Fe²⁺/Fe is -0.44 V, what is E° for Fe³⁺ + 3e⁻ → Fe?",
      "options": [
        "+0.33 V",
        "+1.21 V",
        "-0.04 V",
        "+0.11 V"
      ],
      "answerIndex": 2,
      "explanation": "Use ΔG°: ΔG°1 = -(1)F(0.77) = -0.77F; ΔG°2 = -(2)F(-0.44) = +0.88F. ΔG°3 = ΔG°1 + ΔG°2 = +0.11F. Since ΔG°3 = -(3)F E°3, E°3 = -0.11F / 3F = -0.037 V ≈ -0.04 V."
    }
  },
  {
    "id": "chem-ch11-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-1",
    "topicTitle": "Concentration Cells & EMF Generation",
    "mnemonicNumber": 3,
    "title": "Concentration Cells: E°cell is ZERO (Current Driven by Concentration Gradient Alone)!",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Identical Electrodes = E° is 0.00 V! Current Flows from Dilute Anode to Concentrated Cathode!",
    "memoryHook": "In a concentration cell, BOTH electrodes are made of the same metal dipping into solutions of the same ion at different concentrations (C1 < C2): E°cell = E° - E° = 0.00 V! Ecell = (0.0591 / n) log(C2 / C1) where C2 > C1! The dilute side (C1) acts as ANODE (dissolves to increase ions); the concentrated side (C2) acts as CATHODE (deposits to decrease ions)!",
    "fact": "Concentration Cells: 1. Definition: Galvanic cell in which both half-cells employ identical electrodes and electrolyte solutions, differing only in electrolyte concentrations. 2. Standard EMF: E°cell = E°cathode - E°anode = 0.00 V. 3. Nernst Equation at 298 K: Ecell = 0 - (0.0591 / n) log(C_anode / C_cathode) = (0.0591 / n) log(C2 / C1), where C2 (cathode concentration) > C1 (anode concentration). 4. For a spontaneous process (Ecell > 0), C_cathode MUST be greater than C_anode. Current flows until C1 = C2, at which point Ecell drops to zero.",
    "breakdown": [
      {
        "key": "E°cell = 0.00 V",
        "label": "Standard potential is zero because both electrodes are chemically identical"
      },
      {
        "key": "Anode (Dilute C1)",
        "label": "Undergoes oxidation to produce ions, increasing concentration toward equilibrium"
      },
      {
        "key": "Cathode (Concentrated C2)",
        "label": "Undergoes reduction to deposit ions, decreasing concentration toward equilibrium"
      },
      {
        "key": "Formula",
        "label": "Ecell = (0.0591 / n) log(C_cathode / C_anode)"
      }
    ],
    "doodleBadge": "Concentration Cell:\nE°cell = 0.00 V\nEcell = (0.0591/n) log(C2/C1)",
    "doodleSubtext": "Gradient-Driven EMF",
    "explanation": "The driving force is the entropy of mixing: ions spontaneously diffuse from high concentration to low concentration until uniformity is reached.",
    "alsoRemember": "Gas concentration cells (e.g. hydrogen electrodes at different pressures P1 and P2 dipping into same [H⁺]) have Ecell = (0.0591 / 2) log(P1 / P2).",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.3.1.",
    "neetTrap": "In a concentration cell, the DILUTE solution is always the ANODE and the CONCENTRATED solution is always the CATHODE.",
    "tags": [
      "Concentration Cell",
      "E° is Zero",
      "Nernst Equation",
      "Dilute Anode"
    ],
    "quiz": {
      "question": "What is the standard cell potential (E°cell) of a concentration cell constructed with two copper electrodes in CuSO4 solutions of 0.01 M and 1.0 M?",
      "options": [
        "+0.34 V",
        "0.00 V",
        "-0.34 V",
        "+0.059 V"
      ],
      "answerIndex": 1,
      "explanation": "Because both electrodes are made of the exact same chemical substance (Copper), E°cell = E°(Cu²⁺/Cu) - E°(Cu²⁺/Cu) = 0.00 V."
    }
  },
  {
    "id": "chem-ch11-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-2",
    "topicTitle": "Conductivity Terms: Resistance, Conductance & Cell Constant",
    "mnemonicNumber": 4,
    "title": "Conductivity (κ) = (1 / R) × (l / A): Resistance is Inverse of Conductance!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "G = 1/R (Siemens)! Kappa (κ) = Conductance × Cell Constant (G*)!",
    "memoryHook": "Electrical Conductance G = 1/R (units: Siemens S or Ω⁻¹). Conductivity κ (kappa / specific conductance) = (1/R) · (l/A) = G · G*. The Cell Constant G* = l / A has units cm⁻¹ or m⁻¹. G* depends solely on electrode geometry and is measured using standard KCl solution!",
    "fact": "Conductivity Fundamentals: 1. Resistance: R = ρ (l / A). 2. Conductance (G): Reciprocal of resistance: G = 1 / R = (1 / ρ) (A / l) = κ (A / l). Units: Siemens (S) or ohm⁻¹ (mho). 3. Conductivity (κ, Kappa): Conductance of a solution of 1 cm length and 1 cm² cross-sectional area (1 cm³ cube of solution). κ = G × (l / A). Units: S·cm⁻¹ or S·m⁻¹ (1 S·m⁻¹ = 10⁻² S·cm⁻¹). 4. Cell Constant (G*): G* = l / A = R × κ. Since measuring distance l and area A directly is inaccurate, cell constant is determined experimentally using standard KCl solutions of precisely known conductivity.",
    "breakdown": [
      {
        "key": "Conductance (G)",
        "label": "G = 1 / R (units: Siemens S or Ω⁻¹)"
      },
      {
        "key": "Conductivity (κ)",
        "label": "κ = G · G* = (1 / R) · (l / A) (units: S·cm⁻¹ or S·m⁻¹)"
      },
      {
        "key": "Cell Constant (G*)",
        "label": "G* = l / A = R × κ (units: cm⁻¹ or m⁻¹)"
      },
      {
        "key": "Calibration Standard",
        "label": "0.1 M, 0.02 M, or 0.01 M KCl solutions"
      }
    ],
    "doodleBadge": "κ = G · (l / A)\nCell Constant G* = l / A\nUnit: S·cm⁻¹",
    "doodleSubtext": "Electrolytic Conduction Definitions",
    "explanation": "Wheatstone bridge measures solution resistance R using alternating current (AC) at audio frequency (500-1000 Hz) to prevent electrolysis of the solution during measurement.",
    "alsoRemember": "Direct current (DC) cannot be used in conductance measurements because it causes electrolysis and polarization of the electrodes.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.4.",
    "neetTrap": "In converting units: 1 S·m⁻¹ = 10⁻² S·cm⁻¹ (0.01 S·cm⁻¹), NOT 100 S·cm⁻¹!",
    "tags": [
      "Conductivity",
      "Kappa",
      "Cell Constant",
      "Wheatstone Bridge"
    ],
    "quiz": {
      "question": "Why is alternating current (AC) used instead of direct current (DC) when measuring the resistance of an electrolytic solution using a Wheatstone bridge?",
      "options": [
        "DC burns the wire",
        "DC causes electrolysis and alters solution composition (polarization)",
        "AC has lower resistance",
        "DC cannot flow through liquids"
      ],
      "answerIndex": 1,
      "explanation": "Direct current causes continuous electrolysis, changing the chemical composition and concentration of the solution; alternating current prevents this polarization."
    }
  },
  {
    "id": "chem-ch11-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-2",
    "topicTitle": "Molar Conductivity Formula (Λm = 1000 κ / M)",
    "mnemonicNumber": 5,
    "title": "Molar Conductivity: Λm = (1000 × κ) / Molarity (Units: S·cm²·mol⁻¹)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Multiply Kappa by 1000, Divide by Molarity! Watch Out for Unit Traps!",
    "memoryHook": "Formula in CGS: Λm = (1000 × κ) / Molarity (when κ is in S·cm⁻¹ and M is in mol/L) → Units: S·cm²·mol⁻¹! Formula in SI: Λm = κ / (1000 × Molarity) (when κ is in S·m⁻¹ and M is in mol/m³)! Molar conductivity represents the conducting power of ALL ions produced by dissolving exactly 1 mole of electrolyte!",
    "fact": "Molar Conductivity (Λm): 1. Definition: The conducting power of all the ions produced by dissolving one mole of an electrolyte in solution: Λm = κ / C = κ · V (where V is the volume in mL containing 1 mole of electrolyte). 2. CGS Unit Formula: Λm = (1000 × κ) / M (where κ is in S·cm⁻¹ and M is mol/L). Units of Λm: S·cm²·mol⁻¹ or Ω⁻¹·cm²·mol⁻¹. 3. SI Unit Formula: Λm = κ / C (where κ is in S·m⁻¹ and C is in mol·m⁻³ = 1000 × Molarity). Units of Λm: S·m²·mol⁻¹ (1 S·m²·mol⁻¹ = 10⁴ S·cm²·mol⁻¹). 4. Equivalent Conductivity (Λeq): Λeq = (1000 × κ) / Normality. Relation: Λm = n-factor × Λeq.",
    "breakdown": [
      {
        "key": "CGS Formula",
        "label": "Λm = (1000 × κ) / M (units: S·cm²·mol⁻¹)"
      },
      {
        "key": "SI Formula",
        "label": "Λm = κ / (1000 × M) (units: S·m²·mol⁻¹)"
      },
      {
        "key": "Unit Conversion",
        "label": "1 S·m²·mol⁻¹ = 10,000 S·cm²·mol⁻¹"
      },
      {
        "key": "Λm vs Λeq",
        "label": "Λm = n-factor × Λeq (e.g. for Al2(SO4)3 with n=6, Λm = 6 Λeq)"
      }
    ],
    "doodleBadge": "Λm = (1000 × κ) / M\nUnit: S·cm²·mol⁻¹\nΛm = n-factor × Λeq",
    "doodleSubtext": "Molar Conductivity Calculation",
    "explanation": "Molar conductivity normalizes conductivity by concentration, measuring the intrinsic speed and mobility of a mole of ions.",
    "alsoRemember": "For AlCl3 (n-factor = 3), Λm = 3 × Λeq.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.4.1.",
    "neetTrap": "Always check if κ is in S·cm⁻¹ or S·m⁻¹! Using 1000 in the numerator when κ is in S·m⁻¹ will produce an answer off by a factor of 1,000,000.",
    "tags": [
      "Molar Conductivity",
      "Lambda m",
      "Equivalent Conductivity",
      "Units"
    ],
    "quiz": {
      "question": "What is the relationship between the molar conductivity (Λm) and equivalent conductivity (Λeq) for aluminum sulfate, Al2(SO4)3?",
      "options": [
        "Λm = Λeq",
        "Λm = 3 Λeq",
        "Λm = 6 Λeq",
        "Λm = 2 Λeq"
      ],
      "answerIndex": 2,
      "explanation": "The n-factor for Al2(SO4)3 is the total positive charge = 2 × (+3) = 6. Therefore, Λm = n-factor × Λeq = 6 Λeq."
    }
  },
  {
    "id": "chem-ch11-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 6,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-2",
    "topicTitle": "Effect of Dilution on Conductance, Conductivity & Molar Conductivity",
    "mnemonicNumber": 6,
    "title": "Dilution Paradox: Conductance (G) UP, Molar Conductivity (Λm) UP, But Conductivity (κ) DROPS!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Add Water: Ions Spread Out! Total Current Rises (G & Λm ↑), but 1 cm³ Box Has FEWER Ions (κ ↓)!",
    "memoryHook": "Upon Dilution (adding water): 1) Conductance G INCREASES (less interionic drag). 2) Molar Conductivity Λm INCREASES (volume containing 1 mole expands). 3) BUT Specific Conductivity κ (Kappa) DECREASES! Why? Because κ measures ions per 1 cm³ box: diluting spreads ions apart, so fewer ions sit inside any single 1 cm³ box!",
    "fact": "Variation of Conductivity and Molar Conductivity with Dilution: 1. Conductivity (κ) Decreases with Dilution: Conductivity is the conductance of 1 cm³ of solution. On dilution, the number of current-carrying ions per unit volume (per cm³) decreases, so κ always decreases for both strong and weak electrolytes. 2. Molar Conductivity (Λm) Increases with Dilution: Λm = κ × V (where V is the volume containing 1 mole of electrolyte). Although κ decreases upon dilution, the volume V increases much more dramatically, so the product (κ × V) increases. 3. For Strong Electrolytes: Dilution decreases interionic attractions, allowing ions to migrate faster. 4. For Weak Electrolytes: Dilution increases the degree of dissociation α (Ostwald’s law), releasing far more free ions.",
    "breakdown": [
      {
        "key": "Conductance (G)",
        "label": "Increases with dilution"
      },
      {
        "key": "Molar Conductivity (Λm)",
        "label": "Increases with dilution (approaches limiting Λm° at C → 0)"
      },
      {
        "key": "Conductivity (κ)",
        "label": "DECREASES with dilution (FEWER ions per 1 mL volume!)"
      }
    ],
    "doodleBadge": "Dilution Effect:\nG ↑ | Λm ↑\nκ (Kappa) ↓ (Fewer ions/cm³)",
    "doodleSubtext": "The Dilution Paradox",
    "explanation": "The decrease in ion count per milliliter directly lowers κ, but the massive volume expansion needed to hold 1 mole of electrolyte guarantees that Λm climbs steadily.",
    "alsoRemember": "At infinite dilution (C → 0), molar conductivity reaches a maximum theoretical value called Limiting Molar Conductivity (Λm°).",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.4.2.",
    "neetTrap": "Questions constantly test this: \"Which quantity decreases upon dilution?\" The answer is always CONDUCTIVITY (κ / specific conductance)!",
    "tags": [
      "Dilution Effect",
      "Conductivity Drops",
      "Molar Conductivity",
      "NEET Trap"
    ],
    "quiz": {
      "question": "Which of the following electrical quantities DECREASES upon dilution of an electrolytic solution?",
      "options": [
        "Conductance (G)",
        "Molar conductivity (Λm)",
        "Equivalent conductivity (Λeq)",
        "Conductivity (κ / specific conductance)"
      ],
      "answerIndex": 3,
      "explanation": "Conductivity (κ) is the conductance of 1 cm³ of solution; diluting decreases the number of ions per unit volume, causing κ to decrease."
    }
  },
  {
    "id": "chem-ch11-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-2",
    "topicTitle": "Debye-Hückel-Onsager Equation for Strong Electrolytes",
    "mnemonicNumber": 7,
    "title": "Debye-Hückel-Onsager: Λm = Λm° - A √C (Straight Line for Strong Electrolytes; Weak Curves Upward!)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Strong Electrolyte (KCl) Lines Up Straight (Slope = -A); Weak Acid (CH3COOH) Shoots to the Sky!",
    "memoryHook": "Formula: Λm = Λm° - A √C. Plotting Λm vs √C gives a straight line for strong electrolytes (KCl, NaCl): extrapolate to zero concentration (y-intercept) to find Limiting Molar Conductivity Λm°! For weak electrolytes (CH3COOH), the curve bends steeply upward at low C and CANNOT be extrapolated to y-axis (must use Kohlrausch’s law instead)!",
    "fact": "Debye-Hückel-Onsager Equation: 1. Equation: Λm = Λm° - A √C (where A is a constant depending on solvent viscosity, dielectric constant, temperature, and electrolyte charges). 2. Strong Electrolytes (KCl, HCl, NaCl): Are 100% dissociated at all concentrations. The increase in Λm upon dilution is purely due to reduction of interionic electrostatic drag. The plot of Λm vs √C is linear with y-intercept = Λm° and slope = -A. 3. Weak Electrolytes (CH3COOH, NH4OH): Have low dissociation at normal concentrations. At extreme dilution, α shoots up toward 100% (Ostwald’s dilution law), causing Λm to curve sharply upward asymptotically to the y-axis. Extrapolation to C = 0 is impossible, so Λm° CANNOT be determined graphically!",
    "breakdown": [
      {
        "key": "Strong Electrolyte Plot",
        "label": "Linear: Λm = Λm° - A √C → Intercept directly gives Λm°"
      },
      {
        "key": "Weak Electrolyte Plot",
        "label": "Steep curve: Cannot intersect y-axis → Λm° cannot be found by extrapolation"
      },
      {
        "key": "Kohlrausch Solution",
        "label": "Kohlrausch’s law must be used to calculate Λm° for weak electrolytes indirectly"
      }
    ],
    "doodleBadge": "Λm = Λm° - A √C\nStrong = Straight Line\nWeak = Asymptotic Curve",
    "doodleSubtext": "Debye-Hückel-Onsager Law",
    "explanation": "Weak electrolytes dissociate only 1-2% at moderate concentrations, but surge toward 100% dissociation near infinite dilution, creating the dramatic upward curve.",
    "alsoRemember": "Constant A depends on the stoichiometric valence type of salt: 1-1 salts (NaCl, KCl) have identical A; 2-1 salts (CaCl2) have higher A.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.4.2.",
    "neetTrap": "Why can’t Λm° of CH3COOH be obtained by extrapolating the Λm vs √C graph? Because at C → 0, the curve becomes nearly parallel to the y-axis!",
    "tags": [
      "Debye Huckel Onsager",
      "Strong Electrolyte",
      "Weak Electrolyte",
      "Limiting Conductance"
    ],
    "quiz": {
      "question": "Why can the limiting molar conductivity (Λm°) of a weak electrolyte like acetic acid NOT be determined by extrapolating the plot of Λm against √C to zero concentration?",
      "options": [
        "Acetic acid decomposes at zero concentration",
        "The plot curves steeply upward and becomes nearly parallel to the y-axis at infinite dilution",
        "Conductivity becomes zero",
        "Acetic acid evaporates"
      ],
      "answerIndex": 1,
      "explanation": "At near-infinite dilution, the degree of dissociation of weak electrolytes surges toward 100%, causing Λm to climb steeply parallel to the axis so it never intercepts the y-axis."
    }
  },
  {
    "id": "chem-ch11-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-2",
    "topicTitle": "Kohlrausch's Law of Independent Migration of Ions",
    "mnemonicNumber": 8,
    "title": "Kohlrausch’s Law: Sum of Individual Ionic Limiting Conductivities (Λm° = x λ°+ + y λ°-)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "At Infinite Dilution, Every Ion Migrates Completely Free of Its Neighbors!",
    "memoryHook": "Kohlrausch’s Law: At infinite dilution, each ion contributes its own fixed share to total molar conductivity, independent of what counter-ion it was paired with! Formula: Λm°(AxBy) = x · λ°(Aʸ⁺) + y · λ°(Bˣ⁻)! For Al2(SO4)3: Λm° = 2 λ°(Al³⁺) + 3 λ°(SO4²⁻)!",
    "fact": "Kohlrausch’s Law of Independent Migration of Ions: 1. Statement: Limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation of the electrolyte. 2. Formula: Λm° = ν+ λ°+ + ν- λ°- (where ν+ and ν- are the numbers of cations and anions per formula unit). 3. Examples: Λm°(NaCl) = λ°(Na⁺) + λ°(Cl⁻); Λm°(BaCl2) = λ°(Ba²⁺) + 2 λ°(Cl⁻); Λm°(Al2(SO4)3) = 2 λ°(Al³⁺) + 3 λ°(SO4²⁻). 4. For Equivalent Conductivity: Λeq° = λeq°+ + λeq°- (NO stoichiometric multipliers for equivalent conductivity!).",
    "breakdown": [
      {
        "key": "Molar Conductivity",
        "label": "Multiply by stoichiometric subscripts: Λm° = x λ°+ + y λ°-"
      },
      {
        "key": "Equivalent Conductivity",
        "label": "Direct sum without multipliers: Λeq° = λeq°+ + λeq°-"
      },
      {
        "key": "Ionic Mobility",
        "label": "λ° = F × u° (where u° is ionic mobility in cm²·s⁻¹·V⁻¹)"
      }
    ],
    "doodleBadge": "Kohlrausch’s Law:\nΛm° = x λ°+ + y λ°-\nIndependent Migration at C=0",
    "doodleSubtext": "Limiting Molar Conductivity",
    "explanation": "At infinite dilution, ions are separated by vast expanses of water, eliminating all interionic attractions so each ion swims with complete independence.",
    "alsoRemember": "H⁺ (349.6 S·cm²/mol) and OH⁻ (199.1 S·cm²/mol) have extraordinarily high limiting conductivities due to Grotthuss proton-hopping through water hydrogen bonds.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.4.3.",
    "neetTrap": "For equivalent conductivity Λeq°, do NOT multiply by stoichiometric coefficients! Multiply ONLY when calculating MOLAR conductivity Λm°.",
    "tags": [
      "Kohlrausch Law",
      "Limiting Conductance",
      "Ionic Conductivity",
      "Class 12"
    ],
    "quiz": {
      "question": "What is the limiting molar conductivity (Λm°) of Al2(SO4)3 in terms of individual limiting molar ionic conductivities?",
      "options": [
        "λ°(Al³⁺) + λ°(SO4²⁻)",
        "2 λ°(Al³⁺) + 3 λ°(SO4²⁻)",
        "3 λ°(Al³⁺) + 2 λ°(SO4²⁻)",
        "6 [λ°(Al³⁺) + λ°(SO4²⁻)]"
      ],
      "answerIndex": 1,
      "explanation": "One formula unit of Al2(SO4)3 dissociates into 2 Al³⁺ ions and 3 SO4²⁻ ions, so Λm° = 2 λ°(Al³⁺) + 3 λ°(SO4²⁻)."
    }
  },
  {
    "id": "chem-ch11-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-2",
    "topicTitle": "Kohlrausch Application: Weak Electrolyte Λm° Calculation",
    "mnemonicNumber": 9,
    "title": "Kohlrausch Magic: Λm°(CH3COOH) = Λm°(CH3COONa) + Λm°(HCl) - Λm°(NaCl)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Add the Two Salts That Have What You Want, Subtract the Unwanted NaCl!",
    "memoryHook": "To find unmeasurable Λm° of acetic acid CH3COOH: Add the strong electrolyte with acetate (CH3COONa) + strong acid with H⁺ (HCl), then subtract the leftover salt (NaCl)! Degree of dissociation α = Λm / Λm°! Ka = C α² / (1 - α)!",
    "fact": "Applications of Kohlrausch’s Law: 1. Calculation of Λm° of Weak Electrolytes: Λm°(CH3COOH) = Λm°(CH3COONa) + Λm°(HCl) - Λm°(NaCl) = [λ°(CH3COO⁻) + λ°(Na⁺)] + [λ°(H⁺) + λ°(Cl⁻)] - [λ°(Na⁺) + λ°(Cl⁻)] = λ°(CH3COO⁻) + λ°(H⁺). 2. Degree of Dissociation (α): α = Λm / Λm° (where Λm is molar conductivity at concentration C). 3. Dissociation Constant (Ka): Ka = C α² / (1 - α) = C(Λm / Λm°)² / [1 - (Λm / Λm°)]. 4. Solubility of Sparingly Soluble Salts (AgCl, BaSO4): In saturated solution, C = solubility s (mol/L): s = (1000 × κ) / Λm°, and Ksp = s².",
    "breakdown": [
      {
        "key": "Acetic Acid Λm°",
        "label": "Λm°(CH3COONa) + Λm°(HCl) - Λm°(NaCl)"
      },
      {
        "key": "Degree of Dissociation",
        "label": "α = Λm / Λm°"
      },
      {
        "key": "Dissociation Constant",
        "label": "Ka = C α² / (1 - α)"
      },
      {
        "key": "Sparingly Soluble Salt",
        "label": "Solubility s = (1000 × κ) / Λm° → Ksp = s²"
      }
    ],
    "doodleBadge": "Λm°(CH3COOH) = Acetate + HCl - NaCl\nα = Λm / Λm°\nKa = Cα² / (1 - α)",
    "doodleSubtext": "Kohlrausch Applications",
    "explanation": "By combining measurable strong electrolytes algebraically, Kohlrausch’s law calculates exact limiting conductivities for weak acids that cannot be measured directly.",
    "alsoRemember": "For NH4OH: Λm°(NH4OH) = Λm°(NH4Cl) + Λm°(NaOH) - Λm°(NaCl).",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.4.4.",
    "neetTrap": "Remember that α = Λm / Λm° is a dimensionless ratio between 0 and 1; multiply by 100 if the question asks for percentage dissociation!",
    "tags": [
      "Kohlrausch Application",
      "Acetic Acid",
      "Degree of Dissociation",
      "Ka"
    ],
    "quiz": {
      "question": "Given Λm° for NaCl, HCl, and CH3COONa are 126, 426, and 91 S·cm²·mol⁻¹ respectively, what is Λm° for acetic acid (CH3COOH)?",
      "options": [
        "391 S·cm²·mol⁻¹",
        "426 S·cm²·mol⁻¹",
        "517 S·cm²·mol⁻¹",
        "643 S·cm²·mol⁻¹"
      ],
      "answerIndex": 0,
      "explanation": "Λm°(CH3COOH) = Λm°(CH3COONa) + Λm°(HCl) - Λm°(NaCl) = 91 + 426 - 126 = 391 S·cm²·mol⁻¹."
    }
  },
  {
    "id": "chem-ch11-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-3",
    "topicTitle": "Faraday's First & Second Laws of Electrolysis",
    "mnemonicNumber": 10,
    "title": "Faraday’s Laws: w = Z · I · t (First Law) & w1 / w2 = E1 / E2 (Second Law)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "w = Z · I · t | Z = Equivalent Weight / 96500 = M / (n × 96500)! 1 Faraday Deposits 1 Equivalent!",
    "memoryHook": "1. First Law: Mass deposited is directly proportional to charge: w = Z · Q = Z · I · t. 2. Electrochemical Equivalent: Z = E / 96500 = M / (n × 96500). 3. Golden Faraday Rule: Exactly 1 Faraday (96,500 Coulombs) of electricity deposits exactly ONE EQUIVALENT (E = M/n grams) of ANY substance! 1 mole of Ag⁺ needs 1 F; 1 mole of Cu²⁺ needs 2 F; 1 mole of Al³⁺ needs 3 F!",
    "fact": "Faraday’s Laws of Electrolysis: 1. First Law: The mass of any substance deposited or liberated at any electrode is directly proportional to the quantity of electricity (Q = I·t) passed: w ∝ Q → w = Z · I · t. 2. Electrochemical Equivalent (Z): Mass deposited by 1 Coulomb (1 Ampere for 1 second): Z = Equivalent Weight / F = M / (n × 96500). 3. Second Law: When the same quantity of electricity is passed through different electrolytes connected in series, the masses of substances liberated are directly proportional to their equivalent weights: w1 / w2 = E1 / E2. 4. Number of Faradays needed: n_Faradays = moles of substance × n-factor.",
    "breakdown": [
      {
        "key": "Faraday's 1st Law",
        "label": "w = Z · I · t = (M · I · t) / (n · 96500)"
      },
      {
        "key": "Faraday's 2nd Law",
        "label": "w1 / w2 = E1 / E2 (for cells in series)"
      },
      {
        "key": "Faraday Deposition",
        "label": "1 Faraday (96500 C) deposits: 108 g Ag (1 mol), 31.75 g Cu (0.5 mol), 9 g Al (1/3 mol)"
      }
    ],
    "doodleBadge": "w = Z · I · t\n1 Faraday = 1 Equivalent\nSeries: w1/w2 = E1/E2",
    "doodleSubtext": "Electrolysis Laws",
    "explanation": "One Faraday represents one mole of electrons (6.022 × 10²³ electrons); every electron transferred carries exactly 1.6 × 10⁻¹⁹ C of charge.",
    "alsoRemember": "To liberate 1 mole of O2 gas (4e⁻ process from water: 2H2O → O2 + 4H⁺ + 4e⁻), you need 4 Faradays of electricity (4 × 96500 C).",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.5.1.",
    "neetTrap": "In w = Z · I · t, time \"t\" MUST ALWAYS be in SECONDS! If time is given in minutes or hours, convert it to seconds first.",
    "tags": [
      "Faraday Laws",
      "Electrolysis",
      "Electrochemical Equivalent",
      "Faraday Constant"
    ],
    "quiz": {
      "question": "How many Faradays of electricity are required to deposit 1 mole of Aluminum from molten Al2O3?",
      "options": [
        "1 F",
        "2 F",
        "3 F",
        "6 F"
      ],
      "answerIndex": 2,
      "explanation": "The reduction of aluminum is Al³⁺ + 3e⁻ → Al(s). Since 3 moles of electrons are required per mole of Al, exactly 3 Faradays (3 F) are needed."
    }
  },
  {
    "id": "chem-ch11-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-3",
    "topicTitle": "Electrolysis of Aqueous NaCl (Overpotential of Oxygen)",
    "mnemonicNumber": 11,
    "title": "Aqueous NaCl Electrolysis: H2 at Cathode (Water Wins over Na⁺); Cl2 at Anode (Overpotential Trap)!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Water Becomes H2 at Cathode! Oxygen is Sluggish, so Chlorine Steals the Anode!",
    "memoryHook": "In aqueous NaCl (brine): At CATHODE: H2O is reduced preferentially over Na⁺ (E° of water = -0.83 V is far better than Na⁺ = -2.71 V), so H2 gas evolves and OH⁻ remains! At ANODE: Thermodynamically, water oxidation to O2 (E° = +1.23 V) should beat Cl⁻ (E° = +1.36 V). BUT O2 has high KINETIC OVERPOTENTIAL on electrodes, so CHLORINE GAS (Cl2) EVOLVES INSTEAD! Solution becomes basic (NaOH forms)!",
    "fact": "Electrolysis of Aqueous NaCl (Brine Solution): 1. Cathode (Reduction): Competition between Na⁺ + e⁻ → Na (E° = -2.71 V) and 2H2O + 2e⁻ → H2(g) + 2OH⁻ (E° = -0.83 V). Water has much less negative reduction potential, so H2 gas is evolved at the cathode. 2. Anode (Oxidation): Competition between 2H2O → O2(g) + 4H⁺ + 4e⁻ (E° = -1.23 V) and 2Cl⁻ → Cl2(g) + 2e⁻ (E° = -1.36 V). Although water oxidation is thermodynamically favored, oxidation of water to O2 is kinetically extremely sluggish and requires extra overpotential. Therefore, Cl2 gas is evolved at the anode. 3. Net Reaction: 2NaCl + 2H2O → 2NaOH + H2(g) + Cl2(g). Solution becomes alkaline NaOH.",
    "breakdown": [
      {
        "key": "Cathode Gas",
        "label": "H2 gas evolves (water reduced, NOT Na!)"
      },
      {
        "key": "Anode Gas",
        "label": "Cl2 gas evolves (due to oxygen kinetic overpotential)"
      },
      {
        "key": "Solution Byproduct",
        "label": "NaOH (Sodium hydroxide, pH rises > 7)"
      },
      {
        "key": "Molten NaCl Contrast",
        "label": "In MOLTEN NaCl (no water): Na metal forms at cathode and Cl2 gas at anode!"
      }
    ],
    "doodleBadge": "Aqueous NaCl:\nCathode = H2 | Anode = Cl2\nSolution = NaOH\nOxygen Overpotential!",
    "doodleSubtext": "Competing Electrolysis Pathways",
    "explanation": "The Nelson cell and Castner-Kellner cell exploit this exact electrolysis to manufacture industrial chlorine gas and caustic soda (NaOH) simultaneously.",
    "alsoRemember": "If very DILUTE aqueous NaCl is electrolyzed, the overpotential is overcome and O2 gas evolves at the anode instead of Cl2.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.5.2.",
    "neetTrap": "Electrolysis of AQUEOUS NaCl gives H2 at the cathode, NOT Sodium metal! Sodium metal can only be obtained by electrolyzing MOLTEN (fused) dry NaCl.",
    "tags": [
      "Aqueous NaCl",
      "Electrolysis",
      "Overpotential",
      "Chlor-Alkali"
    ],
    "quiz": {
      "question": "What are the products of electrolysis of concentrated aqueous sodium chloride (brine) at the cathode and anode, respectively?",
      "options": [
        "Cathode: Na; Anode: Cl2",
        "Cathode: H2; Anode: O2",
        "Cathode: H2; Anode: Cl2",
        "Cathode: Na; Anode: O2"
      ],
      "answerIndex": 2,
      "explanation": "At the cathode, water is reduced to produce H2 gas; at the anode, Cl⁻ is oxidized to Cl2 gas due to the overpotential of oxygen."
    }
  },
  {
    "id": "chem-ch11-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-3",
    "topicTitle": "Electrolysis with Active vs Inert Electrodes (CuSO4)",
    "mnemonicNumber": 12,
    "title": "Electrolysis of CuSO4: Inert Pt Gives O2 at Anode; Active Cu Anode Just Dissolves!",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Platinum is a Passive Bystander (Water Oxidizes to O2)! Copper Anode Sacrifices Itself (Cu → Cu²⁺)!",
    "memoryHook": "In aqueous CuSO4: CATHODE is always Cu²⁺ + 2e⁻ → Cu(s) (Reddish copper deposits). 1) With INERT Platinum Electrodes: Anode cannot dissolve, so water is oxidized: 2H2O → O2(g) + 4H⁺ + 4e⁻! Blue color fades, solution becomes acidic H2SO4! 2) With ACTIVE Copper Electrodes: Copper anode has lower oxidation potential than water, so Cu anode DISSOLVES: Cu(s) → Cu²⁺ + 2e⁻! Blue color stays constant (used in electro-refining)!",
    "fact": "Electrode Material Influences Electrolysis: 1. With Inert Electrodes (Platinum or Graphite): Cathode: Cu²⁺ + 2e⁻ → Cu(s) (copper deposits). Anode: 2H2O → O2(g) + 4H⁺ + 4e⁻ (Oxygen gas evolves). Net effect: CuSO4 + H2O → Cu + ½ O2 + H2SO4. Blue color of solution gradually fades, and solution turns acidic. 2. With Attackable / Active Electrodes (Copper): Cathode: Cu²⁺ + 2e⁻ → Cu(s) (Pure copper grows). Anode: Cu(s) → Cu²⁺ + 2e⁻ (Impure copper anode dissolves). Net effect: Copper transfers from anode to cathode. Concentration of Cu²⁺ and blue color intensity remain strictly constant. This is the industrial process of electro-refining of blister copper.",
    "breakdown": [
      {
        "key": "Inert Pt Electrodes",
        "label": "Cathode = Cu deposits | Anode = O2 gas evolves | Blue color fades"
      },
      {
        "key": "Active Cu Electrodes",
        "label": "Cathode = Cu deposits | Anode = Cu dissolves | Blue color unchanged"
      },
      {
        "key": "Anode Mud",
        "label": "In refining, noble metals (Ag, Au, Pt) settle beneath anode as valuable anode mud"
      }
    ],
    "doodleBadge": "Inert Pt: O2 at Anode (Fades Blue)\nActive Cu: Cu dissolves (Color constant)",
    "doodleSubtext": "Inert vs Attackable Electrodes",
    "explanation": "The oxidation potential of metallic copper (+0.34 V reduction) is far more favorable than water oxidation (+1.23 V), so metallic copper at the anode oxidizes before water can even begin.",
    "alsoRemember": "In copper refining, impurities more reactive than copper (Zn, Fe, Ni) enter the electrolyte as ions, while less reactive impurities (Ag, Au, Pt) fall as anode mud.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.5.2 & Metallurgy.",
    "neetTrap": "If platinum electrodes are used, the gas evolved at the anode is OXYGEN (O2), NOT SO2 or SO3!",
    "tags": [
      "Electrolysis",
      "CuSO4",
      "Active Electrodes",
      "Electro-refining"
    ],
    "quiz": {
      "question": "During the electrolysis of aqueous CuSO4 using inert platinum electrodes, what product is formed at the anode and what happens to the blue color of the solution?",
      "options": [
        "Cu deposits, blue color deepens",
        "O2 gas evolves, blue color fades",
        "SO2 gas evolves, blue color remains unchanged",
        "H2 gas evolves, blue color fades"
      ],
      "answerIndex": 1,
      "explanation": "With inert platinum electrodes, water is oxidized at the anode to produce O2 gas; as Cu²⁺ ions are consumed at the cathode, the blue color gradually fades."
    }
  },
  {
    "id": "chem-ch11-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-4",
    "topicTitle": "Primary Batteries: Dry Cell (Leclanché) & Mercury Cell",
    "mnemonicNumber": 13,
    "title": "Primary Batteries: Mercury Cell Has Constant 1.35 V Voltage (No Ions in Overall Net Reaction!)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Dry Cell Drops from 1.5 V; Mercury Cell Stays Pure Constant 1.35 V for Hearing Aids!",
    "memoryHook": "1. Dry Cell (Leclanché): Anode = Zinc container; Cathode = Carbon rod with MnO2; Electrolyte = NH4Cl + ZnCl2 paste. Voltage = ~1.5 V, but drops over time as chemicals deplete. 2. Mercury Cell: Anode = Zn-Hg amalgam; Cathode = HgO + C; Electrolyte = KOH + ZnO paste. Overall: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l). Voltage is a ROCK-STEADY 1.35 V throughout its entire lifetime because the overall reaction contains ZERO dissolved ions in solution!",
    "fact": "Primary Batteries (Non-Rechargeable): 1. Leclanché Dry Cell: Anode: Zn(s) → Zn²⁺ + 2e⁻. Cathode: 2MnO2 + 2NH4⁺ + 2e⁻ → Mn2O3 + 2NH3 + H2O (or MnO(OH)). NH3 gas is trapped by Zn²⁺ as complex [Zn(NH3)4]²⁺ to prevent pressure explosion. Voltage: ~1.5 V (drops with use). 2. Mercury Cell (Button Cell): Anode: Zn(Hg) + 2OH⁻ → ZnO(s) + H2O + 2e⁻. Cathode: HgO(s) + H2O + 2e⁻ → Hg(l) + 2OH⁻. Overall Reaction: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l). Because all reactants and products are solids or liquids with NO ionic species in solution, the cell potential does not depend on concentration and remains constant at 1.35 V throughout its life. Used in watches, hearing aids, and pacemakers.",
    "breakdown": [
      {
        "key": "Dry Cell (1.5 V)",
        "label": "Zn can anode, MnO2 cathode, NH4Cl paste, voltage drops over time"
      },
      {
        "key": "Mercury Cell (1.35 V)",
        "label": "Zn-Hg anode, HgO cathode, voltage stays perfectly constant at 1.35 V"
      },
      {
        "key": "Why Constant Voltage?",
        "label": "Overall reaction Zn(Hg) + HgO → ZnO + Hg has NO dissolved ions whose concentrations could change!"
      }
    ],
    "doodleBadge": "Mercury Cell: 1.35 V (Constant!)\nDry Cell: ~1.5 V (Depletes)\nZn(Hg) + HgO → ZnO + Hg",
    "doodleSubtext": "Primary Battery Comparison",
    "explanation": "Nernst equation shows cell EMF depends on ion concentrations; when ion concentrations are absent from the overall equation, EMF becomes invariant.",
    "alsoRemember": "Dry cell cannot be recharged because the zinc container corrodes and reaction products cannot be cleanly reversed.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.6.1.",
    "neetTrap": "Why is the potential of a mercury cell constant throughout its life? Because the overall reaction does NOT involve any ion in solution whose concentration can change!",
    "tags": [
      "Primary Batteries",
      "Dry Cell",
      "Mercury Cell",
      "Constant Voltage"
    ],
    "quiz": {
      "question": "Why does a mercury cell maintain a constant voltage of 1.35 V throughout its useful life?",
      "options": [
        "It uses metallic mercury as cathode",
        "The overall cell reaction does not involve any dissolved ion whose concentration changes during discharge",
        "It has low internal resistance",
        "Mercury is a liquid metal"
      ],
      "answerIndex": 1,
      "explanation": "The overall cell reaction Zn(Hg) + HgO(s) → ZnO(s) + Hg(l) involves only solid and liquid phases with zero dissolved ions in solution, ensuring an invariant cell potential."
    }
  },
  {
    "id": "chem-ch11-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-4",
    "topicTitle": "Lead Storage Battery (Discharge & Recharge Chemistry)",
    "mnemonicNumber": 14,
    "title": "Lead Storage Battery: Discharge Makes Both Electrodes PbSO4; H2SO4 Density Drops to 1.15!",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Discharging: Pb + PbO2 + 2H2SO4 → 2PbSO4 + 2H2O! Both Electrodes Coat with White Lead Sulfate!",
    "memoryHook": "Car battery (12 V = 6 cells in series × 2 V): Anode = Spongy Lead (Pb); Cathode = Lead Dioxide (PbO2); Electrolyte = 38% H2SO4 (density 1.30 g/mL). When discharging: BOTH anode and cathode convert to insoluble white PbSO4, water is produced, and H2SO4 density drops to 1.15 g/mL! When recharging: REVERSES all reactions, regenerating Pb, PbO2, and H2SO4!",
    "fact": "Lead Storage Battery Chemistry: 1. Discharging (Galvanic Mode): Anode: Pb(s) + SO4²⁻ → PbSO4(s) + 2e⁻. Cathode: PbO2(s) + 4H⁺ + SO4²⁻ + 2e⁻ → PbSO4(s) + 2H2O. Net Discharging Reaction: Pb(s) + PbO2(s) + 2H2SO4(aq) → 2PbSO4(s) + 2H2O(l). Sulfuric acid is consumed; density falls from 1.30 g/mL (fully charged) to ~1.15 g/mL (discharged). 2. Recharging (Electrolytic Mode): Connect to an external DC source with voltage > 12 V. All reactions reverse: 2PbSO4(s) + 2H2O(l) → Pb(s) + PbO2(s) + 2H2SO4(aq). PbSO4 at negative terminal reduces back to Pb; PbSO4 at positive terminal oxidizes back to PbO2; H2SO4 is regenerated.",
    "breakdown": [
      {
        "key": "Discharging Anode",
        "label": "Pb → PbSO4 + 2e⁻ (Oxidation)"
      },
      {
        "key": "Discharging Cathode",
        "label": "PbO2 + 4H⁺ + SO4²⁻ + 2e⁻ → PbSO4 + 2H2O (Reduction)"
      },
      {
        "key": "Both Electrodes",
        "label": "Both turn into insoluble white PbSO4 solid"
      },
      {
        "key": "State of Charge Indicator",
        "label": "Hydrometer measures H2SO4 specific gravity (1.30 = full, 1.15 = dead)"
      }
    ],
    "doodleBadge": "Lead Battery:\nPb + PbO2 + 2H2SO4 ⇌ 2PbSO4 + 2H2O\nRecharge Reverses All Reactions",
    "doodleSubtext": "Secondary Battery Cycle",
    "explanation": "Because both oxidation and reduction products (PbSO4) adhere as insoluble coatings onto the grid electrodes, electrical current can reverse the process without lost material.",
    "alsoRemember": "Nickel-Cadmium (Ni-Cd) cell is another secondary battery with longer life: Cd + 2Ni(OH)3 → CdO + 2Ni(OH)2 + H2O (produces ~1.4 V).",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.6.2.",
    "neetTrap": "During charging, the anode and cathode roles flip: the electrode connected to the external negative terminal acts as cathode to reduce PbSO4 back to Pb!",
    "tags": [
      "Lead Storage Battery",
      "Secondary Battery",
      "Recharging",
      "PbSO4"
    ],
    "quiz": {
      "question": "What happens to the density of the sulfuric acid electrolyte during the discharging of a lead storage battery?",
      "options": [
        "It increases",
        "It decreases because H2SO4 is consumed and water is produced",
        "It remains constant",
        "It drops to zero"
      ],
      "answerIndex": 1,
      "explanation": "Discharging consumes H2SO4 and produces water (Pb + PbO2 + 2H2SO4 → 2PbSO4 + 2H2O), diluting the electrolyte and decreasing its density."
    }
  },
  {
    "id": "chem-ch11-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-4",
    "topicTitle": "Hydrogen-Oxygen Fuel Cell (H2-O2 Fuel Cell)",
    "mnemonicNumber": 15,
    "title": "H2-O2 Fuel Cell: 2H2 + O2 → 2H2O (70% Efficiency, Zero Pollution, Powers Apollo Spacecraft!)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Clean Space Water: Hydrogen + Oxygen Burn Electrically to Make Electricity and Pure Drinking Water!",
    "memoryHook": "Fuel cells convert chemical combustion energy DIRECTLY into electrical energy! Anode: 2H2 + 4OH⁻ → 4H2O + 4e⁻! Cathode: O2 + 2H2O + 4e⁻ → 4OH⁻! Net: 2H2 + O2 → 2H2O! Operating efficiency is ~70% (far higher than 40% thermal power plants)! Used in Apollo moon missions for electricity + astronaut drinking water!",
    "fact": "Hydrogen-Oxygen Fuel Cell: 1. Electrodes: Porous carbon electrodes impregnated with catalysts (finely divided Platinum or Palladium) to increase reaction rate. 2. Electrolyte: Concentrated aqueous KOH or NaOH solution. 3. Electrode Reactions: Anode: 2H2(g) + 4OH⁻(aq) → 4H2O(l) + 4e⁻. Cathode: O2(g) + 2H2O(l) + 4e⁻ → 4OH⁻(aq). Overall Reaction: 2H2(g) + O2(g) → 2H2O(l). 4. Thermodynamic Efficiency: η = ΔG° / ΔH° ≈ 83% theoretically, ~70% practically. Thermal power plants achieve only ~40% efficiency due to Carnot cycle limitations. 5. Environmental: Completely eco-friendly with zero toxic emissions.",
    "breakdown": [
      {
        "key": "Anode Reaction",
        "label": "2H2 + 4OH⁻ → 4H2O + 4e⁻"
      },
      {
        "key": "Cathode Reaction",
        "label": "O2 + 2H2O + 4e⁻ → 4OH⁻"
      },
      {
        "key": "Overall Reaction",
        "label": "2H2 + O2 → 2H2O (Continuous fuel supply needed)"
      },
      {
        "key": "Efficiency",
        "label": "η = (ΔG° / ΔH°) × 100 ≈ 70% (Bypasses Carnot limit)"
      }
    ],
    "doodleBadge": "2H2 + O2 → 2H2O\nη ≈ 70% (Direct Conversion)\nApollo Drinking Water",
    "doodleSubtext": "Fuel Cell Technology",
    "explanation": "Fuel cells run continuously as long as fuel (H2) and oxidant (O2) are supplied from outside, unlike closed batteries that die when internal reagents deplete.",
    "alsoRemember": "Water vapor produced in the Apollo mission fuel cells was condensed and used as drinking water by the astronauts.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.6.3.",
    "neetTrap": "The theoretical efficiency of a fuel cell is calculated as η = (ΔG° / ΔH°) × 100, NOT ΔH / ΔG!",
    "tags": [
      "Fuel Cell",
      "H2 O2 Cell",
      "Efficiency",
      "Apollo Mission"
    ],
    "quiz": {
      "question": "What is the theoretical thermodynamic efficiency (η) formula for a fuel cell?",
      "options": [
        "η = ΔH° / ΔG°",
        "η = ΔG° / ΔH°",
        "η = TΔS° / ΔH°",
        "η = ΔG° / TΔS°"
      ],
      "answerIndex": 1,
      "explanation": "The maximum useful electrical work obtainable is ΔG°, while total heat of combustion is ΔH°, so efficiency η = ΔG° / ΔH°."
    }
  },
  {
    "id": "chem-ch11-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-4",
    "topicTitle": "Corrosion of Iron & Sacrificial Protection (Galvanization)",
    "mnemonicNumber": 16,
    "title": "Corrosion: An Electrochemical Cell (Rust = Fe2O3·xH2O); Zinc Sacrifices Itself in Galvanization!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Rust Needs Both O2 and H2O! Zinc (E° = -0.76 V) Corrodes First to Protect Iron (E° = -0.44 V)!",
    "memoryHook": "Corrosion of iron is an electrochemical cell: Anode (Oxidation): Fe → Fe²⁺ + 2e⁻. Cathode (Reduction): O2 + 4H⁺ + 4e⁻ → 2H2O. Rust formula is hydrated ferric oxide: Fe2O3·xH2O! Galvanization coats iron with Zinc: Zinc has a more negative E° (-0.76 V vs Fe -0.44 V), so Zinc acts as a sacrificial anode and protects iron even if the zinc coating is scratched!",
    "fact": "Electrochemical Mechanism of Rusting: 1. Anodic Site: Pure iron acts as anode: 2Fe(s) → 2Fe²⁺ + 4e⁻ (E° = -0.44 V). 2. Cathodic Site: Dissolved oxygen in water film containing acidic CO2 acts as cathode: O2(g) + 4H⁺(aq) + 4e⁻ → 2H2O(l) (E° = +1.23 V). 3. Rust Formation: Fe²⁺ ions are oxidized further by atmospheric oxygen: 4Fe²⁺ + O2 + 4H2O → 2Fe2O3 + 8H⁺. Fe2O3 hydrates to Fe2O3·xH2O (Rust). 4. Galvanization: Iron coated with metallic Zinc. Since E°(Zn²⁺/Zn) = -0.76 V is more negative than E°(Fe²⁺/Fe) = -0.44 V, Zinc oxidizes preferentially. Even if scratched, Zinc continues to protect iron sacrificially (Cathodic Protection). 5. Tin Plating Contrast: Sn (E° = -0.14 V) is less reactive than iron; once tin coating is scratched, IRON corrodes FASTER than normal!",
    "breakdown": [
      {
        "key": "Rust Formula",
        "label": "Fe2O3 · xH2O (Hydrated ferric oxide)"
      },
      {
        "key": "Essential Agents",
        "label": "BOTH Oxygen (O2) and Water (H2O) are mandatory for rusting"
      },
      {
        "key": "Galvanization (Zinc)",
        "label": "Zn oxidizes sacrificially (E° = -0.76 V protects Fe -0.44 V even when scratched)"
      },
      {
        "key": "Tin Coating Danger",
        "label": "Once scratched, iron becomes the anode and rusts faster!"
      }
    ],
    "doodleBadge": "Rust: Fe2O3 · xH2O\nGalvanization = Zinc Coating\nSacrificial Protection",
    "doodleSubtext": "Corrosion Electrochemistry",
    "explanation": "Dissolved CO2 and SO2 in water droplets create acidic H⁺ ions, accelerating the reduction of oxygen at the cathodic site.",
    "alsoRemember": "Cathodic protection of underground pipelines connects magnesium or zinc blocks via wires; the sacrificial block corrodes while the iron pipe remains untouched.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.7.",
    "neetTrap": "If galvanized iron is scratched, it is STILL protected because Zinc has lower reduction potential. If tin-plated iron is scratched, iron rusts FASTER!",
    "tags": [
      "Corrosion",
      "Rusting",
      "Galvanization",
      "Sacrificial Anode"
    ],
    "quiz": {
      "question": "Why does galvanized iron remain protected from rusting even after the zinc coating is scratched and exposed to air?",
      "options": [
        "Zinc forms an alloy with iron",
        "Zinc has a more negative reduction potential than iron and oxidizes preferentially",
        "Zinc is less reactive than iron",
        "Iron forms a protective oxide layer"
      ],
      "answerIndex": 1,
      "explanation": "E°(Zn²⁺/Zn) = -0.76 V is more negative than E°(Fe²⁺/Fe) = -0.44 V, so zinc continues to act as the sacrificial anode and corrodes in place of iron."
    }
  },
  {
    "id": "chem-ch11-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-1",
    "topicTitle": "Standard Hydrogen Electrode (SHE) Reference",
    "mnemonicNumber": 17,
    "title": "Standard Hydrogen Electrode (SHE): Potential Defined as Exactly 0.00 V at ALL Temperatures!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Pt | H2(g, 1 bar) | H⁺(aq, 1 M): The Zero Benchmark of Electrochemistry!",
    "memoryHook": "SHE is the universal benchmark electrode: Platinized platinum foil dipping in 1 M H⁺ (1 M HCl) with pure H2 gas bubbling at 1 bar pressure at 298 K! By international agreement, its standard potential is set to E° = 0.000 V at ALL temperatures! Acts as anode when paired with copper; acts as cathode when paired with zinc!",
    "fact": "Standard Hydrogen Electrode (SHE / NHE): 1. Representation: Pt(s) | H2(g, 1 bar) | H⁺(aq, 1 M). 2. Assigned Potential: E° = 0.00 V by international IUPAC convention at all temperatures. 3. Reversible Electrode: (a) As Anode (Oxidation): H2(g) → 2H⁺(aq) + 2e⁻ (when connected to Cu, Ag). (b) As Cathode (Reduction): 2H⁺(aq) + 2e⁻ → H2(g) (when connected to Zn, Mg). 4. Platinum Black Coating: Finely divided platinum increases surface area and catalyzes the rapid reversible equilibrium between H2 gas and dissolved H⁺ ions.",
    "breakdown": [
      {
        "key": "Conditions",
        "label": "T = 298 K, P(H2) = 1 bar, [H⁺] = 1 M"
      },
      {
        "key": "Electrode Reaction",
        "label": "2H⁺(aq) + 2e⁻ ⇌ H2(g)"
      },
      {
        "key": "pH Dependence",
        "label": "E = E° - 0.0591 pH = -0.0591 × pH (At pH 14, E = -0.83 V!)"
      }
    ],
    "doodleBadge": "SHE: Pt | H2(1 bar) | H⁺(1 M)\nE° = 0.00 V (Universal Reference)\nE = -0.0591 × pH",
    "doodleSubtext": "Standard Hydrogen Electrode",
    "explanation": "Absolute half-cell potential cannot be measured because oxidation and reduction cannot occur in isolation; SHE serves as the zero-volt sea level for all electrode potentials.",
    "alsoRemember": "If pH of the hydrogen half-cell is 7 (neutral pure water), E = -0.0591 × 7 = -0.414 V.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.2.",
    "neetTrap": "The standard potential of SHE is defined as 0.00 V at ALL temperatures, not just 298 K!",
    "tags": [
      "SHE",
      "Standard Hydrogen Electrode",
      "Reference Electrode",
      "pH Dependence"
    ],
    "quiz": {
      "question": "What is the potential of a hydrogen electrode dipping into a solution of pH = 10 at 298 K under 1 bar H2 pressure?",
      "options": [
        "0.00 V",
        "-0.591 V",
        "+0.591 V",
        "-0.059 V"
      ],
      "answerIndex": 1,
      "explanation": "From Nernst equation for hydrogen electrode: E = E° - 0.0591 pH = 0 - 0.0591 × 10 = -0.591 V."
    }
  },
  {
    "id": "chem-ch11-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-1",
    "topicTitle": "Daniell Cell External Voltage (Vext) Behavior",
    "mnemonicNumber": 18,
    "title": "Daniell Cell vs External Voltage: Vext < 1.1 V (Galvanic), Vext = 1.1 V (Zero Current), Vext > 1.1 V (Electrolytic)!",
    "badgeText": "NEET Trap",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Under 1.1 V: Generates Power! At 1.1 V: Dead Stall! Over 1.1 V: Forces Flow in Reverse!",
    "memoryHook": "For a Daniell Cell (E° = 1.10 V): 1) Vext < 1.10 V: Normal galvanic cell! Electrons flow from Zn to Cu; Zn dissolves, Cu deposits! 2) Vext = 1.10 V: Opposing voltage matches cell EMF! Current = 0; Zero chemical reaction! 3) Vext > 1.10 V: Cell REVERSES and becomes an ELECTROLYTIC cell! Electrons flow from Cu to Zn; Cu dissolves, Zn deposits!",
    "fact": "Effect of Opposing External Voltage (Vext) on Daniell Cell: 1. When Vext < 1.1 V: The cell acts as a normal GALVANIC cell. Electrons flow from Zn anode to Cu cathode. Current flows from Cu to Zn. Zinc dissolves, and copper deposits. 2. When Vext = 1.1 V: No net electron or current flow. No chemical reaction occurs. The system is in dynamic electrical balance. 3. When Vext > 1.1 V: The cell acts as an ELECTROLYTIC cell. The direction of electron flow reverses: electrons flow from Cu to Zn. Zinc deposits on the zinc electrode, and copper dissolves from the copper electrode.",
    "breakdown": [
      {
        "key": "Vext < 1.1 V",
        "label": "Galvanic mode: Zn → Cu electron flow (power generation)"
      },
      {
        "key": "Vext = 1.1 V",
        "label": "Equilibrium balance: Current = 0, no reaction"
      },
      {
        "key": "Vext > 1.1 V",
        "label": "Electrolytic mode: Cu → Zn electron flow (power consumption)"
      }
    ],
    "doodleBadge": "Vext < 1.1 V: Galvanic (Zn→Cu)\nVext = 1.1 V: Zero Current\nVext > 1.1 V: Electrolytic (Cu→Zn)",
    "doodleSubtext": "External Voltage Modes",
    "explanation": "Overpowering the internal EMF of a galvanic cell with an external power source transforms it into an electrolytic cell, reversing the spontaneous chemical direction.",
    "alsoRemember": "This three-stage behavior forms the core principle of recharging any secondary battery.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.1, Figure 3.2.",
    "neetTrap": "When Vext > 1.1 V, current flow REVERSES: electrons flow from Copper to Zinc, and Zinc deposits on the electrode!",
    "tags": [
      "Daniell Cell",
      "External Voltage",
      "Vext",
      "Electrolytic Reversal"
    ],
    "quiz": {
      "question": "What happens to a Daniell cell when an opposing external potential greater than 1.1 V (Vext > 1.1 V) is applied across its terminals?",
      "options": [
        "The cell explodes",
        "Current stops flowing completely",
        "The cell functions as an electrolytic cell and electrons flow from Cu to Zn",
        "Zinc dissolves faster"
      ],
      "answerIndex": 2,
      "explanation": "When Vext exceeds 1.1 V, the direction of current is reversed and the cell operates as an electrolytic cell, driving electrons from Cu to Zn."
    }
  },
  {
    "id": "chem-ch11-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-1",
    "topicTitle": "Salt Bridge Function & Liquid Junction Potential",
    "mnemonicNumber": 19,
    "title": "Salt Bridge: Inverted U-Tube (Agar-Agar + KCl/KNO3) Prevents Liquid Junction Potential!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Salt Bridge Completes the Circuit & Keeps Both Beakers Electrically Neutral!",
    "memoryHook": "Inverted U-tube filled with agar-agar gel and an inert electrolyte (KCl, KNO3, NH4NO3)! Two key jobs: 1) Completes the electrical circuit by allowing ion migration. 2) Maintains electrical neutrality in both half-cells to eliminate Liquid Junction Potential! Ions MUST have equal ionic mobilities: u(K⁺) ≈ u(Cl⁻)! CANNOT use KCl if electrodes contain Ag⁺, Pb²⁺, or Hg2²⁺ (insoluble AgCl precipitates)!",
    "fact": "Functions and Properties of Salt Bridge: 1. Components: Inverted U-shaped glass tube containing a semi-solid paste of agar-agar or gelatin mixed with a concentrated solution of an inert electrolyte (KCl, KNO3, NH4NO3). 2. Key Criteria for Electrolyte: Cation and anion must have nearly identical ionic mobilities (u+ ≈ u-) so that both ions migrate at the same speed, preventing charge separation across the boundary (Liquid Junction Potential). 3. Functions: (a) Completes the electrical circuit by allowing ion flow between half-cells. (b) Maintains electrical neutrality: K⁺ migrates to cathode beaker to neutralize excess negative charge; Cl⁻ migrates to anode beaker to neutralize excess Zn²⁺. (c) Prevents direct mixing of the two solutions. 4. Limitation: KCl cannot be used if the half-cell contains Ag⁺, Pb²⁺, or Tl⁺ ions because insoluble chlorides (AgCl, PbCl2) precipitate, clogging the pores of the bridge.",
    "breakdown": [
      {
        "key": "Maintains Neutrality",
        "label": "Neutralizes excess Zn²⁺ at anode and excess SO4²⁻ at cathode"
      },
      {
        "key": "Equal Mobilities",
        "label": "u(K⁺) ≈ u(Cl⁻) eliminates liquid junction potential"
      },
      {
        "key": "KCl Limitation",
        "label": "Cannot use KCl with Ag⁺ or Pb²⁺ half-cells (use KNO3 or NH4NO3 instead!)"
      }
    ],
    "doodleBadge": "Salt Bridge:\n1) Completes circuit\n2) Maintains neutrality\nu(K⁺) ≈ u(Cl⁻)",
    "doodleSubtext": "Salt Bridge Mechanics",
    "explanation": "Without a salt bridge, positive charge builds up in the anode beaker and negative charge in the cathode beaker, instantly halting current within milliseconds.",
    "alsoRemember": "Liquid junction potential is the potential difference that develops across the interface of two solutions due to differing ionic migration rates.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter, Section 3.1.",
    "neetTrap": "KCl CANNOT be used in the salt bridge if the cell contains Ag⁺ (silver) or Pb²⁺ (lead) electrodes, because insoluble AgCl or PbCl2 precipitates will clog the bridge!",
    "tags": [
      "Salt Bridge",
      "Liquid Junction Potential",
      "Agar Agar",
      "KCl Mobility"
    ],
    "quiz": {
      "question": "Why is potassium chloride (KCl) commonly chosen as the electrolyte in a salt bridge?",
      "options": [
        "It is a cheap salt",
        "The transport numbers and ionic mobilities of K⁺ and Cl⁻ ions are nearly identical",
        "It has high solubility in water",
        "It increases cell potential"
      ],
      "answerIndex": 1,
      "explanation": "K⁺ and Cl⁻ ions possess nearly identical ionic mobilities and velocities, which ensures equal diffusion rates and eliminates liquid junction potential."
    }
  },
  {
    "id": "chem-ch11-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-11",
    "chapterNumber": 11,
    "chapterTitle": "Electrochemistry",
    "topicId": "chem-top-11-4",
    "topicTitle": "Electrochemistry Master Summary Map",
    "mnemonicNumber": 20,
    "title": "Electrochemistry Master Map: Nernst, Conductance, Kohlrausch, Faraday & Batteries",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Galvanic (Nernst Ecell) → Conductance (Kohlrausch Λm°) → Electrolytic (Faraday w=ZIt) → Batteries (Lead, Fuel Cell)!",
    "memoryHook": "The 4 quadrants of Electrochemistry: 1) Galvanic Cells: Ecell = E° - (0.0591/n) log Q, ΔG° = -nFE°cell. 2) Conductance: κ = G·G*, Λm = 1000κ/M, Kohlrausch Λm° = xλ°+ + yλ°-. 3) Electrolysis: Faraday w = Z·I·t, 1 F = 1 Equivalent. 4) Commercial Cells: Dry cell (1.5 V), Mercury (1.35 V constant), Lead storage (Pb+PbO2 ⇌ 2PbSO4), H2-O2 fuel cell (70%)!",
    "fact": "Master Blueprint of Chapter 3 Electrochemistry: 1. Thermodynamics: ΔG° = -nFE°cell = -2.303 RT log Kc. 2. Nernst Equation: Concentration effects on EMF. 3. Conduction: Electrolytic resistance, specific conductance (drops on dilution), molar conductance (rises on dilution). 4. Kohlrausch’s Law: Sum of independent ionic conductivities at infinite dilution, application to weak electrolytes (α = Λm/Λm°). 5. Faraday’s Laws: Quantitative electrolysis (w = ZIt, 1 F = 96500 C). 6. Batteries: Primary, secondary, fuel cells, and corrosion prevention.",
    "breakdown": [
      {
        "key": "Galvanic Quadrant",
        "label": "Nernst equation, ΔG° = -nFE°cell, concentration cells"
      },
      {
        "key": "Conductance Quadrant",
        "label": "κ = G·G*, Λm = 1000κ/M, Debye-Hückel, Kohlrausch’s law"
      },
      {
        "key": "Electrolysis Quadrant",
        "label": "Faraday’s laws (w = ZIt), products of brine/CuSO4 electrolysis"
      },
      {
        "key": "Commercial Applications",
        "label": "Mercury cell (1.35 V), Lead battery, H2-O2 fuel cell, Rusting"
      }
    ],
    "doodleBadge": "Nernst · Kohlrausch\nFaraday · Fuel Cell\nChapter 3 Master Map",
    "doodleSubtext": "Electrochemistry Complete Blueprint",
    "explanation": "Electrochemistry governs energy conversion: transforming chemical bond energy into electricity (batteries) and using electrical power to drive non-spontaneous reactions (electrolysis).",
    "alsoRemember": "Always memorize: 1 Faraday = 96500 C = charge of 1 mole of electrons = deposits 1 equivalent weight.",
    "ncertConnection": "NCERT Class 12 Chemistry Electrochemistry Chapter.",
    "neetTrap": "The entire chapter unites thermodynamics and analytical chemistry: master the transitions between E°cell, ΔG°, and Kc!",
    "tags": [
      "Electrochemistry",
      "Master Map",
      "Nernst",
      "Kohlrausch",
      "Faraday"
    ],
    "quiz": {
      "question": "Which equation correctly connects the standard cell potential (E°cell) directly to the equilibrium constant (Kc) at 298 K?",
      "options": [
        "E°cell = (0.0591 / n) log Kc",
        "E°cell = -(0.0591 / n) log Kc",
        "E°cell = (n / 0.0591) log Kc",
        "E°cell = -n F log Kc"
      ],
      "answerIndex": 0,
      "explanation": "Setting Ecell = 0 at equilibrium in the Nernst equation yields E°cell = (0.0591 / n) log Kc."
    }
  }
];
