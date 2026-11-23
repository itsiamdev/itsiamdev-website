import { Link } from "react-router-dom";
import InstallApp from "@/components/InstallApp";

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
  FaFacebook,
  FaInstagram,
  FaThreads,
  FaGooglePlay,
  FaChessKnight,
} from "react-icons/fa6";

import {
  SiBluesky,
  SiCoinbase,
  SiDailydotdev,
  SiFreecodecamp,
  SiTryhackme,
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

              <li>
                <InstallApp />
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

              {/* Facebook */}
              <a
                href="https://facebook.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaFacebook size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaInstagram size={20} />
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.net/@itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaThreads size={20} />
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

              {/* Codeberg */}
              <a
                href="https://codeberg.org/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeberg"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 1.5 2.4 17.3A12.7 12.7 0 0 0 12 22.5a12.7 12.7 0 0 0 9.6-5.2L12 1.5Zm0 4.2 5.7 10.1a8.7 8.7 0 0 1-5.7 2.7 8.7 8.7 0 0 1-5.7-2.7L12 5.7Z" />
                </svg>
              </a>

              {/* Daily.dev */}
              <a
                href="https://app.daily.dev/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daily.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiDailydotdev size={20} />
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

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/dev?id=7610940829379856459"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGooglePlay size={20} />
              </a>

              {/* Chess.com */}
              <a
                href="https://www.chess.com/member/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chess.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaChessKnight size={20} />
              </a>

              {/* FreeCodeCamp */}
              <a
                href="https://www.freecodecamp.org/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FreeCodeCamp"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiFreecodecamp size={20} />
              </a>

              {/* TryHackMe */}
              <a
                href="https://tryhackme.com/p/itsiamdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryHackMe"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiTryhackme size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:itsiamdev@gmail.com"
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