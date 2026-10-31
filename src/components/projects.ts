import { projects, type Project } from "../data/content";
import { section } from "./section";

function card(p: Project) {
  const tags = p.stack.map((t) => `<span class="font-mono text-xs text-muted">${t}</span>`).join("");

  return `
    <article class="flex flex-col gap-5 border border-wire/60 p-6 transition-colors hover:border-paper/40 sm:flex-row">
      ${p.imageUrl ? `<img src="${p.imageUrl}" alt="${p.title}" loading="lazy" class="h-28 w-28 shrink-0 object-cover" />` : ""}
      <div>
        <h3 class="text-lg text-paper">${p.title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted">${p.description}</p>
        <div class="mt-5 flex flex-wrap gap-3">${tags}</div>
        ${p.repoUrl ? `<a href="${p.repoUrl}" class="mt-6 inline-block text-sm text-paper underline decoration-wire underline-offset-4 hover:text-signal hover:decoration-signal">code</a>` : ""}
      </div>
    </article>
  `;
}

export function renderProjects() {
  return section("projects", "projets", `
    <div class="mt-6 grid gap-6 sm:grid-cols-2">${projects.map(card).join("")}</div>
  `);
}
