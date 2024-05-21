import styles from './../../styles/sidebar/login-btn.module.css';

function LoginBtn() {
  return (
    <div className={styles.container}>
      <button className={styles.loginBtn}>로그인</button>
    </div>
  );
}

export default LoginBtn;