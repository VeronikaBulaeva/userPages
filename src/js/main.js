import profile from "./pages/profile.js";
import map from "./pages/map.js";
import timer from "./pages/timer.js";
import errorPage from "../js/pages/404.js";

document.getElementById("menuIsOpen").onclick = function () {
  document.getElementById("headerBottomMenu").classList.toggle("is-open");
};

const timeStart = new Date().getTime();

const routes = {
  "/userPages/": { title: "Profile", render: profile },
  "/userPages/map": { title: "Map", render: map },
  "/userPages/timer": {
    title: "Timer",
    render: () => timer(timeStart),
  },
  "/userPages/404": { title: "404", render: () => errorPage() },
};

async function router() {
  let view = routes[location.pathname] || routes["/userPages/404"];
  document.title = view.title;

  if (view) {
    document.title = view.title;
    app.innerHTML = await view.render();
  } else {
    history.replaceState("", "", "/userPages/");
    router();
  }

  const timer = document.getElementById("TimerNav");
  const map = document.getElementById("MapNav");
  const activity = document.getElementById("ActivityNav");

  const pages = [
    {
      pathname: "/userPages/",
      element: activity,
    },
    {
      pathname: "/userPages/map",
      element: map,
    },
    {
      pathname: "/userPages/timer",
      element: timer,
    },
  ];

  pages.forEach((item) => {
    if (location.pathname === item.pathname) {
      item.element.classList.add("a-focus");
    } else {
      item.element.classList.remove("a-focus");
    }
  });
}

window.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
