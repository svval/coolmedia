"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { company, services } from "@/content/site";
import { ArrowUpRight, WhatsApp } from "./icons";
import { cn } from "./ui";

const topics = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "kariyer", label: "Kariyer / İş başvurusu" },
  { value: "diger", label: "Diğer" },
];

type Fields = { name: string; email: string; phone: string; topic: string; message: string };

export function ContactForm() {
  const params = useSearchParams();
  const initialTopic = topics.some((t) => t.value === params.get("konu")) ? params.get("konu")! : "";
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function read(form: HTMLFormElement): Fields {
    const d = new FormData(form);
    return {
      name: String(d.get("name") ?? "").trim(),
      email: String(d.get("email") ?? "").trim(),
      phone: String(d.get("phone") ?? "").trim(),
      topic: String(d.get("topic") ?? ""),
      message: String(d.get("message") ?? "").trim(),
    };
  }

  function validate(f: Fields) {
    const e: typeof errors = {};
    if (f.name.length < 2) e.name = "Lütfen adınızı yazın.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Geçerli bir e-posta adresi girin.";
    if (f.message.length < 10) e.message = "Mesajınız en az 10 karakter olmalı.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function compose(f: Fields) {
    const topic = topics.find((t) => t.value === f.topic)?.label ?? "Genel";
    const body = `${f.message}\n\n—\nAd Soyad: ${f.name}\nE-posta: ${f.email}${f.phone ? `\nTelefon: ${f.phone}` : ""}\nKonu: ${topic}`;
    return { subject: `Web sitesi talebi: ${topic}`, body };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = read(e.currentTarget);
    if (!validate(f)) return;
    const { subject, body } = compose(f);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function onWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form!;
    const f = read(form);
    if (!validate(f)) return;
    const { subject, body } = compose(f);
    window.open(`${company.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-line bg-white px-5 py-4 text-base outline-none transition-colors placeholder:text-muted/70 focus:border-ink";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" error={errors.name} id="name">
          <input id="name" name="name" autoComplete="name" className={cn(field, errors.name && "border-red-500")} placeholder="Adınız" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        </Field>
        <Field label="E-posta" error={errors.email} id="email">
          <input id="email" name="email" type="email" autoComplete="email" className={cn(field, errors.email && "border-red-500")} placeholder="ornek@firma.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
        <Field label="Telefon (isteğe bağlı)" id="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="05xx xxx xx xx" />
        </Field>
        <Field label="Konu" id="topic">
          <select id="topic" name="topic" defaultValue={initialTopic} className={cn(field, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 10 10%22><path d=%22M1 3.5 5 7l4-3.5%22 fill=%22none%22 stroke=%22%230c0c0d%22 stroke-width=%221.5%22/></svg>')] bg-[position:right_1.25rem_center] bg-no-repeat pr-12")}>
            <option value="">Bir konu seçin</option>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Mesajınız" error={errors.message} id="message">
        <textarea id="message" name="message" rows={6} className={cn(field, "resize-y", errors.message && "border-red-500")} placeholder="Projenizden, hedeflerinizden kısaca bahsedin…" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
      </Field>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-ink py-3 pr-3 pl-7 font-bold text-paper transition-colors hover:bg-accent hover:text-ink">
          E-posta ile gönder
          <span className="grid size-9 place-items-center rounded-full bg-paper/10 transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight width={16} height={16} />
          </span>
        </button>
        <button type="button" onClick={onWhatsApp} className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-4 font-bold transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white">
          <WhatsApp /> WhatsApp ile gönder
        </button>
      </div>
      <p className="text-sm text-muted" role="status">
        {sent
          ? "Teşekkürler! Mesajınız e-posta / WhatsApp uygulamanızda hazırlandı, göndermeyi onaylamanız yeterli."
          : "Mesajınız seçtiğiniz uygulamada hazırlanır; bilgileriniz bu sitede saklanmaz."}
      </p>
    </form>
  );
}

function Field({ label, error, id, children }: { label: string; error?: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
