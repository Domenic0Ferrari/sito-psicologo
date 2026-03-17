"use client";

import { useEffect, useRef, useState } from "react";

export default function NuovaRecensionePage() {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const errorTimerRef = useRef<number | null>(null);
  const statusTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      return;
    }
    if (errorTimerRef.current) {
      window.clearTimeout(errorTimerRef.current);
    }
    errorTimerRef.current = window.setTimeout(() => {
      setFormErrors({});
      errorTimerRef.current = null;
    }, 3000);
    return () => {
      if (errorTimerRef.current) {
        window.clearTimeout(errorTimerRef.current);
        errorTimerRef.current = null;
      }
    };
  }, [formErrors]);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        window.clearTimeout(statusTimerRef.current);
        statusTimerRef.current = null;
      }
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const focus = String(data.get("focus") ?? "").trim();
    const rating = String(data.get("rating") ?? "").trim();
    const review = String(data.get("review") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!fullName) {
      nextErrors.fullName = "Inserisci nome e cognome.";
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Inserisci un'email valida.";
    }
    if (!focus) {
      nextErrors.focus = "Seleziona un ambito.";
    }
    if (!rating) {
      nextErrors.rating = "Seleziona una valutazione.";
    }
    if (!review) {
      nextErrors.review = "Scrivi la tua recensione.";
    }
    if (!consent) {
      nextErrors.consent = "È necessario accettare il trattamento dei dati.";
    }

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setFormErrors(nextErrors);
      const firstField = Object.keys(nextErrors)[0];
      const firstElement = form.elements.namedItem(firstField);
      if (firstElement && "focus" in firstElement) {
        (firstElement as HTMLElement).focus();
      }
      return;
    }

    setFormErrors({});
    event.preventDefault();
    setFormStatus("sending");

    // Invio disabilitato: nessun metodo di salvataggio collegato
    setTimeout(() => {
      setFormStatus("success");
      form.reset();
      if (statusTimerRef.current) {
        window.clearTimeout(statusTimerRef.current);
      }
      statusTimerRef.current = window.setTimeout(() => {
        setFormStatus("idle");
        statusTimerRef.current = null;
      }, 3000);
    }, 600);
  };

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
                href="/"
                className="group inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
              >
                Torna alla Home
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <form
              className="mt-8 grid gap-4 rounded-3xl border border-san-marino-100 bg-white/90 p-8 shadow-sm"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2 md:items-start">
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Nome e cognome
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Es. Giulia Rossi"
                    aria-invalid={Boolean(formErrors.fullName)}
                    aria-describedby={
                      formErrors.fullName ? "fullname-error" : undefined
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                      formErrors.fullName
                        ? "border-red-400"
                        : "border-san-marino-200"
                    }`}
                  />
                  {formErrors.fullName && (
                    <span
                      id="fullname-error"
                      className="text-xs text-red-600"
                    >
                      {formErrors.fullName}
                    </span>
                  )}
                </label>
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="nome@email.com"
                    aria-invalid={Boolean(formErrors.email)}
                    aria-describedby={
                      formErrors.email ? "email-error" : undefined
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                      formErrors.email ? "border-red-400" : "border-san-marino-200"
                    }`}
                  />
                  {formErrors.email && (
                    <span id="email-error" className="text-xs text-red-600">
                      {formErrors.email}
                    </span>
                  )}
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:items-start">
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Ambito del percorso
                  <select
                    name="focus"
                    aria-invalid={Boolean(formErrors.focus)}
                    aria-describedby={
                      formErrors.focus ? "focus-error" : undefined
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                      formErrors.focus
                        ? "border-red-400"
                        : "border-san-marino-200"
                    }`}
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
                  {formErrors.focus && (
                    <span id="focus-error" className="text-xs text-red-600">
                      {formErrors.focus}
                    </span>
                  )}
                </label>
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Valutazione
                  <select
                    name="rating"
                    aria-invalid={Boolean(formErrors.rating)}
                    aria-describedby={
                      formErrors.rating ? "rating-error" : undefined
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                      formErrors.rating
                        ? "border-red-400"
                        : "border-san-marino-200"
                    }`}
                    defaultValue="5"
                  >
                    <option value="5">5 - Eccellente</option>
                    <option value="4">4 - Molto buono</option>
                    <option value="3">3 - Buono</option>
                    <option value="2">2 - Discreto</option>
                    <option value="1">1 - Da migliorare</option>
                  </select>
                  {formErrors.rating && (
                    <span id="rating-error" className="text-xs text-red-600">
                      {formErrors.rating}
                    </span>
                  )}
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                La tua recensione
                <textarea
                  name="review"
                  rows={4}
                  placeholder="Racconta in breve la tua esperienza."
                  aria-invalid={Boolean(formErrors.review)}
                  aria-describedby={
                    formErrors.review ? "review-error" : undefined
                  }
                  className={`w-full resize-none rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                    formErrors.review
                      ? "border-red-400"
                      : "border-san-marino-200"
                  }`}
                />
                {formErrors.review && (
                  <span id="review-error" className="text-xs text-red-600">
                    {formErrors.review}
                  </span>
                )}
              </label>

              <label className="flex items-start gap-3 text-sm text-san-marino-700">
                <input
                  type="checkbox"
                  name="consent"
                  aria-invalid={Boolean(formErrors.consent)}
                  aria-describedby={
                    formErrors.consent ? "consent-error" : undefined
                  }
                  className="mt-1 h-4 w-4 rounded border-san-marino-300 text-san-marino-800 accent-san-marino-800"
                />
                <span>
                  Confermo che la mia recensione può essere pubblicata sul sito
                  e acconsento al trattamento dei dati secondo la{" "}
                  <a
                    href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-san-marino-900"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
              {formErrors.consent && (
                <span id="consent-error" className="text-xs text-red-600">
                  {formErrors.consent}
                </span>
              )}

              <button
                type="submit"
                className="hover:cursor-pointer group mt-2 inline-flex items-center justify-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-san-marino-900 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Invio..." : "Invia recensione"}
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
              {formStatus === "success" && (
                <span className="text-xs font-semibold text-emerald-700">
                  Recensione inviata correttamente.
                </span>
              )}
              {formStatus === "error" && (
                <span className="text-xs font-semibold text-red-600">
                  Errore durante l&apos;invio. Riprova più tardi.
                </span>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
