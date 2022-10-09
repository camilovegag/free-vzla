import type { NextPage } from "next";

import styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <>
      <h2 className="subtitle">About</h2>
      <p>Digital freedom now.</p>
      <p>
        Governments like 🇻🇪 tend to hide stuff to the world, we want to give people an
        option to tell the world their story. No more censorship, share your thoughts in a
        free and easy way.
      </p>
      <p>Once your post is submited, it can not be edited or deleted.</p>
    </>
  );
};

export default About;
