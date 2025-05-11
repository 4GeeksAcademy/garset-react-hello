import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import kawa5 from "../../img/kawa5.jpg";
import kawa3 from "../../img/kawa3.jpg";
import kawa4 from "../../img/kawa4.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="text-center">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row justify-content-center" style={{ marginTop: "40px" }}>
					<div className="col-md-6 col-lg-4">
						<Card
							image={kawa5}
							title="Componentes de alta tecnología"
							description="Ficha técnica de las diferentes Kawasakis"
						/>
					</div>
					<div className="col-md-6 col-lg-4">
						<Card
							image={kawa3}
							title="Modelos"
							description="Para todos los gustos con diferentes modelos"
						/>
					</div>
					<div className="col-md-6 col-lg-4">
						<Card
							image={kawa4}
							title="Accesorios"
							description="Todos los extras que le puedes agregar"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;