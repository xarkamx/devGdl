import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./components/menu/Menu";
import { Posts } from "./components/posts/Posts";
import { ViewContainer } from "./components/posts/ViewContainer";

export default class App extends React.Component {
  state = {
    content: "",
    title: "",
    excerpt: "",
    image: null
  };
  componentDidMount() {
    this.loadTemplate();
  }
  loadTemplate() {
    let content = this._checkDom();
    content = content.querySelector(".container");
    let article = content.querySelector("article").innerHTML;
    let title = content.querySelector("h1").innerHTML;
    let image = content.querySelector("img").dataset.path;
    let excerpt = content.querySelector(".excerpt").innerHTML;
    this.setState({
      content: article,
      image: image === "" ? null : image,
      excerpt,
      title
    });
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
    const { title, image, content, excerpt } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu />
        </header>
        <ViewContainer
          isFront
          excerpt={excerpt}
          title={title}
          background={image}
        >
          {content}
        </ViewContainer>
        <Posts />
      </div>
    );
  }
}
