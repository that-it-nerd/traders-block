import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Sidebar from "../components/Sidebar/index";
import HeroScreen from "../components/HeroScreen";

const Home: NextPage = () => {
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
      className={`main-wrapper flex flex-row ${
        color == "light" ? `${styles.light}` : `${styles.dark}`
      }`}
    >
      <Sidebar />
      <HeroScreen />
    </div>
  );
};

export default Home;
