import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Termeni și Condiții - Ioniță Aurel Mihai</title>
        <meta
          name="description"
          content="Citiți termenii și condițiile privind accesarea și utilizarea site-ului Ioniță Aurel Mihai."
        />
        <link
          rel="canonical"
          href="https://ionita-aurel-mihai.lovable.app/termeni-si-conditii"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        <main className="section-container pt-32 pb-20">
          <article className="mx-auto max-w-4xl">
            <header className="mb-10 border-b border-border/60 pb-8">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Informații juridice
              </p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="text-gradient">Termeni și Condiții</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Ultima actualizare: 25 noiembrie 2026
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                Acești termeni descriu regulile de accesare și utilizare a site-ului
                ionita-aurel-mihai.lovable.app. Vă rugăm să îi citiți înainte de a utiliza
                site-ul. Prin continuarea navigării, confirmați că ați luat la cunoștință
                prevederile de mai jos.
              </p>
            </header>

            <div className="space-y-9 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  1. Operatorul site-ului și domeniul de aplicare
                </h2>
                <p>
                  Site-ul este administrat de Ioniță Aurel Mihai („administratorul”).
                  Acești termeni se aplică accesului la paginile, materialele și
                  funcționalitățile disponibile pe site. Anumite servicii sau resurse pot
                  avea condiții suplimentare, care vor fi prezentate separat atunci când
                  este cazul.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  2. Acceptarea și actualizarea termenilor
                </h2>
                <p>
                  Prin accesarea sau utilizarea site-ului, sunteți de acord să respectați
                  acești termeni și legislația aplicabilă. Dacă nu sunteți de acord cu
                  prevederile lor, vă rugăm să întrerupeți utilizarea site-ului.
                </p>
                <p className="mt-3">
                  Termenii pot fi actualizați pentru a reflecta modificări ale site-ului,
                  ale serviciilor sau ale legislației. Versiunea publicată pe această pagină
                  este cea aplicabilă; data ultimei actualizări este afișată la începutul
                  documentului. Modificările se aplică de la publicare, cu respectarea
                  drepturilor prevăzute de lege.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  3. Utilizarea permisă a site-ului
                </h2>
                <p>
                  Puteți utiliza site-ul în scopuri personale și legale. Sunteți de acord
                  să nu:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>încălcați legislația sau drepturile altor persoane;</li>
                  <li>
                    încercați să obțineți acces neautorizat la site, la servere sau la
                    sisteme conectate;
                  </li>
                  <li>
                    perturbați funcționarea, securitatea sau disponibilitatea site-ului;
                  </li>
                  <li>
                    introduceți cod malițios, mesaje nesolicitate sau conținut ilegal ori
                    înșelător;
                  </li>
                  <li>
                    copiați, colectați sau reutilizați automat conținutul site-ului fără
                    permisiune, atunci când o astfel de utilizare nu este permisă de lege.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  4. Drepturi de proprietate intelectuală
                </h2>
                <p>
                  Cu excepția cazurilor indicate în mod explicit, materialele originale de
                  pe site — inclusiv texte, elemente grafice, identitate vizuală și cod —
                  aparțin administratorului sau sunt utilizate cu drepturile necesare și
                  sunt protejate de legislația privind proprietatea intelectuală.
                </p>
                <p className="mt-3">
                  Nu este permisă reproducerea, distribuirea, modificarea sau publicarea
                  materialelor în scop comercial fără acordul prealabil al titularului
                  drepturilor. Utilizarea rezonabilă permisă de lege, inclusiv citarea cu
                  indicarea sursei, rămâne neafectată. Mărcile și materialele terților
                  aparțin titularilor lor.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  5. Conținut și informații
                </h2>
                <p>
                  Articolele, exemplele de cod, proiectele și celelalte materiale sunt
                  furnizate în scop informativ și educațional. Deși depunem eforturi
                  rezonabile pentru a păstra informațiile utile și actuale, acestea pot
                  conține omisiuni sau pot deveni neactualizate. Verificați informațiile
                  importante înainte de a vă baza pe ele.
                </p>
                <p className="mt-3">
                  Conținutul nu reprezintă consultanță profesională, juridică, financiară
                  sau tehnică adaptată unei situații individuale și nu creează, prin el
                  însuși, o relație contractuală ori profesională cu administratorul.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  6. Funcționarea și disponibilitatea site-ului
                </h2>
                <p>
                  Ne străduim să menținem site-ul funcțional și accesibil, dar nu putem
                  garanta disponibilitatea neîntreruptă sau lipsa erorilor. Pot apărea
                  întreruperi pentru mentenanță, actualizări, probleme tehnice sau
                  evenimente aflate în afara controlului nostru. Putem modifica,
                  suspenda sau elimina funcționalități, în limitele legii.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  7. Linkuri și servicii ale terților
                </h2>
                <p>
                  Site-ul poate include linkuri către platforme și resurse operate de
                  terți. Aceste linkuri sunt oferite pentru comoditate; administratorul nu
                  controlează și nu garantează conținutul, disponibilitatea sau politicile
                  acelor servicii. Accesarea lor se face pe propria răspundere și în
                  conformitate cu termenii furnizorilor respectivi.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  8. Comunicări și conținut trimis de utilizatori
                </h2>
                <p>
                  Dacă ne trimiteți mesaje sau informații prin formularele ori adresele de
                  contact publicate pe site, sunteți responsabil pentru exactitatea și
                  legalitatea acestora. Nu transmiteți informații confidențiale sau date
                  personale ale altor persoane fără un temei legal.
                </p>
                <p className="mt-3">
                  Datele cu caracter personal sunt prelucrate conform{" "}
                  <Link
                    to="/politica-de-confidentialitate"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Politicii de Confidențialitate
                  </Link>
                  . Trimiterea unui mesaj nu garantează un anumit timp de răspuns, cu
                  excepția cazurilor în care legea prevede altfel.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  9. Confidențialitate și cookie-uri
                </h2>
                <p>
                  Utilizarea cookie-urilor și prelucrarea datelor cu caracter personal
                  sunt descrise în{" "}
                  <Link
                    to="/politica-de-confidentialitate"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Politica de Confidențialitate
                  </Link>
                  . Dacă este necesar consimțământul pentru anumite tehnologii, acesta va
                  fi solicitat prin mecanismele afișate pe site.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  10. Limitarea răspunderii
                </h2>
                <p>
                  În măsura permisă de legislația aplicabilă, administratorul nu răspunde
                  pentru pierderi sau prejudicii rezultate din imposibilitatea temporară
                  de a utiliza site-ul, din erori ori omisiuni în conținut sau din
                  utilizarea serviciilor terților. Această prevedere nu exclude și nu
                  limitează răspunderea care nu poate fi exclusă ori limitată prin lege.
                </p>
                <p className="mt-3">
                  Utilizați materialele și resursele descărcabile cu discernământ și
                  verificați dacă sunt potrivite pentru scopul urmărit înainte de
                  instalare sau utilizare.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  11. Suspendarea accesului
                </h2>
                <p>
                  Putem restricționa sau suspenda accesul la site, în mod rezonabil și în
                  limitele legii, atunci când există indicii de utilizare abuzivă,
                  activitate care afectează securitatea sau încălcarea acestor termeni.
                  Ori de câte ori este posibil, vom lua măsuri proporționale cu situația.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  12. Legea aplicabilă și dispoziții finale
                </h2>
                <p>
                  Acești termeni sunt interpretați în conformitate cu legislația
                  aplicabilă din România și cu normele obligatorii ale Uniunii Europene.
                  Orice litigiu va fi soluționat de instanțele competente, fără a aduce
                  atingere drepturilor imperative de care beneficiați potrivit legii.
                </p>
                <p className="mt-3">
                  Dacă o prevedere a acestor termeni este considerată inaplicabilă,
                  celelalte prevederi rămân valabile în măsura permisă de lege.
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
