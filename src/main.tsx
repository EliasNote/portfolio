import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Paisagem from "./components/Paisagem";
import Noite from "./components/Noite";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<style>
			@import
			url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
		</style>
		<Navbar />
		<Inicio />
		<Paisagem />
		<Noite />
	</StrictMode>
);
