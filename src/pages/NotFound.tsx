import { ArrowLeft, ArrowRight, Home, MoveUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <Link
          to="/"
          className="mb-16 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/70 text-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
          </span>
          Ioniță Aurel Mihai
        </Link>

        <div className="relative mx-auto mb-8 w-fit">
          <span
            aria-hidden="true"
            className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-2xl"
          />
          <p className="relative bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-[clamp(7rem,24vw,12rem)] font-black leading-[0.8] tracking-[-0.09em] text-transparent">
            404
          </p>
        </div>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
          Pagina nu a fost găsită
        </p>
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Se pare că ai ajuns pe un drum închis.
        </h1>
        <p className="mx-auto mb-9 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
          Linkul poate fi greșit sau pagina a fost mutată. Hai să te întoarcem
          într-un loc bun.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Înapoi la pagina principală
          </Link>
          <Link
            to="/projects"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            Vezi proiectele
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Poți explora și</span>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            blogul
            <MoveUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
