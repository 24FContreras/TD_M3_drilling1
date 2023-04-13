console.log("🟢Connected");

const main = document.querySelector("main");
const news = document.createElement("section");

let fecha = new Date().toLocaleDateString("es-cl", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

fecha = fecha.replaceAll("-", "/");

news.className = "text-center shadow-lg px-5 py-4 bg-white";

news.innerHTML = `
<h2>¡Apresúrese!</h2>
<p class="lead">El plazo para inscribirse es solo 2 días después de la siguiente fecha:</p>
<p class="fw-semibold fs-3"></p>
<h3>${fecha}</h3>
`;

main.insertBefore(news, main.children[0]);
