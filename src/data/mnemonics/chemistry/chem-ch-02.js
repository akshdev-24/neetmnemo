export const chemCh02Mnemonics = [
  {
    "id": "mnemo-chem-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Hydrogen Spectral Series",
    "mnemonicNumber": 1,
    "title": "Hydrogen Spectral Series: Lazy Boys Play Badminton Politely",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EDF4FF",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Lazy Boys Play Badminton Politely (Lyman, Balmer, Paschen, Brackett, Pfund)",
    "memoryHook": "Lyman (n1=1, UV) → Balmer (n1=2, Visible) → Paschen (n1=3, IR) → Brackett (n1=4, IR) → Pfund (n1=5, Far IR)!",
    "fact": "Rydberg formula: 1/λ = RZ² (1/n1² - 1/n2²). Lyman series falls in Ultraviolet (UV) region. Balmer series falls in Visible light region (VIBGYOR).",
    "breakdown": [
      {
        "key": "Lyman (n1 = 1)",
        "label": "Ultraviolet (UV) region (Highest energy)"
      },
      {
        "key": "Balmer (n1 = 2)",
        "label": "Visible region (The ONLY visible series to human eyes!)"
      },
      {
        "key": "Paschen (n1 = 3)",
        "label": "Near Infrared (IR)"
      },
      {
        "key": "Brackett (n1 = 4)",
        "label": "Infrared (IR)"
      },
      {
        "key": "Pfund (n1 = 5)",
        "label": "Far Infrared (IR)"
      }
    ],
    "doodleBadge": "L → B → P → B → P",
    "doodleSubtext": "Balmer = Visible Light",
    "explanation": "Whenever an excited electron drops down to level n1 = 2 from any higher shell (n2 = 3, 4, 5, 6), it emits visible colored light (Balmer series).",
    "alsoRemember": "Maximum number of spectral lines emitted when electron drops from level n to ground state = n(n - 1) / 2.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.4.",
    "neetTrap": "Balmer series is the ONLY series in the visible region. If an electron jumps from n=5 to n=1, it is Lyman (UV), not Balmer!",
    "tags": [
      "Atomic Structure",
      "Hydrogen Spectrum",
      "Balmer",
      "Class 11"
    ],
    "quiz": {
      "question": "Which hydrogen spectral series falls in the visible light range of the electromagnetic spectrum?",
      "options": [
        "Lyman series",
        "Balmer series",
        "Paschen series",
        "Pfund series"
      ],
      "answerIndex": 1,
      "explanation": "Transitions ending at n1 = 2 form the Balmer series, which is the only series in the visible spectrum."
    }
  },
  {
    "id": "chem-ch02-02",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-2",
    "topicTitle": "Four Quantum Numbers",
    "mnemonicNumber": 2,
    "title": "4 Quantum Numbers: Principal (n), Azimuthal (l), Magnetic (m), Spin (s)",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "n = Shell Size & Energy | l = Subshell Shape (0 to n-1) | m = 3D Orientation (-l to +l) | s = Electron Spin (+½, -½)",
    "memoryHook": "n gives the City (Shell), l gives the Street (s, p, d, f shape), m gives the House Number (Orbital), and s gives the Roommate (Spin)!",
    "fact": "Four quantum numbers completely define an electron in an atom: 1. Principal (n = 1, 2, 3...): determines shell, size, and main energy level. 2. Azimuthal/Orbital angular momentum (l = 0 to n-1): determines subshell shape (l=0 s spherical, l=1 p dumbbell, l=2 d double dumbbell, l=3 f complex). 3. Magnetic (m = -l to +l): determines spatial orientation (total 2l+1 orbitals). 4. Spin (s = +½, -½).",
    "breakdown": [
      {
        "key": "n (Principal)",
        "label": "Total orbitals in a shell = n²; Total maximum electrons in shell = 2n²"
      },
      {
        "key": "l (Azimuthal)",
        "label": "Orbital angular momentum L = √(l(l+1)) * h/(2π)"
      },
      {
        "key": "m (Magnetic)",
        "label": "Number of orbitals in a subshell = 2l + 1 (s=1, p=3, d=5, f=7)"
      },
      {
        "key": "s (Spin)",
        "label": "Spin angular momentum S = √(s(s+1)) * h/(2π)"
      }
    ],
    "doodleBadge": "n = Size · l = Shape\nm = Orientation · s = Spin",
    "doodleSubtext": "Quantum Coordinates",
    "explanation": "Orbital angular momentum depends ONLY on azimuthal quantum number 'l', completely independent of principal quantum number 'n'. For any s-orbital (l=0), orbital angular momentum is ALWAYS ZERO.",
    "alsoRemember": "For a 2s or 3s electron, orbital angular momentum is 0 because l = 0.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.",
    "neetTrap": "Orbital angular momentum of any s-orbital electron (1s, 2s, 3s, 4s) is ALWAYS ZERO because l = 0.",
    "tags": [
      "Chemistry",
      "Quantum Numbers",
      "Atomic Structure",
      "Azimuthal"
    ],
    "quiz": {
      "question": "What is the orbital angular momentum of an electron present in a 3s orbital?",
      "options": [
        "√(6) h / 2π",
        "0",
        "√(2) h / 2π",
        "h / 2π"
      ],
      "answerIndex": 1,
      "explanation": "Orbital angular momentum = √(l(l+1)) h/2π. For any s-orbital, l = 0, so the angular momentum is 0."
    }
  },
  {
    "id": "chem-ch02-03",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-3",
    "topicTitle": "Aufbau (n + l) Rule",
    "mnemonicNumber": 3,
    "title": "Aufbau (n + l) Rule: Lower (n + l) Fills First; If Equal, Lower n Fills First",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "Compare (n + l): Lower energy fills first | Tie-breaker: Lower n fills first (4s before 3d, 4p before 5s)",
    "memoryHook": "4s (4+0=4) fills before 3d (3+2=5)! 3d (3+2=5) and 4p (4+1=5) have same (n+l)=5, so lower n=3 (3d) fills before 4p!",
    "fact": "Aufbau Principle (German for \"building up\"): In ground state, orbitals are filled in order of increasing energies. The energy of an orbital is determined by (n + l) rule: 1. Orbital with lower (n + l) has lower energy. 2. If two orbitals have the same (n + l) value, the orbital with lower 'n' has lower energy.",
    "breakdown": [
      {
        "key": "4s vs 3d",
        "label": "4s (n+l = 4+0 = 4) < 3d (n+l = 3+2 = 5) → 4s fills before 3d"
      },
      {
        "key": "3d vs 4p",
        "label": "Both have (n+l) = 5 → 3d (n=3) fills before 4p (n=4)"
      },
      {
        "key": "Full Sequence",
        "label": "1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s"
      }
    ],
    "doodleBadge": "Lower (n+l) First\nTie = Lower n",
    "doodleSubtext": "Aufbau Ordering",
    "explanation": "In single-electron systems like Hydrogen (H, He⁺, Li²⁺), orbital energy depends ONLY on 'n' (so 3s = 3p = 3d in H atom!). (n + l) rule applies strictly to multi-electron atoms.",
    "alsoRemember": "In H-atom, 3s, 3p, and 3d are degenerate (have identical energy).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.3.",
    "neetTrap": "In Hydrogen atom (single-electron), energy depends ONLY on n (3s = 3p = 3d). In multi-electron atoms, energy follows (n + l).",
    "tags": [
      "Chemistry",
      "Aufbau Principle",
      "n+l Rule",
      "Electronic Configuration"
    ],
    "quiz": {
      "question": "In a multi-electron atom, which of the following orbitals has the lowest energy and fills first?",
      "options": [
        "4d",
        "5s",
        "4f",
        "5p"
      ],
      "answerIndex": 1,
      "explanation": "5s has (n+l = 5+0 = 5); 4d has (4+2 = 6); 5p has (5+1 = 6); 4f has (4+3 = 7). 5s has the lowest (n+l) = 5 and fills first."
    }
  },
  {
    "id": "chem-ch02-04",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-3",
    "topicTitle": "Chromium & Copper Electronic Configuration Exceptions",
    "mnemonicNumber": 4,
    "title": "Cr (3d⁵ 4s¹) & Cu (3d¹⁰ 4s¹): Half-Filled & Fully-Filled Subshell Stability",
    "badgeText": "NEET Trap",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "comparison",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Cr: [Ar] 3d⁵ 4s¹ (NOT 3d⁴ 4s²) | Cu: [Ar] 3d¹⁰ 4s¹ (NOT 3d⁹ 4s²)",
    "memoryHook": "Chromium jumps 1 electron from 4s to 3d to achieve symmetrical HALF-FILLED 3d⁵; Copper jumps 1 electron to achieve FULLY-FILLED 3d¹⁰!",
    "fact": "Extra stability of half-filled (d⁵) and fully-filled (d¹⁰) subshells is due to: 1. Symmetrical distribution of electrons (reduces interelectronic repulsion), 2. Maximum exchange energy (electrons with parallel spins can exchange positions, lowering potential energy). Exchange energy formula for n parallel electrons: n(n - 1) / 2.",
    "breakdown": [
      {
        "key": "Chromium (Z = 24)",
        "label": "[Ar] 3d⁵ 4s¹ (6 parallel unpaired electrons, 10 possible exchanges in 3d)"
      },
      {
        "key": "Copper (Z = 29)",
        "label": "[Ar] 3d¹⁰ 4s¹ (1 unpaired electron in 4s; stable 3d¹⁰ core)"
      },
      {
        "key": "Exchange Energy in Cr 3d⁵",
        "label": "5(5 - 1) / 2 = 10 exchanges (maximum stabilization)"
      }
    ],
    "doodleBadge": "Cr = 3d⁵ 4s¹\nCu = 3d¹⁰ 4s¹",
    "doodleSubtext": "Symmetry & Exchange Energy",
    "explanation": "Exchange energy is the energy released when two or more electrons with the same spin exchange their positions in the degenerate orbitals of a subshell.",
    "alsoRemember": "Cr²⁺ is 3d⁴ and acts as a strong reducing agent (wants to become stable d³ t2g³ in aqueous solution).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.4.",
    "neetTrap": "Chromium has SIX (6) unpaired electrons (five in 3d and one in 4s), NOT four.",
    "tags": [
      "Chemistry",
      "Chromium",
      "Copper",
      "Electronic Configuration",
      "Exchange Energy"
    ],
    "quiz": {
      "question": "How many total unpaired electrons are present in a neutral gaseous Chromium atom (Z = 24) in its ground state?",
      "options": [
        "4",
        "5",
        "6",
        "2"
      ],
      "answerIndex": 2,
      "explanation": "Cr configuration is [Ar] 3d⁵ 4s¹, which has 5 unpaired electrons in 3d and 1 in 4s, giving a total of 6 unpaired electrons."
    }
  },
  {
    "id": "chem-ch02-05",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-2",
    "topicTitle": "Pauli Exclusion Principle & Hund's Rule",
    "mnemonicNumber": 5,
    "title": "Pauli (Max 2 Opp Spin e⁻ per Orbital) & Hund (Singlet Filling Before Pairing)",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Pauli: No 2 electrons can have all 4 quantum numbers identical (Opposite spins ↑↓) | Hund: Bus Seat Rule (fill singly with parallel spins before pairing!)",
    "memoryHook": "Pauli says: max 2 electrons per orbital with opposite spins (↑↓). Hund says: like passengers on a bus, electrons occupy empty degenerate orbitals first before sharing!",
    "fact": "1. Pauli's Exclusion Principle: No two electrons in an atom can have the same set of all four quantum numbers. Only two electrons may exist in the same orbital, and they must have opposite spins. 2. Hund's Rule of Maximum Multiplicity: Pairing of electrons in degenerate orbitals (p, d, f) does not take place until each orbital singly contains one electron with parallel spin.",
    "breakdown": [
      {
        "key": "Pauli's Principle",
        "label": "Restricts maximum capacity of any orbital to 2 electrons with opposite spins (↑↓)"
      },
      {
        "key": "Hund's Rule",
        "label": "Degenerate orbitals fill singly with parallel spin (↑ ↑ ↑) before pairing (↑↓ ↑ ↑)"
      },
      {
        "key": "Nitrogen (2p³)",
        "label": "2px¹ 2py¹ 2pz¹ (3 parallel spins, maximum spin multiplicity 2S+1 = 4)"
      }
    ],
    "doodleBadge": "Pauli = Max 2 (↑↓)\nHund = Single First (↑ ↑ ↑)",
    "doodleSubtext": "Fundamental Orbital Rules",
    "explanation": "Spin multiplicity is defined as 2S + 1 (where S = total spin). Hund's rule ensures maximum spin multiplicity, resulting in lowest electrostatic repulsion and maximum exchange stability.",
    "alsoRemember": "Maximum number of electrons in subshell = 2(2l + 1). For s=2, p=6, d=10, f=14.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.2.",
    "neetTrap": "If an electronic configuration shows paired electrons while an empty degenerate orbital is available (e.g. 2px² 2py¹ 2pz⁰), it violates HUND'S RULE, not Pauli's.",
    "tags": [
      "Chemistry",
      "Pauli Exclusion",
      "Hund Rule",
      "Multiplicity"
    ],
    "quiz": {
      "question": "Which rule is violated if the electronic configuration of Carbon (Z = 6) is written as 1s² 2s² 2px² 2py⁰ 2pz⁰?",
      "options": [
        "Aufbau principle",
        "Pauli’s exclusion principle",
        "Hund’s rule of maximum multiplicity",
        "Heisenberg’s uncertainty principle"
      ],
      "answerIndex": 2,
      "explanation": "Pairing electrons in 2px before singly occupying 2py violates Hund’s rule of maximum multiplicity."
    }
  },
  {
    "id": "chem-ch02-06",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Bohr's Model Formulas: Radius, Velocity, Energy",
    "mnemonicNumber": 6,
    "title": "Bohr Formulas: r = 0.529 n²/Z Å | v = 2.18 × 10⁶ Z/n m/s | E = -13.6 Z²/n² eV",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Radius ∝ n²/Z (Expands with n) | Velocity ∝ Z/n (Slows down far away) | Energy E = -13.6 × Z²/n² eV/atom",
    "memoryHook": "Radius goes as n²/Z (0.529 Å for H 1st orbit); Energy goes as -13.6 Z²/n² eV (Ground state of H = -13.6 eV; 2nd shell = -3.4 eV; 3rd shell = -1.51 eV)!",
    "fact": "Bohr formulas for single-electron species (H, He⁺, Li²⁺, Be³⁺): 1. Radius: r_n = 0.529 * (n² / Z) Å (or 52.9 pm * n²/Z). 2. Velocity: v_n = 2.188 × 10⁶ * (Z / n) m/s. 3. Energy: E_n = -13.6 * (Z² / n²) eV/atom = -2.18 × 10⁻¹⁸ * (Z² / n²) J/atom. 4. Angular Momentum Quantization: mvr = n * h / (2π).",
    "breakdown": [
      {
        "key": "Radius r_n",
        "label": "0.529 × (n² / Z) Å (0.529 × 10⁻¹⁰ m)"
      },
      {
        "key": "Energy E_n",
        "label": "-13.6 × (Z² / n²) eV/atom (Negative sign means electron is bound to nucleus)"
      },
      {
        "key": "Kinetic & Potential Energy",
        "label": "Total Energy E = -K.E. = P.E. / 2 (P.E. is twice total energy and negative)"
      },
      {
        "key": "Bohr Postulate",
        "label": "Angular momentum mvr = n * h/(2π) where n = 1, 2, 3..."
      }
    ],
    "doodleBadge": "r ∝ n²/Z · E ∝ -Z²/n²\nE = -K.E. = P.E./2",
    "doodleSubtext": "Bohr Triad",
    "explanation": "Total energy of an electron is negative because work must be done against electrostatic attraction to pull the electron to infinity where energy is defined as zero.",
    "alsoRemember": "Ionization energy of H-like species = +13.6 * (Z² / n²) eV.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.4.",
    "neetTrap": "Potential Energy is TWICE Total Energy and NEGATIVE: P.E. = 2 * E_total = -2 * K.E.",
    "tags": [
      "Chemistry",
      "Bohr Model",
      "Radius",
      "Energy",
      "Formulas"
    ],
    "quiz": {
      "question": "If the total energy of an electron in a Bohr orbit of hydrogen atom is -3.4 eV, what are its Kinetic Energy and Potential Energy respectively?",
      "options": [
        "+3.4 eV and -6.8 eV",
        "-3.4 eV and +6.8 eV",
        "+6.8 eV and -3.4 eV",
        "+1.7 eV and -3.4 eV"
      ],
      "answerIndex": 0,
      "explanation": "K.E. = -Total Energy = -(-3.4 eV) = +3.4 eV. P.E. = 2 * Total Energy = 2 * (-3.4 eV) = -6.8 eV."
    }
  },
  {
    "id": "chem-ch02-07",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "de Broglie Wavelength: Dual Nature of Matter",
    "mnemonicNumber": 7,
    "title": "de Broglie Wavelength: λ = h / p = h / (mv) = h / √(2 m K.E.)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "λ = h / mv = h / √(2mE) = 12.27 / √V Å (for electron accelerated by potential V)",
    "memoryHook": "Matter has waves! Heavy objects have tiny unnoticeable wavelengths; tiny electrons have measurable wavelengths (λ = 12.27 / √V Å)!",
    "fact": "Louis de Broglie (1924) proposed that matter exhibits wave-particle duality: λ = h / p = h / (m * v). In terms of Kinetic Energy (E): λ = h / √(2 * m * E). For an electron accelerated from rest across potential difference V volts: λ = h / √(2 * m * e * V) = 12.27 / √V Å (or 1.227 / √V nm).",
    "breakdown": [
      {
        "key": "General Formula",
        "label": "λ = h / (m * v) = h / p"
      },
      {
        "key": "In Terms of Kinetic Energy",
        "label": "λ = h / √(2 * m * K.E.)"
      },
      {
        "key": "In Terms of Temperature",
        "label": "For gas molecule: K.E. = 3/2 k_B T → λ = h / √(3 m k_B T)"
      },
      {
        "key": "Electron Shortcut",
        "label": "λ = 12.27 / √V Å (where V is voltage in volts)"
      }
    ],
    "doodleBadge": "λ = h / mv\nλ = 12.27 / √V Å",
    "doodleSubtext": "Matter Waves",
    "explanation": "For macroscopic everyday objects (like a 0.1 kg cricket ball), wavelength is on the order of 10⁻³⁴ m, which is far too small to exhibit observable wave diffraction.",
    "alsoRemember": "Circumference of nth Bohr orbit contains exactly n de Broglie wavelengths: 2πr = n * λ.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.5.1.",
    "neetTrap": "For a 100 V accelerated electron, λ = 12.27 / √100 = 12.27 / 10 = 1.227 Å (0.1227 nm).",
    "tags": [
      "Chemistry",
      "de Broglie",
      "Wavelength",
      "Dual Nature"
    ],
    "quiz": {
      "question": "What is the de Broglie wavelength of an electron accelerated through a potential difference of 100 Volts?",
      "options": [
        "12.27 Å",
        "1.227 Å",
        "0.1227 Å",
        "122.7 Å"
      ],
      "answerIndex": 1,
      "explanation": "λ = 12.27 / √V Å = 12.27 / √100 = 12.27 / 10 = 1.227 Å (0.1227 nm)."
    }
  },
  {
    "id": "chem-ch02-08",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Heisenberg's Uncertainty Principle",
    "mnemonicNumber": 8,
    "title": "Heisenberg Uncertainty: Δx · Δp ≥ h / (4π) & Δx · Δv ≥ h / (4π m)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Δx · Δp ≥ h / 4π | Δx · Δv ≥ h / (4π m) | ΔE · Δt ≥ h / 4π",
    "memoryHook": "You CANNOT measure both exact Position (x) and exact Momentum (p) simultaneously! Pinning down position creates huge uncertainty in velocity!",
    "fact": "Heisenberg's Uncertainty Principle (1927): It is impossible to determine simultaneously both the exact position and exact momentum (or velocity) of a microscopic subatomic particle like an electron. Equation: Δx * Δp ≥ h / (4π) or Δx * (m * Δv) ≥ h / (4π), hence Δx * Δv ≥ h / (4π * m).",
    "breakdown": [
      {
        "key": "Formula 1 (Position-Momentum)",
        "label": "Δx * Δp ≥ h / (4π)"
      },
      {
        "key": "Formula 2 (Position-Velocity)",
        "label": "Δx * Δv ≥ h / (4π * m)"
      },
      {
        "key": "Formula 3 (Energy-Time)",
        "label": "ΔE * Δt ≥ h / (4π)"
      },
      {
        "key": "Why Electrons cannot exist in nucleus",
        "label": "If electron were in nucleus (Δx ≈ 10⁻¹⁵ m), Δv would exceed speed of light, which is impossible"
      }
    ],
    "doodleBadge": "Δx · Δp ≥ h / 4π\nΔx · Δv ≥ h / 4πm",
    "doodleSubtext": "Heisenberg Principle",
    "explanation": "Heisenberg's principle completely ruled out the classical Bohr model idea of definite fixed planetary orbits and replaced it with quantum mechanical probability orbitals (Ψ²).",
    "alsoRemember": "Planck's constant h = 6.626 × 10⁻³⁴ J·s.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.5.2.",
    "neetTrap": "The denominator is 4π, NOT 2π (h / 4π = ℏ / 2).",
    "tags": [
      "Chemistry",
      "Heisenberg",
      "Uncertainty Principle",
      "Quantum Mechanics"
    ],
    "quiz": {
      "question": "According to Heisenberg’s Uncertainty Principle, the product of uncertainty in position and uncertainty in velocity for a particle of mass m is always:",
      "options": [
        "≥ h / (4π m)",
        "≤ h / (4π m)",
        "≥ h / (2π m)",
        "= h / (4π)"
      ],
      "answerIndex": 0,
      "explanation": "Δx * Δv ≥ h / (4π m) describes the fundamental quantum lower bound on positional and velocity uncertainties."
    }
  },
  {
    "id": "chem-ch02-09",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-2",
    "topicTitle": "Radial and Angular Nodes Formula",
    "mnemonicNumber": 9,
    "title": "Nodes Formulas: Radial Nodes = n - l - 1 | Angular Nodes = l | Total Nodes = n - 1",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Radial Nodes (Spherical) = n - l - 1 | Angular Nodes (Nodal Planes) = l | Total Nodes = n - 1",
    "memoryHook": "For 3d orbital: n=3, l=2 → Radial = 3-2-1 = 0; Angular = 2; Total Nodes = 3-1 = 2! For 2s: Radial = 2-0-1 = 1; Angular = 0; Total = 1!",
    "fact": "A node is a region or surface where the probability density (Ψ²) of finding an electron is ZERO: 1. Radial nodes (spherical shells): Number = n - l - 1. 2. Angular nodes (nodal planes/cones): Number = l. 3. Total nodes: (n - l - 1) + l = n - 1.",
    "breakdown": [
      {
        "key": "Radial Nodes (Spherical)",
        "label": "n - l - 1"
      },
      {
        "key": "Angular Nodes (Nodal Planes)",
        "label": "l (s=0, p=1, d=2, f=3)"
      },
      {
        "key": "Total Nodes",
        "label": "n - 1"
      },
      {
        "key": "Example: 4p orbital",
        "label": "n=4, l=1 → Radial = 4-1-1 = 2; Angular = 1; Total = 3"
      },
      {
        "key": "dz² orbital exception",
        "label": "Has 2 nodal CONES instead of planar nodal sheets"
      }
    ],
    "doodleBadge": "Radial = n - l - 1\nAngular = l\nTotal = n - 1",
    "doodleSubtext": "Nodal Calculations",
    "explanation": "The number of peaks in radial probability distribution curves 4πr²R²(r) is equal to (Radial Nodes + 1) = n - l.",
    "alsoRemember": "All s-orbitals have l = 0, so they have ZERO angular nodes (spherically symmetrical).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.1.",
    "neetTrap": "Total nodes is ALWAYS n - 1. Angular nodes is ALWAYS equal to l.",
    "tags": [
      "Chemistry",
      "Nodes",
      "Radial Nodes",
      "Angular Nodes",
      "Orbitals"
    ],
    "quiz": {
      "question": "How many radial nodes and angular nodes respectively are present in a 3p orbital?",
      "options": [
        "1 and 1",
        "2 and 1",
        "0 and 2",
        "1 and 2"
      ],
      "answerIndex": 0,
      "explanation": "For 3p, n = 3 and l = 1. Radial nodes = n - l - 1 = 3 - 1 - 1 = 1. Angular nodes = l = 1."
    }
  },
  {
    "id": "chem-ch02-10",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Photoelectric Effect Equations",
    "mnemonicNumber": 10,
    "title": "Photoelectric Effect: hν = hν₀ + K.E.max = w₀ + eV₀",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "process",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Energy of Incident Photon (hν) = Work Function (hν₀) + Maximum Kinetic Energy of Ejected Electron (½ m v² = e V₀)",
    "memoryHook": "Photon energy hν is split into two jobs: paying the entrance fee Work Function (hν₀) + giving the electron speed (K.E.max)!",
    "fact": "Einstein's Photoelectric Equation (1905): hν = w₀ + K.E.max = hν₀ + ½ m v_max² = hν₀ + e V₀ (where w₀ = work function, ν₀ = threshold frequency, V₀ = stopping potential). 1. If ν < ν₀, NO photoelectrons ejected regardless of light intensity. 2. Number of photoelectrons ejected ∝ Intensity of incident light. 3. K.E.max of photoelectrons ∝ Frequency of incident light (independent of intensity).",
    "breakdown": [
      {
        "key": "Einstein Equation",
        "label": "hν = hν₀ + K.E.max"
      },
      {
        "key": "Work Function w₀",
        "label": "hν₀ = h c / λ₀ (minimum energy required to eject electron from metal surface)"
      },
      {
        "key": "Stopping Potential V₀",
        "label": "K.E.max = e * V₀ (negative voltage that halts fastest electrons)"
      },
      {
        "key": "Cesium (Cs)",
        "label": "Has the lowest work function (~2.14 eV) and is most sensitive to visible light in photoelectric cells"
      }
    ],
    "doodleBadge": "hν = hν₀ + K.E.max\nK.E. = e V₀",
    "doodleSubtext": "Photoelectric Physics",
    "explanation": "Einstein was awarded the Nobel Prize in Physics in 1921 specifically for his explanation of the photoelectric effect using light quanta (photons).",
    "alsoRemember": "Slope of graph between Stopping Potential (V₀) and Frequency (ν) is h / e (universal constant).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.3.2.",
    "neetTrap": "Intensity of light increases the NUMBER (current) of photoelectrons ejected, NOT their kinetic energy.",
    "tags": [
      "Chemistry",
      "Photoelectric Effect",
      "Work Function",
      "Stopping Potential"
    ],
    "quiz": {
      "question": "In photoelectric emission, increasing the intensity of incident light above threshold frequency increases which of the following?",
      "options": [
        "Maximum kinetic energy of ejected photoelectrons",
        "Stopping potential",
        "Number of photoelectrons ejected per second (photoelectric current)",
        "Threshold frequency of metal"
      ],
      "answerIndex": 2,
      "explanation": "Higher intensity means more photons per second, ejecting a greater number of photoelectrons (increasing photoelectric current)."
    }
  },
  {
    "id": "chem-ch02-11",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Planck's Quantum Theory",
    "mnemonicNumber": 11,
    "title": "Planck's Equation: E = hν = hc / λ (1 Photon = 1 Quantum)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#5B8DEF",
    "mnemonic": "E = hν = hc / λ = (1240 eV·nm) / λ(nm) = (12400 eV·Å) / λ(Å)",
    "memoryHook": "Planck's constant h = 6.626 × 10⁻³⁴ J·s. Shortcut: Energy of 1 photon in eV = 12400 / λ in Angstroms!",
    "fact": "Max Planck (1900) proposed that atoms and molecules can emit or absorb energy only in discrete packets called quanta (or photons for light): E = hν = h * (c / λ). Total energy emitted = n * hν (where n is an integer 1, 2, 3...). Planck's constant h = 6.626 × 10⁻³⁴ J·s (or kg·m²·s⁻¹).",
    "breakdown": [
      {
        "key": "Energy of 1 Quantum",
        "label": "E = hν = h c / λ"
      },
      {
        "key": "Planck's Constant h",
        "label": "6.626 × 10⁻³⁴ J·s"
      },
      {
        "key": "Speed of Light c",
        "label": "3.0 × 10⁸ m/s"
      },
      {
        "key": "Wave Number ν̄",
        "label": "ν̄ = 1 / λ = ν / c (units: m⁻¹ or cm⁻¹)"
      },
      {
        "key": "NEET Shortcut",
        "label": "E (in eV) ≈ 12400 / λ (in Å)"
      }
    ],
    "doodleBadge": "E = hν = hc / λ\nE (eV) = 12400 / λ(Å)",
    "doodleSubtext": "Quantum Energy Packets",
    "explanation": "Shorter wavelength means higher frequency and higher photon energy (Gamma rays > X-rays > UV > Visible > IR > Micro > Radio).",
    "alsoRemember": "Black body radiation and photoelectric effect could only be explained assuming particle nature of electromagnetic radiation.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.3.1.",
    "neetTrap": "Energy is INVERSELY proportional to wavelength (λ): shorter wavelength = higher energy.",
    "tags": [
      "Chemistry",
      "Planck Quantum Theory",
      "Photon Energy",
      "Wave Number"
    ],
    "quiz": {
      "question": "What is the wave number (ν̄) of radiation having a wavelength of 5000 Å?",
      "options": [
        "2 × 10⁶ m⁻¹",
        "5 × 10⁴ m⁻¹",
        "2 × 10⁴ cm⁻¹",
        "5 × 10⁶ m⁻¹"
      ],
      "answerIndex": 0,
      "explanation": "λ = 5000 Å = 5 × 10⁻⁷ m. Wave number ν̄ = 1 / λ = 1 / (5 × 10⁻⁷ m) = 2 × 10⁶ m⁻¹ (or 2 × 10⁴ cm⁻¹)."
    }
  },
  {
    "id": "chem-ch02-12",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Rutherford's Alpha Scattering Experiment & Nucleus Discovery",
    "mnemonicNumber": 12,
    "title": "Rutherford Alpha Scattering: Nucleus is Tiny, Heavy & Positively Charged",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "process",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Most alpha particles pass straight (Atom is empty space!) | Few deflect at angles | 1 in 20,000 bounces back 180° (Tiny Dense Nucleus)!",
    "memoryHook": "Rutherford fired alpha particles (He²⁺) at thin gold foil: most went straight through, but 1 in 20,000 rebounded 180°, discovering the dense positive Nucleus!",
    "fact": "Rutherford's Alpha Scattering Experiment (1911): Bombarded thin gold foil (~100 nm thick) with high-energy alpha particles. 1. Most alpha particles passed straight undeflected (most space in atom is empty). 2. A small fraction deflected by small angles. 3. Very few (~1 in 20,000) rebounded almost 180°. Conclusion: Positive charge and most mass of atom is concentrated in an extremely small volume called the NUCLEUS.",
    "breakdown": [
      {
        "key": "Atomic Radius",
        "label": "About 10⁻¹⁰ m (0.1 nm / 1 Å)"
      },
      {
        "key": "Nuclear Radius",
        "label": "About 10⁻¹⁵ m (1 fermi / fm)"
      },
      {
        "key": "Volume Ratio",
        "label": "Nucleus occupies only 10⁻¹⁵ of total atom volume (like a cricket ball in a 5-km stadium)"
      },
      {
        "key": "Nuclear Radius Formula",
        "label": "R = R₀ * A^(1/3) (where R₀ ≈ 1.33 × 10⁻¹⁵ m and A = mass number)"
      }
    ],
    "doodleBadge": "Atom = 10⁻¹⁰ m\nNucleus = 10⁻¹⁵ m",
    "doodleSubtext": "Nuclear Scale",
    "explanation": "Rutherford's model could not explain the stability of atoms (Maxwell's electromagnetic theory predicted accelerating revolving electrons should spiral into nucleus in 10⁻⁸ s) and could not explain line spectra.",
    "alsoRemember": "Alpha particle is a doubly ionized Helium atom (⁴₂He²⁺) containing 2 protons and 2 neutrons.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.2.",
    "neetTrap": "Nuclear radius (10⁻¹⁵ m) is 100,000 times SMALLER than atomic radius (10⁻¹⁰ m).",
    "tags": [
      "Chemistry",
      "Rutherford",
      "Alpha Scattering",
      "Nucleus",
      "Class 11"
    ],
    "quiz": {
      "question": "What is the approximate ratio of the radius of an atom (~10⁻¹⁰ m) to the radius of its nucleus (~10⁻¹⁵ m)?",
      "options": [
        "10³",
        "10⁵",
        "10¹⁰",
        "10¹⁵"
      ],
      "answerIndex": 1,
      "explanation": "Ratio = 10⁻¹⁰ / 10⁻¹⁵ = 10⁵ (the atom is 100,000 times larger in radius than its nucleus)."
    }
  },
  {
    "id": "chem-ch02-13",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-2",
    "topicTitle": "Shapes of d-Orbitals: Axial vs Non-Axial",
    "mnemonicNumber": 13,
    "title": "5 d-Orbitals: Non-Axial (dxy, dyz, dxz) vs Axial (dx²-y², dz²)",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "classification",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "Non-Axial t2g (Lobes between axes: dxy, dyz, dxz) | Axial eg (Lobes lie ON axes: dx²-y² along x/y, dz² along z axis with a donut ring!)",
    "memoryHook": "dxy, dyz, dxz point between axes at 45°; dx²-y² points directly along x and y axes; dz² points along z axis with an equatorial doughnut collar!",
    "fact": "Shapes of 5 d-orbitals (l = 2, double dumbbell): 1. Non-axial orbitals (t2g set in CFT): dxy, dyz, dxz (lobes lie in between the coordinate axes). 2. Axial orbitals (eg set in CFT): dx²-y² (4 lobes lie directly along X and Y axes) and dz² (2 lobes lie along Z axis with a circular doughnut/torus electron ring in XY plane).",
    "breakdown": [
      {
        "key": "dxy, dyz, dxz (t2g)",
        "label": "Non-axial; lobes point at 45° between the Cartesian axes; 2 planar nodal sheets"
      },
      {
        "key": "dx²-y² (eg)",
        "label": "Axial; lobes lie directly on X and Y axes; 2 nodal planes at 45°"
      },
      {
        "key": "dz² (eg)",
        "label": "Axial; lobes along Z axis + doughnut ring in XY plane; 2 nodal CONES"
      }
    ],
    "doodleBadge": "t2g = Between Axes\neg = Along Axes (dx²-y², dz²)",
    "doodleSubtext": "d-Orbital Geometry",
    "explanation": "In octahedral coordination complexes, ligands approach along X, Y, Z axes, causing greater electrostatic repulsion on axial eg orbitals (dx²-y², dz²), splitting them to higher energy.",
    "alsoRemember": "dz² is the only d-orbital with a doughnut-shaped electron density collar in the xy-plane.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.1 & Class 12 Coordination.",
    "neetTrap": "dz² has ZERO planar nodes; it possesses TWO NODAL CONES.",
    "tags": [
      "Chemistry",
      "d-Orbitals",
      "Shapes",
      "t2g eg",
      "CFT"
    ],
    "quiz": {
      "question": "Which of the following d-orbitals has electron lobes directed directly along the coordinate axes rather than in between them?",
      "options": [
        "dxy",
        "dyz",
        "dx²-y²",
        "dxz"
      ],
      "answerIndex": 2,
      "explanation": "dx²-y² (and dz²) has its lobes directed directly along the X and Y coordinate axes."
    }
  },
  {
    "id": "chem-ch02-14",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Cathode Rays & J.J. Thomson e/m Ratio",
    "mnemonicNumber": 14,
    "title": "Cathode Rays (Electrons): e/m Ratio = 1.76 × 10¹¹ C/kg (Independent of Gas!)",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "easy",
    "visualType": "notebook",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "Cathode rays (Electrons) e/m ratio is INDEPENDENT of gas in tube! | Anode rays (Protons/Ions) e/m ratio DEPENDS on gas in tube!",
    "memoryHook": "Electrons are identical in every element (constant e/m = 1.76 × 10¹¹ C/kg); Canal/anode rays are positive gas ions, so their e/m changes with gas weight (highest for Hydrogen)!",
    "fact": "1. Cathode Rays: Stream of negatively charged electrons discovered by William Crookes and J.J. Thomson. Charge-to-mass ratio (e/m) = 1.758820 × 10¹¹ C/kg is constant and independent of the nature of the gas or cathode material. 2. Anode Rays (Canal rays): Stream of positively charged ions; e/m depends on the nature of the residual gas inside discharge tube (highest for H₂ gas: proton).",
    "breakdown": [
      {
        "key": "Cathode Rays e/m",
        "label": "Constant = 1.76 × 10¹¹ C/kg (universal for all matter)"
      },
      {
        "key": "Millikan Oil Drop (1909)",
        "label": "Determined exact electron charge e = 1.602 × 10⁻¹⁹ C"
      },
      {
        "key": "Electron Mass Calculation",
        "label": "m = e / (e/m) = (1.602 × 10⁻¹⁹ C) / (1.7588 × 10¹¹ C/kg) = 9.109 × 10⁻³¹ kg"
      },
      {
        "key": "Anode Rays e/m",
        "label": "Variable (heavier gas ion = smaller e/m ratio)"
      }
    ],
    "doodleBadge": "Cathode e/m = Constant\nAnode e/m = Depends on Gas",
    "doodleSubtext": "Discharge Tube Physics",
    "explanation": "Because electrons are universal subatomic constituents of all atoms, cathode ray properties are identical regardless of which gas or electrode metal is used.",
    "alsoRemember": "Mass of electron is roughly 1/1837th the mass of a hydrogen atom.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.1.",
    "neetTrap": "Cathode ray e/m is INDEPENDENT of gas; Anode ray e/m DEPENDS on the gas.",
    "tags": [
      "Chemistry",
      "Cathode Rays",
      "e/m Ratio",
      "Thomson",
      "Millikan"
    ],
    "quiz": {
      "question": "Why is the charge-to-mass ratio (e/m) of cathode rays independent of the gas present in the discharge tube?",
      "options": [
        "Cathode rays contain neutral particles",
        "Cathode rays consist of electrons which are fundamental universal constituents of all atoms",
        "Cathode rays are electromagnetic waves",
        "Gas molecules do not ionize in discharge tubes"
      ],
      "answerIndex": 1,
      "explanation": "Electrons are universal subatomic particles common to all atoms, giving a constant e/m ratio."
    }
  },
  {
    "id": "chem-ch02-15",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Isotopes, Isobars, Isotones, Isoelectronic Species",
    "mnemonicNumber": 15,
    "title": "Nuclear Terms: Isotopes (Same Z), Isobars (Same A), Isotones (Same N), Isoelectronic (Same e⁻)",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "classification",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "IsotoPes (Same Protons Z) | IsoBArs (Same Mass number A) | IsotoNes (Same Neutrons N) | Isoelectronic (Same Electrons e⁻)",
    "memoryHook": "IsotoPes have same P (Protons); IsoBArs have same A (Mass); IsotoNes have same N (Neutrons); Isoelectronic have same Electrons!",
    "fact": "Nuclear terms: 1. Isotopes: Same atomic number Z, different mass number A (¹H, ²H, ³H; ¹²C, ¹⁴C). 2. Isobars: Same mass number A, different atomic number Z (⁴⁰₁₈Ar and ⁴⁰₂₀Ca). 3. Isotones: Same number of neutrons (A - Z) (e.g. ¹⁴₆C and ¹⁶₈O both have 8 neutrons). 4. Isoelectronic species: Same number of electrons (N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺, Al³⁺ all have 10 electrons).",
    "breakdown": [
      {
        "key": "Isotopes",
        "label": "Same Z, different A (identical chemical properties, different physical/mass properties)"
      },
      {
        "key": "Isobars",
        "label": "Same A, different Z (different chemical and physical properties)"
      },
      {
        "key": "Isotones",
        "label": "Same (A - Z) neutron count"
      },
      {
        "key": "Isoelectronic",
        "label": "Same total electrons; ionic radius decreases as nuclear charge Z increases (N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺)"
      }
    ],
    "doodleBadge": "P = Protons (Isotopes)\nA = Mass (Isobars)\nN = Neutrons (Isotones)",
    "doodleSubtext": "Nuclide Terminology",
    "explanation": "Among isoelectronic species, the cation with the highest positive nuclear charge pulls the electron cloud most tightly, having the smallest ionic radius.",
    "alsoRemember": "Protium (¹H) is the only stable nuclide with ZERO neutrons in its nucleus.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.2.",
    "neetTrap": "For isoelectronic species, ionic size decreases as positive charge INCREASES: N³⁻ (largest) > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺ (smallest).",
    "tags": [
      "Chemistry",
      "Isotopes",
      "Isobars",
      "Isotones",
      "Isoelectronic"
    ],
    "quiz": {
      "question": "Which of the following represents a pair of isobars?",
      "options": [
        "¹²₆C and ¹⁴₆C",
        "⁴⁰₁₈Ar and ⁴⁰₂₀Ca",
        "¹⁴₆C and ¹⁶₈O",
        "¹H and ²H"
      ],
      "answerIndex": 1,
      "explanation": "⁴⁰₁₈Ar and ⁴⁰₂₀Ca share the same mass number (A = 40) but have different atomic numbers, making them isobars."
    }
  },
  {
    "id": "chem-ch02-16",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-2",
    "topicTitle": "Schrödinger Wave Equation & Wave Function Meaning",
    "mnemonicNumber": 16,
    "title": "Schrödinger: ĤΨ = EΨ & |Ψ|² is Electron Probability Density",
    "badgeText": "Memory Trick",
    "importance": "High Yield",
    "difficulty": "medium",
    "visualType": "notebook",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Ψ (Wave function amplitude) has NO physical meaning | |Ψ|² (Probability density) gives the chance of finding electron in volume element!",
    "memoryHook": "Ψ is an abstract mathematical wave amplitude with positive and negative phases; but |Ψ|² is always positive and represents the real-world Electron Probability Density!",
    "fact": "Erwin Schrödinger (1926) formulated the wave mechanical model: ĤΨ = EΨ (where Ĥ is the Hamiltonian energy operator, E is total energy, Ψ is the wave function). 1. Ψ by itself has NO physical meaning. 2. The square of the wave function |Ψ|² at any point represents the Probability Density of finding the electron at that point in space. 3. An Orbital is a 3D region of space around nucleus where probability of finding electron is maximum (>90%).",
    "breakdown": [
      {
        "key": "ĤΨ = EΨ",
        "label": "Schrödinger equation describing quantum stationary states"
      },
      {
        "key": "Ψ (Psi)",
        "label": "Orbital wave function; mathematical amplitude (can be positive or negative)"
      },
      {
        "key": "|Ψ|² (Psi squared)",
        "label": "Electron probability density (always positive and physically measurable)"
      },
      {
        "key": "Boundary Surface Diagram",
        "label": "Encloses the 3D volume where electron probability is ~90%"
      }
    ],
    "doodleBadge": "ĤΨ = EΨ\n|Ψ|² = Probability Density",
    "doodleSubtext": "Wave Mechanics",
    "explanation": "Schrödinger equation solutions for the hydrogen atom naturally yield the three spatial quantum numbers: n, l, and m. (Spin quantum number 's' was added later by Dirac).",
    "alsoRemember": "At nodes, |Ψ|² drops to exactly zero.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.6.",
    "neetTrap": "Ψ has NO physical meaning; only |Ψ|² represents electron probability density.",
    "tags": [
      "Chemistry",
      "Schrodinger",
      "Wave Function",
      "Probability Density",
      "Orbitals"
    ],
    "quiz": {
      "question": "In quantum mechanics, which mathematical term represents the physical probability density of finding an electron at a point in an atom?",
      "options": [
        "Ψ",
        "|Ψ|²",
        "Ĥ",
        "dΨ/dx"
      ],
      "answerIndex": 1,
      "explanation": "|Ψ|² represents the probability density of finding an electron at a specific position in space."
    }
  },
  {
    "id": "chem-ch02-17",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Electromagnetic Spectrum Frequency Order",
    "mnemonicNumber": 17,
    "title": "EM Spectrum Order: Cosmic → Gamma → X → UV → Visible → IR → Micro → Radio",
    "badgeText": "Memory Trick",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#EFFBF4",
    "badgeColor": "#3DBE75",
    "mnemonic": "C-G-X-U-V-I-M-R: Cosmic Rays → Gamma Rays → X-Rays → Ultraviolet → Visible (VIBGYOR 400-700nm) → Infrared → Microwaves → Radio waves",
    "memoryHook": "Cosmic & Gamma have highest frequency (shortest wavelength); Radio waves have lowest frequency (longest wavelength)!",
    "fact": "Electromagnetic spectrum in order of decreasing frequency / increasing wavelength: Cosmic rays > Gamma rays (10⁻¹² m) > X-rays (10⁻¹⁰ m) > UV rays (10⁻⁸ m) > Visible light (400–700 nm) > Infrared (10⁻⁴ m) > Microwaves (10⁻² m) > Radio waves (10²–10⁴ m).",
    "breakdown": [
      {
        "key": "Gamma Rays (γ)",
        "label": "Highest frequency (~10²⁰ Hz), highest energy photon, shortest wavelength"
      },
      {
        "key": "X-Rays",
        "label": "Wavelength ~1 Å (used for crystal structure diffraction)"
      },
      {
        "key": "Visible Spectrum",
        "label": "400 nm (Violet) to 700 nm (Red) (VIBGYOR)"
      },
      {
        "key": "Radio Waves",
        "label": "Longest wavelength (~10³ m), lowest frequency, lowest photon energy"
      }
    ],
    "doodleBadge": "γ > X > UV > Vis > IR > Micro > Radio",
    "doodleSubtext": "EM Spectrum Ladder",
    "explanation": "All electromagnetic waves travel at the exact same speed in vacuum: c = 3.0 × 10⁸ m/s. c = ν * λ.",
    "alsoRemember": "Microwaves are used for radar and cooking (exciting rotational modes of water molecules).",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.3, Figure 2.4.",
    "neetTrap": "Red light has the LONGEST wavelength (~700 nm) and LOWEST energy in visible spectrum; Violet light has the SHORTEST wavelength (~400 nm) and HIGHEST energy.",
    "tags": [
      "Chemistry",
      "EM Spectrum",
      "Gamma Rays",
      "Radio Waves",
      "Wavelength"
    ],
    "quiz": {
      "question": "Which of the following electromagnetic radiations has the shortest wavelength and highest photon energy?",
      "options": [
        "Radiowaves",
        "Infrared rays",
        "X-rays",
        "Gamma rays"
      ],
      "answerIndex": 3,
      "explanation": "Gamma rays have the highest frequency and shortest wavelength in the electromagnetic spectrum."
    }
  },
  {
    "id": "chem-ch02-18",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-1",
    "topicTitle": "Rydberg Constant & Longest/Shortest Wavelength Tricks",
    "mnemonicNumber": 18,
    "title": "Spectral Line Calculations: Series Limit (Shortest λ: n2 = ∞) vs 1st Line (Longest λ: n2 = n1 + 1)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "medium",
    "visualType": "formula",
    "cardColor": "#DDF7E8",
    "badgeColor": "#3DBE75",
    "mnemonic": "First Line / α-Line = Longest λ & Lowest Energy (n2 = n1 + 1) | Series Limit / Last Line = Shortest λ & Highest Energy (n2 = ∞)",
    "memoryHook": "For Lyman: 1st line (longest λ) is n=2 to n=1; Series limit (shortest λ) is n=∞ to n=1 (λ_min = 1/R = 912 Å)!",
    "fact": "Rydberg Equation: 1/λ = R * Z² * (1/n1² - 1/n2²), where R = 109,677 cm⁻¹ ≈ 1.097 × 10⁷ m⁻¹ (1/R ≈ 912 Å). 1. Longest wavelength (Minimum Energy / First line): n2 = n1 + 1. 2. Shortest wavelength (Maximum Energy / Series Limit / Marginal line): n2 = ∞, so 1/λ_max_energy = R * Z² * (1/n1² - 0) = RZ² / n1².",
    "breakdown": [
      {
        "key": "Rydberg Constant R",
        "label": "1.097 × 10⁷ m⁻¹ (1/R = 911.6 Å ≈ 912 Å)"
      },
      {
        "key": "Shortest λ in Lyman (Series limit)",
        "label": "n1=1, n2=∞ → 1/λ = R(1/1 - 0) → λ = 1/R = 912 Å"
      },
      {
        "key": "Longest λ in Lyman (1st line / H_α)",
        "label": "n1=1, n2=2 → 1/λ = R(1/1 - 1/4) = 3R/4 → λ = 4/(3R) = 1216 Å"
      },
      {
        "key": "Balmer Series Limit",
        "label": "n1=2, n2=∞ → λ = 4/R = 4 * 912 Å = 3648 Å"
      }
    ],
    "doodleBadge": "Longest λ: n2 = n1 + 1\nShortest λ: n2 = ∞",
    "doodleSubtext": "Spectral Limit Rules",
    "explanation": "Transitions from higher levels release more energy; because E = hc/λ, maximum energy transition (n2 = ∞) gives the shortest wavelength.",
    "alsoRemember": "The ratio of longest to shortest wavelength in Lyman series is (4/3R) / (1/R) = 4/3 = 1.33.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2, Section 2.4.",
    "neetTrap": "The \"Series Limit\" corresponds to the SHORTEST wavelength and HIGHEST frequency/energy (n2 = ∞).",
    "tags": [
      "Chemistry",
      "Rydberg Formula",
      "Spectral Lines",
      "Series Limit"
    ],
    "quiz": {
      "question": "What is the ratio of the longest wavelength to the shortest wavelength in the Lyman series of the hydrogen spectrum?",
      "options": [
        "4/3",
        "9/5",
        "16/15",
        "4/1"
      ],
      "answerIndex": 0,
      "explanation": "Longest λ (n=2 to 1): 1/λ = R(1 - 1/4) = 3R/4 → λ_max = 4/3R. Shortest λ (n=∞ to 1): λ_min = 1/R. Ratio = (4/3R) / (1/R) = 4/3."
    }
  },
  {
    "id": "chem-ch02-19",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-2",
    "topicTitle": "Magnetic Moment Formula",
    "mnemonicNumber": 19,
    "title": "Spin-Only Magnetic Moment: μ = √(n(n + 2)) Bohr Magnetons (BM)",
    "badgeText": "Formula Aid",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "formula",
    "cardColor": "#FFE681",
    "badgeColor": "#FF8D78",
    "mnemonic": "μ = √(n(n + 2)) BM | Trick: Decimal matches n! (n=1 → 1.73 BM, n=2 → 2.83 BM, n=3 → 3.87 BM, n=4 → 4.90 BM, n=5 → 5.92 BM)",
    "memoryHook": "The magnetic moment in Bohr Magnetons (BM) always starts with the integer 'n' (number of unpaired electrons)! If μ = 3.87 BM, n is instantly 3!",
    "fact": "The spin-only magnetic moment is given by: μ = √(n(n + 2)) BM (where n = number of unpaired electrons, and BM = Bohr Magneton = eh / (4πm) = 9.27 × 10⁻²⁴ J/T). 1. Diamagnetic: n = 0 (all paired electrons, μ = 0, weakly repelled by magnetic field). 2. Paramagnetic: n ≥ 1 (contains unpaired electrons, attracted by magnetic field).",
    "breakdown": [
      {
        "key": "n = 1",
        "label": "√(1 × 3) = √3 = 1.73 BM"
      },
      {
        "key": "n = 2",
        "label": "√(2 × 4) = √8 = 2.83 BM"
      },
      {
        "key": "n = 3",
        "label": "√(3 × 5) = √15 = 3.87 BM (e.g. Cr³⁺, Fe³⁺ low spin)"
      },
      {
        "key": "n = 4",
        "label": "√(4 × 6) = √24 = 4.90 BM (e.g. Fe²⁺ high spin)"
      },
      {
        "key": "n = 5",
        "label": "√(5 × 7) = √35 = 5.92 BM (e.g. Fe³⁺ high spin, Mn²⁺)"
      }
    ],
    "doodleBadge": "μ = √(n(n+2)) BM\n1.73 · 2.83 · 3.87 · 4.90 · 5.92",
    "doodleSubtext": "Magnetic Moment Shortcut",
    "explanation": "Fe³⁺ (3d⁵ high spin) has n = 5 unpaired electrons, giving μ = √(5 × 7) = √35 = 5.92 BM.",
    "alsoRemember": "Diamagnetic substances have all electrons paired and show zero net magnetic moment.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2 & Class 12 d-Block.",
    "neetTrap": "If the question gives a magnetic moment like 4.9 BM, the number of unpaired electrons is immediately n = 4 (just take the integer before the decimal!).",
    "tags": [
      "Chemistry",
      "Magnetic Moment",
      "Paramagnetism",
      "Bohr Magneton"
    ],
    "quiz": {
      "question": "A divalent transition metal ion M²⁺ has a spin-only magnetic moment of 4.90 BM. How many unpaired electrons does it possess?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answerIndex": 2,
      "explanation": "Using the integer shortcut, μ = 4.90 BM corresponds to n = 4 unpaired electrons (since √(4 * 6) = √24 = 4.90 BM)."
    }
  },
  {
    "id": "chem-ch02-20",
    "subject": "chemistry",
    "chapterId": "chem-ch-02",
    "chapterNumber": 2,
    "chapterTitle": "Structure of Atom",
    "topicId": "chem-top-2-3",
    "topicTitle": "Complete Atomic Structure Master Map",
    "mnemonicNumber": 20,
    "title": "Atomic Structure Master Map: Discovery → Bohr → Wave Mechanics → Quantum Numbers",
    "badgeText": "Must Know",
    "importance": "Must Know",
    "difficulty": "easy",
    "visualType": "sequence",
    "cardColor": "#F7F0FF",
    "badgeColor": "#A66CFF",
    "mnemonic": "Thomson (Plum Pudding) → Rutherford (Nucleus) → Bohr (Quantized Orbits E=-13.6Z²/n²) → de Broglie (λ=h/p) + Heisenberg (Δx·Δp≥h/4π) → Schrödinger Orbitals (n, l, m, s)",
    "memoryHook": "The 5 historical leaps of atomic physics: 1. Electron Discovery → 2. Nuclear Atom → 3. Bohr Quantum Orbits → 4. Wave-Particle Duality → 5. Quantum Mechanical Electron Cloud!",
    "fact": "Complete summary of Chapter 2: 1. Subatomic particles: electron (e/m = 1.76 × 10¹¹ C/kg, e = 1.6 × 10⁻¹⁹ C), proton, neutron. 2. Bohr Model: r = 0.529 n²/Z Å, E = -13.6 Z²/n² eV, Balmer visible series. 3. Dual Nature: de Broglie λ = h/mv, Heisenberg Δx·Δp ≥ h/4π. 4. Quantum Numbers: n (size), l (shape, nodes = l), m (orientation), s (spin). 5. Rules: Aufbau (n+l), Pauli (max 2 opp), Hund (parallel first), Cr/Cu exceptions.",
    "breakdown": [
      {
        "key": "Part 1: Historical Models",
        "label": "Rutherford alpha scattering, nuclear discovery (10⁻¹⁵ m)"
      },
      {
        "key": "Part 2: Bohr & Hydrogen Spectrum",
        "label": "Rydberg formula, Lyman (UV), Balmer (Visible), Paschen (IR)"
      },
      {
        "key": "Part 3: Quantum Foundations",
        "label": "Planck E=hν, Photoelectric hν = hν₀ + K.E., de Broglie λ=h/mv, Heisenberg Δx·Δp≥h/4π"
      },
      {
        "key": "Part 4: Quantum Mechanical Atom",
        "label": "Schrödinger ĤΨ = EΨ, |Ψ|² probability, Quantum numbers (n, l, m, s), Aufbau, Pauli, Hund"
      }
    ],
    "doodleBadge": "Bohr → de Broglie →\nHeisenberg → Schrödinger",
    "doodleSubtext": "Chapter 2 Master Map",
    "explanation": "Understanding the shift from classical deterministic orbits to probabilistic 3D electron cloud wave functions is the central theme of modern atomic chemistry.",
    "alsoRemember": "All electronic configurations in chemistry follow these 4 quantum mechanical rules.",
    "ncertConnection": "NCERT Class 11 Chemistry Chapter 2.",
    "neetTrap": "Remember that single-electron atoms (H, He⁺, Li²⁺) do NOT follow the (n + l) rule; their orbital energies depend strictly on 'n'.",
    "tags": [
      "Chemistry",
      "Atomic Structure",
      "Summary",
      "Master Map"
    ],
    "quiz": {
      "question": "Which of the following sets of quantum numbers is NOT permitted for an electron in an atom?",
      "options": [
        "n = 3, l = 2, m = -1, s = +½",
        "n = 2, l = 2, m = 0, s = -½",
        "n = 4, l = 0, m = 0, s = +½",
        "n = 3, l = 1, m = +1, s = -½"
      ],
      "answerIndex": 1,
      "explanation": "The azimuthal quantum number l can only have values from 0 to n - 1. For n = 2, l can only be 0 or 1; l = 2 is impossible."
    }
  }
];
