import Image from "next/image";
import Link from "next/link";
import * as styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" height="40" width="160" />
        </Link>
      </header>
      {children}
    </>
  );
}
