import React from "react";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Projects = () => {
  return (
    <Container id="projects">
      <Head>
        <Line />
        <span>Get to konw us</span>
      </Head>
      <MidHead>Explore Our Projects</MidHead>
      <ProjectCards>
        <ProjectCard>
          <Image src="/assets/project1.jpg" />
          <OverLay>
            <Top>
              <Arrow className="arrow">
                <Icon>
                  <HiOutlineArrowNarrowRight />
                </Icon>
              </Arrow>
            </Top>
            <Button>
              <Title>
                Easy
                <br /> Haversting
              </Title>
              <Text className="text">
                Surprise steepest recurred
                <br /> landlord mr wandered
              </Text>
            </Button>
          </OverLay>
        </ProjectCard>
        <ProjectCard>
          <Image src="/assets/project3.jpg" />
          <OverLay>
            <Top>
              <Arrow className="arrow">
                <Icon>
                  <HiOutlineArrowNarrowRight />
                </Icon>
              </Arrow>
            </Top>
            <Button>
              <Title>
                Agriculture
                <br /> Farming
              </Title>
              <Text className="text">
                Surprise steepest recurred
                <br /> landlord mr wandered
              </Text>
            </Button>
          </OverLay>
        </ProjectCard>
        <ProjectCard>
          <Image src="/assets/project4.jpg" />
          <OverLay>
            <Top>
              <Arrow className="arrow">
                <Icon>
                  <HiOutlineArrowNarrowRight />
                </Icon>
              </Arrow>
            </Top>
            <Button>
              <Title>
                Ecological
                <br /> Farming
              </Title>
              <Text className="text">
                Surprise steepest recurred
                <br /> landlord mr wandered
              </Text>
            </Button>
          </OverLay>
        </ProjectCard>
        <ProjectCard>
          <Image src="/assets/project2.jpg" />
          <OverLay>
            <Top>
              <Arrow className="arrow">
                <Icon>
                  <HiOutlineArrowNarrowRight />
                </Icon>
              </Arrow>
            </Top>
            <Button>
              <Title>
                Organic
                <br /> Solutions
              </Title>
              <Text className="text">
                Surprise steepest recurred
                <br /> landlord mr wandered
              </Text>
            </Button>
          </OverLay>
        </ProjectCard>
      </ProjectCards>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: #f9d32a;
  font-size: 18px;
  span {
    margin-left: 10px;
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
    width: 90%;
    text-align: center;
    margin-top: 10px;
    line-height: 1.3;
  } ;
`;

const ProjectCards = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ProjectCard = styled.div`
  width: 310px;
  height: 500px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 0 7px;
  :hover {
    .arrow {
      opacity: 1;
    }
    .text {
      opacity: 0.6;
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const Arrow = styled.div`
  background: white;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: all 250ms;
  opacity: 0;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

const Button = styled.div`
  margin: 40px;
  color: white;
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 36px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Text = styled.div`
  line-height: 28px;
  transition: all 350ms;
  margin-bottom: -60px;
  opacity: 0;
`;
