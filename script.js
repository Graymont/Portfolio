const projects = [
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeatherMap API.",
    demoLink: "https://yourdemo1.com",
    codeLink: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Todo List",
    description: "A basic todo app with local storage support.",
    demoLink: "https://yourdemo2.com",
    codeLink: "https://github.com/yourusername/todo-app"
  }
];

const container = document.getElementById("project-list");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.demoLink}" target="_blank">Live Demo</a> |
    <a href="${project.codeLink}" target="_blank">Source Code</a>
  `;
  container.appendChild(card);
});
