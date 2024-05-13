import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  Menja from "../../Assets/Projects/Menja.PNG"
import  Blog from "../../Assets/Projects/Capture.PNG"
import  Snake from "../../Assets/Projects/snake.PNG"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Menja }
              isBlog={false}
              title="Menja Game"
              description=" my toughest game crafted by pure HTML ,Css and Js in which there are two mode play game and other one is casual mode in which user slices the boxes to earn points and also set a highscore of that points ."
              ghLink="https://github.com/harisahmedjs/Menja-Game-js"
              demoLink="https://harisahmedjs.github.io/Menja-Game-js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ Blog }
              isBlog={false}
              title="Blogging App"
              description="My personal blogging app build with pure HTML ,Css & Js  which allow user to login, signup, pusblish blog and password change functionality very easily and smoothly."
              ghLink="https://github.com/harisahmedjs/Blogging-app"
              demoLink="https://haris-blogging.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ Snake }
              isBlog={false}
              title="Snake Game"
              description="My first Game crafted with pure HTML ,Css and Js in which the snake eats the foods to get bigger and is controlled by four arrow keys "
              ghLink="https://github.com/harisahmedjs/Snake-Game-js"
              demoLink="https://harisahmedjs.github.io/Snake-Game-js/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
