import React from "react";

const Experiencias = () => {
	return (
		<div id="experiences">
			<h2>Experiências</h2>
			<div id="experiences-container">
				<div className="experience" style={{ marginRight: "750px" }}>
					<h4>Compass UOL - Programa de Bolsas | Estágio</h4>
					<p>mar 2024 - ago 2024</p>
					<p>
						Experiência na criação de microsserviços com Java e Spring Boot e as
						suas tecnologias, por meio de cursos e projetos realizados em grupo
					</p>
				</div>
				<div className="experience" style={{ marginLeft: "750px" }}>
					<h4>Compass UOL - Programador Back-End Java e Python</h4>
					<p>out 2024 - mar 2025</p>
					<p>
						Atuação no suporte às atividades de back-end, incluindo o
						desenvolvimento de APIs utilizando Java com Spring WebFlux e Python
						com FastAPI, além da realização de documentação do projeto.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experiencias;
