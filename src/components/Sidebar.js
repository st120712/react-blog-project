import { useEffect, useRef, useState } from "react"
import styles from "./../styles/sidebar.module.css";

const Sidebar = ({ width = 280, children }) => {
  const side = useRef();

  return (
    <div className={styles.container}>
      <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%' }}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;