import styles from "./styles.module.scss";

export function LogoAndText() {
  return (
    <div className={styles.container}>
      <img src="logo.png" alt="uPodcast" />
      <span>uPodcast</span>
    </div>
  );
}
