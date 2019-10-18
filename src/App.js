import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>header</h1>
      <div>Sliceline</div>
    </>
  );
}

export default App;
