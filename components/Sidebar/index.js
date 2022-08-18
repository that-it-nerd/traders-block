import React from "react";
import styles from "./sidebar.module.scss";
import Tabs from "../../JSON/Tabs.json";
import Image from "next/image";
import Link from "next/link";
import logoutIcon from "../../public/images/logout.png";
import brandIcon from "../../public/images/brand.png";

const Sidebar = () => {
  return (
    <div className={`basis-2/7 sidebar-wrapper  ${styles.sidebar}`}>
      <div className={`${styles.title_block} `}>
        <h1 className="flex flex-row ">
          {" "}
          <Image src={brandIcon} alt="" width={40} height={40} />
          <p>Traders Block</p>
        </h1>
      </div>

      <ul className={styles.tabs_list}>
        {Tabs &&
          Tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={`flex flex-row ${index === 5 && "active-tab"} `}
            >
              <Link href="#">
                <a>
                  <Image src={tab.icon} alt="" width={14} height={14} />
                  {tab.name}
                </a>
              </Link>
            </li>
          ))}
      </ul>

      <div className={styles.log_out}>
        <Link href="#">
          <a>
            <Image src={logoutIcon} alt="" width={14} height={14} />
            Log Out
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
