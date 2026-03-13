import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <main className="w-full">
        <section className="bg-san-marino-50 px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-s font-semibold uppercase tracking-[0.28em] text-san-marino-700">
                Benvenuti
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-san-marino-800">
                Dottoressa Monica Mastrella
              </h1>
              <p className="mt-4 text-lg text-san-marino-700">
                Psicologa e psicoterapeuta cognitivo-comportamentale. Ricevo in
                studio e propongo consulenze anche online.
              </p>
              <p className="mt-6 text-xl font-medium italic text-san-marino-800">
                Chiedere aiuto non è un segno di debolezza, ma un atto di coraggio e il primo passo verso il cambiamento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#chi-sono"
                  className="group inline-flex w-fit items-center justify-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-san-marino-900"
                >
                  Chi Sono
                  <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
                <a
                  href="#contatti"
                  className="bg-white group inline-flex w-fit items-center justify-center rounded-full border border-san-marino-300 px-5 py-2.5 text-base font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100"
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
                title: "Ansia e stress",
                body: "Ansia, attacchi di panico e gestione dello stress.",
                cta: "#servizi",
              },
              {
                title: "Crisi personali",
                body: "Momenti di difficoltà emotiva o di crisi personale.",
                cta: "#servizi",
              },
              {
                title: "Autostima e relazioni",
                body: "Problemi di autostima e difficoltà nelle relazioni.",
                cta: "#servizi",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-san-marino-100 bg-san-marino-50/60 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-san-marino-800">
                  {card.title}
                </h3>
                <p className="mt-3 text-base text-san-marino-700">{card.body}</p>
                <a
                  href={card.cta}
                  className="group mt-5 inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100"
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
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-wild-willow-800 md:text-3xl">
                Sono la Dottoressa Monica Mastrella
              </h2>
              <p className="mt-4 text-lg text-wild-willow-700">
                Nel mio lavoro offro supporto psicologico e percorsi di
                psicoterapia per adulti e adolescenti che attraversano momenti
                di difficoltà emotiva, relazionale o personale.
              </p>
              <p className="mt-4 text-lg text-wild-willow-700">
                Con un approccio scientificamente fondato e uno spazio di
                ascolto accogliente, accompagno le persone nel comprendere
                meglio se stesse, affrontare le proprie difficoltà e sviluppare
                nuove risorse per il proprio benessere.
              </p>
              <a
                href="#contatti"
                className="group mt-6 inline-flex items-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-san-marino-900"
              >
                Contattami
                <span className="ml-2 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a>
            </div>
            <div className="rounded-3xl border border-wild-willow-100 bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-wild-willow-800">
                Formazione e qualifiche
              </h3>
              <ul className="mt-4 space-y-3 text-base text-wild-willow-700">
                {[
                  "Laurea in Psicologia Clinica e della Salute presso l’Università  degli Studi “Gabriele d’Annunzio” di Chieti, con votazione 110 e lode.",
                  "Master di II livello in Psicodiagnostica e Valutazione Psicologica presso l’Università LUMSA di Roma.",
                  "Specializzazione in Psicoterapia Cognitivo-Comportamentale presso l’Istituto Beck di Roma",
                  "Abilitazione alla psicoterapia EMDR.",
                  "Corso di perfezionamento in CBT-E (Enhanced Cognitive Behavioural Therapy) presso il Centro per i Disturbi dell’Alimentazione di Verona diretto dal Dott. Riccardo Dalle Grave",
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
            <h2 className="text-2xl font-semibold tracking-tight text-jordy-blue-800 md:text-3xl">
              Servizi principali
            </h2>
            <p className="mt-4 text-lg text-jordy-blue-700">
              Percorsi pensati per accompagnarti nei momenti di difficoltà e
              nelle fasi di crescita personale.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Ansia e attacchi di panico",
                  body: "Percorsi per gestire i sintomi, ridurre l’iperattivazione e ritrovare sicurezza.",
                },
                {
                  title: "Crisi personali e difficoltà emotive",
                  body: "Supporto nei momenti di passaggio, lutti, separazioni o blocchi personali.",
                },
                {
                  title: "Autostima e relazioni",
                  body: "Lavoro su confini, comunicazione e immagine di sé per relazioni più sane.",
                },
                {
                  title: "Cibo e immagine corporea",
                  body: "Sostegno per ritrovare equilibrio e un rapporto più sereno con il corpo.",
                },
                {
                  title: "Traumi ed EMDR",
                  body: "Elaborazione di esperienze traumatiche con protocolli EMDR evidence-based.",
                },
                {
                  title: "Adolescenza",
                  body: "Spazio dedicato a difficoltà emotive, scolastiche e relazionali dell’età evolutiva.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-jordy-blue-100 bg-white/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-jordy-blue-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-jordy-blue-700">
                    {service.body}
                  </p>
                  <a
                    href="#contatti"
                    className="group mt-5 inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100"
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

        <section className="bg-san-marino-900 px-4 py-10 text-white md:px-8 md:py-14">
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
                className="group mt-6 inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-base font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100"
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
              <h2 className="text-2xl font-semibold text-san-marino-800">
                Richiedi una consulenza o maggiori informazioni
              </h2>
              <p className="mt-3 text-lg text-san-marino-700">
                Scrivimi per fissare un primo colloquio in studio o online.
              </p>
            </div>
            <a
              href="mailto:info@studio.com"
              className="group inline-flex items-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-san-marino-900"
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
