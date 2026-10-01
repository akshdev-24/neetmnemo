import { PHYSICS_MNEMONICS } from './mnemonics/physicsMnemonics.js';
import { CHEMISTRY_MNEMONICS } from './mnemonics/chemistryMnemonics.js';
import { BIOLOGY_MNEMONICS } from './mnemonics/biologyMnemonics.js';

export { PHYSICS_MNEMONICS } from './mnemonics/physicsMnemonics.js';
export { CHEMISTRY_MNEMONICS } from './mnemonics/chemistryMnemonics.js';
export { BIOLOGY_MNEMONICS } from './mnemonics/biologyMnemonics.js';

/**
 * Master collection of 100+ high-yield NEET visual mnemonics across
 * Physics, Chemistry, Botany, and Zoology with easy-to-remember sentences.
 */
export const MNEMONICS = [
  ...PHYSICS_MNEMONICS,
  ...CHEMISTRY_MNEMONICS,
  ...BIOLOGY_MNEMONICS
];
