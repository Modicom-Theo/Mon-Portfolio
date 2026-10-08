import { projects, type Project } from "../data/content";

function renderCard(project: Project): string {
  const tags = project.stack
    .map((tag) => `<span class="font-mono text-xs text-muted">${tag}</span>`)
    .join("");

  const links = [
    project.repoUrl
      ? `<a href="${project.repoUrl}" class="text-sm text-paper underline decoration-wire underline-offset-4 hover:text-signal hover:decoration-signal">code</a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const image = project.imageUrl
    ? `<img src="${project.imageUrl}" alt="${project.title}" loading="lazy"
         class="h-28 w-28 shrink-0 object-cover" />`
    : "";

  return `
    <article class="flex flex-col gap-5 border border-wire/60 p-6 transition-colors hover:border-paper/40 sm:flex-row">
      ${image}
      <div>
        <h3 class="text-lg text-paper">${project.title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted">${project.description}</p>
        <div class="mt-5 flex flex-wrap gap-3">${tags}</div>
        <div class="mt-6 flex gap-4">${links}</div>
      </div>
    </article>
  `;
}

export function renderProjects(): string {
  const cards = projects.map(renderCard).join("");

  return `
    <section id="projects" class="border-t border-wire/60 py-20">
      <div class="mx-auto max-w-5xl px-6">
        <p class="font-mono text-sm text-signal">// projets</p>
        <div class="mt-6 grid gap-6 sm:grid-cols-2">${cards}</div>
      </div>
    </section>
  `;
}
