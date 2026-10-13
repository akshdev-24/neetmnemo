/**
 * Biology Chapter 12: Respiration in Plants
 * 20 High-Yield NEET Mnemonics
 */

export const bioCh12Mnemonics = [
  {
    "id": "mnemo-bio-ch12-01",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-1",
    "topicTitle": "Glycolysis Sequence",
    "topic": "Glycolysis 10-Step Sequence (EMP Pathway)",
    "mnemonicNumber": 1,
    "title": "Glycolysis Sequence: Good Girlfriend Fights Foolish Boys, Picking Pumpkin Pie Daily",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Glucose → G6P → F6P → F1,6BP → DHAP & G3P → 1,3-BPG → 3-PGA → 2-PGA → PEP → Pyruvate",
    "memoryHook": "Good Girlfriend Fights Foolish Boys, Picking Pumpkin Pie Daily: 10 steps in cytoplasm of ALL cells! 1 Glucose (6C) splits into 2 Pyruvate (3C).",
    "fact": "Glycolysis (EMP pathway - Embden, Meyerhof, Parnas) occurs in the cytoplasm of all living organisms. It breaks 1 glucose (6C) into 2 pyruvic acid (3C) molecules through 10 enzyme-catalyzed steps without using oxygen.",
    "breakdown": [
      {
        "key": "1. Glucose → G6P",
        "label": "Hexokinase invests 1st ATP"
      },
      {
        "key": "2. G6P → F6P",
        "label": "Phosphohexose isomerase"
      },
      {
        "key": "3. F6P → F1,6BP",
        "label": "Phosphofructokinase (PFK) invests 2nd ATP (committed pacemaker step)"
      },
      {
        "key": "4. F1,6BP → DHAP + G3P",
        "label": "Aldolase splits 6C into two 3C isomers"
      },
      {
        "key": "5. DHAP ⇌ G3P",
        "label": "Triose phosphate isomerase converts DHAP to G3P (pathway doubles here)"
      },
      {
        "key": "6. G3P → 1,3-BPG",
        "label": "G3P dehydrogenase generates 2 NADH + H+"
      },
      {
        "key": "7. 1,3-BPG → 3-PGA",
        "label": "Phosphoglycerate kinase yields 1st pair of ATP (substrate-level)"
      },
      {
        "key": "8. 3-PGA → 2-PGA",
        "label": "Phosphoglyceromutase shifts phosphate from C3 to C2"
      },
      {
        "key": "9. 2-PGA → PEP",
        "label": "Enolase removes H2O to form high-energy PEP"
      },
      {
        "key": "10. PEP → Pyruvate",
        "label": "Pyruvate kinase yields 2nd pair of ATP (substrate-level)"
      }
    ],
    "doodleBadge": "10 Steps EMP",
    "doodleSubtext": "Cytoplasm Pathway",
    "explanation": "Steps 1 and 3 consume 1 ATP each (total 2 ATP invested). Steps 7 and 10 generate 2 ATP each (total 4 ATP produced). Net gain = 2 ATP and 2 NADH.",
    "alsoRemember": "Glycolysis is the ONLY cellular respiration pathway present in obligate anaerobes.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.2 & Figure 12.1.",
    "neetTrap": "Gross ATP generated in glycolysis is 4 ATP; NET ATP gained is 2 ATP.",
    "tags": [
      "Glycolysis",
      "EMP Pathway",
      "Cytoplasm",
      "Pyruvate",
      "Substrate Phosphorylation"
    ],
    "expandedMeaning": "10-step sequence, enzymes, ATP investment/generation, and net EMP gain.",
    "whyItWorks": "Classic sentence mnemonic maps the initials of all 10 metabolites in exact order.",
    "visualDescription": "A 10-step downhill slide in cytoplasm: glucose rolls down, takes 2 ATP hits, splits into two 3-carbon cars, and zooms to 2 pyruvates.",
    "neetRelevance": "Matching enzymes to steps and counting ATP/NADH.",
    "commonMistake": "Forgetting that after aldolase, every reaction occurs TWICE per glucose molecule.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which enzyme catalyzes the conversion of Glucose-6-phosphate into Fructose-6-phosphate during glycolysis?",
      "options": [
        "Hexokinase",
        "Phosphofructokinase",
        "Phosphohexose isomerase",
        "Aldolase"
      ],
      "answerIndex": 2,
      "explanation": "Phosphohexose isomerase catalyzes the reversible isomerization of Glucose-6-phosphate into Fructose-6-phosphate."
    }
  },
  {
    "id": "mnemo-bio-ch12-02",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-1",
    "topicTitle": "Glycolysis Energetics",
    "topic": "ATP Investment vs Generation Steps in Glycolysis",
    "mnemonicNumber": 2,
    "title": "Glycolysis ATP Balance: Invest at 1 & 3, Harvest at 7 & 10",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "mnemonicType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Invest ATP at Steps 1 & 3 | Make ATP at Steps 7 & 10 (Net = +2 ATP + 2 NADH)",
    "memoryHook": "Odd numbers 1 and 3 SPEND ATP (Hexokinase & PFK). Steps 7 and 10 MAKE ATP by substrate-level phosphorylation (2 ATP each = 4 ATP gross). 4 produced - 2 spent = NET 2 ATP!",
    "fact": "ATP is utilized at two steps: first in conversion of glucose into glucose 6-phosphate and second in conversion of fructose 6-phosphate to fructose 1,6-bisphosphate. ATP is synthesized at two steps: 1,3-BPG to 3-PGA and PEP to pyruvic acid.",
    "breakdown": [
      {
        "key": "ATP Consuming Step 1",
        "label": "Glucose + ATP → Glucose-6-phosphate + ADP (Hexokinase)"
      },
      {
        "key": "ATP Consuming Step 3",
        "label": "Fructose-6-phosphate + ATP → Fructose-1,6-bisphosphate + ADP (PFK)"
      },
      {
        "key": "ATP Producing Step 7",
        "label": "2 (1,3-BPG) + 2 ADP → 2 (3-PGA) + 2 ATP (Phosphoglycerate kinase)"
      },
      {
        "key": "ATP Producing Step 10",
        "label": "2 PEP + 2 ADP → 2 Pyruvate + 2 ATP (Pyruvate kinase)"
      },
      {
        "key": "Net Balance per Glucose",
        "label": "Gross: 4 ATP, Net: 2 ATP + 2 NADH + 2 H+"
      }
    ],
    "doodleBadge": "Invest 1, 3 | Harvest 7, 10",
    "doodleSubtext": "Glycolysis ATP Balance",
    "explanation": "Phosphofructokinase (PFK) at step 3 is the primary allosteric pacemaker enzyme regulating glycolytic flux.",
    "alsoRemember": "NADH is synthesized at Step 6 when G3P is oxidized to 1,3-BPG.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.2.",
    "neetTrap": "NEET questions often ask: \"How many ATP are directly synthesized by substrate-level phosphorylation per glucose in glycolysis?\" Answer is 4 (Gross) or 2 (Net).",
    "tags": [
      "Glycolysis",
      "Substrate Phosphorylation",
      "PFK",
      "ATP Balance"
    ],
    "expandedMeaning": "Identification of ATP-consuming steps (1, 3) and ATP-generating steps (7, 10).",
    "whyItWorks": "Pairs odd steps (1, 3) with investment and even/late steps (7, 10) with harvest.",
    "visualDescription": "A ledger book showing red debit entries at lines 1 & 3 (-1 ATP each) and green credit entries at lines 7 & 10 (+2 ATP each), totaling net +2 ATP.",
    "neetRelevance": "Direct questions on which steps consume or produce ATP in glycolysis.",
    "commonMistake": "Confusing step numbers where ATP is synthesized.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "At which step in glycolysis does the first substrate-level phosphorylation synthesizing ATP occur?",
      "options": [
        "Conversion of Glucose to Glucose-6-phosphate",
        "Conversion of Fructose-6-phosphate to Fructose-1,6-bisphosphate",
        "Conversion of 1,3-bisphosphoglycerate to 3-phosphoglycerate",
        "Conversion of Phosphoenolpyruvate to Pyruvate"
      ],
      "answerIndex": 2,
      "explanation": "The first substrate-level phosphorylation in glycolysis occurs at Step 7, when 1,3-bisphosphoglycerate is converted to 3-phosphoglycerate by phosphoglycerate kinase."
    }
  },
  {
    "id": "mnemo-bio-ch12-03",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-2",
    "topicTitle": "Fermentation",
    "topic": "Alcoholic vs Lactic Acid Fermentation",
    "mnemonicNumber": 3,
    "title": "Fermentation: Yeast Makes CO2 & Alcohol, Muscle Makes Lactic Acid (NO CO2)",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Yeast = Alcohol + CO2 (Decarboxylation!) | Muscles & LAB = Lactic Acid (NO CO2!)",
    "memoryHook": "In alcoholic fermentation (yeast), Pyruvate (3C) drops CO2 to make Acetaldehyde (2C), then Ethanol. In lactic acid fermentation (muscles & yogurt LAB), Pyruvate (3C) directly becomes Lactic Acid (3C) with NO CO2 released!",
    "fact": "In fermentation, NADH is reoxidized to NAD+ without ETS. In alcoholic fermentation, pyruvic acid decarboxylase and alcohol dehydrogenase convert pyruvate to ethanol and CO2. In lactic acid fermentation, lactate dehydrogenase converts pyruvate directly to lactic acid without CO2 evolution.",
    "breakdown": [
      {
        "key": "Alcoholic Fermentation",
        "label": "Pyruvate → Acetaldehyde + CO2 (Pyruvate decarboxylase), then → Ethanol (Alcohol dehydrogenase)"
      },
      {
        "key": "Lactic Acid Fermentation",
        "label": "Pyruvate + NADH + H+ → Lactic acid + NAD+ (Lactate dehydrogenase); NO CO2 is produced"
      },
      {
        "key": "Energy Yield",
        "label": "Less than 7% of glucose energy released; Net only 2 ATP per glucose"
      },
      {
        "key": "Alcohol Poisoning",
        "label": "Yeast poisons itself to death when alcohol concentration reaches about 13%"
      }
    ],
    "doodleBadge": "CO2 Released vs NO CO2",
    "doodleSubtext": "Alcoholic vs Lactic",
    "explanation": "Yeast cells poison themselves when alcohol reaches ~13%, which is why naturally fermented beverages like wine and beer never exceed 13% alcohol without distillation.",
    "alsoRemember": "Both fermentations reoxidize NADH to NAD+ so glycolysis can keep running anaerobically.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.3.",
    "neetTrap": "Lactic acid fermentation does NOT release CO2! Only alcoholic fermentation releases CO2.",
    "tags": [
      "Fermentation",
      "Lactic Acid",
      "Ethanol",
      "Yeast",
      "Pyruvate Decarboxylase"
    ],
    "expandedMeaning": "Biochemical steps, enzymes, CO2 differences, and energetics of fermentation.",
    "whyItWorks": "Direct contrast: Alcoholic releases CO2 (bubbles in beer/bread), Lactic releases ZERO CO2.",
    "visualDescription": "Left: Yeast bubbling fizzy CO2 foam over a flask of wine. Right: A tired runner muscle aching with lactic acid without a single gas bubble.",
    "neetRelevance": "Questions asking which fermentation process does NOT produce carbon dioxide.",
    "commonMistake": "Claiming lactic acid fermentation produces CO2.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which of the following fermentation pathways does NOT release carbon dioxide (CO2)?",
      "options": [
        "Alcoholic fermentation by yeast",
        "Lactic acid fermentation in fatigued skeletal muscles",
        "Aerobic respiration link reaction",
        "Krebs citric acid cycle"
      ],
      "answerIndex": 1,
      "explanation": "In lactic acid fermentation, pyruvate (3C) is directly reduced to lactic acid (3C) by lactate dehydrogenase without any decarboxylation (no CO2 released)."
    }
  },
  {
    "id": "mnemo-bio-ch12-04",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-3",
    "topicTitle": "Link Reaction (Gateway Step)",
    "topic": "Oxidative Decarboxylation of Pyruvate",
    "mnemonicNumber": 4,
    "title": "Link Reaction: Pyruvate Dehydrogenase Gateway to Mitochondria",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Pyruvate (3C) + CoA + NAD+ → Acetyl-CoA (2C) + CO2 + NADH (Matrix Gateway!)",
    "memoryHook": "The Gateway / Link reaction connects cytoplasm Glycolysis to mitochondrial Krebs cycle. In mitochondrial matrix, Pyruvate Dehydrogenase (PDH) oxidatively decarboxylates 2 Pyruvates into 2 Acetyl-CoA, 2 CO2, and 2 NADH!",
    "fact": "Pyruvate enters mitochondrial matrix and undergoes oxidative decarboxylation catalyzed by pyruvate dehydrogenase complex requiring Mg2+ and 5 cofactors: Pyruvate + CoA + NAD+ -> Acetyl-CoA + CO2 + NADH + H+.",
    "breakdown": [
      {
        "key": "Location",
        "label": "Mitochondrial matrix"
      },
      {
        "key": "Enzyme complex",
        "label": "Pyruvate Dehydrogenase Complex (PDH) requiring Mg2+"
      },
      {
        "key": "5 Essential Cofactors",
        "label": "TPP (Thiamine), Lipoic acid, Coenzyme A, FAD, and NAD+"
      },
      {
        "key": "Yield per Glucose (2 Pyruvates)",
        "label": "2 Acetyl-CoA (2C) + 2 CO2 + 2 NADH + 2 H+"
      }
    ],
    "doodleBadge": "Matrix Gateway",
    "doodleSubtext": "Pyruvate → Acetyl-CoA",
    "explanation": "Acetyl-CoA is the primary connecting link between carbohydrates, fats, and protein metabolism.",
    "alsoRemember": "Because 2 pyruvates are formed from 1 glucose, the link reaction yields 2 CO2 and 2 NADH per glucose.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.1.",
    "neetTrap": "Link reaction takes place in the MITOCHONDRIAL MATRIX, NOT in the intermembrane space.",
    "tags": [
      "Link Reaction",
      "Gateway Step",
      "Pyruvate Dehydrogenase",
      "Acetyl-CoA",
      "Matrix"
    ],
    "expandedMeaning": "Oxidative decarboxylation of pyruvate, enzyme complex cofactors, and yield.",
    "whyItWorks": "The \"gateway\" metaphor clarifies how pyruvate crosses into the mitochondrial matrix to join Krebs.",
    "visualDescription": "A tollbooth gateway between cytoplasm and mitochondrial matrix where 3-carbon pyruvate drops a CO2 toll to become 2-carbon Acetyl-CoA.",
    "neetRelevance": "Questions on site of link reaction and enzyme cofactors.",
    "commonMistake": "Saying link reaction occurs in the inner mitochondrial membrane.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Where inside the cell does the oxidative decarboxylation of pyruvic acid into acetyl-CoA occur?",
      "options": [
        "Cytoplasm",
        "Mitochondrial matrix",
        "Inner mitochondrial membrane",
        "Intermembrane space"
      ],
      "answerIndex": 1,
      "explanation": "The oxidative decarboxylation of pyruvate to acetyl-CoA (link reaction) occurs inside the mitochondrial matrix."
    }
  },
  {
    "id": "mnemo-bio-ch12-05",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-3",
    "topicTitle": "Krebs Cycle (TCA Cycle)",
    "topic": "Krebs Citric Acid Cycle 8 Intermediates Sequence",
    "mnemonicNumber": 5,
    "title": "Krebs Cycle Intermediates: Can I Keep Selling Sex For Money, Officer?",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Citrate → Isocitrate → α-Ketoglutarate → Succinyl-CoA → Succinate → Fumarate → Malate → OAA",
    "memoryHook": "Can I Keep Selling Sex For Money, Officer? Citrate (6C) → Isocitrate (6C) → α-Ketoglutarate (5C) → Succinyl-CoA (4C) → Succinate (4C) → Fumarate (4C) → Malate (4C) → Oxaloacetate (4C)!",
    "fact": "TCA Cycle (Hans Krebs, 1937) begins with condensation of acetyl group (2C) with oxaloacetate (4C) and water catalyzed by citrate synthase to yield citric acid (6C). Cycle regenerates OAA after 8 steps in the mitochondrial matrix.",
    "breakdown": [
      {
        "key": "1. C - Citrate (6C)",
        "label": "First product; formed by Citrate Synthase (Acetyl-CoA + OAA + H2O)"
      },
      {
        "key": "2. I - Isocitrate (6C)",
        "label": "Isomerized via aconitase"
      },
      {
        "key": "3. K - α-Ketoglutarate (5C)",
        "label": "Formed by isocitrate dehydrogenase; releases 1st CO2 + 1 NADH"
      },
      {
        "key": "4. S - Succinyl-CoA (4C)",
        "label": "Formed by α-KG dehydrogenase; releases 2nd CO2 + 2nd NADH"
      },
      {
        "key": "5. S - Succinate (4C)",
        "label": "Succinyl-CoA synthetase yields 1 GTP (Substrate-level phosphorylation)"
      },
      {
        "key": "6. F - Fumarate (4C)",
        "label": "Succinate dehydrogenase yields 1 FADH2"
      },
      {
        "key": "7. M - Malate (4C)",
        "label": "Fumarase adds water"
      },
      {
        "key": "8. O - Oxaloacetate (4C)",
        "label": "Malate dehydrogenase yields 3rd NADH; regenerates OAA"
      }
    ],
    "doodleBadge": "8 Krebs Steps",
    "doodleSubtext": "TCA Cycle Matrix",
    "explanation": "Oxaloacetic acid (4C) is the primary acceptor of acetyl-CoA (2C). Citric acid (6C) is the first stable product.",
    "alsoRemember": "Krebs cycle is also called Tri-Carboxylic Acid (TCA) cycle because citrate has 3 -COOH groups.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.2 & Figure 12.3.",
    "neetTrap": "Oxaloacetate (4C) is the primary ACCEPTOR; Citric acid (6C) is the first PRODUCT.",
    "tags": [
      "Krebs Cycle",
      "TCA Cycle",
      "Citric Acid",
      "alpha-Ketoglutarate",
      "Oxaloacetate"
    ],
    "expandedMeaning": "Full chronological sequence of 8 TCA cycle intermediates and key biochemical events.",
    "whyItWorks": "The universally popular sentence mnemonic makes reciting the 8 intermediates effortless.",
    "visualDescription": "A circular matrix carousel starting at OAA + Acetyl-CoA at top, revolving through 8 stations back to OAA.",
    "neetRelevance": "Questions on intermediate order, carbon counts, and enzyme matching.",
    "commonMistake": "Confusing the primary acceptor (OAA) with the first product (Citrate).",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "What is the primary acceptor molecule that condenses with Acetyl-CoA to begin the Krebs cycle?",
      "options": [
        "Citric acid",
        "Oxaloacetic acid",
        "alpha-Ketoglutaric acid",
        "Succinyl-CoA"
      ],
      "answerIndex": 1,
      "explanation": "Oxaloacetic acid (OAA, 4C) condenses with Acetyl-CoA (2C) to form citric acid (6C), initiating the Krebs cycle."
    }
  },
  {
    "id": "mnemo-bio-ch12-06",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-3",
    "topicTitle": "Krebs Cycle (TCA Cycle)",
    "topic": "alpha-Ketoglutarate is the ONLY 5-Carbon Intermediate",
    "mnemonicNumber": 6,
    "title": "alpha-Ketoglutarate: The ONLY 5-Carbon Intermediate in Krebs",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "α-Ketoglutarate = The Lone 5-Carbon Middleman (Between 6C and 4C)!",
    "memoryHook": "Citrate & Isocitrate have 6 carbons. α-Ketoglutarate is the ONLY 5-carbon compound in the cycle! From Succinyl-CoA to OAA, all remaining intermediates have 4 carbons!",
    "fact": "In the Krebs cycle, isocitrate (6C) undergoes oxidative decarboxylation to form alpha-ketoglutarate (5C), which is the only 5-carbon intermediate in the citric acid cycle.",
    "breakdown": [
      {
        "key": "6-Carbon compounds",
        "label": "Citrate, Cis-aconitate, Isocitrate (3 compounds)"
      },
      {
        "key": "5-Carbon compound",
        "label": "alpha-Ketoglutaric acid (ONLY ONE 5C compound)"
      },
      {
        "key": "4-Carbon compounds",
        "label": "Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate (5 compounds)"
      },
      {
        "key": "Decarboxylation points",
        "label": "CO2 released at: 1) Isocitrate → α-KG and 2) α-KG → Succinyl-CoA"
      }
    ],
    "doodleBadge": "Only 5C Compound",
    "doodleSubtext": "α-Ketoglutarate",
    "explanation": "alpha-Ketoglutarate serves as the direct precursor for the amino acid glutamic acid via reductive amination in nitrogen metabolism.",
    "alsoRemember": "Two molecules of CO2 are released per turn of Krebs cycle during the conversion from 6C to 4C.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.2.",
    "neetTrap": "There is only ONE 5-carbon intermediate in the Krebs cycle: alpha-ketoglutaric acid.",
    "tags": [
      "alpha-Ketoglutarate",
      "5-Carbon",
      "Decarboxylation",
      "Krebs Intermediates"
    ],
    "expandedMeaning": "Identification of carbon counts in Krebs cycle; α-KG as the sole 5-carbon member.",
    "whyItWorks": "Isolates α-KG as the sole bridge between 6C and 4C compounds.",
    "visualDescription": "A five-pointed star labeled α-Ketoglutaric acid standing between two 6-carbon hexagons and five 4-carbon squares.",
    "neetRelevance": "Direct question: \"Which of the following is a 5-carbon compound in TCA cycle?\"",
    "commonMistake": "Thinking succinyl-CoA is a 5-carbon intermediate.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which of the following intermediates in the citric acid cycle contains 5 carbon atoms?",
      "options": [
        "Citric acid",
        "Oxalosuccinic acid",
        "alpha-Ketoglutaric acid",
        "Succinic acid"
      ],
      "answerIndex": 2,
      "explanation": "alpha-Ketoglutaric acid is the only 5-carbon intermediate in the citric acid cycle."
    }
  },
  {
    "id": "mnemo-bio-ch12-07",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-3",
    "topicTitle": "Krebs Cycle Energetics",
    "topic": "TCA Cycle Yield per Turn and per Glucose",
    "mnemonicNumber": 7,
    "title": "Krebs Yield: 3 NADH, 1 FADH2, 1 GTP per Turn (Double per Glucose)",
    "badgeText": "Formula",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "mnemonicType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "1 Turn = 3 NADH + 1 FADH2 + 1 GTP + 2 CO2 | 1 Glucose (2 Turns) = 6 NADH + 2 FADH2 + 2 GTP + 4 CO2!",
    "memoryHook": "Count the Krebs harvest: 3 NADH, 1 FADH2, 1 GTP (substrate-level). Since 1 glucose produces 2 Acetyl-CoA, double everything for 1 glucose: 6 NADH + 2 FADH2 + 2 GTP + 4 CO2!",
    "fact": "During one turn of TCA cycle for 1 Acetyl-CoA, 3 molecules of NAD+ are reduced to NADH, 1 molecule of FAD+ is reduced to FADH2, 1 molecule of GTP (ATP) is formed by substrate phosphorylation, and 2 CO2 are released.",
    "breakdown": [
      {
        "key": "NADH formation (3 sites)",
        "label": "Isocitrate → α-KG | α-KG → Succinyl-CoA | Malate → OAA"
      },
      {
        "key": "FADH2 formation (1 site)",
        "label": "Succinate → Fumarate (Succinate dehydrogenase)"
      },
      {
        "key": "GTP formation (1 site)",
        "label": "Succinyl-CoA → Succinate (coupled to GTP → ATP)"
      },
      {
        "key": "CO2 released (2 sites)",
        "label": "Isocitrate → α-KG and α-KG → Succinyl-CoA"
      }
    ],
    "doodleBadge": "3 NADH : 1 FADH2 : 1 GTP",
    "doodleSubtext": "Yield per Acetyl-CoA",
    "explanation": "In plant cells, ATP is synthesized directly; in animal cells, GTP is synthesized first and transfers its phosphate to ADP.",
    "alsoRemember": "Total CO2 evolved in aerobic respiration from 1 glucose = 6 CO2 (2 from link reaction + 4 from Krebs cycle).",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.2.",
    "neetTrap": "Always check if question asks \"per turn / per acetyl-CoA\" or \"per glucose molecule\". Per glucose is DOUBLE.",
    "tags": [
      "Krebs Yield",
      "3 NADH",
      "FADH2",
      "GTP",
      "Energetics"
    ],
    "expandedMeaning": "Stoichiometry of reduced coenzymes and high-energy phosphates per turn and per glucose.",
    "whyItWorks": "Clear distinction between per-turn (3:1:1) and per-glucose (6:2:2).",
    "visualDescription": "A treasure chest showing 3 blue NADH crystals, 1 yellow FADH2 crystal, 1 gold GTP coin, and 2 escaping CO2 gas puffs.",
    "neetRelevance": "One of the most repeated stoichiometric questions in NEET.",
    "commonMistake": "Forgetting to multiply by 2 when asked for yield per glucose molecule.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "How many molecules of NADH and FADH2 are produced in the Krebs cycle from the complete oxidation of one molecule of glucose?",
      "options": [
        "3 NADH and 1 FADH2",
        "6 NADH and 2 FADH2",
        "8 NADH and 2 FADH2",
        "10 NADH and 2 FADH2"
      ],
      "answerIndex": 1,
      "explanation": "One glucose yields 2 Acetyl-CoA, running the Krebs cycle twice. 2 × 3 NADH = 6 NADH, and 2 × 1 FADH2 = 2 FADH2."
    }
  },
  {
    "id": "mnemo-bio-ch12-08",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-3",
    "topicTitle": "Succinate Dehydrogenase",
    "topic": "Succinate Dehydrogenase: Only Membrane-Bound Krebs Enzyme",
    "mnemonicNumber": 8,
    "title": "Succinate Dehydrogenase: The ONLY Krebs Enzyme in Inner Membrane",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "All Krebs enzymes float in Matrix EXCEPT Succinate Dehydrogenase (Bound to Inner Membrane)!",
    "memoryHook": "Every TCA cycle enzyme is soluble in the mitochondrial matrix, EXCEPT Succinate Dehydrogenase! It is embedded as an integral protein in the inner mitochondrial membrane, where it doubles as Complex II of the ETS!",
    "fact": "Succinate dehydrogenase catalyzes the oxidation of succinate to fumarate while reducing FAD to FADH2. Uniquely, it is bound to the inner mitochondrial membrane, acting as Complex II of the Electron Transport System.",
    "breakdown": [
      {
        "key": "Usual location of Krebs enzymes",
        "label": "Soluble in the mitochondrial matrix"
      },
      {
        "key": "Sole Exception",
        "label": "Succinate Dehydrogenase is bound to inner mitochondrial membrane"
      },
      {
        "key": "Dual Identity",
        "label": "Functions as a TCA cycle enzyme AND as Complex II of the ETS"
      },
      {
        "key": "Cofactor reduced",
        "label": "FAD reduced to FADH2 (transfers electrons directly to ubiquinone)"
      }
    ],
    "doodleBadge": "Only Membrane Enzyme",
    "doodleSubtext": "Succinate DH = Complex II",
    "explanation": "Because it is embedded in the membrane, it donates electrons directly from succinate oxidation to ubiquinone via FAD and Fe-S centers.",
    "alsoRemember": "Succinate dehydrogenase is competitively inhibited by malonate.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.2 & 12.4.3.",
    "neetTrap": "Succinate dehydrogenase is NOT in the matrix; it is embedded in the INNER mitochondrial membrane.",
    "tags": [
      "Succinate Dehydrogenase",
      "Complex II",
      "Inner Membrane",
      "FAD",
      "Krebs Exception"
    ],
    "expandedMeaning": "Succinate dehydrogenase location, function as Complex II, and FAD reduction.",
    "whyItWorks": "Highlighting the sole exception among all Krebs cycle enzymes creates an unshakeable memory.",
    "visualDescription": "Mitochondrial matrix where 7 enzymes float freely like fish, while Succinate Dehydrogenase is bolted into the inner membrane wall.",
    "neetRelevance": "High frequency exception question tested in NEET.",
    "commonMistake": "Assuming all Krebs cycle enzymes are soluble in the matrix.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which enzyme of the Krebs cycle is NOT present in the mitochondrial matrix but is bound to the inner mitochondrial membrane?",
      "options": [
        "Citrate synthase",
        "Isocitrate dehydrogenase",
        "Succinate dehydrogenase",
        "Malate dehydrogenase"
      ],
      "answerIndex": 2,
      "explanation": "Succinate dehydrogenase is the only TCA cycle enzyme bound to the inner mitochondrial membrane, where it also serves as Complex II of the ETS."
    }
  },
  {
    "id": "mnemo-bio-ch12-09",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-4",
    "topicTitle": "Electron Transport System (ETS)",
    "topic": "The 5 Complexes of the Inner Mitochondrial Membrane",
    "mnemonicNumber": 9,
    "title": "ETS Complexes: 5 Machines in the Inner Membrane",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "hard",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "I: NADH DH | II: Succinate DH | III: Cyt bc1 | IV: Cyt c Oxidase | V: ATP Synthase",
    "memoryHook": "Complex I = NADH Dehydrogenase (FMN, Fe-S) | Complex II = Succinate Dehydrogenase (FAD, Fe-S) | Complex III = Cytochrome bc1 | Complex IV = Cytochrome c oxidase (Cyt a, a3, 2 Cu) | Complex V = ATP Synthase (F0-F1)!",
    "fact": "ETS consists of 5 multi-protein complexes located in the inner mitochondrial membrane. Complexes I, III, and IV pump protons from matrix into intermembrane space; Complex V uses this proton gradient to synthesize ATP.",
    "breakdown": [
      {
        "key": "Complex I",
        "label": "NADH dehydrogenase: oxidizes matrix NADH; pumps 4 H+; transfers e- to Ubiquinone"
      },
      {
        "key": "Complex II",
        "label": "Succinate dehydrogenase: oxidizes succinate via FAD; pumps 0 H+; transfers e- to Ubiquinone"
      },
      {
        "key": "Complex III",
        "label": "Cytochrome bc1 complex: Cyt b, Cyt c1, Fe-S; pumps 4 H+; transfers e- to Cytochrome c"
      },
      {
        "key": "Complex IV",
        "label": "Cytochrome c oxidase: Cyt a, a3, and 2 copper centres (CuA, CuB); pumps 2 H+; transfers e- to O2"
      },
      {
        "key": "Complex V",
        "label": "ATP Synthase: F0 proton channel + F1 headpiece catalytic site in matrix"
      }
    ],
    "doodleBadge": "Complexes I to V",
    "doodleSubtext": "ETS Architecture",
    "explanation": "Complex II does NOT span the entire membrane and does NOT pump protons across, which is why FADH2 produces fewer ATP than NADH.",
    "alsoRemember": "Ubiquinone and Cytochrome c are mobile carriers linking these complexes.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.3 & Figure 12.4.",
    "neetTrap": "Complex II pumps ZERO protons across the membrane. Complexes I, III, and IV pump protons.",
    "tags": [
      "ETS Complexes",
      "Complex I",
      "Complex IV",
      "Cytochrome c Oxidase",
      "ATP Synthase"
    ],
    "expandedMeaning": "Identification and characteristics of ETS Complexes I through V.",
    "whyItWorks": "Names each complex with its Roman numeral and exact NCERT cofactors.",
    "visualDescription": "Five machines lined up in the inner membrane: machine I, III, and IV pumping water (protons) up into the intermembrane tank, and machine V acting as an outflow turbine.",
    "neetRelevance": "Matching complex numbers with their names and cofactor components.",
    "commonMistake": "Confusing Complex III (Cyt bc1) with Complex IV (Cyt c oxidase).",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which complex of the mitochondrial electron transport system contains Cytochromes a and a3 along with two copper centres?",
      "options": [
        "Complex I",
        "Complex II",
        "Complex III",
        "Complex IV"
      ],
      "answerIndex": 3,
      "explanation": "Complex IV (Cytochrome c oxidase) contains cytochromes a and a3, and two copper centres."
    }
  },
  {
    "id": "mnemo-bio-ch12-10",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-4",
    "topicTitle": "Mobile Electron Carriers",
    "topic": "Ubiquinone (CoQ) vs Cytochrome c",
    "mnemonicNumber": 10,
    "title": "Mobile Carriers: Ubiquinone Inside Membrane, Cytochrome c on Outer Surface",
    "badgeText": "High Yield",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Ubiquinone = Lipid-Soluble Inside Membrane | Cytochrome c = Water-Soluble on Outer Surface",
    "memoryHook": "Ubiquinone (CoQ) swims INSIDE the lipid bilayer, carrying electrons from Complex I & II to Complex III. Cytochrome c is a small mobile protein attached to the OUTER surface of the inner membrane, shuttling electrons from Complex III to IV!",
    "fact": "Ubiquinone is a lipid-soluble mobile carrier located within the inner membrane that receives electrons from both Complex I and Complex II. Cytochrome c is a small protein attached to the outer surface of the inner membrane and acts as a mobile carrier between Complex III and IV.",
    "breakdown": [
      {
        "key": "Ubiquinone (CoQ)",
        "label": "Lipid-soluble mobile electron & proton carrier embedded INSIDE the lipid bilayer"
      },
      {
        "key": "Ubiquinone Route",
        "label": "Transfers electrons from Complex I & Complex II to Complex III (reduced to ubiquinol)"
      },
      {
        "key": "Cytochrome c",
        "label": "Small water-soluble peripheral protein attached to the OUTER surface of inner membrane"
      },
      {
        "key": "Cytochrome c Route",
        "label": "Transfers electrons from Complex III to Complex IV"
      }
    ],
    "doodleBadge": "Ubiquinone vs Cyt c",
    "doodleSubtext": "Mobile Couriers",
    "explanation": "Because Cytochrome c is located on the outer surface of the inner membrane facing the intermembrane space, it is accessible for release during apoptosis.",
    "alsoRemember": "Ubiquinone is also called Coenzyme Q (CoQ).",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.3.",
    "neetTrap": "Cytochrome c is attached to the OUTER surface of the inner membrane, NOT the matrix surface.",
    "tags": [
      "Ubiquinone",
      "Cytochrome c",
      "Mobile Carriers",
      "ETS",
      "Outer Surface"
    ],
    "expandedMeaning": "Distinction between the two mobile electron couriers of the mitochondrial ETS.",
    "whyItWorks": "Direct contrast of location (inside lipid core vs on outer surface) and partner complexes.",
    "visualDescription": "A submarine (Ubiquinone) swimming inside the membrane lipid bilayer, and a ferry boat (Cytochrome c) cruising on the outer surface water.",
    "neetRelevance": "Verbatim NCERT statement on the exact location of Cytochrome c.",
    "commonMistake": "Stating Cytochrome c is inside the lipid membrane or on the matrix side.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Where is Cytochrome c located in the mitochondrion?",
      "options": [
        "Attached to the inner surface of the outer membrane",
        "Attached to the outer surface of the inner mitochondrial membrane",
        "Floating freely in the mitochondrial matrix",
        "Embedded deeply within the lipid core of the inner membrane"
      ],
      "answerIndex": 1,
      "explanation": "Cytochrome c is a small protein attached to the outer surface of the inner membrane and acts as a mobile carrier between complex III and IV."
    }
  },
  {
    "id": "mnemo-bio-ch12-11",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-4",
    "topicTitle": "Terminal Electron Acceptor",
    "topic": "Oxygen as the Terminal Electron and Proton Acceptor",
    "mnemonicNumber": 11,
    "title": "Terminal Acceptor: Oxygen Waits at the Very End to Form Water",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "O2 Acts ONLY at the Very End: Terminal e- & H+ Acceptor Forming H2O!",
    "memoryHook": "Oxygen plays NO direct chemical role in glycolysis, link reaction, or Krebs cycle! It acts purely at the VERY END of the ETS as the final electron sink, picking up electrons and protons to form metabolic water!",
    "fact": "Although aerobic process takes place only in the presence of oxygen, the role of oxygen is limited to the terminal stage of the process. Oxygen acts as the final hydrogen acceptor, driving the entire ETS by pulling electrons downhill.",
    "breakdown": [
      {
        "key": "Reaction at Complex IV",
        "label": "2 H+ + 2 e- + 1/2 O2 → H2O (metabolic water)"
      },
      {
        "key": "Role of Oxygen",
        "label": "Terminal electron and hydrogen acceptor"
      },
      {
        "key": "Driving Force",
        "label": "Acts as the ultimate sink, pulling electrons through the chain like water down a drain"
      },
      {
        "key": "What if O2 is missing?",
        "label": "Electrons back up at Complex IV → III → I; entire ETS and Krebs cycle halts"
      }
    ],
    "doodleBadge": "O2 = Terminal Acceptor",
    "doodleSubtext": "Forms Metabolic H2O",
    "explanation": "Without oxygen to accept electrons at Complex IV, all carriers remain in their reduced state, halting respiration.",
    "alsoRemember": "Cyanide kills by binding ferric iron (Fe3+) in cytochrome a3 of Complex IV, blocking oxygen reduction.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.3.",
    "neetTrap": "The role of oxygen is LIMITED to the terminal stage of respiration; it does NOT participate in earlier steps.",
    "tags": [
      "Terminal Acceptor",
      "Oxygen",
      "Complex IV",
      "Metabolic Water"
    ],
    "expandedMeaning": "Terminal role of oxygen as the final electron sink and driving force of oxidative phosphorylation.",
    "whyItWorks": "Emphasizes the paradox: oxygen is vital for aerobic life, yet acts exclusively at the final step.",
    "visualDescription": "An assembly line dropping electrons into the hands of Oxygen waiting at the exit door, snapping with 2 protons to make a water droplet.",
    "neetRelevance": "Assertion-Reason favorite on the role of oxygen in aerobic respiration.",
    "commonMistake": "Thinking oxygen is consumed during the citric acid cycle.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "What is the role of molecular oxygen (O2) in aerobic cellular respiration?",
      "options": [
        "It oxidizes glucose directly in the cytoplasm",
        "It acts as the terminal electron and hydrogen acceptor in ETS",
        "It decarboxylates pyruvate to acetyl-CoA",
        "It catalyzes the synthesis of GTP in the Krebs cycle"
      ],
      "answerIndex": 1,
      "explanation": "Oxygen acts as the terminal electron acceptor and combines with protons to form metabolic water at Complex IV."
    }
  },
  {
    "id": "mnemo-bio-ch12-12",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-4",
    "topicTitle": "ATP Yield per NADH and FADH2",
    "topic": "ATP Yield: 1 NADH = 3 ATP, 1 FADH2 = 2 ATP",
    "mnemonicNumber": 12,
    "title": "ATP Currency: 1 NADH Gives 3 ATP, 1 FADH2 Gives 2 ATP",
    "badgeText": "Formula",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "mnemonicType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "1 NADH = 3 ATP (Enters Complex I) | 1 FADH2 = 2 ATP (Enters Complex II)",
    "memoryHook": "NADH enters at the top (Complex I), pumping 10 protons → yields 3 ATP (2.5 modern). FADH2 enters downstream (Complex II, skips Complex I), pumping only 6 protons → yields 2 ATP (1.5 modern)!",
    "fact": "Oxidation of one molecule of NADH gives rise to 3 molecules of ATP, while that of one molecule of FADH2 produces 2 molecules of ATP during oxidative phosphorylation.",
    "breakdown": [
      {
        "key": "NADH Oxidation",
        "label": "Enters Complex I → pumps 10 H+ across membrane → yields 3 ATP"
      },
      {
        "key": "FADH2 Oxidation",
        "label": "Enters Complex II → pumps 6 H+ across membrane (bypasses I) → yields 2 ATP"
      },
      {
        "key": "Complex V stoichiometry",
        "label": "Protons flow through F0 down electrochemical gradient driving F1 ATP synthesis"
      }
    ],
    "doodleBadge": "NADH: 3 | FADH2: 2",
    "doodleSubtext": "ATP Exchange Rate",
    "explanation": "FADH2 yields fewer ATP because it donates electrons to Complex II, which does not pump any protons into the intermembrane space.",
    "alsoRemember": "NCERT standard convention uses 1 NADH = 3 ATP and 1 FADH2 = 2 ATP.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.3.",
    "neetTrap": "Always use 1 NADH = 3 ATP and 1 FADH2 = 2 ATP for NEET calculations unless modern P/O ratio is specified.",
    "tags": [
      "ATP Yield",
      "NADH",
      "FADH2",
      "Oxidative Phosphorylation"
    ],
    "expandedMeaning": "Standard stoichiometric conversion rates of NADH and FADH2 to ATP in ETS.",
    "whyItWorks": "Direct numerical rule: N has 3 strokes (3 ATP), F comes second (2 ATP).",
    "visualDescription": "A currency exchange booth: trading a blue NADH token gives 3 gold ATP coins; trading a yellow FADH2 token gives 2 gold ATP coins.",
    "neetRelevance": "Core calculation factor in all cellular respiration balance sheet questions.",
    "commonMistake": "Assigning 3 ATP to FADH2.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "During oxidative phosphorylation, oxidation of one molecule of NADH and one molecule of FADH2 produces how many ATP molecules respectively according to NCERT?",
      "options": [
        "2 and 3",
        "3 and 2",
        "2.5 and 1.5",
        "1 and 2"
      ],
      "answerIndex": 1,
      "explanation": "According to NCERT, oxidation of 1 NADH produces 3 ATP, and oxidation of 1 FADH2 produces 2 ATP."
    }
  },
  {
    "id": "mnemo-bio-ch12-13",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-4",
    "topicTitle": "Complex V (ATP Synthase)",
    "topic": "F0-F1 ATP Synthase Architecture",
    "mnemonicNumber": 13,
    "title": "Complex V: F0 is the Membrane Tunnel, F1 is the Catalytic Head",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "F0 = Flow Channel in Membrane | F1 = Factory Head in Matrix",
    "memoryHook": "F0 is embedded in the inner mitochondrial membrane as a transmembrane proton channel. F1 is a peripheral headpiece protruding into the MATRIX that synthesizes ATP from ADP + Pi when protons rush through F0!",
    "fact": "Complex V (ATP Synthase) consists of two major components: F0 and F1. The F1 headpiece is a peripheral membrane protein complex facing the matrix and contains the catalytic site for ATP synthesis. F0 is an integral membrane protein complex that forms the channel through which protons cross the membrane.",
    "breakdown": [
      {
        "key": "F0 component",
        "label": "Integral membrane protein complex; forms transmembrane channel for proton diffusion"
      },
      {
        "key": "F1 component",
        "label": "Peripheral headpiece projecting into mitochondrial matrix; contains ATP catalytic sites"
      },
      {
        "key": "Proton flow direction",
        "label": "From intermembrane space (high H+) back into the matrix (low H+)"
      },
      {
        "key": "Oligomycin target",
        "label": "Oligomycin binds F0 channel, blocking proton return and halting ATP synthesis"
      }
    ],
    "doodleBadge": "F0 (Channel) + F1 (Head)",
    "doodleSubtext": "Complex V Architecture",
    "explanation": "The passage of protons through F0 causes rotary conformational changes in the beta subunits of F1, forcing ADP and Pi together to synthesize ATP.",
    "alsoRemember": "For each ATP produced, 2 H+ (or 4 H+ modern) pass through F0 from the intermembrane space into the matrix.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.3 & Figure 12.5.",
    "neetTrap": "The catalytic F1 headpiece faces the MATRIX, NOT the intermembrane space.",
    "tags": [
      "ATP Synthase",
      "Complex V",
      "F0 Channel",
      "F1 Headpiece",
      "Matrix"
    ],
    "expandedMeaning": "Structure of Complex V: transmembrane F0 channel and matrix-facing F1 headpiece.",
    "whyItWorks": "F0 = Flow through membrane; F1 = First-class factory in matrix.",
    "visualDescription": "NCERT Figure 12.5 showing F0 base embedded in inner membrane connected to a mushroom-like F1 headpiece protruding into matrix.",
    "neetRelevance": "Diagram labeling and orientation questions on ATP synthase.",
    "commonMistake": "Claiming F1 is embedded inside the membrane and F0 is in the matrix.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.4.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which component of Complex V (ATP synthase) contains the catalytic site for the synthesis of ATP and projects into the mitochondrial matrix?",
      "options": [
        "F0 component",
        "F1 headpiece",
        "Cytochrome c",
        "Ubiquinone"
      ],
      "answerIndex": 1,
      "explanation": "The F1 headpiece is a peripheral protein complex facing the matrix that contains the catalytic site for ATP synthesis."
    }
  },
  {
    "id": "mnemo-bio-ch12-14",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-5",
    "topicTitle": "Respiratory Balance Sheet",
    "topic": "Theoretical Total ATP Yield: 36 or 38 ATP per Glucose",
    "mnemonicNumber": 14,
    "title": "ATP Balance Sheet: 38 ATP (or 36 in Muscle & Brain Shuttles)",
    "badgeText": "Formula",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "formula",
    "mnemonicType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Glycolysis (2 ATP + 2 NADH = 8) + Link (2 NADH = 6) + Krebs (2 GTP + 6 NADH + 2 FADH2 = 24) = 38 ATP!",
    "memoryHook": "Theoretical maximum is 38 ATP per glucose (via Malate-Aspartate shuttle in heart/liver). In skeletal muscle and brain, the Glycerol-Phosphate shuttle loses 1 ATP per cytosolic NADH, giving 36 ATP!",
    "fact": "There can be a net gain of 36 (or 38) ATP molecules during aerobic respiration of one molecule of glucose. Fermentation accounts for only a partial breakdown yielding a net of just 2 ATP.",
    "breakdown": [
      {
        "key": "Glycolysis",
        "label": "2 ATP direct + 2 NADH (6 ATP via Malate-Aspartate shuttle) = 8 ATP"
      },
      {
        "key": "Link Reaction",
        "label": "2 NADH × 3 = 6 ATP"
      },
      {
        "key": "Krebs Cycle",
        "label": "2 GTP direct + 6 NADH (18 ATP) + 2 FADH2 (4 ATP) = 24 ATP"
      },
      {
        "key": "Total Aerobic Yield",
        "label": "8 + 6 + 24 = 38 ATP (or 36 ATP via Glycerol-Phosphate shuttle)"
      },
      {
        "key": "Fermentation Yield",
        "label": "Net 2 ATP (less than 7% of total glucose energy)"
      }
    ],
    "doodleBadge": "36 or 38 ATP",
    "doodleSubtext": "Aerobic vs 2 ATP Ferment",
    "explanation": "Modern P/O calculations estimate 30-32 ATP, but NCERT retains the classical 36-38 ATP calculation.",
    "alsoRemember": "Aerobic respiration is roughly 18-19 times more energy-efficient than fermentation (36/38 vs 2 ATP).",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.5.",
    "neetTrap": "Fermentation yields ONLY 2 ATP, which is less than 7% of the total energy in glucose.",
    "tags": [
      "Respiratory Balance Sheet",
      "38 ATP",
      "36 ATP",
      "Shuttles",
      "Fermentation"
    ],
    "expandedMeaning": "Complete step-by-step tally of ATP generated across glycolysis, link reaction, and Krebs cycle.",
    "whyItWorks": "Breaks the 38 ATP total down into three easily remembered chunks: 8 (Glycolysis), 6 (Link), 24 (Krebs).",
    "visualDescription": "A pie chart divided into 3 pieces: Glycolysis (8 ATP), Link Reaction (6 ATP), and Krebs Cycle (24 ATP), summing to 38 ATP.",
    "neetRelevance": "Comprehensive calculations and comparison with anaerobic yield.",
    "commonMistake": "Giving 38 ATP without acknowledging 36 ATP for tissues with glycerol-phosphate shuttle.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.5",
    "verificationStatus": "verified",
    "quiz": {
      "question": "What is the theoretical net yield of ATP molecules from the complete aerobic oxidation of one glucose molecule according to NCERT?",
      "options": [
        "2 ATP",
        "30 ATP",
        "36 or 38 ATP",
        "44 ATP"
      ],
      "answerIndex": 2,
      "explanation": "Complete aerobic respiration of one glucose molecule yields a net total of 36 or 38 ATP molecules depending on the shuttle system used."
    }
  },
  {
    "id": "mnemo-bio-ch12-15",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-6",
    "topicTitle": "Respiratory Quotient (RQ)",
    "topic": "RQ Values for Carbohydrates, Fats, and Proteins",
    "mnemonicNumber": 15,
    "title": "Respiratory Quotient: Carbs = 1.0, Proteins = 0.9, Fats = 0.7",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Carbs = 1.0 (Equal) | Proteins = 0.9 (Point Nine) | Fats/Tripalmitin = 0.7 (Point Seven)",
    "memoryHook": "RQ = CO2 evolved / O2 consumed. Glucose: 6 CO2 / 6 O2 = 1.0. Tripalmitin (fat): 102 CO2 / 145 O2 = 0.7. Proteins = ~0.9. Organic acids (Malic) > 1.0 (1.33). Anaerobic = Infinity! Succulents at night = 0!",
    "fact": "The ratio of the volume of CO2 evolved to the volume of O2 consumed in respiration is called the Respiratory Quotient (RQ). RQ depends on the type of respiratory substrate used.",
    "breakdown": [
      {
        "key": "Carbohydrates (Glucose)",
        "label": "RQ = 1.0 (C6H12O6 + 6 O2 → 6 CO2 + 6 H2O; 6/6 = 1.0)"
      },
      {
        "key": "Fats (Tripalmitin)",
        "label": "RQ = 0.7 (2 C51H98O6 + 145 O2 → 102 CO2 + 98 H2O; 102/145 = 0.7)"
      },
      {
        "key": "Proteins",
        "label": "RQ = ~0.9"
      },
      {
        "key": "Organic Acids (Malic acid)",
        "label": "RQ = 1.33 (> 1 because organic acids are already oxygen-rich)"
      },
      {
        "key": "Anaerobic Respiration",
        "label": "RQ = Infinity (CO2 produced without consuming any O2; e.g. 2/0 = ∞)"
      },
      {
        "key": "Succulents at night",
        "label": "RQ = 0 (Incomplete oxidation without releasing any CO2)"
      }
    ],
    "doodleBadge": "Carbs: 1.0 | Fat: 0.7 | Prot: 0.9",
    "doodleSubtext": "RQ Values",
    "explanation": "Fats require more oxygen for oxidation because they contain very little internal oxygen in their molecules compared to carbohydrates.",
    "alsoRemember": "In living organisms, respiratory substrates are rarely pure; mixtures are usually used.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.6.",
    "neetTrap": "Tripalmitin RQ is 0.7 (NOT 0.9). Proteins are 0.9.",
    "tags": [
      "Respiratory Quotient",
      "RQ",
      "Tripalmitin",
      "0.7",
      "Glucose",
      "1.0"
    ],
    "expandedMeaning": "RQ definition, stoichiometric formula, and exact values for carbs, fats, proteins, and acids.",
    "whyItWorks": "Descending staircase: Carbs (1.0) -> Protein (0.9) -> Fat (0.7).",
    "visualDescription": "A fuel gauge showing three needles: Carbohydrates at 1.0, Proteins at 0.9, and Fats at 0.7.",
    "neetRelevance": "Direct question on the calculated RQ of Tripalmitin (0.7) appears regularly.",
    "commonMistake": "Swapping the RQ of fats (0.7) and proteins (0.9).",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.6",
    "verificationStatus": "verified",
    "quiz": {
      "question": "What is the Respiratory Quotient (RQ) when Tripalmitin is used as the respiratory substrate?",
      "options": [
        "1.0",
        "0.9",
        "0.7",
        "1.33"
      ],
      "answerIndex": 2,
      "explanation": "When tripalmitin (fat) is respired, 102 CO2 are evolved for 145 O2 consumed, giving an RQ of 102 / 145 = 0.7."
    }
  },
  {
    "id": "mnemo-bio-ch12-16",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-6",
    "topicTitle": "Amphibolic Pathway",
    "topic": "Respiration is Amphibolic (Catabolic + Anabolic)",
    "mnemonicNumber": 16,
    "title": "Amphibolic Pathway: Breaking Down AND Building Up Intermediates",
    "badgeText": "Concept",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Amphibolic = Two-Way Street: Catabolism (Energy) + Anabolism (Biosynthesis)!",
    "memoryHook": "Respiration was traditionally viewed as catabolic (breaking substrates). But respiratory intermediates are ALSO pulled out to synthesize fatty acids (from Acetyl-CoA), amino acids (from α-KG and OAA), and chlorophyll (from Succinyl-CoA)! Hence, it is AMPHIBOLIC!",
    "fact": "Because respiratory pathway is involved in both catabolism (breakdown) and anabolism (synthesis), it is better considered as an amphibolic pathway rather than simply a catabolic one.",
    "breakdown": [
      {
        "key": "Catabolic aspect",
        "label": "Breakdown of carbohydrates, fats, and proteins into CO2, H2O, and ATP energy"
      },
      {
        "key": "Anabolic aspect (Acetyl-CoA)",
        "label": "Withdrawn to synthesize fatty acids, terpenes, and steroids"
      },
      {
        "key": "Anabolic aspect (α-Ketoglutarate)",
        "label": "Withdrawn for transamination to synthesize glutamic acid"
      },
      {
        "key": "Anabolic aspect (Succinyl-CoA)",
        "label": "Used to synthesize porphyrin rings of chlorophyll and cytochromes"
      },
      {
        "key": "Anabolic aspect (Oxaloacetate)",
        "label": "Withdrawn to synthesize aspartic acid and pyrimidines"
      }
    ],
    "doodleBadge": "Catabolic + Anabolic",
    "doodleSubtext": "Amphibolic Nature",
    "explanation": "Term \"amphi\" means both (like amphibian living in water and land). Respiration performs both breakdown and synthesis.",
    "alsoRemember": "Proteins enter respiratory pathway after deamination as pyruvate, acetyl-CoA, or Krebs intermediates.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.5 & Figure 12.6.",
    "neetTrap": "Respiration is strictly AMPHIBOLIC, not purely catabolic.",
    "tags": [
      "Amphibolic Pathway",
      "Catabolism",
      "Anabolism",
      "Figure 12.6",
      "Metabolism"
    ],
    "expandedMeaning": "Definition and justification of the amphibolic nature of the respiratory pathway.",
    "whyItWorks": "Connects the Greek prefix amphi (both) to the two-way traffic of intermediates.",
    "visualDescription": "NCERT Figure 12.6 showing fats, carbs, and proteins converging into Krebs cycle, with double-headed arrows showing exit for biosynthesis.",
    "neetRelevance": "Verbatim NCERT question: \"Why is respiration considered an amphibolic pathway?\"",
    "commonMistake": "Selecting \"purely catabolic\" for cellular respiration.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.5",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Why is cellular respiration correctly described as an amphibolic pathway rather than purely catabolic?",
      "options": [
        "It produces both ATP and heat",
        "It occurs in both plants and animals",
        "Its intermediates are used for both breakdown and synthesis of biomolecules",
        "It operates both in the presence and absence of oxygen"
      ],
      "answerIndex": 2,
      "explanation": "Respiration involves both catabolism (breaking down substrates) and anabolism (withdrawing intermediates to synthesize fatty acids, proteins, etc.), making it amphibolic."
    }
  },
  {
    "id": "mnemo-bio-ch12-17",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-6",
    "topicTitle": "Substrate Entry Points",
    "topic": "How Fats and Proteins Enter Cellular Respiration",
    "mnemonicNumber": 17,
    "title": "Substrate Entry: Glycerol enters at DHAP, Fatty Acids at Acetyl-CoA",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Fats = Glycerol enters DHAP | Fatty Acids enter Acetyl-CoA | Proteins enter as Pyruvate, Acetyl-CoA or Krebs acids",
    "memoryHook": "Fats split into glycerol and fatty acids. Glycerol enters glycolysis at DHAP (Triose-P). Fatty acids are beta-oxidized to Acetyl-CoA! Proteins are deaminated into Pyruvate, Acetyl-CoA, or Krebs intermediates.",
    "fact": "Fats are first broken down into glycerol and fatty acids. Fatty acids are converted to Acetyl-CoA and enter Krebs cycle. Glycerol is converted to DHAP (PGAL) and enters glycolysis. Proteins are degraded into amino acids and enter at various stages after deamination.",
    "breakdown": [
      {
        "key": "Glycerol Entry Point",
        "label": "Converted to Dihydroxyacetone phosphate (DHAP / PGAL) in glycolysis"
      },
      {
        "key": "Fatty Acid Entry Point",
        "label": "Broken down by beta-oxidation into 2-carbon Acetyl-CoA entering Krebs"
      },
      {
        "key": "Amino Acid Entry Points",
        "label": "Deaminated into Pyruvate, Acetyl-CoA, α-KG, Succinyl-CoA, or Oxaloacetate"
      },
      {
        "key": "Common Convergent Metabolite",
        "label": "Acetyl-CoA is the common convergence point for carbs, fats, and proteins"
      }
    ],
    "doodleBadge": "Glycerol → DHAP | FA → Acetyl-CoA",
    "doodleSubtext": "Substrate Entry",
    "explanation": "Acetyl-CoA is known as the grand crossroad of cellular metabolism because carbohydrates, lipids, and amino acids can all be converted to it.",
    "alsoRemember": "Pure fats yield more than double the energy (9 kcal/g) of carbohydrates (4 kcal/g).",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.5 & Figure 12.6.",
    "neetTrap": "Fatty acids do NOT enter glycolysis; they enter as ACETYL-CoA into Krebs cycle.",
    "tags": [
      "Substrate Entry",
      "Glycerol",
      "DHAP",
      "Fatty Acids",
      "Acetyl-CoA",
      "Figure 12.6"
    ],
    "expandedMeaning": "Entry points of lipids and proteins into cellular respiration pathways.",
    "whyItWorks": "Directly pairs each cleavage product with its exact pathway entrance.",
    "visualDescription": "A highway interchange showing a fatty acid tanker truck merging into Acetyl-CoA ramp, and a glycerol van merging into DHAP off-ramp.",
    "neetRelevance": "Questions asking where glycerol or fatty acids enter cellular respiration.",
    "commonMistake": "Thinking fatty acids enter glycolysis at glucose or pyruvate.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.5",
    "verificationStatus": "verified",
    "quiz": {
      "question": "At which point does glycerol derived from lipid breakdown enter the respiratory pathway?",
      "options": [
        "Pyruvic acid",
        "Acetyl-CoA",
        "Dihydroxyacetone phosphate (DHAP)",
        "Citric acid"
      ],
      "answerIndex": 2,
      "explanation": "Glycerol is phosphorylated and converted to DHAP (triose phosphate), entering the glycolytic pathway."
    }
  },
  {
    "id": "mnemo-bio-ch12-18",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-6",
    "topicTitle": "Respiratory Inhibitors",
    "topic": "ETS Inhibitors: Rotenone, Antimycin, Cyanide, and Oligomycin",
    "mnemonicNumber": 18,
    "title": "ETS Blockers: Rotenone at I, Antimycin at III, Cyanide at IV, Oligomycin at V",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "hard",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Rotenone (I) → Antimycin A (III) → Cyanide/CO (IV) → Oligomycin (V) | DNP Uncoupler",
    "memoryHook": "Rotenone blocks Complex I. Antimycin A blocks Complex III. Cyanide, Azide, and Carbon Monoxide bind Cyt a3 to kill Complex IV! Oligomycin plugs the F0 channel of Complex V. 2,4-DNP is an UNCOUPLER (dissipates gradient as heat)!",
    "fact": "Chemical inhibitors target specific ETS complexes: Rotenone inhibits Complex I; Antimycin A inhibits Complex III; Cyanide (CN-), Azide (N3-), and CO inhibit Complex IV (Cytochrome c oxidase); Oligomycin blocks the F0 channel of ATP Synthase (Complex V); 2,4-Dinitrophenol (DNP) acts as an uncoupler.",
    "breakdown": [
      {
        "key": "Complex I Inhibitor",
        "label": "Rotenone and Amytal (barbiturate)"
      },
      {
        "key": "Complex II Inhibitor",
        "label": "Malonate (competitive inhibitor of succinate dehydrogenase)"
      },
      {
        "key": "Complex III Inhibitor",
        "label": "Antimycin A (blocks electron flow between cyt b and cyt c1)"
      },
      {
        "key": "Complex IV Inhibitor",
        "label": "Cyanide (CN-), Carbon Monoxide (CO), Sodium Azide (N3-)"
      },
      {
        "key": "Complex V Inhibitor",
        "label": "Oligomycin (binds F0 channel, preventing proton flow)"
      },
      {
        "key": "Uncouplers (2,4-DNP)",
        "label": "Carries protons across membrane, destroying gradient; ETS runs fast but zero ATP is made (all heat)"
      }
    ],
    "doodleBadge": "Inhibitors: I to V",
    "doodleSubtext": "ETS Poisons",
    "explanation": "Brown adipose tissue contains thermogenin (UCP-1), a natural uncoupler that generates body heat in hibernating animals and newborns.",
    "alsoRemember": "Cyanide poisoning can be counteracted with nitrites and thiosulfate.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.4.3 & Chapter 9 (Malonate).",
    "neetTrap": "Uncouplers do NOT stop electron transport; they actually SPEED UP electron transport while abolishing ATP synthesis.",
    "tags": [
      "Inhibitors",
      "Cyanide",
      "Rotenone",
      "Oligomycin",
      "Uncouplers",
      "DNP"
    ],
    "expandedMeaning": "Targeted complexes of famous pharmacological inhibitors and uncouplers.",
    "whyItWorks": "Maps each classic poison directly to its numbered complex from I to V.",
    "visualDescription": "Five roadblock signs placed across the five ETS stations: skull on I (Rotenone), III (Antimycin), IV (Cyanide), and V (Oligomycin).",
    "neetRelevance": "Questions on cyanide poisoning and mechanisms of uncouplers.",
    "commonMistake": "Thinking uncouplers stop oxygen consumption (they actually increase it).",
    "sourceReference": "NCERT Class 11 Chapter 12",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Cyanide (CN-) acts as a lethal respiratory poison by directly inhibiting which component of the electron transport chain?",
      "options": [
        "Complex I (NADH dehydrogenase)",
        "Complex II (Succinate dehydrogenase)",
        "Complex III (Cytochrome bc1)",
        "Complex IV (Cytochrome c oxidase)"
      ],
      "answerIndex": 3,
      "explanation": "Cyanide binds to the iron atom in cytochrome a3 of Complex IV (cytochrome c oxidase), preventing electron transfer to oxygen."
    }
  },
  {
    "id": "mnemo-bio-ch12-19",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-6",
    "topicTitle": "Plant Respiratory Organs",
    "topic": "How Plants Breathe: Stomata, Lenticels, and Loose Parenchyma",
    "mnemonicNumber": 19,
    "title": "Plant Respiration: No Lungs Needed, Stomata & Lenticels Suffice",
    "badgeText": "Concept",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Plants Have NO Specialized Breathing Organs: 3 Reasons Why!",
    "memoryHook": "Why can plants survive without lungs or gills? 1) Each plant part takes care of its OWN gas needs, 2) Plants have VERY LOW gas exchange demands compared to animals, 3) Loose packing of parenchyma leaves vast air spaces!",
    "fact": "Plants have no specialized respiratory organs because: 1) Each plant part takes care of its own gas-exchange needs; 2) Plants do not present great demands for gas exchange (photosynthesis supplies O2 internally during the day); 3) Diffusion distance is very small due to loose parenchyma packing.",
    "breakdown": [
      {
        "key": "Reason 1 (Independence)",
        "label": "Each plant organ (leaf, stem, root) takes care of its own gas exchange needs with little transport"
      },
      {
        "key": "Reason 2 (Low demand)",
        "label": "Metabolic rates of plants are much lower than animals; leaves evolve ample O2 during daytime photosynthesis"
      },
      {
        "key": "Reason 3 (Diffusion distance)",
        "label": "Leaves are thin, stems have lenticels, and parenchyma has extensive intercellular spaces reaching every cell"
      },
      {
        "key": "Gas exchange structures",
        "label": "Stomata on leaves and herbaceous stems; Lenticels on woody bark"
      }
    ],
    "doodleBadge": "Why Plants Lack Lungs",
    "doodleSubtext": "3 Biological Reasons",
    "explanation": "During the day, photosynthesis releases O2 at rates far exceeding cellular respiration, so leaves release excess O2 rather than absorbing it.",
    "alsoRemember": "Lenticels are lens-shaped openings in cork formed by the activity of phellogen.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.1.",
    "neetTrap": "Roots also respire! Waterlogged soil suffocates roots because air in soil pores is displaced by water.",
    "tags": [
      "Plant Respiration",
      "Stomata",
      "Lenticels",
      "Parenchyma",
      "Gas Exchange"
    ],
    "expandedMeaning": "Three anatomical and physiological explanations for why plants lack specialized respiratory organs.",
    "whyItWorks": "Direct summary of NCERT section 12.1 opening discussion.",
    "visualDescription": "A tree cross-section showing leaf stomata, woody bark lenticels, and root hairs each taking care of their own breathing.",
    "neetRelevance": "Statement evaluation questions based on NCERT Section 12.1.",
    "commonMistake": "Assuming plants need a circulatory system to transport oxygen from leaves to roots.",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which of the following is a primary reason why plants can manage gas exchange without specialized respiratory organs like lungs?",
      "options": [
        "Plant cells do not require ATP energy",
        "Each plant part takes care of its own gas-exchange needs",
        "Plants respire only during the night",
        "Oxygen is transported through the xylem vessels"
      ],
      "answerIndex": 1,
      "explanation": "In plants, each part takes care of its own gas-exchange needs, diffusion distances are small, and gas demands are much lower than in animals."
    }
  },
  {
    "id": "mnemo-bio-ch12-20",
    "subject": "biology",
    "chapterId": "bio-ch-12",
    "chapterNumber": 12,
    "chapterTitle": "Respiration in Plants",
    "topicId": "bio-top-12-6",
    "topicTitle": "Fermentation vs Aerobic Respiration",
    "topic": "Fermentation vs Aerobic Respiration Summary",
    "mnemonicNumber": 20,
    "title": "Aerobic vs Fermentation: 36-38 ATP Complete vs 2 ATP Partial (<7%)",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Aerobic = Complete Oxidation (O2 Acceptor, 36-38 ATP) | Fermentation = Partial (<7% Energy, 2 ATP)",
    "memoryHook": "Fermentation: partial breakdown, slow NADH reoxidation, <7% energy released, hazardous end products (ethanol/lactic acid), net 2 ATP. Aerobic: complete breakdown to CO2 and H2O, fast ETS reoxidation, oxygen acceptor, 36-38 ATP!",
    "fact": "Fermentation causes partial breakdown of glucose with less than 7% of energy released, yielding net 2 ATP without oxygen. Aerobic respiration completely oxidizes glucose into CO2 and H2O, releasing nearly all energy to yield 36 to 38 ATP.",
    "breakdown": [
      {
        "key": "Substrate breakdown",
        "label": "Fermentation: Incomplete / Partial | Aerobic: Complete into CO2 and H2O"
      },
      {
        "key": "Terminal Electron Acceptor",
        "label": "Fermentation: Pyruvate or Acetaldehyde | Aerobic: Molecular Oxygen (O2)"
      },
      {
        "key": "Energy Released",
        "label": "Fermentation: Less than 7% of glucose energy | Aerobic: Full energy extracted"
      },
      {
        "key": "Net ATP Generated",
        "label": "Fermentation: 2 ATP per glucose | Aerobic: 36 or 38 ATP per glucose"
      },
      {
        "key": "NADH Reoxidation",
        "label": "Fermentation: Slow reoxidation to NAD+ | Aerobic: Vigorous and fast through ETS"
      }
    ],
    "doodleBadge": "Complete vs Partial",
    "doodleSubtext": "Aerobic vs Anaerobic",
    "explanation": "Because fermentation extracts less than 7% of available free energy, anaerobic organisms must consume massive amounts of sugar to meet their energy demands.",
    "alsoRemember": "Pastuer effect: inhibition of fermentation by oxygen.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 12, Section 12.3 & 12.5.",
    "neetTrap": "In fermentation, less than 7% of the energy of glucose is released, and not all of it is trapped in ATP.",
    "tags": [
      "Fermentation",
      "Aerobic Respiration",
      "Comparison",
      "Energy Efficiency",
      "Pasteur Effect"
    ],
    "expandedMeaning": "Comprehensive comparison of complete aerobic respiration vs incomplete anaerobic fermentation.",
    "whyItWorks": "Direct tabular contrast of completeness, acceptors, energy percentages, and ATP numbers.",
    "visualDescription": "A candle (fermentation) producing a tiny flicker (2 ATP) compared to a blazing blast furnace (aerobic) roaring with 38 ATP.",
    "neetRelevance": "Frequent matching and assertion-reason questions.",
    "commonMistake": "Claiming fermentation extracts 20-30% of glucose energy (it is strictly < 7%).",
    "sourceReference": "NCERT Class 11 Chapter 12 Section 12.3 & 12.5",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Approximately what percentage of the total energy in glucose is released during anaerobic fermentation?",
      "options": [
        "Less than 7%",
        "About 25%",
        "Around 50%",
        "More than 75%"
      ],
      "answerIndex": 0,
      "explanation": "In fermentation, less than 7% of the total energy stored in glucose is released, and not all of it is trapped in high-energy bonds of ATP."
    }
  }
];
