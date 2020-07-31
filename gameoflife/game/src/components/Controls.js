import React from "react";
import styled from "styled-components";
import produce from "immer"

const CenterControls = styled.div`
    width: 20%;

`

const NewButton = styled.button `
  cursor: pointer;
  background-color: black;
  width: 180px;
  color: red;
  padding: 8px 11px;
  fontsize: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  
`

export default function Controls({gridSize, setGridSize, setGrid, emptyGrid}) {
    const changeSize = (e) => {
        setGridSize(Number(e.target.value))
        setGrid(emptyGrid())
      }
   
  return (
    <CenterControls>
        <h2>Controls</h2>
      <form
        onSubmit={(e) => {
        [e.target.name]= e.target.value
        }}
      >
        Change Grid Size
        <input 
        name="gridSize"
        type="range"
        min="20"
        max="30"
        value={gridSize}
        onChange={changeSize}
        />
        <NewButton>Reset Grid</NewButton>
      </form>
    </CenterControls>
  );
}