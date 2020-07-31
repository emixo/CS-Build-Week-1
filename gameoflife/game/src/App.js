import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import Rules from "./components/Rules";
import Algorithm from "./components/Algorithm";
import styled from "styled-components";

const Header = styled.header `
  display: flex;
  justify-content: center;
  align-items:center;
  height: 10vh;
  background-color: black;
  color: red;
`

const GameDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  height: 80vh;
  color: red;
  font-family: "Lucida Console", Courier, monospace;
  font-size: 20px;
`

const AlgoDiv = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: red
`


function App() {
  return (
    <div className="App">
      <Header>
      <h1>Conway's Game of Life</h1>
      </Header>
      <GameDiv>
        <Grid />
        <Rules />
      </GameDiv>
      <AlgoDiv>
      <Algorithm />
      </AlgoDiv>
    </div>
  );
}

export default App;
