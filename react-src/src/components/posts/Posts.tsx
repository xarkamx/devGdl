import React, { useEffect, useState } from "react";
import { AsyncRequest } from "./../../tools/AsyncRequest";
import { WP } from "../../commons/Consumers/Wordpress/WPAjax";
import { ViewContainer } from "./ViewContainer";
export function Posts(props: any) {
  const [posts, setPosts] = useState([]);
  const load = async () => {
    const fetch = AsyncRequest(`${WP.sufix}${WP.posts}`);
    const post = await fetch.get({ _embed: "" });
    setPosts(post);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <>
      {posts.map((item: any) => {
        const { id, content, excerpt, title, _embedded } = item;
        return (
          <ViewContainer
            mini
            title={title.rendered}
            excerpt={excerpt.rendered}
            embed={_embedded}
            key={id}
          >
            {content.rendered}
          </ViewContainer>
        );
      })}
    </>
  );
}
