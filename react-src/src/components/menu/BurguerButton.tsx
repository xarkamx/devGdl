import React, { useState } from "react";
import "./scss/burguerButton.scss";
import { optional } from "../../tools/Helpers";
export function BurguerButton(props: any) {
  const { style = {}, onClick } = props;
  const [status, setStatus] = useState(false);
  const enabler: string = status ? "active" : "";
  const className = "burguerButton " + enabler;

  return (
    <div
      className={className}
      style={style}
      onClick={() => {
        optional(onClick)(!status);
        setStatus(!status);
      }}
    >
      <div />
      <div />
      <div />
    </div>
  );
}
