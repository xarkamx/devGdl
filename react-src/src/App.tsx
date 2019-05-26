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
        </header>

        <main ref="Main" />
      </div>
    );
  }
}
