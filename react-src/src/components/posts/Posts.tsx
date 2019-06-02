import React, { useEffect, useState } from "react";
import { AsyncRequest } from "./../../tools/AsyncRequest";
import { WP } from "../../commons/Consumers/Wordpress/WPAjax";
import { ViewContainer } from "./ViewContainer";
export function Posts(props: any) {
  const [posts, setPosts] = useState([]);
  const load = async () => {
    const fetch = AsyncRequest(`${WP.sufix}${WP.posts}`);
    const post = await fetch.get();
    console.log(post);
    setPosts(post);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <>
      {posts.map((item: any) => {
        return (
          <ViewContainer key={item.id}>{item.content.rendered}</ViewContainer>
        );
      })}
    </>
  );
}
