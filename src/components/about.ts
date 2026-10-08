import { profile } from "../data/content";

export function renderAbout(): string {
  return `
    <section id="about" class="border-t border-wire/60 py-20">
      <div class="mx-auto max-w-5xl px-6">
        <p class="font-mono text-sm text-signal">// à propos</p>

        <div class="mt-6 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <p class="max-w-[62ch] text-lg leading-relaxed text-paper">${profile.bio}</p>

          <dl class="space-y-4 border-l border-wire/60 pl-6 font-mono text-sm">
            <div>
              <dt class="text-muted">localisation</dt>
              <dd class="text-paper">${profile.location}</dd>
            </div>
            <div>
              <dt class="text-muted">disponibilité</dt>
              <dd class="text-paper">${profile.disponible}</dd>
            </div>
            <div>
              <dt class="text-muted">contact</dt>
              <dd>
                <a href="mailto:${profile.email}" class="text-paper hover:text-signal">${profile.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  `;
}
