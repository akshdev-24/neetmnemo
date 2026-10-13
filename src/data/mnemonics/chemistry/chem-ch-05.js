export const chemCh05Mnemonics = [
  {
    "id": "chem-ch05-01",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "State Functions vs Path Functions",
    "mnemonicNumber": 1,
    "title": "State vs Path Functions: Only Heat (q) and Work (w) Walk the Path!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Only q & w Care About the Road; H, U, G, S Only Care Where You Land!",
    "memoryHook": "Path functions depend on HOW you travel: heat (q) and work (w). State functions depend ONLY on the initial and final destinations: Internal Energy (U), Enthalpy (H), Entropy (S), Gibbs energy (G), Pressure (P), Volume (V), and Temperature (T)!",
    "fact": "1. State Functions: Values depend only on the current state of the system, not on how that state was reached. Cyclic integral ∮ dX = 0 (ΔU_cycle = 0, ΔH_cycle = 0). 2. Path Functions: Values depend on the path taken between states. Heat (q) and work (w) are not state functions, though their sum (q + w = ΔU) IS a state function.",
    "breakdown": [
      {
        "key": "Path Functions",
        "label": "Heat (q) and Work (w) — inexact differentials, depend on route"
      },
      {
        "key": "State Functions",
        "label": "P, V, T, U, H, S, G — exact differentials, ΔX = X_final - X_initial"
      },
      {
        "key": "Cyclic Process",
        "label": "In any closed loop cycle: ΔU = 0, ΔH = 0, ΔS = 0, ΔG = 0, but q ≠ 0 and w ≠ 0"
      }
    ],
    "doodleBadge": "Path: q & w\nState: P, V, T, U, H, S, G",
    "doodleSubtext": "∮ dX = 0 for State",
    "explanation": "Like climbing a mountain: your elevation gain (Δh) is a state function regardless of the trail, but the footsteps taken and energy spent (work/heat) depend on the exact trail chosen.",
    "alsoRemember": "Internal energy U and enthalpy H cannot be measured in absolute values; only changes (ΔU, ΔH) are physically meaningful.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.1.3.",
    "neetTrap": "Heat (q) and Work (w) are path functions, but their sum (q + w = ΔU) is a STATE FUNCTION!",
    "tags": [
      "Thermodynamics",
      "State Function",
      "Path Function",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following thermodynamic quantities is a path function?",
      "options": [
        "Internal energy (U)",
        "Enthalpy (H)",
        "Work (w)",
        "Entropy (S)"
      ],
      "answerIndex": 2,
      "explanation": "Work (w) and heat (q) depend on the pathway taken and are path functions, whereas U, H, and S are state functions."
    }
  },
  {
    "id": "chem-ch05-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "First Law of Thermodynamics & Sign Convention",
    "mnemonicNumber": 2,
    "title": "First Law in Chemistry: ΔU = q + w (Gains are Positive, Losses are Negative)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "System Gets Rich = (+); System Loses Money = (-)!",
    "memoryHook": "First Law: ΔU = q + w. Heat into system: +q; Heat leaving system: -q; Work done ON system (compression): +w; Work done BY system (expansion): -w!",
    "fact": "IUPAC Chemistry Convention: 1. Heat absorbed by the system: q > 0 (+). 2. Heat released to surroundings: q < 0 (-). 3. Work done ON the system (compression): w > 0 (+). 4. Work done BY the system (expansion): w < 0 (-). Mathematical statement of First Law: ΔU = q + w.",
    "breakdown": [
      {
        "key": "Heat In (+q)",
        "label": "Endothermic heat absorption increases internal energy"
      },
      {
        "key": "Heat Out (-q)",
        "label": "Exothermic heat release decreases internal energy"
      },
      {
        "key": "Compression (+w)",
        "label": "External force pushes inward on piston, adding energy to system (w = -Pext ΔV > 0)"
      },
      {
        "key": "Expansion (-w)",
        "label": "Gas pushes piston outward against surroundings, spending internal energy (w = -Pext ΔV < 0)"
      }
    ],
    "doodleBadge": "ΔU = q + w\nIn = + | Out = -",
    "doodleSubtext": "IUPAC Sign Convention",
    "explanation": "The IUPAC chemistry convention treats the system like a bank account: whatever deposits into the system is positive, whatever withdraws is negative.",
    "alsoRemember": "In Physics, First Law is often written dQ = dU + dW (where work done BY gas is defined as positive dW). In Chemistry, work is ALWAYS w = -Pext ΔV.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.2.",
    "neetTrap": "In Chemistry expansion work is NEGATIVE (-w), whereas in Physics textbooks expansion work is written as positive (+W). Never mix the two!",
    "tags": [
      "First Law",
      "Sign Convention",
      "Thermodynamics",
      "IUPAC"
    ],
    "quiz": {
      "question": "A system absorbs 500 J of heat and does 200 J of work on its surroundings. What is the change in internal energy (ΔU) of the system?",
      "options": [
        "+700 J",
        "+300 J",
        "-300 J",
        "-700 J"
      ],
      "answerIndex": 1,
      "explanation": "Heat absorbed q = +500 J; work done by the system w = -200 J. ΔU = q + w = 500 - 200 = +300 J."
    }
  },
  {
    "id": "chem-ch05-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "Reversible Isothermal Work Formula",
    "mnemonicNumber": 3,
    "title": "Reversible Isothermal Work: w = -2.303 nRT log(V2/V1) (Maximum Work!)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Reversible is Slow & Gentle → Gives MAXIMUM Work Output!",
    "memoryHook": "Formula: w_rev = -2.303 nRT log(V2 / V1) = -2.303 nRT log(P1 / P2). For expansion (V2 > V1), log is positive so w is negative (maximum work done BY system)!",
    "fact": "Reversible isothermal expansion of ideal gas: 1. Since temperature is constant, ΔU = 0, so q_rev = -w_rev. 2. w_rev = -∫ P dV = -nRT ln(V2/V1) = -2.303 nRT log10(V2/V1). 3. By Boyle’s law (P1V1 = P2V2), w_rev = -2.303 nRT log10(P1/P2). 4. Reversible work is always GREATER in magnitude than irreversible work (|w_rev| > |w_irrev|).",
    "breakdown": [
      {
        "key": "w_rev (Volume)",
        "label": "w = -2.303 nRT log(V2/V1)"
      },
      {
        "key": "w_rev (Pressure)",
        "label": "w = -2.303 nRT log(P1/P2) — note numerator is P1!"
      },
      {
        "key": "Isothermal ΔU",
        "label": "For ideal gas at constant T: ΔU = 0, ΔH = 0, so q = -w"
      }
    ],
    "doodleBadge": "w_rev = -2.303 nRT log(V2/V1)\n|w_rev| > |w_irrev|",
    "doodleSubtext": "Maximum Work",
    "explanation": "In reversible expansion, driving pressure and opposing pressure differ by only an infinitesimal amount dP, preventing any wasteful dissipated energy.",
    "alsoRemember": "In irreversible single-step expansion against constant Pext: w = -Pext (V2 - V1).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.2.2.",
    "neetTrap": "When expressing work in terms of pressure, it is log(P1/P2), NOT log(P2/P1). Flip the pressures because pressure is inversely proportional to volume!",
    "tags": [
      "Isothermal Work",
      "Reversible",
      "Thermodynamics",
      "Formulas"
    ],
    "quiz": {
      "question": "During reversible isothermal expansion of an ideal gas at 300 K from 10 L to 100 L, what is the value of ΔU?",
      "options": [
        "Positive",
        "Negative",
        "Zero",
        "Depends on gas identity"
      ],
      "answerIndex": 2,
      "explanation": "Internal energy of an ideal gas depends solely on temperature (ΔU = nCv ΔT). Since the process is isothermal (ΔT = 0), ΔU = 0."
    }
  },
  {
    "id": "chem-ch05-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "Intensive vs Extensive Properties",
    "mnemonicNumber": 4,
    "title": "Intensive vs Extensive: Cut the Room in Half Test!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Drop a Wall in the Room: If it Stays Same = Intensive; If it Halves = Extensive!",
    "memoryHook": "If you divide a room in half: Temperature, Pressure, Density, and Boiling point stay the SAME (Intensive!). Mass, Volume, Internal energy, Enthalpy, and Heat capacity become HALF (Extensive!)",
    "fact": "1. Intensive Properties: Independent of the quantity of matter present (Temperature, Pressure, Density, Boiling point, Melting point, Viscosity, Surface tension, Refractive index, pH, Molar heat capacity, Specific heat capacity, EMF of a cell E°). 2. Extensive Properties: Directly proportional to sample size (Mass, Volume, Internal energy U, Enthalpy H, Entropy S, Gibbs free energy G, Heat capacity C). 3. Ratio of two extensive properties is always INTENSIVE (Density = Mass / Volume; Molarity = Moles / Volume).",
    "breakdown": [
      {
        "key": "Intensive (Independent)",
        "label": "T, P, density, pH, E°cell, molar heat capacity Cm"
      },
      {
        "key": "Extensive (Additive)",
        "label": "Mass m, Volume V, U, H, S, G, total heat capacity C"
      },
      {
        "key": "Magic Ratio",
        "label": "Extensive ÷ Extensive = Intensive (e.g. Mass/Volume = Density)"
      }
    ],
    "doodleBadge": "Cut in half:\nSame = Intensive | Halved = Extensive",
    "doodleSubtext": "Room Divider Test",
    "explanation": "Heat capacity (C) is extensive (a swimming pool stores more heat than a teacup), but SPECIFIC heat capacity (c) and MOLAR heat capacity (Cm) are intensive material constants.",
    "alsoRemember": "Cell potential E°cell is intensive, but Gibbs free energy ΔG° = -nFE°cell is extensive because it depends on the number of moles n.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.1.4.",
    "neetTrap": "Heat capacity C is EXTENSIVE, but Specific heat capacity and Molar heat capacity are INTENSIVE.",
    "tags": [
      "Intensive",
      "Extensive",
      "Properties",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following is an intensive property?",
      "options": [
        "Enthalpy (H)",
        "Entropy (S)",
        "Molar heat capacity (Cm)",
        "Heat capacity (C)"
      ],
      "answerIndex": 2,
      "explanation": "Molar heat capacity specifies heat capacity per mole of substance, making it independent of total sample size and thus an intensive property."
    }
  },
  {
    "id": "chem-ch05-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-3",
    "topicTitle": "Enthalpy & Internal Energy Relation: ΔH = ΔU + Δng RT",
    "mnemonicNumber": 5,
    "title": "Enthalpy vs Internal Energy: ΔH = ΔU + Δng RT (Count Only Gaseous Moles!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Δng = (Gas Moles of Products) - (Gas Moles of Reactants) | IGNORE Solids & Liquids!",
    "memoryHook": "Formula: ΔH = ΔU + Δng RT. If Δng > 0, ΔH > ΔU! If Δng = 0, ΔH = ΔU! If Δng < 0, ΔH < ΔU! Count ONLY GASES!",
    "fact": "From definition H = U + PV: For chemical reactions involving gases, ΔH = ΔU + Δ(PV) = ΔU + Δng RT (assuming ideal gas behavior). Δng = Σ n_gas(products) - Σ n_gas(reactants). Solids and liquids have negligible molar volumes compared to gases, so their stoichiometric coefficients are excluded from Δng.",
    "breakdown": [
      {
        "key": "Δng > 0 (e.g. PCl5(g) → PCl3(g) + Cl2(g))",
        "label": "Δng = 2 - 1 = +1 → ΔH > ΔU"
      },
      {
        "key": "Δng = 0 (e.g. H2(g) + I2(g) → 2HI(g))",
        "label": "Δng = 2 - 2 = 0 → ΔH = ΔU"
      },
      {
        "key": "Δng < 0 (e.g. N2(g) + 3H2(g) → 2NH3(g))",
        "label": "Δng = 2 - 4 = -2 → ΔH < ΔU"
      }
    ],
    "doodleBadge": "ΔH = ΔU + Δng RT\nOnly Gaseous Moles Count!",
    "doodleSubtext": "Gas Expansion Work",
    "explanation": "The difference ΔH - ΔU represents the expansion work done against atmospheric pressure by newly generated gas moles: P ΔV = Δng RT.",
    "alsoRemember": "For bomb calorimeter experiments (constant volume, ΔV = 0), heat measured is qv = ΔU. For coffee-cup calorimeter (constant pressure), heat measured is qp = ΔH.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.3.",
    "neetTrap": "In the combustion of carbon C(s) + O2(g) → CO2(g), Δng = 1 - 1 = 0 (do NOT include solid carbon), so ΔH = ΔU!",
    "tags": [
      "Enthalpy",
      "Internal Energy",
      "Δng",
      "Class 11"
    ],
    "quiz": {
      "question": "For the reaction C(s) + O2(g) → CO2(g), what is the relationship between ΔH and ΔU at constant temperature?",
      "options": [
        "ΔH > ΔU",
        "ΔH < ΔU",
        "ΔH = ΔU",
        "ΔH = ΔU + RT"
      ],
      "answerIndex": 2,
      "explanation": "Δng = moles of gaseous products (1 CO2) - moles of gaseous reactants (1 O2) = 0 (solid carbon ignored). Therefore ΔH = ΔU + 0 = ΔU."
    }
  },
  {
    "id": "chem-ch05-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "Mayer's Relation & Heat Capacities (Cp - Cv = R)",
    "mnemonicNumber": 6,
    "title": "Mayer’s Relation: Cp - Cv = R (Constant Pressure Always Takes More Heat!)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Cp is Always Bigger because it Must Heat the Gas AND Push the Piston!",
    "memoryHook": "At constant volume, all heat goes into temperature rise (Cv). At constant pressure, heat must raise temperature AND do expansion work PΔV (Cp = Cv + R). γ = Cp / Cv = 1.66 (Mono), 1.40 (Di), 1.33 (Tri)!",
    "fact": "Mayer’s relation for 1 mole of an ideal gas: Cp - Cv = R. Heat capacity ratio γ = Cp / Cv: 1. Monoatomic gas (He, Ne, Ar): Cv = 3/2 R, Cp = 5/2 R, γ = 5/3 ≈ 1.66. 2. Diatomic gas (rigid rotor, O2, N2, H2): Cv = 5/2 R, Cp = 7/2 R, γ = 7/5 = 1.40. 3. Polyatomic non-linear gas (H2O, CH4): Cv = 3 R, Cp = 4 R, γ = 4/3 ≈ 1.33.",
    "breakdown": [
      {
        "key": "Monoatomic (He, Ar)",
        "label": "Cv = 1.5 R; Cp = 2.5 R; γ = 1.66"
      },
      {
        "key": "Diatomic (O2, N2)",
        "label": "Cv = 2.5 R; Cp = 3.5 R; γ = 1.40"
      },
      {
        "key": "Triatomic / Non-linear (H2O)",
        "label": "Cv = 3.0 R; Cp = 4.0 R; γ = 1.33"
      }
    ],
    "doodleBadge": "Cp - Cv = R\nγ = 1.66 (Mono) | 1.40 (Di)",
    "doodleSubtext": "Mayer's Relation",
    "explanation": "As atomicity increases and molecules become more complex, degrees of freedom increase, lowering the adiabatic index ratio γ toward 1.0.",
    "alsoRemember": "For solids and liquids, volume expansion on heating is negligible (ΔV ≈ 0), so Cp ≈ Cv.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.2.3.",
    "neetTrap": "For 1 gram of gas, specific heat capacity relation is cp - cv = R / M (where M is molar mass), NOT just R.",
    "tags": [
      "Heat Capacity",
      "Mayer's Relation",
      "Cp and Cv",
      "Adiabatic Index"
    ],
    "quiz": {
      "question": "What is the value of the adiabatic exponent γ = Cp / Cv for an ideal monoatomic gas like Helium?",
      "options": [
        "1.33",
        "1.40",
        "1.66",
        "2.00"
      ],
      "answerIndex": 2,
      "explanation": "For a monoatomic gas, Cv = 3/2 R and Cp = 5/2 R, giving γ = (5/2 R) / (3/2 R) = 5/3 ≈ 1.66."
    }
  },
  {
    "id": "chem-ch05-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "Adiabatic Process Relations (q = 0)",
    "mnemonicNumber": 7,
    "title": "Adiabatic Process: Zero Heat Exchange (q = 0 → ΔU = w_adiabatic)",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Adiabatic Expansion = Temperature Drops! (Gas Cools Itself to do Work!)",
    "memoryHook": "In an insulated adiabatic container (q = 0), ΔU = w. When the gas expands (w < 0), internal energy drops (ΔU < 0), so TEMPERATURE PLUMMETS! PV^γ = constant, TV^(γ-1) = constant!",
    "fact": "Reversible Adiabatic Relations for ideal gas: 1. PV^γ = constant. 2. TV^(γ-1) = constant. 3. T^γ P^(1-γ) = constant. Work done in adiabatic expansion: w = (P2V2 - P1V1) / (γ - 1) = nR(T2 - T1) / (γ - 1). On a P-V diagram, adiabatic curves are STEEPER than isothermal curves by a factor of γ (Slope_adi = γ × Slope_iso).",
    "breakdown": [
      {
        "key": "q = 0",
        "label": "Zero heat enters or leaves the system"
      },
      {
        "key": "Expansion Cools",
        "label": "w is negative → ΔU is negative → T2 < T1 (bursting tyre feels ice-cold!)"
      },
      {
        "key": "Compression Heats",
        "label": "Work done ON gas increases internal energy → T2 > T1 (bicycle pump gets hot)"
      },
      {
        "key": "P-V Slope",
        "label": "dP/dV(adi) = -γ(P/V) is steeper than dP/dV(iso) = -(P/V)"
      }
    ],
    "doodleBadge": "PV^γ = const\nTV^(γ-1) = const\nExpansion Cools!",
    "doodleSubtext": "Insulated System (q = 0)",
    "explanation": "When a compressed gas bottle or tyre suddenly punctures, rapid adiabatic expansion into air causes sudden severe cooling, creating condensation fog.",
    "alsoRemember": "In free expansion of an ideal gas into a vacuum (Pext = 0), w = 0. If adiabatic (q = 0), then ΔU = 0 and ΔT = 0 (no temperature change).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.2.2.",
    "neetTrap": "Free expansion into vacuum is IRREVERSIBLE. For an ideal gas in adiabatic free expansion, ΔT = 0, so T remains constant.",
    "tags": [
      "Adiabatic Process",
      "Thermodynamics",
      "PV^γ",
      "Cooling Effect"
    ],
    "quiz": {
      "question": "Why does an ideal gas cool down during a reversible adiabatic expansion?",
      "options": [
        "Heat is lost to the surroundings",
        "The gas does work entirely at the expense of its internal energy",
        "Gas molecules lose potential energy",
        "Atmospheric pressure increases"
      ],
      "answerIndex": 1,
      "explanation": "Since q = 0 in an adiabatic system, work done by the expanding gas comes directly from its internal energy (ΔU = w), causing temperature to fall."
    }
  },
  {
    "id": "chem-ch05-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-3",
    "topicTitle": "Hess's Law of Constant Heat Summation",
    "mnemonicNumber": 8,
    "title": "Hess’s Law: Direct Highway = Sum of Country Detours (ΔH Total is Path-Independent!)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Flip Reaction → Flip Sign! Multiply Moles → Multiply ΔH!",
    "memoryHook": "Total enthalpy change for a chemical reaction is identical whether the reaction happens in one single step or through a series of consecutive steps! ΔH_net = ΔH1 + ΔH2 + ΔH3!",
    "fact": "Hess’s Law of Constant Heat Summation is a direct consequence of Enthalpy being a state function. Thermochemical algebra rules: 1. If a chemical equation is reversed, the sign of ΔH is reversed (+ΔH becomes -ΔH). 2. If a chemical equation is multiplied by factor n, ΔH is multiplied by n. 3. Target equation enthalpy is obtained by algebraically summing the component step reactions.",
    "breakdown": [
      {
        "key": "State Function Basis",
        "label": "Enthalpy H depends only on initial reactants and final products, not intermediate route"
      },
      {
        "key": "Reverse Reaction",
        "label": "A → B (ΔH = +x) implies B → A (ΔH = -x)"
      },
      {
        "key": "Scaler Multiplication",
        "label": "2A → 2B has ΔH = 2x"
      },
      {
        "key": "Practical Power",
        "label": "Calculates unmeasurable heats (like C(graphite) + ½O2 → CO) by using measurable combustions"
      }
    ],
    "doodleBadge": "Hess's Law:\nΔH_total = ΔH1 + ΔH2 + ΔH3",
    "doodleSubtext": "Thermochemical Algebra",
    "explanation": "Direct oxidation of graphite to CO cannot be stopped cleanly without forming CO2, but Hess’s law effortlessly computes ΔfH(CO) by subtracting combustion of CO from combustion of C.",
    "alsoRemember": "Hess’s law applies equally to internal energy changes: ΔU_total = ΔU1 + ΔU2 + ΔU3.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.4.2.",
    "neetTrap": "Always check the physical state (solid, liquid, gas) in thermochemical equations. H2O(l) and H2O(g) have different enthalpies differing by heat of vaporization!",
    "tags": [
      "Hess's Law",
      "Thermochemistry",
      "Enthalpy",
      "State Function"
    ],
    "quiz": {
      "question": "If the enthalpy of reaction A → B is +100 kJ and B → C is -40 kJ, what is the enthalpy change for the reaction C → A?",
      "options": [
        "+60 kJ",
        "-60 kJ",
        "+140 kJ",
        "-140 kJ"
      ],
      "answerIndex": 1,
      "explanation": "A → C has ΔH = 100 + (-40) = +60 kJ. Reversing the reaction gives C → A with ΔH = -60 kJ."
    }
  },
  {
    "id": "chem-ch05-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-3",
    "topicTitle": "Standard Enthalpy of Formation (ΔfH° = 0 Reference States)",
    "mnemonicNumber": 9,
    "title": "Standard Enthalpy of Formation: Zero for Pure Native Reference States!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Mother Nature’s Default is Free (ΔfH° = 0)! Graphite is Zero, Diamond is NOT!",
    "memoryHook": "Standard enthalpy of formation (ΔfH°) is defined as ZERO for pure elements in their most stable reference state at 298 K, 1 bar: C(graphite) = 0, O2(g) = 0, H2(g) = 0, Br2(l) = 0, I2(s) = 0, S(rhombic) = 0, P(white) = 0! Diamond C(diamond) = +1.89 kJ/mol (NOT ZERO)!",
    "fact": "Standard Enthalpy of Formation (ΔfH°) is the enthalpy change when 1 mole of a substance is formed from its constituent elements in their standard reference states. By international convention, ΔfH° of pure elements in standard states is zero. For allotropes: C(graphite) = 0, but C(diamond) = +1.89 kJ/mol; S(rhombic) = 0, but S(monoclinic) = +0.3 kJ/mol; P(white) = 0 (standard by convention, even though red phosphorus is slightly more stable).",
    "breakdown": [
      {
        "key": "Carbon Reference",
        "label": "C(graphite) has ΔfH° = 0; C(diamond) is NOT zero (+1.89 kJ/mol)"
      },
      {
        "key": "Bromine & Iodine",
        "label": "Br2(liquid) = 0 (not gas); I2(solid) = 0 (not gas or liquid)"
      },
      {
        "key": "Phosphorus",
        "label": "White phosphorus P4(white) is defined as standard reference (ΔfH° = 0)"
      },
      {
        "key": "Reaction Formula",
        "label": "ΔrH° = Σ ΔfH°(Products) - Σ ΔfH°(Reactants)"
      }
    ],
    "doodleBadge": "ΔfH° = 0:\nGraphite, O2(g), Br2(l), I2(s)\nDiamond ≠ 0!",
    "doodleSubtext": "Reference States Convention",
    "explanation": "By setting native elements at zero, every chemical compound’s heat of formation acts like an absolute altitude measured from thermodynamic sea level.",
    "alsoRemember": "For any reaction: ΔrH° = Σ ΔfH°(Products) - Σ ΔfH°(Reactants).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.4.1.",
    "neetTrap": "Questions often trick students by offering C(diamond), Br2(g), or O3(ozone) as having ΔfH° = 0. These are NOT zero!",
    "tags": [
      "Enthalpy of Formation",
      "Reference State",
      "Graphite",
      "Diamond"
    ],
    "quiz": {
      "question": "Which of the following substances has a standard enthalpy of formation (ΔfH°) of zero by convention at 298 K?",
      "options": [
        "C(diamond)",
        "Br2(g)",
        "C(graphite)",
        "O3(g)"
      ],
      "answerIndex": 2,
      "explanation": "Carbon in its graphite allotrope is the thermodynamic reference state for carbon, so its ΔfH° is defined as exactly zero."
    }
  },
  {
    "id": "chem-ch05-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-3",
    "topicTitle": "Bond Enthalpy Reaction Formula",
    "mnemonicNumber": 10,
    "title": "Reaction Enthalpy from Bond Energies: ΔrH = Σ BE(Reactants) - Σ BE(Products)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Break Reactants (Pay Energy +) minus Form Products (Get Energy Back -)!",
    "memoryHook": "Unlike ΔfH (which is Products minus Reactants), Bond Energy is REACTANTS MINUS PRODUCTS! (Energy spent breaking bonds in reactants MINUS energy released forming bonds in products)!",
    "fact": "Bond Dissociation Enthalpy is always positive (endothermic to break a bond). For gaseous reactions: ΔrH° = [Sum of bond enthalpies of broken bonds in reactants] - [Sum of bond enthalpies of formed bonds in products] = Σ BE(Reactants) - Σ BE(Products). If new bonds formed in products are stronger than reactant bonds, the reaction is EXOTHERMIC (ΔH < 0).",
    "breakdown": [
      {
        "key": "Bond Breaking",
        "label": "Endothermic (+): Requires energy input to pull atoms apart"
      },
      {
        "key": "Bond Making",
        "label": "Exothermic (-): Releases energy as new stable bonds form"
      },
      {
        "key": "Golden Formula",
        "label": "ΔrH = Σ BE(Reactants) - Σ BE(Products) (Valid strictly for all gaseous species)"
      }
    ],
    "doodleBadge": "ΔrH = Σ BE(Reactants) - Σ BE(Products)\nBreak (+) - Make (-)",
    "doodleSubtext": "Bond Energy Rule",
    "explanation": "Remember the contrast: using enthalpies of formation it is (Products - Reactants); using bond enthalpies it is (Reactants - Products).",
    "alsoRemember": "For polyatomic molecules like H2O, mean bond dissociation enthalpy is the average: (BE1 for H-OH + BE2 for O-H) / 2.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.4.3.",
    "neetTrap": "Do not use (Products - Reactants) with bond energies! Doing so flips the sign of your answer.",
    "tags": [
      "Bond Enthalpy",
      "Thermochemistry",
      "Reaction Enthalpy",
      "Formulas"
    ],
    "quiz": {
      "question": "How is the standard enthalpy of a gaseous reaction calculated from bond enthalpies (BE)?",
      "options": [
        "Σ BE(Products) - Σ BE(Reactants)",
        "Σ BE(Reactants) - Σ BE(Products)",
        "Σ BE(Reactants) + Σ BE(Products)",
        "½ [Σ BE(Reactants) - Σ BE(Products)]"
      ],
      "answerIndex": 1,
      "explanation": "Bond energy calculations compute energy required to break reactant bonds minus energy released when product bonds form: Σ BE(Reactants) - Σ BE(Products)."
    }
  },
  {
    "id": "chem-ch05-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Second Law of Thermodynamics & Entropy (ΔS)",
    "mnemonicNumber": 11,
    "title": "Second Law of Thermodynamics: The Universe Craves Chaos (ΔS_total > 0)!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Solid (Order) → Liquid → Gas (Maximum Messiness)! ΔS = q_rev / T",
    "memoryHook": "Entropy (S) is the measure of randomness or disorder. For any spontaneous (natural) process, the total entropy of the universe MUST increase: ΔS_universe = ΔS_system + ΔS_surroundings > 0!",
    "fact": "1. Entropy Definition: dS = dq_rev / T (units: J/(mol·K)). 2. Phase Disorder: S(solid) < S(liquid) << S(gas). Gas molecules have maximum translational freedom. 3. Second Law of Thermodynamics: The entropy of an isolated system always increases during any spontaneous process. At equilibrium, entropy reaches its maximum value: ΔS_total = 0.",
    "breakdown": [
      {
        "key": "Phase Changes",
        "label": "Melting, boiling, sublimation, and dissolution increase entropy (ΔS > 0)"
      },
      {
        "key": "Chemical Reactions",
        "label": "Reactions that produce more gaseous moles increase entropy (e.g. CaCO3(s) → CaO(s) + CO2(g) has ΔS > 0)"
      },
      {
        "key": "Egg Boiling Paradox",
        "label": "Boiling an egg DENATURES ordered globular protein chains into random fibrous tangles → ΔS > 0!"
      }
    ],
    "doodleBadge": "ΔS_univ = ΔS_sys + ΔS_surr > 0\nS(gas) >> S(liq) > S(sol)",
    "doodleSubtext": "Universal Chaos",
    "explanation": "Entropy is why heat flows spontaneously from hot to cold bodies: spreading heat into a cooler reservoir creates more microstates and higher net entropy.",
    "alsoRemember": "Stretching a rubber band ALIGNS polymer chains into ordered rows, causing entropy to DECREASE (ΔS < 0). Releasing it snaps back spontaneously (ΔS > 0).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.5.",
    "neetTrap": "When an egg is boiled hard, its entropy INCREASES (ΔS > 0) due to protein denaturation and uncoiling, even though it appears solid!",
    "tags": [
      "Entropy",
      "Second Law",
      "Disorder",
      "Denaturation"
    ],
    "quiz": {
      "question": "What is the sign of entropy change (ΔS) when an egg is hard-boiled?",
      "options": [
        "ΔS is negative because the liquid turns into a solid",
        "ΔS is positive because proteins undergo denaturation into random uncoiled structures",
        "ΔS is zero",
        "ΔS cannot be defined for biological systems"
      ],
      "answerIndex": 1,
      "explanation": "Hard-boiling causes denaturation of globular proteins into randomly tangled uncoiled structures, significantly increasing entropy (ΔS > 0)."
    }
  },
  {
    "id": "chem-ch05-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Entropy Changes in Phase Transitions",
    "mnemonicNumber": 12,
    "title": "Entropy of Phase Transitions: ΔS = ΔH_transition / T_equilibrium",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Divide Heat of Transition by Boiling/Melting Temperature in KELVIN!",
    "memoryHook": "At equilibrium phase change temperature: ΔS_fusion = ΔH_fus / Tf; ΔS_vaporization = ΔH_vap / Tb. Always convert temperature to KELVIN (0°C = 273.15 K, 100°C = 373.15 K)!",
    "fact": "During a reversible phase transition at constant pressure and equilibrium temperature (T_trans), ΔG = 0, therefore: ΔS_trans = ΔH_trans / T_trans. 1. Entropy of Fusion: ΔS_fus = ΔH_fus / Tf (where Tf is melting point). 2. Entropy of Vaporization: ΔS_vap = ΔH_vap / Tb (where Tb is boiling point). 3. Trouton’s Rule: For unassociated liquids, ΔS_vap ≈ 88 J/(mol·K).",
    "breakdown": [
      {
        "key": "Fusion (Melting)",
        "label": "ΔS_fus = ΔH_fus / Tf (Tf of ice = 273.15 K)"
      },
      {
        "key": "Vaporization (Boiling)",
        "label": "ΔS_vap = ΔH_vap / Tb (Tb of water = 373.15 K)"
      },
      {
        "key": "Sublimation",
        "label": "ΔS_sub = ΔS_fus + ΔS_vap = ΔH_sub / T_sub"
      }
    ],
    "doodleBadge": "ΔS_fus = ΔH_fus / Tf\nΔS_vap = ΔH_vap / Tb",
    "doodleSubtext": "Phase Equilibrium",
    "explanation": "Because molecules expand dramatically when transitioning from liquid to gas (~1000-fold volume increase), ΔS_vap is much larger than ΔS_fus.",
    "alsoRemember": "Water has an unusually high ΔS_vap (109 J/mol·K) compared to Trouton’s rule (88 J/mol·K) because hydrogen bonding creates extensive order in liquid water.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.5.3.",
    "neetTrap": "Always plug in temperature in KELVIN (K). Plugging in Celsius (°C) will completely ruin your calculation.",
    "tags": [
      "Entropy of Phase Change",
      "Fusion",
      "Vaporization",
      "Trouton Rule"
    ],
    "quiz": {
      "question": "If the enthalpy of vaporization of water at 100°C is 40.7 kJ/mol, what is the entropy of vaporization (ΔS_vap)?",
      "options": [
        "407 J/(mol·K)",
        "109.1 J/(mol·K)",
        "10.9 J/(mol·K)",
        "40.7 J/(mol·K)"
      ],
      "answerIndex": 1,
      "explanation": "Tb = 100 + 273.15 = 373.15 K. ΔS_vap = ΔH_vap / Tb = 40700 J / 373.15 K ≈ 109.1 J/(mol·K)."
    }
  },
  {
    "id": "chem-ch05-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Third Law of Thermodynamics & Residual Entropy",
    "mnemonicNumber": 13,
    "title": "Third Law: Zero Entropy at Absolute Zero (0 Kelvin = Perfect Crystal S = 0)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Zero Kelvin Freezes All Motion: Only Perfect Crystals Have S = 0!",
    "memoryHook": "The entropy of a perfectly crystalline substance approaches ZERO as temperature approaches absolute zero (0 K). This Third Law allows absolute standard entropy values (S°) to be calculated!",
    "fact": "Third Law of Thermodynamics: The entropy of any pure, perfectly crystalline substance at absolute zero (0 K) is equal to zero: lim(T→0) S = 0. Exceptions (Residual Entropy): Substances that retain random molecular orientations or disorder even at 0 K have S > 0 (e.g. CO with C-O / O-C head-to-tail disorder, NO, N2O, Ice due to hydrogen position disorder).",
    "breakdown": [
      {
        "key": "Significance",
        "label": "Allows calculation of ABSOLUTE entropy S° = ∫ (Cp/T) dT from 0 K to T"
      },
      {
        "key": "Residual Entropy",
        "label": "Entropy remaining at 0 K due to microstate freezing (S = R ln W)"
      },
      {
        "key": "Exceptions",
        "label": "CO (S_res = R ln 2), N2O, NO, H2O (ice)"
      }
    ],
    "doodleBadge": "At 0 K: S = 0\n(Perfect Crystal)",
    "doodleSubtext": "Third Law Benchmark",
    "explanation": "Unlike internal energy or enthalpy which can only be measured as relative changes (ΔU, ΔH), entropy possesses a real absolute zero reference point established by the Third Law.",
    "alsoRemember": "Absolute zero (0 K or -273.15°C) is unattainable in a finite number of thermodynamic operations.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.5.4.",
    "neetTrap": "Glass and solid solutions do NOT have zero entropy at 0 K because they are amorphous, not perfectly crystalline.",
    "tags": [
      "Third Law",
      "Absolute Entropy",
      "Residual Entropy",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following substances possesses a non-zero residual entropy even at absolute zero (0 K)?",
      "options": [
        "Perfect crystalline Diamond",
        "Carbon monoxide (CO)",
        "Perfect crystalline NaCl",
        "Pure Argon crystal"
      ],
      "answerIndex": 1,
      "explanation": "Carbon monoxide molecules freeze with random head-to-tail orientations (CO vs OC) even near 0 K, giving a non-zero residual entropy (S = R ln 2)."
    }
  },
  {
    "id": "chem-ch05-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Gibbs Free Energy Equation & Spontaneity",
    "mnemonicNumber": 14,
    "title": "Gibbs Free Energy Equation: ΔG = ΔH - TΔS (ΔG < 0 Rules Spontaneity!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Negative Delta G = Spontaneous Green Light! Zero = Equilibrium! Positive = Red Light!",
    "memoryHook": "Gibbs Equation: ΔG = ΔH - TΔS (at constant T and P). If ΔG is NEGATIVE, the reaction happens spontaneously on its own! If ΔG = 0, the system is at dynamic equilibrium! If ΔG is POSITIVE, the forward reaction is non-spontaneous!",
    "fact": "Gibbs Free Energy (G = H - TS) represents the maximum useful non-expansion work obtainable from a closed system at constant T and P: -ΔG = w_non-PV. Criteria for spontaneity: 1. ΔG < 0: Spontaneous (exergonic). 2. ΔG = 0: Dynamic equilibrium state. 3. ΔG > 0: Non-spontaneous in forward direction (endergonic, spontaneous in reverse direction).",
    "breakdown": [
      {
        "key": "ΔG < 0 (Negative)",
        "label": "Spontaneous forward reaction (releases free energy)"
      },
      {
        "key": "ΔG = 0 (Zero)",
        "label": "State of dynamic equilibrium (rates forward = reverse)"
      },
      {
        "key": "ΔG > 0 (Positive)",
        "label": "Non-spontaneous forward (requires continuous external energy input)"
      }
    ],
    "doodleBadge": "ΔG = ΔH - TΔS\nΔG < 0 = Spontaneous",
    "doodleSubtext": "Universal Spontaneity Compass",
    "explanation": "ΔG combines the enthalpy driving force (tendency toward minimum energy) and the entropy driving force (tendency toward maximum disorder) into a single master variable.",
    "alsoRemember": "Standard Gibbs free energy change ΔG° relates to equilibrium constant: ΔG° = -RT ln K = -2.303 RT log K.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.6.",
    "neetTrap": "A spontaneous reaction (ΔG < 0) only means it CAN occur thermodynamically; it tells you NOTHING about how FAST it occurs (kinetics). Diamond turning into graphite is spontaneous (ΔG < 0), but takes millions of years!",
    "tags": [
      "Gibbs Free Energy",
      "Spontaneity",
      "Equilibrium",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the value of Gibbs free energy change (ΔG) for a reversible process at dynamic equilibrium at constant temperature and pressure?",
      "options": [
        "Positive",
        "Negative",
        "Zero",
        "Maximum positive"
      ],
      "answerIndex": 2,
      "explanation": "At dynamic equilibrium, free energy is at a minimum and the rate of forward and reverse reactions are equal, so ΔG = 0."
    }
  },
  {
    "id": "chem-ch05-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Master Spontaneity Quadrant Table",
    "mnemonicNumber": 15,
    "title": "Spontaneity Master Table: Sign of ΔH vs Sign of ΔS Across Temperatures",
    "badgeText": "NEET PYQ",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Exo + Disorder = ALWAYS! | Endo + Order = NEVER! | Low T Favors ΔH, High T Favors TΔS!",
    "memoryHook": "Four combinations of ΔH and ΔS: 1) (-ΔH, +ΔS): Always spontaneous at all T. 2) (+ΔH, -ΔS): Never spontaneous at any T. 3) (-ΔH, -ΔS): Spontaneous ONLY AT LOW T (T < ΔH/ΔS). 4) (+ΔH, +ΔS): Spontaneous ONLY AT HIGH T (T > ΔH/ΔS)!",
    "fact": "From ΔG = ΔH - TΔS: 1. Negative ΔH, Positive ΔS → ΔG is always negative → Spontaneous at all temperatures. 2. Positive ΔH, Negative ΔS → ΔG is always positive → Non-spontaneous at all temperatures. 3. Negative ΔH, Negative ΔS → Spontaneous only at low temperatures where enthalpy term dominates (|ΔH| > |TΔS|). 4. Positive ΔH, Positive ΔS → Spontaneous only at high temperatures where entropy term dominates (TΔS > ΔH).",
    "breakdown": [
      {
        "key": "-ΔH, +ΔS",
        "label": "Spontaneous at ALL temperatures (e.g. 2H2O2(l) → 2H2O(l) + O2(g))"
      },
      {
        "key": "+ΔH, -ΔS",
        "label": "NON-spontaneous at ALL temperatures (e.g. 3O2(g) → 2O3(g))"
      },
      {
        "key": "-ΔH, -ΔS",
        "label": "Spontaneous only at LOW T (e.g. freezing of water, NH3 synthesis)"
      },
      {
        "key": "+ΔH, +ΔS",
        "label": "Spontaneous only at HIGH T (e.g. melting of ice, CaCO3 decomposition)"
      }
    ],
    "doodleBadge": "-ΔH, +ΔS: ALWAYS\n+ΔH, -ΔS: NEVER\n+ΔH, +ΔS: High T | -ΔH, -ΔS: Low T",
    "doodleSubtext": "The 4 Quadrants",
    "explanation": "The transition temperature where a reaction flips between non-spontaneous and spontaneous (ΔG = 0) is given by: T_eq = ΔH / ΔS.",
    "alsoRemember": "Ice melting is endothermic (+ΔH) and increases entropy (+ΔS), so it is spontaneous only at HIGH temperatures (above 273 K, 0°C).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Table 6.4.",
    "neetTrap": "For (+ΔH, +ΔS), the reaction becomes spontaneous when T > ΔH/ΔS, NOT when T < ΔH/ΔS!",
    "tags": [
      "Spontaneity Table",
      "ΔH and ΔS",
      "Temperature Dependence",
      "NEET PYQ"
    ],
    "quiz": {
      "question": "A chemical reaction has ΔH = +100 kJ/mol and ΔS = +200 J/(mol·K). At what temperature does this reaction become spontaneous?",
      "options": [
        "Below 500 K",
        "Above 500 K",
        "At all temperatures",
        "Never spontaneous"
      ],
      "answerIndex": 1,
      "explanation": "At equilibrium ΔG = 0 → T = ΔH / ΔS = 100,000 J / 200 J·K⁻¹ = 500 K. Since both are positive (+ΔH, +ΔS), the reaction is spontaneous above 500 K (T > ΔH/ΔS)."
    }
  },
  {
    "id": "chem-ch05-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Gibbs Energy & Equilibrium Constant Link",
    "mnemonicNumber": 16,
    "title": "Gibbs Energy & Equilibrium: ΔG° = -2.303 RT log K (Big K means Negative ΔG°!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "K > 1 means Products Dominate → ΔG° is Strongly Negative!",
    "memoryHook": "Formula: ΔG° = -RT ln K = -2.303 RT log10 K. When K > 1, log K > 0, so ΔG° < 0 (products favored). When K = 1, log K = 0, so ΔG° = 0. When K < 1, log K < 0, so ΔG° > 0 (reactants favored)!",
    "fact": "At equilibrium, real ΔG = 0, and the reaction quotient Q = K. From ΔG = ΔG° + RT ln Q, setting ΔG = 0 yields: ΔG° = -RT ln K = -2.303 RT log10 K. 1. If ΔG° < 0, K > 1 (reaction strongly proceeds forward). 2. If ΔG° > 0, K < 1 (reaction barely proceeds forward).",
    "breakdown": [
      {
        "key": "K > 1",
        "label": "log K is positive → ΔG° is NEGATIVE (exergonic standard state)"
      },
      {
        "key": "K = 1",
        "label": "log K = 0 → ΔG° = 0"
      },
      {
        "key": "K < 1",
        "label": "log K is negative → ΔG° is POSITIVE (endergonic standard state)"
      }
    ],
    "doodleBadge": "ΔG° = -2.303 RT log K\nK > 1 → ΔG° < 0",
    "doodleSubtext": "Thermodynamic Bridge",
    "explanation": "A change of just 5.7 kJ/mol in ΔG° at 298 K changes the equilibrium constant K by a factor of 10.",
    "alsoRemember": "ΔG depends on current concentrations (ΔG = ΔG° + RT ln Q), whereas ΔG° is a fixed constant for a given reaction at specified temperature.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.6.1.",
    "neetTrap": "ΔG is zero at dynamic equilibrium, but standard free energy ΔG° is NOT zero unless K happens to equal exactly 1!",
    "tags": [
      "Equilibrium Constant",
      "ΔG°",
      "van t Hoff",
      "Class 11"
    ],
    "quiz": {
      "question": "If a chemical reaction has an equilibrium constant K = 10⁴ at 298 K, what can be deduced about its standard Gibbs energy change ΔG°?",
      "options": [
        "ΔG° is zero",
        "ΔG° is positive",
        "ΔG° is negative",
        "ΔG° cannot be determined"
      ],
      "answerIndex": 2,
      "explanation": "Since K = 10⁴ > 1, log K = +4. Using ΔG° = -2.303 RT log K, ΔG° must be negative."
    }
  },
  {
    "id": "chem-ch05-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-3",
    "topicTitle": "Enthalpy of Neutralization Benchmarks",
    "mnemonicNumber": 17,
    "title": "Enthalpy of Neutralization: -57.1 kJ/mol for Strong Acid + Strong Base!",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Strong Meets Strong = Constant -57.1 kJ! Weak Acid Costs Heat to Ionize!",
    "memoryHook": "Any strong acid + strong base always releases EXACTLY -57.1 kJ/mol (or -13.7 kcal/mol) because the real net reaction is always just H⁺(aq) + OH⁻(aq) → H2O(l)! For weak acids (CH3COOH) or weak bases (NH4OH), magnitude is LESS than 57.1 kJ because some heat is stolen to ionize the weak bonds!",
    "fact": "1. Strong Acid + Strong Base: Both are 100% dissociated. Net reaction is H⁺(aq) + OH⁻(aq) → H2O(l), ΔH_neut = -57.1 kJ/mol (-13.7 kcal/eq). 2. Weak Acid + Strong Base (e.g. CH3COOH + NaOH): ΔH_neut = -55.8 kJ/mol. The ionization enthalpy of acetic acid is ΔH_ion = 57.1 - 55.8 = +1.3 kJ/mol. 3. Major Exception: HF + NaOH gives ΔH_neut = -68.6 kJ/mol (MORE exothermic than 57.1 kJ!) because the tiny F⁻ ion has an extraordinarily high hydration enthalpy that releases massive extra heat!",
    "breakdown": [
      {
        "key": "Strong + Strong",
        "label": "Always constant -57.1 kJ/mol (-13.7 kcal/mol)"
      },
      {
        "key": "Weak + Strong",
        "label": "Magnitude < 57.1 kJ/mol (Heat of ionization ΔH_ion consumed)"
      },
      {
        "key": "HF Exception",
        "label": "ΔH_neut = -68.6 kJ/mol (Extreme hydration enthalpy of small F⁻ ion)"
      }
    ],
    "doodleBadge": "H⁺ + OH⁻ → H2O: -57.1 kJ\nHF Exception: -68.6 kJ",
    "doodleSubtext": "Neutralization Benchmarks",
    "explanation": "Because strong electrolytes are fully dissociated before mixing, the spectator counter-ions (Na⁺, Cl⁻) do not participate in bonding.",
    "alsoRemember": "For polyprotic strong acids: Neutralizing 1 mole of H2SO4 with 2 moles of NaOH releases 2 × 57.1 = 114.2 kJ of heat.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.4.4.",
    "neetTrap": "The enthalpy of neutralization of HF with NaOH is -68.6 kJ/mol (HIGHER than 57.1 kJ), NOT lower, due to the extreme hydration energy of fluoride ion!",
    "tags": [
      "Neutralization",
      "Enthalpy",
      "HF Exception",
      "Class 11"
    ],
    "quiz": {
      "question": "Why is the enthalpy of neutralization of hydrofluoric acid (HF) by NaOH (-68.6 kJ/mol) significantly greater in magnitude than the standard -57.1 kJ/mol?",
      "options": [
        "HF is a very strong acid",
        "Due to high hydration enthalpy of the small fluoride (F⁻) ion",
        "HF has low bond dissociation enthalpy",
        "NaOH is more basic toward HF"
      ],
      "answerIndex": 1,
      "explanation": "The small size of fluoride ion (F⁻) gives it an exceptionally high hydration enthalpy, releasing significant extra heat upon hydration in water."
    }
  },
  {
    "id": "chem-ch05-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-3",
    "topicTitle": "Enthalpy of Combustion (Always Exothermic)",
    "mnemonicNumber": 18,
    "title": "Enthalpy of Combustion: Always Negative (Exothermic Heat Emitter!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Burning 1 Mole in O2 ALWAYS Sets Off Fireworks (ΔcH° is Always Negative)!",
    "memoryHook": "Standard enthalpy of combustion (ΔcH°) is the heat released when ONE MOLE of a substance is completely burned in excess oxygen gas at standard conditions. It is ALWAYS EXOTHERMIC (ΔcH° < 0)!",
    "fact": "Standard Enthalpy of Combustion (ΔcH°): 1. Definition applies strictly to 1 mole of substance burned. 2. Carbon burns to CO2(g); Hydrogen burns to H2O(l); Sulfur burns to SO2(g). 3. Always exothermic (ΔH < 0). 4. Calorific value of food/fuel = Heat of combustion per gram of substance (kJ/g). Hydrogen gas has the highest calorific value (~150 kJ/g) of all fuels.",
    "breakdown": [
      {
        "key": "Molar Basis",
        "label": "Defined for exactly 1 mole of burned fuel (e.g. C(s) + O2(g) → CO2(g), ΔcH° = -393.5 kJ/mol)"
      },
      {
        "key": "Product States",
        "label": "Water produced is in LIQUID state H2O(l) at standard 298 K"
      },
      {
        "key": "Calorific King",
        "label": "Hydrogen has highest calorific value (~150 kJ/g), followed by Methane (~55 kJ/g)"
      }
    ],
    "doodleBadge": "ΔcH° is ALWAYS Negative\n1 Mole Burned in O2",
    "doodleSubtext": "Fuel Combustion",
    "explanation": "Calorific value is calculated by dividing molar enthalpy of combustion by the compound’s molar mass in grams.",
    "alsoRemember": "ΔrH° can be computed from combustions: ΔrH° = Σ ΔcH°(Reactants) - Σ ΔcH°(Products). Notice it is Reactants minus Products for combustions!",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6, Section 6.4.1.",
    "neetTrap": "In combustion equations, water product is standard liquid H2O(l), NOT water vapor H2O(g).",
    "tags": [
      "Combustion",
      "Calorific Value",
      "Exothermic",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following fuels possesses the highest calorific value per gram?",
      "options": [
        "Methane (CH4)",
        "LPG (Butane)",
        "Hydrogen gas (H2)",
        "Ethanol (C2H5OH)"
      ],
      "answerIndex": 2,
      "explanation": "Hydrogen gas (H2) has the highest calorific value of all known fuels (~150 kJ/g)."
    }
  },
  {
    "id": "chem-ch05-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-1",
    "topicTitle": "Work Done in Cyclic Processes (P-V Loop Area)",
    "mnemonicNumber": 19,
    "title": "Cyclic Processes: Area of Closed P-V Loop = Total Work (Clockwise is Positive in Physics, Negative in Chemistry!)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "medium",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "In Chemistry: Clockwise Loop = Net Work Done BY System = NEGATIVE Work (-w)!",
    "memoryHook": "In a complete cycle returning to start: ΔU_cycle = 0, so net heat absorbed equals net work done (q_net = -w_net). The enclosed area on the P-V graph gives the exact numerical magnitude of work!",
    "fact": "For any cyclic process: 1. State function changes over complete cycle are ZERO: ∮ dU = 0, ∮ dH = 0, ∮ dS = 0, ∮ dG = 0. 2. From First Law: q_cycle = -w_cycle. 3. Work magnitude |w| = Area enclosed by the P-V cycle path. 4. IUPAC Chemistry sign convention: Clockwise cycle expands at higher pressure and compresses at lower pressure, meaning net work is done BY the system on surroundings, so w_net is NEGATIVE (-), and net heat absorbed q_net is POSITIVE (+).",
    "breakdown": [
      {
        "key": "Cycle Invariant",
        "label": "ΔU = 0 and ΔH = 0 over any complete closed loop"
      },
      {
        "key": "Loop Area",
        "label": "For circle: Area = π · r_P · r_V; For ellipse: Area = π · a · b; For rectangle: ΔP × ΔV"
      },
      {
        "key": "Clockwise (CW)",
        "label": "Heat engine: q_net > 0 (heat absorbed), w_net < 0 (work done by gas)"
      }
    ],
    "doodleBadge": "∮ dU = 0\nArea = |w_cycle|",
    "doodleSubtext": "P-V Indicator Loop",
    "explanation": "Heat engines convert part of the absorbed cycle heat into mechanical boundary work equal to the enclosed loop area.",
    "alsoRemember": "Counter-clockwise cycle represents a refrigerator or heat pump, where work is done ON the system (w_net > 0 in chemistry) to extract heat.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6 & Physics Thermodynamics Chapter.",
    "neetTrap": "Always check if the axes are reversed: if V is on the vertical y-axis and P is on the x-axis, clockwise and counter-clockwise loop orientations reverse!",
    "tags": [
      "Cyclic Process",
      "P-V Diagram",
      "Work Done",
      "Area"
    ],
    "quiz": {
      "question": "What is the net change in internal energy (ΔU) of an ideal gas after completing one full cyclic process on a P-V diagram?",
      "options": [
        "Equal to area of the cycle",
        "Zero",
        "Always positive",
        "Depends on temperature"
      ],
      "answerIndex": 1,
      "explanation": "Because internal energy is a state function and the system returns to its initial state, ∮ dU = 0."
    }
  },
  {
    "id": "chem-ch05-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-05",
    "chapterNumber": 5,
    "chapterTitle": "Chemical Thermodynamics",
    "topicId": "chem-top-5-2",
    "topicTitle": "Thermodynamics Master Summary Map",
    "mnemonicNumber": 20,
    "title": "Thermodynamics Master Compass: The 3 Laws & State Functions",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Zeroth (Temperature) · 1st (Energy: ΔU = q + w) · 2nd (Entropy: ΔS_univ > 0) · 3rd (S=0 at 0 K)!",
    "memoryHook": "The 4 pillars of thermodynamics: Zeroth defines Temperature; 1st conserves Energy; 2nd dictates Direction (Entropy & Gibbs Free Energy); 3rd establishes the absolute Zero Benchmark!",
    "fact": "Summary of Fundamental Thermodynamic Laws: 1. Zeroth Law: Thermal equilibrium establishes temperature scale. 2. First Law: Conservation of energy (ΔU = q + w). 3. Second Law: Universal entropy increases for all natural spontaneous processes (ΔS_universe > 0; ΔG = ΔH - TΔS < 0). 4. Third Law: Pure crystalline entropy is zero at absolute zero (S_0K = 0).",
    "breakdown": [
      {
        "key": "Zeroth Law",
        "label": "Defines Temperature T and thermal equilibrium"
      },
      {
        "key": "First Law",
        "label": "Defines Internal Energy U and energy conservation (ΔU = q + w)"
      },
      {
        "key": "Second Law",
        "label": "Defines Entropy S and spontaneity criteria (ΔG < 0)"
      },
      {
        "key": "Third Law",
        "label": "Defines Absolute Entropy S° baseline (S = 0 at T = 0 K)"
      }
    ],
    "doodleBadge": "0th: T | 1st: ΔU\n2nd: ΔS & ΔG | 3rd: S=0",
    "doodleSubtext": "Thermodynamics Master Map",
    "explanation": "Every physical and chemical phenomenon in the universe operates under the constraints of these fundamental laws.",
    "alsoRemember": "For any spontaneous process at constant T and P, Gibbs free energy decreases until it reaches an absolute minimum at equilibrium.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 6.",
    "neetTrap": "The first law tells you energy is conserved, but ONLY the second law tells you if a reaction will actually happen spontaneously!",
    "tags": [
      "Thermodynamics",
      "Laws of Thermodynamics",
      "Master Map",
      "Class 11"
    ],
    "quiz": {
      "question": "Which law of thermodynamics provides the fundamental criterion for the spontaneity of a chemical reaction?",
      "options": [
        "Zeroth law",
        "First law",
        "Second law",
        "Third law"
      ],
      "answerIndex": 2,
      "explanation": "The Second Law of Thermodynamics (through total entropy change and Gibbs free energy) determines whether a process is spontaneous."
    }
  }
];
