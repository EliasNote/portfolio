import moonAndStar from "../assets/moon-and-star.png";
import Experiencias from "./Experiencias";
import Habilidades from "./Habilidades";

const Noite = () => {
	return (
		<div id="noite">
			<img id="moon" src={moonAndStar} />
			<div id="content">
				<Habilidades />
				<Experiencias />
			</div>
		</div>
	);
};

export default Noite;
