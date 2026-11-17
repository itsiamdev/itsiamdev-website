import { createContext, useContext } from "react";

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export interface InstallAppContextValue {
  installPrompt: BeforeInstallPromptEvent | null;
  isInstalled: boolean;
  isIos: boolean;
  isAndroid: boolean;
  installApp: () => Promise<void>;
}

export const InstallAppContext = createContext<InstallAppContextValue | null>(
  null,
);

export const useInstallApp = () => {
  const context = useContext(InstallAppContext);
  if (!context) {
    throw new Error("useInstallApp must be used within InstallAppProvider");
  }
  return context;
};
