import styles from './../../styles/img-post.module.css';

function ImgPost(props) {
  return (
    <div className={styles.container} id={props.item.id}>
      <div className={styles.img_box}>
        <img className={styles.img_thumbnail} src={props.item.img} />
      </div>
      <div className={styles.title} >
        {props.item.title}
      </div>
      <div className={styles.content}>
        {props.item.content}
      </div>
    </div>
  );
}

export default ImgPost;