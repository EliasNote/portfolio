import { useEffect } from "react";
import Montanha1 from "../assets/montanha1.svg";
import Montanha2 from "../assets/montanha2.svg";
import Montanha3 from "../assets/montanha3.svg";
import Montanha4 from "../assets/montanha4.svg";
import Montanha5 from "../assets/montanha5.svg";
import Montanha6 from "../assets/montanha6.svg";

const Paisagem = () => {
	useEffect(() => {
		const handleScroll = () => {
			document.documentElement.style.setProperty(
				"--scroll",
				window.scrollY + "px"
			);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div id="paisagem">
			<div id="sol"></div>
			<img className="montanha montanha1" src={Montanha1} alt="Montanha 1" />
			<img className="montanha montanha2" src={Montanha2} alt="Montanha 2" />
			<img className="montanha montanha3" src={Montanha3} alt="Montanha 3" />
			<img className="montanha montanha4" src={Montanha4} alt="Montanha 4" />
			<img className="montanha montanha5" src={Montanha5} alt="Montanha 5" />
			<img className="montanha montanha6" src={Montanha6} alt="Montanha 6" />
		</div>
	);
};

export default Paisagem;
