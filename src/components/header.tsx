import React from "react";
import styles from "./header.module.css";
import { BsList } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>채영북스</div>
      <div className={styles.list}>
        <BsList />
      </div>
    </header>
  );
};

export default Header;
