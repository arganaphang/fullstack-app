import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: must be defined in index.html
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<main className="min-h-screen flex items-center justify-center">
			<h1>Todo App</h1>
		</main>
	</StrictMode>,
);
