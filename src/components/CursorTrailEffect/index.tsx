import { useEffect } from "react";
import * as S from "./style";

export default function CursorTrailEffect() {
  useEffect(() => {
    let images = [
      "😀",
      "😁",
      "😎",
      "🤑",
      "🤬",
      "👹",
      "👽",
      "🦊",
      "🧡",
      "💛",
      "💚",
      "😫",
      "😡",
    ];
    document.addEventListener("mousemove", (e) => {
      let bg = document.querySelector(".bg");
      let emoji = document.createElement("span");
      let x = e.offsetX;
      let y = e.offsetY;

      emoji.style.left = x + "px";
      emoji.style.top = y + "px";

      let icon = images[Math.floor(Math.random() * images.length)];
      emoji.innerText = icon;

      let size = Math.random() * 50;
      emoji.style.fontSize = 5 + size + "px";

      let max = 0;
      let min = 200;
      let randomValue = Math.floor(Math.random() * (max + 1 - min) + min);
      emoji.style.transform = "translateX(" + randomValue + "px)";

      bg?.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 1000);
    });
  }, []);
  return <S.bg className="bg"></S.bg>;
}