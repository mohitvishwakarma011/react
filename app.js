import React from 'react';
import ReactDOM from 'react-dom/client';

// Started Using JSX from Now Onwards
//! Remember ->
//! JSX-> babel -> JS Object(using React.createElement) -> root.render(JS object)

//? Remember -> If you are using JSX in multiple lines you have to wrap it inside parantheses so that babel can understant it is end of the jsx( not necessary to use parantheses when writing single line of jsx)
const heading = <h1>Namaste React from JSX</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);