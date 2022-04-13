import { useRef } from "react";
import * as S from "./Style";

export default function ImageRoop() {

  const banner:any = useRef();
  console.log(banner);
//   banner.current.focus();

  let arr: Array<number> = [];
  for (let i = 0, amount = 200; i < amount; i++) {
    arr.push(i);
  }

  return (
    <S.ImageRoopLayer>
      <S.Banner ref={banner}>
        {arr.map((index) => {
          return <S.Blocks delay={index * 0.05} />;
        })}
      </S.Banner>
    </S.ImageRoopLayer>
  );
}
