import React from "react";
import { Carousel, Container } from "react-bootstrap";
import images from "../../assets/images/home-page (2).png";

function Projects(props) {
  return (
    <Container className="my-3 py-3">
      <Carousel>
        {/* Project 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="First slide" />
          <Carousel.Caption>
            <h3>Geo-Link</h3>
            <a
              href="https://ivnkris.github.io/geo-link/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              Geo Link is a website to connect people around the world. This
              makes it easier to make friends and meet up people. This website
              is easy to use and quickly accessible. Connects you to various
              people through your interests and activities. Hope you enjoy it !!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Second slide" />

          <Carousel.Caption>
            <h3>Tri-via-hub</h3>
            <a
              href="https://github.com/Etipriya/tri-via-hub"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              Tri-via-hub website is a single platform on which you could play
              quizzes and create quizzes related to nature, history, sports,
              science, geography etc.On the homepage they will be presented with
              some quiz categories (with images). Once they click on a category
              it will take them to the page for that category where they can
              view the quizzes for that category.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 3 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Third slide" />

          <Carousel.Caption>
            <h3>Workout Tracker</h3>
            <a
              href="https://github.com/Etipriya/workout-tracker"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              The workout-tracker app allows a users to track their physical
              activity for a week at a time. Simply create a new workout, choose
              between cardio and resistance and then enter your information. You
              can continue your last workout by adding additional workouts. Once
              finished with a workout the app will calculate your total workout
              duration for the day. On the dashboard you can click on the link
              to be provided with a chart that breaks down your activity for
              you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 4 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Fourth slide" />

          <Carousel.Caption>
            <h3>Note Taker</h3>
            <a
              href="https://github.com/Etipriya/note-taker"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              Note taker is an application that uses an express backend to save,
              retrieve and delete notes from JSON file. The user starts at home
              page. On the home page, the user clicks the "Get Started" button
              to navigate to the notes page.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 5 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Fifth slide" />

          <Carousel.Caption>
            <h3>Tech Blog</h3>
            <a
              href="https://github.com/Etipriya/tech-blog"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              This is an application where developers can publish their blog
              posts and comment on other developers’ posts as well. Any post or
              comment could be deleted with a click of a button. Also any
              comment could be added easily.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 6 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Sixth slide" />

          <Carousel.Caption>
            <h3>Code Quiz</h3>
            <a
              href="https://github.com/Etipriya/code_quiz"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              This is a quiz related to Javascript. It contains multiple choice
              questions informs that your answer is correct or wrong. gives you
              high score by the end.This quiz is time based, so the player must
              be quick in answering. By the end of the quiz, player must enter
              his/her name and click the button Submit. To view the high score,
              one should click on theHighScores Button on the top left side.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 7 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Seventh slide" />

          <Carousel.Caption>
            <h3>Weather Dashboard</h3>
            <a
              href="https://github.com/Etipriya/weather-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              This website shows the current weather and the 5-day forecast
              also. This has form inputs when anyone search for a city. Then
              current and future forecast of that city is shown and city is
              added to the search history. This website show the 5-day forecast
              for the specified city. When clicked on a city name in search
              history, it shows the current weather and forecasted weather of
              that city. UV index is presented with a color if it reached below
              the average range.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 8 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Eighth slide" />

          <Carousel.Caption>
            <h3>Budget Tracker</h3>
            <a
              href="https://github.com/Etipriya/budget-tracker"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              Budget Tracker is a progressive web application that allows users
              to track their budgets by adding expenses and deposits to their
              budget through the "Add/Subtract Funds" buttons.When a user enters
              a transaction while offline, these transactions are stored in the
              indexedDB, and transferred to the database when the user comes
              back online. This application is easy to use.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 9 */}
        <Carousel.Item>
          <img className="d-block w-100" src={images} alt="Ninth slide" />

          <Carousel.Caption>
            <h3>Password Generator</h3>
            <a
              href="https://github.com/Etipriya/password_generator"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
            <p>
              Password generator is a web application that generates random
              passwords inside your browser. Features include: Passwords never
              leave your device - all data stays in your browser and no network
              requests are made. Generated Passwords are impossible to predict
              or manipulate. Different options to control how passwords are
              generated, including number of digits, number of symbols.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projects;
