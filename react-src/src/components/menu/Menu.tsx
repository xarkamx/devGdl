import React, { useState, useEffect } from "react";
import { AsyncRequest } from "../../tools/AsyncRequest";
import { BurguerButton } from "./BurguerButton";
import "./scss/menu.scss";

export function Menu() {
  const [menu, setMenu] = useState([]);
  const [status, setStatus] = useState(false);
  const load = async () => {
    const fetch: any = AsyncRequest("/wp-json/theme/menu/3");
    const post = await fetch.get();
    setMenu(post || []);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <BurguerButton
        onClick={(status: boolean) => {
          setStatus(status);
        }}
      />
      <nav className={`mainMenu ${status ? "active" : ""}`}>
        <ul>
          {menu.map((item: any, key: number) => {
            return (
              <li key={key} className="navItem">
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
