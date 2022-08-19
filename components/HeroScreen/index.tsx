import React, { useState } from "react";
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
  const [data, setData] = useState<Data>({
    name: "John",
    age: 30,
  });
  return (
    <div className={`basis-5/7 ${styles.heroScreen}`}>
      <div className={`${styles.nav_bar} flex justify-end`}>
        <TopBar />
      </div>
      <div className={styles.page_head}>
        <h4>My Team</h4>
      </div>
      <div className={`flex justify-start items-center`}>
        <Card type={"card"} />
        <Card type={"referral"} />
      </div>
      <div className={`flex justify-start items-center`}>
        <Card type={"table"} />
      </div>
      {/* <DashBoard data={data} setData={setData} /> */}
    </div>
  );
};

export default HeroScreen;
