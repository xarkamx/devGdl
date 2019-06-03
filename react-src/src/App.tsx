import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./components/menu/Menu";
import { Posts } from "./components/posts/Posts";
import { ViewContainer } from "./components/posts/ViewContainer";

export default class App extends React.Component {
  state = {
    content: ""
  };
  componentDidMount() {
    //this.loadTemplate();
  }
  loadTemplate() {
    let content = this._checkDom();
    content = content.querySelector(".wrapper section");
    this.setState({ content: content.innerHTML });
  }
  getPostID() {
    this._checkDom().querySelector("");
  }
  _checkDom() {
    const noscript: any = document.body.querySelector("noscript");
    let content: any = document.createElement("div");
    content.insertAdjacentHTML("beforeend", noscript.cloneNode(true).innerHTML);
    return content;
  }
  render() {
    const { content } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu />
        </header>

        <Posts />
      </div>
    );
  }
}
