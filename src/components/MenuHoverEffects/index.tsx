import * as S from "./style";

export default function MenuHoverEffects() {
  const List = [
    { name: "Home", clr: "#81ecec" },
    { name: "About", clr: "#ff7675" },
    { name: "Service", clr: "#55efc4" },
    { name: "Work", clr: "#a29bfe" },
    { name: "Team", clr: "#fd79a8" },
    { name: "Contact", clr: "#ffeaa7" },
  ];
  return (
    <S.bg>
      <S.Ul>
        {List.map((e) => {
          return (
            <S.Li clr={e.clr} key={e.name}>
              <a href="#" data-text={e.name}>
                {e.name}
              </a>
            </S.Li>
          );
        })}
      </S.Ul>
    </S.bg>
  );
}
