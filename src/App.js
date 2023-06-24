import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Service from "./pages/Service";
import Reviews from "./pages/Reviews";
import Comments from "./pages/Comments";
import { Container, Row } from "react-bootstrap";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header />
          <Home />
          <Service />
          <Reviews />
          <br />
          <br />
          <Comments />
        </Row>
      </Container>
    </div>
  );
}

export default App;
