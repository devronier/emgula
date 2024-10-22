import { Link } from "react-router-dom";

import food from "../assets/images/food.svg";

function Inicio() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-16">
      <div className="md:w-1/2">
        <img
          src={food}
          alt="Comida deliciosa"
          className="w-full max-w-md object-cover"
        />
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-6" style={{ color: "#FF0000" }}>
          Bem-vindo ao Emgula!
        </h1>

        <p className="text-gray-700 mb-4 text-lg sm:text-xl">
          Onde você vai saborear pratos irresistíveis... e quem sabe engolir um
          pouco mais do que esperava!
        </p>
        <p className="text-gray-700 mb-6 text-lg sm:text-xl">
          Prepare-se para uma experiência gastronômica que vai deixar você
          querendo "engolir" cada momento.
        </p>

        <Link to="/contato">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundColor: "#FF0000" }}
          >
            Fale Conosco
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Inicio;
