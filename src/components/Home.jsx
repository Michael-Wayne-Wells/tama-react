import React from 'react';

function Home() {
  const homeStyles = {
    backgroundImage: "url('city.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "700px",
    border: "5px solid orange",
    color: "orange",
  }
  const h1Styles = {
    color: "orange",
    textAlign: "center",
    lineHeight: "400px",
    fontSize: '100px',
    fontFamily: "'Orbitron', sans-serif",
  }
  const bodyStyle = {
    color: "orange",
    textAlign: "center",
    lineHeight: "400px",
    fontSize: '100px',
    fontFamily: "'Orbitron', sans-serif",
  }
  return(
    <div style={homeStyles}>
    <h1 style={h1Styles}>Tamagotchi!</h1>
    </div>
  )
}

export default Home;
