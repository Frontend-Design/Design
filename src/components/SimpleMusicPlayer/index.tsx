import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import * as SVG from "./SVG";

export default function SimpleMusicPlayer() {
  const songList = [
    {
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_03_-_Promenade_Moderato_comodo_e_con_delicatezza.mp3",
      name: "First Song",
    },
    {
      path: "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse",
      name: "Next Song",
    },
    {
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3",
      name: "End Song",
    },
  ];
  const [songNum, setSongNum] = useState(0);
  const [PlaySong, setPlaySong] = useState(false);
  const Audio: any = useRef();
  useEffect(() => {
    switch (PlaySong) {
      case true:
        Audio.current.play();
        break;
      case false:
        Audio.current.pause();
        break;
      default:
        break;
    }
  }, [PlaySong, songNum]);

  return (
    <S.bg>
      <S.Music>
        <S.Title>{songList[songNum].name}</S.Title>
        <S.Player>
          <S.Audio src={songList[songNum].path} ref={Audio}></S.Audio>
          <S.Btns>
            <S.Prev
              onClick={() => {
                setSongNum((prev) => {
                  if (prev == 0) {
                    return songList.length - 1;
                  } else {
                    return prev - 1;
                  }
                });
              }}
            >
              <SVG.Prev />
            </S.Prev>
            <S.PlayPause
              onClick={() =>
                PlaySong ? setPlaySong(false) : setPlaySong(true)
              }
            >
              {PlaySong ? <SVG.Pause /> : <SVG.Play />}
            </S.PlayPause>
            <S.Next
              onClick={() => {
                setSongNum((prev) => {
                  if (prev == songList.length - 1) {
                    return 0;
                  } else {
                    return prev + 1;
                  }
                });
              }}
            >
              <SVG.Next />
            </S.Next>
          </S.Btns>
        </S.Player>
      </S.Music>
    </S.bg>
  );
}
