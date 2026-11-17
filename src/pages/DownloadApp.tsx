import { useState } from "react";
import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useInstallApp } from "@/hooks/useInstallApp.ts";

const DownloadApp = () => {
  const { installPrompt, isInstalled, isIos, isAndroid, installApp } =
    useInstallApp();
  const [showInstructions, setShowInstructions] = useState(false);

  const handleInstallClick = async () => {
    if (installPrompt) {
      await installApp();
      return;
    }

    setShowInstructions(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="section-container flex min-h-[70vh] items-center justify-center">
        <section className="w-full max-w-2xl rounded-3xl border border-primary/20 bg-card/70 p-8 text-center shadow-[var(--shadow-card)] md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Smartphone className="h-8 w-8" />
          </div>
          <h1 className="mb-5 text-3xl md:text-5xl">
            Instalează <span className="text-gradient">itsiamdev</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-muted-foreground">
            Adaugă site-ul pe ecranul principal și deschide-l ca pe o aplicație.
            Este disponibil pe telefoane și computere în browsere compatibile.
            Browserul îți va cere confirmarea instalării; nu se descarcă un APK.
          </p>

          {isInstalled ? (
            <p className="font-medium text-primary">
              Aplicația este deja instalată pe acest dispozitiv.
            </p>
          ) : (
            <Button onClick={handleInstallClick} size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Instalează aplicația
            </Button>
          )}

          {!isInstalled && showInstructions && isIos ? (
            <div className="space-y-3 text-left text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Pentru instalare pe iPhone sau iPad:
              </p>
              <p>1. Deschide această pagină în Safari și apasă Partajare.</p>
              <p>2. Alege „Adăugați la ecranul principal”, apoi confirmă.</p>
            </div>
          ) : null}
          {!isInstalled && showInstructions && isAndroid ? (
            <div className="space-y-3 text-left text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Pentru instalare pe Android:
              </p>
              <p>1. Deschide meniul browserului (⋮ sau „Partajare”).</p>
              <p>
                2. Alege „Instalează aplicația” sau „Adaugă la ecranul principal”.
              </p>
            </div>
          ) : null}
          {!isInstalled && showInstructions && !isIos && !isAndroid ? (
            <div className="space-y-3 text-left text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Pentru instalare pe desktop:
              </p>
              <p>
                În Chrome sau Edge, apasă pictograma Instalează din bara de
                adrese sau deschide meniul browserului.
              </p>
              <p>Alege „Instalează itsiamdev” și confirmă.</p>
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadApp;
