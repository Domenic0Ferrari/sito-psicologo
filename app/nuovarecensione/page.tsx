export const metadata = {
  title: "Nuova recensione",
};

export default function NuovaRecensionePage() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <main className="w-full">
        <section className="bg-san-marino-50 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-san-marino-700">
              Recensione
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-san-marino-800 md:text-4xl">
              Condividi la tua esperienza
            </h1>
            <p className="mt-3 text-lg text-san-marino-700">
              Le testimonianze aiutano altre persone a sentirsi comprese. La
              pubblicazione avverrà dopo una breve verifica.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#recensioni"
                className="group inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
              >
                Torna alle recensioni
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <form
              className="mt-8 grid gap-4 rounded-3xl border border-san-marino-100 bg-white/90 p-8 shadow-sm"
              method="post"
              noValidate
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Nome e cognome
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Es. Giulia Rossi"
                    className="w-full rounded-2xl border border-san-marino-200 bg-white px-4 py-3 text-base text-san-marino-800 outline-none transition-colors focus:border-san-marino-400"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="nome@email.com"
                    className="w-full rounded-2xl border border-san-marino-200 bg-white px-4 py-3 text-base text-san-marino-800 outline-none transition-colors focus:border-san-marino-400"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Ambito del percorso
                  <select
                    name="focus"
                    className="w-full rounded-2xl border border-san-marino-200 bg-white px-4 py-3 text-base text-san-marino-800 outline-none transition-colors focus:border-san-marino-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleziona un ambito
                    </option>
                    <option value="ansia">Ansia e attacchi di panico</option>
                    <option value="autostima">Autostima e relazioni</option>
                    <option value="crisi">Crisi personali</option>
                    <option value="traumi">Traumi ed EMDR</option>
                    <option value="adolescenza">Adolescenza</option>
                    <option value="altro">Altro</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Valutazione
                  <select
                    name="rating"
                    className="w-full rounded-2xl border border-san-marino-200 bg-white px-4 py-3 text-base text-san-marino-800 outline-none transition-colors focus:border-san-marino-400"
                    defaultValue="5"
                  >
                    <option value="5">5 - Eccellente</option>
                    <option value="4">4 - Molto buono</option>
                    <option value="3">3 - Buono</option>
                    <option value="2">2 - Discreto</option>
                    <option value="1">1 - Da migliorare</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                La tua recensione
                <textarea
                  name="review"
                  rows={5}
                  placeholder="Racconta in breve la tua esperienza."
                  className="w-full resize-none rounded-2xl border border-san-marino-200 bg-white px-4 py-3 text-base text-san-marino-800 outline-none transition-colors focus:border-san-marino-400"
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-san-marino-700">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-1 h-4 w-4 rounded border-san-marino-300 text-san-marino-800 accent-san-marino-800"
                />
                <span>
                  Confermo che la mia recensione può essere pubblicata sul sito
                  e che i dati saranno trattati in modo riservato.
                </span>
              </label>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-san-marino-900"
              >
                Invia recensione
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
