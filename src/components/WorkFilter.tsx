"use client";

import { useState } from "react";
import type { Work } from "@/content/site";
import { WorkGrid } from "./sections";
import { cn } from "./ui";

export function WorkFilter({ items }: { items: Work[] }) {
  const categories = ["Tümü", ...Array.from(new Set(items.map((w) => w.category)))];
  const [active, setActive] = useState("Tümü");
  const shown = active === "Tümü" ? items : items.filter((w) => w.category === active);

  return (
    <>
      <div role="group" aria-label="Kategoriye göre filtrele" className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-bold transition-colors",
              active === c ? "border-ink bg-ink text-paper" : "border-line hover:border-ink",
            )}
          >
            {c}
            <span className="ml-2 opacity-50">{c === "Tümü" ? items.length : items.filter((w) => w.category === c).length}</span>
          </button>
        ))}
      </div>
      <WorkGrid key={active} items={shown} />
    </>
  );
}
