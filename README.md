# Portfolio — Théo Modicom

Portfolio personnel construit avec Vite, TypeScript et Tailwind CSS.

## Stack

- TypeScript
- Tailwind CSS
- Vite

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est alors accessible sur `notreadyyet`.


## Structure

```
public/
  icon.png              icône d'onglet (favicon)
src/
  assets/                images et fichiers utilisés dans le contenu (photo, CV, captures de projets)
  components/             une fonction render...() par section du site
  data/
    content.ts            tout le contenu texte : nom, bio, compétences, projets, liens
  utils/
    interactions.ts        menu mobile et autres petites interactions
  style.css                styles Tailwind + jetons de couleur/police du thème
  main.ts                  point d'entrée, assemble les sections
index.html
```

## Modifier le contenu

Tout le texte (nom, bio, projets, liens sociaux) se trouve dans `src/data/content.ts`.
C'est le seul fichier à éditer pour mettre le site à jour — les sections se
regénèrent automatiquement à partir de ces données.

Les couleurs et les polices se règlent dans le bloc `@theme` en haut de `src/style.css`.
