//Router
import "./router";
import { state } from "./state";
import { initFooter } from "./components/hands";
import "../client/components/Countdown";
function main() {
  state.getData();
  initFooter();
}
main();
