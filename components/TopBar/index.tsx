import React, { useState } from "react";
import styles from "./topBar.module.scss";
interface User {
  id: number;
  name: string;
  icon: string;
}
const TopBar = () => {
  return (
    <div className={styles.top_bar}>
      <div className={styles.search_container}>
        <input type="text" />
        <span className={styles.icon}>
          <img src="/images/search.png" />
        </span>
      </div>
      <div className={styles.bell_icon}>
        <img src="/images/bell.png" />
      </div>
      <div className={styles.user}>
        <span className={styles.user_image_container}>
          <img className={styles.user_image} src="/images/userImage.png" />
        </span>
        <span>Username</span>
      </div>
      <div
        onClick={() => {
          const theme = localStorage.getItem("theme");
          localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        }}
      >
        Toggle
      </div>
    </div>
  );
};

export default TopBar;
