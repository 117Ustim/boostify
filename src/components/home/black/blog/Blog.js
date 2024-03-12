
import styles from'./blog.module.scss'
import {blog,button} from '../../../../data'
import BlogComp from './blogComp/BlogComp';

import Button from '../../button/Button';


export default function Blog () {
return (
 <div className={styles.blog}>
 
  <div className={styles.blog_title}>
<p>Blog</p>
</div>

 
<div className={styles.frame_blog}>

  
        {blog.map((way) => (
          <BlogComp key={way.img} {...way} />
        ))}
      </div>

 <div className={styles.blog_button}>
<Button text={button[1].text}/>
</div>

</div>
);
}