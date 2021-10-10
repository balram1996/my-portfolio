import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trivago from "../../Assets/Projects/trivago.png";
import upgrad from "../../Assets/Projects/upgrad.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={upgrad}
              title="upgrad"
              description="upgrad is a well known educational website that offers online course, where user can find the desire course in which he wants to persue his higher education. Trying to Developed a look alike of it, categorizing them with rating. Tech Stack used -  Javascript, html, css, mongodb. Done in collaboration with 4 members, under a week."
              link="https://github.com/balram1996/upgrad-project-2unit"
              linkmedium="https://medium.com/@kurmibalram936/building-the-clone-of-upgrad-website-1dfbd60d1842"
              // linklive="https://hotwire.netlify.app/"
              sitelink="https://www.upgrad.com/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={trivago}
              title="trivago"
              description="trivago is a website that is a hotel and weekend plans booking website that helps users to find the best deal, convert leads, and close customers. It does this by bringing together a variety of functionalities and allowing customers to manage all their activities in one place. Its all about the hotel search, you can search hotel in one place"
              sitelink="https://www.trivago.com/"
              link="https://github.com/dhirendra9032/TrivagoClone/tree/master/trivago_clone"
              linkmedium="https://medium.com/@kurmibalram936/trivago-com-clone-424f17a9261b"
              // linklive="https://monsterindia.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
