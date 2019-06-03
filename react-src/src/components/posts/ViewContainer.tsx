import React, { useRef, useEffect } from "react";
import "./scss/view.scss";
import { ConditionalWall } from "../wall/ConditionalWall";

export function ViewContainer(props: any) {
  const imgID = Math.floor(Math.random() * 451);
  const {
    children,
    backgroundIMG = `https://picsum.photos/id/${imgID}/1920/1080`,
    excerpt,
    mini,
    title
  } = props;
  let container: any = useRef();
  useEffect(() => {
    container.current.insertAdjacentHTML(
      "beforeend",
      mini ? excerpt : children
    );
  });
  return (
    <article className={`viewContainer ${mini ? "mini" : ""}`}>
      <div className="bgImg" style={{ background: `url(${backgroundIMG})` }}>
        <header className="fancyHeader">{title}</header>
      </div>
      <div className="bgText">
        <main ref={container} />
      </div>
    </article>
  );
}
