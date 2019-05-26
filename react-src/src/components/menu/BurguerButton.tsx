import React, { useState } from "react";
export function BurguerButton(props: any) {
  const [status, setStatus] = useState(false);
  return (
    <div
      className="burguerButton"
      onClick={() => {
        props.onClick(status);
        setStatus(!status);
      }}
    >
      <div />
      <div />
      <div />
    </div>
  );
}
