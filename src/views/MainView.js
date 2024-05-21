import Sidebar from './../components/sidebar/Sidebar';
import LoginBtn from './../components/sidebar/LoginBtn';
import CircleAvatar from './../components/sidebar/CircleAvatar';
import styles from './../styles/view/main-view.module.css';
import RecentView from './../components/sidebar/RecentView';

const MainView = ({ children }) => {
  let width = 280;

  return (
    <div className={styles.container}>
      <Sidebar width={width}>
        <h2 style={{ textAlign: 'center' }}>백동호 블로그</h2>
        <CircleAvatar width={width / 1.8} />
        <LoginBtn />
        <RecentView />
      </Sidebar>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default MainView;