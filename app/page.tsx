import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <main className="w-full">
        {/* Hero: full-bleed 100vw, immagine copre tutta la larghezza */}
        <section className="relative w-screen max-w-none bg-azzurro-chiaro ml-[calc(-50vw+50%)]">
          <div className="relative aspect-16/10 w-full md:aspect-2/1">
            <Image
              src="/hero.png"
              alt="Seduta di ascolto in un ambiente luminoso e accogliente"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </section>
        <section className="bg-verdino-chiaro/50 px-4 py-12 md:py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Benvenuti
            </h2>
            <p className="mt-4 text-lg text-foreground/90">
              Sono la dottoressa Maria Rossi, psicologa e psicoterapeuta.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-12 md:py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Formazione e qualifiche
            </h2>
            <p className="mt-4 text-lg text-foreground/90">
              Laurea in Psicologia presso l’Università degli Studi di [Nome], 
              specializzazione in psicoterapia cognitivo-comportamentale. 
              Iscritta all’Albo degli Psicologi della [Regione] n. 12345. 
              Formazione continua in terapia EMDR e mindfulness applicata al contesto clinico.
            </p>
          </div>
        </section>

        <section className="bg-azzurro-chiaro/50 px-4 py-12 md:py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Aree di intervento
            </h2>
            <p className="mt-4 text-lg text-foreground/90">
              Ansia, disturbi dell’umore, difficoltà relazionali e di coppia, 
              elaborazione del lutto, stress e burnout. Lavoro con adulti e 
              adolescenti in un setting accogliente e riservato, adattando 
              gli strumenti al singolo percorso.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
