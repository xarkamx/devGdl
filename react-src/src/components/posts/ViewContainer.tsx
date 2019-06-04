import React, { useRef, useEffect, useState } from "react";
import "./scss/view.scss";

export function ViewContainer(props: any) {
  const { children, excerpt, mini, title, embed, background, isFront } = props;
  const [minified, setMinified] = useState(mini);
  let container: any = useRef();
  const loadBackground = () => {
    const imgID = Math.floor(Math.random() * 851);
    const sampleImage =
      background || `https://picsum.photos/id/${imgID}/1920/1080`;
    if (!embed) {
      return sampleImage;
    }
    const media = embed["wp:featuredmedia"];
    return media ? media[0].source_url : sampleImage;
  };
  const backgroundIMG = loadBackground();
  useEffect(() => {
    container.current.innerHTML = minified ? excerpt : children;
  });
  return (
    <article
      className={`viewContainer ${minified ? "mini" : ""} ${
        isFront ? "front" : ""
      }`}
    >
      <div
        className="bgImg"
        onClick={() => {
          if (!isFront) setMinified(!minified);
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
