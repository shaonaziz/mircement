import React from "react";
import { Container,Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
// import Abs from "./abstract.png";
import ChairmanImage from "./chairman.png";
import "./Chairman.css";
const Chairman = () => {
  return (
    <section className="pt-80 pb-80">
      <div className="Cbg">
       
        <Container>
          <div className="row">
            <Col md={7} className='col-md-7'>
              <div>
                <h3 className="HeaderStyle">Message from Chairman</h3>
                <p className="Message">
                  Thank you for visiting the website of Mir concrete products
                  Ltd. MCPL is producing Ready Mix Concrete and Concrete Block
                  products to distribute best quality products for the
                  construction to achieve complete satisfaction of the
                  customers.
                </p>
                <p className="Message">
                  Our main concern is manufacturing classic item that always
                  ensure quality and longevity of the building structure. Our
                  Ready Mix concrete is over designed to attain desire strength.
                </p>
                <p className="Message">
                  We have different sized and shaped block for various use. We
                  reinforce our process to acquire the necessity and
                  requirements of customers
                </p>
              </div>
              <div className="read">
                Read More <BsArrowRight />
              </div>
            </Col>
            <Col xs={4} className='col-md-4'>
              <div className="chobi">
                <img src={ChairmanImage} alt="" />
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Chairman;
