import * as S from "./style";

export default function FireTextAnimation() {
  return (
    <S.bg>
      <S.Text>
        <S.Title>Fire</S.Title>
      </S.Text>
      <svg>
        <filter id="fire">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.1 0.1"
            numOctaves="2"
            seed="3"
          >
            <animate
              attributeName="baseFrequency"
              dur="10s"
              values="0.1 0.1;0.12 0.2"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="25"></feDisplacementMap>
        </filter>
      </svg>
    </S.bg>
  );
}
