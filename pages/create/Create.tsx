import { NextPage } from "next";

import styles from "./Create.module.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import { useEffect, useState } from "react";
import { Post } from "../../types";
import { createPostService } from "../../services";

const Create: NextPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const clearFields = () => {
    setTitle("");
    setContent("");
  };

  const createPost = (title: string, content: string): Post => {
    return {
      title,
      content,
    };
  };

  const handleClick = async () => {
    await createPostService(createPost(title, content));

    clearFields();
  };

  useEffect(() => {
    clearFields();
  }, []);

  return (
    <>
      <h2 className="subtitle">Create post</h2>
      <p>
        Keep in mind your post will be readeble by everyone, stay safe and avoid using
        personal information, we handle the tricky stuff here. Together we are fighthing
        censorship.
      </p>
      <section className={styles.form}>
        <Input type="text" placeholder="Title" value={title} setValue={setTitle} />
        <Textarea placeholder="Content" value={content} setValue={setContent} />
        <Button text="Submit" onClick={handleClick} />
      </section>
    </>
  );
};

export default Create;
