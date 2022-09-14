import * as S from "./style";
import * as SVG from "./SVG";

export function CheckBox() {
  return (
    <S.bg>
      <S.label>
        <input type="checkbox"></input>
        <S.icon className="icon">
          <div className="shadow"></div>
          <div className="iconBox">
            <SVG.power />
          </div>
        </S.icon>
      </S.label>
    </S.bg>
  );
}
