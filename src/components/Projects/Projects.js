import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import trivago from "../../Assets/Projects/trivago.png";
import upgrad from "../../Assets/Projects/upgrad.png";
import producthunt from "../../Assets/Projects/producthunt.png";
import Tradingview from "../../Assets/Projects/tradingview.png";
import Lightweight from "../../Assets/Projects/lightweight.png";
import plugin from "../../Assets/Projects/plugin.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          5paisa.com <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Tradingview}
              title="TradingView Chart"
              description="We have implemented tradingView library in our trading platform initially only chartIQ library chart were there, We have choosen vanilla JAVASCRIPT for the implementation, this was my first project in the company and i was in charts team there."
              linklive="https://tradechart.5paisa.com/TradingViewChart/index.html?type=overview&period=1&range=d&appName=5paisa&appVer=5.11.6.0&osName=TTWEB&exchange=nse&exchType=C&symbol=Nifty50&scripCode=999920000&loginId=52776385"
              sitelink="https://tradechart.5paisa.com/TradingViewChart/index.html?type=overview&period=1&range=d&appName=5paisa&appVer=5.11.6.0&osName=TTWEB&exchange=nse&exchType=C&symbol=Nifty50&scripCode=999920000&loginId=52776385"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={Lightweight}
              title="Lightweight Chart"
              description="We were 3 in the team, we have implemented the light version of the tradingview library called lightweight, This is mainly for mobile phone users, it is come up with less functionality, we used vanillaJS for implementation"
              linklive="https://tradechart.5paisa.com/index.html?type=overview&period=1&range=d&appName=5paisa&appVer=5.11.6.0&osName=TTWEB&exchange=nse&exchType=C&symbol=Nifty50&scripCode=999920000&loginId=52776385&theme=Light"            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={plugin}
              title="5P Plugin"
              description="Developed a small library named as plugin for third party brokers, who does not have BUY SELL on there platform, whole project is developed by me, a library code written in javascript,frontend written in reactJS, backend written in nodeJS."
              linklive="https://tradechart-uat.5paisa.com/pluginDemo/index.html"
              link=""
              linkmedium=""
              
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={plugin}
              title="Derivatives"
              description="We were 6 in the team and in just 4 months we have developed a dedicated platform for F&O trading, currently no broker has dedicated platform, we have used ReactJS for its developemt, i have  developed open interest page and order page."
              linklive="https://fno.5paisa.com/"
              link="https://fno.5paisa.com/open-interest"
              linkmedium=""
              
            />
          </Col>

        </Row>
      </Container>
      // Projects during learning face
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Learning <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={upgrad}
              title="upgrad"
              description="We built this website using HTML | JAVASCRIPT | CSS, for team colloboration we used github regularly, we were 3 member in the team, indivisual has given there task and within the 4 days we deployed some main functionality like login,signup,coursecheck page etc. This was my first ever project, i really learned a lot from this."
              linklive="https://balram1996.github.io/"
              link="https://github.com/balram1996/upgrad-project-2unit"
              linkmedium="https://medium.com/@kurmibalram936/building-the-clone-of-upgrad-website-1dfbd60d1842"
              sitelink="https://www.upgrad.com/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={trivago}
              title="trivago"
              description="We built this web-clone using JAVASCRIPT | REACT | JSON-SERVER | CSS | STYLED-COMPONENT, we were 4 member in the team, for code collaboration we used github regularly, we divided our work among four according to the experties and in just 4 days we have achieved some main functionality like login, singup, hotel search, filter etc. My wholesome experiece was good, i learned a lot from this"
              linklive="https://trivagoclone.netlify.app/"
              link="https://github.com/dhirendra9032/TrivagoClone/tree/master/trivago_clone"
              linkmedium="https://medium.com/@kurmibalram936/trivago-com-clone-424f17a9261b"
              
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={producthunt}
              title="Product Hunt"
              description="We built this web-clone using JAVASCRIPT | REACT | MONGODB | CSS | MATERIAL-UI, we were 4 member in our team, for code collaboration we used github regularly, we divided our work among four according to the experties and in just 4 days we have achieved some main functionality like login, singup, product search, product registration filter etc. My wholesome experiece was good, i learned a lot from this"
              linklive="https://product-hunt-frontend.herokuapp.com/"
              link="https://github.com/gsunil1996/p-hunt-website-clone/tree/master"
              linkmedium="https://medium.com/@kurmibalram936/product-hunt-clone-c6487b81fb4b"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
