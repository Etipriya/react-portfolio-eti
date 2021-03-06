import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";

const ContactContainer = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Contact</h1>
      </div>
      <Container>
        <div className="py-5 my-5">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default ContactContainer;
