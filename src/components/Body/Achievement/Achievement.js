import React, { useEffect, useRef } from "react";

import {
  Acontainer,
  Heading,
  CardContainer,
  Title,
  CardText,
  ReadMore,
} from "./Achievement.Styled";
import "./Achievement.css";
import { Container, Card } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Achievement.css";
const Achievement = () => {
  const boxRef = useRef();
  const customeSlider = useRef();

  

  const settings = {
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=160" });
  });
  const style = {
    width: "270px",
    height: "400px",
    backgroundColor: "#314550",
  };
  return (
    <Acontainer>
      <Container>
        <Heading>Achievements</Heading>
        <CardContainer>
          <Slider {...settings} ref={customeSlider}>
            <div className="cardRes">
              <Card  style={style}>
                <Card.Body>
                  <small className="year">2012</small>
                
                    <div>
                      <Card.Title>
                        <Title>Lorem Ipsum Dolor</Title>
                      </Card.Title>

                      <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <ReadMore>
                          Read More <BsArrowRight/>
                        </ReadMore>
                      </CardText>
                    </div>
                </Card.Body>
              </Card>
            </div>
            <div className="cardRes">
              <Card  style={style}>
                <Card.Body>
                  <small className="year">2012</small>
                
                    <div>
                      <Card.Title>
                        <Title>Lorem Ipsum Dolor</Title>
                      </Card.Title>

                      <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <ReadMore>
                          Read More <BsArrowRight/>
                        </ReadMore>
                      </CardText>
                    </div>
                </Card.Body>
              </Card>
            </div>
            <div className="cardRes">
              <Card  style={style}>
                <Card.Body>
                  <small className="year">2012</small>
                
                    <div>
                      <Card.Title>
                        <Title>Lorem Ipsum Dolor</Title>
                      </Card.Title>

                      <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <ReadMore>
                          Read More <BsArrowRight/>
                        </ReadMore>
                      </CardText>
                    </div>
                </Card.Body>
              </Card>
            </div>
            <div className="cardRes">
              <Card  style={style}>
                <Card.Body>
                  <small className="year">2012</small>
                
                    <div>
                      <Card.Title>
                        <Title>Lorem Ipsum Dolor</Title>
                      </Card.Title>

                      <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <ReadMore>
                          Read More <BsArrowRight/>
                        </ReadMore>
                      </CardText>
                    </div>
                </Card.Body>
              </Card>
            </div>
            {/* ...... */}
          
          </Slider>
          <div className="Pigination">
            <span
              className="line1"
              onClick={next}
              style={{
                border: "2px solid #fff",
                width: "5%",
                borderRadius: "4px",
              }}
            ></span>
            <span
              className="line2"
              onClick={previous}
              style={{
                border: "2px solid #707070",
                width: "5%",
                borderRadius: "4px",
              }}
            ></span>

            <span
              className="line3"
              onClick={previous}
              style={{
                border: "2px solid #707070",
                width: "5%",
                borderRadius: "4px",
              }}
            ></span>
          </div>
        </CardContainer>
      </Container>
    </Acontainer>
  );
};

export default Achievement;
