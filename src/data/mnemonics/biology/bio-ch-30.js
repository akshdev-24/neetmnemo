export const bioCh30Mnemonics = [
  {
    "id": "bio-ch30-01",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Population Interactions Grid",
    "mnemonicNumber": 1,
    "title": "Population Interactions: Signs (+/+, +/0, +/-, -/-, -/0)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Mutualism (+/+) | Commensalism (+/0) | Parasitism & Predation (+/-) | Competition (-/-) | Amensalism (-/0)",
    "memoryHook": "Mutualism (Both win), Commensalism (One wins, other neutral), Predation/Parasitism (One wins, other loses), Competition (Both lose!), Amensalism (One harmed, other neutral)!",
    "fact": "Interactions between two species: 1. Mutualism (+/+): both species benefit (e.g. Lichens, Fig & Wasp, Mycorrhiza). 2. Competition (-/-): both species harmed. 3. Predation (+/-): predator gains, prey harmed. 4. Parasitism (+/-): parasite gains, host harmed. 5. Commensalism (+/0): one benefits, other unaffected (e.g. Orchid on Mango, Barnacles on Whale, Cattle Egret & Grazing Cattle). 6. Amensalism (-/0): one harmed, other unaffected (e.g. Penicillium mold releasing penicillin inhibiting bacteria).",
    "breakdown": [
      {
        "key": "Mutualism (+/+)",
        "label": "Both species benefit (Lichens: Alga + Fungus; Mycorrhiza: Fungus + Root; Fig flower + Blastophaga wasp)"
      },
      {
        "key": "Commensalism (+/0)",
        "label": "One benefits, other neither harmed nor benefited (Epiphytic orchid on mango; Sea anemone & Clown fish)"
      },
      {
        "key": "Predation (+/-)",
        "label": "One benefits, other killed/consumed (Tiger & Deer; Prickly pear cactus & Cactoblastis moth)"
      },
      {
        "key": "Parasitism (+/-)",
        "label": "One benefits, host harmed (Cuscuta on hedge plants; Liver fluke; Ticks on dogs)"
      },
      {
        "key": "Competition (-/-)",
        "label": "Both species suffer reduced fitness (Abingdon tortoise & goats in Galapagos; Flamingos & fish for zooplankton)"
      },
      {
        "key": "Amensalism (-/0)",
        "label": "One species is harmed/inhibited while other remains unaffected (Penicillium mold killing bacteria)"
      }
    ],
    "doodleBadge": "+/+  +/0  +/-  -/-  -/0",
    "doodleSubtext": "Interaction Matrix",
    "explanation": "Predators also act as conduits for energy transfer across trophic levels and keep prey populations under control, maintaining species diversity in communities.",
    "alsoRemember": "Starfish Pisaster removal from American Pacific rocky intertidal communities led to extinction of more than 10 invertebrate species due to interspecific competition.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4, Table 13.1.",
    "neetTrap": "Amensalism is (-/0), where one species is harmed and the other is UNAFFECTED (neither benefited nor harmed).",
    "tags": [
      "Ecology",
      "Population Interactions",
      "Mutualism",
      "Amensalism",
      "Commensalism"
    ],
    "quiz": {
      "question": "Which population interaction is represented by (+/0), where one species derives benefit while the other species is neither harmed nor benefited?",
      "options": [
        "Mutualism",
        "Commensalism",
        "Amensalism",
        "Parasitism"
      ],
      "answerIndex": 1,
      "explanation": "Commensalism is defined by (+/0), where one partner benefits and the other remains neutral."
    }
  },
  {
    "id": "bio-ch30-02",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-2",
    "topicTitle": "Logistic Growth Equation: Verhulst-Pearl",
    "mnemonicNumber": 2,
    "title": "Logistic Growth: dN/dt = rN((K - N)/K)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "process",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "dN/dt = rN((K - N) / K) → S-shaped (Sigmoid) curve with Carrying Capacity K!",
    "memoryHook": "Exponential growth dN/dt = rN (J-shaped, infinite food); Real Logistic growth dN/dt = rN((K - N)/K) (S-shaped Sigmoid, limited by carrying capacity K)!",
    "fact": "Verhulst-Pearl Logistic Growth equation: dN/dt = rN((K - N)/K). N = Population density at time t, r = Intrinsic rate of natural increase, K = Carrying capacity (maximum population environment can sustain). Logistic curve is S-shaped (Sigmoid) with Lag phase, Log/Acceleration phase, Deceleration, and Asymptote.",
    "breakdown": [
      {
        "key": "N",
        "label": "Population density at time t"
      },
      {
        "key": "r",
        "label": "Intrinsic rate of natural increase (measure of biotic potential)"
      },
      {
        "key": "K",
        "label": "Carrying capacity (maximum population supportable by finite resources)"
      },
      {
        "key": "(K - N)/K",
        "label": "Environmental resistance factor"
      },
      {
        "key": "Shape of Curve",
        "label": "Sigmoid / S-shaped curve (Lag → Log → Deceleration → Asymptote N=K)"
      }
    ],
    "doodleBadge": "dN/dt = rN((K-N)/K)\nSigmoid S-Curve",
    "doodleSubtext": "Logistic Equation",
    "explanation": "Since resources for growth for most animal populations are finite and become limiting sooner or later, the logistic growth model is considered a much more realistic model than exponential growth.",
    "alsoRemember": "Exponential growth dN/dt = rN produces a J-shaped curve (seen only when resources are unlimited).",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.2, Figure 13.5.",
    "neetTrap": "When N = K (population reaches carrying capacity), (K - N)/K = 0, so growth rate dN/dt becomes ZERO (Asymptote).",
    "tags": [
      "Ecology",
      "Logistic Growth",
      "Carrying Capacity",
      "Sigmoid Curve"
    ],
    "quiz": {
      "question": "In the Verhulst-Pearl logistic population growth equation dN/dt = rN((K - N)/K), what does 'K' represent?",
      "options": [
        "Intrinsic rate of natural increase",
        "Carrying capacity of the habitat",
        "Population density at time zero",
        "Environmental mortality rate"
      ],
      "answerIndex": 1,
      "explanation": "K represents the Carrying Capacity, the maximum population size that the environment can sustain indefinitely."
    }
  },
  {
    "id": "bio-ch30-03",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-3",
    "topicTitle": "Gause's Competitive Exclusion Principle",
    "mnemonicNumber": 3,
    "title": "Gause's Principle: Two Competing Species for Same Resource Cannot Coexist",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Gause: Identical Niches → Inferior Eliminated! | MacArthur: Resource Partitioning → 5 Warblers Coexist!",
    "memoryHook": "Gause's Principle says two species competing for the exact same limiting resource cannot coexist (inferior is eliminated); MacArthur showed warblers divide time & foraging zone (Resource Partitioning) to coexist!",
    "fact": "Gause's Competitive Exclusion Principle states that two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will eventually be eliminated. Exception: MacArthur showed that 5 closely related species of warblers living on the same tree coexisted peacefully through Resource Partitioning (different foraging habits).",
    "breakdown": [
      {
        "key": "Gause's Principle",
        "label": "Two species with identical ecological niches cannot coexist if resources are limiting; inferior gets eliminated"
      },
      {
        "key": "Galapagos Example",
        "label": "Abingdon tortoise became extinct within a decade after goats were introduced on the island due to greater browsing efficiency of goats"
      },
      {
        "key": "Connell's Field Experiment",
        "label": "Superior barnacle Balanus dominates intertidal zone and excludes smaller Chthamalus"
      },
      {
        "key": "MacArthur's Warblers",
        "label": "5 warbler species avoided competition and coexisted by behavioral differences in foraging activities (Resource Partitioning)"
      }
    ],
    "doodleBadge": "Gause: Exclusion\nMacArthur: Partitioning",
    "doodleSubtext": "Competition Principles",
    "explanation": "Resource partitioning allows potential competitors to share resources by feeding at different times or foraging in different micro-zones of the same habitat.",
    "alsoRemember": "Competition can occur even when resources are not limiting (e.g. interference competition where one species interferes with the feeding efficiency of another).",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4.",
    "neetTrap": "Abingdon tortoise extinction by goats in Galapagos is an example of GAUSE'S COMPETITIVE EXCLUSION.",
    "tags": [
      "Ecology",
      "Gause Principle",
      "Competition",
      "MacArthur",
      "Resource Partitioning"
    ],
    "quiz": {
      "question": "The extinction of the Abingdon tortoise in Galapagos islands after the introduction of goats is a classic demonstration of:",
      "options": [
        "Commensalism",
        "Competitive exclusion",
        "Mutualism",
        "Amensalism"
      ],
      "answerIndex": 1,
      "explanation": "Goats had superior browsing efficiency, competitively excluding and driving Abingdon tortoises to extinction."
    }
  },
  {
    "id": "bio-ch30-04",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Allen's Rule & Kangaroo Rat Adaptations",
    "mnemonicNumber": 4,
    "title": "Thermal Adaptations: Allen's Rule (Short Ears/Limbs) & Kangaroo Rat (Internal Fat Water)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Allen's Rule = Cold mammals have Shorter Ears & Limbs (less heat loss) | Kangaroo Rat = Drinks NO water (Internal Fat Oxidation)!",
    "memoryHook": "Allen's Rule: Arctic animals have short ears/snouts to minimize heat loss! North American desert Kangaroo rat never drinks water; meets 100% water needs by internal fat oxidation!",
    "fact": "Key physiological and anatomical adaptations: 1. Allen's Rule: Mammals from colder climates generally have shorter ears and limbs to minimize heat loss. 2. Blubber: Thick subcutaneous fat layer in seals acting as an insulator. 3. Kangaroo Rat: In North American deserts, can survive without drinking water by utilizing metabolic water from internal fat oxidation and concentrating urine.",
    "breakdown": [
      {
        "key": "Allen's Rule",
        "label": "Shorter extremities (ears, legs, tail) in cold-climate mammals reduces surface area-to-volume ratio, minimizing heat dissipation"
      },
      {
        "key": "Blubber",
        "label": "Thick layer of subcutaneous fat in marine seals/whales reducing heat loss in freezing oceans"
      },
      {
        "key": "Kangaroo Rat (Dipodomys)",
        "label": "Internal fat oxidation yields metabolic water; concentrates urine to excrete solid-like waste"
      },
      {
        "key": "Desert Plants (Opuntia)",
        "label": "Sunken stomata, thick cuticle, CAM photosynthetic pathway, leaves reduced to spines"
      }
    ],
    "doodleBadge": "Allen: Short Ears\nKangaroo Rat: Fat Water",
    "doodleSubtext": "Environmental Adaptations",
    "explanation": "CAM (Crassulacean Acid Metabolism) plants open their stomata during cool nights and keep them tightly closed during scorching daytime to minimize transpiration water loss.",
    "alsoRemember": "High altitude altitude sickness is overcome by acclimatization: body increases RBC production, decreases binding affinity of hemoglobin, and increases breathing rate.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.1.2.",
    "neetTrap": "Allen's rule applies to EARS and LIMBS (extremities); Bergmann's rule applies to overall body size.",
    "tags": [
      "Ecology",
      "Allen Rule",
      "Adaptation",
      "Kangaroo Rat",
      "Blubber"
    ],
    "quiz": {
      "question": "According to Allen's Rule, mammals living in colder climates generally possess:",
      "options": [
        "Longer ears and longer limbs",
        "Shorter ears and shorter limbs to minimize heat loss",
        "Absence of body fur and subcutaneous fat",
        "Higher surface area-to-volume ratio"
      ],
      "answerIndex": 1,
      "explanation": "Allen’s Rule states that mammals in colder regions have shorter extremities (ears, limbs) to reduce heat dissipation."
    }
  },
  {
    "id": "bio-ch30-05",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-2",
    "topicTitle": "Population Growth Parameters: Natality, Mortality, Immigration, Emigration",
    "mnemonicNumber": 5,
    "title": "Population Density (N): N(t+1) = Nt + [(B + I) - (D + E)]",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "process",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Plus (Births B + Immigration I) vs Minus (Deaths D + Emigration E)",
    "memoryHook": "Population increases by Natality (B) and Immigration (I); Population decreases by Mortality (D) and Emigration (E)!",
    "fact": "Four basic processes that fluctuate population density (N): 1. Natality (B): number of births during a given period. 2. Mortality (D): number of deaths. 3. Immigration (I): number of individuals of the same species that came into the habitat from elsewhere. 4. Emigration (E): number of individuals who left the habitat. Equation: N(t+1) = Nt + [(B + I) - (D + E)].",
    "breakdown": [
      {
        "key": "Natality (B)",
        "label": "Births produced in population (+ increases density)"
      },
      {
        "key": "Immigration (I)",
        "label": "Individuals entering habitat from outside (+ increases density)"
      },
      {
        "key": "Mortality (D)",
        "label": "Deaths in population (- decreases density)"
      },
      {
        "key": "Emigration (E)",
        "label": "Individuals moving out of habitat (- decreases density)"
      },
      {
        "key": "Density Equation",
        "label": "N(t+1) = Nt + [(B + I) - (D + E)]"
      }
    ],
    "doodleBadge": "(B + I) IN\n(D + E) OUT",
    "doodleSubtext": "Population Dynamics",
    "explanation": "Under normal conditions, births and deaths are the two most important factors influencing population density. Immigration and emigration become decisive during colonisation of a new habitat.",
    "alsoRemember": "If B + I > D + E, the population is expanding (growing).",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.2, Figure 13.4.",
    "neetTrap": "In a newly colonized habitat, IMMIGRATION may contribute more significantly to population growth than birth rates.",
    "tags": [
      "Ecology",
      "Natality",
      "Mortality",
      "Immigration",
      "Emigration"
    ],
    "quiz": {
      "question": "Which of the following factors contributes to an INCREASE in population density?",
      "options": [
        "Mortality and Emigration",
        "Natality and Immigration",
        "Mortality and Immigration",
        "Natality and Emigration"
      ],
      "answerIndex": 1,
      "explanation": "Natality (births) and Immigration (inflow of individuals) both add individuals and increase population density."
    }
  },
  {
    "id": "bio-ch30-06",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Regulators vs Conformers vs Migrators vs Suspenders",
    "mnemonicNumber": 6,
    "title": "4 Responses to Abiotic Factors: Regulate, Conform, Migrate, Suspend",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "Regulate (Mammals constant 37°C) | Conform (99% animals change with environment) | Migrate (Birds fly to Bharatpur) | Suspend (Bears hibernate, Snails aestivate, Zooplankton diapause)",
    "memoryHook": "Regulators maintain homeostasis; Conformers cannot afford thermoregulation; Migrators fly away temporarily; Suspenders sleep through harsh weather (Hibernate/Aestivate/Diapause)!",
    "fact": "Organism responses to changing environment: 1. Regulators: maintain homeostasis (all birds and mammals maintain 37°C internal body temp and constant osmolarity). 2. Conformers: 99% of animals cannot maintain internal constant temperature; body temp changes with ambient temp. 3. Migrate: temporary move to hospitable area (Siberian birds migrate to Keoladeo Ghana National Park in Bharatpur, Rajasthan). 4. Suspend: escape in time (Hibernation in bears in winter, Aestivation in snails/fish in summer, Diapause stage of suspended development in zooplankton).",
    "breakdown": [
      {
        "key": "Regulate",
        "label": "Physiological homeostasis (sweating/shivering in humans); energetically expensive"
      },
      {
        "key": "Conform",
        "label": "99% of all animals & nearly all plants; heat loss/gain is a function of surface area"
      },
      {
        "key": "Migrate",
        "label": "Siberian cranes visit Keoladeo National Park, Bharatpur, Rajasthan every winter"
      },
      {
        "key": "Suspend: Hibernation",
        "label": "Winter sleep in bears to escape cold"
      },
      {
        "key": "Suspend: Aestivation",
        "label": "Summer sleep in snails and fishes to avoid heat and desiccation"
      },
      {
        "key": "Suspend: Diapause",
        "label": "Stage of suspended physiological development in many zooplankton species in lakes"
      }
    ],
    "doodleBadge": "Regulate · Conform ·\nMigrate · Suspend",
    "doodleSubtext": "Abiotic Adaptations",
    "explanation": "Thermoregulation is energetically expensive, especially for small animals like shrews and hummingbirds because they have a large surface area relative to their volume and lose body heat very fast in the cold.",
    "alsoRemember": "Very small animals are rarely found in polar regions because of high metabolic cost of heat generation.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.1.2, Figure 13.3.",
    "neetTrap": "Hibernation is WINTER sleep (bears); Aestivation is SUMMER sleep (snails/fish); Diapause is in ZOOPLANKTON.",
    "tags": [
      "Ecology",
      "Regulators",
      "Conformers",
      "Hibernation",
      "Aestivation",
      "Diapause"
    ],
    "quiz": {
      "question": "Under unfavorable conditions, many zooplankton species in lakes and ponds enter a stage of suspended development called:",
      "options": [
        "Aestivation",
        "Hibernation",
        "Diapause",
        "Homeostasis"
      ],
      "answerIndex": 2,
      "explanation": "Diapause is the stage of suspended physiological development exhibited by zooplankton during unfavorable seasons."
    }
  },
  {
    "id": "bio-ch30-07",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Mutualism Examples: Lichens, Mycorrhiza, Fig & Wasp, Ophrys Sexual Deceit",
    "mnemonicNumber": 7,
    "title": "Mutualism Examples: Fig-Wasp, Lichen, Mycorrhiza, Ophrys Sexual Deceit",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Fig + Wasp (One-to-one co-evolution) | Mediterranean Orchid Ophrys (Sexual Deceit with Male Bee Colpa)!",
    "memoryHook": "Fig female wasp lays eggs in fig inflorescence and pollinates it; Mediterranean orchid Ophrys mimics female bee petal (color/scent) so male bee pseudocopulates and pollinates!",
    "fact": "Classic Mutualisms (+/+): 1. Lichens: mutualism between fungus (mycobiont) and photosynthesizing alga/cyanobacteria (phycobiont). 2. Mycorrhizae: fungi and plant roots. 3. Plant-Animal mutualism: Fig tree and female Blastophaga wasp (wasp oviposits in fruit, larvae feed on developing seeds, wasp pollinates fig). 4. Ophrys Orchid: employs \"Sexual Deceit\" (one petal mimics female bee in color, markings, and scent; male bee pseudocopulates and transfers pollen).",
    "breakdown": [
      {
        "key": "Lichens",
        "label": "Fungus provides shelter/minerals; Alga provides photosynthetic carbohydrates"
      },
      {
        "key": "Mycorrhizae",
        "label": "Fungus mines phosphorus/water; Plant provides sugars"
      },
      {
        "key": "Fig & Wasp",
        "label": "Tight co-evolution: a given fig species is pollinated ONLY by its partner wasp species"
      },
      {
        "key": "Ophrys (Sexual Deceit)",
        "label": "Mediterranean orchid flower petal resembles female bee; male bee tries to pseudocopulate, picking up and transferring pollen"
      }
    ],
    "doodleBadge": "Fig + Wasp Co-evolution\nOphrys Sexual Deceit",
    "doodleSubtext": "Mutualism Champions",
    "explanation": "Co-evolution occurs in tight mutualisms: if the female bee's color patterns change slightly during evolution, the orchid petal must co-evolve to maintain its sexual mimicry.",
    "alsoRemember": "Cheaters in mutualism are nectar robbers that take nectar without delivering pollen.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4, Figure 13.7.",
    "neetTrap": "Ophrys orchid pollination involves SEXUAL DECEIT and PSEUDOCOPULATION with male bees.",
    "tags": [
      "Ecology",
      "Mutualism",
      "Ophrys",
      "Sexual Deceit",
      "Fig and Wasp"
    ],
    "quiz": {
      "question": "The Mediterranean orchid Ophrys gets pollinated by male bees through which fascinating evolutionary phenomenon?",
      "options": [
        "Resource partitioning",
        "Sexual deceit (Pseudocopulation)",
        "Amensalism",
        "Brood parasitism"
      ],
      "answerIndex": 1,
      "explanation": "Ophrys employs sexual deceit: one of its petals mimics a female bee, tricking male bees into pseudocopulation."
    }
  },
  {
    "id": "bio-ch30-08",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Parasitism: Ectoparasites vs Endoparasites & Brood Parasitism",
    "mnemonicNumber": 8,
    "title": "Parasitism: Cuscuta / Ticks (Ecto) vs Liver Fluke (Endo) vs Koel & Crow (Brood)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Ecto = Outside (Ticks, Lice, Cuscuta, Copepods on fish) | Endo = Inside (Liver Fluke with 2 hosts) | Brood = Cuckoo/Koel lays eggs in Crow's nest!",
    "memoryHook": "Ectoparasites live outside (Cuscuta lost chlorophyll, ticks on dogs); Endoparasites live in organs; Brood parasite Koel lays eggs in Crow nest to fool host!",
    "fact": "Parasite classifications: 1. Ectoparasites: feed on external surface of host (Lice on humans, Ticks on dogs, marine Copepods on fish, Cuscuta parasitic plant on hedge trees). 2. Endoparasites: live inside host organs; complex lifecycles with intermediate hosts (Human liver fluke requires snail and fish). 3. Brood Parasitism: parasitic bird (Cuckoo/Koel) lays eggs in the nest of its host (Crow) and lets the host incubate them.",
    "breakdown": [
      {
        "key": "Cuscuta (Amarbel)",
        "label": "Parasitic plant that lost chlorophyll and leaves during evolution; derives nutrients from host vascular system"
      },
      {
        "key": "Female Mosquito",
        "label": "Is NOT considered a parasite because it needs blood only for egg maturation, not as food"
      },
      {
        "key": "Human Liver Fluke (Trematode)",
        "label": "Has two intermediate hosts: a snail and a fish"
      },
      {
        "key": "Brood Parasitism",
        "label": "Cuckoo eggs have evolved to resemble the crow host's eggs in size and color to avoid detection and rejection"
      }
    ],
    "doodleBadge": "Ecto (Outside) · Endo (Inside)\nBrood (Koel in Crow Nest)",
    "doodleSubtext": "Parasitism Modes",
    "explanation": "During evolution, endoparasites simplify their anatomy: they lose unnecessary sense organs, digestive tract, and motility, while vastly expanding their reproductive capacity.",
    "alsoRemember": "Hyperparasites are parasites that live on other parasites.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4.",
    "neetTrap": "Female mosquito is NOT a parasite because it does not live on or in the host, taking blood only for reproduction.",
    "tags": [
      "Ecology",
      "Parasitism",
      "Brood Parasitism",
      "Cuscuta",
      "Liver Fluke"
    ],
    "quiz": {
      "question": "Why is the female mosquito not considered a true biological parasite, even though it bites humans for blood?",
      "options": [
        "It does not transmit any disease",
        "It requires human blood solely for egg production/nutrition, not as a permanent living habitat",
        "It has an endoparasitic lifestyle",
        "It has mutualistic interactions with humans"
      ],
      "answerIndex": 1,
      "explanation": "Female mosquitoes require a blood meal for egg laying, not as food/habitat, so they are not true parasites."
    }
  },
  {
    "id": "bio-ch30-09",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-2",
    "topicTitle": "Age Pyramids: Expanding, Stable, Declining",
    "mnemonicNumber": 9,
    "title": "3 Age Pyramids: Expanding (Triangular), Stable (Bell-shaped), Declining (Urn-shaped)",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Triangle = Expanding (Lots of Pre-reproductive kids) | Bell = Stable | Urn = Declining (Fewer kids at base)",
    "memoryHook": "Broad base = Expanding population (high birth rate); Equal base = Stable; Narrow base = Declining population!",
    "fact": "Human population age pyramids plot 3 age groups: Pre-reproductive, Reproductive, and Post-reproductive. 1. Expanding (Triangular): Broad pre-reproductive base, rapidly growing population (e.g. India, developing nations). 2. Stable (Bell-shaped): Pre-reproductive and reproductive numbers roughly equal. 3. Declining (Urn-shaped): Narrow pre-reproductive base (fewer young individuals; e.g. Japan, Germany).",
    "breakdown": [
      {
        "key": "Triangular (Expanding)",
        "label": "Broad base: Pre-reproductive > Reproductive > Post-reproductive"
      },
      {
        "key": "Bell-shaped (Stable)",
        "label": "Moderate base: Pre-reproductive ≈ Reproductive"
      },
      {
        "key": "Urn-shaped (Declining)",
        "label": "Narrow base: Pre-reproductive < Reproductive (aging population)"
      }
    ],
    "doodleBadge": "Triangle: Expanding\nBell: Stable\nUrn: Declining",
    "doodleSubtext": "Age Pyramid Shapes",
    "explanation": "The shape of the age pyramid reflects the growth status of the population and helps governments plan infrastructure, schools, pensions, and healthcare.",
    "alsoRemember": "Post-reproductive individuals are at the apex of the age pyramid.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.1, Figure 13.4.",
    "neetTrap": "An URN-SHAPED age pyramid indicates a DECLINING population (narrow base of children).",
    "tags": [
      "Ecology",
      "Age Pyramid",
      "Expanding",
      "Stable",
      "Declining"
    ],
    "quiz": {
      "question": "An urn-shaped age pyramid with a narrow base of pre-reproductive individuals represents which type of population growth status?",
      "options": [
        "Rapidly expanding",
        "Stable",
        "Declining",
        "Fluctuating wildly"
      ],
      "answerIndex": 2,
      "explanation": "An urn-shaped age pyramid has a constricted base indicating low birth rates and a declining population."
    }
  },
  {
    "id": "bio-ch30-10",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Eurythermal vs Stenothermal, Euryhaline vs Stenohaline",
    "mnemonicNumber": 10,
    "title": "Tolerance Ranges: Eury (Wide Range) vs Steno (Narrow Range)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Eury = Wide/Broad tolerance (Eurythermal = Wide Temp, Euryhaline = Wide Salinity) | Steno = Narrow tolerance",
    "memoryHook": "Eury- organisms can thrive across wide temperature/salt ranges; Steno- organisms are restricted to narrow temperature/salinity bands!",
    "fact": "1. Temperature tolerance: Eurythermal (can tolerate and thrive in a wide range of temperatures; e.g. most mammals and birds) vs Stenothermal (restricted to a narrow range of temperatures; e.g. corals, polar bears). 2. Salinity tolerance: Euryhaline (tolerant of wide range of salinities) vs Stenohaline (restricted to narrow range of salinities; most freshwater fish die in sea water due to osmotic shock).",
    "breakdown": [
      {
        "key": "Eurythermal",
        "label": "Tolerates wide temperature fluctuations (cosmopolitan distribution)"
      },
      {
        "key": "Stenothermal",
        "label": "Restricted to narrow temperature range (limited geographical range)"
      },
      {
        "key": "Euryhaline",
        "label": "Tolerates wide salinity variations (e.g. salmon, estuarine organisms)"
      },
      {
        "key": "Stenohaline",
        "label": "Tolerates only narrow salinity range (most freshwater and marine fish)"
      }
    ],
    "doodleBadge": "Eury = Wide Range\nSteno = Narrow Range",
    "doodleSubtext": "Physiological Tolerance",
    "explanation": "Salinity (measured in parts per thousand ppt) is <5 ppt in inland waters, 30-35 ppt in the sea, and >100 ppt in hyperhaline lagoons.",
    "alsoRemember": "Temperature is the most ecologically relevant environmental factor on Earth.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.1.1.",
    "neetTrap": "EURY means WIDE; STENO means NARROW.",
    "tags": [
      "Ecology",
      "Eurythermal",
      "Stenothermal",
      "Euryhaline",
      "Stenohaline"
    ],
    "quiz": {
      "question": "Organisms that are restricted to a very narrow range of temperatures are termed:",
      "options": [
        "Eurythermal",
        "Stenothermal",
        "Euryhaline",
        "Homeotherms"
      ],
      "answerIndex": 1,
      "explanation": "Stenothermal organisms can only survive within a narrow range of ambient temperatures."
    }
  },
  {
    "id": "bio-ch30-11",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Major Biomes of India and World",
    "mnemonicNumber": 11,
    "title": "Biomes: Tropical Rain Forest (Warm + High Rain) vs Desert (Low Rain)",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Temperature & Precipitation shape Biomes: Tropical Rainforest, Deciduous Forest, Desert, Sea coast, Tundra, Coniferous Forest",
    "memoryHook": "Annual variations in temperature and precipitation (rain + snow) determine major terrestrial biomes!",
    "fact": "Major biomes shown in NCERT biome distribution graph: 1. Tropical Rainforest (high temp 20-25°C, high rainfall 150-400 cm), 2. Temperate Forest, 3. Coniferous/Taiga Forest, 4. Grassland, 5. Desert (low rainfall <50 cm), 6. Arctic and Alpine Tundra (freezing permafrost).",
    "breakdown": [
      {
        "key": "Two Determinants of Biomes",
        "label": "Mean annual temperature (°C) and Mean annual precipitation (cm)"
      },
      {
        "key": "Tropical Forest",
        "label": "Warm throughout year; rainfall 150-400 cm; highest species diversity"
      },
      {
        "key": "Desert",
        "label": "Extreme temperature swings; precipitation <50 cm"
      },
      {
        "key": "Coniferous Forest",
        "label": "Evergreen needle-leaved trees (Pinus, Cedrus); cold winters"
      },
      {
        "key": "Major Indian Biomes",
        "label": "Tropical rain forest, Deciduous forest, Desert, Sea coast"
      }
    ],
    "doodleBadge": "Temp + Rain =\nMajor Biomes",
    "doodleSubtext": "Biome Distribution",
    "explanation": "Regional and local variations within each biome lead to the formation of a wide variety of local habitats.",
    "alsoRemember": "Even extreme habitats (hot springs, deep hydrothermal vents, Antarctic ice, human intestine) harbor thriving specialized microbes.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.1, Figure 13.1.",
    "neetTrap": "The two axes in the NCERT Biome graph are MEAN ANNUAL TEMPERATURE and MEAN ANNUAL PRECIPITATION.",
    "tags": [
      "Ecology",
      "Biomes",
      "Tropical Forest",
      "Desert",
      "Class 12"
    ],
    "quiz": {
      "question": "Which two key climatic factors plotted on a graph determine the boundaries of major terrestrial biomes on Earth?",
      "options": [
        "Soil pH and Wind speed",
        "Mean annual temperature and Mean annual precipitation",
        "Altitude and Latitude alone",
        "Solar irradiance and Humidity"
      ],
      "answerIndex": 1,
      "explanation": "Mean annual temperature and mean annual precipitation are the two primary parameters defining global biomes."
    }
  },
  {
    "id": "bio-ch30-12",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Predation Ecological Roles: Pisaster Starfish & Prickly Pear",
    "mnemonicNumber": 12,
    "title": "Predators Maintain Diversity: Pisaster Starfish & Prickly Pear Cactus Moth",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Prickly Pear invaded Australia → Cactoblastis moth brought biocontrol! | Pisaster removed → 10 species went extinct!",
    "memoryHook": "Prickly pear cactus wreaked havoc in 1920s Australia until a cactus-feeding moth was introduced; starfish Pisaster prevents dominant competitors from wiping out prey species!",
    "fact": "Key ecological roles of predators: 1. Energy conduits across trophic levels. 2. Biological control of invasive pests: Prickly pear cactus introduced in Australia in 1920s invaded millions of hectares until a cactus-feeding moth (Cactoblastis cactorum) was introduced. 3. Maintaining community diversity: When starfish Pisaster was removed from rocky intertidal communities, >10 species of invertebrates became extinct due to interspecific competition.",
    "breakdown": [
      {
        "key": "Conduits for Energy",
        "label": "Transfer energy fixed by plants to higher trophic levels"
      },
      {
        "key": "Prey Population Control",
        "label": "Prickly pear cactus brought under control by introducing natural predator moth"
      },
      {
        "key": "Pisaster Experiment (Robert Paine)",
        "label": "Keystone predator starfish maintains intertidal species diversity by preying on competitively dominant mussels"
      },
      {
        "key": "Prudent Predators",
        "label": "Natural predators do not overexploit prey, preventing prey extinction"
      }
    ],
    "doodleBadge": "Pisaster Starfish +\nPrickly Pear Biocontrol",
    "doodleSubtext": "Predator Ecological Roles",
    "explanation": "If a predator is too efficient and overexploits its prey, the prey might become extinct and following it, the predator will also become extinct for lack of food.",
    "alsoRemember": "Prey species have evolved various defenses: Monarch butterfly contains a distasteful chemical acquired during its caterpillar stage from a poisonous weed.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4.",
    "neetTrap": "Monarch butterfly is distasteful to birds because of a special chemical it acquires by FEEDING ON A POISONOUS WEED during its caterpillar stage.",
    "tags": [
      "Ecology",
      "Predation",
      "Pisaster",
      "Prickly Pear",
      "Monarch Butterfly"
    ],
    "quiz": {
      "question": "Why is the Monarch butterfly highly distasteful and avoided by predatory birds?",
      "options": [
        "It produces formic acid from stingers",
        "It acquires a toxic chemical by feeding on a poisonous weed in its caterpillar stage",
        "It has warning bright colors produced by genetic mutation only",
        "It secretes cardiac glycosides from adult wing scales"
      ],
      "answerIndex": 1,
      "explanation": "Monarch caterpillar feeds on a poisonous milkweed, sequestering distasteful toxic chemicals that protect the adult butterfly."
    }
  },
  {
    "id": "bio-ch30-13",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Plant Defenses Against Herbivory: Thorns & Chemicals",
    "mnemonicNumber": 13,
    "title": "Plant Defenses: Morphological (Thorns) & Chemical (Calotropis Glycosides)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Morphological: Thorns (Acacia, Cactus) | Chemical: Calotropis (Cardiac Glycosides), Nicotine, Caffeine, Quinine, Strychnine, Opium",
    "memoryHook": "Plants cannot run away from herbivores! They build physical Thorns (Acacia/Cactus) and chemical poisons like Cardiac Glycosides in Calotropis weed (no cattle eats it)!",
    "fact": "For plants, herbivores are predators. Plant defenses: 1. Morphological: Thorns in Acacia and Bougainvillea, spines in Cactus. 2. Chemical defenses: Calotropis produces highly poisonous cardiac glycosides (grazing cattle/goats never browse on it). Nicotine, caffeine, quinine, strychnine, and opium are produced by plants as defenses against grazers.",
    "breakdown": [
      {
        "key": "Morphological Defenses",
        "label": "Thorns (Acacia, Bougainvillea), Spines (Opuntia cactus), hairy leaves"
      },
      {
        "key": "Calotropis Weed",
        "label": "Produces poisonous CARDIAC GLYCOSIDES; avoided by all grazing cattle and goats"
      },
      {
        "key": "Secondary Metabolites",
        "label": "Nicotine, caffeine, quinine, strychnine, opium produced primarily as anti-herbivore defenses"
      }
    ],
    "doodleBadge": "Acacia = Thorns\nCalotropis = Cardiac Glycosides",
    "doodleSubtext": "Anti-Herbivore Arsenal",
    "explanation": "Nearly 25% of all insects are phytophagous (feeding on plant sap and other tissues), exerting massive evolutionary selective pressure on plants.",
    "alsoRemember": "Phytophagous means plant-eating insects.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4.",
    "neetTrap": "Calotropis weed produces CARDIAC GLYCOSIDES (affecting heart rhythm), not neurotoxins or alkaloids alone.",
    "tags": [
      "Ecology",
      "Plant Defenses",
      "Calotropis",
      "Cardiac Glycosides",
      "Thorns"
    ],
    "quiz": {
      "question": "Why do grazing cattle and goats strictly avoid browsing on the weed Calotropis growing in abandoned fields?",
      "options": [
        "It has sharp stinging hairs",
        "It produces highly poisonous cardiac glycosides",
        "It has low nutritional moisture content",
        "It releases irritating sulfur gas"
      ],
      "answerIndex": 1,
      "explanation": "Calotropis synthesizes lethal cardiac glycosides that disrupt heart function in herbivores."
    }
  },
  {
    "id": "bio-ch30-14",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-2",
    "topicTitle": "Life History Variations & Breeding Strategies",
    "mnemonicNumber": 14,
    "title": "Breeding Strategies: Breed Once (Pacific Salmon/Bamboo) vs Many Times (Birds/Mammals)",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "Semelparous (Breed ONCE and die): Pacific Salmon fish & Bamboo | Iteroparous (Breed REPEATEDLY): Most Birds and Mammals",
    "memoryHook": "Pacific salmon fish and bamboo trees breed only ONCE in their lifetime and die; birds, mammals, and humans breed repeatedly across years!",
    "fact": "Populations evolve towards maximum reproductive fitness (Darwinian fitness, high r value). Life history strategies in NCERT: 1. Breed only once in lifetime: Pacific salmon fish, Bamboo. 2. Breed many times: most birds and mammals. 3. Produce large number of small-sized offspring: Oysters, pelagic fishes. 4. Produce small number of large-sized offspring: Birds, mammals.",
    "breakdown": [
      {
        "key": "Breed ONCE in lifetime",
        "label": "Pacific salmon fish and Bamboo species (semelparity)"
      },
      {
        "key": "Breed MANY times",
        "label": "Most birds, mammals, humans (iteroparity)"
      },
      {
        "key": "Many small offspring",
        "label": "Oysters, pelagic fishes (high initial mortality)"
      },
      {
        "key": "Few large offspring",
        "label": "Birds, mammals (high parental investment and survival)"
      }
    ],
    "doodleBadge": "Breed Once: Salmon & Bamboo\nBreed Many: Birds & Mammals",
    "doodleSubtext": "Life History Tactics",
    "explanation": "Ecologists suggest that life history traits of organisms have evolved in relation to the constraints imposed by abiotic and biotic components of their habitat.",
    "alsoRemember": "Bamboo species flower only once in their lifetime (usually after 50-100 years), produce massive fruit crops, and die.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.3.",
    "neetTrap": "Pacific salmon fish and Bamboo breed ONLY ONCE in their lifetime and die.",
    "tags": [
      "Ecology",
      "Life History",
      "Pacific Salmon",
      "Bamboo",
      "Class 12"
    ],
    "quiz": {
      "question": "Which of the following organisms breeds only ONCE in its entire lifetime and then dies?",
      "options": [
        "Oysters",
        "Pelagic fishes",
        "Pacific salmon fish and Bamboo",
        "Birds and Mammals"
      ],
      "answerIndex": 2,
      "explanation": "Pacific salmon and bamboo species breed only once in their lifetime (semelparous strategy)."
    }
  },
  {
    "id": "bio-ch30-15",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-2",
    "topicTitle": "Exponential Growth Equation: dN/dt = rN",
    "mnemonicNumber": 15,
    "title": "Exponential Growth: dN/dt = rN & Nt = N0 e^(rt)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "process",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "dN/dt = (b - d)N = rN → Exponential J-shaped curve | Integral form: Nt = N0 e^(rt)",
    "memoryHook": "When food and space are unlimited, population explodes in a J-shaped curve! r = intrinsic rate of natural increase, e = base of natural logarithm (2.71828)!",
    "fact": "Exponential growth occurs when resources (food and space) are unlimited. Differential equation: dN/dt = (b - d)N = rN. Integral form: Nt = N0 * e^(rt). N0 = Initial population density, Nt = Density after time t, r = Intrinsic rate of natural increase, e = 2.71828.",
    "breakdown": [
      {
        "key": "Condition",
        "label": "Unlimited resources and ideal environmental conditions"
      },
      {
        "key": "Curve Shape",
        "label": "J-shaped growth curve"
      },
      {
        "key": "r value for Norway Rat",
        "label": "r = 0.015"
      },
      {
        "key": "r value for Flour Beetle",
        "label": "r = 0.12"
      },
      {
        "key": "r value for Human in 1981",
        "label": "r = 0.0205"
      }
    ],
    "doodleBadge": "dN/dt = rN\nNt = N0 e^(rt)",
    "doodleSubtext": "Exponential Formula",
    "explanation": "The 'r' value (intrinsic rate of natural increase) is a critical parameter for assessing the impacts of any biotic or abiotic factor on population growth.",
    "alsoRemember": "Darwin showed that even a slow-breeding animal like the elephant could reach enormous numbers in exponential growth without checks.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.2, Figure 13.5.",
    "neetTrap": "In 1981, the r value for the human population in India was 0.0205 (NCERT value).",
    "tags": [
      "Ecology",
      "Exponential Growth",
      "r value",
      "J Curve"
    ],
    "quiz": {
      "question": "What is the integral mathematical form of the exponential population growth equation?",
      "options": [
        "Nt = N0 e^(rt)",
        "dN/dt = rN((K-N)/K)",
        "Nt = N0 + rN",
        "r = (b - d)/N"
      ],
      "answerIndex": 0,
      "explanation": "Nt = N0 e^(rt) is the integral equation describing exponential population growth."
    }
  },
  {
    "id": "bio-ch30-16",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Ecology at Organismic vs Population Levels",
    "mnemonicNumber": 16,
    "title": "Levels of Biological Organization: Macro to Micro Hierarchy",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Organism → Population → Biological Community → Biome",
    "memoryHook": "Ecology is basically concerned with 4 levels of biological organization: Organisms, Populations, Communities, and Biomes!",
    "fact": "Ecology is the study of interactions among organisms and between organism and abiotic environment. Four core ecological levels: 1. Organism (Physiological ecology: adaptations to environment), 2. Population (group of interbreeding individuals of same species), 3. Community (assemblage of all interacting populations in an area), 4. Biome (large regional ecological unit with distinct climate).",
    "breakdown": [
      {
        "key": "1. Organism",
        "label": "Basic unit of ecological study; physiological adaptations"
      },
      {
        "key": "2. Population",
        "label": "Group of individuals of same species in a defined area sharing gene pool"
      },
      {
        "key": "3. Community",
        "label": "All populations of different species interacting in an ecosystem"
      },
      {
        "key": "4. Biome",
        "label": "Vast regional formation characterized by major vegetation type and climate"
      }
    ],
    "doodleBadge": "Organism → Population →\nCommunity → Biome",
    "doodleSubtext": "4 Ecological Levels",
    "explanation": "Physiological ecology at organismic level tries to understand how different organisms are adapted to their environments in terms of survival and reproduction.",
    "alsoRemember": "Ramdeo Misra is revered as the Father of Ecology in India.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Introduction.",
    "neetTrap": "RAMDEO MISRA is recognized as the Father of Ecology in India (established ecology teaching and research at BHU).",
    "tags": [
      "Ecology",
      "Hierarchy",
      "Ramdeo Misra",
      "Biome",
      "Community"
    ],
    "quiz": {
      "question": "Who is widely revered as the Father of Ecology in India?",
      "options": [
        "Panchanan Maheshwari",
        "Ramdeo Misra",
        "M.S. Swaminathan",
        "Birbal Sahni"
      ],
      "answerIndex": 1,
      "explanation": "Prof. Ramdeo Misra is acknowledged as the Father of Ecology in India."
    }
  },
  {
    "id": "bio-ch30-17",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Commensalism Examples in NCERT",
    "mnemonicNumber": 17,
    "title": "4 Commensalism Pairs: Orchid-Mango, Barnacle-Whale, Egret-Cattle, Anemone-Clownfish",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Orchid on Mango tree | Barnacles on Whale back | Cattle Egret & Grazing Cattle | Clownfish in Sea Anemone tentacles",
    "memoryHook": "In all 4 pairs, one partner gets a free ride, shelter, or food, while the host is completely unaffected (+/0)!",
    "fact": "Four classic NCERT Commensalism (+/0) examples: 1. Epiphytic Orchid growing on a mango branch (orchid gets support/sunlight, mango tree unharmed). 2. Barnacles growing on the back of a whale (barnacles get free transport/plankton food, whale unaffected). 3. Cattle Egret and grazing cattle (grazing cattle flush out insects from grass; egret catches them easily). 4. Sea Anemone and Clownfish (stinging tentacles protect clownfish from predators; anemone gains nothing).",
    "breakdown": [
      {
        "key": "Orchid & Mango",
        "label": "Epiphytic orchid gains elevated perch for light; mango branch unharmed (+/0)"
      },
      {
        "key": "Barnacles & Whale",
        "label": "Barnacles ride on whale skin filtering nutrient-rich water (+/0)"
      },
      {
        "key": "Cattle Egret & Cattle",
        "label": "Moving cattle stir up hidden insects for egret (+/0)"
      },
      {
        "key": "Clownfish & Sea Anemone",
        "label": "Clownfish finds shelter among venomous tentacles (+/0)"
      }
    ],
    "doodleBadge": "+/0 Interaction\n4 NCERT Classic Pairs",
    "doodleSubtext": "Commensalism Catalog",
    "explanation": "The cattle egret would struggle to find and catch cryptic grass insects without the foraging movements of heavy grazing cattle.",
    "alsoRemember": "Epiphytes are air plants that grow on other trees for physical support without taking water or sap from the host.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.4.",
    "neetTrap": "Orchid on Mango is COMMENSALISM (epiphyte), while Cuscuta on hedge is PARASITISM.",
    "tags": [
      "Ecology",
      "Commensalism",
      "Epiphyte",
      "Clownfish",
      "Cattle Egret"
    ],
    "quiz": {
      "question": "The relationship between a Cattle Egret foraging close to grazing livestock in a meadow is an example of:",
      "options": [
        "Mutualism",
        "Commensalism",
        "Parasitism",
        "Amensalism"
      ],
      "answerIndex": 1,
      "explanation": "The Cattle Egret benefits from insects stirred up by grazing cattle, while cattle are unaffected (+/0, Commensalism)."
    }
  },
  {
    "id": "bio-ch30-18",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-2",
    "topicTitle": "Population Density Measurement Methods",
    "mnemonicNumber": 18,
    "title": "Measuring Population Density: Numbers, Biomass, % Cover, Pugmarks/Fecal Pellets",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Counting heads | Percent Cover / Biomass (Parthenium vs 1 Banyan) | Pugmarks & Fecal pellets (Tiger census)",
    "memoryHook": "In a forest, 1 massive Banyan tree with 200 Parthenium weeds has higher ecological biomass despite count of 1! Tiger census in National parks uses PUGMARKS and FECAL PELLETS!",
    "fact": "Methods to measure Population Density (N): 1. Absolute total count (counting every individual). 2. Percent cover or biomass: for single huge Banyan tree vs 200 tiny Parthenium weeds, biomass is a much more meaningful measure of population density. 3. Relative abundance: number of fish caught per trap in a lake. 4. Indirect count: Tiger census in Indian National Parks and Tiger Reserves is based on PUGMARKS and FECAL PELLETS.",
    "breakdown": [
      {
        "key": "Total Count",
        "label": "Direct census (counting all organisms; e.g. Siberian cranes in Bharatpur)"
      },
      {
        "key": "Biomass / % Cover",
        "label": "Essential when individual size varies enormously (Huge banyan canopy vs grass weeds)"
      },
      {
        "key": "Relative Density",
        "label": "Number of fish caught per trap indicates total lake fish population without draining lake"
      },
      {
        "key": "Indirect Estimation",
        "label": "Tiger census based on unique pugmark footprint plaster casts and fecal pellets"
      }
    ],
    "doodleBadge": "Tiger Census =\nPugmarks + Fecal Pellets",
    "doodleSubtext": "Density Metrics",
    "explanation": "Counting bacteria in millions per ml is done by optical density or serial dilution plating rather than counting individual cells.",
    "alsoRemember": "Pugmark tracking is non-invasive and does not cause distress to wild animals.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.2.1.",
    "neetTrap": "Tiger census in National Parks is based on PUGMARKS and FECAL PELLETS (not radio collars or blood samples alone).",
    "tags": [
      "Ecology",
      "Population Density",
      "Tiger Census",
      "Pugmarks",
      "Biomass"
    ],
    "quiz": {
      "question": "Tiger census in our National Parks and Tiger Reserves is often estimated indirectly using:",
      "options": [
        "Radio tags on all tigers",
        "Pugmarks and fecal pellets",
        "Aerial helicopter photographs",
        "DNA blood samples"
      ],
      "answerIndex": 1,
      "explanation": "Tiger population counts in Indian forests are routinely conducted using pugmark identification and fecal pellet analysis."
    }
  },
  {
    "id": "bio-ch30-19",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "High Altitude Acclimatization in Humans",
    "mnemonicNumber": 19,
    "title": "Altitude Sickness: Rohtang Pass Acclimatization (More RBCs + Faster Breathing)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "process",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "Low Atmospheric Pressure at >3500m → Altitude Sickness (Nausea, Fatigue, Heart Palpitations) → Body fixes by: More RBCs + Low Hb affinity + Fast Breathing!",
    "memoryHook": "At high altitudes like Rohtang Pass / Mansarovar (>3500m), low oxygen causes altitude sickness; body acclimatizes by boosting RBC count, decreasing Hb oxygen affinity, and speeding up breathing rate!",
    "fact": "Altitude sickness occurs at high altitudes (>3,500 m like Rohtang Pass near Manali and Leh) because of low atmospheric pressure, so the body does not get enough oxygen. Symptoms: nausea, fatigue, heart palpitations. Body acclimatizes by: 1. Increasing RBC production (erythropoiesis stimulated by erythropoietin), 2. Decreasing the binding affinity of hemoglobin (shifts curve right to release O2 to tissues), 3. Increasing breathing rate.",
    "breakdown": [
      {
        "key": "Cause",
        "label": "Low atmospheric pressure leads to lower arterial pO2 (hypoxia)"
      },
      {
        "key": "Symptoms",
        "label": "Nausea, physical fatigue, headache, and heart palpitations"
      },
      {
        "key": "Correction 1: RBCs",
        "label": "Erythropoietin stimulates bone marrow to produce MORE red blood cells"
      },
      {
        "key": "Correction 2: Hb Affinity",
        "label": "Hemoglobin binding affinity for O2 DECREASES, releasing O2 readily to tissues"
      },
      {
        "key": "Correction 3: Respiration",
        "label": "Breathing rate increases to draw more air into lungs"
      }
    ],
    "doodleBadge": ">3500m Hypoxia →\n↑ RBC + ↑ Breathing + ↓ Hb Affinity",
    "doodleSubtext": "Altitude Acclimatization",
    "explanation": "Natives living at high altitudes in the Himalayas naturally have higher RBC counts and higher total hemoglobin concentrations than people living in plains.",
    "alsoRemember": "Erythropoietin (EPO) is a peptide hormone produced by the juxtaglomerular cells of the kidney.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.1.2.",
    "neetTrap": "To relieve hypoxia at high altitudes, hemoglobin's binding affinity for oxygen DECREASES (not increases), so oxygen is readily unloaded into needy tissues.",
    "tags": [
      "Ecology",
      "Altitude Sickness",
      "Acclimatization",
      "Erythropoietin",
      "Class 12"
    ],
    "quiz": {
      "question": "How does the human body physiologically compensate for low oxygen availability at high altitudes (>3,500 m)?",
      "options": [
        "Decreasing RBC production and slowing down breathing",
        "Increasing RBC production, increasing breathing rate, and decreasing hemoglobin binding affinity",
        "Increasing hemoglobin binding affinity and reducing lung ventilation",
        "Suppressing bone marrow erythropoiesis"
      ],
      "answerIndex": 1,
      "explanation": "The body compensates by increasing RBCs, elevating ventilation rate, and decreasing Hb-O2 affinity to unload oxygen into tissues."
    }
  },
  {
    "id": "bio-ch30-20",
    "subject": "biology",
    "chapterId": "bio-ch-30",
    "chapterNumber": 30,
    "chapterTitle": "Organisms and Populations",
    "topicId": "bio-top-30-1",
    "topicTitle": "Thermal Vent Bacteria & Archaebacteria",
    "mnemonicNumber": 20,
    "title": "Extreme Habitats: Archaebacteria in >100°C Deep Sea Hydrothermal Vents",
    "badgeText": "Memory Trick",
    "importance": "Medium",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Thermoacidophiles & Methanogens thrive in boiling hydrothermal vents (>100°C) and Antarctic ice (-50°C)!",
    "memoryHook": "Life flourishes not just in mild gardens, but in boiling hot springs (>100°C), deep ocean hydrothermal trenches, permafrost, and hyperhaline lagoons!",
    "fact": "Microbes and specialized archaebacteria live in extreme abiotic environments: 1. Deep sea hydrothermal vents where temperatures exceed 100°C and pressures are over 100 atmospheres. 2. Hot sulfur springs. 3. Freezing Antarctic soils. 4. Saline hyperhaline lagoons. 5. Anaerobic rumen of cows.",
    "breakdown": [
      {
        "key": "Thermoacidophiles",
        "label": "Branched-chain ether-linked membrane lipids protect from thermal lysis"
      },
      {
        "key": "Barophilic Microbes",
        "label": "Enzymes adapted to function under crushing hydrostatic pressures in ocean trenches (>500 atm)"
      },
      {
        "key": "Psychrophiles",
        "label": "Antifreeze glycoproteins prevent intracellular ice crystal formation in polar ice"
      }
    ],
    "doodleBadge": ">100°C Vents to\n-50°C Polar Ice",
    "doodleSubtext": "Extreme Habitat Extremophiles",
    "explanation": "Such extremophiles demonstrate that life can adapt biochemically and structurally to virtually any thermodynamic niche on Earth.",
    "alsoRemember": "Thermus aquaticus from boiling hot springs provided the heat-resistant Taq polymerase for PCR.",
    "ncertConnection": "NCERT Class 12 Biology Chapter 13, Section 13.1.",
    "neetTrap": "Archaebacteria survive extreme heat due to BRANCHED-CHAIN LIPIDS in their cell membranes.",
    "tags": [
      "Ecology",
      "Extremophiles",
      "Archaebacteria",
      "Hydrothermal Vents"
    ],
    "quiz": {
      "question": "Which structural feature of archaebacteria enables them to survive in extreme habitats like deep-sea hydrothermal vents where temperatures exceed 100°C?",
      "options": [
        "Peptidoglycan cell wall",
        "Complex branched-chain lipid membrane structure",
        "Presence of chloroplasts",
        "Cellulose wall"
      ],
      "answerIndex": 1,
      "explanation": "Archaebacteria possess specialized branched lipid membranes that maintain membrane stability at boiling temperatures."
    }
  }
];
