import styles from "./home.module.scss";

import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import Main from "../home/main/Main";
import Black from "../home/black/Black";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Header />

        <Main />
      </div>
      <div className={styles.home_black}>
        <Black />
      </div>

      <Footer />
    </>
  );
}
