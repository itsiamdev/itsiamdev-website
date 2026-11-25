import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  Check,
  Download,
  Laptop,
  Plus,
  Share2,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useInstallApp } from "@/hooks/useInstallApp";

const DownloadApp = () => {
  const { installPrompt, isInstalled, isIos, isAndroid, installApp } =
    useInstallApp();
  const [showInstructions, setShowInstructions] = useState(false);
  const instructionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showInstructions) {
      instructionsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showInstructions]);

  const handleInstallClick = async () => {
    if (installPrompt) {
      await installApp();
      return;
    }

    if (showInstructions) {
      instructionsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setShowInstructions(true);
  };

  const installSteps = isIos
    ? [
        {
          icon: Share2,
          title: "Deschide meniul Partajare",
          description: "În Safari, apasă pictograma Partajare din bara browserului.",
        },
        {
          icon: Plus,
          title: "Adaugă pe ecranul principal",
          description: "Alege „Adăugați la ecranul principal” din lista de opțiuni.",
        },
        {
          icon: Check,
          title: "Confirmă instalarea",
          description: "Apasă „Adăugați”. Pictograma aplicației va apărea pe ecran.",
        },
      ]
    : isAndroid
      ? [
          {
            icon: Smartphone,
            title: "Deschide meniul browserului",
            description: "Apasă meniul cu trei puncte sau opțiunea Partajare.",
          },
          {
            icon: ArrowDownToLine,
            title: "Alege instalarea",
            description: "Apasă „Instalează aplicația” sau „Adaugă la ecranul principal”.",
          },
          {
            icon: Check,
            title: "Confirmă",
            description: "Urmează solicitarea browserului pentru a finaliza instalarea.",
          },
        ]
      : [
          {
            icon: Laptop,
            title: "Găsește opțiunea de instalare",
            description:
              "În Chrome sau Edge, caută pictograma de instalare în bara de adrese sau deschide meniul browserului.",
          },
          {
            icon: ArrowDownToLine,
            title: "Instalează aplicația",
            description: "Alege „Instalează itsiamdev” din meniul browserului.",
          },
          {
            icon: Check,
            title: "Deschide aplicația",
            description:
              "Confirmă instalarea; aplicația va putea fi lansată din lista de aplicații.",
          },
        ];

  return (
    <>
      <Helmet>
        <title>Descarcă aplicația itsiamdev - Ioniță Aurel Mihai</title>
        <meta
          name="description"
          content="Instalează aplicația web itsiamdev pe telefon sau desktop și accesează rapid portofoliul."
        />
        <link
          rel="canonical"
          href="https://ionita-aurel-mihai.lovable.app/descarca-aplicatia"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main className="section-container pt-32">
          <div className="mx-auto max-w-5xl">
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 px-6 py-10 text-center shadow-[var(--shadow-card)] backdrop-blur-sm md:px-12 md:py-14">
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Aplicație web
                </div>

                <img
                  src="/app-icon-192.png"
                  alt="Pictograma aplicației itsiamdev"
                  className="mx-auto mb-7 h-20 w-20 rounded-2xl border border-border/60 shadow-lg shadow-primary/10 md:h-24 md:w-24"
                />

                <h1 className="mb-5 text-4xl md:text-6xl">
                  itsiamdev, la un <span className="text-gradient">tap distanță</span>
                </h1>
                <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                  Instalează portofoliul pe telefonul Android sau pe PC pentru acces rapid,
                  direct de pe ecranul principal. Se instalează prin browser, fără
                  descărcarea unui fișier APK.
                </p>

                {isInstalled ? (
                  <div
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 font-medium text-primary"
                    role="status"
                  >
                    <Check className="h-5 w-5" />
                    Aplicația este instalată pe acest dispozitiv
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <Button
                      onClick={handleInstallClick}
                      size="lg"
                      className="h-12 gap-2 px-6 text-base shadow-lg shadow-primary/15"
                    >
                      <Download className="h-5 w-5" />
                      {installPrompt ? "Instalează aplicația" : "Vezi instrucțiunile"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Instalarea este disponibilă în browserele compatibile.
                    </p>
                  </div>
                )}
              </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-3" aria-label="Avantaje">
              <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <h2 className="mb-1 font-semibold text-foreground">Acces rapid</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Deschide site-ul direct din pictograma de pe ecranul principal.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h2 className="mb-1 font-semibold text-foreground">Android și PC</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Pe Android, folosește browserul compatibil; pe PC, Chrome sau Edge.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Download className="h-5 w-5" />
                </div>
                <h2 className="mb-1 font-semibold text-foreground">Fără magazin de aplicații</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Instalarea se face în siguranță, prin solicitarea browserului.
                </p>
              </div>
            </section>

            {!isInstalled && showInstructions && (
              <section
                ref={instructionsRef}
                className="mt-8 scroll-mt-24 rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8"
                aria-labelledby="install-instructions-heading"
                tabIndex={-1}
              >
                <div className="mb-6">
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-primary">
                    Ghid de instalare
                  </p>
                  <h2
                    id="install-instructions-heading"
                    className="text-2xl font-semibold text-foreground"
                  >
                    {isIos
                      ? "Instalează pe iPhone sau iPad"
                      : isAndroid
                        ? "Instalează pe Android"
                        : "Instalează pe computer"}
                  </h2>
                  {isIos && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Pentru instalarea pe iPhone sau iPad, deschide pagina în Safari.
                    </p>
                  )}
                </div>

                <ol className="grid gap-4 md:grid-cols-3">
                  {installSteps.map(({ icon: Icon, title, description }, index) => (
                    <li
                      key={title}
                      className="rounded-xl border border-border/50 bg-background/40 p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DownloadApp;
