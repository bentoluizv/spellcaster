export type Solana = {
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

export type Phantom = {
  solana: Solana;
};
