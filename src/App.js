import React from 'react';
import styled from 'styled-components';
import './App.css';
import logo from './logo.svg';
import list from './list.png';
import slash from './slash.png';
import reward from './reward.png';
import repeat from './repeat.png';
import macbook from './macbook.jpg';
import graphics from './graphics.png';

const FirstBlock = styled.div`
  background-color: #f5f6f9;
  text-align: center;
  overflow: hidden;
`;

const Header = styled.header`
  font-family: sans-serif;
  display: inline-flex;
  margin: 40px;
  margin-bottom: 12px;
`;

const Logo = styled.div`
  img {
    width: 130px;
    margin-right: 670px;
  }
`;

const Link = styled.a`
  display: inline-flex;
  margin-top: 14px;
  font-size: 0.87rem;
  font-weight: 600;
  margin-right: 22px;
  color: #5e6271;
  text-decoration: none;
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    background-color: #5e6271;
    height: 2px;
    margin-top: 20px;
    width: 0;
    left: 50%;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  :hover::after {
    width: 100%;
    left: 0;
  }
`;

const Body = styled.div`
  font-family: sans-serif;
  margin-left: 130px;
  margin-right: 120px;
  margin-top: 30px;
  margin-bottom: 25px;
  font-size: 0.9rem;

  h1 {
    display: inline;
    margin-left: -10px;
    font-weight: 510;
    letter-spacing: 1px;
    font-size: 46px;
  }
  h1 p {
    display: inline-flex;
    text-decoration: none;
  }
  h1 b {
    font-weight: 600;
  }
  h1 span {
    color: #7922ff;
    font-weight: 800;
  }

  h2 {
    margin-top: -10px;
    font-size: 29x;
    color: #5e6271;
    font-weight: 600;
    letter-spacing: 1px;
  }
  h2 b {
    text-decoration: underline;
    font-weight: 525;
  }
  h2 span {
    color: #23262f;
    font-weight: 550;
  }
`;

const Pill = styled.div`
  font-family: 'Avenir LT', 'Roboto', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  display: inline-block;
  margin-top: 65px;
  padding-left: 49px;
  padding-right: 49px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 10px;
  height: 35px;
  background-color: #fff;
  color: #7922ff;
  font-size: 1.1rem;
  font-weight: 925;
  line-height: 35px;
  width: 195px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
`;

const FirstSectionFooter = styled.div`
  display: block;
  text-align: center;
  color: #8f96a8;
  font-weight: 300;
  margin-top: 25px;
  font-size: 10px;
  font-family: 'Avenir LT', 'Roboto', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  h3 b {
    text-decoration: underline;
  }
`;

const Background = styled.svg`
  display: flex;
  height: 60px;
  margin-bottom: -10;
`;

const SecondBlock = styled.div`
  margin-top: 110px;
  display: flex;
  width: 25vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const NavTools1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
  margin-left: -125px;
  margin-right: 60px;
  p {
    margin-top: 7px;
    margin-left: -10px;
  }
`;

const NavTools2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
  margin-right: 75px;
  margin-top: -4px;
  p {
    margin-top: 5px;
  }
`;

const NavTools3 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
  margin-right: 80px;
  margin-top: 5px;
  p {
    margin-top: 14px;
  }
`;

const NavTools4 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
  margin-top: 6px;
  p {
    margin-top: 18px;
  }
`;

const Showcase = styled.div`
  img {
    width: 58vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }
`;
const Container = styled.div`
  display: flex;
  margin-top: 100px;
  background-color: #f5f6f9;
  font-family: 'Avenir LT', 'Roboto', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;

  p {
    display: flex;
    margin-top: 70px;
    margin-left: 550px;
    text-align: center;
    font-size: 23px;
    font-weight: 500;
  }
  img {
    display: flex;
    margin-top: 120px;
    width: 20%;
    margin-left: -300px;
  }
`;
const Graphic1 = styled.div`
  display: inline-flex;
  font-size: 18px;
  font-weight: 500;
  margin-top: 180px;
`;

const Graphic12 = styled.div`
  display: inline-flex;
  font-size: 18px;
  font-weight: 500;
  color: #5e6271;
  letter-spacing: 2;
  margin-left: -475px;
  margin-top: 210px;
`;

const Graphic2 = styled.div`
  display: inline-flex;
  font-size: 18px;
  font-weight: 500;
`;

const Graphic22 = styled.div`
  display: inline-flex;
  font-size: 18px;
  font-weight: 500;
  color: #5e6271;
  letter-spacing: 2;
`;

export default function App() {
  return (
    <>
      <FirstBlock>
        <Header>
          <Logo>
            <img src={logo} alt=" " />
          </Logo>
          <Link href="#">Pricing</Link>
          <Link href="#">Support</Link>
        </Header>
        <Body>
          <h1>
            <p>The</p> <b>ultimate tool</b> <p>for</p> <span> doers</span>
            <p>.</p>
          </h1>
          <h2>
            Get <b>twice</b> as much done through <span>hyper-focus</span>.
          </h2>
        </Body>
        <Pill> Download Slash </Pill>
        <FirstSectionFooter>
          <h3>
            for macOS / <b>See all platforms</b>
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Background
            fill="#FFFFFF"
            class="big-half-circle-big-half-circle-1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z"></path>
          </Background>
        </FirstSectionFooter>
      </FirstBlock>
      <SecondBlock>
        <NavTools1>
          <img src={list} alt=" " />
          <p> List</p>
        </NavTools1>
        <NavTools2>
          <img src={slash} alt=" " />
          <p> Slash</p>
        </NavTools2>
        <NavTools3>
          <img src={reward} alt=" " />
          <p>Reward</p>
        </NavTools3>
        <NavTools4>
          <img src={repeat} alt=" " />
          <p>Repeat</p>
        </NavTools4>
      </SecondBlock>
      <Showcase>
        <img src={macbook} alt=" " />
      </Showcase>
      <Container>
        <p> The powerful Science of Focus </p>
        <img src={graphics} alt=" " />
        <Graphic1>50%</Graphic1>
        <Graphic12>more productive</Graphic12>
        <Graphic2>50% </Graphic2>
        <Graphic22>more free time</Graphic22>
        <br></br>
        <br></br>
      </Container>
    </>
  );
}
