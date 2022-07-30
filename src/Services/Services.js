import React from "react";
import styled from "styled-components";
import { BsBoxSeam } from "react-icons/bs";
import { TbMilk } from "react-icons/tb";
import { GiKiwiFruit } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";

const Services = () => {
  return (
    <Container id="services">
      <Head>
        <Line />
        <span>Our Services</span>
      </Head>
      <MidHead>What We Offer</MidHead>
      <Cards>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/dis3.jpg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <BsBoxSeam />
            </Icon>
            <Box>
              <div>
                Agriculture
                <br />
                Products
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/dis1.jpg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <GiKiwiFruit />
            </Icon>
            <Box>
              <div>
                Organic
                <br />
                Products
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/dis4.jpg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <RiMentalHealthLine />
            </Icon>
            <Box>
              <div>
                Fresh
                <br />
                Vegetables
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/dis2.jpg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <TbMilk />
            </Icon>
            <Box>
              <div>
                Dairy
                <br />
                Products
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f7f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    height: auto;
  } ;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: #f9d32a;
  font-size: 18px;
  span {
    margin-left: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 40px;
  background-color: #f9d32a;
`;

const MidHead = styled.div`
  margin-top: 5px;
  font-size: 48px;
  font-weight: 800;
  line-height: 58px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  } ;
`;

const Cards = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    justify-content: center;
  } ;
`;

const CardHolder = styled.div`
  margin: 0 17px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 420px;
  :hover {
    .image {
      transform: scale(1.1);
    }
    .icon {
      background: #eec24c;
    }
    .read {
      bottom: -38px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  } ;
`;

const ImageHolder = styled.div`
  width: 288px;
  height: 341px;
  border-radius: 10px;

  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 350ms;
`;

const DetailsHolder = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 10px;
  background-color: #c5ce38;
  position: absolute;
  top: -30px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 350ms;
  z-index: 100;
`;

const Box = styled.div`
  font-weight: 800;
  font-size: 20px;
  width: 220px;
  height: 140px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  div {
    margin-top: 60px;
    text-align: center;
  }
`;

const Read = styled.div`
  height: 45px;
  background: #4baf47;
  position: absolute;
  width: 120px;
  bottom: -0px;
  right: 0;
  overflow: hidden;
  border-radius: 0 5px 15px 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  transition: all 350ms;
  cursor: pointer;
  span {
    width: 1px;
    height: 1px;
    transition: all 350ms;
    /* position: absolute; */
    margin-top: -30px;
    margin-left: -100px;
    border-radius: 100%;
  }
  :hover {
    span {
      transform: scale(240);
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: 100;
`;
