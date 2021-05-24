import { LogoAndText } from "../LogoAndText";
import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <LogoAndText />

      <p>O melhor para você ouvir, sempre</p>

      <span className={styles.date}>{currentDate}</span>
    </header>
  );
}
