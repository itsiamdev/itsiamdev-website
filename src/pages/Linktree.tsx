import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Globe2,
  Mail,
  Share2,
  Check,
  Rss,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";

type LinkItem = {
  label: string;
  description?: string;
  href: string;
  icon: typeof Globe2;
  featured?: boolean;
  download?: boolean;
};

const links: LinkItem[] = [
  {
    label: "Site-ul oficial",
    description: "Portofoliu, proiecte și blog",
    href: "/",
    icon: Globe2,
    featured: true,
  },
  {
    label: "Proiectele mele",
    description: "Aplicații și lucrări web",
    href: "/projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "Articole și tutoriale",
    description: "Ghiduri despre dezvoltarea web",
    href: "/blog",
    icon: Rss,
  },
  {
    label: "Descarcă CV-ul",
    description: "Versiune PDF",
    href: "/cv/Aurel%20Ionita%20Frontend%20Developer%20CV.pdf",
    icon: Download,
    download: true,
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/itsiamdev", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/itsiamdev/", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://instagram.com/itsiamdev", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@itsiamdev", icon: FaYoutube },
  { label: "Facebook", href: "https://facebook.com/itsiamdev", icon: FaFacebook },
  { label: "TikTok", href: "https://tiktok.com/@itsiamdev", icon: FaTiktok },
];

const Linktree = () => {
  const [copied, setCopied] = useState(false);

  const sharePage = async () => {
    const shareData = {
      title: "Ioniță Aurel Mihai",
      text: "Portofoliu și linkuri - Ioniță Aurel Mihai",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      // Cancelarea operației de partajare nu necesită o notificare.
    }
  };

  return (
    <>
      <Helmet>
        <title>Linkuri | Ioniță Aurel Mihai</title>
        <meta
          name="description"
          content="Toate linkurile oficiale ale lui Ioniță Aurel Mihai: portofoliu, proiecte, blog, CV și rețele sociale."
        />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/links" />
        <meta property="og:title" content="Ioniță Aurel Mihai | Linkuri" />
        <meta
          property="og:description"
          content="Portofoliu, proiecte, blog și rețele sociale."
        />
        <meta property="og:image" content="/ionitaaurelmihai.jpg" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-background px-4 py-10 sm:px-6 sm:py-14">
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-10rem] right-[-8rem] h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

        <section className="relative mx-auto w-full max-w-[680px]">
          <header className="mb-8 text-center">
            <div className="relative mx-auto mb-5 h-28 w-28">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-500 p-[3px] shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                <img
                  src="/ionitaaurelmihai.jpg"
                  alt="Ioniță Aurel Mihai"
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
            </div>

            <h1 className="!text-3xl sm:!text-4xl">
              Ioniță Aurel Mihai
            </h1>
            <p className="mt-2 text-sm font-medium text-primary flex items-center justify-center gap-1.5">
              @itsiamdev
              <span className="relative flex items-center justify-center" aria-label="Cont verificat">
                <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
                </svg>
              </span>
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              Frontend Developer • Creator de conținut • Construiesc proiecte web moderne
            </p>

            <button
              type="button"
              onClick={sharePage}
              className="mx-auto mt-5 inline-flex h-10 items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/10"
              aria-label="Partajează pagina"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Share2 className="h-4 w-4" />}
              {copied ? "Link copiat" : "Partajează"}
            </button>
          </header>

          <div className="space-y-3" aria-label="Linkuri principale">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download || undefined}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`group flex min-h-[74px] items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all duration-300 sm:px-5 ${
                    link.featured
                      ? "border-primary/50 bg-primary text-primary-foreground shadow-[0_12px_35px_rgba(34,211,238,0.14)] hover:-translate-y-0.5 hover:bg-cyan-300"
                      : "border-border/70 bg-card/75 text-foreground shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-primary/45 hover:bg-card"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      link.featured ? "bg-white/15" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{link.label}</span>
                    {link.description && (
                      <span
                        className={`mt-0.5 block text-xs ${
                          link.featured ? "text-primary-foreground/75" : "text-muted-foreground"
                        }`}
                      >
                        {link.description}
                      </span>
                    )}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      link.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <p className="mt-7 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Rețele sociale
          </p>

          <nav
            className="mx-auto mt-7 flex max-w-md flex-wrap justify-center gap-3"
            aria-label="Rețele sociale"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <a
              href="mailto:itsiamdev@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </nav>

          <footer className="mt-9 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ioniță Aurel Mihai
          </footer>
        </section>
      </main>
    </>
  );
};

export default Linktree;
