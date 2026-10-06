"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  // Sunucuda gerçek değer basılır; yalnızca ekran dışındaysa sıfırdan sayılır.
  const [n, setN] = useState(value);
  const animate = useRef(false);
  useEffect(() => {
    const el = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (el && !reduced && el.getBoundingClientRect().top > window.innerHeight) {
      animate.current = true;
      setN(0);
    }
  }, [ref]);
  useEffect(() => {
    if (!inView || !animate.current) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden>
        {n}
        {suffix}
      </span>
    </span>
  );
}
