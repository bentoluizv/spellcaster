import { Solana } from "../types/solana";

export const connect = async (provider: Solana) => {
  try {
    const response = await provider.connect({ onlyIfTrusted: true });

    return response.publicKey.toString() as string;
  } catch (err: unknown) {
    if ((err as { code: number }).code == 4001) {
      try {
        const response = await provider.connect();
        return response.publicKey.toString() as string;
      } catch (err: unknown) {
        console.error(err);
      }
    } else {
      console.error(err);
    }
  }
};
