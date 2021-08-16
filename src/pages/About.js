import Container from "react-bootstrap/Container";
import About from "../components/About";

const AboutContainer = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">About</h1>
      </div>
      <Container>
        <div className="p-3">
          <About />
        </div>
      </Container>
    </div>
  );
};

export default AboutContainer;
