import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./components/menu/Menu";

export default class App extends React.Component {
  componentDidMount() {
    this.loadTemplate();
  }
  loadTemplate() {
    const noscript: any = document.body.querySelector("noscript");
    let content: any = document.createElement("div");
    content.insertAdjacentHTML("beforeend", noscript.cloneNode(true).innerHTML);
    content = content.querySelector(".wrapper section");
    let dom: any = this.refs.Main;
    dom.innerHTML = content.innerHTML;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu />
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
