import React from 'react';

const Mouse = () => {
  function redSquare() {
    document.getElementById("square").style.backgroundColor = "red";
  }

  function whiteSquare() {
    document.getElementById("square").style.backgroundColor = "white";
  }

  return (
    <div>
      <h1>Check components/Mouse.js file</h1>
      <p>Using onMouseEnter events make the square below red when user hovers it. And using onMouseLeave turn it back to normal.</p>
      <div id="square" onMouseEnter={redSquare} onMouseLeave={whiteSquare} style={{
        width: 200,
        height: 200,
        border: '1px solid black',
        margin: '0 auto'
      }}/>
    </div>
  )
}

export default Mouse;