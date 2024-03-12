import styles from "./whyProduct.module.scss";
import { whyProduct,button } from "../../../../data";
import BlockInfo from "./blockInfo/BlockInfo";
import Button from "../../button/Button";

export default function WhyProduct() {
  return (
    <>
      <div className={styles.whyProduct}>
        <div className={styles.container}>
          <div className={styles.title_block}>
            <div className={styles.title}>
              <p>{whyProduct[0].title}</p>
            </div>
            <div className={styles.text}>
              <p>{whyProduct[1].text}</p>
            </div>
          </div>
          <div className={styles.block_info}>
            <BlockInfo />
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <Button text={button[0].text}/>
      </div>
    </>
  );
}
