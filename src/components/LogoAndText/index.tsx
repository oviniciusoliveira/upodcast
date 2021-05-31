import styles from "./styles.module.scss";
import Link from "next/link";

export function LogoAndText() {
  return (
    <Link href="/">
      <div className={styles.container}>
        <img src="/logo.png" alt="uPodcast" />
        <span>uPodcast</span>
      </div>
    </Link>
  );
}
