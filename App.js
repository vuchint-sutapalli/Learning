const heading = React.createElement(
    "div",
    {"id": "heading"},
    [React.createElement("h1",{},"first heading"), React.createElement("h2",{},"second heading")]
    
    );

console.log(heading)
const rootElement = document.getElementById('root');

ReactDOM.render(heading, rootElement);