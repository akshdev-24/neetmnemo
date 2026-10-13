export const CHAPTERS = [
  // =========================================================================
  // PHYSICS (OFFICIAL NEET UG FULL SYLLABUS)
  // =========================================================================
  {
    id: 'phy-ch-01',
    subject: 'physics',
    number: 1,
    title: 'Physical World and Measurement',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'ruler',
    description: 'Units, dimensions, errors, and SI base standards.',
    topics: [
      { id: 'phy-top-1-1', title: 'Units and Dimensions (SMKAMCd)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-1-2', title: 'Dimensional Analysis & Applications', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'phy-top-1-3', title: 'Errors & Significant Figures', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-02',
    subject: 'physics',
    number: 2,
    title: 'Kinematics',
    classLevel: 11,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'runner',
    description: 'Motion in straight line, projectile motion, and relative velocity.',
    topics: [
      { id: 'phy-top-2-1', title: 'Equations of Motion (SUVAT)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-2-2', title: 'Projectile Motion & Trajectory', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-2-3', title: 'Relative Velocity in 2D', keyConcepts: 2, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-03',
    subject: 'physics',
    number: 3,
    title: 'Laws of Motion',
    classLevel: 11,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'apple',
    description: "Newton's laws, impulse, friction hierarchy, and circular banking.",
    topics: [
      { id: 'phy-top-3-1', title: "Newton's Three Laws & Free Body Diagrams", keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'phy-top-3-2', title: 'Friction: Static, Limiting & Kinetic', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-3-3', title: 'Banking of Roads & Circular Turns', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-04',
    subject: 'physics',
    number: 4,
    title: 'Work, Energy and Power',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'gears',
    description: 'Work-energy theorem, conservative forces, and spring oscillations.',
    topics: [
      { id: 'phy-top-4-1', title: 'Work-Energy Theorem & Dot Products', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-4-2', title: 'Potential Energy of Springs & Collisions', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-4-3', title: 'Power & Mechanical Efficiency', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-05',
    subject: 'physics',
    number: 5,
    title: 'System of Particles and Rotational Motion',
    classLevel: 11,
    topicsCount: 9,
    mnemonicsCount: 0,
    icon: 'compass',
    description: 'Center of mass, torque, moment of inertia, and angular momentum.',
    topics: [
      { id: 'phy-top-5-1', title: 'Center of Mass Coordinates', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-5-2', title: 'Moment of Inertia Standard Shapes', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-5-3', title: 'Conservation of Angular Momentum', keyConcepts: 2, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-06',
    subject: 'physics',
    number: 6,
    title: 'Gravitation',
    classLevel: 11,
    topicsCount: 8,
    mnemonicsCount: 0,
    icon: 'planet',
    description: "Kepler's laws, acceleration due to gravity variation, and orbital speeds.",
    topics: [
      { id: 'phy-top-6-1', title: "Universal Law & Kepler's Laws", keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-6-2', title: 'Variation of g with Height and Depth', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-6-3', title: 'Escape Velocity vs Orbital Velocity', keyConcepts: 2, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-07',
    subject: 'physics',
    number: 7,
    title: 'Properties of Bulk Matter (Solids & Fluids)',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'gears',
    description: "Hooke's Law, Young's Modulus, Pascal's principle, Bernoulli's theorem, Surface tension.",
    topics: [
      { id: 'phy-top-7-1', title: 'Elasticity & Stress-Strain Curve', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-7-2', title: "Fluid Pressure & Bernoulli's Principle", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-7-3', title: 'Surface Tension & Viscosity (Stokes Law)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-08',
    subject: 'physics',
    number: 8,
    title: 'Thermodynamics & Heat Transfer',
    classLevel: 11,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'flame',
    description: 'Zeroth, First & Second Laws of Thermodynamics, Carnot engine efficiency, Stefan-Boltzmann law.',
    topics: [
      { id: 'phy-top-8-1', title: 'First Law of Thermodynamics (dQ = dU + dW)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-8-2', title: 'Isothermal, Adiabatic, Isobaric & Isochoric Processes', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-8-3', title: 'Carnot Engine & Efficiency Formula', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-09',
    subject: 'physics',
    number: 9,
    title: 'Kinetic Theory of Gases',
    classLevel: 11,
    topicsCount: 8,
    mnemonicsCount: 0,
    icon: 'atom',
    description: 'Gas laws, degrees of freedom, equipartition of energy, RMS velocity, mean free path.',
    topics: [
      { id: 'phy-top-9-1', title: 'Ideal Gas Equation & Gas Speeds (RMS, Avg, Most Probable)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-9-2', title: 'Degrees of Freedom & Molar Heat Capacities (Cp, Cv)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-9-3', title: 'Mean Free Path & Pressure of Ideal Gas', keyConcepts: 2, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-10',
    subject: 'physics',
    number: 10,
    title: 'Oscillations and Waves',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'compass',
    description: 'Simple Harmonic Motion (SHM), spring pendulum, simple pendulum, standing waves, beats, Doppler effect.',
    topics: [
      { id: 'phy-top-10-1', title: 'SHM Kinematics & Time Period Formulas', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-10-2', title: 'Standing Waves in Strings & Organ Pipes', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-10-3', title: 'Beats & Doppler Effect in Sound', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-11',
    subject: 'physics',
    number: 11,
    title: 'Electrostatics',
    classLevel: 12,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'atom',
    description: "Coulomb's Law, electric field, electric dipole, Gauss's theorem, electric potential, capacitance & dielectrics.",
    topics: [
      { id: 'phy-top-11-1', title: "Coulomb's Law & Electric Field Calculations", keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'phy-top-11-2', title: "Gauss's Law & Flux Applications", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-11-3', title: 'Capacitors: Series/Parallel & Dielectric Insertion', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-12',
    subject: 'physics',
    number: 12,
    title: 'Current Electricity',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'circuit',
    description: "Ohm's Law, drift velocity, temperature dependence of resistance, Kirchhoff's laws, Wheatstone bridge, Meter bridge.",
    topics: [
      { id: 'phy-top-12-1', title: "Ohm's Law & Drift Velocity Formula (I = neAvd)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-12-2', title: "Kirchhoff's Junction & Loop Laws", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-12-3', title: 'Wheatstone Bridge & Meter Bridge Balance', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-13',
    subject: 'physics',
    number: 13,
    title: 'Magnetic Effects of Current & Magnetism',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'planet',
    description: "Biot-Savart Law, Ampere's circuital law, Lorentz force on moving charges, Galvanometer to Ammeter/Voltmeter conversion.",
    topics: [
      { id: 'phy-top-13-1', title: 'Biot-Savart Law & Circular Coil Magnetic Field', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-13-2', title: 'Lorentz Magnetic Force & Right Hand Rules', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-13-3', title: 'Galvanometer Conversion (Shunt & Series Multiplier)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-14',
    subject: 'physics',
    number: 14,
    title: 'Electromagnetic Induction & Alternating Currents',
    classLevel: 12,
    topicsCount: 13,
    mnemonicsCount: 0,
    icon: 'gears',
    description: "Faraday's & Lenz's Law, self/mutual inductance, AC circuits, LCR series resonance, quality factor, transformers.",
    topics: [
      { id: 'phy-top-14-1', title: "Faraday's & Lenz's Laws of Induction", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-14-2', title: 'Series LCR Resonance & Impedance Triangle', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'phy-top-14-3', title: 'Transformers: Step-Up vs Step-Down Ratios', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-15',
    subject: 'physics',
    number: 15,
    title: 'Electromagnetic Waves',
    classLevel: 12,
    topicsCount: 6,
    mnemonicsCount: 0,
    icon: 'compass',
    description: 'Displacement current, EM wave characteristics, EM spectrum ordering (Radio to Gamma rays).',
    topics: [
      { id: 'phy-top-15-1', title: 'EM Spectrum Sequence (Radio, Micro, IR, Visible, UV, X, Gamma)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-15-2', title: 'Displacement Current & Maxwell Equations', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-16',
    subject: 'physics',
    number: 16,
    title: 'Ray Optics & Optical Instruments',
    classLevel: 12,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'prism',
    description: "Reflection, refraction, total internal reflection, lens maker's formula, prism minimum deviation, compound microscope.",
    topics: [
      { id: 'phy-top-16-1', title: "Total Internal Reflection & Critical Angle", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-16-2', title: "Lens Maker's Formula & Thin Lens Combinations", keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'phy-top-16-3', title: 'Prism Deviation & Optical Instruments Magnification', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-17',
    subject: 'physics',
    number: 17,
    title: 'Wave Optics',
    classLevel: 12,
    topicsCount: 8,
    mnemonicsCount: 0,
    icon: 'compass',
    description: "Huygens' Principle, interference of light, Young's Double Slit Experiment (YDSE), single slit diffraction.",
    topics: [
      { id: 'phy-top-17-1', title: "Young's Double Slit Experiment (Fringe Width β = λD/d)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-17-2', title: 'Single Slit Diffraction Central Maxima Width', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-18',
    subject: 'physics',
    number: 18,
    title: 'Dual Nature of Matter & Radiation',
    classLevel: 12,
    topicsCount: 8,
    mnemonicsCount: 0,
    icon: 'atom',
    description: "Photoelectric effect, Einstein's photoelectric equation, stopping potential, de Broglie matter wave formula.",
    topics: [
      { id: 'phy-top-18-1', title: "Einstein's Photoelectric Equation (Kmax = hν - Φ)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-18-2', title: 'de Broglie Wavelength (λ = h/p = h/√(2mqV))', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'phy-ch-19',
    subject: 'physics',
    number: 19,
    title: 'Semiconductor Electronics & Devices',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'circuit',
    description: 'Intrinsic vs extrinsic semiconductors, p-n junction diode forward/reverse bias, rectifiers, Zener diode, logic gates.',
    topics: [
      { id: 'phy-top-19-1', title: 'p-n Junction Diode & Half/Full Wave Rectifiers', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'phy-top-19-2', title: 'Zener Diode as Voltage Regulator', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'phy-top-19-3', title: 'Logic Gates Truth Tables (AND, OR, NOT, NAND, NOR)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },

  // =========================================================================
  // CHEMISTRY (OFFICIAL NEET UG FULL SYLLABUS)
  // =========================================================================
  {
    id: 'chem-ch-01',
    subject: 'chemistry',
    number: 1,
    title: 'Some Basic Concepts of Chemistry (Mole Concept)',
    classLevel: 11,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'flask',
    description: 'Mole concept, molar mass, empirical formula, molarity, molality, mole fraction, limiting reagent.',
    topics: [
      { id: 'chem-top-1-1', title: 'Mole Concept Triad (Mass, Moles, Molecules, Volume)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-1-2', title: 'Concentration Terms: Molarity vs Molality', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'chem-top-1-3', title: 'Limiting Reagent Stoichiometry Trick', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-02',
    subject: 'chemistry',
    number: 2,
    title: 'Structure of Atom',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'atom',
    description: 'Bohr model, hydrogen spectrum lines, quantum numbers, Pauli exclusion, Hund rule, Aufbau principle.',
    topics: [
      { id: 'chem-top-2-1', title: 'Hydrogen Spectral Series (Lyman, Balmer, Paschen, Brackett, Pfund)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-2-2', title: 'Quantum Numbers (n, l, m, s) & Orbital Shapes', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-2-3', title: 'Aufbau (n+l) Rule & Electronic Config Exceptions (Cr, Cu)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-03',
    subject: 'chemistry',
    number: 3,
    title: 'Classification of Elements & Periodicity',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'grid',
    description: 'Periodic trends, ionization enthalpy exceptions (N > O, Be > B), electron gain enthalpy, electronegativity.',
    topics: [
      { id: 'chem-top-3-1', title: 'Atomic Radius & Ionic Radii Trends', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-3-2', title: 'Ionization Enthalpy & Subshell Exceptions (N > O, Be > B)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-3-3', title: 'Electronegativity Order (FONClBrISCH)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-04',
    subject: 'chemistry',
    number: 4,
    title: 'Chemical Bonding & Molecular Structure',
    classLevel: 11,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'molecule',
    description: 'VSEPR shapes, hybridization calculation trick, dipole moment, Molecular Orbital Theory (MOT) bond orders.',
    topics: [
      { id: 'chem-top-4-1', title: 'VSEPR Shapes & Lone Pair Geometry', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-4-2', title: 'Hybridization Rapid Calculation Trick (Steric Number)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-4-3', title: 'MOT Bond Order for 14-Electron Systems', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-05',
    subject: 'chemistry',
    number: 5,
    title: 'Chemical Thermodynamics',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flame',
    description: 'State vs path functions, internal energy, enthalpy, Hess law, entropy, Gibbs free energy spontaneity criteria.',
    topics: [
      { id: 'chem-top-5-1', title: 'First Law & Work in Reversible Isothermal vs Adiabatic', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-5-2', title: 'Gibbs Free Energy & Spontaneity (ΔG = ΔH - TΔS)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-5-3', title: 'Hess Law & Standard Enthalpy of Formation', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-06',
    subject: 'chemistry',
    number: 6,
    title: 'Equilibrium (Chemical & Ionic)',
    classLevel: 11,
    topicsCount: 15,
    mnemonicsCount: 0,
    icon: 'beaker',
    description: "Law of mass action, Kp vs Kc relation, Le Chatelier principle, pH calculation, buffer solutions, solubility product Ksp.",
    topics: [
      { id: 'chem-top-6-1', title: 'Kp = Kc(RT)^Δn & Le Chatelier Shifts', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-6-2', title: 'pH of Weak Acids, Bases & Salt Hydrolysis Formulas', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-6-3', title: 'Buffer Solutions (Henderson Equation) & Ksp Precipitation', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-07',
    subject: 'chemistry',
    number: 7,
    title: 'Redox Reactions',
    classLevel: 11,
    topicsCount: 8,
    mnemonicsCount: 0,
    icon: 'atom',
    description: 'Oxidation numbers, balancing redox equations in acidic/basic mediums, disproportionation reactions.',
    topics: [
      { id: 'chem-top-7-1', title: 'Oxidation Number Rules & Exceptions (CrO5 butterfly, H2SO5)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-7-2', title: 'Balancing Redox by Ion-Electron Method', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-08',
    subject: 'chemistry',
    number: 8,
    title: 'Organic Chemistry: Basic Principles & Techniques',
    classLevel: 11,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'IUPAC nomenclature, inductive effect, resonance, hyperconjugation, carbocation/carbanion stability, isomerism.',
    topics: [
      { id: 'chem-top-8-1', title: 'Electronic Effects: +I/-I, +M/-M, Hyperconjugation', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-8-2', title: 'Carbocation, Carbanion & Radical Stability Hierarchy', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-8-3', title: 'Isomerism: Structural & Geometrical (cis/trans, E/Z)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-09',
    subject: 'chemistry',
    number: 9,
    title: 'Hydrocarbons',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flame',
    description: 'Alkanes, Alkenes, Alkynes, Aromaticity (Huckel 4n+2 rule), Markovnikov addition, Ozonolysis, Friedel-Crafts.',
    topics: [
      { id: 'chem-top-9-1', title: 'Markovnikov vs Anti-Markovnikov (Peroxide Effect)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-9-2', title: 'Ozonolysis of Alkenes Trick (Cut Double Bond & Add Oxygen)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-9-3', title: "Aromaticity (Hückel's 4n+2 π-Electron Rule)", keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-10',
    subject: 'chemistry',
    number: 10,
    title: 'Solutions',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flask',
    description: "Raoult's Law, ideal vs non-ideal solutions (positive/negative deviations), colligative properties, Van't Hoff factor i.",
    topics: [
      { id: 'chem-top-10-1', title: "Raoult's Law & Azeotropes (Positive/Negative Deviations)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-10-2', title: 'Colligative Properties (ΔTb, ΔTf, Osmotic Pressure π = iCRT)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-10-3', title: "Van 't Hoff Factor (i) for Association and Dissociation", keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-11',
    subject: 'chemistry',
    number: 11,
    title: 'Electrochemistry',
    classLevel: 12,
    topicsCount: 13,
    mnemonicsCount: 0,
    icon: 'circuit',
    description: "Galvanic cells, Nernst equation, standard reduction potentials, Kohlrausch's law, Faraday's electrolysis laws.",
    topics: [
      { id: 'chem-top-11-1', title: 'Nernst Equation at 298K (Ecell = E° - 0.0591/n log Q)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-11-2', title: "Kohlrausch's Law of Independent Migration", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-11-3', title: "Faraday's Laws of Electrolysis (w = Z·I·t)", keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-12',
    subject: 'chemistry',
    number: 12,
    title: 'Chemical Kinetics',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'compass',
    description: 'Rate law, order and molecularity, integrated rate equations for zero and first order, Arrhenius equation, half-life.',
    topics: [
      { id: 'chem-top-12-1', title: 'First Order Kinetics & Half-Life (t1/2 = 0.693/k)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-12-2', title: 'Zero Order vs First Order Comparison Table', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-12-3', title: 'Arrhenius Equation & Activation Energy (k = A e^-Ea/RT)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-13',
    subject: 'chemistry',
    number: 13,
    title: 'd- and f-Block Elements',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'grid',
    description: 'Transition element electronic configurations, variable oxidation states, lanthanoid contraction, KMnO4 and K2Cr2O7 reactions.',
    topics: [
      { id: 'chem-top-13-1', title: 'Lanthanoid Contraction Causes & Consequences', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-13-2', title: 'Potassium Permanganate (KMnO4) Redox Reactions', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-13-3', title: 'Transition Metal Color & Magnetic Moment (μ = √(n(n+2)))', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-14',
    subject: 'chemistry',
    number: 14,
    title: 'Coordination Compounds',
    classLevel: 12,
    topicsCount: 13,
    mnemonicsCount: 0,
    icon: 'molecule',
    description: "Werner's theory, IUPAC naming, structural/stereoisomerism, Valence Bond Theory, Crystal Field Theory, Spectrochemical series.",
    topics: [
      { id: 'chem-top-14-1', title: 'Spectrochemical Series Ligand Strength (I Brought Clean Clothes...)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-14-2', title: 'Crystal Field Splitting: Octahedral (t2g/eg) vs Tetrahedral', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-14-3', title: 'IUPAC Naming & Isomerism in Coordination Complexes', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-15',
    subject: 'chemistry',
    number: 15,
    title: 'Haloalkanes and Haloarenes',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'beaker',
    description: 'SN1 vs SN2 nucleophilic substitution mechanisms, stereochemistry, elimination (Saytzeff rule), Grignard reagent.',
    topics: [
      { id: 'chem-top-15-1', title: 'SN1 vs SN2 Nucleophilic Substitution Mechanism Battle', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-15-2', title: 'Saytzeff vs Hofmann Elimination Rule', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-15-3', title: 'Haloarene Low Reactivity towards Nucleophilic Substitution', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-16',
    subject: 'chemistry',
    number: 16,
    title: 'Alcohols, Phenols and Ethers',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flask',
    description: "Lucas test, Reimer-Tiemann reaction, Kolbe's reaction, acidity of phenols, Williamson ether synthesis.",
    topics: [
      { id: 'chem-top-16-1', title: "Lucas Test for 1°, 2°, 3° Alcohols (Immediate vs 5-min Turbidity)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-16-2', title: "Reimer-Tiemann & Kolbe's Synthesis of Salicylic Acid", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-16-3', title: 'Williamson Ether Synthesis (1° Halide + Alkoxide)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-17',
    subject: 'chemistry',
    number: 17,
    title: 'Aldehydes, Ketones and Carboxylic Acids',
    classLevel: 12,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'flask',
    description: "Aldol, Cannizzaro, Tollens' test, Fehling's test, Clemmensen, Wolff-Kishner, HVZ reaction, carboxylic acidity.",
    topics: [
      { id: 'chem-top-17-1', title: 'Aldol vs Cannizzaro (Alpha-H Test)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'chem-top-17-2', title: "Tollens' Silver Mirror & Fehling's Cu2O Red Precipitate Tests", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-17-3', title: 'Clemmensen (Zn-Hg/HCl) vs Wolff-Kishner (NH2NH2/KOH) Reduction', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-18',
    subject: 'chemistry',
    number: 18,
    title: 'Amines / Nitrogen-Containing Organic Compounds',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'beaker',
    description: 'Basicity of amines in gas vs aqueous phase, Hoffmann bromamide, Carbylamine isocyanide test, Hinsberg test, Diazonium salts.',
    topics: [
      { id: 'chem-top-18-1', title: 'Basicity Order of Aliphatic Amines (2° > 1° > 3° vs 2° > 3° > 1°)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-18-2', title: 'Hoffmann Bromamide Degradation & Carbylamine Foul Smell Test', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-18-3', title: 'Hinsberg Test for 1°, 2°, 3° Amines & Diazonium Coupling Reactions', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-19',
    subject: 'chemistry',
    number: 19,
    title: 'Biomolecules',
    classLevel: 12,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'Monosaccharides (Glucose/Fructose), Essential amino acids (PVT TIM HaLL), peptide linkage, DNA/RNA bases, Vitamins solubility.',
    topics: [
      { id: 'chem-top-19-1', title: 'Essential Amino Acids Mnemonic (PVT TIM HaLL)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-19-2', title: 'Fat-Soluble vs Water-Soluble Vitamins (ADEK vs B, C)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'chem-top-19-3', title: 'Purines (A, G) vs Pyrimidines (C, T, U) in DNA & RNA', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'chem-ch-20',
    subject: 'chemistry',
    number: 20,
    title: 'Principles of Practical Chemistry',
    classLevel: 12,
    topicsCount: 8,
    mnemonicsCount: 0,
    icon: 'beaker',
    description: 'Qualitative analysis of cations (Groups 0 to VI), anions (Carbonate, Nitrate, Halides), functional group tests.',
    topics: [
      { id: 'chem-top-20-1', title: 'Cation Group Reagents & Precipitate Colors', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'chem-top-20-2', title: 'Brown Ring Test for Nitrate & Chromyl Chloride Test', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },

  // =========================================================================
  // BIOLOGY (OFFICIAL NEET UG FULL SYLLABUS - BOTANY & ZOOLOGY)
  // =========================================================================
  {
    id: 'bio-ch-01',
    subject: 'biology',
    number: 1,
    title: 'The Living World',
    classLevel: 11,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'leaf',
    description: 'Characteristics of life, Binomial nomenclature rules, Taxonomic hierarchy (KPCOFGS).',
    topics: [
      { id: 'bio-top-1-1', title: 'Taxonomic Hierarchy (King Philip Came Over For Good Soup)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-1-2', title: 'Binomial Nomenclature Rules (Linnaeus)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'bio-top-1-3', title: 'Taxonomical Aids & Herbaria Standards', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-02',
    subject: 'biology',
    number: 2,
    title: 'Biological Classification',
    classLevel: 11,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'microscope',
    description: 'Whittaker Five Kingdoms, Archaebacteria, Cyanobacteria, Dinoflagellates, Euglenoids, Slime moulds, Fungi classes, Viruses & Viroids.',
    topics: [
      { id: 'bio-top-2-1', title: 'Whittaker 5-Kingdom Classification Criteria', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-2-2', title: 'Fungi Classes (Phyco, Asco, Basidio, Deutero)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-2-3', title: 'Viruses, Viroids (Free RNA) & Prions (Infectious Protein)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-03',
    subject: 'biology',
    number: 3,
    title: 'Plant Kingdom',
    classLevel: 11,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'leaf',
    description: 'Algae classes (Chlorophyceae, Phaeophyceae, Rhodophyceae pigments & storage), Bryophytes, Pteridophytes, Gymnosperms.',
    topics: [
      { id: 'bio-top-3-1', title: 'Algae Pigments & Storage (Chlorophyceae, Phaeo, Rhodo)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-3-2', title: 'Bryophytes: Liverworts & Mosses (Gametophyte dominant)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-3-3', title: 'Pteridophytes & Gymnosperms (Coralloid roots, Mycorrhiza)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-04',
    subject: 'biology',
    number: 4,
    title: 'Animal Kingdom',
    classLevel: 11,
    topicsCount: 15,
    mnemonicsCount: 0,
    icon: 'heart',
    description: 'Basis of classification (Coelom, Symmetry, Notochord), Porifera to Chordata classes with key diagnostic features.',
    topics: [
      { id: 'bio-top-4-1', title: 'Symmetry & Coelom Types (Acoelomate, Pseudocoelomate, Eucoelomate)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-4-2', title: 'Non-Chordates Phyla Highlights (Cnidaria to Echinodermata)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-4-3', title: 'Chordata Classes (Chondrichthyes vs Osteichthyes, Amphibia to Mammals)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-05',
    subject: 'biology',
    number: 5,
    title: 'Morphology of Flowering Plants',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flower',
    description: 'Root modifications, stem modifications, phyllotaxy, aestivation, placentation, floral formula of families.',
    topics: [
      { id: 'bio-top-5-1', title: 'Aestivation Types (Valvate, Twisted, Imbricate, Vexillary)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-5-2', title: 'Placentation Types (Marginal, Axile, Parietal, Free-Central, Basal)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-5-3', title: 'Floral Families: Solanaceae, Fabaceae & Liliaceae Formula', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-06',
    subject: 'biology',
    number: 6,
    title: 'Anatomy of Flowering Plants',
    classLevel: 11,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'leaf',
    description: 'Meristematic & permanent tissues, xylem & phloem elements, dicot vs monocot root/stem/leaf anatomy, secondary growth.',
    topics: [
      { id: 'bio-top-6-1', title: 'Complex Tissues: Xylem vs Phloem Elements', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-6-2', title: 'Dicot vs Monocot Stem Anatomy (Ring vs Scattered Bundles)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'bio-top-6-3', title: 'Secondary Growth: Vascular Cambium & Cork Cambium', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-07',
    subject: 'biology',
    number: 7,
    title: 'Structural Organisation in Animals',
    classLevel: 11,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'heart',
    description: 'Epithelial, connective, muscular and neural tissues, morphology and anatomy of Frog.',
    topics: [
      { id: 'bio-top-7-1', title: 'Epithelial Tissues (Squamous, Cuboidal, Columnar, Ciliated)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-7-2', title: 'Connective Tissues (Areolar, Adipose, Cartilage, Bone, Blood)', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'bio-top-7-3', title: 'Frog Morphology & Organ Systems (Digestive, Circulatory, Excretory)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-08',
    subject: 'biology',
    number: 8,
    title: 'Cell: The Unit of Life',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'cell',
    description: 'Cell theory, prokaryotic vs eukaryotic cells, cell membrane fluid mosaic model, endomembrane system, ribosomes, nucleus.',
    topics: [
      { id: 'bio-top-8-1', title: 'Fluid Mosaic Model & Membrane Transport', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-8-2', title: 'Endomembrane System (GERL: Golgi, ER, Ribosomes, Lysosomes)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-8-3', title: 'Semi-Autonomous Organelles: Mitochondria & Chloroplasts (70S Ribosomes)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-09',
    subject: 'biology',
    number: 9,
    title: 'Biomolecules',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'Primary and secondary metabolites, proteins structure levels, nucleic acids, enzyme catalysis mechanism, competitive inhibition.',
    topics: [
      { id: 'bio-top-9-1', title: 'Secondary Metabolites Table (Alkaloids, Terpenoids, Toxins, Lectins)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-9-2', title: 'Protein Structure (Primary, Secondary, Tertiary, Quaternary)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-9-3', title: 'Enzyme Inhibition (Competitive: Km increases, Vmax constant)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-10',
    subject: 'biology',
    number: 10,
    title: 'Cell Cycle and Cell Division',
    classLevel: 11,
    topicsCount: 13,
    mnemonicsCount: 0,
    icon: 'cell',
    description: 'Interphase (G1, S, G2), Mitosis stages (PMAT), Meiosis I Prophase stages (LZPDD: Leptotene to Diakinesis), Meiosis II.',
    topics: [
      { id: 'bio-top-10-1', title: 'Mitosis Stages Order: PMAT (Pro, Meta, Ana, Telo)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-10-2', title: 'Meiosis I Prophase I Stages (LZPDD: Leptotene to Diakinesis)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-10-3', title: 'Cell Cycle Checkpoints & DNA Replication in S Phase', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-11',
    subject: 'biology',
    number: 11,
    title: 'Photosynthesis in Higher Plants',
    classLevel: 11,
    topicsCount: 13,
    mnemonicsCount: 0,
    icon: 'leaf',
    description: 'Light reaction, Z-scheme, cyclic vs non-cyclic photophosphorylation, Calvin cycle (C3), C4 pathway, photorespiration.',
    topics: [
      { id: 'bio-top-11-1', title: 'Z-Scheme & Photosystem I vs II (P700 vs P680)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-11-2', title: 'Calvin C3 Cycle (Carboxylation, Reduction, Regeneration)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-11-3', title: 'Hatch-Slack C4 Pathway (Kranz Anatomy, PEP Case)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-12',
    subject: 'biology',
    number: 12,
    title: 'Respiration in Plants',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flame',
    description: 'Glycolysis (EMP pathway 10 steps), fermentation, Krebs cycle (TCA), Electron Transport System (ETS), respiratory quotient RQ.',
    topics: [
      { id: 'bio-top-12-1', title: 'Glycolysis 10 Steps (EMP Pathway Net 2 ATP + 2 NADH)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-12-2', title: "Krebs TCA Cycle Intermediates (Can I Ask Some Sweet Fudge Muffin)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-12-3', title: 'ETS Complexes & Respiratory Quotient Values', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-13',
    subject: 'biology',
    number: 13,
    title: 'Plant Growth and Development',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flower',
    description: 'Phytohormones: Auxin, Gibberellin, Cytokinin, Ethylene, Abscisic acid (ABA), photoperiodism, vernalization.',
    topics: [
      { id: 'bio-top-13-1', title: 'Plant Hormones & Master Functions (Auxin, GA, Cytokinin, Ethylene, ABA)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-13-2', title: 'Auxin vs Cytokinin Shoot/Root Differentiation Ratio', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-13-3', title: 'Photoperiodism: Short-day vs Long-day Plants', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-14',
    subject: 'biology',
    number: 14,
    title: 'Breathing and Exchange of Gases',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'activity',
    description: 'Human respiratory system, mechanism of breathing, respiratory volumes (TV, IRV, ERV, RV), Oxygen-Hemoglobin curve.',
    topics: [
      { id: 'bio-top-14-1', title: 'Respiratory Volumes & Capacities Table (TV, IRV, ERV, RV, VC, TLC)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-14-2', title: 'Oxygen-Hemoglobin Dissociation Curve (Bohr Effect Right Shift)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-14-3', title: 'CO2 Transport in Blood (70% as Bicarbonate)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-15',
    subject: 'biology',
    number: 15,
    title: 'Body Fluids and Circulation',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'heart',
    description: 'Blood groups (ABO & Rh), cardiac cycle phases, heart valves (Try Before You Buy), ECG waves (P, QRS, T), double circulation.',
    topics: [
      { id: 'bio-top-15-1', title: 'Heart Valve Sequence (Try Before You Buy)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-15-2', title: 'ECG Waves Interpretation (P = Atrial Depol, QRS = Ventricular, T = Repol)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-15-3', title: 'Blood Clotting Cascade Factors (Prothrombin to Fibrin)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-16',
    subject: 'biology',
    number: 16,
    title: 'Excretory Products and Their Elimination',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'beaker',
    description: 'Nephron structure, urine formation (Filtration, Reabsorption, Secretion), counter-current mechanism, RAAS hormone control.',
    topics: [
      { id: 'bio-top-16-1', title: 'Nephron Regions & Selective Reabsorption (PCT 70-80%)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-16-2', title: 'Counter-Current Mechanism in Henle Loop & Vasa Recta', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-16-3', title: 'RAAS System (Renin-Angiotensin-Aldosterone) & ANF Antagonist', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-17',
    subject: 'biology',
    number: 17,
    title: 'Locomotion and Movement',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'runner',
    description: 'Skeletal muscle sarcomere structure, sliding filament theory of contraction, human skeletal bones count (206), joint types.',
    topics: [
      { id: 'bio-top-17-1', title: 'Sarcomere Structure (A-band, I-band, Z-line, H-zone)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-17-2', title: 'Sliding Filament Theory Steps (Calcium & Troponin C)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-17-3', title: 'Human Bones Breakdown (80 Axial + 126 Appendicular) & Synovial Joints', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-18',
    subject: 'biology',
    number: 18,
    title: 'Neural Control and Coordination',
    classLevel: 11,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'brain',
    description: 'Neuron structure, resting membrane potential, generation & conduction of nerve impulse, synapse transmission, human brain.',
    topics: [
      { id: 'bio-top-18-1', title: 'Action Potential & Na+/K+ Pump (3 Na+ OUT, 2 K+ IN)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-18-2', title: 'Synaptic Transmission & Neurotransmitters', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-18-3', title: 'Human Brain Regions: Forebrain, Midbrain, Hindbrain Functions', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-19',
    subject: 'biology',
    number: 19,
    title: 'Chemical Coordination and Integration (Endocrine)',
    classLevel: 11,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'beaker',
    description: 'Endocrine glands: Hypothalamus, Pituitary (Anterior/Posterior), Thyroid, Parathyroid, Adrenal, Pancreas, hormone mechanisms.',
    topics: [
      { id: 'bio-top-19-1', title: 'Anterior Pituitary Hormones (FLAT PIG: FSH, LH, ACTH, TSH, PRL, GH)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-19-2', title: 'Adrenal Cortex Layers (GFR: Glomerulosa, Fasciculata, Reticularis)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-19-3', title: 'Calcium Balance: PTH (Hypercalcemic) vs Calcitonin (Hypocalcemic)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-20',
    subject: 'biology',
    number: 20,
    title: 'Sexual Reproduction in Flowering Plants',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'flower',
    description: 'Microsporogenesis, megasporogenesis (7-celled 8-nucleate embryo sac), pollination types, double fertilization, apomixis.',
    topics: [
      { id: 'bio-top-20-1', title: 'Mature Female Gametophyte Embryo Sac (7-Celled, 8-Nucleate)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-20-2', title: 'Double Fertilization (Syngamy 2n + Triple Fusion 3n PEN)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-20-3', title: 'Apomixis & Polyembryony in Citrus and Mango', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-21',
    subject: 'biology',
    number: 21,
    title: 'Human Reproduction',
    classLevel: 12,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'heart',
    description: 'Spermatogenesis vs oogenesis stages, menstrual cycle hormones, fertilization, cleavage to blastocyst, parturition reflex.',
    topics: [
      { id: 'bio-top-21-1', title: 'Menstrual Cycle Hormone Surges (LH Surge & Progesterone Secretory Phase)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-21-2', title: 'Spermatogenesis vs Oogenesis Timeline & Polar Bodies', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-21-3', title: 'Parturition & Milk Ejection Reflex (Oxytocin & Prolactin)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-22',
    subject: 'biology',
    number: 22,
    title: 'Reproductive Health',
    classLevel: 12,
    topicsCount: 9,
    mnemonicsCount: 0,
    icon: 'heart',
    description: 'Contraceptive methods, MTP legal conditions, Sexually Transmitted Infections (STIs), Infertility & ART (IVF, ZIFT, GIFT, ICSI).',
    topics: [
      { id: 'bio-top-22-1', title: 'Contraceptive Devices: Copper-T, Progestasert & Saheli non-steroidal', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-22-2', title: 'Assisted Reproductive Technologies (ZIFT vs GIFT vs ICSI vs IUI)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-23',
    subject: 'biology',
    number: 23,
    title: 'Principles of Inheritance and Variation',
    classLevel: 12,
    topicsCount: 15,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'Mendelian ratios, incomplete dominance, codominance, dihybrid cross 9:3:3:1, linkage, chromosomal disorders (Down, Turner, Klinefelter).',
    topics: [
      { id: 'bio-top-23-1', title: 'Mendelian Cross Ratios (Monohybrid 3:1 & Dihybrid 9:3:3:1)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-23-2', title: 'Mendelian Disorders (Sickle Cell Anemia, Thalassemia, Phenylketonuria)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-23-3', title: 'Chromosomal Aneuploidies (Down Syndrome 47,+21, Turner 45,XO, Klinefelter 47,XXY)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-24',
    subject: 'biology',
    number: 24,
    title: 'Molecular Basis of Inheritance',
    classLevel: 12,
    topicsCount: 15,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'DNA structure, Griffith & Hershey-Chase experiments, Meselson-Stahl replication, transcription, genetic code, Lac operon.',
    topics: [
      { id: 'bio-top-24-1', title: 'Central Dogma of Molecular Biology (DNA → RNA → Protein)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-24-2', title: 'Lac Operon Genes & Functions (lac z, y, a Enzymes)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-24-3', title: 'Genetic Code Properties (AUG Start, UAA/UAG/UGA Stop Codons)', keyConcepts: 5, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-25',
    subject: 'biology',
    number: 25,
    title: 'Evolution',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'compass',
    description: 'Origin of life (Miller-Urey experiment), homologous vs analogous organs, adaptive radiation, Hardy-Weinberg equilibrium, human evolution.',
    topics: [
      { id: 'bio-top-25-1', title: 'Homologous (Divergent) vs Analogous (Convergent) Organs', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-25-2', title: "Hardy-Weinberg Principle (p² + 2pq + q² = 1)", keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-25-3', title: 'Human Evolution Sequence (Dryopithecus → Ramapithecus → Australopithecus → H. habilis → H. erectus → Neanderthal → H. sapiens)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-26',
    subject: 'biology',
    number: 26,
    title: 'Human Health and Disease',
    classLevel: 12,
    topicsCount: 14,
    mnemonicsCount: 0,
    icon: 'heart',
    description: 'Pathogens & diseases (Typhoid, Malaria lifecycle, Pneumonia), Innate vs Acquired immunity, Antibody structure (H2L2), AIDS & Cancer.',
    topics: [
      { id: 'bio-top-26-1', title: 'Antibody Structure (H2L2 & Five Classes: GAMED)', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-26-2', title: 'Plasmodium Malaria Lifecycle in Mosquito & Human RBCs', keyConcepts: 5, mnemonicsCount: 0 },
      { id: 'bio-top-26-3', title: 'Innate Immunity Barriers (Physical, Physiological, Cellular, Cytokine)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-27',
    subject: 'biology',
    number: 27,
    title: 'Microbes in Human Welfare',
    classLevel: 12,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'microscope',
    description: 'Household microbes (Lactobacillus, Saccharomyces), industrial fermenters, sewage treatment (BOD), biogas production, biofertilizers.',
    topics: [
      { id: 'bio-top-27-1', title: 'Microbes in Industrial Products (Cyclosporin A by Trichoderma, Statins by Monascus)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-27-2', title: 'Sewage Treatment Plant Stages & BOD Measurement', keyConcepts: 3, mnemonicsCount: 0 },
      { id: 'bio-top-27-3', title: 'Biocontrol Agents (Bacillus thuringiensis Bt, Trichoderma, Baculoviruses)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-28',
    subject: 'biology',
    number: 28,
    title: 'Biotechnology: Principles and Processes',
    classLevel: 12,
    topicsCount: 12,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'Restriction endonucleases palindromes, gel electrophoresis, pBR322 vector cloning sites, Polymerase Chain Reaction (PCR: Denaturation, Annealing, Extension).',
    topics: [
      { id: 'bio-top-28-1', title: 'PCR Three Steps: Denaturation, Annealing, Extension (DAE)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-28-2', title: 'pBR322 Vector Selectable Markers (ampR & tetR Insertional Inactivation)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-28-3', title: 'Gel Electrophoresis (Ethidium Bromide UV Orange Bands)', keyConcepts: 4, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-29',
    subject: 'biology',
    number: 29,
    title: 'Biotechnology and Its Applications',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'dna',
    description: 'Bt cotton mechanism (cryIAc, cryIIAb, cryIAb), RNA interference (RNAi), genetically engineered insulin (Humulin), gene therapy (ADA).',
    topics: [
      { id: 'bio-top-29-1', title: 'Bt Toxin Genes: cryIAc & cryIIAb (Cotton Bollworms) vs cryIAb (Corn Borer)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-29-2', title: 'Human Insulin Production (A & B Chains linked by Disulfide Bonds)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-29-3', title: 'Gene Therapy for ADA Deficiency & Transgenic Animals', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-30',
    subject: 'biology',
    number: 30,
    title: 'Organisms and Populations',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'leaf',
    description: 'Abiotic adaptations, population growth models (Exponential vs Logistic dN/dt = rN(K-N)/K), population interactions (+/-, +/0, -/-).',
    topics: [
      { id: 'bio-top-30-1', title: 'Population Interactions Grid (Mutualism, Commensalism, Parasitism, Amensalism)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-30-2', title: 'Population Growth Curves (Verhulst-Pearl Logistic S-shaped)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-30-3', title: "Gause's Competitive Exclusion Principle & Resource Partitioning", keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-31',
    subject: 'biology',
    number: 31,
    title: 'Ecosystem',
    classLevel: 12,
    topicsCount: 11,
    mnemonicsCount: 0,
    icon: 'globe',
    description: 'Ecosystem structure, primary productivity (GPP vs NPP), decomposition steps (Fragmentation, Leaching, Catabolism, Humification, Mineralization), 10% energy law.',
    topics: [
      { id: 'bio-top-31-1', title: 'Decomposition 5 Steps (FL CHM: Fragmentation, Leaching, Catabolism, Humification, Mineralization)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-31-2', title: 'Ecological Pyramids (Energy Pyramid is ALWAYS Upright)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-31-3', title: 'Primary Productivity: Net Primary Productivity (NPP = GPP - R)', keyConcepts: 3, mnemonicsCount: 0 }
    ]
  },
  {
    id: 'bio-ch-32',
    subject: 'biology',
    number: 32,
    title: 'Biodiversity and Conservation',
    classLevel: 12,
    topicsCount: 10,
    mnemonicsCount: 0,
    icon: 'flower',
    description: 'Species-Area relationship (Alexander von Humboldt log S = log C + Z log A), Causes of biodiversity loss (The Evil Quartet), In-situ vs Ex-situ conservation.',
    topics: [
      { id: 'bio-top-32-1', title: 'Causes of Biodiversity Loss: The Evil Quartet (HIPO)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-32-2', title: 'In-Situ vs Ex-Situ Conservation Examples (National Parks vs Botanical Gardens/Cryopreservation)', keyConcepts: 4, mnemonicsCount: 0 },
      { id: 'bio-top-32-3', title: "Species-Area Relationship (log S = log C + Z log A)", keyConcepts: 2, mnemonicsCount: 0 }
    ]
  }
];
