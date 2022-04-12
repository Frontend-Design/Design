import { useEffect, useState } from "react";
import { Background, RainLine } from "./Style";

export default function ColorfulRain() {

    let arr: Array<number> = [];

    for (let i = 0, amount = 30; i < amount; i++) {
        arr.push(i);
    }

    return (
        <Background>
            {
                arr.map((index) => {
                    return (
                        <RainLine key={index} 
                        randomwidth={0.2 + Math.random() * 5 + 'px'} 
                        randomleft={Math.floor(Math.random() * window.innerWidth - 22) + 'px'} 
                        randomdelay={Math.random() * -20 + 's'} 
                        randomduration={Math.random() * 5 + 1 + 's'} />
                    );
                })
            }

        </Background>
    );
}