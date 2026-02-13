"use client";

import type { BulletItem, ContentSubsection } from "@/data/models";

export function DetailBullets({ items }: { items: BulletItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-ink-muted)]">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-faint)]" />
          <div>
            <span className="leading-relaxed">{item.text}</span>
            {item.subItems && item.subItems.length > 0 && (
              <ul className="mt-1 space-y-1 pl-3">
                {item.subItems.map((sub, j) => (
                  <li key={j} className="flex items-start gap-2 text-[11px] text-[var(--color-ink-faint)]">
                    <span className="mt-1.5 h-0.5 w-0.5 shrink-0 rounded-full bg-[var(--color-border)]" />
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function DetailSection({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="panel rounded-lg p-5">
      <h3
        className="data-label mb-3"
        style={accent ? { color: accent } : undefined}
      >
        {title}
      </h3>
      <div className="hud-bar mb-4 rounded" />
      {children}
    </div>
  );
}

export function DetailSubsection({
  title,
  items,
}: {
  title: string;
  items: BulletItem[];
}) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-ink-faint)]">
        {title}
      </h4>
      <DetailBullets items={items} />
    </div>
  );
}

export function ContentSubsections({
  sections,
}: {
  sections?: ContentSubsection[];
}) {
  if (!sections || sections.length === 0) return null;
  return (
    <>
      {sections.map((sec, i) => (
        <DetailSubsection key={i} title={sec.title} items={sec.items} />
      ))}
    </>
  );
}
