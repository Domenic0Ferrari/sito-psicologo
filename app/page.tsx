import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <main className="w-full">
        <section className="bg-san-marino-50 px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-san-marino-700">
                Benvenuti
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Sono la Dottoressa Monica Mastrella
              </h1>
              <p className="mt-4 text-lg text-foreground/90">
                Psicologa e psicoterapeuta cognitivo-comportamentale. Ricevo in
                studio e propongo consulenze anche online.
              </p>
              <p className="mt-6 text-xl font-medium italic text-san-marino-800">
                Chiedere aiuto non è un segno di debolezza, ma un atto di coraggio e il primo passo verso il cambiamento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#chi-sono"
                  className="group inline-flex w-fit items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  Chi Sono
                  <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
                <a
                  href="#contatti"
                  className="group inline-flex w-fit items-center justify-center rounded-full border border-foreground/30 px-5 py-2.5 text-base font-semibold text-foreground transition-colors hover:border-foreground/60 hover:bg-white/70"
                >
                  Contattami
                  <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[32px] border border-san-marino-100 bg-white/70 shadow-lg">
              <Image
                src="/profilo_1.jpeg"
                alt="Ritratto della Dottoressa Monica Mastrella"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 40vw, 80vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Psicologia e psicoterapia",
                body: "Consulenze psicologiche e psicoterapia per adulti, adolescenti e coppie.",
                cta: "#servizi",
              },
              {
                title: "Benessere e autostima",
                body: "Percorsi di crescita personale per ritrovare equilibrio, fiducia e risorse.",
                cta: "#servizi",
              },
              {
                title: "Affidati a me",
                body: "Un percorso su misura per comprendere te stesso e superare i blocchi.",
                cta: "#contatti",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-san-marino-100 bg-san-marino-50/60 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-base text-foreground/85">{card.body}</p>
                <a
                  href={card.cta}
                  className="group mt-5 inline-flex items-center text-sm font-semibold text-san-marino-700"
                >
                  Scopri di più
                  <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="chi-sono"
          className="bg-wild-willow-50 px-4 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wild-willow-700">
                Benvenuti nel mio studio
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Sono la Dottoressa Monica Mastrella
              </h2>
              <p className="mt-4 text-lg text-foreground/90">
                Credo in un approccio autentico e concreto: ascolto, metodo e
                strumenti chiari per aiutarti a ritrovare benessere e
                consapevolezza.
              </p>
              <p className="mt-4 text-lg text-foreground/90">
                Insieme definiamo obiettivi realistici e lavoriamo sul presente
                per costruire un cambiamento duraturo.
              </p>
              <a
                href="#contatti"
                className="group mt-6 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-foreground/90"
              >
                Contattami
                <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a>
            </div>
            <div className="rounded-3xl border border-wild-willow-100 bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                Formazione e qualifiche
              </h3>
              <ul className="mt-4 space-y-3 text-base text-foreground/85">
                {[
                  "Laurea in Psicologia presso l’Università degli Studi di [Nome].",
                  "Specializzazione in psicoterapia cognitivo-comportamentale.",
                  "Iscrizione all’Albo degli Psicologi della [Regione] n. 12345.",
                  "Formazione continua in EMDR e mindfulness clinica.",
                  "Attivita professionale in studio e online.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-wild-willow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="servizi"
          className="bg-jordy-blue-50 px-4 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Servizi principali
            </h2>
            <p className="mt-4 text-lg text-foreground/90">
              Percorsi pensati per accompagnarti nei momenti di difficoltà e
              nelle fasi di crescita personale.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Consulenza psicologica",
                  body: "Per adulti, adolescenti, bambini, coppie e famiglie.",
                },
                {
                  title: "Genitori e famiglia",
                  body: "Sostegno alla genitorialità, percorsi familiari, separazioni e adozioni.",
                },
                {
                  title: "Benessere e autostima",
                  body: "Percorsi per ritrovare equilibrio emotivo e fiducia in sé.",
                },
                {
                  title: "Orientamento scolastico e lavorativo",
                  body: "Supporto nelle scelte e nello sviluppo del tuo potenziale.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-jordy-blue-100 bg-white/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-foreground/85">
                    {service.body}
                  </p>
                  <a
                    href="#contatti"
                    className="group mt-5 inline-flex items-center text-sm font-semibold text-jordy-blue-700"
                  >
                    Contattami
                    <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-san-marino-900 px-4 py-14 text-white md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-san-marino-100">
                Dai il benvenuto al nuovo te
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Ti aiuto a ritrovare equilibrio e fiducia in te stesso
              </h2>
              <p className="mt-4 text-lg text-san-marino-100/90">
                Ognuno di noi ha dentro un potenziale ancora inesplorato.
                Insieme possiamo capire cosa ti blocca e costruire un percorso
                che ti permetta di sentirti più sereno.
              </p>
              <a
                href="#contatti"
                className="group mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-base font-semibold text-san-marino-900 transition-colors hover:bg-san-marino-50"
              >
                Contattami
                <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-san-marino-50">
              <h3 className="text-lg font-semibold">Percorso in quattro passi</h3>
              <ul className="mt-4 space-y-3 text-base text-san-marino-50/90">
                {[
                  "Capisci cosa ti blocca e da dove nasce.",
                  "Definisci la direzione che desideri.",
                  "Progetta obiettivi concreti e raggiungibili.",
                  "Agisci con strumenti pratici e supporto continuo.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contatti"
          className="bg-white px-4 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl border border-san-marino-100 bg-san-marino-50/70 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Richiedi una consulenza o maggiori informazioni
              </h2>
              <p className="mt-3 text-lg text-foreground/85">
                Scrivimi per fissare un primo colloquio in studio o online.
              </p>
            </div>
            <a
              href="mailto:info@studio.com"
              className="group inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              Contattami
              <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
