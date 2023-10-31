//const heading = React.createElement("h1", {id:"heading"}, "Hello From React !!!");

const parent = React.createElement(
    "div",{id:"parent"},
[React.createElement(
    "div",{id:"child"},

React.createElement(
    "h1",{id:"heading"},"Hello FRom React 1"
)
,
React.createElement(
    "h1",{id:"heading"},"Hello FRom React 2"
)

)],

[React.createElement(
    "div",{id:"child2"},

React.createElement(
    "h1",{id:"heading"},"Hello FRom React 1"
)
,
React.createElement(
    "h1",{id:"heading"},"Hello FRom React 2"
)

)]



);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);