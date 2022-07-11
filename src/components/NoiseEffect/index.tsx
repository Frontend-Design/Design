import * as S from "./styles";

export default function NoiseEffect() {
  return (
    <>
      <S.Section></S.Section>
      <S.Svg>
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="50s"
              values="0.9 0.9;0.8 0.8;0.9 0.9;"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
        </filter>
      </S.Svg>
    </>
  );
}
