# Template portfolio — Vite + TypeScript + Tailwind CSS

## Structure

```
index.html                    shell HTML, polices Google Fonts
src/
  main.ts                     point d'entrée, assemble toutes les sections
  style.css                   import Tailwind + jetons de thème (couleurs, polices)
  data/
    content.ts                ⭐ tout le contenu texte : à modifier en priorité
  components/
    header.ts                 nav + menu mobile
    hero.ts                   bloc d'intro façon extrait de code
    about.ts                  bio + infos rapides
    stack.ts                  liste des compétences
    projects.ts                grille de projets (générée depuis content.ts)
    contact.ts                 email + liens sociaux
    footer.ts
  utils/
    interactions.ts           ouverture/fermeture du menu mobile
```

Chaque section est une simple fonction `render...()` qui retourne une chaîne HTML.
`main.ts` les assemble dans `#app`. Pas de framework, pas de build de composants :
tu peux ouvrir n'importe quel fichier et changer le HTML/les classes directement.

## Installer dans ton projet

Copie le dossier `src/` et le fichier `index.html` par-dessus ceux de ton projet
Vite existant (garde ton `package.json`, `tsconfig.json` et `vite.config.ts`).

Il te faut Tailwind CSS **v4** avec le plugin Vite officiel :

```bash
npm install tailwindcss @tailwindcss/vite
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

Si tu es encore en Tailwind v3 : remplace la première ligne de `src/style.css`
(`@import "tailwindcss";`) par les trois directives classiques
(`@tailwind base; @tailwind components; @tailwind utilities;`), déplace le contenu
du bloc `@theme` dans `theme.extend` de ton `tailwind.config.js`, et garde
`postcss.config.js`.

## Personnaliser

- **Contenu** : tout se passe dans `src/data/content.ts` (nom, bio, projets, liens).
- **Couleurs / polices** : bloc `@theme` en haut de `src/style.css`.
- **Sections** : ajoute ou retire un appel dans `src/main.ts` pour ajouter/enlever
  une section (ex. une section "expériences").
- **Design** : la direction actuelle est un thème "éditeur de code" (fond sombre,
  police mono pour les extraits, en-têtes en style commentaire `//`). Change les
  jetons de couleur et de police dans `style.css` pour partir sur une autre direction.
