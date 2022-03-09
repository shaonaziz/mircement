import React from "react";

import {
  SliderContainer,
  Heading,
  ContentSlider,
  Details,
} from "./Slider.styled";
import { BsArrowDown } from "react-icons/bs";
import { Container, Card, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Member1 from "./member1.png";
import Member2 from "./member2.png";
import Member3 from "./member3.png";
import Member4 from "./member4.png";
import "./style.css";
const SliderSection = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    spaceBetween: 30,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <Container>
        <Row>
          <Col>
            <Heading>Board of Directors</Heading>
            <ContentSlider>
              <Slider {...settings}>
                <div>
                  <Card
                    style={{
                      width: "270px",
                      height: "500px",
                      border: "1px solid #fff",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={Member1}
                      style={{ width: "250px", height: "250px" }}
                    />

                    <Card.Title>
                      <Details>
                        <h3>Mr. Shama-e Zaheer</h3>
                        <p>Director & COO</p>
                      </Details>
                    </Card.Title>
                  </Card>
                </div>

                <div>
                  <Card
                    style={{
                      width: "270px",
                      height: "500px",
                      border: "1px solid #fff",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={Member2}
                      style={{ width: "250px", height: "250px" }}
                    />

                    <Card.Title>
                      <Details>
                        <h3>Mr. Shama-e Zaheer</h3>
                        <p>Director & COO</p>
                      </Details>
                    </Card.Title>
                  </Card>
                </div>

                <div>
                  <Card
                    style={{
                      width: "270px",
                      height: "500px",
                      border: "1px solid #fff",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={Member3}
                      style={{ width: "250px", height: "250px" }}
                    />

                    <Card.Title>
                      <Details>
                        <h3>Mr. Shama-e Zaheer</h3>
                        <p>Director & COO</p>
                      </Details>
                    </Card.Title>
                  </Card>
                </div>

                <div>
                  <Card
                    style={{
                      width: "270px",
                      height: "500px",
                      border: "1px solid #fff",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={Member4}
                      style={{ width: "250px", height: "250px" }}
                    />

                    <Card.Title>
                      <Details>
                        <h3>Mr. Shama-e Zaheer</h3>
                        <p>Director & COO</p>
                      </Details>
                    </Card.Title>
                  </Card>
                </div>
              </Slider>
            </ContentSlider>
          </Col>
        </Row>
        
      
            <div className="btn2">
              <a href="www.facebook.com">
                <span>Load More</span>
                <span className="arrow">
                  <BsArrowDown style={{ color: "#fff" }} />
                </span>
              </a>
            </div>
       
      
      </Container>
    </SliderContainer>
  );
};

export default SliderSection;
