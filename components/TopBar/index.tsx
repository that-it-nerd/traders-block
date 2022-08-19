import React, { useState } from "react";
import styles from "./topBar.module.scss";
interface User {
  id: number;
  name: string;
  icon: string;
}
import Image from "next/image";
import switch1 from "../../public/images/switch.png";
import switch2 from "../../public/images/switch-1.png";
import switch3 from "../../public/images/switch-2.png";

const TopBar = () => {
  const ISSERVER = typeof window === "undefined";
  let theme;
  if (!ISSERVER) {
    theme = localStorage.getItem("theme");
  }
  return (
    <div className={`${styles.top_bar} ${theme === "light" && styles.light}`}>
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
      </div>
      <div
        onClick={() => {
          const theme = localStorage.getItem("theme");
          localStorage.setItem("theme", theme === "light" ? "dark" : "light");
          window.location.reload();
        }}
        className={styles.pointer}
      >
        <Image src={theme === "dark" ? switch2 : switch3} layout="fixed" />
      </div>
    </div>
  );
};

export default TopBar;
