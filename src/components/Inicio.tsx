import Aviao from "../assets/aviao.png";

const Inicio = () => {
	return (
		<div id="inicio">
			<div>
				<span style={{ fontSize: "48px" }}>Olá, eu sou o Elias</span>
				<br />
				<b style={{ fontSize: "56px" }}>Desenvolvedor</b>
			</div>
			<img src={Aviao} id="aviao" width={"200px"} />
		</div>
	);
};

export default Inicio;
