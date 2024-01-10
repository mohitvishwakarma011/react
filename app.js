import React from "react";
import ReactDOM from "react-dom/client";

const Title = <h1>I am Title of the page</h1>


const Content = () => (
   
    <div>
      {Title}
      <p>I am the Paragraph of the page</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Content/>);