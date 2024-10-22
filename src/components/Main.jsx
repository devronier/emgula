import { Route, Routes } from "react-router-dom";
import Cardapio from "../pages/Cardapio";
import Contato from "../pages/Contato";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import Sobre from "../pages/Sobre";

function Main(props) {
  return (
    <main className={`p-6 ${props.dark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
