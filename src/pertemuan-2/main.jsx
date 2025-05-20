import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import ArtikelDetail from "./ArtikelDetail";
import "./custom.css";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  <div>
    <Container>
        <ArtikelDetail/>
    </Container>
  </div>
);
