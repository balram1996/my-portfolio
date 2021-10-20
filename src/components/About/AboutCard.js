import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balram Kurmi </span>
            from <span className="purple"> Bhopal, Madhya Pradesh</span>
            <br /> I have done my graduation from Barkatullah  University in the specialization of B.Sc(mathematics)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Chilling out with friends
            </li>
          </ul>

          <p style={{ marginBlockEnd: 15, color: "#4DBEF3" }}>
            "Keen to build things that Can solve problems!"
          </p>
          <footer className="blockquote-footer">Balram Kurmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
