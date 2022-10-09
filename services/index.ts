import { Post } from "../types";

const createPostService = async (post: Post) => {
  const request = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  };

  fetch("www.google.com", request);
};

export { createPostService };
