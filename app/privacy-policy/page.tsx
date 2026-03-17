export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <main className="w-full">
        <section className="bg-san-marino-50 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-san-marino-700">
              Informativa
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-san-marino-800 md:text-4xl">
              Informativa sulla Privacy (Privacy Policy)
            </h1>
            <p className="mt-2 text-lg text-san-marino-700">
              Ai sensi del Regolamento UE 2016/679 (GDPR)
            </p>

            <div className="mt-8 space-y-8 rounded-3xl border border-san-marino-100 bg-white/90 p-8 shadow-sm text-base text-san-marino-700">
              <p>
                La presente Informativa ha lo scopo di informare l&apos;utente
                circa le modalità di trattamento dei dati personali che lo
                riguardano durante la consultazione del presente sito web.
              </p>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  1. Titolare del Trattamento
                </h2>
                <p className="mt-2">
                  Il Titolare del trattamento è la Dott.ssa Monica Mastrella,
                  con studio in Via XX Settembre 74, 67051 Avezzano (AQ), P.IVA
                  02108190667, Email:{" "}
                  <a
                    href="mailto:monicamastrella@hotmail.it"
                    className="font-semibold text-san-marino-800 underline underline-offset-2 hover:text-san-marino-900"
                  >
                    monicamastrella@hotmail.it
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  2. Tipologia di Dati Raccolti
                </h2>
                <p className="mt-2">
                  Il sito raccoglie dati attraverso le seguenti modalità:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Dati forniti volontariamente:</strong> Nome e
                    indirizzo email inseriti nel modulo di contatto per
                    richiedere informazioni o appuntamenti.
                  </li>
                  <li>
                    <strong>Recensioni e Commenti:</strong> Dati identificativi
                    (nome o pseudonimo) e contenuti testuali salvati tramite il
                    database Supabase per la pubblicazione di testimonianze,
                    previo esplicito consenso.
                  </li>
                  <li>
                    <strong>Dati di navigazione:</strong> Indirizzi IP,
                    parametri del browser e del sistema operativo raccolti
                    automaticamente dall&apos;hosting (Vercel) per garantire la
                    sicurezza e il corretto funzionamento tecnico del sito.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  3. Finalità del Trattamento
                </h2>
                <p className="mt-2">
                  I dati sono trattati esclusivamente per:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Rispondere alle richieste di contatto e fornire supporto
                    professionale.
                  </li>
                  <li>
                    Gestire e pubblicare recensioni professionali sul sito
                    (previo consenso).
                  </li>
                  <li>
                    Adempiere agli obblighi di legge, contabili e fiscali.
                  </li>
                  <li>
                    Garantire la sicurezza informatica del sito (prevenzione
                    spam/attacchi).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  4. Base Giuridica del Trattamento
                </h2>
                <p className="mt-2">
                  Il trattamento si fonda su:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Consenso dell&apos;interessato:</strong> Espresso
                    tramite la selezione della checkbox obbligatoria nel modulo di
                    contatto.
                  </li>
                  <li>
                    <strong>Esecuzione di misure precontrattuali:</strong> Per
                    rispondere a una specifica richiesta dell&apos;utente.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  5. Luogo di Trattamento e Servizi Terzi
                </h2>
                <p className="mt-2">
                  I dati sono trattati presso la sede del Titolare e attraverso
                  le infrastrutture dei seguenti fornitori, nominati Responsabili
                  del Trattamento:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Vercel Inc.:</strong> Servizio di hosting del sito
                    web.
                  </li>
                  <li>
                    <strong>Supabase (PostgreSQL):</strong> Per
                    l&apos;archiviazione sicura dei dati e delle recensioni
                    (Server situati in UE - Regione Frankfurt).
                  </li>
                  <li>
                    <strong>Aruba S.p.A.:</strong> Per la gestione del dominio e
                    del servizio di posta elettronica.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  6. Modalità di Trattamento e Conservazione
                </h2>
                <p className="mt-2">
                  Il trattamento viene effettuato con strumenti informatici. I
                  dati saranno conservati solo per il tempo strettamente
                  necessario a evadere la richiesta dell&apos;utente. Le
                  recensioni saranno conservate fino a quando l&apos;utente non
                  ne richiederà la rimozione o fino alla cessazione del
                  servizio.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  7. Cookie Policy
                </h2>
                <p className="mt-2">
                  Questo sito, sviluppato con framework Next.js, utilizza
                  esclusivamente cookie tecnici necessari per la navigazione e la
                  sicurezza. Non vengono utilizzati cookie di profilazione,
                  marketing o tracciamento di terze parti
                  senza preventivo consenso.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-san-marino-800">
                  8. Diritti dell&apos;Interessato
                </h2>
                <p className="mt-2">
                  L&apos;utente può esercitare in ogni momento i diritti previsti
                  dal GDPR (Artt. 15-22), tra cui:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Accesso ai propri dati e ricezione di una copia.</li>
                  <li>Rettifica o cancellazione (diritto all&apos;oblio).</li>
                  <li>Limitazione o opposizione al trattamento.</li>
                  <li>Portabilità dei dati.</li>
                </ul>
                <p className="mt-2">
                  Per esercitare tali diritti, è possibile scrivere a:{" "}
                  <a
                    href="mailto:monicamastrella@hotmail.it"
                    className="font-semibold text-san-marino-800 underline underline-offset-2 hover:text-san-marino-900"
                  >
                    monicamastrella@hotmail.it
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-10">
              <a
                href="/#contatti"
                className="group inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
              >
                Torna alla pagina principale
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
