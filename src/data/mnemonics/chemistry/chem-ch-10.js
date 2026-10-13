export const chemCh10Mnemonics = [
  {
    "id": "chem-ch10-01",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Temperature Dependence of Concentration Terms",
    "mnemonicNumber": 1,
    "title": "Concentration Terms: Volume Changes with Temperature; Mass Stays Rock-Solid!",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Has \"Volume\" (Liters)? Changes with Temperature! Mass Only (Kilograms)? Temperature-Proof!",
    "memoryHook": "Heat expands volume! Any term containing Volume (Liters) is TEMPERATURE-DEPENDENT: Molarity (M), Normality (N), %(v/v), %(w/v)! Terms based purely on Mass/Moles are TEMPERATURE-INDEPENDENT: Molality (m), Mole Fraction (x), %(w/w), ppm by mass! Molality is always the preferred term in thermodynamics!",
    "fact": "1. Temperature Dependent (contain Volume): Molarity (M = mol/L), Normality (N = eq/L), Formality (F), %(v/v), %(w/v). As temperature increases, volume expands, so Molarity and Normality DECREASE. 2. Temperature Independent (contain only Mass/Moles): Molality (m = mol/kg of solvent), Mole Fraction (x), %(w/w), Parts per million (ppm by mass). Unaffected by temperature changes.",
    "breakdown": [
      {
        "key": "Temp-Dependent",
        "label": "Molarity (M), Normality (N) — decrease on heating as liquid expands"
      },
      {
        "key": "Temp-Independent",
        "label": "Molality (m), Mole Fraction (x), %(w/w) — remain strictly constant at all temperatures"
      },
      {
        "key": "Why Molality Wins",
        "label": "In colligative property formulas (ΔTb = Kb·m), molality is used so measurements stay valid across temperatures"
      }
    ],
    "doodleBadge": "Has Volume (M, N) → Temp Dependent\nMass Only (m, x) → Temp Independent",
    "doodleSubtext": "Concentration Units Benchmark",
    "explanation": "Mass is a conserved invariant quantity, but liquid volume expands with temperature according to its thermal expansion coefficient.",
    "alsoRemember": "For very dilute aqueous solutions where density ≈ 1.0 g/mL, Molarity numerically equals Molality (1 M ≈ 1 m).",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.1.",
    "neetTrap": "Questions often ask: \"Which concentration term changes with temperature?\" The answer is MOLARITY or NORMALITY (never Molality)!",
    "tags": [
      "Molarity",
      "Molality",
      "Temperature Dependence",
      "Solutions"
    ],
    "quiz": {
      "question": "Which of the following concentration units does NOT change with temperature?",
      "options": [
        "Molarity",
        "Normality",
        "Molality",
        "Formality"
      ],
      "answerIndex": 2,
      "explanation": "Molality expresses moles of solute per kilogram of solvent mass; because mass is independent of temperature, molality does not change with temperature."
    }
  },
  {
    "id": "chem-ch10-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Henry's Law of Gas Solubility (p = KH · x)",
    "mnemonicNumber": 2,
    "title": "Henry’s Law: p = KH · x (Higher KH = Lower Gas Solubility; Fish Love Cold Water!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Push Harder on the Soda Cap (p) → More Gas Dissolves (x)! High KH = Gas Hates Liquid!",
    "memoryHook": "Henry’s Law: p = KH · x (Partial pressure = Henry’s constant × mole fraction). At a given pressure: Solubility (x) is INVERSELY proportional to KH! As temperature rises, KH increases, so gas solubility DECREASES! That is why cold water holds more dissolved oxygen and aquatic life thrives in cold lakes!",
    "fact": "Henry’s Law: 1. Equation: p = KH · x (p = partial pressure of gas in vapor phase, x = mole fraction of dissolved gas, KH = Henry’s law constant). 2. Temperature effect: Dissolution of gas in liquid is an EXOTHERMIC process (ΔH_sol < 0). Increasing temperature increases KH and decreases gas solubility. 3. Practical Applications: (a) Soda bottles: Sealed under high pressure to increase CO2 solubility. (b) Scuba diving (The Bends): Divers breathe air under high pressure; returning to surface too quickly causes dissolved N2 to bubble out into blood vessels, blocking capillaries. Modern diving tanks use air diluted with Helium (11.7% He, 56.2% N2, 32.1% O2) because Helium has very high KH (extremely low blood solubility). (c) High altitude anoxia: Low atmospheric pressure reduces dissolved oxygen in blood, causing fatigue and impaired thinking.",
    "breakdown": [
      {
        "key": "p = KH · x",
        "label": "Higher pressure pushes more gas into liquid"
      },
      {
        "key": "KH vs Solubility",
        "label": "Higher KH value indicates LOWER solubility of gas in water at that temperature"
      },
      {
        "key": "Scuba Tank Mix",
        "label": "Helium (11.7%) prevents nitrogen bends due to low solubility"
      }
    ],
    "doodleBadge": "p = KH · x\nHigh KH = Low Solubility\nCold Water = Happy Fish!",
    "doodleSubtext": "Henry's Law Applications",
    "explanation": "Heating water drives dissolved gas out of solution: boiling water expels all dissolved gases, giving it a flat taste.",
    "alsoRemember": "Henry’s law fails when the gas chemically reacts with the solvent (e.g. NH3 or HCl reacting with water to form NH4⁺/OH⁻ or H⁺/Cl⁻).",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.2.",
    "neetTrap": "Between Nitrogen and Helium, Helium has a HIGHER KH value, meaning Helium is LESS soluble in blood than Nitrogen.",
    "tags": [
      "Henry's Law",
      "Gas Solubility",
      "The Bends",
      "KH Constant"
    ],
    "quiz": {
      "question": "Why are aquatic species generally more comfortable in cold water than in warm water?",
      "options": [
        "Viscosity of cold water is lower",
        "Dissolved oxygen concentration is higher in cold water because gas solubility increases at lower temperatures",
        "Cold water has higher Henry’s constant (KH)",
        "Predators move slower in cold water"
      ],
      "answerIndex": 1,
      "explanation": "Gas dissolution in liquid is exothermic; lowering temperature decreases Henry’s constant KH and increases the solubility of dissolved oxygen in water."
    }
  },
  {
    "id": "chem-ch10-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Raoult's Law for Volatile Liquids",
    "mnemonicNumber": 3,
    "title": "Raoult’s Law: Partial Pressure = Pure Vapor Pressure × Mole Fraction (pA = pA° · xA)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Each Liquid Pays Its Own Vapor Share: pA = pA° xA | Total P = pA + pB!",
    "memoryHook": "For a binary solution of volatile liquids A and B: Partial pressure pA = pA° · xA and pB = pB° · xB. Total vapor pressure: P_total = pA + pB = pA° xA + pB° xB = pB° + (pA° - pB°) xA! In vapor phase (Dalton’s Law): yA = pA / P_total and yB = pB / P_total!",
    "fact": "Raoult’s Law for Volatile Liquid Solutions: 1. In Liquid Phase: For each volatile component, the partial vapor pressure is directly proportional to its mole fraction in the solution: pA = pA° xA and pB = pB° xB (where pA° and pB° are vapor pressures of pure components at that temperature). 2. Total Pressure: P_total = pA° xA + pB° xB = pA° xA + pB°(1 - xA). 3. In Vapor Phase: Composition is governed by Dalton’s law of partial pressures: yA = pA / P_total and yB = pB / P_total. The vapor phase is always richer in the MORE VOLATILE component (higher p°).",
    "breakdown": [
      {
        "key": "Liquid Phase (xA, xB)",
        "label": "pA = pA° xA and pB = pB° xB"
      },
      {
        "key": "Total Pressure",
        "label": "P_total = pA° xA + pB° xB"
      },
      {
        "key": "Vapor Phase (yA, yB)",
        "label": "yA = pA / P_total = (pA° xA) / P_total (Dalton’s Law)"
      }
    ],
    "doodleBadge": "pA = pA° xA\nP_total = pA + pB\nVapor: yA = pA / P_total",
    "doodleSubtext": "Raoult's & Dalton's Laws",
    "explanation": "The difference in composition between liquid (x) and vapor (y) forms the physical foundation for fractional distillation: vaporizing and condensing repeatedly enriches the distillate in the more volatile component.",
    "alsoRemember": "Henry’s law is a special case of Raoult’s law where KH replaces p° for sparingly soluble gases.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.3.",
    "neetTrap": "xA and xB are mole fractions in the LIQUID phase, while yA and yB are mole fractions in the VAPOR phase! Do not mix up x and y.",
    "tags": [
      "Raoult's Law",
      "Vapor Pressure",
      "Dalton's Law",
      "Volatile Liquids"
    ],
    "quiz": {
      "question": "For an ideal binary solution of liquids A and B with pA° = 100 mm Hg and pB° = 200 mm Hg, what is the total vapor pressure when xA = 0.4?",
      "options": [
        "120 mm Hg",
        "140 mm Hg",
        "160 mm Hg",
        "180 mm Hg"
      ],
      "answerIndex": 2,
      "explanation": "xB = 1 - 0.4 = 0.6. P_total = pA° xA + pB° xB = (100 × 0.4) + (200 × 0.6) = 40 + 120 = 160 mm Hg."
    }
  },
  {
    "id": "chem-ch10-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Ideal Solutions Characteristics & Classic Examples",
    "mnemonicNumber": 4,
    "title": "Ideal Solutions: Zero Heat (ΔH_mix = 0) + Zero Size Change (ΔV_mix = 0)!",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Like Blends with Identical Like! Benzene + Toluene; Hexane + Heptane; Bromo + Chloroethane!",
    "memoryHook": "In an Ideal Solution, A-B attractions are IDENTICAL to A-A and B-B attractions! 1) Obeys Raoult’s law at all concentrations! 2) ΔH_mix = 0 (no heat evolved or absorbed)! 3) ΔV_mix = 0 (50 mL + 50 mL = exactly 100 mL)! 4) ΔS_mix > 0 (mixing always increases entropy)! 5) ΔG_mix < 0 (spontaneous mixing)!",
    "fact": "Ideal Solutions: 1. Definition: Solutions that obey Raoult’s law over the entire range of concentration and temperature. 2. Thermodynamic Criteria: ΔH_mixing = 0, ΔV_mixing = 0, ΔS_mixing > 0 (always positive), ΔG_mixing < 0 (always negative). 3. Molecular Basis: Intermolecular attractive forces between A-B are identical in strength to A-A and B-B interactions. Components have nearly identical molecular sizes and polarities. 4. Classic Textbook Examples: (a) Benzene + Toluene, (b) n-Hexane + n-Heptane, (c) Bromoethane + Chloroethane, (d) Chlorobenzene + Bromobenzene, (e) CCl4 + SiCl4.",
    "breakdown": [
      {
        "key": "Thermodynamics",
        "label": "ΔH_mix = 0, ΔV_mix = 0, ΔS_mix > 0, ΔG_mix < 0"
      },
      {
        "key": "Interactions",
        "label": "F(A-B) = F(A-A) = F(B-B)"
      },
      {
        "key": "Classic Examples",
        "label": "Benzene + Toluene; n-Hexane + n-Heptane; C2H5Br + C2H5Cl"
      }
    ],
    "doodleBadge": "Ideal: ΔH_mix = 0 & ΔV_mix = 0\nBenzene + Toluene\nHexane + Heptane",
    "doodleSubtext": "Ideal Solution Criteria",
    "explanation": "Because both components look and feel identical to each other, molecules swap places without any energetic friction or volume distortion.",
    "alsoRemember": "Ideal solutions can be completely separated into pure components by fractional distillation because they do NOT form azeotropes.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.4.1.",
    "neetTrap": "For an ideal solution, ΔS_mixing is POSITIVE (not zero!), and ΔG_mixing is NEGATIVE (not zero!), because mixing independent molecules is always spontaneous and increases entropy!",
    "tags": [
      "Ideal Solution",
      "Raoult Law",
      "Benzene Toluene",
      "Thermodynamics"
    ],
    "quiz": {
      "question": "Which of the following pairs of liquids forms an ideal solution?",
      "options": [
        "Ethanol + Acetone",
        "Chloroform + Acetone",
        "Benzene + Toluene",
        "Phenol + Aniline"
      ],
      "answerIndex": 2,
      "explanation": "Benzene and toluene have very similar structures, polarities, and intermolecular forces, forming a nearly ideal solution that obeys Raoult’s law."
    }
  },
  {
    "id": "chem-ch10-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Positive Deviation from Raoult’s Law & Minimum Boiling Azeotropes",
    "mnemonicNumber": 5,
    "title": "Positive Deviation: A-B Hates Each Other → High Vapor Pressure & Minimum Boiling Azeotrope!",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Weak A-B Hugs = Molecules Escape Easily (P_obs > P_ideal)! Endothermic (ΔH > 0) + Expands (ΔV > 0)!",
    "memoryHook": "When A-B attractions are WEAKER than A-A and B-B: Molecules easily fly into the vapor phase, so Vapor Pressure shoots ABOVE Raoult’s law! ΔH_mix > 0 (Endothermic, absorbs heat, feels cold)! ΔV_mix > 0 (Volume expands)! Boiling point drops → Forms a MINIMUM BOILING AZEOTROPE! Classic: Ethanol + Acetone; Ethanol + Water; CS2 + Acetone; CCl4 + Benzene!",
    "fact": "Non-Ideal Solutions with Positive Deviation: 1. Intermolecular Forces: A-B attraction < A-A and B-B attractions. Example: In pure ethanol, molecules are tightly bound by hydrogen bonds. Adding acetone breaks up ethanol hydrogen bonds; the new acetone-ethanol interactions are weak dipole-dipole forces. 2. Thermodynamic Signatures: P_observed > P_calculated (positive deviation). ΔH_mixing > 0 (endothermic dissolution). ΔV_mixing > 0 (volume expansion). 3. Azeotrope: Forms MINIMUM BOILING AZEOTROPE at a specific composition (e.g. 95.4% ethanol + 4.6% water boils at 78.15°C, lower than pure ethanol at 78.3°C and pure water at 100°C). 4. Examples: Ethanol + Acetone, Ethanol + Water, CS2 + Acetone, CCl4 + Benzene, CCl4 + Toluene, Acetone + Benzene.",
    "breakdown": [
      {
        "key": "A-B Interaction",
        "label": "Weaker than pure components → Higher tendency to escape into vapor"
      },
      {
        "key": "Thermodynamics",
        "label": "P_obs > P_Raoult; ΔH_mix > 0 (+); ΔV_mix > 0 (+)"
      },
      {
        "key": "Azeotrope Type",
        "label": "MINIMUM BOILING AZEOTROPE (Boils lower than both components)"
      },
      {
        "key": "Top Examples",
        "label": "Ethanol + Acetone; Ethanol + Water; CS2 + Acetone"
      }
    ],
    "doodleBadge": "Positive Deviation:\nA-B Weaker → P_obs > P_ideal\nΔH > 0 & ΔV > 0\nMin Boiling Azeotrope",
    "doodleSubtext": "Weak Attraction Deviation",
    "explanation": "Disrupting the tight hydrogen-bonded network of pure ethanol by inserting acetone molecules allows both species to evaporate with higher vapor pressures.",
    "alsoRemember": "Rectified spirit (95.4% ethanol by mass) is a minimum boiling azeotrope and cannot be concentrated further to 100% absolute alcohol by simple fractional distillation.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.4.2.",
    "neetTrap": "Positive deviation leads to a MINIMUM boiling azeotrope (high vapor pressure means low boiling point)! Do not pair positive deviation with maximum boiling.",
    "tags": [
      "Positive Deviation",
      "Minimum Boiling Azeotrope",
      "Ethanol Acetone",
      "Raoult Law"
    ],
    "quiz": {
      "question": "A mixture of ethanol and acetone exhibits positive deviation from Raoult’s law because:",
      "options": [
        "Acetone forms strong hydrogen bonds with ethanol",
        "Acetone molecules disrupt the hydrogen bonding between ethanol molecules, weakening net intermolecular attractions",
        "The solution cools down freezing the mixture",
        "Density of the mixture increases"
      ],
      "answerIndex": 1,
      "explanation": "Acetone slips between ethanol molecules, breaking ethanol-ethanol hydrogen bonds; the resulting weaker A-B interactions increase vapor pressure (positive deviation)."
    }
  },
  {
    "id": "chem-ch10-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Negative Deviation from Raoult’s Law & Maximum Boiling Azeotropes",
    "mnemonicNumber": 6,
    "title": "Negative Deviation: A-B Hugs Tighter (H-Bond Formed) → Low Vapor Pressure & Maximum Boiling Azeotrope!",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Chloroform + Acetone Build a Brand-New H-Bond! Vapor Drops (P_obs < P_ideal), Exothermic (ΔH < 0)!",
    "memoryHook": "When A-B attractions are STRONGER than A-A and B-B: Molecules hold onto each other tightly and refuse to evaporate, so Vapor Pressure PLUMMETS below Raoult’s law! ΔH_mix < 0 (Exothermic, releases heat, feels warm)! ΔV_mix < 0 (Volume contracts)! Boiling point climbs → Forms a MAXIMUM BOILING AZEOTROPE! Classic: Chloroform + Acetone; Phenol + Aniline; HNO3 + Water; HCl + Water!",
    "fact": "Non-Ideal Solutions with Negative Deviation: 1. Intermolecular Forces: A-B attraction > A-A and B-B attractions. Example: Chloroform (CHCl3) and Acetone (CH3COCH3) cannot form H-bonds with themselves, but when mixed, the acidic hydrogen of chloroform forms a strong NEW hydrogen bond with the carbonyl oxygen of acetone: Cl3C-H···O=C(CH3)2. 2. Thermodynamic Signatures: P_observed < P_calculated (negative deviation). ΔH_mixing < 0 (exothermic mixing, releases heat). ΔV_mixing < 0 (volume contraction). 3. Azeotrope: Forms MAXIMUM BOILING AZEOTROPE at a specific composition (e.g. 68% HNO3 + 32% water boils at 120.5°C, higher than pure water at 100°C and pure HNO3 at 83°C). 4. Examples: Chloroform + Acetone, Phenol + Aniline, HNO3 + H2O, HCl + H2O, Acetic acid + Pyridine.",
    "breakdown": [
      {
        "key": "A-B Interaction",
        "label": "Stronger than pure components (New H-bond formed between Chloroform & Acetone)"
      },
      {
        "key": "Thermodynamics",
        "label": "P_obs < P_Raoult; ΔH_mix < 0 (-); ΔV_mix < 0 (-)"
      },
      {
        "key": "Azeotrope Type",
        "label": "MAXIMUM BOILING AZEOTROPE (Boils higher than both components)"
      },
      {
        "key": "Top Examples",
        "label": "Chloroform + Acetone; Phenol + Aniline; 68% HNO3 + H2O"
      }
    ],
    "doodleBadge": "Negative Deviation:\nA-B Stronger (H-bond formed)\nP_obs < P_ideal | ΔH < 0 & ΔV < 0\nMax Boiling Azeotrope",
    "doodleSubtext": "Strong Attraction Deviation",
    "explanation": "The new hydrogen bond Cl3C-H···O=C anchors both molecules into the liquid phase, drastically lowering the escaping tendency into vapor.",
    "alsoRemember": "Mixing chloroform and acetone releases measurable heat, warming the test tube.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.4.2.",
    "neetTrap": "Negative deviation leads to a MAXIMUM boiling azeotrope (low vapor pressure means high boiling point)!",
    "tags": [
      "Negative Deviation",
      "Maximum Boiling Azeotrope",
      "Chloroform Acetone",
      "Hydrogen Bonding"
    ],
    "quiz": {
      "question": "Which of the following binary mixtures exhibits a negative deviation from Raoult’s law?",
      "options": [
        "Ethanol + Acetone",
        "Benzene + Toluene",
        "Chloroform + Acetone",
        "n-Hexane + n-Heptane"
      ],
      "answerIndex": 2,
      "explanation": "Chloroform and acetone form a new intermolecular hydrogen bond between the chloroform hydrogen and acetone carbonyl oxygen, creating stronger A-B interactions and negative deviation."
    }
  },
  {
    "id": "chem-ch10-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-07",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Relative Lowering of Vapor Pressure (RLVP)",
    "mnemonicNumber": 7,
    "title": "RLVP: (P° - P) / P° = Mole Fraction of Solute (x_solute)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Drop in Vapor Pressure Divided by Pure P° = Solute Mole Fraction x2!",
    "memoryHook": "Adding a non-volatile solid solute (sugar, urea, glucose) blocks surface spots, lowering vapor pressure: Lowering = P° - P. Relative Lowering = (P° - P) / P° = x2 = n2 / (n1 + n2). For dilute solutions: (P° - P) / P° ≈ n2 / n1 = (w2 / M2) × (M1 / w1)!",
    "fact": "Relative Lowering of Vapor Pressure (RLVP): 1. Physical Cause: Non-volatile solute particles occupy part of the liquid surface area, reducing the fraction of surface occupied by solvent molecules, thereby decreasing evaporation rate. 2. Colligative Law: The relative lowering of vapor pressure of a dilute solution containing a non-volatile solute is equal to the mole fraction of the solute: (P° - P) / P° = x2 = n2 / (n1 + n2). 3. Molecular Mass Determination: (P° - P) / P° = (w2 / M2) / [(w1 / M1) + (w2 / M2)] ≈ (w2 · M1) / (M2 · w1). 4. Measurement: Ostwald-Walker dynamic gas saturation method (dry air passed through solution bulbs, then solvent bulbs, then anhydrous CaCl2 guard tubes).",
    "breakdown": [
      {
        "key": "Vapor Pressure Lowering",
        "label": "ΔP = P° - P (NOT a colligative property by itself)"
      },
      {
        "key": "Relative Lowering (RLVP)",
        "label": "(P° - P) / P° = x_solute (IS a true colligative property)"
      },
      {
        "key": "Exact Formula",
        "label": "(P° - P) / P = n2 / n1 = (w2/M2) × (M1/w1) (notice denominator is solution P!)"
      }
    ],
    "doodleBadge": "(P° - P) / P° = x_solute\nRLVP = Colligative Property\nOstwald-Walker Method",
    "doodleSubtext": "Vapor Pressure Lowering",
    "explanation": "RLVP depends exclusively on the number of solute particles relative to total particles, regardless of solute chemical identity.",
    "alsoRemember": "Lowering of vapor pressure (ΔP = P° - P) depends on the nature of solvent P°, but RELATIVE lowering ((P° - P)/P°) depends ONLY on the mole fraction of solute.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.1.",
    "neetTrap": "Vapor pressure lowering (P° - P) is NOT a colligative property; RELATIVE lowering ((P° - P)/P°) IS a colligative property!",
    "tags": [
      "RLVP",
      "Colligative Property",
      "Vapor Pressure",
      "Mole Fraction"
    ],
    "quiz": {
      "question": "Which of the following is a true colligative property?",
      "options": [
        "Vapor pressure of solution",
        "Lowering of vapor pressure (P° - P)",
        "Relative lowering of vapor pressure (P° - P)/P°",
        "Boiling point of solution"
      ],
      "answerIndex": 2,
      "explanation": "Relative lowering of vapor pressure depends solely on the mole fraction of solute particles, making it a true colligative property."
    }
  },
  {
    "id": "chem-ch10-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Elevation of Boiling Point (ΔTb = i · Kb · m)",
    "mnemonicNumber": 8,
    "title": "Elevation of Boiling Point: ΔTb = i · Kb · m (Kb is Ebullioscopic Constant, Water Kb = 0.52)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Boiling Point Goes UP: ΔTb = Tb(solution) - Tb°(pure) = i · Kb · m!",
    "memoryHook": "Non-volatile solute lowers vapor pressure, so you must heat the solution to a HIGHER temperature to make vapor pressure reach 1 atm: ΔTb = Tb - Tb° = i · Kb · m. Kb is the molal boiling point elevation constant (depends ONLY on solvent! For water, Kb = 0.52 K·kg/mol)!",
    "fact": "Elevation of Boiling Point: 1. Definition: Boiling point is the temperature at which vapor pressure of liquid equals atmospheric pressure (1 atm). Since solute lowers vapor pressure, solution must be heated to a higher temperature: ΔTb = Tb - Tb°. 2. Formula: ΔTb = i · Kb · m = i · Kb · (1000 · w2) / (M2 · w1). 3. Ebullioscopic Constant (Kb): Elevation in boiling point when 1 mole of non-volatile solute is dissolved in 1 kg of solvent (m = 1 mol/kg). Units: K·kg/mol or °C/m. 4. Thermodynamic relation for Kb: Kb = (R · Tb°² · M1) / (1000 · ΔH_vap), where M1 is molar mass of solvent in g/mol and ΔH_vap is molar enthalpy of vaporization.",
    "breakdown": [
      {
        "key": "Elevation Formula",
        "label": "ΔTb = Tb - Tb° = i · Kb · m"
      },
      {
        "key": "Kb of Water",
        "label": "0.52 K·kg/mol"
      },
      {
        "key": "Solute Molecular Weight",
        "label": "M2 = (i · Kb · w2 · 1000) / (ΔTb · w1)"
      },
      {
        "key": "Kb Units",
        "label": "K·kg/mol (depends ONLY on solvent, independent of solute)"
      }
    ],
    "doodleBadge": "ΔTb = i · Kb · m\nWater Kb = 0.52 K·kg/mol\nBoiling Point Elevates!",
    "doodleSubtext": "Ebullioscopy Formula",
    "explanation": "Kb depends purely on properties of the solvent (boiling point, molar mass, heat of vaporization) and has zero dependence on solute identity.",
    "alsoRemember": "Adding salt to cooking water elevates its boiling point slightly, cooking food at a higher temperature.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.2.",
    "neetTrap": "ΔTb is the ELEVATION (Tb - Tb°). If the question asks for the BOILING POINT of the solution, add ΔTb to the pure solvent boiling point: Tb = Tb° + ΔTb (e.g. 100°C + ΔTb)!",
    "tags": [
      "Boiling Point Elevation",
      "Ebullioscopic Constant",
      "Kb of Water",
      "Colligative Property"
    ],
    "quiz": {
      "question": "What are the SI units of the molal boiling point elevation constant (Kb)?",
      "options": [
        "K·mol/kg",
        "K·kg/mol",
        "kg/mol",
        "mol/kg·K"
      ],
      "answerIndex": 1,
      "explanation": "From ΔTb = Kb · m, Kb = ΔTb / m = Kelvin / (mol/kg) = K·kg/mol."
    }
  },
  {
    "id": "chem-ch10-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Depression of Freezing Point (ΔTf = i · Kf · m)",
    "mnemonicNumber": 9,
    "title": "Freezing Point Depression: ΔTf = i · Kf · m (Kf of Water = 1.86; Antifreeze & Road Salting!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Freezing Point Drops DOWN: ΔTf = Tf°(pure) - Tf(solution) = i · Kf · m!",
    "memoryHook": "Freezing point drops because solid and liquid must share the same vapor pressure: ΔTf = Tf° - Tf = i · Kf · m. Notice: Pure solvent Tf° comes FIRST (ΔTf = 0°C - Tf)! Water Kf = 1.86 K·kg/mol (much bigger than Kb=0.52)! Road salt (NaCl or CaCl2) melts snow by dropping freezing point; Ethylene glycol acts as antifreeze in car radiators!",
    "fact": "Depression of Freezing Point: 1. Definition: Freezing point is the temperature at which the vapor pressure of the liquid solvent equals the vapor pressure of the solid solvent. ΔTf = Tf° - Tf. 2. Formula: ΔTf = i · Kf · m = i · Kf · (1000 · w2) / (M2 · w1). 3. Cryoscopic Constant (Kf): Depression in freezing point produced when 1 mole of solute is dissolved in 1 kg of solvent. For water: Kf = 1.86 K·kg/mol. 4. Thermodynamic relation for Kf: Kf = (R · Tf°² · M1) / (1000 · ΔH_fus). Because ΔH_fus < ΔH_vap, Kf is always larger than Kb for a given solvent.",
    "breakdown": [
      {
        "key": "Depression Formula",
        "label": "ΔTf = Tf° - Tf = i · Kf · m"
      },
      {
        "key": "Water Kf",
        "label": "1.86 K·kg/mol (nearly 3.6 times larger than Kb = 0.52)"
      },
      {
        "key": "Camphor Exception",
        "label": "Camphor has an extraordinarily huge Kf = 39.7 K·kg/mol (Rast’s camphor method for molar mass)"
      },
      {
        "key": "De-Icing Roads",
        "label": "CaCl2 is superior to NaCl because CaCl2 gives 3 ions (i=3) while NaCl gives 2 ions (i=2)"
      }
    ],
    "doodleBadge": "ΔTf = i · Kf · m\nWater Kf = 1.86 K·kg/mol\nPure Tf° - Solution Tf",
    "doodleSubtext": "Cryoscopy Formula",
    "explanation": "Kf is always larger than Kb for any solvent because the heat of fusion (ΔH_fus) is always much smaller than the heat of vaporization (ΔH_vap).",
    "alsoRemember": "Freezing point of a solution is negative: if ΔTf = 3.72°C in water, the freezing point of the solution is -3.72°C.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.3.",
    "neetTrap": "In ΔTf, it is Pure MINUS Solution (Tf° - Tf). If solution freezes at -2°C, ΔTf is +2°C (a positive depression value)!",
    "tags": [
      "Freezing Point Depression",
      "Cryoscopic Constant",
      "Kf of Water",
      "Antifreeze"
    ],
    "quiz": {
      "question": "Why is calcium chloride (CaCl2) more effective than sodium chloride (NaCl) in melting ice on snowy roads at equal molar concentrations?",
      "options": [
        "CaCl2 is less corrosive",
        "CaCl2 dissociates into 3 ions (i ≈ 3) producing a greater freezing point depression than NaCl (i ≈ 2)",
        "CaCl2 has lower molar mass",
        "CaCl2 reacts with ice chemically"
      ],
      "answerIndex": 1,
      "explanation": "CaCl2 produces 3 moles of ions per mole of salt (i = 3), depressing the freezing point 1.5 times more than NaCl (i = 2) at the same molality."
    }
  },
  {
    "id": "chem-ch10-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Osmotic Pressure (π = i · CRT) & Biomolecule Mass King",
    "mnemonicNumber": 10,
    "title": "Osmotic Pressure: π = i · C · R · T (Supreme Choice for Proteins & Polymers!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Pi = CRT! Measured at Room Temperature with Measurable Big Numbers for Giant Polymers!",
    "memoryHook": "Formula: π = i · C · R · T = i · (n / V) · R · T. Why Osmotic Pressure is the King for measuring molar mass of proteins, DNA, and polymers: 1) Measured at room temperature (prevents protein heat denaturation)! 2) Uses Molarity (C = n/V). 3) Magnitude of π is huge and easily readable even for 10⁻⁴ M giant macromolecules!",
    "fact": "Osmotic Pressure (π): 1. Definition: The exact excess hydrostatic pressure that must be applied to the solution side across a semi-permeable membrane (SPM) to completely prevent the inward osmosis of pure solvent: π = i · CRT = i (w2 · R · T) / (M2 · V). 2. Why Preferred for Biomolecules / Polymers: (a) Measured at comfortable room temperature (polymers and proteins denature/decompose at boiling points required by ΔTb). (b) Uses molarity rather than molality. (c) At very low concentrations (~10⁻⁴ M), ΔTb and ΔTf are microscopic (~0.0001°C, undetectable on standard thermometers), but π is several millimeters of liquid height (~20-50 mm Hg), easily measured with high precision.",
    "breakdown": [
      {
        "key": "Formula",
        "label": "π = i · CRT = i · (w2 · R · T) / (M2 · V)"
      },
      {
        "key": "Gas Constant R",
        "label": "0.0821 L·atm/(mol·K) when π is in atm and V is in Liters"
      },
      {
        "key": "Biomolecule King",
        "label": "Proteins, polymers, enzymes measured solely via osmotic pressure"
      }
    ],
    "doodleBadge": "π = i · CRT\nKing for Polymers & Proteins\nRoom Temp Measurement",
    "doodleSubtext": "Osmometry Benchmark",
    "explanation": "Osmosis is the spontaneous net flow of solvent molecules from a region of low solute concentration (pure solvent) to high solute concentration through a semi-permeable membrane.",
    "alsoRemember": "Berkeley and Hartley method is the fastest and most accurate experimental method for measuring osmotic pressure because it applies external pressure to prevent osmosis, keeping concentration constant.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.4.",
    "neetTrap": "Remember to convert temperature to KELVIN (K) and volume to LITERS (L) when using R = 0.0821 L·atm/(mol·K) in π = CRT!",
    "tags": [
      "Osmotic Pressure",
      "π = CRT",
      "Biomolecules",
      "Molar Mass"
    ],
    "quiz": {
      "question": "Which colligative property is most suitable for determining the molar mass of proteins and polymers?",
      "options": [
        "Relative lowering of vapor pressure",
        "Elevation of boiling point",
        "Depression of freezing point",
        "Osmotic pressure"
      ],
      "answerIndex": 3,
      "explanation": "Osmotic pressure produces measurable readings at room temperature, which prevents thermal denaturation of delicate proteins and polymers."
    }
  },
  {
    "id": "chem-ch10-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Isotonic, Hypertonic, Hypotonic & RBC Behavior",
    "mnemonicNumber": 11,
    "title": "Cell Tonicity: 0.9% NaCl is Safe (Isotonic); Hypertonic Shrinks; Hypotonic Bursts!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "0.9% Saline is Normal! Hyper (Salty) Sucks Water Out (Shrinks)! Hypo (Pure) Floods In (Bursts)!",
    "memoryHook": "Human blood red blood cells (RBCs) are ISOTONIC with 0.9% (w/v) NaCl solution (normal saline). 1) If placed in >0.9% NaCl (Hypertonic): Water leaves cell → RBC shrivels and shrinks (Plasmolysis / Crenation)! 2) If placed in <0.9% NaCl or pure water (Hypotonic): Water rushes into cell → RBC swells and bursts (Hemolysis)!",
    "fact": "Tonicity of Solutions: 1. Isotonic Solutions: Two solutions having identical osmotic pressures at the same temperature (π1 = π2). No net osmosis occurs across a semi-permeable membrane. C1 = C2 (for non-electrolytes). 2. Hypertonic Solution: Higher osmotic pressure than cell interior. Placing cells in hypertonic medium causes water to flow OUT via exosmosis → Cell shrinks (Crenation / Plasmolysis). Used in pickling (salting preserves food by shrinking bacteria). 3. Hypotonic Solution: Lower osmotic pressure than cell interior. Placing cells in hypotonic medium causes water to rush IN via endosmosis → Cell swells and bursts (Hemolysis). Intravenous saline injections MUST be strictly isotonic (0.9% NaCl) to prevent killing patients.",
    "breakdown": [
      {
        "key": "Isotonic (π1 = π2)",
        "label": "0.9% (w/v) NaCl = Safe IV saline, zero net water flow"
      },
      {
        "key": "Hypertonic (π > cell)",
        "label": "Exosmosis: Water flows OUT → Cell shrinks / shrivels"
      },
      {
        "key": "Hypotonic (π < cell)",
        "label": "Endosmosis: Water flows IN → Cell swells and bursts (hemolysis)"
      }
    ],
    "doodleBadge": "0.9% NaCl = Isotonic\nHypertonic → Shrinks (Crenation)\nHypotonic → Swells & Bursts",
    "doodleSubtext": "RBC Tonicity Rules",
    "explanation": "Water always diffuses down its own chemical potential gradient from higher water concentration (low solute) to lower water concentration (high solute).",
    "alsoRemember": "Edema (swelling of tissues) in people who eat excessive salt is caused by water retention driven by hypertonic intercellular fluids.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.4.",
    "neetTrap": "If RBC is placed in pure distilled water, it does NOT just expand; it BURSTS (hemolyzes) due to immense inward osmotic pressure!",
    "tags": [
      "Isotonic",
      "Hypertonic",
      "Hypotonic",
      "Red Blood Cells"
    ],
    "quiz": {
      "question": "What happens to human red blood cells when placed in a 1.5% (w/v) aqueous NaCl solution?",
      "options": [
        "They swell and burst",
        "They maintain their normal shape",
        "They shrink due to water loss by exosmosis",
        "They dissolve completely"
      ],
      "answerIndex": 2,
      "explanation": "Since 1.5% NaCl is hypertonic relative to the RBC interior (0.9% NaCl), water flows out of the cell into the hypertonic solution, causing the cell to shrink (crenate)."
    }
  },
  {
    "id": "chem-ch10-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Reverse Osmosis (RO) & Desalination of Seawater",
    "mnemonicNumber": 12,
    "title": "Reverse Osmosis: Apply Pressure P > π on Saltwater → Pure Water Squeezes Out!",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Push Harder Than Osmotic Pressure (P_ext > π): Reverses Nature’s Flow to Make Drinking Water!",
    "memoryHook": "In natural osmosis, pure water flows INTO saltwater. But if you apply external mechanical pressure GREATER than osmotic pressure (P_ext > π) on the saltwater side, the flow REVERSES: Pure water molecules are squeezed OUT through the semi-permeable membrane into the freshwater chamber! SPM used is Cellulose Acetate!",
    "fact": "Reverse Osmosis (RO): 1. Principle: If an external pressure greater than the osmotic pressure is applied to the concentrated solution side (P_applied > π), the direction of osmosis is reversed: solvent flows from the solution into the pure solvent through the semi-permeable membrane. 2. Membrane: Cellulose acetate film supported on an inert porous backing. It allows tiny water molecules to pass while rejecting hydrated salt ions (Na⁺, Cl⁻) and bacteria. 3. Practical Use: Desalination of seawater for municipal drinking water in desert countries and domestic household RO water purifiers.",
    "breakdown": [
      {
        "key": "Condition",
        "label": "External Applied Pressure P > Osmotic Pressure π"
      },
      {
        "key": "Flow Direction",
        "label": "From concentrated saltwater → Into pure fresh water"
      },
      {
        "key": "SPM Material",
        "label": "Cellulose acetate polymer film"
      }
    ],
    "doodleBadge": "P_applied > π → Reverse Osmosis\nSaltwater → Pure Drinking Water\nSPM = Cellulose Acetate",
    "doodleSubtext": "Desalination of Seawater",
    "explanation": "Applying pressure raises the chemical potential of water in the saline solution above that of pure water, reversing the natural thermodynamic flux.",
    "alsoRemember": "Industrial desalination plants operate at massive pressures of 40 to 70 atmospheres to overcome seawater osmotic pressure (~27 atm).",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.5.",
    "neetTrap": "The semi-permeable membrane used in commercial reverse osmosis is CELLULOSE ACETATE, not parchment paper or copper ferrocyanide.",
    "tags": [
      "Reverse Osmosis",
      "Desalination",
      "Cellulose Acetate",
      "RO Water"
    ],
    "quiz": {
      "question": "Which polymer is commonly employed as the semi-permeable membrane in the reverse osmosis desalination of seawater?",
      "options": [
        "Nylon-6,6",
        "Cellulose acetate",
        "Bakelite",
        "Polyvinyl chloride (PVC)"
      ],
      "answerIndex": 1,
      "explanation": "Cellulose acetate is permeable to water molecules while completely impermeable to dissolved salt ions and organic impurities, making it the standard membrane for RO desalination."
    }
  },
  {
    "id": "chem-ch10-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-3",
    "topicTitle": "Van 't Hoff Factor (i) Definition & Formulas",
    "mnemonicNumber": 13,
    "title": "Van 't Hoff Factor: i = Observed Colligative / Calculated Colligative = Normal Mass / Observed Mass!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "i = Real Particles / Expected Particles = Normal Molar Mass / Abnormal Observed Mass!",
    "memoryHook": "Formula: i = (Total moles of particles after dissociation/association) / (Initial moles of solute) = (Observed Colligative Property) / (Calculated Colligative Property) = Normal Molar Mass / Observed Molar Mass! Notice Molar Mass is INVERTED because Colligative Property ∝ 1 / Molar Mass!",
    "fact": "Van ’t Hoff Factor (i): 1. Definition: Modifies colligative property formulas to account for dissociation (breaking into ions) or association (clustering into dimers). 2. Three equivalent definitions: (a) i = (Observed Colligative Property) / (Calculated Colligative Property). (b) i = (Normal / Theoretical Molar Mass) / (Abnormal / Observed Molar Mass). (c) i = (Total moles of particles after association or dissociation) / (Moles of solute dissolved). 3. Values: For non-electrolytes (glucose, urea, sucrose): i = 1. For dissociation (electrolytes): i > 1. For association (dimers): i < 1.",
    "breakdown": [
      {
        "key": "i = 1",
        "label": "Non-electrolytes (Glucose, Urea, Sucrose, Glycerol)"
      },
      {
        "key": "i > 1",
        "label": "Dissociation into ions (NaCl has i ≈ 2; BaCl2 has i ≈ 3)"
      },
      {
        "key": "i < 1",
        "label": "Association into dimers (Benzoic acid in benzene has i ≈ 0.5)"
      },
      {
        "key": "Mass Inversion",
        "label": "i = M_theoretical / M_observed (Always put theoretical on top!)"
      }
    ],
    "doodleBadge": "i = Obs Coll / Calc Coll\ni = M_normal / M_observed\nNon-electrolyte: i = 1",
    "doodleSubtext": "Van 't Hoff Factor Benchmark",
    "explanation": "Because colligative properties depend inversely on molecular weight, when a molecule splits in two (doubling particle count), the apparent molecular weight drops in half.",
    "alsoRemember": "All four colligative property formulas must include factor i: RLVP = i·x2; ΔTb = i·Kb·m; ΔTf = i·Kf·m; π = i·CRT.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.7.",
    "neetTrap": "For molecular weights, i = Normal / Observed. Do NOT put Observed over Normal for masses!",
    "tags": [
      "Van t Hoff Factor",
      "i Factor",
      "Abnormal Molar Mass",
      "Colligative Property"
    ],
    "quiz": {
      "question": "Which of the following represents the correct definition of the Van ’t Hoff factor (i) in terms of molar masses?",
      "options": [
        "Observed molar mass / Normal molar mass",
        "Normal (theoretical) molar mass / Observed molar mass",
        "Normal molar mass × Observed molar mass",
        "(Normal molar mass - Observed molar mass) / Normal molar mass"
      ],
      "answerIndex": 1,
      "explanation": "Since colligative properties are inversely proportional to molar mass, i = Normal (theoretical) molar mass / Observed molar mass."
    }
  },
  {
    "id": "chem-ch10-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-3",
    "topicTitle": "Van 't Hoff Factor for Dissociation (i = 1 + (n - 1)α)",
    "mnemonicNumber": 14,
    "title": "Dissociation Formula: i = 1 + (n - 1)α (n = Total Ions Split; 100% Split gives i = n)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Alpha Degree of Dissociation: α = (i - 1) / (n - 1)! For 100% Split (α = 1), i = n Exactly!",
    "memoryHook": "Formula: i = 1 + (n - 1)α. Where n is the total number of ions produced by ONE formula unit: NaCl (n = 2: 1 Na⁺ + 1 Cl⁻); CaCl2 or Na2SO4 (n = 3); FeCl3 or K3[Fe(CN)6] (n = 4); K4[Fe(CN)6] (n = 5: 4 K⁺ + 1 [Fe(CN)6]⁴⁻)! If 100% ionized (α = 1): i = n!",
    "fact": "Dissociation of Electrolytes: 1. Equation: An ⇌ n A. Initial moles: 1. Equilibrium moles: (1 - α) + nα = 1 + (n - 1)α. 2. Van ’t Hoff Factor: i = 1 + (n - 1)α. 3. Degree of Dissociation: α = (i - 1) / (n - 1). 4. For Strong Electrolytes (100% dissociation, α = 1): (a) NaCl: n = 2 → i = 2. (b) BaCl2, Na2SO4, K2SO4: n = 3 → i = 3. (c) AlCl3, K3[Fe(CN)6]: n = 4 → i = 4. (d) K4[Fe(CN)6]: n = 5 → i = 5.",
    "breakdown": [
      {
        "key": "General Formula",
        "label": "i = 1 + (n - 1)α"
      },
      {
        "key": "Degree of Dissociation",
        "label": "α = (i - 1) / (n - 1)"
      },
      {
        "key": "K4[Fe(CN)6] (n = 5)",
        "label": "4 K⁺ + 1 complex anion [Fe(CN)6]⁴⁻ = 5 ions → i = 5 at 100% dissociation"
      }
    ],
    "doodleBadge": "i = 1 + (n - 1)α\nα = (i - 1) / (n - 1)\nK4[Fe(CN)6]: n = 5",
    "doodleSubtext": "Dissociation Multiplier",
    "explanation": "Coordination complexes do not release coordinated ligands: K4[Fe(CN)6] releases 4 potassium ions and 1 intact coordination sphere complex ion, totaling 5 ions.",
    "alsoRemember": "For weak electrolyte CH3COOH with degree of dissociation α: i = 1 + α (since n = 2).",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.7.",
    "neetTrap": "In K4[Fe(CN)6], the cyanide ions (CN⁻) do NOT dissociate in solution! Total ions = 4 K⁺ + 1 complex ion = 5 ions (n = 5), NOT 11!",
    "tags": [
      "Dissociation",
      "Van t Hoff Factor",
      "Degree of Dissociation",
      "Coordination Complex"
    ],
    "quiz": {
      "question": "What is the theoretical Van ’t Hoff factor (i) for potassium ferrocyanide, K4[Fe(CN)6], assuming complete (100%) dissociation in water?",
      "options": [
        "2",
        "4",
        "5",
        "11"
      ],
      "answerIndex": 2,
      "explanation": "K4[Fe(CN)6] completely dissociates into 4 K⁺ ions and 1 [Fe(CN)6]⁴⁻ complex ion, producing 4 + 1 = 5 ions per formula unit (n = 5, i = 5)."
    }
  },
  {
    "id": "chem-ch10-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-3",
    "topicTitle": "Van 't Hoff Factor for Association (i = 1 - α/2 for Dimers)",
    "mnemonicNumber": 15,
    "title": "Association (Dimerization): i = 1 - α/2 (Benzoic Acid in Benzene Has i = 0.5; Molar Mass Doubles!)",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Two Molecules Hug into One Dimer → Particle Count Halves (i = 0.5) → Apparent Molar Mass Doubles (244 g/mol)!",
    "memoryHook": "In non-polar solvents like benzene: 2 molecules of Benzoic acid (C6H5COOH) form an 8-membered hydrogen-bonded ring dimer! 2 C6H5COOH ⇌ (C6H5COOH)2. Formula: i = 1 + (1/n - 1)α. For dimerization (n = 2): i = 1 - α/2! If 100% dimerized (α = 1): i = 0.5! Observed molar mass = 122 / 0.5 = 244 g/mol (DOUBLED)!",
    "fact": "Association of Solute Molecules: 1. Equation: n A ⇌ An. Initial: 1 mole. Equilibrium: (1 - α) + α/n moles. 2. Van ’t Hoff Factor: i = 1 + (1/n - 1)α = 1 - (1 - 1/n)α. 3. Degree of Association: α = (1 - i) / (1 - 1/n). 4. For Dimerization (n = 2, e.g. Acetic acid or Benzoic acid in benzene): i = 1 - α/2 → α = 2(1 - i). 5. If 100% associated into dimers (α = 1): i = 1 - ½ = 0.5. Observed molar mass = Theoretical / i = M / 0.5 = 2M.",
    "breakdown": [
      {
        "key": "General Association",
        "label": "i = 1 + (1/n - 1)α"
      },
      {
        "key": "Dimerization (n = 2)",
        "label": "i = 1 - α/2"
      },
      {
        "key": "Degree of Association",
        "label": "α = 2(1 - i)"
      },
      {
        "key": "Molar Mass Doubling",
        "label": "Benzoic acid (M=122) in benzene exhibits observed molar mass ~244 g/mol"
      }
    ],
    "doodleBadge": "Dimerization: i = 1 - α/2\nα = 2(1 - i)\nBenzoic acid in benzene: i = 0.5",
    "doodleSubtext": "Association Formula",
    "explanation": "In non-polar benzene, there are no competing solvent hydrogen bonds, driving two carboxylic acid molecules to join heads and tails via two strong C=O···H-O hydrogen bonds.",
    "alsoRemember": "In water (polar solvent), benzoic acid does NOT dimerize; it undergoes normal DISSOCIATION into ions (i > 1).",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.7.",
    "neetTrap": "Benzoic acid in benzene ASSOCIATES (i < 1, molar mass doubles); but in water it DISSOCIATES (i > 1)! Always check the solvent.",
    "tags": [
      "Association",
      "Dimerization",
      "Benzoic Acid in Benzene",
      "Van t Hoff Factor"
    ],
    "quiz": {
      "question": "Benzoic acid dissolved in benzene undergoes 80% dimerization (α = 0.8). What is the value of the Van ’t Hoff factor (i)?",
      "options": [
        "0.2",
        "0.6",
        "0.8",
        "1.4"
      ],
      "answerIndex": 1,
      "explanation": "For dimerization n = 2: i = 1 - α/2 = 1 - 0.8/2 = 1 - 0.4 = 0.6."
    }
  },
  {
    "id": "chem-ch10-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Colligative Properties Ranking Master Trick (i × C)",
    "mnemonicNumber": 16,
    "title": "Colligative Ranking Trick: Multiply (i × Molarity)! Highest (i × C) Wins Elevation & Depression!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Compare Effective Particle Count (i × C)! Higher i × C = Highest BP, Lowest FP, Highest π, Lowest VP!",
    "memoryHook": "To rank solutions: Compute effective particle concentration = i × Molarity (or i × m)! 1) Boiling Point is HIGHEST for highest i·m! 2) Freezing Point is LOWEST for highest i·m (maximum depression)! 3) Osmotic Pressure (π) is HIGHEST for highest i·C! 4) Vapor Pressure is LOWEST for highest i·m (maximum lowering)!",
    "fact": "Comparison of 0.1 M Aqueous Solutions: 1. Urea (i = 1): Effective concentration = 0.1 M. 2. NaCl (i = 2): Effective concentration = 0.2 M. 3. BaCl2 (i = 3): Effective concentration = 0.3 M. 4. Al2(SO4)3 (i = 5): Effective concentration = 0.5 M. Trends: • Boiling Point: Al2(SO4)3 > BaCl2 > NaCl > Urea (Highest i·m has highest BP). • Freezing Point: Urea > NaCl > BaCl2 > Al2(SO4)3 (Highest i·m has LOWEST freezing point!). • Osmotic Pressure: Al2(SO4)3 > BaCl2 > NaCl > Urea. • Vapor Pressure: Urea > NaCl > BaCl2 > Al2(SO4)3.",
    "breakdown": [
      {
        "key": "Score = i × M",
        "label": "Urea (0.1) < NaCl (0.2) < BaCl2 (0.3) < AlCl3 (0.4) < Al2(SO4)3 (0.5)"
      },
      {
        "key": "Boiling Point Order",
        "label": "Directly follows score: Al2(SO4)3 > BaCl2 > NaCl > Urea"
      },
      {
        "key": "Freezing Point Order",
        "label": "INVERSE of score: Urea (highest FP, near 0°C) > NaCl > BaCl2 > Al2(SO4)3 (lowest FP)"
      }
    ],
    "doodleBadge": "Score = i × C\nHighest Score = Highest BP & π\nHighest Score = LOWEST FP & VP",
    "doodleSubtext": "Ranking Shortcut",
    "explanation": "Because freezing point depression drops the temperature below zero, a larger depression (ΔTf) translates to a more negative and therefore numerically lower freezing point.",
    "alsoRemember": "If concentrations are different (e.g. 0.1 M BaCl2 vs 0.2 M NaCl), multiply i × C: BaCl2 has 3 × 0.1 = 0.3; NaCl has 2 × 0.2 = 0.4 → NaCl wins!",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6 & 2.7.",
    "neetTrap": "Highest freezing point depression means LOWEST freezing point temperature! Do not confuse depression (ΔTf) with actual freezing point (Tf).",
    "tags": [
      "Colligative Ranking",
      "Boiling Point",
      "Freezing Point",
      "i Factor Trick"
    ],
    "quiz": {
      "question": "Which of the following 0.1 M aqueous solutions will have the lowest freezing point?",
      "options": [
        "0.1 M Glucose",
        "0.1 M NaCl",
        "0.1 M BaCl2",
        "0.1 M Al2(SO4)3"
      ],
      "answerIndex": 3,
      "explanation": "Al2(SO4)3 dissociates into 5 ions (i = 5), giving the highest effective particle concentration (5 × 0.1 = 0.5 M), producing the maximum freezing point depression and lowest freezing point."
    }
  },
  {
    "id": "chem-ch10-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-2",
    "topicTitle": "Artificial Semi-Permeable Membranes (SPM)",
    "mnemonicNumber": 17,
    "title": "Semi-Permeable Membranes: Copper Ferrocyanide Cu2[Fe(CN)6] is the Premier Artificial SPM!",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Red-Brown Gel of Copper Ferrocyanide: Blocks Solutes, Lets Water Dance Through!",
    "memoryHook": "A semi-permeable membrane (SPM) has microscopic pores that allow ONLY tiny solvent molecules to pass while blocking larger solute particles! Natural SPM: Pig’s bladder, parchment paper, egg membrane! Best Artificial SPM: Copper ferrocyanide (Cu2[Fe(CN)6]), prepared inside porous porcelain walls!",
    "fact": "Semi-Permeable Membranes (SPM): 1. Mechanism: Membrane contains sub-microscopic pores (~10-20 Å) through which only small solvent water molecules can diffuse; larger hydrated ions and solute molecules are blocked. 2. Natural Membranes: Pig’s bladder, animal bladder, egg membrane (obtained by dissolving outer CaCO3 shell in dilute HCl), parchment paper, plant cell membranes. 3. Synthetic / Artificial Membranes: (a) Copper ferrocyanide [Cu2[Fe(CN)6]]: Prepared by Graham by reacting CuSO4 with K4[Fe(CN)6] inside the pores of an unglazed porcelain pot. Can withstand immense pressures up to 150 atm without rupturing. (b) Cellulose acetate: Used in commercial reverse osmosis desalination.",
    "breakdown": [
      {
        "key": "Natural SPMs",
        "label": "Pig’s bladder, parchment paper, inner egg membrane"
      },
      {
        "key": "Best Laboratory SPM",
        "label": "Copper ferrocyanide Cu2[Fe(CN)6] (high mechanical pressure resistance)"
      },
      {
        "key": "Industrial RO SPM",
        "label": "Cellulose acetate polymer film"
      }
    ],
    "doodleBadge": "SPM: Only Solvent Passes\nCu2[Fe(CN)6] = Best Lab SPM\nEgg Membrane (Dilute HCl)",
    "doodleSubtext": "Membrane Science",
    "explanation": "Synthetic copper ferrocyanide precipitated inside ceramic walls provides the mechanical rigidity needed to withstand hydrostatic pressures in Berkeley and Hartley osmometers.",
    "alsoRemember": "If an egg with shell dissolved is placed in pure water, it swells; if placed in concentrated brine, it shrinks.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.6.4.",
    "neetTrap": "Copper ferrocyanide formula is Cu2[Fe(CN)6], formed by mixing copper sulfate (CuSO4) with potassium ferrocyanide (K4[Fe(CN)6]).",
    "tags": [
      "SPM",
      "Copper Ferrocyanide",
      "Osmosis",
      "Egg Membrane"
    ],
    "quiz": {
      "question": "Which chemical precipitate serves as the best synthetic semi-permeable membrane capable of withstanding high pressures in osmotic pressure measurements?",
      "options": [
        "Barium sulfate, BaSO4",
        "Copper ferrocyanide, Cu2[Fe(CN)6]",
        "Silver chloride, AgCl",
        "Lead iodide, PbI2"
      ],
      "answerIndex": 1,
      "explanation": "Copper ferrocyanide precipitated within the pores of porous porcelain produces a robust semi-permeable membrane that withstands high hydrostatic pressures."
    }
  },
  {
    "id": "chem-ch10-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-1",
    "topicTitle": "Azeotropes: Maximum vs Minimum Boiling Compositions",
    "mnemonicNumber": 18,
    "title": "Azeotropic Distillation Trap: Constant Boiling Mixtures CANNOT Be Separated by Fractionation!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Liquid Composition = Vapor Composition! Distills at ONE Temperature like a Pure Element!",
    "memoryHook": "An azeotrope is a constant boiling binary mixture that boils at a fixed temperature with identical liquid and vapor compositions (x = y)! Fractional distillation CANNOT separate an azeotrope! 1) Minimum Boiling: Positive deviation (95.4% Ethanol + 4.6% Water, boils at 78.15°C). 2) Maximum Boiling: Negative deviation (68% HNO3 + 32% Water, boils at 120.5°C)!",
    "fact": "Azeotropes (Constant Boiling Mixtures): 1. Definition: Binary liquid mixtures that distill at a constant temperature without any change in composition. At the azeotropic point: Mole fraction in liquid phase = Mole fraction in vapor phase (x1 = y1 and x2 = y2). 2. Types: (a) Minimum Boiling Azeotrope: Formed by solutions showing large POSITIVE deviations from Raoult’s law. Boils at a temperature LOWER than either pure component. Example: 95.4% Ethanol + 4.6% Water by mass (boils at 78.15°C; pure ethanol boils at 78.3°C, water at 100°C). (b) Maximum Boiling Azeotrope: Formed by solutions showing large NEGATIVE deviations from Raoult’s law. Boils at a temperature HIGHER than either pure component. Example: 68% Nitric acid + 32% Water by mass (boils at 120.5°C; pure HNO3 boils at 83°C, water at 100°C). 3. Separation: Cannot be separated by fractional distillation. Requires azeotropic distillation (adding an entrainer like benzene) or chemical drying (CaO for ethanol).",
    "breakdown": [
      {
        "key": "Azeotrope Rule",
        "label": "Liquid composition = Vapor composition (x = y, acts like pure liquid)"
      },
      {
        "key": "Min Boiling (Pos Dev)",
        "label": "95.4% Ethanol + 4.6% H2O (Boils at 78.15°C)"
      },
      {
        "key": "Max Boiling (Neg Dev)",
        "label": "68% HNO3 + 32% H2O (Boils at 120.5°C)"
      },
      {
        "key": "Pure 100% Ethanol",
        "label": "Obtained by adding benzene as a third component or drying over quicklime (CaO)"
      }
    ],
    "doodleBadge": "Azeotrope: x = y\nCannot separate by fractionating\nMin Boiling = 95.4% EtOH\nMax Boiling = 68% HNO3",
    "doodleSubtext": "Azeotropic Distillation Rules",
    "explanation": "Because vapor has the exact same composition as the boiling liquid, boiling does not enrich either component in the vapor phase.",
    "alsoRemember": "Hydrochloric acid forms a maximum boiling azeotrope with water at 20.2% HCl boiling at 108.5°C.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.4.3.",
    "neetTrap": "Fractional distillation of a 90% ethanol-water mixture can only concentrate it up to 95.4% ethanol; it CANNOT produce 100% absolute ethanol!",
    "tags": [
      "Azeotrope",
      "Minimum Boiling",
      "Maximum Boiling",
      "Fractional Distillation"
    ],
    "quiz": {
      "question": "What type of azeotrope is formed by a solution showing large negative deviation from Raoult’s law, such as a 68% HNO3 and 32% H2O mixture?",
      "options": [
        "Minimum boiling azeotrope",
        "Maximum boiling azeotrope",
        "Ideal azeotrope",
        "Non-azeotropic mixture"
      ],
      "answerIndex": 1,
      "explanation": "Solutions with negative deviation have lower vapor pressure, requiring a higher temperature to boil, thus forming a maximum boiling azeotrope."
    }
  },
  {
    "id": "chem-ch10-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-3",
    "topicTitle": "Abnormal Molar Mass: Dissociation vs Association",
    "mnemonicNumber": 19,
    "title": "Abnormal Molar Mass: Splitting Cuts Mass; Dimerizing Multiplies Mass!",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "More Particles (Dissociation) = Lower Apparent Mass! Clustered Particles (Association) = Higher Apparent Mass!",
    "memoryHook": "All colligative properties depend on the NUMBER of particles and are inversely proportional to molar mass (Colligative ∝ 1 / Molar Mass): When solute DISSOCIATES (KCl → K⁺ + Cl⁻), particle count doubles, colligative property doubles, so Observed Molar Mass is HALVED (~37 g/mol instead of 74.5 g/mol)! When solute ASSOCIATES into dimers, particle count halves, so Observed Molar Mass DOUBLES!",
    "fact": "Abnormal Molar Mass: 1. Dissociation: Electrolytes dissociate into two or more ions in solution. Total number of particles increases. Colligative property (ΔTb, ΔTf, π) is greater than expected. Since Molar Mass M ∝ 1 / (Colligative Property), the experimentally observed molar mass is LESS than normal theoretical molar mass (M_obs < M_normal; i > 1). 2. Association: Solute molecules associate into dimers or polymers through hydrogen bonding or van der Waals forces. Total number of particles decreases. Colligative property is smaller than expected. Experimentally observed molar mass is GREATER than normal theoretical molar mass (M_obs > M_normal; i < 1).",
    "breakdown": [
      {
        "key": "Dissociation (i > 1)",
        "label": "M_obs < M_normal (e.g. NaCl observed mass ≈ 29.25 g/mol)"
      },
      {
        "key": "Association (i < 1)",
        "label": "M_obs > M_normal (e.g. Acetic acid in benzene observed mass ≈ 120 g/mol)"
      },
      {
        "key": "Correction Factor",
        "label": "Multiply theoretical colligative equation by Van ’t Hoff factor i to reconcile theory with reality"
      }
    ],
    "doodleBadge": "Dissociation → M_obs < M_normal\nAssociation → M_obs > M_normal\nColligative ∝ 1 / Molar Mass",
    "doodleSubtext": "Abnormal Molar Mass Rules",
    "explanation": "The colligative measurement cannot distinguish between a single large molecule and a cluster of smaller molecules behaving as a single kinetic entity.",
    "alsoRemember": "Colligative properties measure total effective particle moles, not chemical identities.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter, Section 2.7.",
    "neetTrap": "If KCl has normal molar mass 74.5 g/mol, its observed molar mass in water is approximately 37.25 g/mol (half), NOT double!",
    "tags": [
      "Abnormal Molar Mass",
      "Dissociation",
      "Association",
      "Colligative Properties"
    ],
    "quiz": {
      "question": "When ethanoic acid (acetic acid) is dissolved in benzene, its observed molar mass determined by freezing point depression is approximately 120 g/mol instead of 60 g/mol. Why?",
      "options": [
        "Ethanoic acid dissociates into ions in benzene",
        "Ethanoic acid undergoes dimerization through intermolecular hydrogen bonding",
        "Benzene reacts with ethanoic acid",
        "Benzene has a high boiling point"
      ],
      "answerIndex": 1,
      "explanation": "In non-polar benzene, ethanoic acid molecules pair up into dimers via two hydrogen bonds, halving the number of particles and doubling the apparent molecular weight."
    }
  },
  {
    "id": "chem-ch10-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-10",
    "chapterNumber": 10,
    "chapterTitle": "Solutions",
    "topicId": "chem-top-10-3",
    "topicTitle": "Solutions Master Summary Map",
    "mnemonicNumber": 20,
    "title": "Solutions Master Map: Concentration, Raoult’s Law, 4 Colligative Properties, and Van ’t Hoff Factor",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Concentrations (M vs m) → Raoult (pA = pA° xA) → Deviations (+ / -) → 4 Colligative Properties → i Factor!",
    "memoryHook": "The entire chapter linked together: 1) Units: Molality m is temp-proof. 2) Gas: Henry p = KH·x. 3) Volatiles: Raoult p = p°x; Positive (+ΔH, min azeotrope) vs Negative (-ΔH, max azeotrope). 4) The 4 Colligative Properties: RLVP = i·x2; ΔTb = i·Kb·m; ΔTf = i·Kf·m; π = i·CRT. 5) i Factor: Dissociation i = 1 + (n-1)α; Dimerization i = 1 - α/2!",
    "fact": "Master Blueprint of Chapter 2 Solutions: 1. Concentration: Molarity (temp-dependent) vs Molality (temp-independent). 2. Gas Solubility: Henry’s law p = KH·x (higher T = higher KH = lower solubility). 3. Raoult’s Law: Ideal (ΔH=0, ΔV=0); Positive deviation (A-B weak, min azeotrope); Negative deviation (A-B strong, max azeotrope). 4. Colligative Properties: Depend strictly on particle count, not identity. 5. Van ’t Hoff factor i: i = M_normal / M_obs. Dissociation: i > 1. Association: i < 1.",
    "breakdown": [
      {
        "key": "Concentrations",
        "label": "M (mol/L, temp dependent) vs m (mol/kg, temp independent)"
      },
      {
        "key": "Raoult Deviations",
        "label": "Positive (Ethanol/Acetone, min azeotrope) vs Negative (Chloroform/Acetone, max azeotrope)"
      },
      {
        "key": "4 Colligative Props",
        "label": "RLVP, ΔTb (Kb=0.52), ΔTf (Kf=1.86), π = iCRT"
      },
      {
        "key": "Van ’t Hoff i",
        "label": "i = 1 + (n-1)α (Dissociation) | i = 1 - α/2 (Dimerization)"
      }
    ],
    "doodleBadge": "4 Colligative Properties:\nRLVP · ΔTb · ΔTf · π\nVan ’t Hoff i Factor Master",
    "doodleSubtext": "Chapter 2 Solutions Master Blueprint",
    "explanation": "From industrial distillation to medical IV drips and antifreeze in car radiators, solution thermodynamics governs essential chemical technology.",
    "alsoRemember": "Always check if the solute is an electrolyte before calculating colligative properties: failure to include i factor is the #1 mistake in NEET physical chemistry.",
    "ncertConnection": "NCERT Class 12 Chemistry Solutions Chapter.",
    "neetTrap": "Always check if the solute dissociates or associates! Never forget the Van ’t Hoff factor i in colligative calculations.",
    "tags": [
      "Solutions",
      "Master Map",
      "Colligative Properties",
      "Class 12"
    ],
    "quiz": {
      "question": "Which of the following is common to all four colligative properties?",
      "options": [
        "They depend on the chemical nature of the solute particles",
        "They depend exclusively on the total number of solute particles relative to solvent particles",
        "They are measured at the boiling point of the solvent",
        "They are independent of the Van ’t Hoff factor"
      ],
      "answerIndex": 1,
      "explanation": "All colligative properties depend solely on the ratio of the number of solute particles to the number of solvent molecules, not on the identity of the solute."
    }
  }
];
