import { Router } from "@vaadin/router";

//Pages
import "./pages/home";
import "./pages/name";
import "./pages/insert-code";
import "./pages/code";
import "./pages/instructions";
import "./pages/wait";
import "./pages/game";
import "./pages/play";
import "./pages/result";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/new-code", component: "insert-code" },
  { path: "/name", component: "name-page" },
  { path: "/codigo", component: "code-page" },
  { path: "/instruccion", component: "instructions-page" },
  { path: "/esperar", component: "wait-page" },
  { path: "/juego", component: "game-page" },
  { path: "/jugada", component: "play-page" },
  { path: "/resultado", component: "result-page" },
]);
