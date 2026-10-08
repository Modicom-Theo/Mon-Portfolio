import cvUrl from '../assets/cv.pdf';
import valoche from '../assets/val.png';
import avokia from '../assets/avokia.png';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  imageUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const profile = {
  name: "Théo Modicom",
  role: "Développeur",
  tagline:
    "Je construis des interfaces rapides, accessibles et soignées, du prototype à la mise en production.",
  bio: "Après quelques années à me demander ce que j'aimerai faire, Aujourd'hui je me consacre a ma nouvelle vie d'etudiant développeur et maitre nageur. J'aime les détails qui rendent une interface agréable à utiliser : les elements clair et simples, concevoir une hierrachie visuelle tout en gardant une coherance sur l'enssemble de l'application ",
  location: "Bordeaux, France",
  email: "theo.modicom@gmail.com",
  disponible: "Disponible pour des missions freelance",

};

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Modicom-Theo" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/theo-modicom-783a59264/?isSelfProfile=true" },
  { label: "CV (PDF)", url: cvUrl },
];

export const stack: string[] = [
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Vite",
  "Git",
  "Figma",
];

export const projects: Project[] = [
  {
    title: "Valoche Invasion",
    description:
      "Jeu de type shoot'em up en 2D, avec gestion des collisions, des ennemis et des projectiles.",
    stack: ["Python"],
    repoUrl: "#",
    imageUrl: valoche,
  },
  {
    title: "Avok'IA - Jeux de tribunal IA",
    description:
      "Vous etes acusez d'un crime et vous devez convaincre le jury de votre innocence. Vous pouvez chercher des preuves, interroger les temoins et plaider votre cause. Le jury est compose d'IA qui prendront une decision en fonction de vos arguments.",
    stack: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Adonis.JS v6"],
    repoUrl: "https://github.com/PandaGuerrier/avok-IA",
    imageUrl: avokia,
  },
];
