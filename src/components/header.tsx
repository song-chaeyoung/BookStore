import React from "react";
import style from "./header.module.css";
import { BsList } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link href="/">
          <div className={style.logo}>채영북스</div>
        </Link>
        <div className={style.list}>
          <BsList />
        </div>
      </div>
    </header>
  );
};

export default Header;
