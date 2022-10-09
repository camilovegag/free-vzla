import { Post } from "../types";

const createPostService = (post: Post) => {
  const request = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  };

  fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${process.env.NEXT_PUBLIC_CREATE_POST_ROUTE}`, request)
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const getAllPostsService = () => {
  const request = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  return fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${process.env.NEXT_PUBLIC_GET_ALL_POSTS_ROUTE}`, request)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const deletePostService = (reference: string) => {
  const request = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reference),
  };

  fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${process.env.NEXT_PUBLIC_DELETE_POST_ROUTE}`, request)
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export { createPostService, getAllPostsService, deletePostService };
