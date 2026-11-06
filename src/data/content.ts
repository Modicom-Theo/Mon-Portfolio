import cvUrl from '../assets/cv.pdf';
import valoche from '../assets/val.png';
import avokia from '../assets/avokia.png';
import photoUrl from '../assets/photo.jpeg';
import logoUrl from '../assets/logo.svg';

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
  bio: [
    "Après quelques années à me demander ce que j’aimerais faire, je me consacre aujourd’hui à ma nouvelle vie d’étudiant développeur, de poloïste et de maître-nageur. J’aime les détails qui rendent une interface agréable à utiliser : des éléments clairs et simples, une hiérarchie visuelle soignée, tout en gardant une cohérence sur l’ensemble de l’application.",
    "Mon parcours n’a pas été linéaire, mais il m’a construit. J’ai vécu cinq ans au Sénégal, une expérience qui m’a ouvert les yeux, m’a appris la bienveillance et m’a poussé à agir par moi-même. Lors de mes stages en architecture du bâtiment, j’ai découvert ce que j’aime vraiment : le côté créatif, et l’idée de mener un projet jusqu’à sa réussite, quitte à passer par une dizaine d’échecs pour y arriver. J’ai ensuite fait une année de prépa ingénieur. Malgré des lacunes liées à mon parcours au lycée, j’y ai appris à persévérer et à voir l’erreur comme une étape nécessaire pour réussir.",
    "Aujourd’hui, je mets cet état d’esprit au service de mes projets : créer, tester, me tromper, corriger, jusqu’à obtenir une interface claire et agréable à utiliser.",
  ],
  location: "Bordeaux, France",
  email: "theo.modicom@gmail.com",
  disponibilité: "Disponible",
  photo: photoUrl,
  logo: logoUrl,
  situation: "En Recherche d'Alternance - Septembre 2027",
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
      "Jeu de type shoot 'em up en 2D, avec gestion des collisions, des ennemis et des projectiles.",
    stack: ["Python"],
    repoUrl: "https://github.com/Modicom-Theo/valoche_invasion",
    imageUrl: valoche,
  },
  {
    title: "Avok'IA – Jeu de tribunal IA",
    description:
      "Vous êtes accusé d'un crime et devez convaincre le jury de votre innocence. Vous pouvez chercher des preuves, interroger les témoins et plaider votre cause. Le jury est composé d'IA qui rendent leur verdict en fonction de vos arguments.",
    stack: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "AdonisJS v6"],
    repoUrl: "https://github.com/PandaGuerrier/avok-IA",
    imageUrl: avokia,
  },
];
