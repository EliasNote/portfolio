import downloadIcon from "../assets/download-icon.svg";

const Navbar = () => {
	return (
		<nav>
			<img src="" alt="logo" />
			<div>
				<button>Habilidades</button>
				<button>Experiências</button>
				<button>Projetos</button>
			</div>
			<button id="botao-curriculo">
				<div>Currículo</div>
				<img src={downloadIcon} />
			</button>
		</nav>
	);
};

export default Navbar;
