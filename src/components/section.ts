
export const section = (id: string, label: string, content: string) => `
  <section id="${id}" class="border-t border-wire/60 py-20">
    <div class="mx-auto max-w-7xl px-6">
      <p class="font-mono text-sm text-signal">// ${label}</p>
      ${content}
    </div>
  </section>
`;
