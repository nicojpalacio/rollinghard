import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Lanav } from "./Components/Lanav";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import { leerDeLocalStorage } from "./Utils/localStorage";

const hardwareLocal = leerDeLocalStorage('hardwares') || [];


function App() {
  const [seccion, setSeccion] = useState("admin");
  const [hardwares, setHardwares] = useState(hardwareLocal)
  return (
    <div className="footer-fix">
      <Lanav setSeccion={setSeccion} />
      <Container>
        {seccion === "home" && <Home hardwares={hardwares} />}
        {seccion === "admin" && <Admin hardwares={hardwares} setHardwares={setHardwares} />}
        {seccion === "login" && <Login />}
        {seccion === "perfil" && <Perfil />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
