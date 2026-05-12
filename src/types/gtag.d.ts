interface GtagCommand {
  (command: string, ...params: unknown[]): void;
}

declare global {
  interface Window {
    gtag?: GtagCommand;
  }
}

export {};
