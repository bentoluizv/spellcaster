import { Phantom, Solana } from "./solana";

declare global {
  interface Window {
    solana?: Solana;
    phantom?: Phantom;
  }
}
