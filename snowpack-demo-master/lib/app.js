import React from "/web_modules/react.js";
import ReactDOM from "/web_modules/react-dom.js";
import styled from "/web_modules/styled-components.js";
const Button = styled.button`
  background-color: #eac;
  padding: 8px;
  border: 1px solid #ccc;
`;
const Card = styled.div`
  padding: 16px;
  border: 1px solid #eac;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const App = () => React.createElement(Card, null, "Another one");

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));