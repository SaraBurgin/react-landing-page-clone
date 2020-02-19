import React from 'react';
import styled from 'styled-components';
import './App.css';
import logo from './logo.svg';
import list from './list.png';
import slash from './slash.png';
import reward from './reward.png';
import repeat from './repeat.png';
import macbook from './macbook.jpg';

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
    width: 110px;
    margin-right: 510px;
  }
`;

const Button = styled.div`
  display: inline-flex;
  margin-top: 10px;
  font-size: 0.87rem;
  font-weight: 600;
  margin-right: 18px;
  color: #5e6271;
  :hover {
    border-bottom: 2px solid currentColor;
    margin-bottom: 10px;
    cursor: pointer;
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
    margin-top: 34px;
    margin-bottom: -15px;
    margin-left: 10px;
    width: 550px;
    font-weight: 510;
    letter-spacing: 1px;
    font-size: 29px;
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
    margin-top: 5px;
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
  margin-top: 32px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 10px;
  height: 35px;
  background-color: #fff;
  color: #7922ff;
  font-size: 1.2rem;
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
  height: 20px;
  margin-bottom: -10;
`;

const SecondBlock = styled.div`
  text-align: center;
`;

const NavTools1 = styled.div`
  display: flex;
  align-content: center;
  block-size: 50;
`;

const NavTools2 = styled.div`
  display: flex;
  width: -10cm;
`;

const NavTools3 = styled.div`
  display: flex;
`;

const NavTools4 = styled.div`
  display: flex;
`;
const Options = styled.div`
  display: inline-flex;
  text-align: center;
`;
const Showcase = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <>
      <FirstBlock>
        <Header>
          <Logo>
            <img src={logo} alt=" " />
          </Logo>
          <Button Pricing>Pricing</Button>
          <Button Support>Support</Button>
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
          <Background
            fill="#FFFFFF"
            class="big-half-circle-big-half-circle-1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="110%"
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
        </NavTools1>
        <NavTools2>
          <img src={slash} alt=" " />
        </NavTools2>
        <NavTools3>
          <img src={reward} alt=" " />
        </NavTools3>
        <NavTools4>
          <img src={repeat} alt=" " />
        </NavTools4>
        <Options>
          <p>List</p>
          <p>Slash</p>
          <p>Reward</p>
          <p>Repeat</p>
        </Options>
        <Showcase>
          <img src={macbook} alt=" " />
        </Showcase>
      </SecondBlock>
    </>
  );
}
