import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrowRight } from "react-icons/bs";
import Abstract from "./abstract.png";
import "./Intro.css";

const Introduction = () => {
  return (
    <section className="pt-80 pb-80">
      <div className="abstractBg">
        <img src={Abstract} alt="" />
        <Container>
          <Row className="row">
            <Col md={12}>
              <div>
                <h3 className="Title">Who We Are</h3>
                <div>
                  <p className="details">
                    A concrete block is primarily used as a building material in
                    the construction of walls. It is sometimes called a concrete
                    masonry unit (CMU) .A concrete block is one of several
                    precast concrete products used in construction. The term
                    precast refers to the fact that the blocks are formed and
                    hardened before they are brought to the job site.
                  </p>
                </div>
              </div>

              <div className="r">
                Read More <BsArrowRight />
              </div>
           
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Introduction;
