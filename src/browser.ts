import { Solana } from "./types/solana";

export const isPhantomInstalled = window.phantom?.solana?.isPhantom;

export const getProvider = () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};

export const connect = async (provider: Solana) => {
  try {
    const publicKey = await provider.connect({ onlyIfTrusted: true });
    return publicKey;
  } catch (err: unknown) {
    if ((err as { code: number }).code == 4001) {
      try {
        const publicKey = await provider.connect();
        return publicKey;
      } catch (err: unknown) {
        console.error(err);
      }
    } else {
      console.error(err);
    }
  }
};

export const disconnect = async (provider: Solana) => {
  await provider.disconnect();
};
