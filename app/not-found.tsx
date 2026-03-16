import Link from "next/link";

export const metadata = {
  title: "Pagina non trovata",
  description: "La pagina che stai cercando non è disponibile.",
};

export default function NotFound() {
  return (
    <main className="w-full">
      <section className="bg-san-marino-50 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-san-marino-700">
            Errore 404
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-san-marino-800 md:text-5xl">
            Questa pagina non esiste
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-san-marino-700">
            Il link potrebbe essere errato o la pagina potrebbe essere stata
            spostata. Puoi tornare alla home o contattarmi per informazioni.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-san-marino-900"
            >
              Torna alla Home
            </Link>
            <Link
              href="/#contatti"
              className="inline-flex items-center justify-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-base font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100"
            >
              Contattami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
