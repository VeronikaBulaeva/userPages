import profile from "./pages/profile";
import map from "./pages/map";
import timer from "./pages/timer";

sessionStorage.setItem("timeStart", new Date().getTime().toString());

document.getElementById("menuIsOpen").onclick = function () {
  document.getElementById("headerBottomMenu").classList.toggle("is-open");
};

const routes = {
  "/": { title: "Profile", render: profile },
  "/map": { title: "Map", render: map },
  "/timer": { title: "Timer", render: timer },
};

function router() {
  let view = routes[location.pathname];
  document.title = view.title;

  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
  } else {
    history.replaceState("", "", "/");
    router();
  }

  const timer = document.getElementById("TimerNav");
  const map = document.getElementById("MapNav");
  const activity = document.getElementById("ActivityNav");

  switch (location.pathname) {
    case "/timer":
      timer.classList.add("a-focus");
      map.classList.remove("a-focus");
      activity.classList.remove("a-focus");
      break;

    case "/map":
      map.classList.add("a-focus");
      activity.classList.remove("a-focus");
      timer.classList.remove("a-focus");
      break;

    case "/":
      activity.classList.add("a-focus");
      timer.classList.remove("a-focus");
      map.classList.remove("a-focus");
      break;
  }
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
