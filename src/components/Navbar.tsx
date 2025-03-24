import { useEffect } from "react";
import downloadIcon from "../assets/download-icon.svg";

const Navbar = () => {
	useEffect(() => {
		const handleScroll = () => {
			const scrollMax = document.body.scrollHeight - window.innerHeight;
			const scrollFraction = window.scrollY / scrollMax;
			const alpha = Math.min(0.7, scrollFraction * 0.7);
			const nav = document.querySelector("nav");
			if (nav) {
				nav.style.backgroundColor = `rgba(255,255,255,${alpha})`;
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav>
			<img id="logo" src="" width={"130px"} height={"42px"} alt="logo" />
			<div id="botoes-container">
				<button className="botao-central">Habilidades</button>
				<button className="botao-central">Qualificações</button>
				<button className="botao-central">Projetos</button>
				<button className="botao-central">Contato</button>
			</div>
			<button id="botao-curriculo">
				<div>Currículo</div>
				<img src={downloadIcon} />
			</button>
		</nav>
	);
};

export default Navbar;
