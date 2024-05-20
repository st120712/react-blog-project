import Sidebar from './../components/sidebar/Sidebar';
import LoginBtn from './../components/sidebar/LoginBtn';
import CircleAvatar from './../components/sidebar/CircleAvatar';
import styles from './../styles/main-view.module.css';

const MainView = ({ children }) => {
  let width = 280;

  return (
    <div className={styles.container}>
      <Sidebar width={width}>
        <h2>백동호 블로그</h2>
        <CircleAvatar width={width / 1.8} />
        <LoginBtn />
      </Sidebar>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default MainView;