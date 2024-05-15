import styles from './../styles/circle_avatar.module.css';

function CircleAvatar({ width }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar} style={{ width: `${width}px`, height: `${width}px`, borderRadius: `${width}px` }} />
    </div>
  );
}

export default CircleAvatar;