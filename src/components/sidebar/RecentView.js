import styles from './../../styles/sidebar/recent-view.module.css';

function RecentView() {

  return (
    <div className={styles.container}>

      <div className={styles.title}>Recently Viewed</div>
      {
        <div>
          <div className={styles.series} >
            시리즈1
          </div >
          <div className={styles.series} >
            시리즈2
          </div ><div className={styles.series} >
            시리즈3
          </div ><div className={styles.series} >
            시리즈4
          </div >
        </div>

      }
    </div>
  );
}

export default RecentView;