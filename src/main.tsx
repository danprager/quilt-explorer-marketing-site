import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const r = new URLSearchParams(window.location.search).get('r');

if (r) { window.history.replaceState(null, '', r); }

createRoot(document.getElementById("root")!).render(<App />);
