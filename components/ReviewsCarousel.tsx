"use client";

import { useState } from "react";

type Review = {
  quote: string;
  name: string;
  focus: string;
};

const reviews: Review[] = [
  {
    quote:
      "Mi sono sentita accolta fin dal primo incontro. Ho imparato a riconoscere i segnali dell’ansia e a gestirli con strumenti concreti.",
    name: "Giulia, 32",
    focus: "Ansia e attacchi di panico",
  },
  {
    quote:
      "Il percorso mi ha aiutato a ritrovare chiarezza in un momento di forte confusione personale. Un supporto discreto ma molto presente.",
    name: "Marco, 41",
    focus: "Crisi personali",
  },
  {
    quote:
      "Ho lavorato sulla mia autostima e sulle relazioni: oggi mi sento più sicura e capace di comunicare i miei bisogni.",
    name: "Sara, 28",
    focus: "Autostima e relazioni",
  },
  {
    quote:
      "Il lavoro con l’EMDR è stato delicato e rispettoso. Ho potuto rielaborare eventi che mi bloccavano da anni.",
    name: "Luca, 37",
    focus: "Traumi ed EMDR",
  },
  {
    quote:
      "Per mio figlio adolescente è stato importante avere uno spazio di ascolto. Ha ritrovato motivazione e serenità.",
    name: "Paola, 45",
    focus: "Adolescenza",
  },
];

export default function ReviewsCarousel() {
  const total = reviews.length;
  const pageSize = 2;
  const totalPages = Math.ceil(total / pageSize);
  const [pageIndex, setPageIndex] = useState(0);
  const start = pageIndex * pageSize;
  const pageReviews = reviews.slice(start, start + pageSize);
  const end = Math.min(start + pageSize, total);

  const goPrev = () =>
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  const goNext = () => setPageIndex((prev) => (prev + 1) % totalPages);

  return (
    <section
      id="recensioni"
      className="bg-san-marino-50 px-4 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-san-marino-700">
              Recensioni
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-san-marino-800 md:text-3xl">
              Esperienze di chi ha intrapreso un percorso
            </h2>
            <p className="mt-3 text-lg text-san-marino-700">
              Alcune testimonianze raccolte per mostrare come il lavoro
              terapeutico può aiutare nei momenti di difficoltà.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-san-marino-900 cursor-pointer"
              aria-label="Recensione precedente"
            >
              Precedente
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
              aria-label="Recensione successiva"
            >
              Successiva
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2" aria-live="polite">
          {pageReviews.map((review, reviewIndex) => (
            <div
              key={`${review.name}-${reviewIndex}`}
              className={`rounded-3xl border border-san-marino-100 bg-white/90 p-8 shadow-sm ${
                reviewIndex === 1 ? "hidden md:block" : ""
              }`}
            >
              <p className="text-lg text-san-marino-800 md:text-xl">
                “{review.quote}”
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-san-marino-700">
                <span className="rounded-full bg-san-marino-100 px-3 py-1 text-san-marino-700">
                  {review.focus}
                </span>
                <span className="font-semibold text-san-marino-800">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-san-marino-700">
          <span>
            Recensioni {start + 1}-{end} di {total}
          </span>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, dotIndex) => (
              <button
                key={`review-dot-${dotIndex}`}
                type="button"
                onClick={() => setPageIndex(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition-colors cursor-pointer ${
                  dotIndex === pageIndex
                    ? "bg-san-marino-800"
                    : "bg-san-marino-200 hover:bg-san-marino-300"
                }`}
                aria-label={`Vai alla pagina ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
