import React from 'react';
import styled from 'styled-components';
import './App.css';
import logo from './logo.svg';

const FirstBlock = styled.div`
  background-color: #f2f2f2;
`;

const Header = styled.header`
  padding: 10px 20px;
  display: flex;
  position: fixed;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`;

const Logo = styled.div`
  img {
    margin-top: 15px;
    margin-right: 15px;
  }
`;

const Button = styled.div`
  display: inline-flex;
  margin-top: 27px;
`;

const Body = styled.div`
  margin: 100px;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 40px;
  border-radius: 20px;
  height: 40px;
  size: 50px;
  background-color: #fff;
  color: #7922ff;
  font-size: 1.3rem;
  font-weight: 700;
  width: 10;
`;

const FirstSectionFooter = styled.div`
  font-size: 10px;
  align-content: center;
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
          <h1>The ultimate tool for doers.</h1>
          <h2>Get twice as much done through hyperfocus.</h2>
        </Body>
        <Pill> Download Slash </Pill>
        <FirstSectionFooter>
          <h3>for macOS / See all platforms</h3>
        </FirstSectionFooter>
      </FirstBlock>
    </>
  );
}
