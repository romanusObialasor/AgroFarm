import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <Head>
        <Line />
        <span>Get to konw us</span>
      </Head>
      <MidHead>Explore Our Projects</MidHead>
      <Main>
        <Left>
          <Title>Reach Out</Title>
          <Text>
            Both rest of know draw fond post as. It agreement defective to
            excellent. Feebly do engage of narrow.
          </Text>
          <Cont>
            <Hold>
              <AiOutlineMail />
              <Div>
                <H1>Email Address</H1>
                <span>agrofarm@gmail.com</span>
              </Div>
            </Hold>
            <Hold>
              <MdLocalPhone />
              <Div>
                <H1>Phone Number</H1>
                <span>+234 701 869 307</span>
              </Div>
            </Hold>
          </Cont>
        </Left>
        <Right
          action="mailto:robialasor5@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailForm"
        >
          <InputTop>
            <Input1
              placeholder="Enter Name"
              type="text"
              name="name"
              size="19"
            />
            <Input1 placeholder="Phone Number" name="phoneNumber" />
          </InputTop>
          <Input3 placeholder="Message Title" name="title" type="text" />
          <Message
            placeholder="Enter Message"
            name="message"
            type="text"
            rows="6"
            cols="20"
          />
          <Button type="submit">
            <ButtonText>Send Message</ButtonText>
            <span />
          </Button>
        </Right>
      </Main>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
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
    line-height: 1.5;
    text-align: center;
  }
`;

const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const Left = styled.div`
  max-width: 400px;
  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    margin-left: 20px;
  }
`;

const Title = styled.div`
  color: #fdbd05;
  font-size: 20px;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: justify;
  @media screen and (max-width: 1024px) {
    text-align: unset;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Div = styled.div`
  font-size: 16px;
  margin-left: 10px;
  span {
    font-style: italic;
  }
`;

const H1 = styled.div`
  margin-bottom: 3px;
  font-weight: 500;
`;

const Right = styled.form`
  height: 100%;
  width: 40%;
  margin-left: 60px;
  @media screen and (max-width: 1024px) {
    margin-left: unset;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const InputTop = styled.div``;

const Input1 = styled.input`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  border: none;
  width: 40%;
  height: 45px;
  border-radius: 50px;
  padding-left: 20px;
  color: #707070;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  background: transparent;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1024px) {
    margin-right: unset;
    width: calc(100% - 22px);
    margin-bottom: 20px;
  }
`;

const Input3 = styled.input`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  border: none;
  width: 88%;
  height: 45px;
  border-radius: 50px;
  padding-left: 20px;
  color: #707070;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  background: transparent;
  margin-top: 15px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1024px) {
    margin-right: unset;
    width: calc(100% - 22px);
    margin-top: 0;
  }
`;

const Message = styled.textarea`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  border: none;
  width: 85%;
  max-width: 85%;
  height: 200px;
  max-height: 250px;
  border-radius: 20px;
  padding: 20px;
  color: #707070;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  background: transparent;
  margin-top: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
  ::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1024px) {
    margin-right: unset;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
    margin-top: 20px;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  font-size: 14px;
  font-weight: 700;
  background: #4bae46;
  width: 180px;
  border: none;
  outline: none;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;
  position: relative;
  overflow: hidden;
  color: white;
  span {
    width: 1px;
    height: 1px;
    transition: all 350ms;
    position: absolute;
    border-radius: 100%;
  }
  :hover {
    span {
      transform: scale(190);
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: 100;
`;
