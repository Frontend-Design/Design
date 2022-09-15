import { useState } from "react";
import * as S from "./stlye";

export default function Clock() {
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
      <S.Clock>
        <S.Hour num={time.hh * 30 + (time.mm * 6) / 12}>
          <div></div>
        </S.Hour>
        <S.Min num={time.mm * 6}>
          <div></div>
        </S.Min>
        <S.Sec num={time.ss * 6}>
          <div></div>
        </S.Sec>
      </S.Clock>
      <S.DigitalClock>
        <div>
          {time.hh > 12
            ? time.hh - 12 < 10
              ? "0" + (time.hh - 12)
              : time.hh - 12
            : time.hh < 10
            ? "0" + time.hh
            : time.hh}
          :
        </div>
        <div>{time.mm < 10 ? "0" + time.mm : time.mm}:</div>
        <div>{time.ss < 10 ? "0" + time.ss : time.ss}</div>
        <div>{time.hh > 12 ? "PM" : "AM"}</div>
      </S.DigitalClock>
    </S.bg>
  );
}
