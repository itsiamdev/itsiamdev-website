import { Link } from "react-router-dom";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaTumblr,
  FaMastodon,
  FaGithub,
  FaTwitch,
  FaStackOverflow,
  FaPatreon,
  FaPinterest,
  FaReddit,
  FaDribbble,
  FaBasketball,
  FaSpotify,
  FaEthereum,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";

import {
  SiBluesky,
  SiCoinbase,
} from "react-icons/si";

const Footer = () => {
  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Ioniță Aurel Mihai
            </h3>

            <p className="text-muted-foreground text-sm">
              Web developer pasionat de tehnologii moderne
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Navigare
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <button
                  onClick={() => scrollToSection("despre")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Despre
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("proiecte")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Proiecte
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("certificari")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Certificări
                </button>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Suport
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  to="/politica-de-confidentialitate"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politica de Confidențialitate
                </Link>
              </li>

              <li>
                <Link
                  to="/termeni-si-conditii"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Termeni și Condiții
                </Link>
              </li>

            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Contact
            </h4>

            <div className="flex flex-wrap justify-center gap-4">

              {/* X */}
              <a
                href="https://twitter.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaXTwitter size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/itsiamdev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* Bluesky */}
              <a
                href="https://bsky.app/profile/itsiamdev.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiBluesky size={20} />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTiktok size={20} />
              </a>

              {/* Tumblr */}
              <a
                href="https://tumblr.com/blog/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tumblr"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTumblr size={20} />
              </a>

              {/* Mastodon */}
              <a
                href="https://mastodon.social/@itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mastodon"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaMastodon size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>

              {/* Twitch */}
              <a
                href="https://twitch.tv/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitch"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTwitch size={20} />
              </a>

              {/* Stack Overflow */}
              <a
                href="https://stackoverflow.com/users/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stack Overflow"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaStackOverflow size={20} />
              </a>

              {/* Patreon */}
              <a
                href="https://patreon.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Patreon"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaPatreon size={20} />
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaPinterest size={20} />
              </a>

              {/* Reddit */}
              <a
                href="https://reddit.com/user/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reddit"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaReddit size={20} />
              </a>

              {/* Dribbble */}
              <a
                href="https://dribbble.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaDribbble size={20} />
              </a>

              {/* Basketball */}
              <a
                href="#"
                aria-label="Basketball"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaBasketball size={20} />
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/user/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaSpotify size={20} />
              </a>

              {/* Ethereum */}
              <a
                href="https://ethereum.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethereum"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaEthereum size={20} />
              </a>

              {/* Coinbase */}
              <a
                href="https://coinbase.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Coinbase"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiCoinbase size={20} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaYoutube size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:ionitaaurel32@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaEnvelope size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ioniță Aurel Mihai. Toate drepturile rezervate.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;