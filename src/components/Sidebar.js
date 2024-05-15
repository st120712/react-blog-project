import { useEffect, useRef, useState } from "react"
import styles from "./../styles/sidebar.module.css";
import LoginBtn from "./LoginBtn";
import CircleAvatar from "./CircleAvatar.js";

const Sidebar = ({ width = 280, children }) => {
  const side = useRef();

  return (
    <div className={styles.container}>
      <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%' }}>
        <div className={styles.content}>
          <h2>백동호 블로그</h2>
          <CircleAvatar width={width / 1.8}></CircleAvatar>
          <LoginBtn></LoginBtn>
          {children}
        </div>
      </div>
    </div >
  );
}

export default Sidebar;