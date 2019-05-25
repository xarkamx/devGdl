import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {
  componentDidMount() {
    this.loadTemplate();
  }
  loadTemplate() {
    const noscript: any = document.body.querySelector("template");
    console.log(document.body);
    let content = noscript.cloneNode(true);
    let dom: any = this.refs.Main;
    dom.innerHTML = content.innerHTML;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main ref="Main" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
