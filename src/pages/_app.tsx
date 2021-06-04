import "./../styles/global.scss";
import styles from "./../styles/app.module.scss";

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrenttEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrenttEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider
      value={{ episodeList, currentEpisodeIndex, play, isPlaying }}
    >
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
