import {
  ArrowLeftOutlined,
  ArrowRightAltOutlined,
  ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition:all 1.5s ease;
  transform:translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 37vw;
  height: 60vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  latter-spacing: 3px;
`;
const Buttion = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

 const [slideIndex, setslideIndex] = useState(0)
  const handleClick = (direction) =>{

    if(direction === "left"){

      setslideIndex(slideIndex > 0 ? slideIndex-1 : 2)

    }

    else{

      setslideIndex(slideIndex > 2 ? slideIndex+1 : 0)


    }



  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <ImageContainer>
            <Image src="https://clockwise.software/img/blog/e-commerce-website-cost/header-background.png" />
          </ImageContainer>

          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              cupiditate quo ut quis temporibus iusto velit numquam? Repellat
              aspernatur, tempore accusamus, est enim id eos similique nesciunt,
              eligendi modi maiores.
            </Description>
            <Buttion>SHOW NOW!!!</Buttion>
          </InfoContainer>
        </Slide>



        <Slide>
          <ImageContainer>
            <Image src="https://clockwise.software/img/blog/e-commerce-website-cost/header-background.png" />
          </ImageContainer>

          <InfoContainer>
            <Title>Winter SALE</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              cupiditate quo ut quis temporibus iusto velit numquam? Repellat
              aspernatur, tempore accusamus, est enim id eos similique nesciunt,
              eligendi modi maiores.
            </Description>
            <Buttion>SHOW NOW!!!</Buttion>
          </InfoContainer>
        </Slide>


        <Slide>
          <ImageContainer>
            <Image src="https://clockwise.software/img/blog/e-commerce-website-cost/header-background.png" />
          </ImageContainer>

          <InfoContainer>
            <Title>December SALE</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              cupiditate quo ut quis temporibus iusto velit numquam? Repellat
              aspernatur, tempore accusamus, est enim id eos similique nesciunt,
              eligendi modi maiores.
            </Description>
            <Buttion>SHOW NOW!!!</Buttion>
          </InfoContainer>
        </Slide>


        <Slide>
          <ImageContainer>
            <Image src="https://clockwise.software/img/blog/e-commerce-website-cost/header-background.png" />
          </ImageContainer>

          <InfoContainer>
            <Title>January SALE</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              cupiditate quo ut quis temporibus iusto velit numquam? Repellat
              aspernatur, tempore accusamus, est enim id eos similique nesciunt,
              eligendi modi maiores.
            </Description>
            <Buttion>SHOW NOW!!!</Buttion>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
