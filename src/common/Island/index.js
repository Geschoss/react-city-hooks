import React from "react";
import styles from "./Island.module.css";

const Island = ({ children, title }) => (
  <div className={styles.root}>
    <header className={styles.title}>{title}</header>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Island;
