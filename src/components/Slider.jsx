import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;
  cursor: pointer;
  opacity: 0.5;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const SliderWrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;
const Slide = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 300;
`;
const Description = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 30px 0;
`;
const Button = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction={"left"} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <SliderWrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => {
          return (
            <Slide bgColor={slide.bg}>
              <ImageContainer>
                <Image src={slide.img}></Image>
              </ImageContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Description>{slide.desc}</Description>
                <Button>Shop now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </SliderWrapper>
      <Arrow direction={"right"} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
