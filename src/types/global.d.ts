import { Phantom, Solana } from "./solana";

declare global {
  interface Window {
    solana?: Solana;
    phantom?: Phantom;
  }
}

// filepath: /home/bentoluizv/Work/spellcaster/src/global.d.ts
