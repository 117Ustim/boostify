
import styles from'./blogComp.module.scss'


export default function BlogComp ({img,title,text,data}) {

return (
 <div className={styles.blogComp}>
 <div className={styles.blogComp_img}>
<img src={img} alt='image'/>
</div>
 <div className={styles.title}>
<p>{title}</p>
</div>
<div className={styles.text}>
<p>{text}</p>
</div>
<div className={styles.data}>
<p>{data}</p>
</div>
</div>
);
}