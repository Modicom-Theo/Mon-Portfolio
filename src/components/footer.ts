import { profile } from "../data/content";

export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="border-t border-wire/60 py-8">
      <div class="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; ${year}</p>
        <p>Conçu et développé par ${profile.name}</p>
      </div>
    </footer>
  `;
}
