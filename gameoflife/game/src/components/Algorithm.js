import React from "react"

export default function Algorithm() {
    return (
        <section>
        <h2>Approach</h2>
        <li>Initialize the cells in the grid</li>
        <p>At each time step in the simulation, for each 
        cell in the grid, do the following:</p>
        <li>Update the value of cell based on 
        its neighbors, taking into account the boundary conditions.</li>
        <li>Update the display of grid values.</li>
        <h3>Logic behind the game</h3>
        <li>if current node is dead and # of alive neighbors is exactly three then it becomes alive</li>
        <li>if current node is alive and # of alive neighbors is exactly three then it becomes alive</li>
  
        <h2>Solution(Step by Step Process)</h2>
        <p>I started by Initializing a basic react project. Next i created 4 components, one for the grid, a second for the controls, 
            a third for the Rules and last, one for the Algorithm to include my UPER. I then created an array using nested loops for the quadratic runtime.
            I then mapped over said array to make divs for the grid. Next i used Immer and the useCallback and useRef hooks to make a copy of the grid.
            These copies would then be displayed through each cycle for the cells  </p>
      </section>
    )
}