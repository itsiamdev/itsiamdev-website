import { useEffect, useState, type ReactNode } from "react";
import {
  InstallAppContext,
  type BeforeInstallPromptEvent,
} from "@/hooks/useInstallApp";

const isIosDevice = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const isAndroidDevice = () => /Android/i.test(navigator.userAgent);

const InstallAppProvider = ({ children }: { children: ReactNode }) => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const standaloneQuery = window.matchMedia("(display-mode: standalone)");
    setIsInstalled(
      standaloneQuery.matches ||
        (navigator as Navigator & { standalone?: boolean }).standalone === true,
    );
    setIsIos(isIosDevice());
    setIsAndroid(isAndroidDevice());

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return (
    <InstallAppContext.Provider
      value={{ installPrompt, isInstalled, isIos, isAndroid, installApp }}
    >
      {children}
    </InstallAppContext.Provider>
  );
};

export default InstallAppProvider;
