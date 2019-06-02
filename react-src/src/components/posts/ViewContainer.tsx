import React, { useRef, useEffect } from "react";
import "./scss/view.scss";

export function ViewContainer(props: any) {
  const {
    children,
    backgroundIMG = "https://picsum.photos/id/451/1920/1080"
  } = props;
  let container: any = useRef();
  useEffect(() => {
    container.current.insertAdjacentHTML("beforeend", children);
    document.body.addEventListener("scroll", ev => {
      console.log(ev);
    });
  });
  return (
    <article className="viewContainer">
      <div className="bgImg" style={{ background: `url(${backgroundIMG})` }}>
        <header className="fancyHeader">Hola!</header>
      </div>
      <div className="bgText">
        <main ref={container} />
      </div>
    </article>
  );
}
