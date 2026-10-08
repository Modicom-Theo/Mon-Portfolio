import "./style.css";
import { renderHeader } from "./components/header";
import { renderHero } from "./components/hero";
import { renderAbout } from "./components/about";
import { renderStack } from "./components/stack";
import { renderProjects } from "./components/projects";
import { renderContact } from "./components/contact";
import { renderFooter } from "./components/footer";
import { initInteractions } from "./utils/interactions";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderStack()}
      ${renderProjects()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  initInteractions();
}
