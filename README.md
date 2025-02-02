# Spellcaster Core

## Introduction

This library provides an interface to interact with the Phantom wallet on the Solana blockchain. It allows connecting, disconnecting, and signing transactions using the Phantom provider API.

## Types

### `Solana`

```TL:DR -> The library isn't properly typed yet but will try to cover all wallet methods```

```typescript

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

```

The `Solana` type represents the Phantom provider interface.

### `Phantom`

```typescript
type Phantom = {
  solana: Solana;
};
```

The `Phantom` type encapsulates the Solana provider instance within the browser's `phantom` object.

## Functions

### `connect(provider: Solana): Promise<string>`

Connects to the Phantom wallet and returns the user's public key.

#### Parameters

- `provider`: Solana provider instance.

#### Usage Example

```typescript
const publicKey = await connect(provider);
console.log("Public Key:", publicKey);
```

### `disconnect(provider: Solana): Promise<void>`

Disconnects the Phantom wallet.

#### Parameters

- `provider`: Solana provider instance.

#### Usage Example

```typescript
await disconnect(provider);
```

### `getProvider(): Solana | void`

Retrieves the Phantom provider if installed. Otherwise, it opens the official Phantom website for download.

#### Usage Example

```typescript
const provider = getProvider();
if (!provider) {
  console.log("Phantom is not installed");
}
```

### `isPhantomInstalled: boolean`

Checks if the Phantom wallet is installed.

#### Usage Example

```typescript
if (isPhantomInstalled) {
  console.log("Phantom is installed");
} else {
  console.log("Phantom is not installed");
}
```

## Considerations

- The `connect` function attempts to connect automatically if the user has enabled the "trusted" option in Phantom.
- If the initial connection fails due to user rejection (`code == 4001`), the function retries without the `onlyIfTrusted` option.
- If the Phantom wallet is not installed, `getProvider` redirects the user to the official website.
