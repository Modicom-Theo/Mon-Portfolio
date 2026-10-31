import { stack } from "../data/content";
import { section } from "./section";

export function renderStack() {
  const chips = stack
    .map((tech) => `<span class="border border-wire px-3 py-1.5 font-mono text-sm text-paper">${tech}</span>`)
    .join("");

  return section("stack", "stack", `<div class="mt-6 flex flex-wrap gap-3">${chips}</div>`);
}
