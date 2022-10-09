import type { NextPage } from "next";

import styles from "./Post.module.css";

import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { getSinglePostService } from "../../services";

const Post: NextPage = () => {
  const router = useRouter();

  const [reference, setReference] = useState(
    router.query.post
  )

  const [post, setPost] = useState({} as any)
 

  console.log(router)

   useEffect(() => {
    if(reference){
    (async () => {
      const getSinglePost = await getSinglePostService({reference})
      setPost(JSON.parse(getSinglePost.data))

    })();
  }

  }, [router])

  return (
    <>
      <h2 className={styles.back} onClick={() => router.back()}>
        ⬅️ <span className={styles.title}>{post.title}</span>
      </h2>
      <p>{post.content}
      </p>
    </>
  );
};

export default Post;
