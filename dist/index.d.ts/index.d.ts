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

declare const isPhantomInstalled: boolean | undefined;
declare const getProvider: () => Solana | undefined;
declare const connect: (provider: Solana) => Promise<{
    publicKey: any;
} | undefined>;
declare const disconnect: (provider: Solana) => Promise<void>;

declare const browser_connect: typeof connect;
declare const browser_disconnect: typeof disconnect;
declare const browser_getProvider: typeof getProvider;
declare const browser_isPhantomInstalled: typeof isPhantomInstalled;
declare namespace browser {
  export { browser_connect as connect, browser_disconnect as disconnect, browser_getProvider as getProvider, browser_isPhantomInstalled as isPhantomInstalled };
}

declare namespace node {
  export {  };
}

export { browser, node };
