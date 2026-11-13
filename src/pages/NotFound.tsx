import { ArrowLeft, ArrowRight, Home, MoveUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pb-20 pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            <Home className="mr-1 h-3 w-3" aria-hidden="true" />
            Eroare 404
          </Badge>

          <div className="relative mx-auto mb-8 w-fit">
            <span
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-2xl"
            />
          </div>

          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Pagina nu există.</span>
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
      <Footer />
    </div>
  );
};

export default NotFound;
