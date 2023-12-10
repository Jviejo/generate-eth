import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNetwork from "./components/AddNetwork.jsx";
import ListNetworks from "./components/ListNetworks.jsx";
import Home from "./components/Home.jsx";
import DisplayNetwork from "./components/DisplayNetwork.jsx";
import Operaciones from "./components/Operaciones.jsx";
import Faucet from "./components/Faucet.jsx";
import Transfer from "./components/Transfer.jsx";
import Bloques from "./components/Bloques.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/net/add" element={<AddNetwork />} />
        <Route path="/net/list" element={<ListNetworks />} />
        <Route path="/net/:net/display" element={<DisplayNetwork />} />
        <Route path="/net/:net/edit" element={<AddNetwork />} />
        <Route path="/net/:net/operaciones" element={<Operaciones />} >
          <Route path="faucet" element={<Faucet />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="bloques" element={<Bloques />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
