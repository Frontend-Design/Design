import * as S from "./style";

export const Wavy = () => {
  return (
    <S.Svg>
      <filter>
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.009"
          numOctaves="5"
          seed="2"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
      </filter>
    </S.Svg>
  );
};
