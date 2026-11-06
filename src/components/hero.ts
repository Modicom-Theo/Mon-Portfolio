import { profile } from "../data/content";

export function renderHero() {
  return `
    <section id="hero" class="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div class="grid gap-16 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-28">
        <div>
          <pre class="m-0 whitespace-pre-wrap wrap-break-word font-mono text-[clamp(1.05rem,3.2vw,1.9rem)] leading-relaxed text-paper"><code><span class="text-mint">const</span> dev = {
  name: <span class="text-signal">"${profile.name}"</span>,
  role: <span class="text-signal">"${profile.role}"</span>,
  location: <span class="text-signal">"${profile.location}"</span>,
  disponibilité: <span class="text-signal">"${profile.disponibilité}"</span>,
  situation: <span class="text-signal">"${profile.situation}"</span>,
};</code></pre>

          <p class="mt-8 max-w-xl text-lg text-muted">${profile.tagline}</p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              class="border border-signal px-5 py-3 text-sm text-signal transition-colors hover:bg-signal hover:text-ink"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              class="border border-wire px-5 py-3 text-sm text-paper transition-colors hover:border-paper"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div class="min-w-0">
          <div data-water class="water-frame mx-auto aspect-square w-96 max-w-full md:mr-0 md:w-[28rem]">
            <svg class="water-ring" aria-hidden="true"><path /></svg>
            <div class="water-photo">
              <img
                src="${profile.photo}"
                alt="Photo de ${profile.name}"
                class="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}