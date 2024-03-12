import {blockInfo} from '../../../../../data'
import styles from'./blockInfo.module.scss'
import BlockInfoComp from './blockInfoComp/BlockInfoComp'


export default function BlockInfo () {
return (
 <div className={styles.block_info}>
 <div className={styles.container}>
 {blockInfo.map((way) => (
             <BlockInfoComp key={way.img} {...way} />
          ))}
        </div>
</div>

);
}