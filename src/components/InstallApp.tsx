import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const isIosDevice = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const InstallApp = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const standaloneQuery = window.matchMedia("(display-mode: standalone)");
    setIsInstalled(
      standaloneQuery.matches ||
        (navigator as Navigator & { standalone?: boolean }).standalone === true,
    );
    setIsIos(isIosDevice());

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
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          Descarcă aplicația mobilă
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Instalează aplicația mobilă</DialogTitle>
          <DialogDescription>
            Adaugă itsiamdev pe ecranul principal și deschide site-ul ca pe o
            aplicație. Nu ai nevoie de Play Store sau de un fișier APK.
          </DialogDescription>
        </DialogHeader>
        {isInstalled ? (
          <p className="text-sm font-medium text-primary">
            Aplicația este deja instalată pe acest dispozitiv.
          </p>
        ) : installPrompt ? (
          <Button onClick={installApp} className="gap-2">
            <Download className="h-4 w-4" />
            Instalează aplicația
          </Button>
        ) : (
          <ol className="space-y-3 text-sm text-muted-foreground">
            {isIos ? (
              <>
                <li>1. Deschide pagina în Safari și apasă butonul Partajare.</li>
                <li>2. Alege „Adăugați la ecranul principal”, apoi confirmă.</li>
              </>
            ) : (
              <>
                <li>1. Deschide meniul browserului (⋮ sau „Partajare”).</li>
                <li>
                  2. Alege „Instalează aplicația” sau „Adaugă la ecranul
                  principal”.
                </li>
              </>
            )}
          </ol>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InstallApp;
