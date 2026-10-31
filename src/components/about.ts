import { profile } from "../data/content";
import { section } from "./section";

export function renderAbout() {
  const bio = profile.bio.map((p) => `<p>${p}</p>`).join("");

  return section("about", "à propos", `
    <div class="mt-6 grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
      <img src="${profile.logo}" alt="" class="w-32 md:w-56" />
      <div class="space-y-5 text-lg leading-relaxed text-paper">${bio}</div>
    </div>
  `);
}
