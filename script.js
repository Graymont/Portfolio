const projects = [
  {
    title: "Factory",
    description: "Spigot Factory plugin with various Machine Types!",
    demoLink: "factory.html", // link to local HTML page
    codeLink: "https://github.com/yourusername/spigot-factory"
  },
  {
    title: "Nazra Quest",
    description: "A Complete Spigot MMORPG plugin with various items, classes, skills, and quests.",
    demoLink: "nazraquest.html",
    codeLink: "https://github.com/Graymont/Nazra-Quest"
  }
];

const container = document.getElementById("project-list");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">
      <a href="${project.demoLink}" target="_blank" class="button demo">Live Demo</a>
      <a href="${project.codeLink}" target="_blank" class="button code">Source Code</a>
    </div>
  `;
  container.appendChild(card);
});
