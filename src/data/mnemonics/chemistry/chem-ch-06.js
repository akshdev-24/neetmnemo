export const chemCh06Mnemonics = [
  {
    "id": "chem-ch06-01",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-1",
    "topicTitle": "Relation Between Kp and Kc",
    "mnemonicNumber": 1,
    "title": "Kp = Kc (RT)^Δng: Count Only Gaseous Moles!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Kp = Kc (RT)^Δng | Δng = Gas Moles Products minus Gas Moles Reactants!",
    "memoryHook": "If Δng > 0, Kp > Kc! If Δng = 0, Kp = Kc (RT term vanishes)! If Δng < 0, Kp < Kc! R = 0.0821 L·atm/(mol·K) and T is in KELVIN!",
    "fact": "From the ideal gas equation P = (n/V)RT = CRT: Kp = Kc (RT)^Δng. Δng = Σ n_gas(products) - Σ n_gas(reactants). Pure solids and liquids have constant active mass (activity = 1) and are completely excluded from Kp and Kc expressions.",
    "breakdown": [
      {
        "key": "Δng = 0 (e.g. H2 + I2 ⇌ 2HI)",
        "label": "Kp = Kc (units cancel out, K has no dimensions)"
      },
      {
        "key": "Δng > 0 (e.g. PCl5 ⇌ PCl3 + Cl2)",
        "label": "Δng = +1 → Kp = Kc (RT)¹ → Kp > Kc (when RT > 1)"
      },
      {
        "key": "Δng < 0 (e.g. N2 + 3H2 ⇌ 2NH3)",
        "label": "Δng = -2 → Kp = Kc (RT)⁻² → Kp < Kc"
      }
    ],
    "doodleBadge": "Kp = Kc (RT)^Δng\nΔng = Gas (Prod - React)",
    "doodleSubtext": "Pressure vs Concentration",
    "explanation": "When Δng = 0, the equilibrium constant is purely a dimensionless number independent of the pressure or volume units used.",
    "alsoRemember": "For CaCO3(s) ⇌ CaO(s) + CO2(g), Kp = P_CO2 and Kc = [CO2] because solids have active mass = 1.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.4.",
    "neetTrap": "Always check that R is in L·atm/(mol·K) = 0.0821 when pressures are in atmospheres (atm) or 0.0831 when in bar.",
    "tags": [
      "Equilibrium",
      "Kp and Kc",
      "Chemical Equilibrium",
      "Class 11"
    ],
    "quiz": {
      "question": "For which of the following reactions does Kp equal Kc?",
      "options": [
        "PCl5(g) ⇌ PCl3(g) + Cl2(g)",
        "N2(g) + 3H2(g) ⇌ 2NH3(g)",
        "H2(g) + I2(g) ⇌ 2HI(g)",
        "2SO2(g) + O2(g) ⇌ 2SO3(g)"
      ],
      "answerIndex": 2,
      "explanation": "In H2(g) + I2(g) ⇌ 2HI(g), Δng = 2 - (1 + 1) = 0. Since (RT)⁰ = 1, Kp = Kc."
    }
  },
  {
    "id": "chem-ch06-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-1",
    "topicTitle": "Reaction Quotient Q vs Equilibrium Constant K",
    "mnemonicNumber": 2,
    "title": "Reaction Quotient Q vs K: Which Way Will the Arrow Move?",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Alphabetical Order: Q → K (Arrow points from Q toward K on the number line!)",
    "memoryHook": "Place Q and K on a number line: If Q < K, you must move FORWARD (→) to reach K! If Q = K, you are at EQUILIBRIUM! If Q > K, you must move BACKWARD (←) to reach K!",
    "fact": "Reaction Quotient (Qc or Qp) has the exact same mathematical form as the equilibrium constant, but evaluated at non-equilibrium instantaneous concentrations. 1. Q < K: Not enough products, reaction proceeds in FORWARD direction (→). 2. Q = K: System is at DYNAMIC EQUILIBRIUM. 3. Q > K: Excess products, reaction proceeds in REVERSE direction (←).",
    "breakdown": [
      {
        "key": "Q < K (Forward →)",
        "label": "Reactants transform into products until equilibrium is attained"
      },
      {
        "key": "Q = K (Equilibrium ⇌)",
        "label": "Forward and reverse reaction rates are equal, no net change"
      },
      {
        "key": "Q > K (Reverse ←)",
        "label": "Products decompose back into reactants"
      }
    ],
    "doodleBadge": "Q < K → Forward\nQ = K ⇌ Equilibrium\nQ > K ← Reverse",
    "doodleSubtext": "Direction Predictor",
    "explanation": "From ΔG = ΔG° + RT ln Q = RT ln(Q/K): When Q < K, ln(Q/K) is negative, making ΔG < 0 (forward reaction spontaneous).",
    "alsoRemember": "Catalyst does NOT change the value of K or Q; it only speeds up the time needed for Q to equal K.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.5.",
    "neetTrap": "A catalyst increases the rates of BOTH forward and reverse reactions by the EXACT same factor, leaving the equilibrium constant K completely unchanged.",
    "tags": [
      "Reaction Quotient",
      "Equilibrium Constant",
      "Spontaneity",
      "Direction"
    ],
    "quiz": {
      "question": "If the reaction quotient Q for a reaction mixture is found to be greater than the equilibrium constant K (Q > K), what will happen?",
      "options": [
        "The reaction will proceed forward to form more products",
        "The reaction will proceed in the reverse direction to form more reactants",
        "The system is already at equilibrium",
        "The value of K will increase"
      ],
      "answerIndex": 1,
      "explanation": "When Q > K, there is an excess of products relative to equilibrium; the reaction shifts backward to re-establish equilibrium."
    }
  },
  {
    "id": "chem-ch06-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-1",
    "topicTitle": "Manipulating Equilibrium Constants (K Rules)",
    "mnemonicNumber": 3,
    "title": "Equilibrium Constant Algebra: Reverse = 1/K | Multiply by n = Kⁿ | Add Reactions = K1 × K2",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Flip = Invert (1/K)! Multiply = Power (Kⁿ)! Add = Multiply (K1 × K2)!",
    "memoryHook": "Thermochemical algebra adds ΔH, but Equilibrium algebra MULTIPLIES K! Reverse reaction → K_new = 1/K! Multiply by 2 → K_new = K²! Halve coefficients → K_new = √K! Add two reactions → K_total = K1 × K2!",
    "fact": "Mathematical rules for equilibrium constants: 1. Reversing reaction: A ⇌ B (K1) → B ⇌ A (K_rev = 1/K1). 2. Multiplying by factor n: nA ⇌ nB → K_new = (K1)ⁿ. (e.g. dividing by 2 gives √K1). 3. Adding reactions: Reaction 1 (K1) + Reaction 2 (K2) → K_net = K1 × K2. 4. Subtracting reactions: Reaction 1 - Reaction 2 → K_net = K1 / K2.",
    "breakdown": [
      {
        "key": "Reverse Reaction",
        "label": "K_new = 1 / K_original"
      },
      {
        "key": "Multiply by n",
        "label": "K_new = Kⁿ (e.g. multiply by ½ gives √K)"
      },
      {
        "key": "Add Two Steps",
        "label": "K_net = K1 × K2 (never add K values!)"
      },
      {
        "key": "Subtract Steps",
        "label": "K_net = K1 / K2"
      }
    ],
    "doodleBadge": "Reverse: 1/K\nMultiply n: Kⁿ\nAdd: K1 × K2",
    "doodleSubtext": "K-Algebra Rules",
    "explanation": "Because equilibrium expressions are multiplicative ratios of concentrations, combining equations translates into multiplying their K expressions.",
    "alsoRemember": "Equilibrium constant depends ONLY on TEMPERATURE. It is completely independent of initial concentrations, volume, pressure, or catalysts.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.3.",
    "neetTrap": "Never add equilibrium constants when adding reactions! Add enthalpies (ΔH), but MULTIPLY equilibrium constants (K1 × K2).",
    "tags": [
      "Equilibrium Constant",
      "K Rules",
      "Algebra",
      "Class 11"
    ],
    "quiz": {
      "question": "If the equilibrium constant for N2 + 3H2 ⇌ 2NH3 is K, what is the equilibrium constant for NH3 ⇌ ½N2 + 3/2 H2?",
      "options": [
        "-K/2",
        "1 / K²",
        "1 / √K",
        "√K"
      ],
      "answerIndex": 2,
      "explanation": "The reaction is reversed (giving 1/K) and multiplied by ½ (taking the square root), so the new equilibrium constant is (1/K)^(1/2) = 1 / √K."
    }
  },
  {
    "id": "chem-ch06-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-1",
    "topicTitle": "Le Chatelier's Principle: Pressure & Volume Shifts",
    "mnemonicNumber": 4,
    "title": "Le Chatelier Pressure Rule: High Pressure = Squeeze into Fewer Gas Moles!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Increase Pressure → System Flees to FEWER Gaseous Moles to Relieve the Squeeze!",
    "memoryHook": "When external pressure increases (or volume decreases), the system shifts in the direction that has FEWER moles of gas. If Δng = 0 (e.g. H2 + I2 ⇌ 2HI), pressure changes have ZERO effect on equilibrium position!",
    "fact": "Le Chatelier’s Principle: If an external stress (change in concentration, pressure, or temperature) is applied to a system at equilibrium, the system shifts in the direction that relieves the applied stress. 1. Pressure Increase: Shifts toward side with fewer gaseous moles. 2. Pressure Decrease: Shifts toward side with more gaseous moles. 3. Δng = 0: Pressure change has NO effect on equilibrium composition.",
    "breakdown": [
      {
        "key": "N2(g) + 3H2(g) ⇌ 2NH3(g)",
        "label": "4 moles gas → 2 moles gas: High pressure (200 atm) favors forward synthesis of NH3"
      },
      {
        "key": "PCl5(g) ⇌ PCl3(g) + Cl2(g)",
        "label": "1 mole gas → 2 moles gas: High pressure shifts backward to PCl5; low pressure favors dissociation"
      },
      {
        "key": "H2(g) + I2(g) ⇌ 2HI(g)",
        "label": "2 moles gas ⇌ 2 moles gas (Δng = 0): Pressure change has ZERO effect"
      }
    ],
    "doodleBadge": "High P → Fewer Gas Moles\nLow P → More Gas Moles\nΔng=0 → No Effect",
    "doodleSubtext": "Le Chatelier's Pressure Rule",
    "explanation": "Squeezing gas into a smaller volume increases partial pressures; shifting toward fewer moles reduces total particle count and lowers pressure back down.",
    "alsoRemember": "For the melting of ice (Ice ⇌ Water), density of water is higher than ice (V_water < V_ice). Therefore, increasing pressure favors MELTING of ice (shifts forward)!",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.6.2.",
    "neetTrap": "Increasing pressure on an ice-water equilibrium causes MORE ice to MELT into water, because liquid water is denser and occupies less volume than ice!",
    "tags": [
      "Le Chatelier",
      "Pressure Shift",
      "Ice Melting Exception",
      "High Yield"
    ],
    "quiz": {
      "question": "What is the effect of increasing pressure on the physical equilibrium Ice ⇌ Water at 0°C?",
      "options": [
        "More ice is formed",
        "More water is formed because water has higher density than ice",
        "Equilibrium is unaffected",
        "Temperature drops to -10°C"
      ],
      "answerIndex": 1,
      "explanation": "Liquid water has a smaller molar volume (higher density) than ice. Increasing pressure shifts equilibrium toward the smaller volume (water)."
    }
  },
  {
    "id": "chem-ch06-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-1",
    "topicTitle": "Le Chatelier's Principle: Temperature & Haber Process",
    "mnemonicNumber": 5,
    "title": "Temperature Shift: Heat Favors Endothermic; Cooling Favors Exothermic!",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Treat Heat like a Chemical Product in Exothermic (+Heat) & Reactant in Endothermic!",
    "memoryHook": "In exothermic reactions (ΔH < 0), heat is a product: Raising temperature pushes equilibrium BACKWARD (K decreases). In endothermic reactions (ΔH > 0), heat is a reactant: Raising temperature pulls equilibrium FORWARD (K increases)!",
    "fact": "Temperature is the ONLY variable that changes the numerical value of K: 1. Endothermic (ΔH > 0): Temperature increase → K increases, shifts FORWARD. 2. Exothermic (ΔH < 0): Temperature increase → K decreases, shifts BACKWARD. van ’t Hoff Isochore Equation: ln(K2 / K1) = (ΔH° / R) [1/T1 - 1/T2].",
    "breakdown": [
      {
        "key": "Haber Process",
        "label": "N2 + 3H2 ⇌ 2NH3 (ΔH = -92.4 kJ/mol, exothermic): Low T favors high yield, but ~700 K used as compromise for kinetic speed"
      },
      {
        "key": "NO Formation",
        "label": "N2 + O2 ⇌ 2NO (ΔH = +180 kJ/mol, endothermic): High T favors forward yield"
      },
      {
        "key": "K Value Dependence",
        "label": "ONLY temperature can change the numerical value of equilibrium constant K"
      }
    ],
    "doodleBadge": "Endo: T up → K up (→)\nExo: T up → K down (←)",
    "doodleSubtext": "van 't Hoff Temperature Rule",
    "explanation": "Adding heat shifts equilibrium in the direction that absorbs heat (endothermic direction) to counteract the temperature rise.",
    "alsoRemember": "In Haber’s process, finely divided iron with molybdenum promoter and 200 atm pressure are used alongside optimum ~700 K.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.6.3.",
    "neetTrap": "Changing concentration, pressure, or volume shifts the equilibrium position, but ONLY TEMPERATURE changes the value of the equilibrium constant K itself!",
    "tags": [
      "Le Chatelier",
      "Temperature Effect",
      "Haber Process",
      "van t Hoff"
    ],
    "quiz": {
      "question": "Which of the following factors can change the numerical value of the equilibrium constant K for a given chemical reaction?",
      "options": [
        "Change in reactant concentration",
        "Addition of a catalyst",
        "Change in total pressure",
        "Change in temperature"
      ],
      "answerIndex": 3,
      "explanation": "The equilibrium constant K is a thermodynamic function of temperature alone; no other factor changes its numerical value."
    }
  },
  {
    "id": "chem-ch06-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-1",
    "topicTitle": "Inert Gas Addition: Constant Volume vs Constant Pressure",
    "mnemonicNumber": 6,
    "title": "Inert Gas Addition: Zero Effect at Constant Volume; Shifts to More Moles at Constant Pressure!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Constant V = Constant Concentrations (NO SHIFT)! Constant P = Volume Expands (SHIFTS TO MORE MOLES)!",
    "memoryHook": "At Constant Volume: Adding inert gas increases total pressure, but partial pressures of reactants/products DO NOT CHANGE (Zero Effect)! At Constant Pressure: Vessel must expand to keep P constant, diluting all gases, so equilibrium shifts toward MORE GASEOUS MOLES!",
    "fact": "Inert Gas Addition Rules: 1. At Constant Volume (ΔV = 0): Molar concentrations [C] = n/V remain strictly unchanged. Reaction quotient Q remains equal to K. Result: NO EFFECT on equilibrium position. 2. At Constant Pressure (ΔP = 0): Adding inert gas increases volume V. Partial pressures of reacting gases decrease. The system shifts toward the side with MORE moles of gas (Δng > 0 shifts forward; Δng < 0 shifts backward; Δng = 0 no shift).",
    "breakdown": [
      {
        "key": "At Constant Volume (V=const)",
        "label": "Partial pressures unchanged → Equilibrium is completely unaffected"
      },
      {
        "key": "At Constant Pressure (P=const)",
        "label": "Volume expands → Shifts toward side with GREATER number of gaseous moles"
      },
      {
        "key": "PCl5 at Const P",
        "label": "PCl5 ⇌ PCl3 + Cl2 (Δng = +1): Shifts forward, increasing PCl5 dissociation"
      }
    ],
    "doodleBadge": "Inert Gas:\nConst V → NO EFFECT\nConst P → Shifts to MORE Moles",
    "doodleSubtext": "Inert Gas Rules",
    "explanation": "At constant volume, the inert gas molecules merely bounce around without changing the volume or moles of the reacting species.",
    "alsoRemember": "If Δng = 0 (e.g. H2 + I2 ⇌ 2HI), adding an inert gas has NO EFFECT under both constant volume AND constant pressure conditions.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.6.4.",
    "neetTrap": "Students assume adding an inert gas at constant volume increases pressure and causes a shift. It does NOT, because partial pressures of reactants remain unchanged!",
    "tags": [
      "Inert Gas",
      "Le Chatelier",
      "Equilibrium Shift",
      "NEET Trap"
    ],
    "quiz": {
      "question": "What happens when an inert gas (like Argon) is added to the equilibrium system PCl5(g) ⇌ PCl3(g) + Cl2(g) at constant volume?",
      "options": [
        "Equilibrium shifts in the forward direction",
        "Equilibrium shifts in the reverse direction",
        "Equilibrium position remains completely unaffected",
        "PCl5 dissociates 100%"
      ],
      "answerIndex": 2,
      "explanation": "At constant volume, addition of an inert gas does not change the partial pressures or molar concentrations of the reactants and products, so equilibrium is unaffected."
    }
  },
  {
    "id": "chem-ch06-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "Conjugate Acid-Base Pairs (Brønsted-Lowry)",
    "mnemonicNumber": 7,
    "title": "Conjugate Acid-Base Pairs: Differ by Exactly ONE Proton (H⁺)!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Acid Loses H⁺ → Conjugate Base! Base Gains H⁺ → Conjugate Acid!",
    "memoryHook": "To find Conjugate Base: SUBTRACT one H⁺ from the formula! To find Conjugate Acid: ADD one H⁺ to the formula! Strong Acid has Weak Conjugate Base; Weak Acid has Strong Conjugate Base!",
    "fact": "Brønsted-Lowry Theory: Acid is a proton (H⁺) donor; Base is a proton acceptor. A conjugate acid-base pair differs by exactly one H⁺ ion: Acid ⇌ H⁺ + Conjugate Base. Ka × Kb = Kw = 10⁻¹⁴ for any conjugate acid-base pair at 298 K (pKa + pKb = 14). Strong acid (HCl) has a very weak conjugate base (Cl⁻, negligible basicity in water).",
    "breakdown": [
      {
        "key": "H2O Conjugate Base",
        "label": "Subtract H⁺ → OH⁻"
      },
      {
        "key": "H2O Conjugate Acid",
        "label": "Add H⁺ → H3O⁺ (Water is amphoteric!)"
      },
      {
        "key": "NH3 Conjugate Base",
        "label": "Subtract H⁺ → NH2⁻ (Amide ion)"
      },
      {
        "key": "NH3 Conjugate Acid",
        "label": "Add H⁺ → NH4⁺ (Ammonium ion)"
      },
      {
        "key": "HCO3⁻ Conjugate Base & Acid",
        "label": "Conjugate base is CO3²⁻; Conjugate acid is H2CO3"
      }
    ],
    "doodleBadge": "Acid - H⁺ = Conj Base\nBase + H⁺ = Conj Acid\npKa + pKb = 14",
    "doodleSubtext": "Brønsted-Lowry Pairs",
    "explanation": "Water acts as an acid when donating H⁺ to ammonia, and acts as a base when accepting H⁺ from HCl, showing its amphiprotic nature.",
    "alsoRemember": "Conjugate base of HSO4⁻ is SO4²⁻; its conjugate acid is H2SO4.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.7.2.",
    "neetTrap": "The conjugate base of ammonia NH3 is NH2⁻ (amide ion), NOT NH4⁺ (which is its conjugate ACID)!",
    "tags": [
      "Conjugate Acid Base",
      "Bronsted Lowry",
      "Amphiprotic",
      "Class 11"
    ],
    "quiz": {
      "question": "What are the conjugate acid and conjugate base of the bicarbonate ion (HCO3⁻), respectively?",
      "options": [
        "CO3²⁻ and H2CO3",
        "H2CO3 and CO3²⁻",
        "H2CO3 and OH⁻",
        "CO2 and CO3²⁻"
      ],
      "answerIndex": 1,
      "explanation": "Adding H⁺ to HCO3⁻ gives conjugate acid H2CO3; removing H⁺ gives conjugate base CO3²⁻."
    }
  },
  {
    "id": "chem-ch06-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "Ostwald's Dilution Law for Weak Electrolytes",
    "mnemonicNumber": 8,
    "title": "Ostwald Dilution Law: α = √(Ka / C) and [H⁺] = √(Ka · C) (Infinite Dilution = 100% Dissociation!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Alpha is Inversely Proportional to Root-C! Dilution Unchains the Weak Acid!",
    "memoryHook": "For a weak acid HA (α << 1): Ka = Cα² / (1 - α) ≈ Cα². Therefore, α = √(Ka / C) and [H⁺] = Cα = √(Ka × C)! As concentration C decreases (dilution increases), degree of dissociation α shoots UP toward 1.0!",
    "fact": "Ostwald’s Dilution Law applies strictly to weak electrolytes: 1. Dissociation equilibrium: HA ⇌ H⁺ + A⁻. At equilibrium: [HA] = C(1-α), [H⁺] = Cα, [A⁻] = Cα. 2. Ka = (Cα)(Cα) / C(1-α) = Cα² / (1-α). 3. For weak acids (α < 0.05 or 5%), 1 - α ≈ 1, so Ka ≈ Cα². 4. α = √(Ka / C) = √(Ka × V). As dilution V → ∞, α → 1 (100% dissociated at infinite dilution).",
    "breakdown": [
      {
        "key": "Degree of Dissociation",
        "label": "α = √(Ka / C)"
      },
      {
        "key": "Hydrogen Ion Concentration",
        "label": "[H⁺] = Cα = √(Ka · C)"
      },
      {
        "key": "Weak Base Equivalent",
        "label": "α = √(Kb / C) and [OH⁻] = √(Kb · C)"
      },
      {
        "key": "Approximation Limit",
        "label": "Valid when α ≤ 0.05 (5%); if α > 0.05, solve quadratic equation Cα² + Ka·α - Ka = 0"
      }
    ],
    "doodleBadge": "α = √(Ka / C)\n[H⁺] = √(Ka · C)",
    "doodleSubtext": "Ostwald's Dilution Law",
    "explanation": "Adding water spreads ions apart, dramatically reducing the probability that H⁺ and A⁻ will collide to recombine into undissociated HA.",
    "alsoRemember": "For a weak dibasic acid (like H2S or H2CO3), Ka1 >> Ka2. The concentration of the divalent anion [S²⁻] or [CO3²⁻] is approximately equal to Ka2, independent of initial concentration!",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.8.",
    "neetTrap": "Ostwald’s dilution law does NOT apply to STRONG electrolytes like HCl or NaCl because they are already 100% ionized at all ordinary concentrations.",
    "tags": [
      "Ostwald Dilution Law",
      "Weak Acid",
      "Degree of Dissociation",
      "Class 11"
    ],
    "quiz": {
      "question": "If the concentration of a weak monobasic acid is diluted by 4 times, what happens to its degree of dissociation (α)?",
      "options": [
        "It doubles (increases by 2 times)",
        "It halves",
        "It quadruples",
        "It remains unchanged"
      ],
      "answerIndex": 0,
      "explanation": "Since α ∝ 1/√C, decreasing C by a factor of 4 increases α by a factor of √4 = 2 times."
    }
  },
  {
    "id": "chem-ch06-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "Ionic Product of Water (Kw) & Temperature Effect",
    "mnemonicNumber": 9,
    "title": "Ionic Product of Water: Kw = 10⁻¹⁴ at 25°C (Boiling Water Has pH < 7 but is NEUTRAL!)",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Neutral Means [H⁺] = [OH⁻], NOT Just pH = 7! Boiling Pure Water is Neutral at pH 6!",
    "memoryHook": "Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C (298 K) → pH = 7. Water autoionization is ENDOTHERMIC: Heating water increases Kw! At 100°C (373 K), Kw ≈ 10⁻¹², so [H⁺] = 10⁻⁶ M and pH = 6. But because [H⁺] still EXACTLY EQUALS [OH⁻], the water is 100% NEUTRAL!",
    "fact": "1. Autoionization of water: H2O(l) + H2O(l) ⇌ H3O⁺(aq) + OH⁻(aq), ΔH > 0 (endothermic). 2. At 298 K (25°C): Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. pKw = pH + pOH = 14. Neutral pH = 7. 3. At 373 K (100°C): Kw increases to ~10⁻¹² due to endothermic ionization. pKw = 12. Neutral point = pKw / 2 = 6. 4. Definition of neutrality: A solution is neutral whenever [H⁺] = [OH⁻], regardless of the numerical pH value.",
    "breakdown": [
      {
        "key": "At 25°C (298 K)",
        "label": "Kw = 10⁻¹⁴ → [H⁺] = 10⁻⁷ M → pH = 7.0 (Neutral)"
      },
      {
        "key": "At 100°C (373 K)",
        "label": "Kw = 10⁻¹² → [H⁺] = 10⁻⁶ M → pH = 6.0 (Still 100% Neutral!)"
      },
      {
        "key": "True Neutrality",
        "label": "[H⁺] = [OH⁻] is the only universal condition for neutrality"
      }
    ],
    "doodleBadge": "Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C\nBoiling water: pH = 6 (Neutral!)",
    "doodleSubtext": "Kw Temperature Shift",
    "explanation": "Heat breaks covalent O-H bonds, driving self-ionization forward and releasing equal numbers of H⁺ and OH⁻ ions, maintaining perfect electrical neutrality.",
    "alsoRemember": "For any aqueous solution at 25°C: pH + pOH = 14. If pH = 3, pOH = 11, [OH⁻] = 10⁻¹¹ M.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.7.3.",
    "neetTrap": "Boiling pure water has pH = 6.14, but it is NOT acidic! It is neutral because [H⁺] = [OH⁻].",
    "tags": [
      "Ionic Product of Water",
      "Kw",
      "pH Scale",
      "Neutrality"
    ],
    "quiz": {
      "question": "At 60°C, the ionic product of pure water is Kw = 10⁻¹³. What is the pH of pure water at this temperature, and what is its nature?",
      "options": [
        "pH = 7, Neutral",
        "pH = 6.5, Acidic",
        "pH = 6.5, Neutral",
        "pH = 7.5, Basic"
      ],
      "answerIndex": 2,
      "explanation": "In pure water [H⁺] = [OH⁻] = √Kw = √(10⁻¹³) = 10⁻⁶·⁵ M. pH = 6.5. Since [H⁺] = [OH⁻], the water is strictly neutral."
    }
  },
  {
    "id": "chem-ch06-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "pH of Ultra-Dilute Acid: 10⁻⁸ M HCl Exception",
    "mnemonicNumber": 10,
    "title": "Ultra-Dilute Acid Trap: 10⁻⁸ M HCl Has pH = 6.79, NEVER pH = 8!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Adding Acid to Water CAN NEVER Make it Basic! Include Water’s Own H⁺!",
    "memoryHook": "If you take -log(10⁻⁸), you get 8 (Basic!). But acid CANNOT turn water basic! At concentrations ≤ 10⁻⁶ M, you MUST add water’s own H⁺: Total [H⁺] = 10⁻⁸ (from HCl) + 10⁻⁷ (from H2O) = 1.05 × 10⁻⁷ M → pH = 6.79 (slightly acidic)!",
    "fact": "In ultra-dilute acid solutions (concentration ≤ 10⁻⁶ M), the self-ionization of water cannot be ignored: Total [H⁺] = [H⁺]_acid + [H⁺]_H2O. For 10⁻⁸ M HCl, let x = [H⁺] from water: Total [H⁺] = (10⁻⁸ + x). Kw = [H⁺][OH⁻] = (10⁻⁸ + x)(x) = 10⁻¹⁴. Solving the quadratic gives x = 9.5 × 10⁻⁸ M. Total [H⁺] = 10⁻⁸ + 9.5 × 10⁻⁸ = 1.05 × 10⁻⁷ M → pH = -log(1.05 × 10⁻⁷) = 6.79.",
    "breakdown": [
      {
        "key": "Naive Mistake",
        "label": "pH = -log(10⁻⁸) = 8.0 (IMPOSSIBLE: an acid can never have pH > 7 at 25°C!)"
      },
      {
        "key": "Water Contribution",
        "label": "Pure water supplies 10⁻⁷ M H⁺, which dominates over 10⁻⁸ M HCl"
      },
      {
        "key": "Correct Result",
        "label": "Total [H⁺] = 1.05 × 10⁻⁷ M → pH = 6.79 (just slightly on the acidic side of 7)"
      }
    ],
    "doodleBadge": "10⁻⁸ M HCl: pH = 6.79\n(Never 8!)",
    "doodleSubtext": "Ultra-Dilute Acid Trap",
    "explanation": "The common ion H⁺ from HCl slightly suppresses water autoionization from 1.0 × 10⁻⁷ down to 0.95 × 10⁻⁷ M, yielding a net total of 1.05 × 10⁻⁷ M H⁺.",
    "alsoRemember": "For 10⁻⁸ M NaOH: Total [OH⁻] = 1.05 × 10⁻⁷ M → pOH = 6.79 → pH = 14 - 6.79 = 7.21 (slightly basic, never pH 6!).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.7.4.",
    "neetTrap": "Questions on 10⁻⁸ M HCl or 10⁻⁷ M HCl appear frequently on NEET to trap students into selecting pH 8 or pH 7.",
    "tags": [
      "pH Calculation",
      "Dilute Acid",
      "NEET Trap",
      "10^-8 M HCl"
    ],
    "quiz": {
      "question": "What is the pH of a 10⁻⁸ M aqueous solution of hydrochloric acid (HCl) at 25°C?",
      "options": [
        "8.0",
        "7.0",
        "6.79",
        "2.0"
      ],
      "answerIndex": 2,
      "explanation": "Taking into account the self-ionization of water, total [H⁺] = 1.05 × 10⁻⁷ M, yielding pH = 6.79."
    }
  },
  {
    "id": "chem-ch06-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "pH of Weak Acids & Bases Formulas",
    "mnemonicNumber": 11,
    "title": "pH of Weak Acid: pH = ½ (pKa - log C) | Weak Base: pOH = ½ (pKb - log C)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Weak Acid Formula: Half of (pKa minus log Concentration)!",
    "memoryHook": "For weak acid HA: [H⁺] = √(Ka · C). Taking -log on both sides gives: pH = ½ [pKa - log C]! For weak base BOH: pOH = ½ [pKb - log C], and pH = 14 - pOH!",
    "fact": "Derivation for weak acid: [H⁺] = (Ka · C)^(1/2). -log[H⁺] = -½ log(Ka · C) = -½ [log Ka + log C] = ½ [-log Ka - log C] = ½ (pKa - log C). For weak base: pOH = ½ (pKb - log C). These formulas are valid whenever degree of dissociation α ≤ 0.05 (5%).",
    "breakdown": [
      {
        "key": "Weak Acid pH",
        "label": "pH = ½ (pKa - log C)"
      },
      {
        "key": "Weak Base pOH",
        "label": "pOH = ½ (pKb - log C)"
      },
      {
        "key": "Weak Base pH",
        "label": "pH = 14 - pOH = 14 - ½(pKb - log C)"
      }
    ],
    "doodleBadge": "pH = ½(pKa - log C)\npOH = ½(pKb - log C)",
    "doodleSubtext": "Weak Electrolyte Shortcut",
    "explanation": "Allows instantaneous pH calculations for acetic acid, formic acid, or ammonium hydroxide without setting up ICE equilibrium tables.",
    "alsoRemember": "As concentration C decreases by a factor of 100 (log C drops by 2), the pH of a weak acid increases by ONLY 1 unit (because of the ½ factor), whereas for a strong acid pH increases by 2 units.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.8.",
    "neetTrap": "Diluting a strong acid by 10-fold increases pH by 1. Diluting a weak acid by 10-fold increases pH by ONLY 0.5 units!",
    "tags": [
      "Weak Acid pH",
      "pKa",
      "Formulas",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the pH of a 0.1 M solution of acetic acid (CH3COOH) given that pKa = 4.74?",
      "options": [
        "4.74",
        "2.87",
        "1.00",
        "5.74"
      ],
      "answerIndex": 1,
      "explanation": "pH = ½(pKa - log C) = ½[4.74 - log(10⁻¹)] = ½[4.74 - (-1)] = ½(5.74) = 2.87."
    }
  },
  {
    "id": "chem-ch06-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "Common Ion Effect & Salt Hydrolysis",
    "mnemonicNumber": 12,
    "title": "Common Ion Effect: Adding a Common Ion Drives Weak Ionization Backward!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Crowding the Exit: Excess Product Ions Push the Weak Reaction Back to Start!",
    "memoryHook": "Adding strong salt CH3COONa to weak acetic acid CH3COOH floods the solution with CH3COO⁻, shifting equilibrium BACKWARD and slashing [H⁺] (pH goes up)! Adding NH4Cl to NH4OH suppresses [OH⁻] (used in Group III qualitative analysis)!",
    "fact": "The Common Ion Effect is a direct application of Le Chatelier’s principle in ionic equilibria: The suppression of the degree of dissociation of a weak electrolyte by the addition of a strong electrolyte containing a common ion. 1. Acetic Acid + Sodium Acetate: CH3COOH ⇌ CH3COO⁻ + H⁺. Added CH3COO⁻ pushes equilibrium to the left, decreasing [H⁺]. 2. Ammonium Hydroxide + Ammonium Chloride: NH4OH ⇌ NH4⁺ + OH⁻. Added NH4⁺ suppresses [OH⁻], ensuring only less-soluble Group III hydroxides (Fe³⁺, Al³⁺, Cr³⁺) precipitate while Group IV/V cations remain in solution.",
    "breakdown": [
      {
        "key": "Acidic Suppression",
        "label": "CH3COONa suppresses CH3COOH ionization → [H⁺] drops, pH rises"
      },
      {
        "key": "Basic Suppression",
        "label": "NH4Cl suppresses NH4OH ionization → [OH⁻] drops, preventing precipitation of Group IV cations"
      },
      {
        "key": "Solubility Suppression",
        "label": "Adding NaCl to saturated AgCl solution forces Ag⁺ to precipitate out as AgCl(s)"
      }
    ],
    "doodleBadge": "Common Ion:\nSuppresses Weak Dissociation\nGroup III vs Group IV",
    "doodleSubtext": "Qualitative Analysis Core",
    "explanation": "By strictly controlling the concentration of the common ion, analytical chemists selectively precipitate specific metal ions from complex mixtures.",
    "alsoRemember": "In salt purification: Passing HCl gas through saturated brine solution (NaCl) precipitates out pure NaCl crystals due to common ion effect of Cl⁻.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.9 & Practical Chemistry.",
    "neetTrap": "The common ion effect ONLY suppresses dissociation of WEAK electrolytes or sparingly soluble salts; it has no effect on fully dissociated strong electrolytes.",
    "tags": [
      "Common Ion Effect",
      "Qualitative Analysis",
      "Group III Cations",
      "Class 11"
    ],
    "quiz": {
      "question": "Why is NH4Cl added before NH4OH in the qualitative analysis of Group III basic radicals?",
      "options": [
        "To increase the concentration of OH⁻ ions",
        "To suppress the concentration of OH⁻ ions via common ion effect so only Group III hydroxides precipitate",
        "To oxidize Fe²⁺ to Fe³⁺",
        "To increase the solubility of Group III hydroxides"
      ],
      "answerIndex": 1,
      "explanation": "The common NH4⁺ ion suppresses the dissociation of weak base NH4OH, reducing [OH⁻] so that the solubility product (Ksp) of only Group III hydroxides is exceeded."
    }
  },
  {
    "id": "chem-ch06-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-3",
    "topicTitle": "Henderson-Hasselbalch Equation for Buffers",
    "mnemonicNumber": 13,
    "title": "Henderson-Hasselbalch Equation: pH = pKa + log([Salt] / [Acid])",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Salt on Top, Acid on Bottom! When Salt = Acid, pH = pKa Exactly!",
    "memoryHook": "Acidic Buffer (Weak Acid + Its Salt, e.g. CH3COOH + CH3COONa): pH = pKa + log([Conjugate Base] / [Acid]). Basic Buffer (Weak Base + Its Salt, e.g. NH4OH + NH4Cl): pOH = pKb + log([Conjugate Acid] / [Base]), and pH = 14 - pOH!",
    "fact": "Buffer Solutions resist changes in pH upon addition of small amounts of acid or base: 1. Acidic Buffer: Weak acid + salt with strong base (CH3COOH + CH3COONa). pH = pKa + log([Salt]/[Acid]). 2. Basic Buffer: Weak base + salt with strong acid (NH4OH + NH4Cl). pOH = pKb + log([Salt]/[Base]). 3. When [Salt] = [Acid], log(1) = 0, so pH = pKa. This is the condition of MAXIMUM BUFFER CAPACITY.",
    "breakdown": [
      {
        "key": "Acidic Buffer",
        "label": "pH = pKa + log([Salt] / [Acid])"
      },
      {
        "key": "Basic Buffer",
        "label": "pOH = pKb + log([Salt] / [Base]) → pH = 14 - pOH"
      },
      {
        "key": "Buffer Range",
        "label": "Effective working range is pH = pKa ± 1 (ratio of Salt to Acid between 0.1 and 10)"
      },
      {
        "key": "Blood Buffer",
        "label": "H2CO3 / HCO3⁻ maintains human blood pH tightly at 7.35 - 7.45"
      }
    ],
    "doodleBadge": "pH = pKa + log([Salt]/[Acid])\nMax Capacity at pH = pKa",
    "doodleSubtext": "Henderson-Hasselbalch",
    "explanation": "Adding strong acid H⁺ is neutralized by the conjugate base (salt), while adding strong base OH⁻ is neutralized by the weak acid, keeping pH virtually constant.",
    "alsoRemember": "Diluting a buffer solution with water does NOT change its pH because both [Salt] and [Acid] are diluted by the exact same volume factor (ratio [Salt]/[Acid] remains identical).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.10.",
    "neetTrap": "Diluting a buffer solution with pure water does NOT change its pH! (Though it does decrease its total buffer capacity).",
    "tags": [
      "Buffer Solution",
      "Henderson Hasselbalch",
      "Blood pH",
      "High Yield"
    ],
    "quiz": {
      "question": "What is the pH of an acidic buffer solution containing equimolar amounts of acetic acid and sodium acetate (pKa of acetic acid = 4.74)?",
      "options": [
        "7.00",
        "4.74",
        "5.74",
        "3.74"
      ],
      "answerIndex": 1,
      "explanation": "When [Salt] = [Acid], the ratio is 1 and log(1) = 0. Therefore pH = pKa = 4.74."
    }
  },
  {
    "id": "chem-ch06-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "Salt Hydrolysis Master Formulas (All 4 Types)",
    "mnemonicNumber": 14,
    "title": "Salt Hydrolysis Master Quad: SA+SB (7), WA+SB (>7), SA+WB (<7), WA+WB (Indep of C!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "hard",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Plus Sign for Basic (>7), Minus Sign for Acidic (<7)! WA+WB Has NO Concentration Term!",
    "memoryHook": "The 4 Salt Types: 1) SA + SB (NaCl): pH = 7 (no hydrolysis). 2) WA + SB (CH3COONa): pH = 7 + ½ pKa + ½ log C (Basic > 7). 3) SA + WB (NH4Cl): pH = 7 - ½ pKb - ½ log C (Acidic < 7). 4) WA + WB (CH3COONH4): pH = 7 + ½ pKa - ½ pKb (INDEPENDENT OF C)!",
    "fact": "Salt Hydrolysis Formulas: 1. Strong Acid + Strong Base (NaCl, KNO3): Neither ion hydrolyzes. pH = 7.0 (neutral). 2. Weak Acid + Strong Base (CH3COONa, KCN): Anionic hydrolysis: A⁻ + H2O ⇌ HA + OH⁻. Basic solution. Kh = Kw / Ka, h = √(Kh / C), pH = 7 + ½ pKa + ½ log C. 3. Strong Acid + Weak Base (NH4Cl, FeSO4): Cationic hydrolysis: B⁺ + H2O ⇌ BOH + H⁺. Acidic solution. Kh = Kw / Kb, h = √(Kh / C), pH = 7 - ½ pKb - ½ log C. 4. Weak Acid + Weak Base (CH3COONH4): Both ions hydrolyze. Kh = Kw / (Ka · Kb), h = √Kh. pH = 7 + ½ pKa - ½ pKb (Remarkable: completely independent of concentration C!).",
    "breakdown": [
      {
        "key": "SA + SB (NaCl)",
        "label": "pH = 7 (Neutral, no hydrolysis occurs)"
      },
      {
        "key": "WA + SB (CH3COONa)",
        "label": "pH = 7 + ½ pKa + ½ log C (Alkaline, pH > 7)"
      },
      {
        "key": "SA + WB (NH4Cl)",
        "label": "pH = 7 - ½ pKb - ½ log C (Acidic, pH < 7)"
      },
      {
        "key": "WA + WB (CH3COONH4)",
        "label": "pH = 7 + ½ pKa - ½ pKb (Independent of concentration C!)"
      }
    ],
    "doodleBadge": "WA+SB: pH = 7 + ½pKa + ½log C\nSA+WB: pH = 7 - ½pKb - ½log C\nWA+WB: No C term!",
    "doodleSubtext": "Hydrolysis Master Quad",
    "explanation": "The sign in front of the ½ terms tells the story: weak acid + strong base is alkaline, so it uses +½; strong acid + weak base is acidic, so it uses -½.",
    "alsoRemember": "For ammonium acetate (CH3COONH4), pKa of acetic acid (4.76) ≈ pKb of ammonia (4.75), so pH = 7 + ½(4.76 - 4.75) ≈ 7.0 (almost neutral).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.11.",
    "neetTrap": "The pH of a salt of weak acid and weak base (e.g. CH3COONH4) is INDEPENDENT of salt concentration C! Diluting it does not shift its pH.",
    "tags": [
      "Salt Hydrolysis",
      "pH Formulas",
      "Kh",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following salts produces an aqueous solution whose pH is completely independent of the salt concentration?",
      "options": [
        "Sodium chloride (NaCl)",
        "Sodium acetate (CH3COONa)",
        "Ammonium chloride (NH4Cl)",
        "Ammonium acetate (CH3COONH4)"
      ],
      "answerIndex": 3,
      "explanation": "Ammonium acetate is a salt of a weak acid and a weak base; its hydrolysis formula pH = 7 + ½ pKa - ½ pKb contains no concentration (C) term."
    }
  },
  {
    "id": "chem-ch06-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-3",
    "topicTitle": "Solubility Product (Ksp) & Precipitation Condition",
    "mnemonicNumber": 15,
    "title": "Precipitation Criterion: Ionic Product (IP) vs Solubility Product (Ksp)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "IP < Ksp: Thirsty (Unsaturated) | IP = Ksp: Full (Saturated) | IP > Ksp: Overflow (PRECIPITATION)!",
    "memoryHook": "Ionic Product (IP or Qsp) uses current concentrations. If IP < Ksp: More solute can dissolve (Unsaturated). If IP = Ksp: Exactly saturated (Dynamic equilibrium). If IP > Ksp: Solution is super-saturated and PRECIPITATION MUST OCCUR!",
    "fact": "For a sparingly soluble salt AxBy(s) ⇌ x Aʸ⁺(aq) + y Bˣ⁻(aq): 1. Ksp = [Aʸ⁺]^x [Bˣ⁻]^y at saturation. 2. Ionic Product (Qsp or IP) = [Aʸ⁺]^x [Bˣ⁻]^y at any instantaneous moment. 3. Conditions: IP < Ksp → No precipitate forms (solution is unsaturated). IP = Ksp → Saturated solution at equilibrium. IP > Ksp → Precipitation occurs until IP drops back to equal Ksp.",
    "breakdown": [
      {
        "key": "IP < Ksp",
        "label": "Unsaturated solution: no precipitate, more salt can dissolve"
      },
      {
        "key": "IP = Ksp",
        "label": "Saturated solution: in dynamic equilibrium with undissolved solid"
      },
      {
        "key": "IP > Ksp",
        "label": "Super-saturated solution: PRECIPITATION OCCURS!"
      }
    ],
    "doodleBadge": "IP > Ksp → Precipitate!\nIP = Ksp → Saturated\nIP < Ksp → Dissolves",
    "doodleSubtext": "Precipitation Threshold",
    "explanation": "Precipitation continues until the concentrations of ions in solution decrease such that their product exactly equals Ksp.",
    "alsoRemember": "Ksp depends solely on TEMPERATURE, just like any other equilibrium constant.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.12.",
    "neetTrap": "When mixing two solutions to test for precipitation, REMEMBER TO DOUBLE THE VOLUME and HALVE the initial concentrations before calculating IP!",
    "tags": [
      "Solubility Product",
      "Ksp",
      "Precipitation",
      "Ionic Product"
    ],
    "quiz": {
      "question": "Equal volumes of 0.002 M Ag⁺ and 0.002 M Cl⁻ solutions are mixed at 25°C. Given Ksp(AgCl) = 1.8 × 10⁻¹⁰, will a precipitate form?",
      "options": [
        "No, because IP < Ksp",
        "Yes, because IP = 1.0 × 10⁻⁶ which is greater than Ksp",
        "No, because volume cancels out",
        "Yes, because IP equals Ksp"
      ],
      "answerIndex": 1,
      "explanation": "Mixing equal volumes halves the concentrations: [Ag⁺] = 0.001 M, [Cl⁻] = 0.001 M. IP = (10⁻³)(10⁻³) = 10⁻⁶. Since 10⁻⁶ > 1.8 × 10⁻¹⁰, precipitation occurs."
    }
  },
  {
    "id": "chem-ch06-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-3",
    "topicTitle": "Ksp to Solubility (s) Formula Staircase",
    "mnemonicNumber": 16,
    "title": "Ksp to Solubility Formulas: AB (s²), AB2 (4s³), AB3 (27s⁴), A2B3 (108s⁵)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "xˣ · yʸ · s^(x+y)! 1, 4, 27, 108: The Magic Salt Multipliers!",
    "memoryHook": "Universal formula for salt AxBy: Ksp = xˣ · yʸ · s^(x+y)! 1) AB (AgCl): Ksp = s² → s = √Ksp. 2) AB2 or A2B (PbCl2, Ag2CrO4): Ksp = 4s³ → s = (Ksp/4)^(1/3). 3) AB3 (Al(OH)3): Ksp = 27s⁴. 4) A2B3 (As2S3, Ca3(PO4)2): Ksp = 108s⁵!",
    "fact": "General formula derivation for AxBy ⇌ x Aʸ⁺ + y Bˣ⁻: At saturation, [Aʸ⁺] = xs, [Bˣ⁻] = ys. Ksp = (xs)ˣ · (ys)ʸ = xˣ · yʸ · s^(x+y). 1. AB type (1:1 salt, e.g. AgCl, BaSO4): Ksp = s² → s = √Ksp. 2. AB2 or A2B type (1:2 or 2:1 salt, e.g. Mg(OH)2, Ag2CrO4): Ksp = 4s³ → s = (Ksp / 4)^(1/3). 3. AB3 type (1:3 salt, e.g. Fe(OH)3): Ksp = 27s⁴ → s = (Ksp / 27)^(1/4). 4. A2B3 or A3B2 type (2:3 or 3:2 salt, e.g. Ca3(PO4)2): Ksp = (3³)(2²) s⁵ = 108s⁵ → s = (Ksp / 108)^(1/5).",
    "breakdown": [
      {
        "key": "AB Type (AgCl)",
        "label": "Ksp = s² → s = √Ksp"
      },
      {
        "key": "AB2 / A2B Type (PbCl2, Ag2CrO4)",
        "label": "Ksp = 4s³ → s = (Ksp / 4)^(1/3)"
      },
      {
        "key": "AB3 Type (Al(OH)3)",
        "label": "Ksp = 27s⁴ → s = (Ksp / 27)^(1/4)"
      },
      {
        "key": "A3B2 Type (Ca3(PO4)2)",
        "label": "Ksp = 108s⁵ → s = (Ksp / 108)^(1/5)"
      }
    ],
    "doodleBadge": "Ksp = xˣ · yʸ · s^(x+y)\n1 · s² | 4 · s³ | 27 · s⁴ | 108 · s⁵",
    "doodleSubtext": "Magic Salt Multipliers",
    "explanation": "Do not compare the solubility of two salts simply by looking at their Ksp values unless they have the exact same stoichiometry (same x and y). Calculate molar solubility (s) first!",
    "alsoRemember": "Units of solubility s are mol/L. To convert to g/L, multiply molar solubility s by the molar mass (M) of the salt: S(g/L) = s(mol/L) × M.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.12.1.",
    "neetTrap": "Ag2CrO4 has smaller Ksp (1.1 × 10⁻¹²) than AgCl (1.8 × 10⁻¹⁰), yet Ag2CrO4 is MORE soluble than AgCl because its formula is Ksp = 4s³!",
    "tags": [
      "Solubility",
      "Ksp Formulas",
      "AgCl",
      "Ag2CrO4"
    ],
    "quiz": {
      "question": "What is the relationship between the solubility product (Ksp) and molar solubility (s) of Calcium phosphate, Ca3(PO4)2?",
      "options": [
        "Ksp = 6s⁵",
        "Ksp = 108s⁵",
        "Ksp = 27s⁴",
        "Ksp = 4s³"
      ],
      "answerIndex": 1,
      "explanation": "For Ca3(PO4)2, x=3 and y=2: Ksp = 3³ · 2² · s^(3+2) = 27 · 4 · s⁵ = 108s⁵."
    }
  },
  {
    "id": "chem-ch06-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-3",
    "topicTitle": "Common Ion Effect on Salt Solubility",
    "mnemonicNumber": 17,
    "title": "Common Ion Cuts Solubility: AgCl Dissolves Far Less in NaCl Than in Pure Water!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "The Common Ion Steals the Stage: s’ = Ksp / C_common!",
    "memoryHook": "In pure water, AgCl has solubility s = √Ksp = 10⁻⁵ M. In 0.1 M NaCl solution, Cl⁻ is already 0.1 M from the strong salt! New solubility of Ag⁺ is s’ = Ksp / [Cl⁻] = 10⁻¹⁰ / 0.1 = 10⁻⁹ M (solubility dropped 10,000 times)!",
    "fact": "Solubility of a sparingly soluble salt in the presence of a common ion: For AgCl in C molar NaCl: [Cl⁻]_total = s’ + C ≈ C (since s’ << C). Ksp = [Ag⁺][Cl⁻] = (s’)(C). New solubility s’ = Ksp / C. The presence of a common ion dramatically suppresses the solubility of the sparingly soluble salt.",
    "breakdown": [
      {
        "key": "Pure Water",
        "label": "s = √Ksp = √(10⁻¹⁰) = 1.0 × 10⁻⁵ mol/L"
      },
      {
        "key": "In 0.1 M NaCl",
        "label": "s’ = Ksp / 0.1 = 1.0 × 10⁻⁹ mol/L (10,000-fold reduction!)"
      },
      {
        "key": "Salting Out",
        "label": "Used in organic chemistry to precipitate soap (sodium stearate) by adding brine (NaCl)"
      }
    ],
    "doodleBadge": "s_common = Ksp / C\nDrops 10,000× in 0.1 M NaCl",
    "doodleSubtext": "Common Ion Repression",
    "explanation": "Because [Cl⁻] is already flooded by the fully dissociated strong electrolyte NaCl, the Le Chatelier shift forces almost all Ag⁺ out of solution as solid AgCl.",
    "alsoRemember": "Solubility of AgCl INCREASES in aqueous ammonia NH3 due to complex formation: Ag⁺ + 2NH3 ⇌ [Ag(NH3)2]⁺.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.12.2.",
    "neetTrap": "Although NaCl decreases AgCl solubility via common ion effect, complexing agents (like NH3 or excess cyanide) INCREASE its solubility by consuming free Ag⁺!",
    "tags": [
      "Common Ion",
      "Solubility Suppression",
      "AgCl in NaCl",
      "Salting Out"
    ],
    "quiz": {
      "question": "What is the solubility of AgCl (Ksp = 1.0 × 10⁻¹⁰) in a 0.01 M CaCl2 solution?",
      "options": [
        "1.0 × 10⁻⁸ M",
        "5.0 × 10⁻⁹ M",
        "1.0 × 10⁻⁵ M",
        "2.0 × 10⁻⁸ M"
      ],
      "answerIndex": 1,
      "explanation": "CaCl2 yields [Cl⁻] = 2 × 0.01 = 0.02 M. Solubility of AgCl is s’ = Ksp / [Cl⁻] = (1.0 × 10⁻¹⁰) / 0.02 = 5.0 × 10⁻⁹ M."
    }
  },
  {
    "id": "chem-ch06-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-3",
    "topicTitle": "Acid-Base Indicators & Color Transitions",
    "mnemonicNumber": 18,
    "title": "Acid-Base Indicators: Phenolphthalein (8.3 - 10.0 Pink) vs Methyl Orange (3.1 - 4.4 Yellow)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Phenolphthalein Loves Base (Colorless in Acid → Bright Pink in Base)! Methyl Orange is Red in Acid → Yellow in Base!",
    "memoryHook": "Indicator pH working range: pH = pKIn ± 1. Phenolphthalein changes from colorless to pink between pH 8.3 and 10.0 (ideal for Strong Base titrations). Methyl Orange changes from red to yellow between pH 3.1 and 4.4 (ideal for Strong Acid titrations)!",
    "fact": "Acid-base indicators are weak organic acids (HIn) or weak bases whose ionized and unionized forms have distinctly different colors: HIn ⇌ H⁺ + In⁻. Henderson equation for indicator: pH = pKIn + log([In⁻]/[HIn]). 1. Phenolphthalein: Working range 8.3 - 10.0. Colorless in acid, bright pink in alkali. Used for Strong Acid vs Strong Base, and Weak Acid vs Strong Base titrations. 2. Methyl Orange: Working range 3.1 - 4.4. Red in acid, yellow in alkali. Used for Strong Acid vs Weak Base titrations.",
    "breakdown": [
      {
        "key": "Strong Acid vs Strong Base",
        "label": "Vertical pH jump is huge (pH 3 to 11): BOTH Phenolphthalein and Methyl Orange work!"
      },
      {
        "key": "Weak Acid vs Strong Base",
        "label": "Equivalence point pH > 7: ONLY Phenolphthalein works (Methyl Orange fails)"
      },
      {
        "key": "Strong Acid vs Weak Base",
        "label": "Equivalence point pH < 7: ONLY Methyl Orange works (Phenolphthalein fails)"
      },
      {
        "key": "Weak Acid vs Weak Base",
        "label": "No sharp pH jump: NO simple visual indicator works!"
      }
    ],
    "doodleBadge": "Phenolphthalein: 8.3-10 (Pink)\nMethyl Orange: 3.1-4.4 (Yellow)",
    "doodleSubtext": "Titration Indicators",
    "explanation": "The indicator chosen must have its pH transition range fall entirely within the steep vertical equivalence pH inflection jump of the titration curve.",
    "alsoRemember": "Human eye requires one colored form to be at least 10 times more concentrated than the other to perceive a distinct color transition (hence the ±1 pH unit range).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7 & Practical Chemistry Titrations.",
    "neetTrap": "For titrating acetic acid (weak acid) against NaOH (strong base), Methyl Orange CANNOT be used because its transition range (3.1 - 4.4) is completed long before equivalence is reached!",
    "tags": [
      "Indicators",
      "Phenolphthalein",
      "Methyl Orange",
      "Titrations"
    ],
    "quiz": {
      "question": "Which indicator is best suited for the titration of a weak acid (like oxalic acid) against a strong base (like NaOH)?",
      "options": [
        "Methyl orange",
        "Methyl red",
        "Phenolphthalein",
        "Bromocresol green"
      ],
      "answerIndex": 2,
      "explanation": "At the equivalence point of a weak acid and strong base, the solution is basic (pH > 7) due to salt hydrolysis, which matches the transition range of phenolphthalein (8.3 - 10.0)."
    }
  },
  {
    "id": "chem-ch06-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-2",
    "topicTitle": "Polyprotic Acid Dissociation Constants: Ka1 >> Ka2 >> Ka3",
    "mnemonicNumber": 19,
    "title": "Polyprotic Acids: Ka1 >> Ka2 >> Ka3 (Pulling Protons from Negative Ions is Tough!)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "First Proton Leaves Easily (Neutral Molecule)! Second Proton Struggles Against Negative Charge!",
    "memoryHook": "In H3PO4: Ka1 (~10⁻²) >> Ka2 (~10⁻⁸) >> Ka3 (~10⁻¹³)! It is vastly more difficult to rip a positive proton (H⁺) away from a negatively charged anion (H2PO4⁻ or HPO4²⁻) due to electrostatic attraction!",
    "fact": "For polyprotic acids (H2SO4, H3PO4, H2CO3): Ka1 >> Ka2 >> Ka3 (each step is typically 10⁴ to 10⁶ times smaller). 1. Major consequence: Total [H⁺] in solution is determined almost entirely by the FIRST dissociation step (Ka1). 2. For any weak diprotic acid H2A: The concentration of the divalent anion [A²⁻] at equilibrium is approximately EQUAL TO Ka2, independent of initial acid concentration C!",
    "breakdown": [
      {
        "key": "Ka Hierarchy",
        "label": "Ka1 >> Ka2 >> Ka3 (Electrostatic attraction holds H⁺ tighter to negative ions)"
      },
      {
        "key": "Hydrogen Ion Source",
        "label": "Over 99.9% of all H⁺ in solution originates from step 1"
      },
      {
        "key": "Golden Shortcut",
        "label": "For H2A: [A²⁻] ≈ Ka2 (e.g. in 0.1 M H2S, [S²⁻] ≈ Ka2 = 10⁻¹⁴ M)"
      }
    ],
    "doodleBadge": "Ka1 >> Ka2 >> Ka3\nFor H2A: [A²⁻] ≈ Ka2",
    "doodleSubtext": "Polyprotic Stepwise Dissociation",
    "explanation": "Each successive dissociation leaves the remaining conjugate base with an additional negative charge, creating stronger Coulombic binding that resists further proton loss.",
    "alsoRemember": "H2SO4 is a strong acid for its first step (Ka1 is very large, 100% dissociated), but its second step has Ka2 = 1.2 × 10⁻² (acts as a weak acid!).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7, Section 7.8.2.",
    "neetTrap": "In a 0.1 M solution of weak diprotic acid H2S, [S²⁻] does NOT depend on 0.1 M; it is simply equal to Ka2!",
    "tags": [
      "Polyprotic Acid",
      "Ka1 and Ka2",
      "Diprotic Acid",
      "Class 11"
    ],
    "quiz": {
      "question": "In an aqueous solution of a weak diprotic acid H2A with Ka1 = 10⁻⁴ and Ka2 = 10⁻¹⁰, what is the approximate concentration of the divalent anion [A²⁻]?",
      "options": [
        "10⁻⁴ M",
        "10⁻¹⁰ M",
        "10⁻⁷ M",
        "10⁻¹⁴ M"
      ],
      "answerIndex": 1,
      "explanation": "For a weak diprotic acid where Ka1 >> Ka2, the concentration of the divalent anion [A²⁻] is approximately equal to Ka2, which is 10⁻¹⁰ M."
    }
  },
  {
    "id": "chem-ch06-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-06",
    "chapterNumber": 6,
    "chapterTitle": "Equilibrium (Chemical & Ionic)",
    "topicId": "chem-top-6-3",
    "topicTitle": "Equilibrium Master Summary Map",
    "mnemonicNumber": 20,
    "title": "Equilibrium Master Map: Chemical (Kp, Le Chatelier) to Ionic (pH, Buffer, Ksp)",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Chemical Balance (Kp = Kc(RT)^Δng) ↔ Ionic Balance (pH + pOH = 14, Buffer, Ksp)!",
    "memoryHook": "The entire chapter in two halves: Chemical Equilibrium governs gas reactions via Kp and Le Chatelier; Ionic Equilibrium governs aqueous solutions via Ostwald dilution, Henderson buffer equations, Salt hydrolysis, and Ksp precipitation!",
    "fact": "Master Blueprint of Chapter 7: 1. Chemical Equilibrium: Kp = Kc(RT)^Δng, Q vs K, Le Chatelier’s rules (P, T, V, inert gas). 2. Weak Electrolyte Dissociation: α = √(Ka/C), [H⁺] = √(Ka·C). 3. Water & pH: Kw = 10⁻¹⁴, pH = -log[H⁺]. 4. Buffers: pH = pKa + log([Salt]/[Acid]). 5. Hydrolysis: 4 salt formulas. 6. Precipitation: IP > Ksp triggers precipitation; Ksp = xˣ·yʸ·s^(x+y).",
    "breakdown": [
      {
        "key": "Chemical Half",
        "label": "Dynamic rates equal, Kp = Kc(RT)^Δng, Le Chatelier stress response"
      },
      {
        "key": "Ionic Half",
        "label": "Proton transfer, pH scale, Henderson buffer equation, Ksp solubility limit"
      },
      {
        "key": "Universal Core",
        "label": "All equilibrium constants K depend ONLY on temperature!"
      }
    ],
    "doodleBadge": "Chemical: Kp = Kc(RT)^Δng\nIonic: pH, Buffer, Ksp",
    "doodleSubtext": "Chapter 6 & 7 Master Blueprint",
    "explanation": "Whether gas molecules in a reactor or dissolved ions in a beaker, dynamic equilibrium represents the minimum Gibbs free energy state of the system.",
    "alsoRemember": "Never forget to verify temperature when working with Kw and Ksp problems.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 7.",
    "neetTrap": "All equilibrium constants (Kp, Kc, Ka, Kb, Kw, Kh, Ksp) are strictly constants at a FIXED temperature.",
    "tags": [
      "Equilibrium",
      "Master Map",
      "Chemical and Ionic",
      "Class 11"
    ],
    "quiz": {
      "question": "Which statement is universally true for both chemical and ionic equilibria?",
      "options": [
        "Concentrations of reactants and products must be equal",
        "The equilibrium constant can only be altered by changing temperature",
        "A catalyst changes the equilibrium composition",
        "Pressure changes affect all equilibria equally"
      ],
      "answerIndex": 1,
      "explanation": "For all chemical and ionic equilibrium systems, the equilibrium constant is a thermodynamic constant whose numerical value depends exclusively on temperature."
    }
  }
];
