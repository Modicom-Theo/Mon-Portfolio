import { stack } from "../data/content";

export function renderStack(): string {
  const chips = stack
    .map(
      (item) =>
        `<span class="border border-wire px-3 py-1.5 font-mono text-sm text-paper">${item}</span>`
    )
    .join("");

  return `
    <section id="stack" class="border-t border-wire/60 py-20">
      <div class="mx-auto max-w-5xl px-6">
        <p class="font-mono text-sm text-signal">// stack</p>
        <div class="mt-6 flex flex-wrap gap-3">${chips}</div>
      </div>
    </section>
  `;
}
