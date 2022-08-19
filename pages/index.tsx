import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Sidebar from "../components/Sidebar/index";
import HeroScreen from "../components/HeroScreen";

const Home: NextPage = () => {
  const ISSERVER = typeof window === "undefined";
  let theme;
  if (!ISSERVER) {
    theme = localStorage.getItem("theme");
  }
  return (
    <div className={`main-wrapper flex flex-row `}>
      <Sidebar />
      <HeroScreen />
    </div>
  );
};

export default Home;
