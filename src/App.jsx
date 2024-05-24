import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Detalle from "./views/Detalle";
import DetallePedido from "./views/DetallePedido.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="productos/:id" element={<Detalle />} />

        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<DetallePedido />} />
      </Routes>
    </div>
  );
}

export default App;
