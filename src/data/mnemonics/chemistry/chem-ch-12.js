export const chemCh12Mnemonics = [
  {
    "id": "chem-ch12-01",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-1",
    "topicTitle": "Rate of Reaction & Stoichiometric Coefficients",
    "mnemonicNumber": 1,
    "title": "Reaction Rate: Divide by Stoichiometric Coefficient; Reactants Get (-), Products Get (+)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Rate = -(1/a) d[A]/dt = -(1/b) d[B]/dt = +(1/c) d[C]/dt = +(1/d) d[D]/dt",
    "memoryHook": "For aA + bB → cC + dD: Rate of DISAPPEARANCE of A is -d[A]/dt. Overall rate of reaction DIVIDES by coefficient: Rate = -(1/a) d[A]/dt = +(1/c) d[C]/dt! Never forget: Rate of disappearance has NO coefficient; overall reaction rate HAS the coefficient!",
    "fact": "Rate of Chemical Reaction: 1. Rate expression: For reaction aA + bB → cC + dD: Rate = -(1/a)(d[A]/dt) = -(1/b)(d[B]/dt) = +(1/c)(d[C]/dt) = +(1/d)(d[D]/dt). 2. Rate of Disappearance: -d[A]/dt (positive quantity, minus sign accounts for decreasing concentration). 3. Rate of Appearance: +d[C]/dt. 4. Example: N2 + 3H2 → 2NH3: Rate = -d[N2]/dt = -⅓(d[H2]/dt) = +½(d[NH3]/dt). Therefore, rate of disappearance of H2 is 3 times the rate of disappearance of N2: -d[H2]/dt = 3(-d[N2]/dt).",
    "breakdown": [
      {
        "key": "Rate of Reaction",
        "label": "Rate = -(1/a) d[A]/dt = +(1/c) d[C]/dt (unified unique value)"
      },
      {
        "key": "Rate of Consumption",
        "label": "-d[A]/dt (does NOT include stoichiometric coefficient a)"
      },
      {
        "key": "Rate of Formation",
        "label": "+d[C]/dt (does NOT include stoichiometric coefficient c)"
      }
    ],
    "doodleBadge": "Rate = -(1/a) d[A]/dt\n= +(1/c) d[C]/dt\nUnits: mol·L⁻¹·s⁻¹",
    "doodleSubtext": "Stoichiometric Rate Equivalence",
    "explanation": "Dividing each species rate by its stoichiometric coefficient scales all rates to a single common denominator representing the overall reaction pace.",
    "alsoRemember": "For gaseous reactions, rate can be expressed in terms of partial pressure: atm·s⁻¹ or bar·s⁻¹.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.1.",
    "neetTrap": "Questions often give rate of disappearance of H2 and ask for overall rate: remember to DIVIDE by 3!",
    "tags": [
      "Rate of Reaction",
      "Stoichiometry",
      "Rate of Formation",
      "Chemical Kinetics"
    ],
    "quiz": {
      "question": "For the reaction 2N2O5(g) → 4NO2(g) + O2(g), how is the rate of formation of NO2 (+d[NO2]/dt) related to the rate of disappearance of N2O5 (-d[N2O5]/dt)?",
      "options": [
        "+d[NO2]/dt = -d[N2O5]/dt",
        "+d[NO2]/dt = 2 (-d[N2O5]/dt)",
        "+d[NO2]/dt = ½ (-d[N2O5]/dt)",
        "+d[NO2]/dt = 4 (-d[N2O5]/dt)"
      ],
      "answerIndex": 1,
      "explanation": "From Rate = -½ d[N2O5]/dt = +¼ d[NO2]/dt, multiplying both sides by 4 gives +d[NO2]/dt = 2 (-d[N2O5]/dt)."
    }
  },
  {
    "id": "chem-ch12-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-1",
    "topicTitle": "Units of Rate Constant (k) for Order n",
    "mnemonicNumber": 2,
    "title": "Units of Rate Constant k: (mol / L)^(1 - n) · s⁻¹ (First Order is Pure s⁻¹)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Universal Order Formula: (mol/L)^(1-n) · s⁻¹! First Order (n=1) Cancels Concentration Completely (s⁻¹)!",
    "memoryHook": "Formula for unit of k: (mol·L⁻¹)^(1-n) · s⁻¹ = mol^(1-n) · L^(n-1) · s⁻¹. 1) Zero Order (n=0): mol·L⁻¹·s⁻¹ (matches reaction rate!). 2) First Order (n=1): s⁻¹ (time⁻¹ only, independent of concentration units!). 3) Second Order (n=2): L·mol⁻¹·s⁻¹. Spotting the unit tells you the order instantly in numerical problems!",
    "fact": "Units of Rate Constant (k): 1. General Formula: Units of k = (mol·L⁻¹)^(1 - n) · (time)⁻¹ = mol^(1-n) · L^(n-1) · s⁻¹ (where n is overall reaction order). 2. Zero Order (n = 0): mol·L⁻¹·s⁻¹ (identical to rate of reaction). 3. First Order (n = 1): s⁻¹ or min⁻¹ (pure frequency unit, independent of volume or concentration). 4. Second Order (n = 2): L·mol⁻¹·s⁻¹ or M⁻¹·s⁻¹. 5. Third Order (n = 3): L²·mol⁻²·s⁻¹. 6. In gaseous phase: (atm)^(1-n) · s⁻¹.",
    "breakdown": [
      {
        "key": "Zero Order (n=0)",
        "label": "mol·L⁻¹·s⁻¹ (Concentration per second)"
      },
      {
        "key": "First Order (n=1)",
        "label": "s⁻¹ (Time reciprocal, concentration cancels out)"
      },
      {
        "key": "Second Order (n=2)",
        "label": "L·mol⁻¹·s⁻¹ (Inverted concentration per second)"
      },
      {
        "key": "NEET Trick",
        "label": "If a question states \"k = 2.5 × 10⁻³ s⁻¹\", the unit s⁻¹ immediately reveals it is FIRST ORDER!"
      }
    ],
    "doodleBadge": "Unit of k = (mol/L)^(1-n) · s⁻¹\n1st Order = s⁻¹\n0 Order = mol·L⁻¹·s⁻¹",
    "doodleSubtext": "Order from Unit Shortcut",
    "explanation": "Because rate = k [A]ⁿ, dividing rate (mol·L⁻¹·s⁻¹) by [A]ⁿ (molⁿ·L⁻ⁿ) leaves (mol·L⁻¹)^(1-n) · s⁻¹.",
    "alsoRemember": "For a fractional order reaction with n = ½: Units of k = (mol·L⁻¹)^(1 - ½) · s⁻¹ = mol^(1/2) · L^(-1/2) · s⁻¹.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.2.3.",
    "neetTrap": "Questions often do not state the reaction order explicitly; look at the unit of k to deduce the order immediately!",
    "tags": [
      "Rate Constant Units",
      "Reaction Order",
      "First Order",
      "Zero Order"
    ],
    "quiz": {
      "question": "A reaction has a rate constant k = 3.2 × 10⁻⁴ L·mol⁻¹·s⁻¹. What is the overall order of the reaction?",
      "options": [
        "Zero order",
        "First order",
        "Second order",
        "Third order"
      ],
      "answerIndex": 2,
      "explanation": "Using the unit formula (mol·L⁻¹)^(1-n)·s⁻¹ = L·mol⁻¹·s⁻¹, we have 1 - n = -1, which gives n = 2 (second order)."
    }
  },
  {
    "id": "chem-ch12-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-1",
    "topicTitle": "Order vs Molecularity Distinction",
    "mnemonicNumber": 3,
    "title": "Order vs Molecularity: Order is Experimental (0, Fraction, Negative); Molecularity is Whole Integer (1, 2, 3)!",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Order = Real Lab Truth (Can be 0 or ½)! Molecularity = Counting Collision Bodies (Must be 1, 2, 3)!",
    "memoryHook": "Order: Determined experimentally from rate law; can be zero, fractional, or negative; applies to elementary and complex reactions! Molecularity: Number of reacting species colliding simultaneously in an elementary step; can NEVER be zero, fractional, negative, or >3; has NO meaning for complex multi-step reactions!",
    "fact": "Order vs Molecularity: 1. Order: (a) Sum of powers of concentration terms in experimental rate law. (b) Purely experimental quantity. (c) Can be zero, fractional, integer, or negative. (d) Applies to both elementary and complex reactions. 2. Molecularity: (a) Number of reacting particles that must collide simultaneously to bring about an elementary chemical change. (b) Theoretical concept. (c) Always a positive whole integer (1, 2, or 3). Cannot be zero, fractional, or >3 (simultaneous collision of 4 molecules is statistically improbable). (d) Meaningful ONLY for elementary steps; has no meaning for a complex reaction (the overall reaction is governed by the molecularity of its slowest rate-determining step).",
    "breakdown": [
      {
        "key": "Values Allowed",
        "label": "Order: 0, 1, 2, ½, -1 | Molecularity: 1, 2, 3 only"
      },
      {
        "key": "How Determined",
        "label": "Order: Experiment only | Molecularity: Theoretical collision count"
      },
      {
        "key": "Complex Reactions",
        "label": "Order: Valid overall | Molecularity: Meaningless for overall reaction"
      }
    ],
    "doodleBadge": "Order: Experimental (0, ½, 1, 2)\nMolecularity: Integer (1, 2, 3)\nNever 0 or Fractional!",
    "doodleSubtext": "Order vs Molecularity",
    "explanation": "You cannot have zero molecules colliding to make a reaction, so molecularity can never be zero.",
    "alsoRemember": "For an elementary (single-step) reaction, order and molecularity are identical.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.2.4.",
    "neetTrap": "Molecularity can NEVER be zero or a fraction! If a question states molecularity = 0 or 1.5, it is 100% FALSE.",
    "tags": [
      "Order of Reaction",
      "Molecularity",
      "Elementary Reaction",
      "Class 12"
    ],
    "quiz": {
      "question": "Which of the following statements is INCORRECT regarding molecularity of a reaction?",
      "options": [
        "Molecularity is a theoretical quantity",
        "Molecularity can be zero or a fraction",
        "Molecularity cannot exceed 3",
        "Molecularity has no meaning for complex reactions"
      ],
      "answerIndex": 1,
      "explanation": "Molecularity represents the number of colliding particles in an elementary step and must always be a positive integer (1, 2, or 3); it can never be zero or fractional."
    }
  },
  {
    "id": "chem-ch12-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "Zero Order Kinetics & Integrated Rate Equations",
    "mnemonicNumber": 4,
    "title": "Zero Order Kinetics: [R] = [R]0 - k·t (Half-Life t1/2 = [R]0 / 2k; Finishes in 2 × t1/2)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Zero Order Marches in a Straight Line! Half-Life is Directly Proportional to Starting Pile [R]0!",
    "memoryHook": "Rate = k [R]⁰ = k (Constant rate, independent of concentration!). Integrated form: [R] = [R]0 - k·t. Plot of [R] vs t gives a straight line with slope = -k and intercept = [R]0! Half-life: t1/2 = [R]0 / 2k (Double initial amount = Doubles half-life!). Time to 100% completion: t_complete = [R]0 / k = 2 × t1/2!",
    "fact": "Zero Order Reaction Kinetics: 1. Rate Law: Rate = -d[R]/dt = k [R]⁰ = k. Rate is constant and independent of reactant concentration. 2. Integrated Rate Equation: [R] = [R]0 - k·t or k = ([R]0 - [R]) / t. Amount reacted x = k·t. 3. Graph: Plot of [R] vs t is a straight line with slope = -k and y-intercept = [R]0. Plot of Rate vs [R] is a horizontal flat line. 4. Half-life: At t1/2, [R] = [R]0 / 2: t1/2 = [R]0 / (2k). Half-life is DIRECTLY PROPORTIONAL to initial concentration [R]0. 5. Complete Reaction: Goes to 100% completion in finite time t = [R]0 / k = 2 × t1/2. 6. Classic Examples: (a) Decomposition of gaseous NH3 on hot Platinum surface at high pressure. (b) Decomposition of HI on Gold surface. (c) Enzyme-catalyzed reactions at saturation.",
    "breakdown": [
      {
        "key": "Integrated Equation",
        "label": "[R] = [R]0 - k·t (Slope = -k)"
      },
      {
        "key": "Half-Life Formula",
        "label": "t1/2 = [R]0 / 2k (directly proportional to [R]0)"
      },
      {
        "key": "100% Completion",
        "label": "t_100% = [R]0 / k = 2 × t1/2 (finishes in exactly two half-lives!)"
      },
      {
        "key": "Classic Example",
        "label": "2NH3 -(hot Pt, high P)→ N2 + 3H2"
      }
    ],
    "doodleBadge": "Zero Order: [R] = [R]0 - kt\nt1/2 = [R]0 / 2k\nt_complete = 2 × t1/2",
    "doodleSubtext": "Zero Order Benchmark",
    "explanation": "At high pressure, the metal catalyst surface is completely saturated with adsorbed molecules; increasing gas concentration cannot increase the reaction rate, making it zero order.",
    "alsoRemember": "Photochemical combination of H2 and Cl2 over water is also a classic zero order reaction.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.1.",
    "neetTrap": "For zero order, the reaction reaches 100% completion in exactly 2 × t1/2! (In first order, reaction NEVER reaches 100% completion).",
    "tags": [
      "Zero Order",
      "Integrated Rate",
      "Half Life",
      "Surface Catalysis"
    ],
    "quiz": {
      "question": "For a zero-order reaction, what is the relationship between half-life (t1/2) and the initial reactant concentration [R]0?",
      "options": [
        "t1/2 is independent of [R]0",
        "t1/2 is directly proportional to [R]0",
        "t1/2 is inversely proportional to [R]0",
        "t1/2 is proportional to [R]0²"
      ],
      "answerIndex": 1,
      "explanation": "From the zero-order half-life formula t1/2 = [R]0 / (2k), the half-life is directly proportional to the initial concentration."
    }
  },
  {
    "id": "chem-ch12-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "First Order Kinetics & Half-Life (t1/2 = 0.693 / k)",
    "mnemonicNumber": 5,
    "title": "First Order Kinetics: k = (2.303 / t) log([R]0 / [R]) & t1/2 = 0.693 / k (Independent of [R]0)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "First Order Half-Life is IMMUNE to Concentration: Always 0.693 / k!",
    "memoryHook": "Formula: k = (2.303 / t) log10([R]0 / [R]) = (2.303 / t) log(a / (a - x)). Exponential decay: [R] = [R]0 e^(-kt). Half-life: t1/2 = ln(2) / k = 0.693 / k! Whether you start with 100 grams or 1 gram, half of it disappears in the exact same time! All radioactive decays are first order!",
    "fact": "First Order Reaction Kinetics: 1. Rate Law: Rate = -d[R]/dt = k [R]¹. 2. Integrated Rate Equation: ln([R]0 / [R]) = k·t → k = (2.303 / t) log10([R]0 / [R]). In terms of initial amount a and reacted amount x: k = (2.303 / t) log10(a / (a - x)). 3. Exponential Form: [R] = [R]0 e^(-kt) (Wilhelmy equation). 4. Half-Life: When [R] = [R]0 / 2: t1/2 = ln 2 / k = 0.693 / k. Half-life is completely independent of initial reactant concentration [R]0. 5. Linear Graphs: (a) log([R]0 / [R]) vs t gives a straight line passing through origin with slope = k / 2.303. (b) log[R] vs t gives straight line with slope = -k / 2.303 and intercept = log[R]0.",
    "breakdown": [
      {
        "key": "Integrated Equation",
        "label": "k = (2.303 / t) log([R]0 / [R])"
      },
      {
        "key": "Half-Life",
        "label": "t1/2 = 0.693 / k (constant, zero dependence on [R]0)"
      },
      {
        "key": "Linear Plot",
        "label": "log[R] vs t has slope = -k / 2.303"
      },
      {
        "key": "Nuclear Decay",
        "label": "All natural and artificial radioactive decays obey first-order kinetics"
      }
    ],
    "doodleBadge": "k = (2.303/t) log([R]0/[R])\nt1/2 = 0.693 / k\nIndependent of [R]0",
    "doodleSubtext": "First Order Core",
    "explanation": "Because rate is proportional to the remaining amount, the fraction decaying per second remains perfectly constant, locking half-life into an invariant constant.",
    "alsoRemember": "A first-order reaction takes INFINITE time (t = ∞) to achieve 100% completion.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.2.",
    "neetTrap": "If initial concentration is doubled for a first-order reaction, the RATE doubles, but the HALF-LIFE remains completely UNCHANGED!",
    "tags": [
      "First Order",
      "Half Life",
      "0.693/k",
      "Radioactive Decay"
    ],
    "quiz": {
      "question": "A first-order reaction has a rate constant k = 6.93 × 10⁻³ s⁻¹. What is its half-life?",
      "options": [
        "10 seconds",
        "50 seconds",
        "100 seconds",
        "200 seconds"
      ],
      "answerIndex": 2,
      "explanation": "t1/2 = 0.693 / k = 0.693 / (6.93 × 10⁻³) = 100 seconds."
    }
  },
  {
    "id": "chem-ch12-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "First Order Percentage Benchmarks (t_99.9% = 10 × t1/2)",
    "mnemonicNumber": 6,
    "title": "First Order Percent Shortcuts: t75% = 2 t1/2, t87.5% = 3 t1/2, and t99.9% = 10 t1/2!",
    "badgeText": "NEET PYQ",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Every Half-Life Halves the Remaining Fraction! 50% (1) → 75% (2) → 87.5% (3) → 99.9% (10)!",
    "memoryHook": "The Golden Powers of 2: 1 t1/2 = 50% completed (50% left = ½). 2 t1/2 = 75% completed (25% left = ¼). 3 t1/2 = 87.5% completed (12.5% left = ⅛). 4 t1/2 = 93.75% completed ( 1/16 left). 10 t1/2 = 99.9% completed (1/1024 left ≈ 0.1%)! Formula: t_99.9% = 10 × t1/2! Also: t_99% = 2 × t_90%!",
    "fact": "First Order Percentage Completion Benchmarks: 1. Remaining fraction after n half-lives: [R] / [R]0 = (½)ⁿ. 2. Key Multipliers: • t_75% = 2 × t1/2 (since [R] = 25% = ¼). • t_87.5% = 3 × t1/2 (since [R] = 12.5% = ⅛). • t_93.75% = 4 × t1/2. • t_99% = (2.303 / k) log(100/1) = (2.303 / k) × 2 ≈ 6.64 × t1/2. • t_90% = (2.303 / k) log(100/10) = 2.303 / k ≈ 3.32 × t1/2. Therefore: t_99% = 2 × t_90%. • t_99.9% = (2.303 / k) log(100/0.1) = (2.303 / k) log(1000) = (2.303 × 3) / k = 6.909 / k = 10 × (0.693 / k) = 10 × t1/2!",
    "breakdown": [
      {
        "key": "t_75%",
        "label": "2 × t1/2"
      },
      {
        "key": "t_87.5%",
        "label": "3 × t1/2"
      },
      {
        "key": "t_99%",
        "label": "2 × t_90% ≈ 6.64 × t1/2"
      },
      {
        "key": "t_99.9%",
        "label": "EXACTLY 10 × t1/2 (Classic NEET PYQ derivation!)"
      }
    ],
    "doodleBadge": "t_75% = 2 × t1/2\nt_87.5% = 3 × t1/2\nt_99.9% = 10 × t1/2",
    "doodleSubtext": "Speed Multipliers",
    "explanation": "Because log(1000) = 3 and 2.303 × 3 = 6.909, dividing by 0.693 gives almost exactly 10, proving t_99.9% is 10 times the half-life.",
    "alsoRemember": "After n half-lives, remaining fraction is (½)ⁿ; after 7 half-lives, remaining amount is 1/128 ≈ 0.78% (99.2% completed).",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.2, Example 4.7.",
    "neetTrap": "Questions frequently ask: \"Prove that time required for 99.9% completion of a first-order reaction is 10 times the half-life!\" Memorize the factor 10 directly.",
    "tags": [
      "First Order Benchmarks",
      "t_99.9%",
      "Half Life Multiplier",
      "NEET PYQ"
    ],
    "quiz": {
      "question": "For a first-order reaction, the time required for 99.9% completion of the reaction is related to its half-life (t1/2) by:",
      "options": [
        "t_99.9% = 2 × t1/2",
        "t_99.9% = 4 × t1/2",
        "t_99.9% = 10 × t1/2",
        "t_99.9% = 100 × t1/2"
      ],
      "answerIndex": 2,
      "explanation": "t_99.9% = (2.303 / k) log(100 / 0.1) = (2.303 / k) × 3 = 6.909 / k = 10 × (0.693 / k) = 10 × t1/2."
    }
  },
  {
    "id": "chem-ch12-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "General Half-Life Relation with Initial Concentration",
    "mnemonicNumber": 7,
    "title": "Universal Half-Life Formula: t1/2 ∝ 1 / [R]0^(n - 1) (Order n Finder!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "t1/2 ∝ [R]0^(1 - n)! Zero Order = Direct; 1st Order = Flat; 2nd Order = Inverted!",
    "memoryHook": "Universal relation: (t1/2)_1 / (t1/2)_2 = ( [R]0_2 / [R]0_1 )^(n - 1). If doubling [R]0 doubles half-life → Zero order (n = 0)! If doubling [R]0 leaves half-life unchanged → 1st order (n = 1)! If doubling [R]0 halves the half-life → 2nd order (n = 2)!",
    "fact": "General Relation Between Half-Life and Initial Concentration: 1. Formula: t1/2 ∝ 1 / [R]0^(n - 1) = [R]0^(1 - n) (where n is the overall reaction order). 2. Summary Table: • Zero Order (n = 0): t1/2 ∝ [R]0¹ (directly proportional). • First Order (n = 1): t1/2 ∝ [R]0⁰ (independent of concentration). • Second Order (n = 2): t1/2 ∝ 1 / [R]0¹ (inversely proportional). • Third Order (n = 3): t1/2 ∝ 1 / [R]0² (inversely proportional to square of concentration). 3. Ratio Calculation: (t1/2)_A / (t1/2)_B = ( [R]0_B / [R]0_A )^(n - 1). Taking log gives: n = 1 + [ log((t1/2)_A / (t1/2)_B) / log([R]0_B / [R]0_A) ].",
    "breakdown": [
      {
        "key": "Universal Formula",
        "label": "t1/2 ∝ [R]0^(1 - n)"
      },
      {
        "key": "Zero Order (n=0)",
        "label": "t1/2 doubles when concentration doubles"
      },
      {
        "key": "First Order (n=1)",
        "label": "t1/2 stays constant regardless of concentration"
      },
      {
        "key": "Second Order (n=2)",
        "label": "t1/2 halves when concentration doubles"
      }
    ],
    "doodleBadge": "t1/2 ∝ [R]0^(1 - n)\nn=0: Direct | n=1: Flat\nn=2: Inverse | n=3: 1/[R]0²",
    "doodleSubtext": "Order Determination Tool",
    "explanation": "Plotting log(t1/2) vs log[R]0 yields a straight line with slope = (1 - n), from which the reaction order n is immediately determined.",
    "alsoRemember": "For nth order reaction, t_3/4 / t1/2 depends only on n and is constant for any given order.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.",
    "neetTrap": "Notice the exponent is (1 - n) or 1 / [R]0^(n - 1); do NOT write [R]0^(n - 1) in the numerator!",
    "tags": [
      "Half Life",
      "Reaction Order",
      "Universal Formula",
      "Initial Concentration"
    ],
    "quiz": {
      "question": "If doubling the initial concentration of a reactant causes its half-life to be halved, what is the order of the reaction?",
      "options": [
        "Zero order",
        "First order",
        "Second order",
        "Third order"
      ],
      "answerIndex": 2,
      "explanation": "From t1/2 ∝ 1 / [R]0^(n-1), if doubling [R]0 halves t1/2, then n - 1 = 1, so n = 2 (second order)."
    }
  },
  {
    "id": "chem-ch12-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "Pseudo First Order Reactions (Water in Excess)",
    "mnemonicNumber": 8,
    "title": "Pseudo First Order: Second-Order Reaction Masks as First Order when Solvent is in Massive Excess!",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Too Much Water to Notice! [H2O] Stays Constant, so Rate Law Collapses to First Order!",
    "memoryHook": "A bimolecular reaction with true rate = k’ [Ester] [H2O]. But water is the solvent (55.5 M) and barely changes from 55.5 to 55.49 M (effectively constant)! So k’ [H2O] merges into a new pseudo rate constant k! Rate = k [Ester] (Pseudo First Order)! Top Examples: 1) Acid hydrolysis of ethyl acetate. 2) Inversion of cane sugar!",
    "fact": "Pseudo First Order Reactions: 1. Definition: Reactions which are not truly first-order but under specific experimental conditions (when one reactant is present in huge stoichiometric excess) behave kinetically as first-order reactions. 2. Acid Hydrolysis of Ethyl Acetate: CH3COOC2H5 + H2O -(H⁺)→ CH3COOH + C2H5OH. Initial: 0.01 mol ester, 10 mol water. Final: 0 mol ester, 9.99 mol water. [H2O] remains practically unchanged (~55.5 M). Rate = k’ [Ester] [H2O] = k [Ester], where k = k’ [H2O]. 3. Inversion of Cane Sugar: C12H22O11 + H2O -(H⁺)→ C6H12O6 (glucose) + C6H12O6 (fructose). Molecularity = 2 (bimolecular), but Order = 1.",
    "breakdown": [
      {
        "key": "Molecularity vs Order",
        "label": "Molecularity = 2 (bimolecular collision), but Order = 1"
      },
      {
        "key": "Pseudo Rate Constant",
        "label": "k = k’ [Solvent in excess]"
      },
      {
        "key": "Classic Examples",
        "label": "Ester acid-hydrolysis & Cane sugar inversion (both catalyzed by H⁺ acid)"
      }
    ],
    "doodleBadge": "Pseudo 1st Order:\nMolecularity = 2 | Order = 1\nWater in massive excess",
    "doodleSubtext": "Pseudo First Order Concept",
    "explanation": "Because water is present in such overwhelming excess, its concentration cannot change measurably, collapsing the bimolecular rate equation into first order.",
    "alsoRemember": "In contrast, alkaline hydrolysis of esters (saponification: ester + NaOH) is a TRUE SECOND ORDER reaction (Order = 2, Molecularity = 2) because NaOH is not in massive excess.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.3.",
    "neetTrap": "Acidic hydrolysis of ester is PSEUDO FIRST ORDER; Alkaline hydrolysis of ester (with NaOH) is TRUE SECOND ORDER! Watch out for the catalyst.",
    "tags": [
      "Pseudo First Order",
      "Ester Hydrolysis",
      "Inversion of Cane Sugar",
      "Excess Solvent"
    ],
    "quiz": {
      "question": "What are the order and molecularity, respectively, of the acid-catalyzed hydrolysis of ethyl acetate in aqueous solution?",
      "options": [
        "Order = 1, Molecularity = 1",
        "Order = 2, Molecularity = 2",
        "Order = 1, Molecularity = 2",
        "Order = 2, Molecularity = 1"
      ],
      "answerIndex": 2,
      "explanation": "The reaction involves collision of two molecules (ester and water, molecularity = 2), but because water is in massive excess, the rate depends only on ester (pseudo first order, order = 1)."
    }
  },
  {
    "id": "chem-ch12-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-1",
    "topicTitle": "Initial Rate Method for Rate Law Determination",
    "mnemonicNumber": 9,
    "title": "Initial Rate Method: Change ONE Reactant at a Time; Spot the Power Factor!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Double [A]: Rate ×1 → 0 Order! Rate ×2 → 1st Order! Rate ×4 → 2nd Order! Rate ×8 → 3rd Order!",
    "memoryHook": "To find rate law Rate = k [A]ˣ [B]ʸ: Pick two experiments where [B] is held constant while [A] is multiplied by m: Rate2 / Rate1 = mˣ. If Rate is unchanged (m⁰) → x = 0! If Rate doubles (m¹) → x = 1! If Rate quadruples (m²) → x = 2! If Rate octuples (m³) → x = 3!",
    "fact": "Initial Rate Method: 1. Experimental Technique: Isolate one reactant at a time while keeping all other reactant concentrations constant, and observe how initial rate changes. 2. Mathematical Rule: (Rate2 / Rate1) = ([A]2 / [A]1)ˣ. (a) If [A] doubles and Rate is unchanged: 2ˣ = 1 → x = 0 (Zero order in A). (b) If [A] doubles and Rate doubles: 2ˣ = 2 → x = 1 (First order in A). (c) If [A] doubles and Rate quadruples: 2ˣ = 4 → x = 2 (Second order in A). (d) If [A] doubles and Rate increases 8 times: 2ˣ = 8 → x = 3 (Third order in A). (e) If [A] doubles and Rate increases 1.414 times: 2ˣ = √2 → x = 0.5 (Half order in A).",
    "breakdown": [
      {
        "key": "Zero Order in A",
        "label": "Rate is independent of [A] (e.g. Rate unchanged when [A] triples)"
      },
      {
        "key": "1st Order in A",
        "label": "Rate changes in direct 1:1 proportion to [A]"
      },
      {
        "key": "2nd Order in A",
        "label": "Rate scales with square: 3× concentration gives 9× rate"
      },
      {
        "key": "Overall Order",
        "label": "Sum of individual powers: n = x + y"
      }
    ],
    "doodleBadge": "Rate2/Rate1 = ([A]2/[A]1)ˣ\n×1 → 0 | ×2 → 1\n×4 → 2 | ×8 → 3",
    "doodleSubtext": "Initial Rate Isolation Rule",
    "explanation": "By holding [B] constant in experiments 1 and 2, the term [B] cancels out completely, leaving a simple single-variable exponential equation.",
    "alsoRemember": "Once powers x and y are found, plug any single row’s experimental data into the rate law to compute rate constant k and its units.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.2.2.",
    "neetTrap": "Always check if [B] was really kept constant between the two chosen experimental rows before computing the power for [A]!",
    "tags": [
      "Initial Rate Method",
      "Rate Law",
      "Experimental Kinetics",
      "Order Finder"
    ],
    "quiz": {
      "question": "In a reaction A + B → Products, doubling [A] while keeping [B] constant increases the rate by 4 times. Tripling [B] while keeping [A] constant triples the rate. What is the overall rate law?",
      "options": [
        "Rate = k [A] [B]",
        "Rate = k [A]² [B]",
        "Rate = k [A] [B]²",
        "Rate = k [A]² [B]²"
      ],
      "answerIndex": 1,
      "explanation": "Doubling [A] quadruples the rate (2² = 4), so order in A is 2. Tripling [B] triples the rate (3¹ = 3), so order in B is 1. Overall rate law is Rate = k [A]² [B]."
    }
  },
  {
    "id": "chem-ch12-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "Gaseous First Order Kinetics (k with Total Pressure pt)",
    "mnemonicNumber": 10,
    "title": "Gaseous 1st Order Kinetics: k = (2.303 / t) log[ pi / (2pi - pt) ] for A(g) → B(g) + C(g)!",
    "badgeText": "Formula Aid",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Substitute Pressure for Concentration! Denominator is Initial Double minus Total: (2pi - pt)!",
    "memoryHook": "For gaseous decomposition A(g) → B(g) + C(g): At t = 0, pressure is pi. At time t, total pressure is pt = (pi - x) + x + x = pi + x → x = pt - pi. Partial pressure of A remaining is pA = pi - x = pi - (pt - pi) = 2pi - pt! Formula: k = (2.303 / t) log10[ pi / (2pi - pt) ]!",
    "fact": "First Order Kinetics for Gas Phase Reactions: 1. Model Reaction: A(g) → B(g) + C(g). 2. Initial state (t = 0): pA = pi, pB = 0, pC = 0. Total pressure P0 = pi. 3. At time t: pA = pi - x; pB = x; pC = x. Total pressure pt = (pi - x) + x + x = pi + x. Therefore, x = pt - pi. 4. Remaining pressure of reactant A: pA = pi - x = pi - (pt - pi) = 2pi - pt. 5. Integrated Rate Constant: k = (2.303 / t) log10(pi / pA) = (2.303 / t) log10[ pi / (2pi - pt) ].",
    "breakdown": [
      {
        "key": "Initial Pressure (t=0)",
        "label": "pi = initial pressure of pure reactant A"
      },
      {
        "key": "Total Pressure (time t)",
        "label": "pt = measured total pressure of mixture"
      },
      {
        "key": "Golden Formula",
        "label": "k = (2.303 / t) log[ pi / (2pi - pt) ]"
      },
      {
        "key": "Classic Example",
        "label": "2N2O5(g) → 2N2O4(g) + O2(g) or SO2Cl2(g) → SO2(g) + Cl2(g)"
      }
    ],
    "doodleBadge": "A(g) → B(g) + C(g)\nk = (2.303/t) log[ pi / (2pi - pt) ]\npA = 2pi - pt",
    "doodleSubtext": "Gaseous Kinetics Formula",
    "explanation": "Pressure gauges monitor total system pressure pt continuously, which directly tracks reaction progress without needing chemical sampling.",
    "alsoRemember": "For A(g) → 2B(g) + C(g), total pressure pt = pi + 2x, so pA = pi - (pt - pi)/2 = (3pi - pt)/2.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.2, Example 4.6.",
    "neetTrap": "The denominator is (2pi - pt), NOT (pi - pt)! (pi - pt would be negative, making the logarithm mathematically undefined).",
    "tags": [
      "Gaseous Kinetics",
      "Total Pressure",
      "First Order",
      "SO2Cl2 Decomposition"
    ],
    "quiz": {
      "question": "For the first-order gaseous decomposition SO2Cl2(g) → SO2(g) + Cl2(g), what is the partial pressure of SO2Cl2 at time t in terms of initial pressure pi and total pressure pt?",
      "options": [
        "pi - pt",
        "2pi - pt",
        "pt - pi",
        "2pt - pi"
      ],
      "answerIndex": 1,
      "explanation": "Since pt = pi + x, x = pt - pi. The remaining pressure of SO2Cl2 is pi - x = pi - (pt - pi) = 2pi - pt."
    }
  },
  {
    "id": "chem-ch12-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-3",
    "topicTitle": "Arrhenius Equation & Activation Energy Graph",
    "mnemonicNumber": 11,
    "title": "Arrhenius Equation: k = A e^(-Ea / RT) (Slope of log k vs 1/T is -Ea / 2.303 R)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "k = A e^(-Ea / RT)! Plot log k vs 1/T: Straight Line Downhill with Slope = -Ea / 2.303 R!",
    "memoryHook": "Arrhenius formula: k = A · e^(-Ea / RT). Take log10: log10 k = log10 A - Ea / (2.303 R · T). This matches y = c + mx! Graph of log k vs 1/T gives: y-intercept = log A (Frequency Factor), and Slope = -Ea / (2.303 R)! Ea = -2.303 R × Slope!",
    "fact": "Arrhenius Equation: 1. Equation: k = A · e^(-Ea / RT) (where k = rate constant, A = pre-exponential factor / frequency factor, Ea = activation energy, R = 8.314 J/(mol·K), T = absolute temperature in Kelvin). 2. Fraction of Collisions with E ≥ Ea: Boltzmann factor f = e^(-Ea / RT). 3. Logarithmic Forms: ln k = ln A - Ea / (RT) [slope = -Ea / R]; log10 k = log10 A - Ea / (2.303 RT) [slope = -Ea / (2.303 R)]. 4. As Ea approaches 0: k approaches A (every collision leads to reaction). As T approaches ∞: k approaches A.",
    "breakdown": [
      {
        "key": "Arrhenius Formula",
        "label": "k = A e^(-Ea / RT)"
      },
      {
        "key": "Log10 Form",
        "label": "log k = log A - Ea / (2.303 RT)"
      },
      {
        "key": "Graph Slope",
        "label": "Slope = -Ea / (2.303 R) (Always negative slope!)"
      },
      {
        "key": "Frequency Factor A",
        "label": "Has the exact same units as rate constant k"
      }
    ],
    "doodleBadge": "k = A e^(-Ea / RT)\nPlot log k vs 1/T:\nSlope = -Ea / (2.303 R)",
    "doodleSubtext": "Arrhenius Activation Energy Plot",
    "explanation": "The factor e^(-Ea/RT) represents the Maxwell-Boltzmann fraction of colliding molecules whose kinetic energy equals or exceeds the activation energy barrier.",
    "alsoRemember": "If a reaction has Ea = 0, rate constant k is completely independent of temperature.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.4.",
    "neetTrap": "In the graph of log10 k vs 1/T, the slope is -Ea / (2.303 R). If the graph is ln k vs 1/T, the slope is -Ea / R (no 2.303)! Check the axis label.",
    "tags": [
      "Arrhenius Equation",
      "Activation Energy",
      "Slope",
      "Frequency Factor"
    ],
    "quiz": {
      "question": "What is the slope of the straight-line plot of log10 k against 1/T according to the Arrhenius equation?",
      "options": [
        "-Ea / R",
        "-Ea / (2.303 R)",
        "+Ea / (2.303 R)",
        "-Ea / (2.303 RT)"
      ],
      "answerIndex": 1,
      "explanation": "From log10 k = log10 A - Ea / (2.303 R T), the slope of the line plotted against 1/T is -Ea / (2.303 R)."
    }
  },
  {
    "id": "chem-ch12-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-3",
    "topicTitle": "Two-Temperature Arrhenius Equation & Temperature Coefficient",
    "mnemonicNumber": 12,
    "title": "Two-Temperature Arrhenius: log(k2 / k1) = (Ea / 2.303 R) [ (T2 - T1) / (T1 · T2) ] (Rate Doubles Every 10°C!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "log(k2/k1) = (Ea / 2.303 R) × (ΔT / T1·T2)! Temperature Coefficient: 10°C Rise Doubles the Rate!",
    "memoryHook": "Formula connecting two temperatures: log(k2 / k1) = (Ea / 2.303 R) [ (T2 - T1) / (T1 × T2) ] (remember T2 > T1 so both sides are positive!). Temperature Coefficient: μ = k_(T+10) / k_T ≈ 2 to 3! A 10°C rise doubles the rate NOT because collisions double (collisions increase only by ~3%), but because the fraction of molecules with E ≥ Ea DOUBLES!",
    "fact": "Temperature Effect on Reaction Rate: 1. Two-Temperature Arrhenius Formula: log(k2 / k1) = (Ea / 2.303 R) [ (T2 - T1) / (T1 · T2) ]. 2. Temperature Coefficient (μ): Ratio of rate constants at temperatures differing by 10°C: μ = k_(T+10) / k_T. For most chemical reactions, μ lies between 2 and 3 (rate doubles or triples for every 10°C rise). 3. Why Rate Doubles Every 10°C: At higher temperature, the peak of the Maxwell-Boltzmann distribution curve shifts to the right and broadens. The area under the curve representing molecules with energy ≥ Ea roughly DOUBLES for a mere 10 K rise in temperature! Total collision frequency increases by only ~1-2%.",
    "breakdown": [
      {
        "key": "Two-Temp Equation",
        "label": "log(k2 / k1) = (Ea / 2.303 R) [ (T2 - T1) / (T1 · T2) ]"
      },
      {
        "key": "Temperature Coefficient",
        "label": "k_(T+10) / k_T ≈ 2 to 3"
      },
      {
        "key": "Rate Multiplier Rule",
        "label": "If temperature rises by ΔT = 10 × n degrees, new rate = (μ)ⁿ × initial rate"
      },
      {
        "key": "Boltzmann Area",
        "label": "Fraction of molecules crossing Ea barrier doubles (this is the real reason rate doubles!)"
      }
    ],
    "doodleBadge": "log(k2/k1) = (Ea/2.303R)[ΔT / T1·T2]\n10°C Rise → Rate Doubles!\nArea under Ea doubles",
    "doodleSubtext": "Temperature Sensitivity Formula",
    "explanation": "The exponential sensitivity of e^(-Ea/RT) means even a slight increase in thermal kinetic energy allows a huge surge of new molecules to conquer the activation barrier.",
    "alsoRemember": "If temperature increases from 20°C to 50°C (ΔT = 30°C = 3 intervals of 10°C), assuming μ = 2, the rate increases by 2³ = 8 times!",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.4, Figure 4.10.",
    "neetTrap": "Why does rate double for a 10°C rise? NOT because collision frequency doubles (it increases by only ~1.5%), but because the FRACTION OF MOLECULES WITH E ≥ Ea DOUBLES!",
    "tags": [
      "Arrhenius Equation",
      "Temperature Coefficient",
      "Maxwell Boltzmann",
      "Rate Doubling"
    ],
    "quiz": {
      "question": "What is the primary physical reason why the rate of a chemical reaction roughly doubles for every 10°C rise in temperature?",
      "options": [
        "The total collision frequency doubles",
        "The fraction of molecules possessing kinetic energy greater than activation energy doubles",
        "The activation energy of the reaction drops to half",
        "The reactant concentration doubles"
      ],
      "answerIndex": 1,
      "explanation": "A 10 K rise in temperature roughly doubles the area under the Maxwell-Boltzmann distribution curve representing molecules having energy ≥ Ea."
    }
  },
  {
    "id": "chem-ch12-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-3",
    "topicTitle": "Activation Energy Barrier & Reaction Enthalpy (ΔH = Ea(f) - Ea(b))",
    "mnemonicNumber": 13,
    "title": "Energy Profile: Threshold = Reactant Energy + Ea | ΔH = Ea(forward) - Ea(backward)!",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Reactants Must Climb the Hill (Ea)! ΔH = Forward Hill minus Backward Hill!",
    "memoryHook": "Threshold Energy (E_th) is the peak of the mountain! Activation Energy (Ea) is the extra hill to climb: Ea = E_threshold - E_reactants! For forward vs reverse: ΔH = Ea(forward) - Ea(backward). If Ea(forward) < Ea(backward), ΔH is negative (EXOTHERMIC)! If Ea(forward) > Ea(backward), ΔH is positive (ENDOTHERMIC)!",
    "fact": "Potential Energy Diagram for Chemical Reactions: 1. Threshold Energy (E_th): The minimum total energy that colliding reactant molecules must possess to overcome repulsion and form products. 2. Activation Energy (Ea): Extra energy supplied to reactants to reach threshold energy: Ea = E_threshold - E_reactants. 3. Enthalpy of Reaction (ΔH): ΔH = H_products - H_reactants = Ea(forward) - Ea(backward). (a) Exothermic (ΔH < 0): Ea(f) < Ea(b). Products sit at lower energy than reactants. (b) Endothermic (ΔH > 0): Ea(f) > Ea(b). Products sit at higher energy than reactants. For endothermic reactions, minimum possible activation energy is Ea(f) ≥ ΔH.",
    "breakdown": [
      {
        "key": "Threshold Energy",
        "label": "E_th = E_reactants + Ea(forward)"
      },
      {
        "key": "Enthalpy Formula",
        "label": "ΔH = Ea(forward) - Ea(backward)"
      },
      {
        "key": "Exothermic (ΔH < 0)",
        "label": "Ea(backward) > Ea(forward)"
      },
      {
        "key": "Endothermic (ΔH > 0)",
        "label": "Ea(forward) > Ea(backward) (Forward hill is taller!)"
      }
    ],
    "doodleBadge": "Ea = E_threshold - E_reactants\nΔH = Ea(f) - Ea(b)\nEndo: Ea(f) > ΔH",
    "doodleSubtext": "Potential Energy Diagrams",
    "explanation": "The peak of the potential energy curve represents the transition state (activated complex), where old bonds are partially breaking while new bonds are partially forming.",
    "alsoRemember": "For an endothermic reaction, the activation energy of the forward reaction can NEVER be less than the reaction enthalpy (Ea(f) ≥ ΔH).",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.4, Figure 4.8.",
    "neetTrap": "For an endothermic reaction (ΔH = +50 kJ/mol), Ea(forward) MUST be GREATER than 50 kJ/mol! It can never be smaller than ΔH.",
    "tags": [
      "Activation Energy",
      "Threshold Energy",
      "Enthalpy of Reaction",
      "Potential Energy Curve"
    ],
    "quiz": {
      "question": "For an endothermic reaction where ΔH = +40 kJ/mol, what is the minimum possible value for the activation energy of the forward reaction (Ea)?",
      "options": [
        "Zero",
        "Less than 40 kJ/mol",
        "Equal to or greater than 40 kJ/mol",
        "Negative"
      ],
      "answerIndex": 2,
      "explanation": "Since ΔH = Ea(forward) - Ea(backward) and Ea(backward) must be ≥ 0, Ea(forward) = ΔH + Ea(backward) ≥ 40 kJ/mol."
    }
  },
  {
    "id": "chem-ch12-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-3",
    "topicTitle": "Effect of Catalyst on Reaction Kinetics & Equilibrium",
    "mnemonicNumber": 14,
    "title": "Catalyst Truths: Lowers Activation Energy (Ea); Speeds BOTH Ways; Leaves ΔH, ΔG & K UNTOUCHED!",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Catalyst Builds a Lower Tunnel Through the Mountain! Speeds Forward & Reverse by the Exact Same Factor!",
    "memoryHook": "A catalyst lowers the activation energy hill (Ea) by providing an alternate reaction pathway! WHAT IT DOES: Lowers Ea(forward) and Ea(backward) by the EXACT SAME amount; reaches equilibrium faster! WHAT IT NEVER CHANGES: ΔH is unchanged, ΔG is unchanged, Equilibrium Constant K is 100% UNCHANGED!",
    "fact": "Action of a Catalyst: 1. Lowers Activation Energy: Provides an alternate reaction mechanism with a lower activation energy barrier (Ea_cat < Ea_uncat). 2. Equal Acceleration: Lowers the activation energy of BOTH forward and backward reactions by the identical amount. Therefore, rates of forward and reverse reactions increase by the EXACT same factor. 3. Equilibrium Invariance: A catalyst does NOT alter the equilibrium constant (K) or the equilibrium composition of the mixture; it merely reduces the time needed to establish equilibrium. 4. Thermodynamic Invariance: A catalyst does NOT change Gibbs free energy (ΔG), Enthalpy (ΔH), or Entropy (ΔS). It cannot make a non-spontaneous reaction (ΔG > 0) spontaneous.",
    "breakdown": [
      {
        "key": "What Catalyst Changes",
        "label": "Lowers activation energy Ea; increases rate constant k; shortens equilibrium time"
      },
      {
        "key": "What Catalyst Leaves Unchanged",
        "label": "ΔH, ΔG, ΔS, and Equilibrium Constant K are 100% UNCHANGED"
      },
      {
        "key": "Forward vs Backward",
        "label": "Accelerates forward and backward rates by identical factor"
      }
    ],
    "doodleBadge": "Catalyst: Lowers Ea\nAccelerates Forward & Reverse Equally\nΔH, ΔG, K = UNCHANGED!",
    "doodleSubtext": "Catalysis Principles",
    "explanation": "A catalyst is like an elevator in a building: it provides an effortless route between floors, but the height difference between the floors (ΔH) remains completely unchanged.",
    "alsoRemember": "Inhibitor (Negative Catalyst) increases activation energy or poisons the catalyst, slowing down the reaction rate.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.4.1.",
    "neetTrap": "Does a catalyst change the equilibrium constant K? NEVER! It increases rates of forward and reverse reactions equally, so K = k_forward / k_backward remains constant.",
    "tags": [
      "Catalyst",
      "Activation Energy",
      "Equilibrium Constant",
      "NEET Trap"
    ],
    "quiz": {
      "question": "Which of the following thermodynamic quantities is altered by the addition of a catalyst to a reversible chemical reaction?",
      "options": [
        "Enthalpy of reaction (ΔH)",
        "Gibbs free energy change (ΔG)",
        "Equilibrium constant (K)",
        "Activation energy (Ea)"
      ],
      "answerIndex": 3,
      "explanation": "A catalyst provides an alternate pathway with a lower activation energy (Ea), while leaving thermodynamic state functions (ΔH, ΔG) and the equilibrium constant (K) unchanged."
    }
  },
  {
    "id": "chem-ch12-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-3",
    "topicTitle": "Collision Theory: Steric Factor (P) & Activation Energy",
    "mnemonicNumber": 15,
    "title": "Collision Theory: Rate = P · Z_AB · e^(-Ea / RT) (Collisions Must Have Energy AND Proper Orientation!)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Energy Barrier + Orientation Barrier! Must Hit Hard Enough AND Face the Right Way!",
    "memoryHook": "Formula: Rate = P · Z_AB · e^(-Ea / RT). Two hurdles for an effective collision: 1) Energy Factor (e^(-Ea/RT)): Colliding molecules must have kinetic energy ≥ Threshold energy! 2) Steric / Probability Factor (P): Molecules must collide with proper spatial orientation so reacting atoms face each other! (P < 1 for complex molecules)!",
    "fact": "Collision Theory of Chemical Reactions (Arrhenius, Trautz, Lewis): 1. Collision Frequency (Z_AB): Number of binary collisions per second per unit volume of the reaction mixture (~10²⁵ to 10²⁸ collisions/(s·cm³)). 2. Energy Factor (f = e^(-Ea/RT)): Fraction of colliding molecules that possess kinetic energy equal to or greater than the activation energy (E ≥ Ea). 3. Steric / Probability Factor (P): Accounts for the fraction of collisions that occur with the proper spatial orientation to allow bond breaking and bond making. 4. Modified Rate Equation: Rate = P · Z_AB · e^(-Ea / RT). Compared to Arrhenius k = A e^(-Ea/RT), frequency factor A = P · Z_AB.",
    "breakdown": [
      {
        "key": "Collision Frequency (Z_AB)",
        "label": "Total collisions occurring per second per cm³"
      },
      {
        "key": "Energy Criterion",
        "label": "e^(-Ea / RT) = fraction of collisions with kinetic energy ≥ Ea"
      },
      {
        "key": "Orientation Criterion (P)",
        "label": "Steric factor P represents the fraction with proper geometry"
      },
      {
        "key": "Arrhenius Pre-exponential",
        "label": "A = P × Z_AB"
      }
    ],
    "doodleBadge": "Rate = P · Z_AB · e^(-Ea / RT)\n1) Energy Barrier (Ea)\n2) Orientation Barrier (P)",
    "doodleSubtext": "Collision Theory Foundations",
    "explanation": "For spherical atoms (like 2 Br· → Br2), orientation is irrelevant (P ≈ 1); for complex organic molecules, only a tiny fraction of collisions hit at the exact reactive pocket (P << 1).",
    "alsoRemember": "Collision theory assumes reactant molecules to be hard, rigid spheres with zero internal structure, which limits its accuracy for complex macromolecular reactions.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.4.2.",
    "neetTrap": "Not all energetic collisions produce products! Even if molecules have energy > Ea, collision is INEFFECTIVE if spatial orientation is incorrect.",
    "tags": [
      "Collision Theory",
      "Steric Factor",
      "Orientation Factor",
      "Threshold Energy"
    ],
    "quiz": {
      "question": "According to collision theory, which two conditions are MANDATORY for a collision between reactant molecules to lead to product formation?",
      "options": [
        "High pressure and low temperature",
        "Sufficient threshold energy and proper spatial orientation",
        "Presence of a catalyst and zero activation energy",
        "Equal molecular masses and high velocity"
      ],
      "answerIndex": 1,
      "explanation": "Molecules must collide with kinetic energy equal to or greater than the threshold energy AND possess the proper spatial orientation for bond rearrangement."
    }
  },
  {
    "id": "chem-ch12-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-1",
    "topicTitle": "Multi-Step Reactions: The Slowest Step is the Rate Determining Step (RDS)",
    "mnemonicNumber": 16,
    "title": "Multi-Step Reactions: The Slowest Step is Bottleneck King (Rate Determining Step RDS)!",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "The Slow Step Rules the Speed! Intermediates in the RDS Must Be Substituted Out Using Fast Equilibrium!",
    "memoryHook": "A multi-step reaction can only move as fast as its slowest elementary bottleneck: Rate of reaction = Rate of the SLOW step! If the slow step contains an unstable intermediate, use the preceding fast equilibrium step (K_eq = [intermediate]/[reactants]) to replace it with stable reactants!",
    "fact": "Rate Determining Step (RDS) in Complex Reactions: 1. Principle: The slowest elementary step in a reaction mechanism controls the overall reaction rate and is called the Rate Determining Step (RDS). 2. Example: 2NO + O2 → 2NO2. Step 1 (Fast Equilibrium): NO + NO ⇌ N2O2 (K_eq = [N2O2] / [NO]²). Step 2 (Slow RDS): N2O2 + O2 → 2NO2. Rate = k [N2O2] [O2]. Since N2O2 is an unstable intermediate, substitute [N2O2] = K_eq [NO]²: Rate = k · K_eq · [NO]² [O2] = k_obs [NO]² [O2] (Overall third order!).",
    "breakdown": [
      {
        "key": "Slowest Step",
        "label": "Bottleneck that determines the rate law equation"
      },
      {
        "key": "Intermediates Rule",
        "label": "Reaction intermediates CANNOT appear in the final overall rate law!"
      },
      {
        "key": "Fast Equilibrium Substitution",
        "label": "Express intermediate concentration in terms of reactants via K_eq"
      }
    ],
    "doodleBadge": "Rate = Rate of SLOW Step (RDS)\nSubstitute Intermediates\nUsing Fast Equilibrium",
    "doodleSubtext": "Mechanism Rate Law Derivation",
    "explanation": "Just like an assembly line with one slow worker determines total factory output, the slowest elementary step dictates the observable kinetics of the entire multi-step process.",
    "alsoRemember": "For ozone decomposition 2O3 → 3O2: Step 1 (fast): O3 ⇌ O2 + O. Step 2 (slow): O + O3 → 2O2. Rate = k [O][O3] = k’ [O3]² [O2]⁻¹ (Negative first order in O2!).",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.2.4.",
    "neetTrap": "The final rate law can NEVER contain a reaction intermediate! You must always express intermediates in terms of starting reactants.",
    "tags": [
      "RDS",
      "Rate Determining Step",
      "Mechanism",
      "Intermediate Substitution"
    ],
    "quiz": {
      "question": "For the reaction 2NO + O2 → 2NO2 with mechanism: (1) NO + NO ⇌ N2O2 (fast equilibrium), (2) N2O2 + O2 → 2NO2 (slow), what is the overall order of the reaction?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answerIndex": 2,
      "explanation": "Rate = k [N2O2][O2]. Substituting [N2O2] = K[NO]² yields Rate = k’ [NO]²[O2], giving an overall order of 2 + 1 = 3."
    }
  },
  {
    "id": "chem-ch12-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "Inversion of Cane Sugar Kinetics (Polarimeter Formula)",
    "mnemonicNumber": 17,
    "title": "Inversion of Cane Sugar: k = (2.303 / t) log[ (r0 - r∞) / (rt - r∞) ] (Dextro Flips to Levo!)",
    "badgeText": "Formula Aid",
    "importance": "Medium",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Dextro Sucrose (+66.5°) Inverts into Levo Mixture (-39.9°)! Total Optical Swing is (r0 - r∞)!",
    "memoryHook": "Sucrose is DEXTROROTATORY (+66.5°). On acid hydrolysis, it produces D-glucose (+52.5°) and D-fructose (-92.4°). Because levorotatory fructose is much stronger than dextro glucose, the net mixture is LEVOROTATORY (-39.9°)! Optical rotation flips from (+) to (-)! Polarimeter Formula: k = (2.303 / t) log[ (r0 - r∞) / (rt - r∞) ]!",
    "fact": "Kinetics of Inversion of Cane Sugar: 1. Reaction: C12H22O11 (Sucrose, [α] = +66.5°) + H2O -(H⁺)→ C6H12O6 (Glucose, [α] = +52.5°) + C6H12O6 (Fructose, [α] = -92.4°). Net rotation of equimolar mixture is levorotatory (~ -39.9°). The sign of optical rotation inverts from (+) to (-), giving the reaction its name: \"Inversion of Cane Sugar\". 2. Polarimetric Kinetics: Optical rotation angle r is tracked at time t = 0 (r0), time t (rt), and time t = ∞ (r∞). Reactant sucrose concentration is proportional to optical rotation difference: [R]0 ∝ (r0 - r∞), and [R]t ∝ (rt - r∞). Rate constant: k = (2.303 / t) log10[ (r0 - r∞) / (rt - r∞) ].",
    "breakdown": [
      {
        "key": "Initial Angle (t=0)",
        "label": "r0 is positive (pure dextrorotatory sucrose)"
      },
      {
        "key": "Infinite Angle (t=∞)",
        "label": "r∞ is negative (levorotatory invert sugar mixture)"
      },
      {
        "key": "Polarimeter Formula",
        "label": "k = (2.303 / t) log[ (r0 - r∞) / (rt - r∞) ]"
      },
      {
        "key": "Invert Sugar",
        "label": "The resulting equimolar glucose-fructose mixture is called Invert Sugar (sweeter than sucrose, found in honey)"
      }
    ],
    "doodleBadge": "Sucrose (+66.5°) → Invert Sugar (-39.9°)\nk = (2.303/t) log[(r0 - r∞)/(rt - r∞)]",
    "doodleSubtext": "Polarimetric Kinetics Formula",
    "explanation": "Fructose has a much higher specific rotation magnitude (-92.4°) than glucose (+52.5°), completely dominating the final optical rotation and inverting the sign.",
    "alsoRemember": "Hydrolysis of starch produces maltose; hydrolysis of maltose yields only glucose (no optical inversion).",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter & Biomolecules Chapter.",
    "neetTrap": "In the denominator of the polarimeter formula, remember that r∞ is a NEGATIVE number, so (rt - r∞) = rt - (-|r∞|) = rt + |r∞|!",
    "tags": [
      "Inversion of Cane Sugar",
      "Polarimeter",
      "Optical Rotation",
      "Kinetics Formula"
    ],
    "quiz": {
      "question": "Why does the hydrolysis of sucrose into glucose and fructose result in an optical inversion from dextrorotatory to levorotatory?",
      "options": [
        "Glucose is levorotatory",
        "Fructose has a higher magnitude of levorotation (-92.4°) than glucose’s dextrorotation (+52.5°)",
        "Water molecules invert light",
        "Sucrose is levorotatory"
      ],
      "answerIndex": 1,
      "explanation": "The specific levorotation of D-fructose (-92.4°) exceeds the dextrorotation of D-glucose (+52.5°), making the net equimolar mixture levorotatory."
    }
  },
  {
    "id": "chem-ch12-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-2",
    "topicTitle": "Ester Hydrolysis: Acid-Catalyzed (Pseudo 1st) vs Saponification (True 2nd)",
    "mnemonicNumber": 18,
    "title": "Ester Hydrolysis Showdown: Acid Catalysis is Pseudo 1st Order; Saponification (NaOH) is True 2nd Order!",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFF4E5",
    "badgeColor": "#FF8D78",
    "mnemonic": "Acid Uses Water (Excess) = Pseudo 1st Order! Base Uses OH⁻ (Equimolar) = True 2nd Order!",
    "memoryHook": "1) Acid Hydrolysis: Ester + H2O -(H⁺)→ Acid + Alcohol. Water is solvent in huge excess! Rate = k [Ester] (Pseudo First Order). 2) Alkaline Hydrolysis (Saponification): Ester + NaOH → Soap (RCOONa) + Alcohol. Hydroxide OH⁻ is a reactant in comparable concentration! Rate = k [Ester] [OH⁻] (True Second Order)!",
    "fact": "Comparison of Ester Hydrolysis Pathways: 1. Acid-Catalyzed Hydrolysis: CH3COOC2H5 + H2O -(H⁺)→ CH3COOH + C2H5OH. Reversible reaction. Water is in massive excess, so its concentration is constant. Rate Law: Rate = k [Ester]. Kinetics: Pseudo First Order (Order = 1, Molecularity = 2). Tracked by titrating with standard NaOH. 2. Alkaline Hydrolysis (Saponification): CH3COOC2H5 + NaOH → CH3COONa + C2H5OH. Irreversible reaction. Both ester and NaOH concentrations decrease at comparable rates. Rate Law: Rate = k [Ester] [OH⁻]. Kinetics: True Second Order (Order = 2, Molecularity = 2). Units of k = L·mol⁻¹·s⁻¹.",
    "breakdown": [
      {
        "key": "Acid Catalysis (H⁺)",
        "label": "Pseudo 1st Order (Rate = k[Ester], units of k = s⁻¹)"
      },
      {
        "key": "Base Catalysis (NaOH)",
        "label": "True 2nd Order (Rate = k[Ester][OH⁻], units of k = L·mol⁻¹·s⁻¹)"
      },
      {
        "key": "Saponification Meaning",
        "label": "Manufacture of soap by alkaline hydrolysis of glyceryl esters (fats/oils)"
      }
    ],
    "doodleBadge": "Acid: Pseudo 1st Order (k in s⁻¹)\nBase: True 2nd Order (k in L·mol⁻¹·s⁻¹)",
    "doodleSubtext": "Ester Hydrolysis Kinetics Duel",
    "explanation": "In alkaline hydrolysis, the strongly nucleophilic hydroxide ion OH⁻ attacks the carbonyl carbon directly and is consumed stoichiometrically, preventing pseudo-order collapse.",
    "alsoRemember": "In acid hydrolysis, H⁺ acts as a true catalyst and is regenerated, while in alkaline hydrolysis, OH⁻ is consumed to form carboxylate salt.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.3 & Class 12 Amines.",
    "neetTrap": "Do not assume all ester hydrolyses are pseudo first order! Alkaline hydrolysis (with NaOH) is TRUE SECOND ORDER.",
    "tags": [
      "Ester Hydrolysis",
      "Saponification",
      "Second Order",
      "Pseudo First Order"
    ],
    "quiz": {
      "question": "What is the overall order of the alkaline hydrolysis of ethyl acetate with sodium hydroxide (saponification)?",
      "options": [
        "Zero order",
        "Pseudo first order",
        "First order",
        "Second order"
      ],
      "answerIndex": 3,
      "explanation": "Alkaline hydrolysis consumes both ester and hydroxide ions at comparable concentrations (Rate = k [Ester] [OH⁻]), making it a true second-order reaction."
    }
  },
  {
    "id": "chem-ch12-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-1",
    "topicTitle": "Photochemical Reactions: Zero Order Kinetics",
    "mnemonicNumber": 19,
    "title": "Photochemical Reactions: Rate Depends ONLY on Light Intensity (Zero Order with Reactants)!",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "H2 + Cl2 over Water in Sunlight: Zero Order! Light Photons Control the Clock!",
    "memoryHook": "The combination of H2 and Cl2 over water in the presence of sunlight: H2(g) + Cl2(g) -(hν)→ 2HCl(g). Rate = k [H2]⁰ [Cl2]⁰ = k! Rate depends strictly on the INTENSITY OF INCIDENT LIGHT (photons absorbed per second), and is completely independent of reactant gas concentrations (Zero Order)!",
    "fact": "Photochemical Reactions and Zero-Order Kinetics: 1. Example: H2(g) + Cl2(g) -(sunlight over water)→ 2HCl(g). 2. Rate Law: Rate = k [H2]⁰ [Cl2]⁰ = k · I (where I is light intensity). 3. Mechanism: Light photons (hν) dissociate Cl2 molecules into chlorine radicals: Cl2 + hν → 2Cl·. The rate of radical generation depends exclusively on photon flux (light brightness). At fixed light intensity, increasing or decreasing [H2] or [Cl2] has zero effect on reaction rate. 4. Other Photochemical Zero-Order Systems: Photochemical decomposition of HI; Photosynthesis in plants at light-limiting conditions.",
    "breakdown": [
      {
        "key": "Reaction",
        "label": "H2(g) + Cl2(g) -(hν)→ 2HCl(g)"
      },
      {
        "key": "Rate Law",
        "label": "Rate = k (Zero order with respect to both H2 and Cl2)"
      },
      {
        "key": "Controlling Factor",
        "label": "Intensity of incident light (photons absorbed per second)"
      }
    ],
    "doodleBadge": "H2 + Cl2 -(hν)→ 2HCl\nZero Order Kinetics\nRate ∝ Light Intensity",
    "doodleSubtext": "Photochemical Kinetics",
    "explanation": "Because every absorbed photon initiates a long free-radical chain reaction, the photon absorption rate (light intensity) acts as the sole pacing bottleneck.",
    "alsoRemember": "In diffuse sunlight, the reaction proceeds smoothly; in direct bright sunlight, it explodes violently.",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter, Section 4.3.1.",
    "neetTrap": "The reaction H2 + Cl2 → 2HCl in dark does not occur; in sunlight over water it is ZERO ORDER, NOT second order!",
    "tags": [
      "Photochemical Reaction",
      "Zero Order",
      "Light Intensity",
      "H2 and Cl2"
    ],
    "quiz": {
      "question": "What is the order of the photochemical reaction between H2 and Cl2 over water in the presence of sunlight?",
      "options": [
        "Zero order",
        "First order",
        "Second order",
        "Third order"
      ],
      "answerIndex": 0,
      "explanation": "The reaction rate depends only on the intensity of incident light photons and is independent of the concentrations of H2 and Cl2, making it zero order."
    }
  },
  {
    "id": "chem-ch12-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Chemical Kinetics",
    "topicId": "chem-top-12-3",
    "topicTitle": "Chemical Kinetics Master Summary Map",
    "mnemonicNumber": 20,
    "title": "Kinetics Master Map: Rate Laws, Zero vs First Order, Arrhenius & Collision Theory",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Rates (d[R]/dt) → Orders (0th [R]0/2k vs 1st 0.693/k) → Arrhenius (k = Ae^-Ea/RT) → Collision (P·Z·e^-Ea/RT)!",
    "memoryHook": "The entire kinetics framework: 1) Rates & Orders: Rate = k[A]ˣ[B]ʸ, unit = (mol/L)^(1-n)·s⁻¹. 2) Zero Order: [R]=[R]0-kt, t1/2=[R]0/2k. 3) First Order: k=(2.303/t)log([R]0/[R]), t1/2=0.693/k, t_99.9%=10 t1/2. 4) Temperature: Arrhenius k=Ae^(-Ea/RT), log(k2/k1)=(Ea/2.303R)[ΔT/T1T2]. 5) Mechanism: Slow step is RDS, Collision theory Rate = P·Z·e^(-Ea/RT)!",
    "fact": "Master Blueprint of Chapter 4 Chemical Kinetics: 1. Rate Representation: -(1/a) d[A]/dt = +(1/c) d[C]/dt. 2. Units of k: (mol/L)^(1-n) · s⁻¹. 3. Zero Order: Linear concentration decay, t1/2 ∝ [R]0. 4. First Order: Exponential decay, t1/2 = 0.693/k (independent of concentration). 5. Half-life general: t1/2 ∝ [R]0^(1-n). 6. Arrhenius Equation: Temperature dependence of rate constant, slope = -Ea / 2.303 R. 7. Collision Theory: Energy requirement + steric orientation factor.",
    "breakdown": [
      {
        "key": "Rate & Units",
        "label": "Rate = k[A]ⁿ; Unit of k reveals order instantly"
      },
      {
        "key": "Integrated Laws",
        "label": "0th: [R]=[R]0-kt | 1st: k=(2.303/t)log([R]0/[R]) | t1/2=0.693/k"
      },
      {
        "key": "Temperature & Ea",
        "label": "Arrhenius k=Ae^(-Ea/RT), 10°C rise doubles rate"
      },
      {
        "key": "Mechanism & Catalysis",
        "label": "Slowest step is RDS; Catalyst lowers Ea for both directions equally"
      }
    ],
    "doodleBadge": "0th Order: t1/2 = [R]0/2k\n1st Order: t1/2 = 0.693/k\nArrhenius: k = Ae^(-Ea/RT)",
    "doodleSubtext": "Chapter 4 Kinetics Master Blueprint",
    "explanation": "While thermodynamics tells us IF a reaction can happen (ΔG < 0), chemical kinetics determines HOW FAST it occurs and through what molecular pathway.",
    "alsoRemember": "Always remember: a catalyst speeds up rate by lowering Ea, but has zero effect on thermodynamics (ΔG, ΔH, and K stay unchanged).",
    "ncertConnection": "NCERT Class 12 Chemistry Chemical Kinetics Chapter.",
    "neetTrap": "Master the contrast between zero order (t1/2 proportional to concentration) and first order (t1/2 independent of concentration)!",
    "tags": [
      "Chemical Kinetics",
      "Master Map",
      "Arrhenius",
      "Zero Order",
      "First Order"
    ],
    "quiz": {
      "question": "Which of the following is true for a first-order chemical reaction?",
      "options": [
        "The half-life is directly proportional to initial concentration",
        "The rate constant has units of mol·L⁻¹·s⁻¹",
        "The half-life is completely independent of initial reactant concentration",
        "The reaction goes to 100% completion in finite time"
      ],
      "answerIndex": 2,
      "explanation": "For a first-order reaction, t1/2 = 0.693 / k, which is an invariant constant having zero dependence on initial concentration."
    }
  }
];
