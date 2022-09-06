import Link from "next/link";
import * as styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul className={styles.pagelinks}>
        <li>
          <Link href="/adding-by-1">
            <span className={`${styles.link} ${styles.add}`}>Adding By 1</span>
          </Link>
        </li>
        <li>
          <Link href="/adding-two-digits">
            <span className={`${styles.link} ${styles.add}`}>
              Adding 2 Digit Numbers
            </span>
          </Link>
        </li>
        <li>
          <Link href="/subtracting-by-1">
            <span className={`${styles.link} ${styles.subtract}`}>
              Subtracting By 1
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
