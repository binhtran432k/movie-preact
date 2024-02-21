import { render } from "preact";
import { App } from "./App.tsx";
import "./index.css";

const app = document.getElementById("app");
if (app) {
  render(<App />, app);
}
