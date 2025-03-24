import moonAndStar from "../assets/moon-and-star.png";
import Experiencias from "./Qualificacoes";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";

const Noite = () => {
	return (
		<div id="noite">
			<img id="moon" src={moonAndStar} />
			<div id="content">
				<Habilidades />
				<Experiencias />
				<Projetos />
			</div>
		</div>
	);
};

export default Noite;
