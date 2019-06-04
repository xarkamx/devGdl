import React, { useRef, useEffect, useState } from "react";
import "./scss/view.scss";

export function ViewContainer(props: any) {
  const imgID = Math.floor(Math.random() * 451);
  const { children, excerpt, mini, title, embed } = props;
  const [minified, setMinified] = useState(mini);
  let container: any = useRef();
  const media = embed["wp:featuredmedia"];
  console.log(media);
  const backgroundIMG = media
    ? media[0].source_url
    : `https://picsum.photos/id/${imgID}/1920/1080`;
  useEffect(() => {
    container.current.innerHTML = minified ? excerpt : children;
  });
  return (
    <article className={`viewContainer ${minified ? "mini" : ""}`}>
      <div
        className="bgImg"
        onClick={() => {
          setMinified(!minified);
        }}
        style={{ background: `url(${backgroundIMG})` }}
      >
        <header className="fancyHeader">{title}</header>
      </div>
      <div className="bgText">
        <main ref={container} />
      </div>
    </article>
  );
}
