import ImgPost from './post/ImgPost';
import styles from './../styles/total-series.module.css';
import { useSelector } from 'react-redux';

function TotalSeries() {

  let state = useSelector((state) => state);

  return (
    <div className={styles.container}>
      <div className={styles.title}>전체 시리즈</div>
      <hr />
      <div className={styles.content}>
        {
          state.seriesItem.map((item, i) => {
            return (
              <ImgPost item={item} />
            )
          })
        }

      </div>

    </div>
  );
}

export default TotalSeries;