export const chemCh01Mnemonics = [
  {
    "id": "mnemo-chem-01",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Mole Concept Triad",
    "mnemonicNumber": 1,
    "title": "Mole Concept Triangle: Mass, Particles, Volume",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Moles (n) = Weight / Molar Mass = N / NA = V / 22.4 L",
    "memoryHook": "Divide grams by Molar Mass, divide particles by 6.022×10²³, or divide STP gas liters by 22.4 L to get MOLES!",
    "fact": "1 Mole contains Avogadro number NA = 6.022 × 10²³ particles. At STP (1 atm, 273.15 K), 1 mole of any ideal gas occupies 22.4 Liters.",
    "breakdown": [
      {
        "key": "n = w / M",
        "label": "Given mass in grams ÷ Molar mass (g/mol)"
      },
      {
        "key": "n = N / NA",
        "label": "Number of molecules ÷ 6.022 × 10²³"
      },
      {
        "key": "n = V / 22.4 L",
        "label": "Gas volume at STP in Liters ÷ 22.4"
      }
    ],
    "doodleBadge": "n = w/M = N/NA = V/22.4",
    "doodleSubtext": "Mole Gateway",
    "explanation": "The mole bridges tiny atoms with lab gram measurements. 1 mole of Carbon-12 is exactly 12 grams.",
    "alsoRemember": "Molarity (M) = Moles / Liters of solution (changes with temp). Molality (m) = Moles / kg of solvent (temp-independent!).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.",
    "neetTrap": "Molality is independent of temperature, whereas Molarity expands and shrinks when temperature changes.",
    "tags": [
      "Mole Concept",
      "Stoichiometry",
      "Class 11",
      "Molarity"
    ],
    "quiz": {
      "question": "Which concentration unit remains unchanged when temperature increases?",
      "options": [
        "Molarity",
        "Molality",
        "Normality",
        "Volume Percentage"
      ],
      "answerIndex": 1,
      "explanation": "Molality is based on solvent mass in kilograms, which does not change with temperature."
    }
  },
  {
    "id": "chem-ch01-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-2",
    "topicTitle": "Temperature Dependence of Concentration Units",
    "mnemonicNumber": 2,
    "title": "Concentration Units: Mass-based (Temp Independent) vs Volume-based (Temp Dependent)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Mass-Based (Molality, Mole Fraction, % w/w, ppm) = Temp Independent | Volume-Based (Molarity, Normality, % v/v, % w/v) = Changes with Temp!",
    "memoryHook": "Mass never changes when heated (Molality & Mole Fraction stay constant); Volume expands with heat (Molarity & Normality change)!",
    "fact": "Concentration terms involving volume (Molarity M, Normality N, Formality, % v/v, % w/v) depend on temperature because liquid volume expands with heat. Terms involving mass only (Molality m, Mole fraction X, % w/w, ppm) are completely independent of temperature.",
    "breakdown": [
      {
        "key": "Temperature Independent",
        "label": "Molality (m = mol/kg solvent), Mole Fraction (X), Mass percent (% w/w), ppm"
      },
      {
        "key": "Temperature Dependent",
        "label": "Molarity (M = mol/L solution), Normality (N = eq/L), % v/v, % w/v"
      },
      {
        "key": "Why Molality is Preferred",
        "label": "Provides consistent solute:solvent ratio across freezing, room, and boiling temperatures"
      }
    ],
    "doodleBadge": "Molality = Temp Constant\nMolarity = Temp Dependent",
    "doodleSubtext": "Concentration Thermals",
    "explanation": "As temperature rises, solution volume increases (V ↑), causing Molarity (n/V) to DECREASE.",
    "alsoRemember": "Density connects Molarity with Molality: m = (1000 * M) / (1000 * d - M * M_solute).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.4.",
    "neetTrap": "When temperature INCREASES, Molarity DECREASES (due to volume expansion), but Molality remains unchanged.",
    "tags": [
      "Chemistry",
      "Molarity",
      "Molality",
      "Temperature Dependence"
    ],
    "quiz": {
      "question": "When a solution is heated from 20°C to 50°C, its molarity will:",
      "options": [
        "Increase",
        "Decrease",
        "Remain exactly the same",
        "First decrease then increase"
      ],
      "answerIndex": 1,
      "explanation": "Liquid volume expands with temperature (V increases), causing molarity (M = moles/volume) to decrease."
    }
  },
  {
    "id": "chem-ch01-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-3",
    "topicTitle": "Limiting Reagent Stoichiometry",
    "mnemonicNumber": 3,
    "title": "Limiting Reagent: Smallest (Moles ÷ Stoichiometric Coefficient) Wins!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Divide available Moles by its Balanced Coefficient → The SMALLEST number is the LIMITING REAGENT!",
    "memoryHook": "To find the limiting reactant in seconds: calculate (Moles / Coefficient) for each reactant. The smallest ratio runs out first and limits all products!",
    "fact": "The Limiting Reagent (LR) is the reactant that is completely consumed first in a chemical reaction, limiting the maximum amount of product formed. Trick: for aA + bB → Products, calculate (Moles of A)/a vs (Moles of B)/b. The reactant with the smaller quotient is the LR.",
    "breakdown": [
      {
        "key": "Step 1: Balance Reaction",
        "label": "Write the stoichiometric balanced chemical equation"
      },
      {
        "key": "Step 2: Calculate Moles",
        "label": "Convert given grams/volumes into moles for all reactants"
      },
      {
        "key": "Step 3: Divide by Coefficient",
        "label": "Compute (Moles / Stoichiometric Coefficient) for each reactant"
      },
      {
        "key": "Step 4: Identify LR",
        "label": "Smallest value = Limiting Reagent; all product yields are calculated using this LR"
      }
    ],
    "doodleBadge": "Moles ÷ Coefficient =\nSmallest is LR",
    "doodleSubtext": "Limiting Reagent Trick",
    "explanation": "Any reactant present in an amount greater than required by the limiting reagent is called the Excess Reagent.",
    "alsoRemember": "In Haber's process: N2 + 3H2 → 2NH3. If you have 1 mol N2 and 2 mol H2: N2 ratio = 1/1 = 1; H2 ratio = 2/3 = 0.67. H2 is the limiting reagent!",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.3.",
    "neetTrap": "The limiting reagent is NOT necessarily the reactant with the lowest mass or lowest moles; it is the one with the lowest (MOLES / COEFFICIENT) ratio.",
    "tags": [
      "Chemistry",
      "Limiting Reagent",
      "Stoichiometry",
      "Class 11"
    ],
    "quiz": {
      "question": "In the reaction 2A + 4B → 3C + 4D, if 5 moles of A react with 6 moles of B, which is the limiting reagent and how many moles of C are formed?",
      "options": [
        "A is LR; 7.5 mol C",
        "B is LR; 4.5 mol C",
        "B is LR; 6 mol C",
        "A is LR; 3 mol C"
      ],
      "answerIndex": 1,
      "explanation": "A ratio = 5/2 = 2.5; B ratio = 6/4 = 1.5. B has the smaller ratio, so B is the LR. Moles of C = (3/4) * 6 = 4.5 moles."
    }
  },
  {
    "id": "chem-ch01-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Empirical Formula vs Molecular Formula",
    "mnemonicNumber": 4,
    "title": "Molecular Formula = n × Empirical Formula (n = Molar Mass / Empirical Mass)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Empirical = Simplest whole-number atom ratio | Molecular Formula = n × Empirical Formula | n = Molar Mass / Empirical Mass",
    "memoryHook": "Glucose has empirical formula CH2O (mass = 30); its molecular mass is 180 → n = 180/30 = 6 → Molecular formula = C6H12O6!",
    "fact": "Empirical Formula represents the simplest whole-number ratio of various atoms present in a compound. Molecular Formula shows the exact number of different types of atoms present in a molecule. Molecular Formula = (Empirical Formula)_n, where n = (Molar Mass) / (Empirical Formula Mass).",
    "breakdown": [
      {
        "key": "Step 1: % to Moles",
        "label": "Divide given mass percent of each element by its atomic mass"
      },
      {
        "key": "Step 2: Atomic Ratio",
        "label": "Divide all mole values by the smallest mole value to get simplest whole-number ratio"
      },
      {
        "key": "Step 3: Empirical Mass",
        "label": "Calculate total mass of the empirical formula"
      },
      {
        "key": "Step 4: Multiplier n",
        "label": "n = (Experimental Molar Mass) / (Empirical Formula Mass)"
      }
    ],
    "doodleBadge": "MF = (EF)_n\nn = Molar / Empirical Mass",
    "doodleSubtext": "Formula Determination",
    "explanation": "Compounds with different molecular formulas can share the same empirical formula (e.g. Formaldehyde HCHO, Acetic acid C2H4O2, and Glucose C6H12O6 all share the empirical formula CH2O).",
    "alsoRemember": "Vapour Density (VD) relates to Molar Mass: Molar Mass = 2 * Vapour Density.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.7.",
    "neetTrap": "Molar Mass = 2 * Vapour Density. If VD = 30, Molar Mass = 60 g/mol.",
    "tags": [
      "Chemistry",
      "Empirical Formula",
      "Molecular Formula",
      "Vapour Density"
    ],
    "quiz": {
      "question": "A compound has the empirical formula CH2O and a vapour density of 30. What is its molecular formula?",
      "options": [
        "CH2O",
        "C2H4O2",
        "C3H6O3",
        "C6H12O6"
      ],
      "answerIndex": 1,
      "explanation": "Molar mass = 2 * VD = 2 * 30 = 60 g/mol. Empirical mass of CH2O = 12 + 2 + 16 = 30. n = 60/30 = 2. Molecular formula = (CH2O)2 = C2H4O2 (Acetic acid)."
    }
  },
  {
    "id": "chem-ch01-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-2",
    "topicTitle": "Molarity Dilution & Mixing Formulas",
    "mnemonicNumber": 5,
    "title": "Molarity Dilution & Mixing: M1V1 = M2V2 & M_mix = (M1V1 + M2V2)/(V1 + V2)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Dilution: M1V1 = M2V2 | Mixing Same Solutes: M_final = (M1V1 + M2V2 + ...) / (V1 + V2 + ...)",
    "memoryHook": "Adding pure water changes volume but moles remain constant (M1V1 = M2V2); mixing solutions sums total moles over total volume!",
    "fact": "Molarity formulas: 1. Dilution Law: M1 * V1 = M2 * V2 (moles of solute remain unchanged when solvent is added). 2. Mixing of two non-reacting solutions of the same solute: M_mix = (M1 * V1 + M2 * V2) / (V1 + V2). 3. Molarity from Density and Mass %: M = (10 * x * d) / M_solute (where x = mass %, d = density in g/mL).",
    "breakdown": [
      {
        "key": "Dilution",
        "label": "M1 V1 = M2 V2 (adding solvent decreases concentration proportionally)"
      },
      {
        "key": "Mixing Solutions",
        "label": "M_res = (M1 V1 + M2 V2) / (V1 + V2)"
      },
      {
        "key": "Direct % to Molarity",
        "label": "M = (10 * %w/w * density) / Molar Mass of solute"
      }
    ],
    "doodleBadge": "M1V1 = M2V2\nM = 10 x d / M_solute",
    "doodleSubtext": "Molarity Shortcuts",
    "explanation": "The formula M = 10 * x * d / M_solute allows instant calculation of molarity directly from commercial reagent bottle labels giving % purity and specific gravity.",
    "alsoRemember": "For neutralisation reactions of acid and base: N1 * V1 = N2 * V2 (using Normality = Molarity * n-factor).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.4.",
    "neetTrap": "Use NORMALITY (N1V1 = N2V2) for acid-base neutralisation, or M1V1 * n1 = M2V2 * n2.",
    "tags": [
      "Chemistry",
      "Molarity",
      "Dilution",
      "Mixing",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the molarity of a solution obtained by mixing 100 mL of 0.2 M HCl with 300 mL of 0.1 M HCl?",
      "options": [
        "0.125 M",
        "0.150 M",
        "0.080 M",
        "0.300 M"
      ],
      "answerIndex": 0,
      "explanation": "M_mix = (100 * 0.2 + 300 * 0.1) / (100 + 300) = (20 + 30) / 400 = 50 / 400 = 0.125 M."
    }
  },
  {
    "id": "chem-ch01-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Significant Figures Rules",
    "mnemonicNumber": 6,
    "title": "Significant Figures: Trailing Zeros Need a Decimal Point!",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Non-zeros ALWAYS count | Trapped zeros ALWAYS count | Leading zeros NEVER count | Trailing zeros count ONLY if there is a decimal point!",
    "memoryHook": "0.00502 has 3 sig figs (leading zeros never count); 500 has 1 sig fig; 500.0 has 4 sig figs (trailing zeros count after decimal)!",
    "fact": "Rules for Significant Figures: 1. All non-zero digits are significant (285 cm has 3). 2. Zeros between non-zero digits are significant (2.005 has 4). 3. Leading zeros before first non-zero digit are NOT significant (0.03 has 1, 0.0052 has 2). 4. Trailing zeros to the right of a number are significant ONLY if they are after a decimal point (100 has 1, 100.0 has 4). 5. Exact counting numbers have INFINITE significant figures (20 eggs = infinite).",
    "breakdown": [
      {
        "key": "Leading Zeros (0.0025)",
        "label": "2 sig figs (zeros merely locate the decimal point)"
      },
      {
        "key": "Trapped Zeros (2.005)",
        "label": "4 sig figs (zeros sandwiched between non-zeros count)"
      },
      {
        "key": "Trailing Zeros with Decimal (2.500)",
        "label": "4 sig figs"
      },
      {
        "key": "Trailing Zeros without Decimal (2500)",
        "label": "2 sig figs (can write as 2.5 × 10³)"
      },
      {
        "key": "Exact Numbers (20 apples)",
        "label": "Infinite significant figures (exact count)"
      }
    ],
    "doodleBadge": "Leading = Never\nTrapped = Always\nTrailing = Decimal Only",
    "doodleSubtext": "Sig Fig Rules",
    "explanation": "In addition/subtraction, result should have no more decimal places than the measurement with the fewest decimal places. In multiplication/division, result should have no more significant figures than the least precise measurement.",
    "alsoRemember": "Avogadro's number 6.022 × 10²³ has 4 significant figures.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.4.",
    "neetTrap": "Counting numbers of objects (e.g. 2 balls or 20 eggs) have INFINITE significant figures because they are exact numbers (2.00000...).",
    "tags": [
      "Chemistry",
      "Significant Figures",
      "Precision",
      "Class 11"
    ],
    "quiz": {
      "question": "How many significant figures are present in 0.004050 and 200.0 respectively?",
      "options": [
        "4 and 1",
        "4 and 4",
        "6 and 4",
        "3 and 1"
      ],
      "answerIndex": 1,
      "explanation": "0.004050 has 4 sig figs (4, 0, 5, 0; leading zeros do not count). 200.0 has 4 sig figs (trailing zero after decimal makes all zeros significant)."
    }
  },
  {
    "id": "chem-ch01-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Laws of Chemical Combinations",
    "mnemonicNumber": 7,
    "title": "5 Laws of Chemical Combination: Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "1. Mass Conservation (Lavoisier) | 2. Definite Proportions (Proust) | 3. Multiple Proportions (Dalton: CO, CO2) | 4. Gaseous Volumes (Gay-Lussac) | 5. Avogadro (Equal V = Equal Moles)",
    "memoryHook": "Lavoisier saves Mass; Proust fixes Constant Ratio; Dalton stacks Multiple ratios (NO, NO2); Gay-Lussac measures Gas Volumes; Avogadro links Gas Volume to Moles!",
    "fact": "Five Fundamental Laws: 1. Conservation of Mass (Antoine Lavoisier, 1789: matter cannot be created or destroyed). 2. Definite Proportions (Joseph Proust, 1799: a pure chemical compound always contains exactly the same proportion of elements by weight). 3. Multiple Proportions (John Dalton, 1803: when two elements form >1 compound, the masses of one element combining with fixed mass of other are in small whole-number ratios). 4. Gay Lussac's Law of Gaseous Volumes (1808). 5. Avogadro's Law (1811: equal volumes of all gases at same T and P contain equal number of molecules).",
    "breakdown": [
      {
        "key": "Conservation of Mass",
        "label": "Mass of Reactants = Mass of Products (Lavoisier)"
      },
      {
        "key": "Definite Proportions",
        "label": "Water from river, rain, or lab is always 1:8 Hydrogen to Oxygen by mass (Proust)"
      },
      {
        "key": "Multiple Proportions",
        "label": "Carbon forms CO (12g C + 16g O) and CO2 (12g C + 32g O); ratio of oxygen masses = 16:32 = 1:2 (Dalton)"
      },
      {
        "key": "Gay-Lussac's Law",
        "label": "2 H2(g) + 1 O2(g) → 2 H2O(g); simple volume ratio 2:1:2"
      },
      {
        "key": "Avogadro's Law",
        "label": "V ∝ n at constant Temperature and Pressure"
      }
    ],
    "doodleBadge": "Mass · Definite · Multiple\nVolumes · Avogadro",
    "doodleSubtext": "5 Chemical Laws",
    "explanation": "The Law of Multiple Proportions was crucial historical evidence supporting Dalton's atomic hypothesis that matter is composed of discrete indivisible atoms.",
    "alsoRemember": "Dalton's atomic theory could not explain Gay Lussac's law of gaseous volumes, which was later resolved by Avogadro.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.5.",
    "neetTrap": "CO and CO2 or H2O and H2O2 illustrate the LAW OF MULTIPLE PROPORTIONS (Dalton).",
    "tags": [
      "Chemistry",
      "Laws of Combination",
      "Dalton",
      "Lavoisier",
      "Proust"
    ],
    "quiz": {
      "question": "The formation of carbon monoxide (CO) and carbon dioxide (CO2) by carbon and oxygen illustrates which fundamental law of chemical combination?",
      "options": [
        "Law of Conservation of Mass",
        "Law of Definite Proportions",
        "Law of Multiple Proportions",
        "Gay Lussac’s Law"
      ],
      "answerIndex": 2,
      "explanation": "Carbon combines with fixed mass of oxygen in a simple 16:32 (1:2) whole-number ratio, illustrating the Law of Multiple Proportions."
    }
  },
  {
    "id": "chem-ch01-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Atomic Mass Unit (amu) & Unified Mass (u)",
    "mnemonicNumber": 8,
    "title": "Atomic Mass Unit (1 u) = 1/12th Mass of One Carbon-12 Atom = 1.66 × 10⁻²⁴ g",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "1 amu (1 u) = 1/12 × Mass of 12C = 1 / NA = 1.66056 × 10⁻²⁴ g = 1.66 × 10⁻²⁷ kg",
    "memoryHook": "1 atomic mass unit (u) is exactly 1/NA grams (the reciprocal of Avogadro's number: 1 / 6.022×10²³ = 1.66×10⁻²⁴ g)!",
    "fact": "One atomic mass unit (amu or unified mass 'u') is defined as a mass exactly equal to one-twelfth (1/12th) of the mass of one Carbon-12 (¹²C) atom. 1 u = 1.66056 × 10⁻²⁴ g = 1.66056 × 10⁻²⁷ kg. Average atomic mass accounts for the natural isotopic abundance: Average Mass = Σ (Isotopic Mass * % Abundance) / 100.",
    "breakdown": [
      {
        "key": "1 u definition",
        "label": "1/12th the mass of one neutral ¹²C atom at rest"
      },
      {
        "key": "Numerical Value",
        "label": "1 u = 1.66056 × 10⁻²⁴ grams = 1.66056 × 10⁻²⁷ kilograms"
      },
      {
        "key": "Relation to NA",
        "label": "1 u = 1 / NA grams (where NA = 6.022 × 10²³)"
      },
      {
        "key": "Chlorine Average Mass",
        "label": "Cl-35 (75%) + Cl-37 (25%) → (35 * 3 + 37 * 1) / 4 = 35.5 u"
      }
    ],
    "doodleBadge": "1 u = 1/12th of 12C\n= 1.66 × 10⁻²⁴ g",
    "doodleSubtext": "Standard of Atomic Mass",
    "explanation": "Carbon-12 was universally adopted as the standard reference isotope for atomic weights in 1961 by IUPAC, replacing the earlier Oxygen-16 scale.",
    "alsoRemember": "The mass of a single hydrogen atom is 1.008 u.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.6.",
    "neetTrap": "The international standard atom used for defining unified atomic mass unit is CARBON-12 (¹²C), not Carbon-14 or Oxygen-16.",
    "tags": [
      "Chemistry",
      "Atomic Mass",
      "amu",
      "Carbon-12",
      "Class 11"
    ],
    "quiz": {
      "question": "Which carbon isotope is used as the standard reference for defining the atomic mass unit (1 u)?",
      "options": [
        "Carbon-14",
        "Carbon-13",
        "Carbon-12",
        "Carbon-11"
      ],
      "answerIndex": 2,
      "explanation": "Carbon-12 (¹²C) is the internationally agreed standard reference isotope whose 1/12th mass defines 1 unified mass unit (u)."
    }
  },
  {
    "id": "chem-ch01-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Mole Fraction Properties",
    "mnemonicNumber": 9,
    "title": "Mole Fraction: X_A + X_B = 1 (Dimensionless & Temperature Independent)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "X_A = n_A / (n_A + n_B) | Sum of all mole fractions Σ X_i = 1 | No units!",
    "memoryHook": "Mole fraction is moles of component over total moles. Sum of all mole fractions always equals 1.0! Completely unitless and temperature-proof!",
    "fact": "Mole Fraction (X): Ratio of number of moles of a particular component to the total number of moles of all the components present in solution. For binary solution: X_A = n_A / (n_A + n_B) and X_B = n_B / (n_A + n_B). Sum of mole fractions X_A + X_B = 1. Mole fraction is unitless and temperature-independent.",
    "breakdown": [
      {
        "key": "Binary Solution",
        "label": "X_A = n_A / (n_A + n_B) and X_B = n_B / (n_A + n_B)"
      },
      {
        "key": "Universal Law",
        "label": "X_A + X_B = 1 (or 1 - X_A = X_B)"
      },
      {
        "key": "Gas Partial Pressure",
        "label": "Dalton's law: P_A = X_A * P_total"
      },
      {
        "key": "No Units",
        "label": "Pure ratio of moles/moles; dimensionless"
      }
    ],
    "doodleBadge": "X_A = n_A / n_total\nΣ X_i = 1",
    "doodleSubtext": "Mole Fraction Rules",
    "explanation": "Mole fraction is the fundamental concentration term used in Raoult's Law for liquid mixtures and Dalton's Law for partial pressures of gases.",
    "alsoRemember": "Mole fraction of solute X_solute = m / (m + 55.55) in aqueous solutions (where m = molality and 55.55 = moles in 1 kg water).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.4.",
    "neetTrap": "In aqueous solutions, moles of 1 kg water = 1000 / 18 = 55.55 moles.",
    "tags": [
      "Chemistry",
      "Mole Fraction",
      "Concentration",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the sum of the mole fractions of all the components in any multi-component solution?",
      "options": [
        "0",
        "1",
        "100",
        "Equal to the total molarity"
      ],
      "answerIndex": 1,
      "explanation": "By definition, the sum of the mole fractions of all components in any solution always equals 1."
    }
  },
  {
    "id": "chem-ch01-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-3",
    "topicTitle": "Percentage Yield of Chemical Reaction",
    "mnemonicNumber": 10,
    "title": "Percentage Yield = (Actual Experimental Yield / Theoretical Stoichiometric Yield) × 100",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "% Yield = (Actual grams obtained in lab / Maximum theoretical grams from balanced equation) × 100",
    "memoryHook": "Theoretical yield is the paper calculation from limiting reagent; actual yield is real lab product. Actual is almost always less due to side reactions!",
    "fact": "Chemical reactions in practice rarely give 100% yield due to side reactions, incomplete conversion, or loss during product purification and filtration. Percentage Yield = (Actual Yield / Theoretical Yield) × 100.",
    "breakdown": [
      {
        "key": "Theoretical Yield",
        "label": "Maximum amount of product calculated from limiting reagent stoichiometry"
      },
      {
        "key": "Actual Yield",
        "label": "Actual mass of pure product isolated in experimental synthesis"
      },
      {
        "key": "% Yield Formula",
        "label": "% Yield = (Actual / Theoretical) × 100"
      }
    ],
    "doodleBadge": "% Yield =\n(Actual / Theoretical) × 100",
    "doodleSubtext": "Reaction Efficiency",
    "explanation": "When calculating multi-step industrial syntheses, overall yield is the product of percentage yields of individual steps (η_total = η1 * η2 * η3...).",
    "alsoRemember": "Percentage Purity = (Mass of pure reactant / Total mass of impure sample) × 100.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.3.",
    "neetTrap": "Always calculate theoretical yield using the LIMITING REAGENT before calculating percentage yield.",
    "tags": [
      "Chemistry",
      "Stoichiometry",
      "Percentage Yield",
      "Class 11"
    ],
    "quiz": {
      "question": "If 10.0 g of a reactant theoretically produces 8.0 g of product, but only 6.0 g is isolated in the laboratory, what is the percentage yield?",
      "options": [
        "60%",
        "75%",
        "80%",
        "133%"
      ],
      "answerIndex": 1,
      "explanation": "% Yield = (Actual Yield / Theoretical Yield) * 100 = (6.0 g / 8.0 g) * 100 = 75%."
    }
  },
  {
    "id": "chem-ch01-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Mass Percent (% w/w) & ppm",
    "mnemonicNumber": 11,
    "title": "Parts Per Million (ppm) & Mass %: Trace Pollutants Metric",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "Mass % = (Mass of Solute / Total Mass of Solution) × 100 | ppm = (Mass of Solute / Total Mass of Solution) × 10⁶",
    "memoryHook": "Mass percent multiplies by 100; Parts Per Million multiplies by 10⁶ (1 million) to measure trace water pollutants and atmospheric toxins!",
    "fact": "Concentration formulas: 1. Mass percentage (% w/w) = (Mass of solute / Total mass of solution) × 100. 2. Parts per million (ppm) = (Mass of solute / Total mass of solution) × 10⁶. When solute is present in trace quantities (like atmospheric pollutants or dissolved chlorine in drinking water), ppm is the standard unit.",
    "breakdown": [
      {
        "key": "Mass % (% w/w)",
        "label": "(Mass of solute / Total mass of solution) × 100"
      },
      {
        "key": "ppm (Parts per million)",
        "label": "(Mass of solute / Total mass of solution) × 10⁶"
      },
      {
        "key": "ppb (Parts per billion)",
        "label": "(Mass of solute / Total mass of solution) × 10⁹"
      },
      {
        "key": "Equivalence in Water",
        "label": "1 ppm in dilute aqueous solution ≈ 1 mg / Liter of water (since 1 L water ≈ 1 kg = 10⁶ mg)"
      }
    ],
    "doodleBadge": "ppm = (w_solute / w_soln) × 10⁶\n1 ppm ≈ 1 mg/L",
    "doodleSubtext": "Trace Concentrations",
    "explanation": "Atmospheric SO2 or CO concentrations are expressed in ppm by volume: ppm = (Volume of gas / Total volume of air) × 10⁶.",
    "alsoRemember": "Fluoride concentration of 1.0 ppm in water prevents tooth decay, but 1.5 ppm causes tooth mottling, and >10 ppm is poisonous.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1 & Class 12 Solutions.",
    "neetTrap": "In ppm formula, the denominator is the TOTAL MASS OF SOLUTION (solute + solvent), not just solvent mass.",
    "tags": [
      "Chemistry",
      "ppm",
      "Mass Percent",
      "Solutions"
    ],
    "quiz": {
      "question": "A 500 g sample of drinking water contains 2.5 mg of dissolved chlorine. What is the chlorine concentration in parts per million (ppm)?",
      "options": [
        "2.5 ppm",
        "5.0 ppm",
        "0.5 ppm",
        "50 ppm"
      ],
      "answerIndex": 1,
      "explanation": "ppm = (Mass of solute in grams / Total mass of solution in grams) * 10⁶ = (0.0025 g / 500 g) * 10⁶ = 5.0 ppm."
    }
  },
  {
    "id": "chem-ch01-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Molar Mass of Gas at STP: 22.4 Liters",
    "mnemonicNumber": 12,
    "title": "STP vs NTP: 1 Mole Ideal Gas = 22.4 L at 1 atm (22.7 L at 1 bar)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "1 atm STP = 22.4 Liters (Classic NEET standard) | 1 bar IUPAC STP = 22.7 Liters",
    "memoryHook": "At 1 atm and 273.15 K (0°C), 1 mole of any ideal gas occupies exactly 22.4 Liters (or 22,400 mL)!",
    "fact": "Molar volume of ideal gas: At standard temperature (273.15 K / 0°C) and pressure (1 atm), one mole of any ideal gas occupies 22.414 Liters. Under IUPAC standard pressure (1 bar = 0.987 atm) and 273.15 K, molar volume is 22.71 Liters. For most NEET stoichiometric calculations, 22.4 L at STP is standard.",
    "breakdown": [
      {
        "key": "STP (1 atm, 273.15 K)",
        "label": "Molar Volume = 22.4 Liters / mol (22,400 cm³ / mol)"
      },
      {
        "key": "IUPAC STP (1 bar, 273.15 K)",
        "label": "Molar Volume = 22.7 Liters / mol"
      },
      {
        "key": "Gas Density at STP",
        "label": "Density d = Molar Mass / 22.4 L (g/L)"
      }
    ],
    "doodleBadge": "1 Mole Gas @ STP\n= 22.4 L (at 1 atm)",
    "doodleSubtext": "Molar Gas Volume",
    "explanation": "Density of any gas at STP can be found simply: d = Molar Mass / 22.4. For example, O2 gas density at STP = 32 / 22.4 = 1.43 g/L.",
    "alsoRemember": "Avogadro's hypothesis states that equal volumes of all gases under the same temperature and pressure contain the same number of molecules.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.",
    "neetTrap": "Use 22.4 L when pressure is in atm, and 22.7 L when pressure is explicitly given in bar.",
    "tags": [
      "Chemistry",
      "STP",
      "Molar Volume",
      "Ideal Gas"
    ],
    "quiz": {
      "question": "What is the volume occupied by 4.4 g of Carbon dioxide (CO2) gas at STP (1 atm, 273.15 K)?",
      "options": [
        "22.4 L",
        "2.24 L",
        "4.48 L",
        "0.224 L"
      ],
      "answerIndex": 1,
      "explanation": "Molar mass of CO2 = 44 g/mol. Moles = 4.4 / 44 = 0.1 mol. Volume at STP = 0.1 * 22.4 L = 2.24 Liters."
    }
  },
  {
    "id": "chem-ch01-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Equivalent Weight & n-Factor Calculation",
    "mnemonicNumber": 13,
    "title": "Equivalent Weight = Molar Mass / n-factor (Acids: Basicity, Bases: Acidity, Redox: Electrons Lost/Gained)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Eq. Wt = M / n-factor | Acid n = replaceable H⁺ | Base n = replaceable OH⁻ | Salt n = Total positive/negative charge | Redox n = e⁻ transferred per mole",
    "memoryHook": "Normality = Molarity × n-factor! H2SO4 has n=2; H3PO4 has n=3; H3PO3 has n=2; H3PO2 has n=1; KMnO4 in acid medium has n=5 (Mn⁷⁺ → Mn²⁺)!",
    "fact": "Equivalent weight (E) = Molar mass (M) / n-factor: 1. Acids: n = Basicity (number of replaceable H⁺ ions). H2SO4 (n=2), HCl (n=1), H3PO4 (n=3), H3PO3 (n=2 dibasic!), H3PO2 (n=1 monobasic!). 2. Bases: n = Acidity (number of OH⁻ ions). Ca(OH)2 (n=2), NaOH (n=1). 3. Salts: n = Total positive cationic charge. Al2(SO4)3 (2 * +3 = 6). 4. Redox agents: n = Change in oxidation number per molecule.",
    "breakdown": [
      {
        "key": "H3PO4 (Phosphoric acid)",
        "label": "n = 3 (Tribasic: 3 P-OH bonds) → E = M/3"
      },
      {
        "key": "H3PO3 (Phosphorous acid)",
        "label": "n = 2 (Dibasic: 2 P-OH bonds + 1 P-H bond) → E = M/2"
      },
      {
        "key": "H3PO2 (Hypophosphorous acid)",
        "label": "n = 1 (Monobasic: 1 P-OH bond + 2 P-H bonds) → E = M/1"
      },
      {
        "key": "KMnO4 in Acidic Medium",
        "label": "Mn⁷⁺ + 5e⁻ → Mn²⁺ (n = 5) → E = M/5 = 158/5 = 31.6 g/eq"
      },
      {
        "key": "K2Cr2O7 in Acidic Medium",
        "label": "Cr2O7²⁻ (2 Cr⁶⁺) + 6e⁻ → 2 Cr³⁺ (n = 6) → E = M/6 = 294.18/6 = 49.03 g/eq"
      }
    ],
    "doodleBadge": "Normality = Molarity × n\nEq. Wt = M / n",
    "doodleSubtext": "n-Factor Master Rules",
    "explanation": "In oxoacids of phosphorus, ONLY hydrogens attached to oxygen (P-OH) are ionisable acidic protons. Hydrogens directly attached to phosphorus (P-H) are non-ionisable and act as reducing agents.",
    "alsoRemember": "KMnO4 in neutral/faintly alkaline medium: Mn⁷⁺ + 3e⁻ → Mn⁴⁺ (MnO2, n=3). In strongly alkaline medium: Mn⁷⁺ + 1e⁻ → Mn⁶⁺ (MnO4²⁻, n=1).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1 & Chapter 8 Redox.",
    "neetTrap": "H3PO3 is DIBASIC (n = 2) and H3PO2 is MONOBASIC (n = 1), despite having 3 and 2 hydrogens in their chemical formulas!",
    "tags": [
      "Chemistry",
      "Equivalent Weight",
      "n-Factor",
      "Normality",
      "KMnO4"
    ],
    "quiz": {
      "question": "What is the n-factor and equivalent weight of phosphorous acid (H3PO3, molecular mass M) when it acts as an acid in complete neutralisation?",
      "options": [
        "n = 3; E = M/3",
        "n = 2; E = M/2",
        "n = 1; E = M/1",
        "n = 4; E = M/4"
      ],
      "answerIndex": 1,
      "explanation": "H3PO3 has two P-OH bonds and one non-ionisable P-H bond, making it a dibasic acid (n = 2), so its equivalent weight is M/2."
    }
  },
  {
    "id": "chem-ch01-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Scientific Notation & Calculations",
    "mnemonicNumber": 14,
    "title": "Scientific Notation: N × 10ⁿ (Where 1.000... ≤ N < 10)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Move decimal LEFT → Positive exponent 10⁺ⁿ | Move decimal RIGHT → Negative exponent 10⁻ⁿ",
    "memoryHook": "232.508 becomes 2.32508 × 10² (decimal moved 2 places left); 0.00016 becomes 1.6 × 10⁻⁴ (decimal moved 4 places right)!",
    "fact": "Scientific notation expresses any number in the form N × 10ⁿ, where n is an exponent having positive or negative values and N is a number (called digit term) which varies between 1.000... and 9.999... Multiplication rule: (a × 10ˣ) × (b × 10ʸ) = (a × b) × 10ˣ⁺ʸ. Division rule: (a × 10ˣ) / (b × 10ʸ) = (a / b) × 10ˣ⁻ʸ.",
    "breakdown": [
      {
        "key": "Left Shift",
        "label": "Increases exponent power (e.g. 602,200,000,000,000,000,000,000 = 6.022 × 10²³)"
      },
      {
        "key": "Right Shift",
        "label": "Decreases exponent power (e.g. 0.00000000000000000000000166 = 1.66 × 10⁻²⁴)"
      },
      {
        "key": "Multiplication",
        "label": "Multiply digit terms, ADD exponents: 10ˣ × 10ʸ = 10ˣ⁺ʸ"
      },
      {
        "key": "Division",
        "label": "Divide digit terms, SUBTRACT exponents: 10ˣ / 10ʸ = 10ˣ⁻ʸ"
      }
    ],
    "doodleBadge": "N × 10ⁿ\nLeft = +n | Right = -n",
    "doodleSubtext": "Exponential Notation",
    "explanation": "When adding or subtracting numbers in scientific notation, exponents must first be made equal before adding or subtracting the digit terms.",
    "alsoRemember": "For addition: (6.65 × 10⁴) + (8.95 × 10³) = (6.65 × 10⁴) + (0.895 × 10⁴) = (6.65 + 0.895) × 10⁴ = 7.545 × 10⁴.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.4.",
    "neetTrap": "Before adding or subtracting numbers in scientific notation, make sure their EXPONENTS ARE IDENTICAL.",
    "tags": [
      "Chemistry",
      "Scientific Notation",
      "Exponents",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the result of multiplying (5.6 × 10⁵) by (6.9 × 10⁸) in proper scientific notation?",
      "options": [
        "38.64 × 10¹³",
        "3.864 × 10¹⁴",
        "3.864 × 10¹³",
        "38.64 × 10⁴⁰"
      ],
      "answerIndex": 1,
      "explanation": "(5.6 * 6.9) * 10⁵⁺⁸ = 38.64 * 10¹³ = 3.864 * 10¹⁴."
    }
  },
  {
    "id": "chem-ch01-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Rounding Off Rules in Chemistry",
    "mnemonicNumber": 15,
    "title": "Rounding Off: The Even Number Rule for 5",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "Digit > 5 → Round UP | Digit < 5 → Drop | If digit is EXACTLY 5: Preceding ODD number rounds UP, preceding EVEN number remains UNCHANGED!",
    "memoryHook": "If the digit to be dropped is 5: 6.35 becomes 6.4 (3 is odd, round up), but 6.25 becomes 6.2 (2 is already even, stays unchanged)!",
    "fact": "Rounding Off Rules in NCERT: 1. If rightmost digit to be removed is >5, preceding number is increased by 1 (1.386 → 1.39). 2. If rightmost digit is <5, preceding number is unchanged (4.334 → 4.33). 3. If rightmost digit is exactly 5: if the preceding number is even, it is left unchanged (6.25 → 6.2); if the preceding number is odd, it is increased by 1 (6.35 → 6.4).",
    "breakdown": [
      {
        "key": "> 5",
        "label": "Round up: 2.748 rounded to 3 digits is 2.75"
      },
      {
        "key": "< 5",
        "label": "Drop: 2.743 rounded to 3 digits is 2.74"
      },
      {
        "key": "Preceding ODD + 5",
        "label": "3.75 rounded to 2 digits = 3.8 (7 is odd → rounded up to 8)"
      },
      {
        "key": "Preceding EVEN + 5",
        "label": "3.85 rounded to 2 digits = 3.8 (8 is even → left as 8)"
      }
    ],
    "doodleBadge": "Odd + 5 → UP\nEven + 5 → Stays Even",
    "doodleSubtext": "Round-Off to Even Rule",
    "explanation": "The \"round half to even\" rule prevents statistical bias in large numerical datasets by rounding up half the time and rounding down half the time.",
    "alsoRemember": "In addition/subtraction: 18.0 + 0.56 + 1.234 = 19.794 → rounded to 1 decimal place = 19.8.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.4.",
    "neetTrap": "Remember for 5: ODD rounds UP, EVEN remains EVEN. 4.25 rounds to 4.2, not 4.3.",
    "tags": [
      "Chemistry",
      "Rounding Off",
      "Precision",
      "Sig Figs"
    ],
    "quiz": {
      "question": "Applying NCERT rounding off rules, what are the rounded values of 2.735 and 2.745 to three significant figures?",
      "options": [
        "2.74 and 2.75",
        "2.74 and 2.74",
        "2.73 and 2.74",
        "2.73 and 2.75"
      ],
      "answerIndex": 1,
      "explanation": "In 2.735, 3 is odd so it rounds up to 2.74. In 2.745, 4 is even so it stays 2.74. Both round to 2.74."
    }
  },
  {
    "id": "chem-ch01-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "SI Base Units: 7 Fundamental Units",
    "mnemonicNumber": 16,
    "title": "7 SI Base Units: SMKAMCd (Second, Metre, Kilogram, Ampere, Mole, Kelvin, Candela)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "SMKAMCd: Second (Time) · Metre (Length) · Kilogram (Mass) · Ampere (Current) · Mole (Amount) · Kelvin (Temperature) · Candela (Luminous Intensity)",
    "memoryHook": "The 7 international SI standard base units: Time (s), Length (m), Mass (kg), Current (A), Substance amount (mol), Temperature (K), and Luminous intensity (cd)!",
    "fact": "The International System of Units (SI) is founded on 7 fundamental base units: 1. Length: metre (m), 2. Mass: kilogram (kg), 3. Time: second (s), 4. Electric current: ampere (A), 5. Thermodynamic temperature: kelvin (K), 6. Amount of substance: mole (mol), 7. Luminous intensity: candela (cd).",
    "breakdown": [
      {
        "key": "Length",
        "label": "Metre (m)"
      },
      {
        "key": "Mass",
        "label": "Kilogram (kg) — Note: base unit has a prefix 'kilo'"
      },
      {
        "key": "Time",
        "label": "Second (s)"
      },
      {
        "key": "Electric Current",
        "label": "Ampere (A)"
      },
      {
        "key": "Temperature",
        "label": "Kelvin (K; T(K) = T(°C) + 273.15)"
      },
      {
        "key": "Amount of Substance",
        "label": "Mole (mol; 6.022 × 10²³ elementary entities)"
      },
      {
        "key": "Luminous Intensity",
        "label": "Candela (cd)"
      }
    ],
    "doodleBadge": "m · kg · s · A\nK · mol · cd",
    "doodleSubtext": "7 SI Base Units",
    "explanation": "Derived units like Force (Newton N = kg·m·s⁻²), Energy (Joule J = kg·m²·s⁻²), and Pressure (Pascal Pa = kg·m⁻¹·s⁻²) are built from combinations of these 7 base units.",
    "alsoRemember": "Celsius to Fahrenheit conversion: °F = 9/5(°C) + 32.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.3, Table 1.1.",
    "neetTrap": "The SI base unit of mass is KILOGRAM (kg), not gram (g).",
    "tags": [
      "Chemistry",
      "SI Units",
      "Base Units",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following is the official SI base unit for thermodynamic temperature?",
      "options": [
        "Degree Celsius (°C)",
        "Degree Fahrenheit (°F)",
        "Kelvin (K)",
        "Rankine (°R)"
      ],
      "answerIndex": 2,
      "explanation": "Kelvin (K) is the official SI fundamental unit for thermodynamic temperature."
    }
  },
  {
    "id": "chem-ch01-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Temperature Scales: Fahrenheit vs Celsius vs Kelvin",
    "mnemonicNumber": 17,
    "title": "Temperature Formulas: °F = (9/5 × °C) + 32 & K = °C + 273.15 (-40° is Equal!)",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "°F = (9/5 × °C) + 32 | K = °C + 273.15 | -40°C = -40°F (Both scales meet at -40!)",
    "memoryHook": "Normal body temp is 37°C = 98.6°F = 310.15 K. Freezing water is 0°C = 32°F = 273.15 K. Boiling water is 100°C = 212°F = 373.15 K!",
    "fact": "Temperature conversion formulas: 1. °F = 9/5(°C) + 32. 2. K = °C + 273.15. 3. At -40°, the Celsius and Fahrenheit temperature values are numerically identical: -40°C = -40°F. Negative values are impossible on the absolute Kelvin scale (0 K is absolute zero, where molecular motion ceases).",
    "breakdown": [
      {
        "key": "Celsius to Fahrenheit",
        "label": "°F = 1.8(°C) + 32"
      },
      {
        "key": "Fahrenheit to Celsius",
        "label": "°C = 5/9(°F - 32)"
      },
      {
        "key": "Celsius to Kelvin",
        "label": "K = °C + 273.15"
      },
      {
        "key": "Special Coincidence Point",
        "label": "At -40°C: °F = (9/5 * -40) + 32 = -72 + 32 = -40°F"
      }
    ],
    "doodleBadge": "°F = 9/5(°C) + 32\n-40°C = -40°F",
    "doodleSubtext": "Thermometer Equivalence",
    "explanation": "Temperatures below 0 K cannot exist because thermal energy and kinetic vibrational motion cannot be negative.",
    "alsoRemember": "Body temperature of a healthy human is 37°C (98.6°F).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.3.",
    "neetTrap": "The Kelvin scale NEVER has negative values; 0 K is the lowest theoretically attainable temperature.",
    "tags": [
      "Chemistry",
      "Temperature Conversion",
      "Celsius",
      "Fahrenheit",
      "Kelvin"
    ],
    "quiz": {
      "question": "At what temperature do the Celsius and Fahrenheit temperature scales read the exact same numerical value?",
      "options": [
        "0°",
        "-40°",
        "100°",
        "32°"
      ],
      "answerIndex": 1,
      "explanation": "At -40°, both scales match: -40°C = -40°F."
    }
  },
  {
    "id": "chem-ch01-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Avogadro's Number Significance",
    "mnemonicNumber": 18,
    "title": "Avogadro's Number: NA = 6.02214076 × 10²³ Particles in Exactly 12 g of ¹²C",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "1 Mole of ANY substance = 6.022 × 10²³ Entities (Atoms, Molecules, Ions, or Electrons)",
    "memoryHook": "Like 1 Dozen = 12 items, 1 Mole = 6.022 × 10²³ items! Mass of 1 mole of electrons = 0.55 mg!",
    "fact": "Avogadro's constant NA is defined as the number of atoms present in exactly 12 grams of pure Carbon-12 isotope. NA = 6.02214076 × 10²³ mol⁻¹. 1 mole of electrons has a total charge of 1 Faraday = 96,487 C (~96,500 C) and a mass of 9.1 × 10⁻³¹ kg * 6.022 × 10²³ = 5.48 × 10⁻⁷ kg (0.55 mg).",
    "breakdown": [
      {
        "key": "Definition of 1 Mole",
        "label": "Amount of substance containing exactly 6.022 × 10²³ elementary entities"
      },
      {
        "key": "Charge of 1 Mole Electrons",
        "label": "1 Faraday (1 F) = 96,500 Coulombs"
      },
      {
        "key": "Mass of 1 Mole Electrons",
        "label": "0.55 mg (5.48 × 10⁻⁴ g)"
      },
      {
        "key": "1 Mole of Water (18 mL)",
        "label": "Contains 6.022 × 10²³ molecules = 1.204 × 10²⁴ H atoms + 6.022 × 10²³ O atoms"
      }
    ],
    "doodleBadge": "NA = 6.022 × 10²³\n1 F = 96,500 C/mol",
    "doodleSubtext": "Avogadro Essentials",
    "explanation": "The mole allows chemists to count atoms by simply weighing chemicals on a balance.",
    "alsoRemember": "The word \"Mole\" was introduced around 1896 by Wilhelm Ostwald from Latin 'moles' meaning a heap or pile.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.8.",
    "neetTrap": "1 mole of H2O contains 1 mole of Oxygen atoms, but TWO moles of Hydrogen atoms (1.204 × 10²⁴ H atoms).",
    "tags": [
      "Chemistry",
      "Avogadro Number",
      "Mole",
      "Faraday Constant"
    ],
    "quiz": {
      "question": "What is the total number of ATOMS present in 1.8 grams of water (H2O)?",
      "options": [
        "6.022 × 10²²",
        "1.806 × 10²³",
        "6.022 × 10²³",
        "1.806 × 10²⁴"
      ],
      "answerIndex": 1,
      "explanation": "Moles of H2O = 1.8 / 18 = 0.1 mol. Molecules of H2O = 0.1 * NA = 6.022 × 10²². Each H2O molecule has 3 atoms, so total atoms = 3 * 6.022 × 10²² = 1.806 × 10²³."
    }
  },
  {
    "id": "chem-ch01-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Homogeneous vs Heterogeneous Mixtures & Pure Substances",
    "mnemonicNumber": 19,
    "title": "Matter Classification: Pure (Elements & Compounds) vs Mixtures (Homo & Hetero)",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "Pure Substances: Fixed composition (Elements: Au, O2 / Compounds: H2O, CO2) | Mixtures: Variable composition (Homogeneous: Sugar in water / Heterogeneous: Sand in water)",
    "memoryHook": "Compounds have fixed ratios and cannot be separated by physical methods; Mixtures have variable compositions and can be separated by physical filtration/distillation!",
    "fact": "Classification of Matter: 1. Pure Substances (Elements cannot be broken down further chemically; Compounds consist of two or more atoms of different elements in fixed proportions with entirely new properties). 2. Mixtures (Homogeneous has uniform composition throughout e.g. air, brass, gasoline; Heterogeneous has non-uniform composition e.g. mixture of salt and sugar, muddy water).",
    "breakdown": [
      {
        "key": "Element",
        "label": "Consists of only one type of atom (e.g. Cu, Fe, Ag, H2, N2, O3)"
      },
      {
        "key": "Compound",
        "label": "Fixed mass ratio; properties are completely different from constituent elements (e.g. H2 explosive + O2 supporter → H2O fire extinguisher!)"
      },
      {
        "key": "Homogeneous Mixture",
        "label": "Uniform composition throughout, single phase (Solutions, Alloys)"
      },
      {
        "key": "Heterogeneous Mixture",
        "label": "Non-uniform composition, multiple visible phases (Suspensions, Colloids)"
      }
    ],
    "doodleBadge": "Pure: Elements/Compounds\nMixture: Homo/Hetero",
    "doodleSubtext": "Taxonomy of Matter",
    "explanation": "Water is a classic compound: Hydrogen burns with a pop sound and Oxygen supports combustion, yet their compound Water extinguishes fires.",
    "alsoRemember": "Components of a mixture can be separated by physical methods (handpicking, filtration, crystallization, distillation).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1, Section 1.2.",
    "neetTrap": "Air and Brass (alloy of Cu + Zn) are HOMOGENEOUS MIXTURES (solutions), not compounds.",
    "tags": [
      "Chemistry",
      "Matter",
      "Mixture",
      "Compound",
      "Class 11"
    ],
    "quiz": {
      "question": "Which of the following is correctly classified as a homogeneous mixture?",
      "options": [
        "Distilled water",
        "Air",
        "Muddy water",
        "Table salt crystal (NaCl)"
      ],
      "answerIndex": 1,
      "explanation": "Air is a homogeneous gaseous solution of nitrogen, oxygen, noble gases, and carbon dioxide."
    }
  },
  {
    "id": "chem-ch01-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-01",
    "chapterNumber": 1,
    "chapterTitle": "Some Basic Concepts of Chemistry",
    "topicId": "chem-top-1-1",
    "topicTitle": "Stoichiometry & Mole Concept Master Map",
    "mnemonicNumber": 20,
    "title": "Mole Concept Master Map: Converting Grams, Moles, STP Liters, and Molecules",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Grams ↔ (÷ / × Molar Mass) ↔ MOLES ↔ (× / ÷ NA) ↔ Particles | MOLES ↔ (× / ÷ 22.4 L) ↔ Volume at STP",
    "memoryHook": "The MOLE is the Grand Central Station! To go anywhere (grams, liters, molecules), ALWAYS travel through Moles first!",
    "fact": "The central hub of chemical stoichiometry is the MOLE: 1. Mass (g) → Moles: Divide by Molar Mass (M). 2. Moles → Mass (g): Multiply by Molar Mass (M). 3. Volume (L at STP) → Moles: Divide by 22.4 L. 4. Moles → Volume (L at STP): Multiply by 22.4 L. 5. Particles → Moles: Divide by NA (6.022 × 10²³). 6. Moles → Particles: Multiply by NA.",
    "breakdown": [
      {
        "key": "To Moles from Mass",
        "label": "n = mass (g) / Molar Mass"
      },
      {
        "key": "To Moles from Volume",
        "label": "n = Volume at STP (L) / 22.4"
      },
      {
        "key": "To Moles from Count",
        "label": "n = Number of particles / 6.022 × 10²³"
      },
      {
        "key": "To Moles from Solution",
        "label": "n = Molarity (M) × Volume (L)"
      }
    ],
    "doodleBadge": "Mole = Central Hub\nMass · Volume · Particles",
    "doodleSubtext": "Chapter 1 Master Map",
    "explanation": "Converting every given numerical quantity into moles first simplifies all stoichiometry, limiting reagent, and gas law calculations.",
    "alsoRemember": "Remember to always balance the chemical reaction before applying mole-to-mole stoichiometric ratios.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 1.",
    "neetTrap": "Every chapter in physical chemistry (Equilibrium, Electrochemistry, Kinetics, Solutions) relies on this exact Mole Concept hub.",
    "tags": [
      "Chemistry",
      "Mole Concept",
      "Stoichiometry",
      "Master Map"
    ],
    "quiz": {
      "question": "How many molecules are present in 11.2 Liters of Oxygen gas (O2) at STP?",
      "options": [
        "6.022 × 10²³",
        "3.011 × 10²³",
        "1.204 × 10²⁴",
        "3.011 × 10²²"
      ],
      "answerIndex": 1,
      "explanation": "Moles of O2 = 11.2 L / 22.4 L = 0.5 mol. Molecules = 0.5 * 6.022 × 10²³ = 3.011 × 10²³."
    }
  }
];
