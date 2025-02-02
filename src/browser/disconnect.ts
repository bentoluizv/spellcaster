import { Solana } from "../types/solana";

export const disconnect = async (provider: Solana) => {
  await provider.disconnect();
};
