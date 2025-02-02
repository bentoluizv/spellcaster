type Solana = {
  connect: (t?: any) => Promise<{ publicKey: any }>;
  disconnect: () => Promise<void>;
  isPhantom: boolean;
  signTransaction: (t?: any) => Promise<any>;
  signAllTransactions: (t?: any[]) => Promise<any>;
  signAndSendTransaction: (t?: any, n?: {}) => Promise<any>;
  signAndSendAllTransactions: (t?: any, n?: {}) => Promise<any>;
  signMessage: (
    t?: any,
    n?: string
  ) => Promise<{
    signature: any;
    publicKey: any;
  }>;
  signIn: (t?: any) => Promise<{
    address: any;
    signedMessage: any;
    signature: any;
  }>;
  handleNotification: (t?: any) => Promise<void>;
  request: ({ method, params }: { method: any; params: any }) => Promise<any>;
  removeAllListeners: (t?: any) => any;
  on: (t: string, cb: () => void) => void;
};

declare const connect: (provider: Solana) => Promise<string | undefined>;

declare const disconnect: (provider: Solana) => Promise<void>;

declare const getProvider: () => Solana | undefined;

declare const isPhantomInstalled: boolean | undefined;

declare const index$1_connect: typeof connect;
declare const index$1_disconnect: typeof disconnect;
declare const index$1_getProvider: typeof getProvider;
declare const index$1_isPhantomInstalled: typeof isPhantomInstalled;
declare namespace index$1 {
  export { index$1_connect as connect, index$1_disconnect as disconnect, index$1_getProvider as getProvider, index$1_isPhantomInstalled as isPhantomInstalled };
}

declare namespace index {
  export {  };
}

export { index$1 as browser, index as node };
