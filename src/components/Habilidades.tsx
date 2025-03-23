import nestjs from "../assets/habilidades/nestjs.svg";
import python from "../assets/habilidades/python.svg";
import java from "../assets/habilidades/java.svg";
import javaScript from "../assets/habilidades/java-script.svg";
import kafka from "../assets/habilidades/kafka.svg";
import docker from "../assets/habilidades/docker.svg";
import react from "../assets/habilidades/react.svg";
import spring from "../assets/habilidades/spring.svg";
import figma from "../assets/habilidades/figma.svg";
import aws from "../assets/habilidades/aws.svg";

const Habilidades = () => {
	return (
		<div id="skills">
			<h2>Habilidades</h2>
			<div id="skills-container">
				<div className="skill">
					<img src={nestjs} />
					<p>NestJs</p>
				</div>
				<div className="skill">
					<img src={python} />
					<p>Python</p>
				</div>
				<div className="skill">
					<img src={spring} />
					<p>Spring Boot</p>
				</div>
				<div className="skill">
					<img src={java} />
					<p>Java</p>
				</div>
				<div className="skill">
					<img src={javaScript} />
					<p>Java Script</p>
				</div>
				<div className="skill">
					<img src={docker} />
					<p>Docker</p>
				</div>
				<div className="skill">
					<img src={kafka} />
					<p>Kafka</p>
				</div>
				<div className="skill">
					<img src={react} />
					<p>React</p>
				</div>
				<div className="skill">
					<img src={figma} />
					<p>Figma</p>
				</div>
				<div className="skill">
					<img src={aws} />
					<p>Aws</p>
				</div>
			</div>
		</div>
	);
};

export default Habilidades;
