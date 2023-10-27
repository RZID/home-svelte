// CSSes
import "./assets/styles/index.css";

// Components
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app") as HTMLElement
});

export default app;
