import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "./icons";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Logodaki "kalın cool / ince media" kontrastını yazı ile yeniden kurar. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline leading-none tracking-[-0.04em]", className)}>
      <span className="font-extrabold">cool</span>
      <span className="font-extralight">media</span>
    </span>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "accent" | "ink" | "outline" | "outline-light";
  children: ReactNode;
};

export function Button({ variant = "accent", className, children, ...props }: ButtonProps) {
  const styles = {
    accent: "bg-accent text-ink hover:bg-paper",
    ink: "bg-ink text-paper hover:bg-accent hover:text-ink",
    outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    "outline-light": "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  }[variant];
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-3 pr-3 pl-6 text-sm font-bold transition-colors duration-300",
        styles,
        className,
      )}
      {...props}
    >
      {children}
      <span className="grid size-8 place-items-center rounded-full bg-current/10 transition-transform duration-500 ease-out-expo group-hover:rotate-45">
        <ArrowUpRight width={16} height={16} />
      </span>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark,
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  dark?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow && <p className={cn("eyebrow mb-5", dark ? "text-paper/70" : "text-muted")}>{eyebrow}</p>}
        <h2 className="display text-4xl text-balance sm:text-5xl lg:text-6xl">{title}</h2>
        {text && (
          <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", dark ? "text-paper/70" : "text-muted")}>
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export function Marquee({
  children,
  duration = 40,
  className,
  reverse,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn("flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]", className)}
    >
      <div
        className={cn("flex w-max shrink-0 animate-marquee hover:[animation-play-state:paused]", reverse && "[animation-direction:reverse]")}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Dönen "hayal et, cool'sun!" rozeti */
export function SpinBadge({ className }: { className?: string }) {
  return (
    <div className={cn("relative grid size-32 place-items-center sm:size-36", className)} aria-hidden>
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-current text-[11px] font-bold tracking-[0.32em] uppercase">
          <textPath href="#badge-circle">hayal et • cool&apos;sun • hayal et • cool&apos;sun •</textPath>
        </text>
      </svg>
      <span className="grid size-12 place-items-center rounded-full bg-accent text-ink">
        <ArrowUpRight width={22} height={22} />
      </span>
    </div>
  );
}
