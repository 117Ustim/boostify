
import styles from'./numberComp.module.scss'


export default function NumberComp ({title,text}) {
return (
 <div className={styles.numberComp}>
 <div className={styles.title}>
{title}
</div>
<div className={styles.text}>
{text}
</div>
</div>
);
}