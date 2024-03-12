import styles from "./header.module.scss";
import { header } from "../../../data";
import Burger from "./burger/Burger";
import BasicModal from "../header/modal/Modal";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_block}>
        <div className={styles.logo}>
          <img src={header[0].logo_header} alt="logo" />
        </div>
        <div className={styles.block_button}>
          <div className={styles.nav}>
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Blog</p>
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <BasicModal text={<p>Let's talk</p>}></BasicModal>
          </div>
          <div className={styles.nav_460}>
            <Burger />
          </div>
        </div>
      </div>
    </div>
  );
}
