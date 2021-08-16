import Container from "react-bootstrap/Container";
import Projects from "../components/Projects";

const ProjectsContainer = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Projects</h1>
      </div>
      <Container>
        <div className="p-3">
          <Projects />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsContainer;
