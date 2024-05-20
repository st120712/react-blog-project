import { useEffect, useRef, useState } from "react"
import styles from "./../../styles/sidebar.module.css";

const Sidebar = ({ width = 280, children }) => {
  const side = useRef();

  return (
    <div className={styles.container} style={{ width: `${width}px` }}>
      <div ref={side} className={styles.sidebar}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div >
  );
}

export default Sidebar;