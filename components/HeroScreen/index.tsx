import React, { useState, useEffect } from "react";
import Card from "../Cards";
import DashBoard from "../DashBoard/index";
import TopBar from "../TopBar";
import User from "../../JSON/User.json";
import styles from "./heroScreen.module.scss";
interface Data {
  name: string;
  age: number;
}
interface User {
  id: number;
  name: string;
  icon: string;
}
const HeroScreen = () => {
  const ISSERVER = typeof window === "undefined";
  var theme = "light";
  if (!ISSERVER) {
    theme = window.localStorage.getItem("theme") || "";
  }
  const [color, setColor] = useState<string>("dark");
  useEffect(() => {
    setColor(theme);
  }, []);
  return (
    <div
      className={`basis-5/7 ${styles.heroScreen} ${
        color == "light" ? `${styles.light}` : `${styles.dark}`
      }`}
    >
      <div className={`${styles.nav_bar} flex justify-end`}>
        <TopBar />
      </div>
      <div className={styles.page_head}>
        <h4>My Team</h4>
      </div>
      <div className="rows-1">
        <div className="columns-1 lg:columns-2">
          <Card type={"card"} />
          <Card type={"referral"} />
        </div>
      </div>
      <div className={`flex justify-start items-center`}>
        <Card type={"table"} />
      </div>
      <div className={`flex justify-center ${styles.pagination}`}>
        <ul className="flex justify-between">
          <li>Prev</li>
          <li className={`${styles.active_page} `}>1</li>
          <li>2</li>
          <li>3</li>
          <li>Next</li>
        </ul>
      </div>
      {/* <DashBoard data={data} setData={setData} /> */}
    </div>
  );
};

export default HeroScreen;
