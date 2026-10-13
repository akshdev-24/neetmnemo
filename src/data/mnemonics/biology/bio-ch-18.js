/**
 * Biology Chapter 18: Neural Control and Coordination
 * 20 High-Yield NEET Mnemonics
 */

export const bioCh18Mnemonics = [
  {
    "id": "mnemo-bio-ch18-01",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Resting Membrane Potential & Sodium-Potassium Pump",
    "topic": "3 Na+ Out / 2 K+ In ATPase Pump and -70 mV Polarization",
    "mnemonicNumber": 1,
    "title": "Resting Membrane: 3 Na+ Pumped OUT / 2 K+ Pumped IN (Negative Inside -70 mV, Salty Banana)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Salty Banana Axon: High Na+ Salt Outside, High K+ Potassium Inside! Sodium-Potassium Pump kicks 3 Na+ OUT and brings 2 K+ IN using 1 ATP -> Inside stays Negative (-70 mV)!",
    "memoryHook": "A banana is full of Potassium (K+ inside) floating in a Salty ocean (Na+ outside). 3 positive charges kicked out for every 2 brought in keeps the cell interior negatively polarized (-70 mV)!",
    "fact": "In resting axonal membrane (polarized state at -70 mV): Axoplasm has high K+ and negatively charged proteins, while extracellular fluid (ECF) has high Na+. Membrane is more permeable to K+ and nearly impermeable to Na+ and negative proteins. The active Na+/K+ ATPase pump maintains this ionic gradient by transporting 3 Na+ outwards for 2 K+ inwards per ATP hydrolyzed.",
    "breakdown": [
      {
        "key": "Ionic Distribution",
        "label": "Inside axoplasm: High K+ & negative proteins; Outside ECF: High Na+ & Cl-"
      },
      {
        "key": "Permeability at Rest",
        "label": "Membrane is comparatively more permeable to K+ and almost impermeable to Na+"
      },
      {
        "key": "Na+/K+ ATPase Pump",
        "label": "Transports 3 Na+ OUT and 2 K+ IN against concentration gradients using 1 ATP"
      },
      {
        "key": "Resting Potential",
        "label": "-70 mV (electronegative inside relative to outside)"
      }
    ],
    "doodleBadge": "3 Na+ OUT / 2 K+ IN\n-70 mV Resting Potential",
    "doodleSubtext": "Salty Banana Model",
    "explanation": "The continuous outflow of K+ down its concentration gradient through leaky channels combined with 3Na+/2K+ electrogenic pumping establishes the negative resting potential.",
    "alsoRemember": "Negatively charged intracellular proteins cannot cross the membrane, reinforcing the internal negative charge.",
    "ncertConnection": "NCERT Class 11 Biology Chapter 21, Section 21.3.1.",
    "neetTrap": "The pump moves 3 Na+ OUTWARDS and 2 K+ INWARDS (not 2 Na+ out and 3 K+ in).",
    "tags": [
      "Resting Potential",
      "Na+/K+ Pump",
      "Axon",
      "Polarization",
      "Neuron"
    ],
    "expandedMeaning": "Electrophysiological baseline maintenance mechanism of excitable neuronal membranes.",
    "whyItWorks": "Salty Banana analogy (Na+ on outside, K+ on inside) + 3 Out / 2 In formula.",
    "visualDescription": "Axon membrane showing yellow banana interior with K+ and blue sea exterior with Na+, bridged by 3 Na+ out / 2 K+ in pump.",
    "neetRelevance": "One of the most frequently asked fundamental questions in neurophysiology.",
    "commonMistake": "Reversing the direction of sodium and potassium transport.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.3.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The sodium-potassium ATPase pump in a resting neuron transports which of the following per ATP molecule hydrolyzed?",
      "options": [
        "2 Na+ out for 3 K+ in",
        "3 Na+ out for 2 K+ in",
        "3 Na+ in for 2 K+ out",
        "2 Na+ in for 3 K+ out"
      ],
      "answerIndex": 1,
      "explanation": "The sodium-potassium pump transports 3 Na+ ions outwards and 2 K+ ions inwards into the cell per ATP."
    }
  },
  {
    "id": "mnemo-bio-ch18-02",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Action Potential & Depolarization",
    "topic": "Na+ Influx (Depolarization) -> K+ Efflux (Repolarization)",
    "mnemonicNumber": 2,
    "title": "Nerve Impulse: Stimulus -> Rapid Na+ IN (Depolarization +30 mV) -> K+ OUT (Repolarization -> Resting -70 mV)",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Stimulus at Site A -> Voltage-gated Na+ channels snap open -> Rapid Na+ Influx -> Membrane Polarity Reverses (-70 mV to +30 mV = Depolarization / Action Potential) -> Na+ channels close -> Voltage-gated K+ channels open -> K+ Efflux restores resting negativity (Repolarization)!",
    "memoryHook": "Sodium rushes IN like a flood to spark the lightning (+30 mV Action Potential). Potassium rushes OUT to cool down the wave and reset the battery (Repolarization)!",
    "fact": "When a threshold stimulus is applied to a polarized membrane: 1) Rapid influx of Na+ occurs due to opening of voltage-gated Na+ channels, reversing the polarity: the outer surface becomes negatively charged and the inner surface becomes positively charged (+30 mV). This is Depolarization (Action Potential / Nerve Impulse). 2) Within a fraction of a millisecond, Na+ permeability drops and K+ channels open, causing rapid K+ efflux restoring the resting negative membrane potential (Repolarization).",
    "breakdown": [
      {
        "key": "Depolarization (Rising Phase)",
        "label": "Rapid influx of Na+ through voltage-gated Na+ channels (-70 mV -> +30 mV)"
      },
      {
        "key": "Action Potential Spike",
        "label": "Electrical polarity temporarily flips: inside positive (+30 mV), outside negative"
      },
      {
        "key": "Repolarization (Falling Phase)",
        "label": "K+ efflux through voltage-gated K+ channels restores negative resting potential"
      },
      {
        "key": "Hyperpolarization",
        "label": "Brief undershoot below -70 mV due to delayed K+ channel closing"
      }
    ],
    "doodleBadge": "Na+ In = Depolarize (+30mV)\nK+ Out = Repolarize (-70mV)",
    "doodleSubtext": "Action Potential Wave",
    "explanation": "The action potential travels down the axon as a self-propagating wave because local currents stimulate adjacent membrane segments.",
    "alsoRemember": "Saltatory conduction occurs in myelinated nerve fibres where impulses jump from one Node of Ranvier to the next, increasing conduction velocity up to 50-100x.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.3.1.",
    "neetTrap": "Depolarization is caused by influx of SODIUM (Na+), NOT potassium; Repolarization is caused by efflux of POTASSIUM (K+).",
    "tags": [
      "Action Potential",
      "Depolarization",
      "Repolarization",
      "Sodium Influx",
      "Potassium Efflux"
    ],
    "expandedMeaning": "Electrochemical gating kinetics during the initiation and recovery phases of a neuronal action potential.",
    "whyItWorks": "Na+ In (Spark up) -> K+ Out (Reset down) sequence.",
    "visualDescription": "Action potential curve showing steep rising line labeled Na+ Influx to +30 mV peak, falling line labeled K+ Efflux to -70 mV baseline.",
    "neetRelevance": "Core electrophysiology question tested every single year.",
    "commonMistake": "Thinking potassium influx causes depolarization.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.3.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The rapid depolarization phase of an action potential in a nerve fibre is directly caused by the:",
      "options": [
        "Efflux of K+ ions",
        "Influx of Na+ ions",
        "Influx of Cl- ions",
        "Active pumping of 3 Na+ outwards"
      ],
      "answerIndex": 1,
      "explanation": "Depolarization is triggered by the rapid influx of Na+ ions through opened voltage-gated sodium channels."
    }
  },
  {
    "id": "mnemo-bio-ch18-03",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Chemical vs Electrical Synapse",
    "topic": "Synaptic Cleft, Neurotransmitter Vesicles, and Transmission Speed",
    "mnemonicNumber": 3,
    "title": "Synapses: Electrical (Rare, Gap Junctions, Ultra-fast, 2-way) vs Chemical (Common, Cleft 20nm, Neurotransmitters, 1-way Delay)",
    "badgeText": "Comparison",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Electrical Synapse = Gap Junctions touching (Zero gap, Lightning fast, Rare in human body) | Chemical Synapse = Synaptic Cleft (Fluid gap ~20 nm, Neurotransmitters like Acetylcholine in vesicles, Unidirectional, Slight delay, Very common)",
    "memoryHook": "Electrical is a hardwired physical wire (Gap Junctions) -> instant flow! Chemical is sending a bottle letter across a 20nm water canal (Synaptic Cleft) using chemical neurotransmitters!",
    "fact": "There are two types of synapses: 1) Electrical synapses: Membranes of pre- and post-synaptic neurons are in very close proximity via gap junctions; electrical current flows directly from one neuron to another; transmission is faster than chemical synapse; very rare in human system. 2) Chemical synapses: Pre- and post-synaptic neurons are separated by a fluid-filled space called the Synaptic Cleft (~20 nm); action potential triggers Ca²⁺ influx at axon terminal causing synaptic vesicles to fuse and release neurotransmitters (e.g., Acetylcholine) into cleft; binds post-synaptic receptors generating new potential.",
    "breakdown": [
      {
        "key": "Electrical Synapse",
        "label": "Gap junctions connect cells; direct ionic current; faster transmission; rare in humans"
      },
      {
        "key": "Chemical Synapse",
        "label": "Separated by fluid-filled Synaptic Cleft (~20 nm); uses neurotransmitters; synaptic delay; common"
      },
      {
        "key": "Ca2+ Role at Terminal",
        "label": "Action potential triggers voltage-gated Ca²⁺ influx -> exocytosis of neurotransmitter vesicles"
      },
      {
        "key": "Directionality",
        "label": "Chemical synapses are strictly unidirectional (presynaptic to postsynaptic)"
      }
    ],
    "doodleBadge": "Electrical = Gap Junction (Fast/Rare)\nChemical = Cleft + Vesicles (Common)",
    "doodleSubtext": "Synaptic Types",
    "explanation": "Calcium ions (Ca2+) at the presynaptic axon terminal are the essential trigger for synaptic vesicle fusion and neurotransmitter exocytosis.",
    "alsoRemember": "Neurotransmitter receptors are present ONLY on the post-synaptic membrane, ensuring unidirectional transmission.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.3.2.",
    "neetTrap": "Electrical synapses are RARE in the human body; chemical synapses are the predominant type.",
    "tags": [
      "Synapse",
      "Chemical Synapse",
      "Electrical Synapse",
      "Neurotransmitter",
      "Synaptic Cleft",
      "Calcium"
    ],
    "expandedMeaning": "Comparative structural and biophysical characteristics of junctional neural communication modes.",
    "whyItWorks": "Direct physical bridge (Electrical) vs Chemical postal delivery (Chemical) comparison.",
    "visualDescription": "Side-by-side comparison of gap-junction pipe channels vs synaptic cleft with floating red transmitter dots.",
    "neetRelevance": "Common in matching and statement evaluation MCQs.",
    "commonMistake": "Assuming electrical synapses are the most common type in humans.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.3.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which ion influx into the presynaptic axon terminal is essential for triggering the exocytosis of synaptic vesicles containing neurotransmitters?",
      "options": [
        "Sodium (Na+)",
        "Potassium (K+)",
        "Calcium (Ca2+)",
        "Chloride (Cl-)"
      ],
      "answerIndex": 2,
      "explanation": "Influx of Calcium ions (Ca²⁺) through voltage-gated calcium channels stimulates synaptic vesicles to fuse and release neurotransmitters."
    }
  },
  {
    "id": "mnemo-bio-ch18-04",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-2",
    "topicTitle": "Brain Divisions & Corpus Callosum",
    "topic": "Forebrain, Midbrain, Hindbrain and Cerebral Hemispheres",
    "mnemonicNumber": 4,
    "title": "Human Brain: Forebrain (Cerebrum + Thalamus + Hypothalamus) connected by Corpus Callosum (Tract of Nerve Fibres)",
    "badgeText": "Concept",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#FFF0F3",
    "badgeColor": "#FF8D78",
    "mnemonic": "Brain 3 Parts: Forebrain (Cerebrum, Thalamus, Hypothalamus) + Midbrain (Tectum / Corpora quadrigemina) + Hindbrain (Pons, Cerebellum, Medulla) | Left & Right Cerebral Hemispheres connected by CORPUS CALLOSUM (Transverse White Matter Bridge)!",
    "memoryHook": "Corpus Callosum is the great high-speed fiber-optic bridge connecting left and right brain hemispheres! Cut the bridge, and the two halves cannot talk to each other!",
    "fact": "Human brain is divided into Forebrain, Midbrain, and Hindbrain. Forebrain consists of Cerebrum, Thalamus, and Hypothalamus. A deep cleft divides cerebrum longitudinally into two halves: Left and Right Cerebral Hemispheres, which are connected by a curved tract of nerve fibres called Corpus Callosum (unique mammalian feature). The cerebral cortex contains motor areas, sensory areas, and large association areas (neither purely sensory nor motor).",
    "breakdown": [
      {
        "key": "Corpus Callosum",
        "label": "Large transverse white matter commissure connecting right and left cerebral hemispheres (mammalian feature)"
      },
      {
        "key": "Cerebral Cortex (Gray Matter)",
        "label": "Folded outer surface (gyri and sulci); contains motor, sensory, and association areas"
      },
      {
        "key": "Association Areas",
        "label": "Complex integrative functions like intersensory associations, memory, and communication"
      },
      {
        "key": "White Matter Core",
        "label": "Myelinated axonal tracts giving opaque white appearance beneath gray cortex"
      }
    ],
    "doodleBadge": "Corpus Callosum = Left/Right Bridge\nAssociation Areas = Memory/Logic",
    "doodleSubtext": "Cerebral Hemispheres",
    "explanation": "Association areas in cerebral cortex are neither clearly sensory nor motor, and are responsible for complex cognition, memory, and communication.",
    "alsoRemember": "Corpus callosum is exclusively found in mammalian brains.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.4.1.",
    "neetTrap": "Corpus callosum is a tract of NERVE FIBRES (white matter), NOT gray matter.",
    "tags": [
      "Forebrain",
      "Cerebrum",
      "Corpus Callosum",
      "Cerebral Cortex",
      "Association Areas"
    ],
    "expandedMeaning": "Macroscopic anatomical regionalization of the human encephalon and interhemispheric commissure.",
    "whyItWorks": "Corpus Callosum = Communications Call Bridge between left and right hemispheres.",
    "visualDescription": "Sagittal section of human brain showing large curved C-shaped white band of Corpus Callosum bridging the hemispheres.",
    "neetRelevance": "One of the most repeated NCERT brain identification questions.",
    "commonMistake": "Thinking non-mammalian vertebrates possess a corpus callosum.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.4.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The two cerebral hemispheres of the human brain are connected by a broad transverse tract of nerve fibres called the:",
      "options": [
        "Corpora quadrigemina",
        "Corpus callosum",
        "Crura cerebri",
        "Pons Varolii"
      ],
      "answerIndex": 1,
      "explanation": "The Corpus Callosum is a prominent tract of myelinated nerve fibres that connects the left and right cerebral hemispheres."
    }
  },
  {
    "id": "mnemo-bio-ch18-05",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-2",
    "topicTitle": "Hypothalamus & Limbic System Functions",
    "topic": "Thermoregulation, Hunger, Thirst, and the Emotional Brain",
    "mnemonicNumber": 5,
    "title": "Hypothalamus (Thermostat + Hunger/Thirst) + Limbic System (Amygdala + Hippocampus = Rage, Fear & Sexual Drive)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "notebook",
    "mnemonicType": "concept",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Hypothalamus = Body Thermostat (37°C) + Urges for Eating (Hunger) & Drinking (Thirst) + Controls Pituitary Hormones | Limbic System (Emotional Brain: Amygdala + Hippocampus + Hypothalamus) = Regulates Fear, Rage, Pleasure, Motivation & Sexual Behavior!",
    "memoryHook": "Hypothalamus regulates the \"4 Fs\": Fighting, Fleeing, Feeding, and... Mating! Along with Amygdala (Fear/Anger) and Hippocampus (Memory), they form the wild Emotional Limbic System!",
    "fact": "Hypothalamus lies at the base of the thalamus and contains control centers for: 1) Thermoregulation (body temperature maintenance), 2) Hunger and satiety urges, 3) Thirst and osmoregulation, 4) Neurosecretory cells that synthesize hypothalamic releasing and inhibiting hormones. The inner parts of cerebral hemispheres and associated deep structures like Amygdala and Hippocampus form a complex structure called the Limbic System (Emotional Brain), regulating emotional reactions (excitement, pleasure, rage, fear) and motivation.",
    "breakdown": [
      {
        "key": "Hypothalamus Master Controls",
        "label": "Body temperature (thermostat), hunger (feeding center), thirst (drinking), biological clock"
      },
      {
        "key": "Limbic System Elements",
        "label": "Amygdala (emotional valence / fear / aggression), Hippocampus (memory formation), Hypothalamus"
      },
      {
        "key": "Limbic Functions",
        "label": "Regulation of sexual behavior, expression of emotions (rage, fear, pleasure), motivation"
      },
      {
        "key": "Thalamus",
        "label": "Major relay station for sensory and motor signals wrapped by cerebrum"
      }
    ],
    "doodleBadge": "Hypothalamus = Thermostat + Hunger\nLimbic = Emotion + Sex Drive",
    "doodleSubtext": "Subcortical Centers",
    "explanation": "Hippocampus is essential for converting short-term memories into long-term memories; damage causes anterograde amnesia.",
    "alsoRemember": "Thalamus is a major coordinating center for sensory and motor signaling.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.4.1.",
    "neetTrap": "Body temperature regulation is exclusively the function of the HYPOTHALAMUS, not cerebrum or cerebellum.",
    "tags": [
      "Hypothalamus",
      "Limbic System",
      "Amygdala",
      "Hippocampus",
      "Thermoregulation",
      "Emotions"
    ],
    "expandedMeaning": "Homeostatic autonomic visceral control centers and neural substrates of emotional behavior.",
    "whyItWorks": "Clear division: Hypothalamus (Thermostat + Hunger) vs Limbic (Emotion + Fear + Sex).",
    "visualDescription": "Brain core showing green Hypothalamus linked to red almond Amygdala and seahorse-shaped Hippocampus.",
    "neetRelevance": "One of the most frequently asked functional association questions.",
    "commonMistake": "Attributing temperature regulation to the medulla oblongata.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.4.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which part of the human brain contains the master centers for controlling body temperature (thermoregulation) and the urge for eating and drinking?",
      "options": [
        "Cerebellum",
        "Thalamus",
        "Hypothalamus",
        "Pons"
      ],
      "answerIndex": 2,
      "explanation": "The Hypothalamus contains the primary centers controlling body temperature, hunger, thirst, and neuroendocrine secretions."
    }
  },
  {
    "id": "mnemo-bio-ch18-06",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-2",
    "topicTitle": "Midbrain, Corpora Quadrigemina & Brain Stem",
    "topic": "Corpora Quadrigemina, Cerebral Aqueduct, and Brain Stem Components",
    "mnemonicNumber": 6,
    "title": "Midbrain: 4 Swellings = Corpora Quadrigemina (2 Superior Visual + 2 Inferior Auditory) | Brain Stem = Midbrain + Pons + Medulla (NO Cerebellum!)",
    "badgeText": "Concept",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Midbrain has a canal (Cerebral Aqueduct of Sylvius) + 4 round lobes on dorsal side (Corpora Quadrigemina = 2 Superior for Visual reflexes + 2 Inferior for Auditory reflexes) | Brain Stem = Midbrain + Pons + Medulla (Cerebellum is EXCLUDED!)",
    "memoryHook": "Quadrigemina = 4 quadruplet lobes! Superior pair watches sights (Eyes on top); Inferior pair listens to sounds (Ears below). Brain Stem is the central trunk (Midbrain + Pons + Medulla); Cerebellum just hangs off the back like a backpack!",
    "fact": "Midbrain is located between thalamus/hypothalamus of forebrain and pons of hindbrain. A canal called the Cerebral Aqueduct passes through the midbrain. The dorsal portion of midbrain consists mainly of four round swellings (lobes) called Corpora Quadrigemina (superior colliculi for visual reflexes, inferior colliculi for auditory reflexes). The Brain Stem consists of Midbrain, Pons, and Medulla Oblongata; it forms the connection between brain and spinal cord.",
    "breakdown": [
      {
        "key": "Corpora Quadrigemina",
        "label": "4 optic/auditory reflex lobes on dorsal surface of midbrain (2 superior + 2 inferior colliculi)"
      },
      {
        "key": "Cerebral Aqueduct",
        "label": "Narrow canal connecting 3rd ventricle (diacoel) to 4th ventricle (metacoel) through midbrain"
      },
      {
        "key": "Brain Stem Formula",
        "label": "Midbrain + Pons + Medulla Oblongata (CRITICAL: Cerebellum is NOT in brain stem)"
      },
      {
        "key": "Brain Stem Function",
        "label": "Controls vital autonomic functions (cardiac, respiratory, vasomotor)"
      }
    ],
    "doodleBadge": "Corpora Quadrigemina = 4 Lobes\nBrain Stem = Midbrain + Pons + Medulla",
    "doodleSubtext": "Midbrain & Stem",
    "explanation": "NEET frequently sets trap questions including the Cerebellum in the brain stem. Cerebellum is NOT part of the brain stem.",
    "alsoRemember": "Corpora quadrigemina is a characteristic feature of mammalian brains (lower vertebrates have corpora bigemina with 2 optic lobes).",
    "ncertConnection": "NCERT Class 11 Biology Section 21.4.2 & 21.4.3.",
    "neetTrap": "Brain stem consists of Midbrain + Pons + Medulla Oblongata. CEREBELLUM IS NOT PART OF BRAIN STEM.",
    "tags": [
      "Midbrain",
      "Corpora Quadrigemina",
      "Brain Stem",
      "Cerebral Aqueduct",
      "Colliculi"
    ],
    "expandedMeaning": "Mesencephalic reflex centers and macrostructural constitution of the human brainstem.",
    "whyItWorks": "Quadi = 4 lobes + Brain stem exclusion rule (No Cerebellum).",
    "visualDescription": "Posterior brainstem showing 4 buttons (Corpora Quadrigemina) above vertical column of Pons and Medulla, with Cerebellum crossed out.",
    "neetRelevance": "One of the most famous NEET trick questions regarding brain stem composition.",
    "commonMistake": "Including cerebellum as part of the brain stem.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.4.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which of the following structures is NOT a component of the human brain stem?",
      "options": [
        "Midbrain",
        "Pons",
        "Medulla oblongata",
        "Cerebellum"
      ],
      "answerIndex": 3,
      "explanation": "The brain stem is composed of Midbrain, Pons, and Medulla oblongata. The Cerebellum is NOT part of the brain stem."
    }
  },
  {
    "id": "mnemo-bio-ch18-07",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-2",
    "topicTitle": "Hindbrain Functions: Cerebellum, Pons, Medulla",
    "topic": "Cerebellum (Arbor Vitae / Balance), Pons (Pneumotaxic), Medulla (Respiratory / Vomiting)",
    "mnemonicNumber": 7,
    "title": "Hindbrain: Cerebellum (Balance / Coordination / Arbor Vitae) + Pons (Pneumotaxic) + Medulla (Respiration / Vomit / Swallowing)",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "mnemonicType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Cerebellum = Balance, equilibrium, muscle coordination, convoluted surface with Tree of Life (Arbor Vitae) | Pons = Fiber tracts connecting regions + Pneumotaxic respiratory switch | Medulla Oblongata = Involuntary centers: Respiration, Cardiovascular reflexes, Gastric secretion, Vomiting center!",
    "memoryHook": "Alcohol affects Cerebellum first -> stumbling walking and slurred speech! Medulla is the survival autopilot -> keeps heart beating, breathing going, and triggers vomiting if you eat poison!",
    "fact": "Hindbrain comprises Pons, Cerebellum, and Medulla oblongata: 1) Cerebellum has very convoluted surface with branching white matter (Arbor Vitae) providing additional space for many more neurons; coordinates voluntary motor movements, posture, and equilibrium. 2) Pons consists of fiber tracts interconnecting different regions and contains the Pneumotaxic Center (regulates respiratory rhythm). 3) Medulla Oblongata connects to spinal cord; contains centers controlling respiration (respiratory rhythm center), cardiovascular reflexes, gastric secretions, vomiting, and swallowing.",
    "breakdown": [
      {
        "key": "Cerebellum (Little Brain)",
        "label": "Convoluted surface (Arbor Vitae); maintains posture, balance, precision muscle coordination"
      },
      {
        "key": "Pons Varolii",
        "label": "Fiber tract bridge connecting brain areas; houses Pneumotaxic center"
      },
      {
        "key": "Medulla Oblongata",
        "label": "Vital autonomic control: Respiratory rhythm center, cardiovascular center, vomiting, swallowing"
      },
      {
        "key": "Foramen Magnum",
        "label": "Opening at skull base where medulla exits to continue as spinal cord"
      }
    ],
    "doodleBadge": "Cerebellum = Balance (Arbor Vitae)\nPons = Pneumotaxic\nMedulla = Breath + Vomit",
    "doodleSubtext": "Hindbrain Trio",
    "explanation": "A sudden injury to the medulla oblongata causes instantaneous death due to shutdown of the respiratory rhythm and cardiovascular centers.",
    "alsoRemember": "The vomiting center is located in the medulla oblongata.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.4.3.",
    "neetTrap": "Vomiting, swallowing, coughing, and sneezing centers are located in the MEDULLA OBLONGATA, not the stomach or pons.",
    "tags": [
      "Hindbrain",
      "Cerebellum",
      "Pons",
      "Medulla Oblongata",
      "Vomiting Center",
      "Balance"
    ],
    "expandedMeaning": "Physiological functional specialization of the three major metencephalic and myelencephalic hindbrain regions.",
    "whyItWorks": "Functional mapping: Cerebellum = Balance, Pons = Pneumotaxic, Medulla = Life centers.",
    "visualDescription": "Hindbrain diagram highlighting tree-shaped Cerebellum at back, round Pons belly in front, and Medulla funnel leading to spinal cord.",
    "neetRelevance": "Core physiology question repeated in multiple variations.",
    "commonMistake": "Confusing Cerebrum (cognition) with Cerebellum (motor coordination/balance).",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.4.3",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which part of the human brain contains the vital centers controlling respiration, cardiovascular reflexes, gastric secretion, and vomiting?",
      "options": [
        "Cerebellum",
        "Hypothalamus",
        "Medulla oblongata",
        "Corpus callosum"
      ],
      "answerIndex": 2,
      "explanation": "The Medulla Oblongata houses the primary autonomic centers controlling respiration, cardiovascular reflexes, gastric secretion, and vomiting."
    }
  },
  {
    "id": "mnemo-bio-ch18-08",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-3",
    "topicTitle": "Reflex Arc Pathway",
    "topic": "5 Components: Receptor -> Sensory (Dorsal Root) -> Interneuron -> Motor (Ventral Root) -> Effector",
    "mnemonicNumber": 8,
    "title": "Reflex Arc: Receptor -> Afferent / Sensory (DORSAL Root) -> CNS -> Efferent / Motor (VENTRAL Root) -> Effector",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "DAVE: Dorsal = Afferent / Sensory (Enters back of spine) | Ventral = Efferent / Motor (Exits front of spine to Muscle)! Pathway: Receptor -> Sensory -> Interneuron in Gray Matter -> Motor -> Muscle twitch!",
    "memoryHook": "Remember DAVE! Dorsal is Afferent (sensory feeling enters back); Ventral is Efferent (motor command exits front). Knee jerk reflex is monosynaptic (no interneuron needed)!",
    "fact": "Reflex arc is the involuntary, instantaneous neural pathway that controls an action reflex: 1) Receptor (detects stimulus), 2) Sensory / Afferent neuron (cell body in Dorsal Root Ganglion; carries impulse via dorsal root into spinal cord gray matter), 3) Interneuron / Association neuron in spinal cord, 4) Motor / Efferent neuron (cell body in ventral horn; carries command out via Ventral root), 5) Effector organ (muscle/gland that executes response). Knee-jerk reflex is a classic monosynaptic stretch reflex.",
    "breakdown": [
      {
        "key": "D - Dorsal Root",
        "label": "Sensory / Afferent fibers enter spinal cord dorsally (contains Dorsal Root Ganglion)"
      },
      {
        "key": "A - Afferent",
        "label": "Sensory neuron conducting signals from peripheral receptor to CNS"
      },
      {
        "key": "V - Ventral Root",
        "label": "Motor / Efferent fibers exit spinal cord ventrally towards effector muscle"
      },
      {
        "key": "E - Efferent",
        "label": "Motor neuron conducting signals from CNS to muscle/gland"
      }
    ],
    "doodleBadge": "DAVE Rule:\nDorsal = Afferent (In)\nVentral = Efferent (Out)",
    "doodleSubtext": "5-Step Reflex Arc",
    "explanation": "Reflex actions are entirely involuntary and occur without conscious thought, though information is simultaneously transmitted to the brain.",
    "alsoRemember": "Knee jerk reflex involves muscle spindle (receptor), quadriceps muscle (effector), and has NO interneuron (monosynaptic).",
    "ncertConnection": "NCERT Class 11 Biology Section 21.5.",
    "neetTrap": "Sensory fibers enter the DORSAL horn; Motor fibers emerge from the VENTRAL horn of the spinal cord.",
    "tags": [
      "Reflex Arc",
      "Dorsal Root",
      "Ventral Root",
      "Sensory",
      "Motor",
      "Knee Jerk"
    ],
    "expandedMeaning": "Circuit topology and root-specific somatosensory-motor polarity of spinal reflex pathways.",
    "whyItWorks": "DAVE rule (Dorsal Afferent, Ventral Efferent) prevents root confusion.",
    "visualDescription": "Spinal cord butterfly gray matter cross section showing red sensory arrow entering dorsal root and blue motor arrow leaving ventral root.",
    "neetRelevance": "Common in diagram labeling and pathway sequence questions.",
    "commonMistake": "Placing motor neuron cell bodies in the dorsal root ganglion.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.5",
    "verificationStatus": "verified",
    "quiz": {
      "question": "In a spinal reflex arc, the sensory (afferent) nerve fibres enter the spinal cord through the:",
      "options": [
        "Ventral root",
        "Dorsal root",
        "Lateral horn",
        "Central canal"
      ],
      "answerIndex": 1,
      "explanation": "Sensory (afferent) neurons enter the spinal cord exclusively through the dorsal root (via the dorsal root ganglion)."
    }
  },
  {
    "id": "mnemo-bio-ch18-09",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-4",
    "topicTitle": "Eye 3 Tunics / Coats",
    "topic": "Outer (Sclera + Cornea), Middle (Choroid + Ciliary + Iris), Inner (Retina)",
    "mnemonicNumber": 9,
    "title": "Eye 3 Layers: Outer Fibrous (Sclera + Cornea) -> Middle Vascular (Choroid + Ciliary Body + Iris) -> Inner Nervous (Retina)",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "mnemonicType": "classification",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Layer 1 (Outer): Tough Sclera (White of eye) + Transparent Cornea in front | Layer 2 (Middle): Blue Choroid (Vascular & absorbs light) + Ciliary Body (Holds Lens via suspensory ligaments) + Pigmented Iris (Visible colored diaphragm with Pupil aperture) | Layer 3 (Inner): Retina (Photoreceptor cells)",
    "memoryHook": "Outer armor (Sclera/Cornea) -> Middle blood pipeline & camera focus (Choroid/Ciliary/Iris) -> Inner film screen (Retina)!",
    "fact": "The adult human eyeball is nearly spherical with three concentric layers: 1) External layer: Dense connective tissue consisting of posterior white opaque Sclera and anterior transparent Cornea. 2) Middle layer: Vascular Choroid (contains blood vessels and bluish pigment, thin over posterior 2/3, thickens anteriorly to form Ciliary Body). Ciliary body continues forward to form pigmented and opaque Iris (visible colored portion of eye) with central aperture called Pupil. 3) Inner layer: Retina consisting of 3 cellular layers.",
    "breakdown": [
      {
        "key": "Outer Layer (Fibrous)",
        "label": "Posterior Sclera (white of eye) + Anterior Cornea (transparent window without blood vessels, easily transplanted)"
      },
      {
        "key": "Middle Layer (Vascular)",
        "label": "Choroid (bluish, vascular), Ciliary Body (secretes aqueous humor, holds lens), Iris (colored diaphragm)"
      },
      {
        "key": "Inner Layer (Neural)",
        "label": "Retina containing photoreceptor cells, bipolar neurons, and ganglion cells"
      },
      {
        "key": "Cornea Transplant Success",
        "label": "Cornea lacks blood vessels (avascular), so graft rejection almost never occurs"
      }
    ],
    "doodleBadge": "Sclera/Cornea -> Choroid/Ciliary/Iris -> Retina",
    "doodleSubtext": "3 Eyeball Coats",
    "explanation": "Cornea has no blood supply (receives oxygen directly from atmospheric air and nutrients from aqueous humor), making corneal transplants exceptionally successful.",
    "alsoRemember": "Diameter of pupil is regulated by the smooth muscle fibres of the Iris.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.1.",
    "neetTrap": "Ciliary body forms from the anterior thickening of the CHOROID layer, not the sclera.",
    "tags": [
      "Eye",
      "Sclera",
      "Cornea",
      "Choroid",
      "Ciliary Body",
      "Iris",
      "Retina"
    ],
    "expandedMeaning": "Trilaminar histological and functional stratification of the human optical globus.",
    "whyItWorks": "Outside-to-inside concentric layer stratification.",
    "visualDescription": "Eyeball cross section color-coding outer white sclera/clear cornea, middle blue choroid/red ciliary body, and inner golden retina.",
    "neetRelevance": "High yield anatomical matching and corneal transplant questions.",
    "commonMistake": "Thinking cornea has a rich blood capillary network.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which part of the human eye is a pigmented and opaque structure that forms the visible colored portion of the eye and regulates pupil size?",
      "options": [
        "Cornea",
        "Choroid",
        "Iris",
        "Ciliary body"
      ],
      "answerIndex": 2,
      "explanation": "The Iris is the pigmented, visible colored diaphragm of the eye that regulates pupil diameter."
    }
  },
  {
    "id": "mnemo-bio-ch18-10",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-4",
    "topicTitle": "Retina Cellular Layers Order",
    "topic": "Photoreceptors -> Bipolar Cells -> Ganglion Cells (Inside to Outside vs Light Path)",
    "mnemonicNumber": 10,
    "title": "Retina Layers: From Inside (Vitreous) to Outside (Choroid) = Ganglion -> Bipolar -> Photoreceptors (Rods & Cones)",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "hard",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#FFF0F3",
    "badgeColor": "#FF8D78",
    "mnemonic": "Order from INSIDE (towards vitreous cavity) to OUTSIDE (towards choroid): 1) Ganglion Cells -> 2) Bipolar Cells -> 3) Photoreceptor Cells (Rods & Cones)! (Light travels: Ganglion -> Bipolar -> Rods/Cones -> Back to Ganglion Axons -> Optic Nerve!)",
    "memoryHook": "Remember GBP from inside out: Ganglion -> Bipolar -> Photoreceptors! (Great Britain Pound inside the eyeball!)",
    "fact": "Retina contains three layers of neural cells from INSIDE to OUTSIDE: 1) Ganglion cells (innermost layer; their unmyelinated axons converge to form Optic Nerve), 2) Bipolar cells (middle bridging layer), 3) Photoreceptor cells (outermost layer adjacent to choroid; consists of Rods and Cones containing light-sensitive photopigments). Light must pass through ganglion and bipolar cells first before striking rods and cones (inverted retina).",
    "breakdown": [
      {
        "key": "Innermost Layer (1)",
        "label": "Ganglion cells (axons bundle together to exit eye as Optic Nerve / Cranial Nerve II)"
      },
      {
        "key": "Middle Layer (2)",
        "label": "Bipolar neurons (synapse between photoreceptors and ganglion cells)"
      },
      {
        "key": "Outermost Layer (3)",
        "label": "Photoreceptor cells (Rods for dim light, Cones for bright color vision)"
      },
      {
        "key": "Optic Nerve Exit",
        "label": "Leaves eye at blind spot medial to posterior pole of eyeball"
      }
    ],
    "doodleBadge": "Inside -> Outside:\nGanglion -> Bipolar -> Photoreceptor",
    "doodleSubtext": "GBP Retina Sequence",
    "explanation": "Human retina is developmentally an outgrowth of the diencephalon and is inverted, meaning light traverses neural layers before hitting photopigments.",
    "alsoRemember": "Bipolar neurons are classic examples found specifically in the retina of the eye.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.1.",
    "neetTrap": "From INSIDE to OUTSIDE the order is Ganglion -> Bipolar -> Photoreceptors. If question asks OUTSIDE to INSIDE, reverse it to Photoreceptors -> Bipolar -> Ganglion.",
    "tags": [
      "Retina",
      "Ganglion Cells",
      "Bipolar Neurons",
      "Photoreceptors",
      "Rods",
      "Cones",
      "Optic Nerve"
    ],
    "expandedMeaning": "Cytoarchitectural trilaminar stratification of the neurosensory retinal tunic.",
    "whyItWorks": "GBP mnemonic (Ganglion -> Bipolar -> Photoreceptor) from inside to outside.",
    "visualDescription": "Retinal cross section showing light ray passing through front Ganglion layer, middle Bipolar cells, hitting back Rods and Cones.",
    "neetRelevance": "One of the most frequently set order/sequence trap questions in NEET.",
    "commonMistake": "Reversing the sequence when question specifies inside-to-outside vs outside-to-inside.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "What is the correct sequence of cell layers in the human retina from the INSIDE (vitreous humor) to the OUTSIDE (choroid)?",
      "options": [
        "Photoreceptor cells -> Bipolar cells -> Ganglion cells",
        "Ganglion cells -> Bipolar cells -> Photoreceptor cells",
        "Bipolar cells -> Ganglion cells -> Photoreceptor cells",
        "Photoreceptor cells -> Ganglion cells -> Bipolar cells"
      ],
      "answerIndex": 1,
      "explanation": "From inside to outside, the retinal cell layers are: Ganglion cells -> Bipolar cells -> Photoreceptor cells."
    }
  },
  {
    "id": "mnemo-bio-ch18-11",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-4",
    "topicTitle": "Rods vs Cones & Photopigments",
    "topic": "Rhodopsin (Twilight / Scotopic) vs Iodopsin (Daylight / Photopic / Color)",
    "mnemonicNumber": 11,
    "title": "Rods vs Cones: Rods (Rhodopsin / Vit A / Twilight Scotopic) vs Cones (Color / Daylight Photopic: Red, Green, Blue)",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Rods = Night / Twilight (Scotopic Vision) + Rhodopsin (Visual Purple = Opsin protein + Retinal derivative of Vitamin A) | Cones = Color + Daylight (Photopic Vision) + 3 types of Iodopsin (Red, Green, Blue cones)!",
    "memoryHook": "Rods for Restful night/twilight (Black & White). Cones for Color and Crisp daylight! Rhodopsin contains Retinal (Vitamin A aldehyde) -> deficiency of Vitamin A causes Night Blindness (Nyctalopia)!",
    "fact": "Retina has two types of photoreceptor cells: 1) Rods: Responsible for twilight / night (Scotopic) vision. Contain a purplish-red protein called Rhodopsin (Visual Purple), composed of Opsin (protein) and Retinal (an aldehyde of Vitamin A). 2) Cones: Responsible for daylight (Photopic) vision and Color vision. There are 3 types of cones possessing characteristic photopigments responding to Red, Green, and Blue light. Sensation of white light is produced when all 3 types of cones are stimulated equally.",
    "breakdown": [
      {
        "key": "Rods (120 Million)",
        "label": "Scotopic (twilight/night) vision; highly light-sensitive; no color differentiation"
      },
      {
        "key": "Rhodopsin (Visual Purple)",
        "label": "Opsin protein + Retinal (aldehyde of Vitamin A); bleaches on light exposure"
      },
      {
        "key": "Cones (6 Million)",
        "label": "Photopic (daylight) + Color vision; 3 types (Erythrolabe/Red, Chlorolabe/Green, Cyanolabe/Blue)"
      },
      {
        "key": "White Light Perception",
        "label": "Equal stimulation of all three cone types produces sensation of white light"
      }
    ],
    "doodleBadge": "Rods = Night + Rhodopsin (Vit A)\nCones = Color + Daylight (RGB)",
    "doodleSubtext": "Photoreceptor Types",
    "explanation": "When light strikes rhodopsin, retinal dissociates from opsin, inducing conformational changes that alter membrane permeability and fire action potentials.",
    "alsoRemember": "Owls have retinas composed almost entirely of rods (nocturnal vision), while diurnal birds like eagles have retinas packed with cones.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.1.",
    "neetTrap": "Retinal is an ALDEHYDE of Vitamin A (not an alcohol or carboxylic acid).",
    "tags": [
      "Rods",
      "Cones",
      "Rhodopsin",
      "Retinal",
      "Vitamin A",
      "Photopic",
      "Scotopic"
    ],
    "expandedMeaning": "Duplicity theory of vision: structural and photobiochemical divergence between scotopic and photopic receptors.",
    "whyItWorks": "Rods = Rest/Night, Cones = Color/Crisp daylight.",
    "visualDescription": "Split view showing slender rod with purple rhodopsin discs alongside pointed cone with red, green, blue color bands.",
    "neetRelevance": "One of the most repeated questions on retinal chemistry and vitamin A biochemistry.",
    "commonMistake": "Claiming retinal is an alcohol instead of an aldehyde.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Rhodopsin (visual purple) present in rods is composed of opsin protein conjugated with retinal, which is an aldehyde derivative of:",
      "options": [
        "Vitamin C",
        "Vitamin A",
        "Vitamin D",
        "Vitamin E"
      ],
      "answerIndex": 1,
      "explanation": "Retinal is an aldehyde of Vitamin A (retinol), conjugated with the protein opsin to form rhodopsin."
    }
  },
  {
    "id": "mnemo-bio-ch18-12",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-4",
    "topicTitle": "Fovea Centralis vs Blind Spot",
    "topic": "Macula Lutea (Cones only / Highest Resolution) vs Optic Disc (Zero Photoreceptors)",
    "mnemonicNumber": 12,
    "title": "Retinal Landmarks: Fovea Centralis (Only Cones / Max Visual Acuity) vs Blind Spot (Optic Nerve Exits / Zero Photoreceptors)",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Fovea Centralis (Inside Yellow Spot / Macula Lutea) = Pit with Densely packed CONES ONLY -> Maximum visual resolution & sharpest acuity! | Blind Spot (Optic Disc) = Where Optic Nerve leaves & Retinal vessels enter -> Zero Rods & Zero Cones -> No vision!",
    "memoryHook": "Fovea is the sharp 4K HD bullseye (Only Cones, no rods). Blind Spot is the cable hole where the optic wire leaves the camera -> completely blind!",
    "fact": "At posterior pole of eye lateral to blind spot is a yellowish pigmented spot called Macula Lutea with a central pit called Fovea. The Fovea is a thinned-out portion of retina where only cones are densely packed; it is the point of greatest visual resolution (acuity). Medial to and slightly above posterior pole is the Blind Spot (Optic Disc) where optic nerve exits and retinal blood vessels enter; photoreceptor cells (both rods and cones) are completely absent here.",
    "breakdown": [
      {
        "key": "Fovea Centralis",
        "label": "Central pit of Macula Lutea; contains ONLY densely packed Cones; point of maximum visual resolution"
      },
      {
        "key": "Macula Lutea",
        "label": "Yellow spot on retina lateral to blind spot aligned with optical axis"
      },
      {
        "key": "Blind Spot (Optic Disc)",
        "label": "Medial exit point of optic nerve and blood vessels; lacks rods and cones completely (no image formed)"
      },
      {
        "key": "Positioning",
        "label": "Fovea is LATERAL to blind spot; Blind spot is MEDIAL to posterior pole"
      }
    ],
    "doodleBadge": "Fovea = Cones Only (4K HD)\nBlind Spot = 0 Photoreceptors (Cable Hole)",
    "doodleSubtext": "Fovea vs Blind Spot",
    "explanation": "In the fovea, overlying ganglion and bipolar layers are displaced laterally so light falls directly on cone outer segments without scattering.",
    "alsoRemember": "Aqueous chamber (between cornea and lens) contains thin watery aqueous humor; Vitreous chamber (between lens and retina) contains transparent gel-like vitreous humor.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.1.",
    "neetTrap": "Fovea contains ONLY CONES (rods are completely absent in the fovea centralis).",
    "tags": [
      "Fovea Centralis",
      "Macula Lutea",
      "Blind Spot",
      "Optic Disc",
      "Visual Acuity",
      "Cones"
    ],
    "expandedMeaning": "Topographical retinal specialized loci for maximal spatial resolution versus axonal optic disc convergence.",
    "whyItWorks": "Fovea = Focus/Cones only vs Blind Spot = Blank/Zero receptors.",
    "visualDescription": "Back of retina diagram showing golden bullseye dip (Fovea) labeled \"Cones only\" and white optic disc exit (Blind Spot) labeled \"No vision\".",
    "neetRelevance": "One of the most repeated NCERT visual anatomy MCQs.",
    "commonMistake": "Thinking fovea has both rods and cones.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The point of greatest visual acuity (resolution) on the human retina, containing only densely packed cones, is the:",
      "options": [
        "Blind spot",
        "Fovea centralis",
        "Optic disc",
        "Ciliary body"
      ],
      "answerIndex": 1,
      "explanation": "The Fovea Centralis (central pit of Macula Lutea) contains only densely packed cones and offers the highest visual resolution."
    }
  },
  {
    "id": "mnemo-bio-ch18-13",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-5",
    "topicTitle": "Cochlea & Hearing Mechanism",
    "topic": "Scala Vestibuli, Scala Media (Endolymph), Scala Tympani, and Organ of Corti",
    "mnemonicNumber": 13,
    "title": "Cochlea: Vestibuli (Perilymph / Top) -> Media (Endolymph / Organ of Corti on Basilar Membrane) -> Tympani (Perilymph / Bottom)",
    "badgeText": "Sequence",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "sequence",
    "mnemonicType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Top = Scala Vestibuli (Perilymph, starts at Oval Window) | Middle = Scala Media / Cochlear Duct (Endolymph, houses Organ of Corti with sensory Hair Cells resting on Basilar Membrane beneath Tectorial Membrane) | Bottom = Scala Tympani (Perilymph, ends at Round Window)!",
    "memoryHook": "Top and Bottom are Salty Perilymph (Vestibuli & Tympani). The Middle sandwich is Scala Media filled with Endolymph where the Organ of Corti piano keys (Hair cells) dance against the Tectorial roof to make sound!",
    "fact": "The coiled portion of inner ear labyrinth is the Cochlea. The membranes constituting cochlea (Reissner membrane and Basilar membrane) divide the surrounding perilymph-filled bony labyrinth into: upper Scala Vestibuli, middle Scala Media (filled with endolymph), and lower Scala Tympani. The Organ of Corti is a structure located on the Basilar Membrane containing hair cells (sensory auditory receptors with stereocilia) topped by thin elastic Tectorial Membrane. Scala vestibuli ends at oval window; scala tympani ends at round window.",
    "breakdown": [
      {
        "key": "Scala Vestibuli (Upper)",
        "label": "Filled with Perilymph; begins at Oval Window (Fenestra ovalis)"
      },
      {
        "key": "Scala Media (Middle)",
        "label": "Filled with Endolymph; enclosed by Reissner membrane above and Basilar membrane below"
      },
      {
        "key": "Scala Tympani (Lower)",
        "label": "Filled with Perilymph; terminates at Round Window (Fenestra rotunda)"
      },
      {
        "key": "Organ of Corti",
        "label": "Sensory transducer on Basilar membrane; hair cells bend against Tectorial membrane"
      }
    ],
    "doodleBadge": "Vestibuli (Peri) -> Media (Endo / Organ of Corti) -> Tympani (Peri)",
    "doodleSubtext": "Cochlea 3 Chambers",
    "explanation": "Vibrations of the basilar membrane bend hair cell stereocilia against the overlying tectorial membrane, opening mechanosensitive ion channels to generate nerve impulses in auditory nerve.",
    "alsoRemember": "Round window (fenestra rotunda) bulges outward to dissipate sound wave energy into middle ear.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.2.",
    "neetTrap": "Organ of Corti rests on the BASILAR MEMBRANE (not Reissner membrane), and hair cells are covered by the TECTORIAL MEMBRANE.",
    "tags": [
      "Cochlea",
      "Organ of Corti",
      "Basilar Membrane",
      "Tectorial Membrane",
      "Endolymph",
      "Perilymph"
    ],
    "expandedMeaning": "Tonotopic biomechanical auditory transduction apparatus of the mammalian cochlear labyrinth.",
    "whyItWorks": "Three-layer sandwich: Perilymph top/bottom, Endolymph middle with Organ of Corti.",
    "visualDescription": "Cross section of cochlear duct showing upper Scala Vestibuli, middle Scala Media with Organ of Corti hair cells under Tectorial flap, and lower Scala Tympani.",
    "neetRelevance": "One of the most heavily tested inner ear structural matching topics in NEET.",
    "commonMistake": "Confusing basilar membrane (floor) with tectorial membrane (roof).",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The Organ of Corti, which contains auditory hair cells acting as sound receptors, is located on which membrane of the cochlea?",
      "options": [
        "Reissner membrane",
        "Tectorial membrane",
        "Basilar membrane",
        "Tympanic membrane"
      ],
      "answerIndex": 2,
      "explanation": "The Organ of Corti is located on the Basilar Membrane in the Scala Media of the cochlea."
    }
  },
  {
    "id": "mnemo-bio-ch18-14",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-5",
    "topicTitle": "Vestibular Apparatus & Equilibrium",
    "topic": "Dynamic Balance (Crista Ampullaris in Semicircular Canals) vs Static Balance (Macula in Utricle & Saccule)",
    "mnemonicNumber": 14,
    "title": "Inner Ear Balance: Crista Ampullaris in Semicircular Canals (Dynamic / Rotational) vs Macula in Otolith Organs (Static / Linear / Gravity)",
    "badgeText": "Comparison",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#FFF0F3",
    "badgeColor": "#FF8D78",
    "mnemonic": "Crista in Ampulla = Dynamic Balance (Spinning, somersaults, rotational 3D head turns in 3 semicircular canals) | Macula in Otolith Organs (Utricle & Saccule with CaCO3 otolith stones) = Static Balance (Gravity, linear acceleration, tilting head)!",
    "memoryHook": "Spinning like a Top in 3D circles = Crista Ampullaris! Standing straight or accelerating in a lift/car (Gravity & Straight lines) = Macula in Utricle and Saccule with calcium Otolith stones!",
    "fact": "The inner ear contains a complex system called the Vestibular Apparatus located above the cochlea: 1) Three Semicircular Canals arranged at right angles to each other in three planes. The swollen base of each canal is the Ampulla which contains a projecting ridge called Crista Ampullaris (equipped with sensory hair cells for rotational/dynamic equilibrium). 2) Otolith Organ consisting of Utricle and Saccule containing projecting ridge called Macula (contains sensory hair cells and calcium carbonate otolith stones for static/linear equilibrium and posture).",
    "breakdown": [
      {
        "key": "Semicircular Canals (3)",
        "label": "At right angles to each other in 3 planes; base is swollen Ampulla"
      },
      {
        "key": "Crista Ampullaris",
        "label": "Sensory receptor in Ampulla with gelatinous cupula; detects rotational / dynamic movements"
      },
      {
        "key": "Otolith Organ (Utricle & Saccule)",
        "label": "Contains CaCO3 otolith crystals (statoconia) over Macula"
      },
      {
        "key": "Macula",
        "label": "Sensory receptor of utricle/saccule; detects linear acceleration and gravity (static balance)"
      }
    ],
    "doodleBadge": "Crista (Canals) = Rotational / Dynamic\nMacula (Otolith) = Linear / Static",
    "doodleSubtext": "Vestibular Balance",
    "explanation": "Crista and Macula are the specific receptors of the vestibular apparatus responsible for maintenance of body balance and posture.",
    "alsoRemember": "Eustachian tube connects the middle ear cavity with the pharynx to equalize air pressure on both sides of the eardrum.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.2.",
    "neetTrap": "Crista ampullaris detects ROTATIONAL (dynamic) motion; Macula detects GRAVITY and LINEAR (static) motion.",
    "tags": [
      "Vestibular Apparatus",
      "Crista Ampullaris",
      "Macula",
      "Semicircular Canals",
      "Utricle",
      "Saccule",
      "Balance"
    ],
    "expandedMeaning": "Spatial vestibular neurosensory transduction mechanisms governing angular and linear kinetic equilibrium.",
    "whyItWorks": "Crista = Canals / Circular spinning vs Macula = Mass/Gravity & Linear motion.",
    "visualDescription": "Vestibular apparatus diagram highlighting 3 semicircular loops with bulbous Crista ampullae and dual Otolith pouches (Utricle/Saccule) with Macula.",
    "neetRelevance": "Extremely popular topic in NEET inner ear and balance questions.",
    "commonMistake": "Matching Macula with rotational balance.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which specific sensory receptor of the vestibular apparatus is responsible for detecting rotational (angular) movements and dynamic body balance?",
      "options": [
        "Organ of Corti",
        "Macula of utricle and saccule",
        "Crista ampullaris of semicircular canals",
        "Tectorial membrane"
      ],
      "answerIndex": 2,
      "explanation": "Crista Ampullaris located in the ampulla of the semicircular canals is the sensory organ for dynamic rotational equilibrium."
    }
  },
  {
    "id": "mnemo-bio-ch18-15",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Myelinated vs Non-Myelinated Nerve Fibres",
    "topic": "Schwann Cells, Myelin Sheath, and Nodes of Ranvier",
    "mnemonicNumber": 15,
    "title": "Nerve Fibres: Myelinated (Schwann Cells wrap Myelin + Nodes of Ranvier + White Matter / Saltatory) vs Non-Myelinated (Gray / Autonomous)",
    "badgeText": "Comparison",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Myelinated = Schwann cells wrap insulated lipid myelin sheath with naked gaps (Nodes of Ranvier) -> Fast Saltatory jumping conduction! (Cranial & Spinal nerves / White matter) | Non-Myelinated = Enclosed by Schwann cell but NO myelin sheath! (Autonomic & Somatic neural systems / Gray matter)",
    "memoryHook": "Myelinated axons wear thick fatty coats (Myelin) with bare buttonholes (Nodes of Ranvier) so nerve sparks jump like a frog (Saltatory) at super speed! Non-myelinated axons crawl slowly!",
    "fact": "Axons are of two types: 1) Myelinated nerve fibres: Enveloped with Schwann cells that produce a rich lipid myelin sheath around the axon. The gaps between two adjacent myelin sheaths are called Nodes of Ranvier. Found in cranial and spinal nerves. Action potential leaps from node to node (Saltatory conduction). 2) Unmyelinated nerve fibres: Enclosed by a Schwann cell that does NOT form a myelin sheath around the axon; no nodes of Ranvier. Commonly found in autonomous and somatic neural systems.",
    "breakdown": [
      {
        "key": "Myelinated Fibres",
        "label": "Schwann cells form fatty myelin sheath; has Nodes of Ranvier; fast saltatory conduction (cranial/spinal nerves)"
      },
      {
        "key": "Unmyelinated Fibres",
        "label": "Enclosed by Schwann cell WITHOUT myelin sheath wrap; slow continuous conduction (autonomic & somatic nerves)"
      },
      {
        "key": "CNS Myelination",
        "label": "In CNS (brain/spinal cord), Oligodendrocytes produce myelin (not Schwann cells)"
      },
      {
        "key": "PNS Myelination",
        "label": "In PNS (cranial/spinal nerves), Schwann cells produce myelin"
      }
    ],
    "doodleBadge": "Myelin + Nodes of Ranvier = Fast Saltatory Leap",
    "doodleSubtext": "Myelinated vs Naked",
    "explanation": "In the Central Nervous System, myelin sheaths are formed by Oligodendrocytes, whereas in the Peripheral Nervous System, they are formed by Schwann cells.",
    "alsoRemember": "Nissl granules are granular bodies of rough endoplasmic reticulum and ribosomes found in cyton (cell body) and dendrites, but ABSENT in the axon.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.2.",
    "neetTrap": "Unmyelinated nerve fibres ARE still enclosed by Schwann cells, but the Schwann cells do NOT form a myelin sheath around them.",
    "tags": [
      "Myelinated",
      "Schwann Cells",
      "Nodes of Ranvier",
      "Saltatory Conduction",
      "Oligodendrocytes"
    ],
    "expandedMeaning": "Glia-mediated axonal insulation and electrotonic saltatory conduction dynamics in vertebrate nerves.",
    "whyItWorks": "Insulated jumping (Myelinated) vs Slow crawling (Unmyelinated).",
    "visualDescription": "Diagram of myelinated axon showing sausage-link myelin sheaths with exposed gaps labeled Nodes of Ranvier.",
    "neetRelevance": "Common in structural neuron classification questions.",
    "commonMistake": "Believing unmyelinated fibres have no Schwann cells at all.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which of the following statements is TRUE regarding unmyelinated nerve fibres?",
      "options": [
        "They lack Schwann cells entirely",
        "They are enclosed by Schwann cells that do not form a myelin sheath",
        "They exhibit rapid saltatory conduction",
        "They possess prominent Nodes of Ranvier"
      ],
      "answerIndex": 1,
      "explanation": "Unmyelinated nerve fibres are enclosed by Schwann cells, but these Schwann cells do not spiral to form a myelin sheath."
    }
  },
  {
    "id": "mnemo-bio-ch18-16",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Types of Neurons by Structure",
    "topic": "Multipolar (Cerebral Cortex), Bipolar (Retina), Unipolar (Embryo), Pseudounipolar (DRG)",
    "mnemonicNumber": 16,
    "title": "Neuron Types: Multipolar (1 Axon + 2+ Dendrites / Cerebral Cortex) | Bipolar (1 Axon + 1 Dendrite / Retina) | Unipolar (1 Axon / Embryo)",
    "badgeText": "Classification",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "mnemonicType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Multipolar (Most common = 1 Axon + Many Dendrites, found in Cerebral Cortex) | Bipolar (2 Poles = 1 Axon + 1 Dendrite, found in Retina of eye, Olfactory epithelium, Inner ear) | Unipolar (1 Pole = Cell body with 1 Axon only, found in early Embryonic stage)!",
    "memoryHook": "Multi = Many branches in smart Cerebral Cortex; Bi = 2 poles for 2 Eyes (Retina); Uni = 1 baby stem in early Embryo!",
    "fact": "Neurons are divided into three major structural classes based on number of axon and dendrites: 1) Multipolar: With one axon and two or more dendrites (found in cerebral cortex, motor neurons). 2) Bipolar: With one axon and one dendrite (found in retina of eye, olfactory epithelium). 3) Unipolar: Cell body with one axon only (found usually in the embryonic stage).",
    "breakdown": [
      {
        "key": "Multipolar",
        "label": "1 Axon + 2 or more Dendrites (Cerebral cortex, most brain/spinal cord neurons)"
      },
      {
        "key": "Bipolar",
        "label": "1 Axon + 1 Dendrite (Retina of eye, olfactory receptor epithelium, cochlear/vestibular ganglia)"
      },
      {
        "key": "Unipolar",
        "label": "1 Axon only (Embryonic stages of vertebrate development)"
      },
      {
        "key": "Apolar / Non-polar",
        "label": "No distinct axon or dendrite (Hydra / Cnidarians)"
      }
    ],
    "doodleBadge": "Multi = Cortex\nBi = Retina of Eye\nUni = Embryo",
    "doodleSubtext": "3 Neuron Architectures",
    "explanation": "In pseudounipolar neurons (found in dorsal root ganglia of spinal nerves), a single process emerges from cyton and splits into a T-junction.",
    "alsoRemember": "Nissl granules are present in the soma (cyton) and dendrites, but completely absent in the axon and axon hillock.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.2.",
    "neetTrap": "Bipolar neurons are specifically located in the RETINA of the eye and olfactory epithelium.",
    "tags": [
      "Multipolar",
      "Bipolar",
      "Unipolar",
      "Retina",
      "Cerebral Cortex",
      "Neuron Morphology"
    ],
    "expandedMeaning": "Morphological polar categorization and anatomical distribution of human nerve cells.",
    "whyItWorks": "Multi (Cortex brain), Bi (2 eyes Retina), Uni (Embryo 1).",
    "visualDescription": "Three distinct neuron silhouettes: multipolar starburst, bipolar linear dipole, and unipolar single stem.",
    "neetRelevance": "Guaranteed matching question on neuron type and location.",
    "commonMistake": "Placing unipolar neurons in the adult cerebral cortex.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Bipolar neurons possessing one axon and one dendrite are typically found in the:",
      "options": [
        "Cerebral cortex",
        "Embryonic stage only",
        "Retina of the eye",
        "Spinal cord ventral horn"
      ],
      "answerIndex": 2,
      "explanation": "Bipolar neurons (one axon and one dendrite) are found in the retina of the eye and olfactory epithelium."
    }
  },
  {
    "id": "mnemo-bio-ch18-17",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-5",
    "topicTitle": "Eustachian Tube Function",
    "topic": "Connecting Middle Ear to Nasopharynx and Pressure Equalization",
    "mnemonicNumber": 17,
    "title": "Eustachian Tube: Middle Ear -> Nasopharynx (Equalizes Air Pressure on Both Sides of Eardrum / Tympanum)",
    "badgeText": "Concept",
    "importance": "Medium Yield",
    "difficulty": "easy",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Eustachian Tube connects Middle Ear Cavity to Pharynx (Nasopharynx) -> Equalizes air pressure on both sides of the eardrum so it doesn't pop during flights/diving!",
    "memoryHook": "When your ears pop in an airplane or elevator, swallowing opens the Eustachian Tube to equalize atmospheric pressure between the outside ear canal and inside middle ear!",
    "fact": "The middle ear contains the air-filled tympanic cavity housing three ear ossicles. A specialized canal called the Eustachian tube connects the middle ear cavity with the pharynx (nasopharynx). The primary function of the Eustachian tube is to equalize atmospheric air pressures on both sides of the tympanic membrane (eardrum), allowing optimal vibration and preventing membrane rupture during rapid altitude changes.",
    "breakdown": [
      {
        "key": "Connecting Points",
        "label": "Connects Middle Ear Tympanic cavity to the Nasopharynx"
      },
      {
        "key": "Primary Function",
        "label": "Equalizes atmospheric pressure on either side of tympanic membrane"
      },
      {
        "key": "Opening Mechanism",
        "label": "Opens during swallowing, yawning, and chewing via tensor veli palatini muscle"
      },
      {
        "key": "Clinical Link",
        "label": "Throat infections can travel up Eustachian tube into middle ear causing Otitis Media"
      }
    ],
    "doodleBadge": "Middle Ear <-> Pharynx\nEqualizes Air Pressure",
    "doodleSubtext": "Eustachian Valve",
    "explanation": "Otitis media (middle ear infection) often occurs in young children following a common cold because infectious pathogens travel up the short, straight Eustachian tube.",
    "alsoRemember": "Tympanic membrane is composed of connective tissues covered with skin outside and mucus membrane inside.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.2.",
    "neetTrap": "Eustachian tube connects middle ear to PHARYNX, NOT to the inner ear or mouth.",
    "tags": [
      "Eustachian Tube",
      "Middle Ear",
      "Pharynx",
      "Tympanum",
      "Pressure Balance"
    ],
    "expandedMeaning": "Pneumatic venting and pressure equilibrium conduit connecting middle ear to upper respiratory tract.",
    "whyItWorks": "Direct function link: Ear popping in flights = Eustachian tube pressure equalization.",
    "visualDescription": "Ear diagram showing narrow diagonal tube running from middle ear box down into the back of throat/pharynx.",
    "neetRelevance": "Common in true/false and function matching MCQs.",
    "commonMistake": "Thinking Eustachian tube connects middle ear to inner ear.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The Eustachian tube connects the middle ear cavity with which part of the human body to equalize air pressure on the eardrum?",
      "options": [
        "Inner ear (cochlea)",
        "Pharynx (Nasopharynx)",
        "Larynx",
        "Buccal cavity floor"
      ],
      "answerIndex": 1,
      "explanation": "The Eustachian tube connects the middle ear cavity with the pharynx to equalize pressure on both sides of the tympanum."
    }
  },
  {
    "id": "mnemo-bio-ch18-18",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Autonomic Nervous System: Sympathetic vs Parasympathetic",
    "topic": "Thoracolumbar (Fight/Flight) vs Craniosacral (Rest/Digest) Outflow",
    "mnemonicNumber": 18,
    "title": "ANS: Sympathetic (Fight or Flight / Thoracolumbar / Dilates Pupil & Bronchi, Tachycardia) vs Parasympathetic (Rest & Digest / Craniosacral / Vagus)",
    "badgeText": "Comparison",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#FFF0F3",
    "badgeColor": "#FF8D78",
    "mnemonic": "Sympathetic = \"Spends energy\" / Fight or Flight / Adrenaline: Accelerates heart (Tachycardia), Dilates pupils (Mydriasis), Dilates bronchi, Inhibits digestion & salivation | Parasympathetic = \"Preserves energy\" / Rest & Digest / Acetylcholine: Slows heart (Bradycardia), Constricts pupils (Miosis), Stimulates digestion & peristalsis!",
    "memoryHook": "Sympathetic turns on emergency turbo mode (Running from a tiger: big pupils, fast heart, lungs open, no time to poop or digest!). Parasympathetic turns on peaceful picnic mode (Rest, digest food, slow heartbeat)!",
    "fact": "Autonomic Nervous System (ANS) transmits impulses from CNS to involuntary organs and smooth muscles: 1) Sympathetic system (Thoracolumbar outflow T1-L2): Mediates emergency fight-or-flight responses, releases noradrenaline/adrenaline, dilates pupils, increases heart rate and cardiac output, dilates bronchioles, inhibits GI motility and secretions. 2) Parasympathetic system (Craniosacral outflow: Cranial nerves III, VII, IX, X + Sacral S2-S4): Mediates rest-and-digest, releases Acetylcholine (ACh), constricts pupils, slows heart rate, stimulates digestion, saliva secretion, and urination.",
    "breakdown": [
      {
        "key": "Sympathetic (Thoracolumbar)",
        "label": "Fight-or-flight: Dilates pupil, raises HR/BP, dilates bronchi, inhibits digestion/salivation"
      },
      {
        "key": "Parasympathetic (Craniosacral)",
        "label": "Rest-and-digest: Constricts pupil, lowers HR, constricts bronchi, stimulates digestion/saliva"
      },
      {
        "key": "Neurotransmitters",
        "label": "Sympathetic postganglionic uses Noradrenaline; Parasympathetic uses Acetylcholine (ACh)"
      },
      {
        "key": "Vagus Nerve (CN X)",
        "label": "Chief parasympathetic nerve carrying ~75% of all parasympathetic outflow"
      }
    ],
    "doodleBadge": "Sympathetic = Fight/Flight (Turbo)\nParasympathetic = Rest/Digest (Calm)",
    "doodleSubtext": "ANS Antagonism",
    "explanation": "Sympathetic and parasympathetic systems operate antagonistically to maintain fine-tuned homeostatic visceral equilibrium.",
    "alsoRemember": "Somatic nervous system relays impulses from CNS to skeletal (voluntary) muscles, while Autonomic relays to smooth involuntary muscles and glands.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.1.",
    "neetTrap": "Sympathetic nervous system INHIBITS digestion and salivation, while Parasympathetic STIMULATES them.",
    "tags": [
      "ANS",
      "Sympathetic",
      "Parasympathetic",
      "Thoracolumbar",
      "Craniosacral",
      "Fight or Flight"
    ],
    "expandedMeaning": "Antagonistic dual visceral innervation pathways of the human autonomic nervous system.",
    "whyItWorks": "Tiger attack (Sympathetic turbo) vs Picnic nap (Parasympathetic calm) contrast.",
    "visualDescription": "Dual organ chart showing dilated eyes/racing heart on left (red Sympathetic) vs constricted pupils/active stomach on right (blue Parasympathetic).",
    "neetRelevance": "Extremely common physiology questions on autonomic organ responses.",
    "commonMistake": "Thinking sympathetic stimulation increases digestive enzyme secretion.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Which of the following physiological responses is mediated by the SYMPATHETIC nervous system during emergency conditions?",
      "options": [
        "Constriction of pupils (miosis)",
        "Dilation of bronchioles and increased heart rate",
        "Stimulation of gastric secretion and peristalsis",
        "Decreased sweating"
      ],
      "answerIndex": 1,
      "explanation": "Sympathetic activation prepares the body for fight-or-flight by dilating bronchioles and increasing heart rate."
    }
  },
  {
    "id": "mnemo-bio-ch18-19",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-4",
    "topicTitle": "Aqueous vs Vitreous Humor",
    "topic": "Anterior vs Posterior Eye Cavities and Canal of Schlemm",
    "mnemonicNumber": 19,
    "title": "Eye Humors: Aqueous (Watery / Anterior Chamber / Secreted by Ciliary Body) vs Vitreous (Gel-like / Posterior Chamber / Maintains Eyeball Shape)",
    "badgeText": "Comparison",
    "importance": "Medium Yield",
    "difficulty": "easy",
    "visualType": "comparison",
    "mnemonicType": "comparison",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Aqueous Humor = Anterior chamber (between Cornea & Lens, thin watery fluid constantly secreted by Ciliary body & drained by Canal of Schlemm | Vitreous Humor = Posterior chamber (between Lens & Retina, permanent transparent jelly that keeps retina pressed in place)!",
    "memoryHook": "Aqueous is in the Anterior front like water from a fountain (continuously made and drained; blockage = Glaucoma!). Vitreous is the permanent clear gelatin egg white filling the big back bowl!",
    "fact": "The human eyeball contains two distinct fluid-filled chambers separated by the crystalline lens: 1) Aqueous Chamber: Space between Cornea and Lens, filled with thin watery fluid called Aqueous Humor. It is continuously secreted by the ciliary processes and drained into the bloodstream via the Canal of Schlemm. Blockage of drainage increases Intraocular Pressure (IOP) leading to Glaucoma. 2) Vitreous Chamber: Larger space between Lens and Retina, filled with a permanent transparent gelatinous fluid called Vitreous Humor that supports the spherical shape of eyeball.",
    "breakdown": [
      {
        "key": "Aqueous Chamber",
        "label": "Between Cornea and Lens; watery fluid; continuously replaced; maintains anterior curvature"
      },
      {
        "key": "Vitreous Chamber",
        "label": "Between Lens and Retina; permanent transparent jelly (99% water + hyaluronic acid/collagen)"
      },
      {
        "key": "Canal of Schlemm",
        "label": "Venous sinus at iridocorneal junction that drains aqueous humor back into blood"
      },
      {
        "key": "Glaucoma Pathology",
        "label": "Increased intraocular pressure due to blocked aqueous drainage -> optic nerve damage"
      }
    ],
    "doodleBadge": "Aqueous = Anterior (Watery)\nVitreous = Posterior (Jelly)",
    "doodleSubtext": "2 Eye Humors",
    "explanation": "Unlike aqueous humor which turns over every few hours, vitreous humor is formed during embryonic development and is never replaced.",
    "alsoRemember": "Cataract is opacification/clouding of the crystalline lens, not a disorder of the humors.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.6.1.",
    "neetTrap": "Aqueous humor lies between CORNEA and LENS; Vitreous humor lies between LENS and RETINA.",
    "tags": [
      "Aqueous Humor",
      "Vitreous Humor",
      "Glaucoma",
      "Canal of Schlemm",
      "Ciliary Body",
      "Lens"
    ],
    "expandedMeaning": "Hydrodynamic and structural compartmentalization of ocular refractive fluid media.",
    "whyItWorks": "A = Anterior / Aqueous / Active flow vs V = Vitreous / Vast back jelly.",
    "visualDescription": "Eyeball cross section highlighting small blue anterior pool (Aqueous) and large green gelatinous sphere (Vitreous).",
    "neetRelevance": "Common in eye chamber boundaries and glaucoma clinical questions.",
    "commonMistake": "Confusing the boundary locations of the two chambers.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.6.1",
    "verificationStatus": "verified",
    "quiz": {
      "question": "The space between the crystalline lens and the retina is called the vitreous chamber, which is filled with a transparent gel-like fluid called:",
      "options": [
        "Aqueous humor",
        "Vitreous humor",
        "Endolymph",
        "Perilymph"
      ],
      "answerIndex": 1,
      "explanation": "The vitreous chamber between lens and retina is filled with transparent gelatinous vitreous humor."
    }
  },
  {
    "id": "mnemo-bio-ch18-20",
    "subject": "biology",
    "chapterId": "bio-ch-18",
    "chapterNumber": 18,
    "chapterTitle": "Neural Control and Coordination",
    "topicId": "bio-top-18-1",
    "topicTitle": "Nissl Granules Composition & Location",
    "topic": "Rough Endoplasmic Reticulum + Ribosomes in Cyton and Dendrites (Absent in Axon)",
    "mnemonicNumber": 20,
    "title": "Nissl Granules: RER + Free Ribosomes for Protein Synthesis (Present in Cyton & Dendrites, ABSENT in Axon & Axon Hillock!)",
    "badgeText": "Exception",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "concept",
    "mnemonicType": "concept",
    "cardColor": "#FFE681",
    "badgeColor": "#A66CFF",
    "mnemonic": "Nissl Granules = Rough Endoplasmic Reticulum (RER) + Ribosomes (Protein synthesis factories!) -> Packed in Cyton body and branching Dendrites, but STRICTLY ABSENT in Axon and Axon Hillock!",
    "memoryHook": "The cell body (Cyton) and Dendrites are covered in speckled Nissl freckles (RER factories). But the long Axon highway and its launch ramp (Axon Hillock) are kept completely smooth and free of Nissl granules!",
    "fact": "The cell body (cyton/soma) of a neuron contains cytoplasm with typical cell organelles and certain granular bodies called Nissl Granules. Electron microscopy reveals that Nissl granules are composed of Rough Endoplasmic Reticulum (RER) and free ribosomes, functioning actively in protein and neurotransmitter enzyme synthesis. Nissl granules are abundantly present in the Cyton and Dendrites, but are completely ABSENT from the Axon and the conical Axon Hillock region.",
    "breakdown": [
      {
        "key": "Biochemical Nature",
        "label": "Composed of Rough Endoplasmic Reticulum (RER) and rosettes of free Ribosomes"
      },
      {
        "key": "Function",
        "label": "Active site of protein synthesis (enzymes, structural proteins, receptors)"
      },
      {
        "key": "Present In",
        "label": "Cyton (cell body / soma) and Dendrites"
      },
      {
        "key": "Absent In",
        "label": "Axon and Axon Hillock (the cone-shaped region where axon arises from soma)"
      }
    ],
    "doodleBadge": "Nissl = RER + Ribosomes\nIn Cyton/Dendrites | ABSENT in Axon",
    "doodleSubtext": "Nissl Granules",
    "explanation": "Because axons lack Nissl granules and ribosomes, all axonal proteins and neurotransmitter-synthesizing enzymes must be manufactured in the soma and transported via axonal transport.",
    "alsoRemember": "Chromatolysis is the dispersion and disappearance of Nissl granules from soma following axonal injury.",
    "ncertConnection": "NCERT Class 11 Biology Section 21.2.",
    "neetTrap": "Nissl granules are ABSENT in the axon and axon hillock.",
    "tags": [
      "Nissl Granules",
      "RER",
      "Ribosomes",
      "Cyton",
      "Dendrites",
      "Axon Hillock",
      "Neuron"
    ],
    "expandedMeaning": "Ultrastructural ribophorin-associated protein synthetic machinery distribution across neuronal compartments.",
    "whyItWorks": "Freckled soma vs Smooth axon visual rule.",
    "visualDescription": "Neuron diagram with purple speckled dots inside star-shaped Cyton and Dendrites, stopping sharply at clear Axon Hillock and plain stem.",
    "neetRelevance": "Classic NCERT exception question tested frequently.",
    "commonMistake": "Thinking Nissl granules are distributed evenly throughout the entire axon.",
    "sourceReference": "NCERT Class 11 Chapter 21 Section 21.2",
    "verificationStatus": "verified",
    "quiz": {
      "question": "Nissl granules, composed of rough endoplasmic reticulum and ribosomes, are found in which parts of a neuron?",
      "options": [
        "Axon only",
        "Axon and axon hillock",
        "Cyton (cell body) and dendrites",
        "Synaptic knobs only"
      ],
      "answerIndex": 2,
      "explanation": "Nissl granules are present in the cyton (soma) and dendrites, but are strictly absent from the axon and axon hillock."
    }
  }
];
