import { guidingScalingComp } from "../../../../../data";
import styles from "./guidingScalingComp.module.scss";
import GuidingScalingFrame from "./guidingScalingCompFrame/guidingScalingCompFrame";

export default function GuidingScalingComp() {
  return (
    <div className={styles.guidingScalingComp}>
      <div className={styles.frame}>
        {guidingScalingComp.map((way) => (
          <GuidingScalingFrame key={way.img} {...way} />
        ))}
      </div>
    </div>
  );
}
