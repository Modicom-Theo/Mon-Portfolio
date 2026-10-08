import { profile } from "../data/content";

const NAV_LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export function renderHeader(): string {
  const links = NAV_LINKS.map(
    (link) =>
      `<a href="${link.href}" class="text-sm text-muted transition-colors hover:text-paper">${link.label}</a>`
  ).join("");

  return `
    <header class="sticky top-0 z-40 border-b border-wire/60 bg-ink/90 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" class="font-mono text-sm text-paper">
          <span class="text-signal">~/</span>${initials(profile.name)}
        </a>

        <nav class="hidden items-center gap-8 md:flex">
          ${links}
        </nav>

        <button
          id="menu-toggle"
          class="flex h-9 w-9 items-center justify-center border border-wire text-paper md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded="false"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" stroke-width="1.4" />
          </svg>
        </button>
      </div>

      <nav id="mobile-menu" class="hidden flex-col gap-1 border-t border-wire/60 px-6 py-4 md:hidden">
        ${links}
      </nav>
    </header>
  `;
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
