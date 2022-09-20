import { useState } from "react";
import * as S from "./style";

export default function ChangeFontsize() {
  const [font, setFont] = useState(1);
  return (
    <S.bg>
      <S.Container>
        <S.Buttons>
          <S.Btn font={font == 1} onClick={() => setFont(1)}>
            A
          </S.Btn>
          <S.Btn font={font == 2} onClick={() => setFont(2)}>
            A
          </S.Btn>
          <S.Btn font={font == 7} onClick={() => setFont(7)}>
            A
          </S.Btn>
        </S.Buttons>
        <S.Content size={font}>
          <h2>Change Font Size</h2>
          <p>
            Loream dsasa mncna sscacasc csacacasccascx csac ajiocjiaojsvmkaa
            dasdasjnhpkajn mknjdjoia;lknscc jljnjkcsjknvkjhks sjkdsnvkjkbkjds v
            khnouojsdijd fs sopvjsj jdsjj vsdnls skjopjwnvioujwoejoirv
            cvklsnvlkl ocjiaojsvmkaa dasdasjnhpkajn mknjdjoia;lknscc
            jljnjkcsjknvkjhks sjkdsnvkjkbkjds v khnouojsdijd fs sopvjsj jdsjj
            vsdnls skjopjwnvioujwoejoirv cvklsnvlkl ocjiaojsvmkaa dasdasjnhpkajn
            mknjdjoia;lknscc jljnjkcsjknvkjhks sjkdsnvkjkbkjds v khnouojsdijd fs
            sopvjsj jdsjj vsdnls skjopjwnvioujwoejoirv cvklsnvlkl
          </p>
        </S.Content>
      </S.Container>
    </S.bg>
  );
}
