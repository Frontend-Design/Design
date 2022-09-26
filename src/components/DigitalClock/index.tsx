import { useState } from "react";
import * as S from "./style";

export default function DigitalClock() {
  const [time, setTime] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
  });

  setInterval(() => {
    let day = new Date();
    setTime({
      hh: day.getHours(),
      mm: day.getMinutes(),
      ss: day.getSeconds(),
    });
  });
  return (
    <S.bg>
      <S.Time>
        <S.Circle color={"#ff2972"} stroke={time}>
          <S.Dots num={time.ss * 6}></S.Dots>
          <svg>
            <circle cx="120" cy="120" r="120"></circle>
          </svg>
        </S.Circle>
        <S.Circle color={"#fee800"} stroke={time}>
          <S.Dots num={time.mm * 6}></S.Dots>
          <svg>
            <circle cx="100" cy="100" r="100"></circle>
          </svg>
        </S.Circle>
        <S.Circle color={"#04fc43"} stroke={time}>
          <S.Dots num={time.hh * 30}></S.Dots>
          <svg>
            <circle cx="80" cy="80" r="80"></circle>
          </svg>
        </S.Circle>
        <S.TimeBox>
          <S.Div c={"#04fc43"}>
            {time.hh > 12
              ? time.hh - 12 < 10
                ? "0" + (time.hh - 12)
                : time.hh - 12
              : time.hh < 10
              ? "0" + time.hh
              : time.hh}
          </S.Div>
          <S.Div c={"#fee800"}>{time.mm < 10 ? "0" + time.mm : time.mm}</S.Div>
          <S.Div c={"#ff2972"}>{time.ss < 10 ? "0" + time.ss : time.ss}</S.Div>
          <S.Div c={"#fff"}>
            <div>{time.hh > 12 ? "PM" : "AM"}</div>
          </S.Div>
        </S.TimeBox>
      </S.Time>
    </S.bg>
  );
}
