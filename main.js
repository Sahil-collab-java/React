import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Hello From React !!!");

// const parent = React.createElement(
//     "div",{id:"parent"},
// [React.createElement(
//     "div",{id:"child"},

// React.createElement(
//     "h1",{id:"heading"},"Hello FRom React 1"
// )
// ,
// React.createElement(
//     "h1",{id:"heading"},"Hello FRom React 2"
// )

// )],

// [React.createElement(
//     "div",{id:"child2"},

// React.createElement(
//     "h1",{id:"heading"},"Hello FRom React 1"
// )
// ,
// React.createElement(
//     "h1",{id:"heading"},"Hello FRom React 2"
// )

// )]



// );

const Title = () =>(

        <h1>This is a Functional Component Title</h1>
  
);

const number = 1000;

const reactElement= (

    <h1>This is a React Element </h1>

);





const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        {Title()}
        <Title></Title>
        {reactElement}
       <h2> {number}</h2>
        <h1>This is a Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);