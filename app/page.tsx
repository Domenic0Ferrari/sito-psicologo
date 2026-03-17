"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export default function Home() {
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

    const email = String(data.get("email") ?? "").trim();
    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Inserisci un'email valida.";
    }
    if (!fullName) {
      nextErrors.fullName = "Inserisci nome e cognome.";
    }
    if (!phone) {
      nextErrors.phone = "Inserisci un numero di telefono.";
    }
    if (!message) {
      nextErrors.message = "Scrivi un breve messaggio.";
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

    const payload = {
      email,
      fullName,
      phone,
      message,
      consent,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore invio");
        }
        setFormStatus("success");
        form.reset();
      })
      .catch(() => {
        setFormStatus("error");
      })
      .finally(() => {
        if (statusTimerRef.current) {
          window.clearTimeout(statusTimerRef.current);
        }
        statusTimerRef.current = window.setTimeout(() => {
          setFormStatus("idle");
          statusTimerRef.current = null;
        }, 3000);
      });
  };

  return (
    <div id="top" className="min-h-screen bg-background pt-14">
      <main className="w-full">
        <section className="bg-san-marino-50 px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-s font-semibold uppercase tracking-[0.28em] text-san-marino-700">
                Benvenuti
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-san-marino-800">
                Dottoressa Monica Mastrella, psicologa ad Avezzano
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
                  className="group inline-flex w-fit items-center justify-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-san-marino-900 cursor-pointer"
                >
                  Chi Sono
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#contatti"
                  className="bg-white group inline-flex w-fit items-center justify-center rounded-full border border-san-marino-300 px-5 py-2.5 text-base font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
                >
                  Contattami
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[32px] border border-san-marino-100 bg-white/70 shadow-lg">
              <Image
                src="/profilo_1.jpeg"
                alt="Ritratto della Dottoressa Monica Mastrella, psicologa ad Avezzano"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 40vw, 80vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* <section className="bg-white px-4 py-12 md:px-8 md:py-16">
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
                  className="group mt-5 inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
                >
                  Scopri di più
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section> */}

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
                className="group mt-6 inline-flex items-center rounded-full border-2 border-wild-willow-800 bg-wild-willow-800 px-5 py-2.5 text-base font-semibold text-background transition-colors hover:bg-wild-willow-900 cursor-pointer"
              >
                Contattami
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
            <div className="rounded-3xl border border-wild-willow-100 bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-wild-willow-800">
                Formazione e qualifiche
              </h3>
              <div className="relative mt-4 pl-8">
                <div className="pointer-events-none absolute bottom-1 left-3 top-1 w-px bg-wild-willow-200" />
                <ul className="space-y-5 text-base text-wild-willow-700">
                  {[
                    {
                      text: "Laurea in Psicologia Clinica e della Salute presso l’Università  degli Studi “Gabriele d’Annunzio” di Chieti, con votazione 110 e lode.",
                    },
                    {
                      text: "Master di II livello in Psicodiagnostica e Valutazione Psicologica presso l’Università LUMSA di Roma.",
                    },
                    {
                      text: "Specializzazione in Psicoterapia Cognitivo-Comportamentale presso l’Istituto Beck di Roma",
                    },
                    {
                      text: "Abilitazione alla psicoterapia EMDR.",
                    },
                    {
                      text: "Corso di perfezionamento in CBT-E (Enhanced Cognitive Behavioural Therapy) presso il Centro per i Disturbi dell’Alimentazione di Verona diretto dal Dott. Riccardo Dalle Grave",
                    },
                  ].map((item) => (
                    <li key={item.text} className="relative">
                      <span className="absolute -left-[22px] top-2 inline-flex h-3 w-3 rounded-full bg-wild-willow-400 ring-4 ring-wild-willow-50" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                    className="group mt-5 inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-sm font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
                  >
                    Contattami
                    <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
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
                className="group mt-6 inline-flex items-center rounded-full border border-san-marino-300 bg-white px-5 py-2.5 text-base font-semibold text-san-marino-800 transition-colors hover:border-san-marino-500 hover:bg-san-marino-100 cursor-pointer"
              >
                Contattami
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
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

        <ReviewsCarousel />

        <section
          id="contatti"
          className="bg-white px-4 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-san-marino-100 bg-san-marino-50/70 p-6 md:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-san-marino-800">
                Richiedi una consulenza o contattami per maggiori informazioni
              </h2>
              <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-san-marino-800">
                    I miei studi:
                  </p>
                  <ul className="mt-3 space-y-2 text-base text-san-marino-700">
                    <li>- Avezzano, Via XX Settembre n° 74</li>
                    <li>- Consulenza online</li>
                  </ul>
                </div>
                <div className="md:text-right">
                  <p className="text-lg font-semibold text-san-marino-800">
                    I miei contatti:
                  </p>
                  <ul className="mt-3 space-y-2 text-base text-san-marino-700">
                    <li>
                      <a
                        href="tel:+393276504478"
                        className="hover:text-san-marino-900"
                      >
                        - 327 650 4478
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:monicamastrella@hotmail.it"
                        className="hover:text-san-marino-900"
                      >
                        - monicamastrella@hotmail.it
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <form className="grid gap-4" noValidate onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={formErrors.email ? "email-error" : undefined}
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
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Nome e cognome
                  <input
                    type="text"
                    name="fullName"
                    required
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
                    <span id="fullname-error" className="text-xs text-red-600">
                      {formErrors.fullName}
                    </span>
                  )}
                </label>
                <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                  Telefono
                  <input
                    type="tel"
                    name="phone"
                    required
                    aria-invalid={Boolean(formErrors.phone)}
                    aria-describedby={
                      formErrors.phone ? "phone-error" : undefined
                    }
                    className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                      formErrors.phone ? "border-red-400" : "border-san-marino-200"
                    }`}
                  />
                  {formErrors.phone && (
                    <span id="phone-error" className="text-xs text-red-600">
                      {formErrors.phone}
                    </span>
                  )}
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-san-marino-800">
                Messaggio
                <textarea
                  name="message"
                  rows={3}
                  required
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={
                    formErrors.message ? "message-error" : undefined
                  }
                  className={`w-full resize-none rounded-xl border bg-white px-3 py-2 text-sm text-san-marino-800 outline-none transition-colors focus:border-san-marino-400 ${
                    formErrors.message
                      ? "border-red-400"
                      : "border-san-marino-200"
                  }`}
                />
                {formErrors.message && (
                  <span id="message-error" className="text-xs text-red-600">
                    {formErrors.message}
                  </span>
                )}
              </label>
              <label className="flex items-start gap-3 text-sm text-san-marino-700">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  aria-invalid={Boolean(formErrors.consent)}
                  aria-describedby={
                    formErrors.consent ? "consent-error" : undefined
                  }
                  className="mt-1 h-4 w-4 rounded border-san-marino-300 text-san-marino-800 accent-san-marino-800"
                />
                <span>
                  Acconsento al trattamento dei dati personali secondo quanto indicato nella{" "}
                  <a
                    href="/privacy-policy"
                    className="underline underline-offset-2 hover:text-san-marino-900"
                  >
                    privacy policy
                  </a>
                  , ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003.
                </span>
              </label>
              {formErrors.consent && (
                <span id="consent-error" className="text-xs text-red-600">
                  {formErrors.consent}
                </span>
              )}
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center rounded-full border-2 border-san-marino-800 bg-san-marino-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-san-marino-900 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Invio..." : "Invia"}
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
              {formStatus === "success" && (
                <span className="text-xs font-semibold text-emerald-700">
                  Messaggio inviato correttamente.
                </span>
              )}
              {formStatus === "error" && (
                <span className="text-xs font-semibold text-red-600">
                  Errore durante l’invio. Riprova tra poco.
                </span>
              )}
            </form>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-san-marino-800">
                Puoi trovarmi anche su
              </span>
              <a
                href="https://www.facebook.com/share/181hsHPg6q/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-san-marino-200 bg-white text-san-marino-700 transition-colors hover:border-san-marino-400 hover:text-san-marino-900"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M13.5 9.5H16l-.3 2.8h-2.2V20h-3V12.3H8.4V9.5h2.1V7.6c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1V7h-1c-1 0-1.3.6-1.3 1.2v1.3Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/momas_92?igsh=MWxhZWdldzc3YWo4Nw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-san-marino-200 bg-white text-san-marino-700 transition-colors hover:border-san-marino-400 hover:text-san-marino-900"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M16.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  <path d="M12 8.3A3.7 3.7 0 1 0 12 15.7 3.7 3.7 0 0 0 12 8.3Zm0 6A2.3 2.3 0 1 1 12 9.7a2.3 2.3 0 0 1 0 4.6Z" />
                  <path d="M16.8 4H7.2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4Zm1.7 12.8a1.7 1.7 0 0 1-1.7 1.7H7.2a1.7 1.7 0 0 1-1.7-1.7V7.2A1.7 1.7 0 0 1 7.2 5.5h9.6a1.7 1.7 0 0 1 1.7 1.7Z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-san-marino-50 px-4 py-6 md:px-8">
          <div className="mx-auto max-w-6xl text-center text-xs text-san-marino-700">
            Copyright 2026 Monica Mastrella Psicologa - P. IVA 12345678 - Via
            XX Settembre 74 Avezzano (AQ) - Tel: 3276504478 -
            monicamastrella@hotmail.it
          </div>
        </footer>
      </main>
    </div>
  );
}
