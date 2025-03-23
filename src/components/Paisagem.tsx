import { useEffect } from "react";
import Montanha1 from "../assets/montanha1.svg";
import Montanha2 from "../assets/montanha2.svg";
import Montanha3 from "../assets/montanha3.svg";
import Montanha4 from "../assets/montanha4.svg";
import Montanha5 from "../assets/montanha5.svg";
import Montanha6 from "../assets/montanha6.svg";
import Nuvem1 from "../assets/nuvem1.svg";
import Nuvem2 from "../assets/nuvem2.svg";
import Nuvem3 from "../assets/nuvem3.svg";
import Nuvem4 from "../assets/nuvem4.svg";

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
			<div id="clouds">
				<img
					className="montanha nuvem1"
					src={Nuvem1}
					loading="lazy"
					alt="Nuvem 1"
				/>
				<img
					className="montanha nuvem2"
					src={Nuvem2}
					loading="lazy"
					alt="Nuvem 2"
				/>
				<img
					className="montanha nuvem3"
					src={Nuvem3}
					loading="lazy"
					alt="Nuvem 3"
				/>
				<img
					className="montanha nuvem4"
					src={Nuvem4}
					loading="lazy"
					alt="Nuvem 4"
				/>
			</div>
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
