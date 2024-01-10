
import React from "react";
import { createRoot } from 'react-dom/client';

const heading = React.createElement(
    "div",
    {"id": "he adi ng"},
    [React.createElement("h1",{'key':'1'},"first heading"), React.createElement("h2",{'key':'2'},"second heading")]
    
    );

console.log(heading)
const rootElement = document.getElementById('root');

const root = createRoot(rootElement)

root.render(heading);
