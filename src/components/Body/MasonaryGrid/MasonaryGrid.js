import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import M1 from "./m1.png";
import M2 from "./m2.png";

import "./Mstyled.css";

const MasonryGrid = () => {
  return (
    <section className="pt-80 pb-80 bgColor">
      <Container>
        <Row className="justify-content-md-center">
          <div className="mission-vision__single">
            <Col className="col-md-6" md={6}>
              <div className="mission-vision__single__left">
                <h2 className="headerStyle">Our Vision</h2>
                <p className="paraStyle">
                  The vision of Mir Concrete Block, in alignment with its sister
                  organizations, is to strive to improve the overall
                  construction industry of Bangladesh by introducing new
                  technologies and practices that have defined the
                  infrastructure of the modern world.
                </p>
              </div>
            </Col>
            <Col md={6} className="col-md-6">
              <div className="mission-vision__single__right uq">
                <img src={M1} alt="" />
              </div>
            </Col>
          </div>
        
            <div className="mission-vision__single">
              <Col md={6} className="col-md-6">
                <div className="mission-vision__single__right">
                  <img src={M2} alt="" />
                </div>
              </Col>
              <Col md={6} className="col-md-6">
                <div className="mission-vision__single__left uq1">
                  <h2 className="headerStyle">Our Mission</h2>
                  <p className="paraStyle">
                    Keeping our vision in mind, we established a production
                    plant in Gabtoli for Concrete Blocks, Ready Mix Concrete,
                    Terrazzo Tiles, Paving Blocks, Pre-stressed Pre-cast Plates
                    and Beams for RCC buildings
                  </p>
                </div>
              </Col>
            </div>
        </Row>
      </Container>
    </section>
  );
};

export default MasonryGrid;
