import { profile, socials } from "../data/content";
import { section } from "./section";

export function renderContact() {
  const links = socials
    .map((s) => `<a href="${s.url}" target="_blank" rel="noreferrer" class="border border-wire px-4 py-2 text-sm text-paper transition-colors hover:border-signal hover:text-signal">${s.label}</a>`)
    .join("");

  return section("contact", "contact", `
    <h2 class="mt-6 max-w-lg text-3xl leading-snug text-paper">Un projet, une question ? Écris-moi.</h2>
    <a href="mailto:${profile.email}" class="mt-6 inline-block font-mono text-xl text-signal hover:underline">${profile.email}</a>
    <div class="mt-8 flex flex-wrap gap-3">${links}</div>
  `);
}
