import React from "react";
import { Carousel, Container } from "react-bootstrap";

import images from "../../assets/images/geo-homepage.png";
import images2 from "../../assets/images/tri-home.png";
import images3 from "../../assets/images/fitness-tracker-home.png";
import images4 from "../../assets/images/note-home.png";
import images5 from "../../assets/images/tech-home.png";
import images6 from "../../assets/images/code-home.png";
import images7 from "../../assets/images/weather-home.png";
import images8 from "../../assets/images/budget-tracker-home.png";
import images9 from "../../assets/images/password-home.png";

function Projects(props) {
  return (
    <Container className="my-3 py-3">
      <Carousel>
        {/* Project 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="First slide" />

          <h3>Geo-Link</h3>
          <a
            href="https://ivnkris.github.io/geo-link/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images2} alt="Second slide" />
          <h3>Tri-via-hub</h3>
          <a
            href="https://github.com/Etipriya/tri-via-hub"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 3 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images3} alt="Third slide" />

          <h3>Workout Tracker</h3>
          <a
            href="https://github.com/Etipriya/workout-tracker"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 4 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images4} alt="Fourth slide" />

          <h3>Note Taker</h3>
          <a
            href="https://github.com/Etipriya/note-taker"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 5 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images5} alt="Fifth slide" />

          <h3>Tech Blog</h3>
          <a
            href="https://github.com/Etipriya/tech-blog"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 6 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images6} alt="Sixth slide" />

          <h3>Code Quiz</h3>
          <a
            href="https://github.com/Etipriya/code_quiz"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 7 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images7} alt="Seventh slide" />

          <h3>Weather Dashboard</h3>
          <a
            href="https://github.com/Etipriya/weather-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 8 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images8} alt="Eighth slide" />

          <h3>Budget Tracker</h3>
          <a
            href="https://github.com/Etipriya/budget-tracker"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>

        {/* Project 9 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images9} alt="Ninth slide" />

          <h3>Password Generator</h3>
          <a
            href="https://github.com/Etipriya/password_generator"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Link
          </a>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projects;
