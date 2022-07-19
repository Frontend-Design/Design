import { useEffect } from "react";
import * as S from "./style";

export default function CursorEffect() {



    let x = 0, y = 0, mx = 0, my = 0;
    const speed = 0.1;

    const loop = () => {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        window.requestAnimationFrame(loop);
    }

    useEffect(() => {
        let polyline = document.querySelector('polyline');
        let polyPoints = polyline!.getAttribute('points');
        var circle = document.querySelector('circle');
        var circleX: string | null = circle!.getAttribute('cx');
        var circleY: string | null = circle!.getAttribute('cy');
        var circleR: string | null = circle!.getAttribute('r');

        var total = 12;
        var gap = 30;
        var debounce_removeLine: any;
        var debounce_counter = 0;

        var pointer = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            tx: 0,
            ty: 0,
            dist: 0,
            scale: 1,
            speed: 2,
            circRadius: 8,
            updateCrds: function () {
                if (this.x != 0) {
                    this.dist = Math.abs((this.x - this.tx) + (this.y - this.ty));
                    this.scale = Math.max(this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1, 0.25); // gt 0.25 = 4px
                    this.tx += (this.x - this.tx) / this.speed;
                    this.ty += (this.y - this.ty) / this.speed;
                }
            }
        };
        var points: any[] = [];

        document.addEventListener('mousemove', (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
            debounce_counter = 0;
            drawLine();

            // debounce
            clearTimeout(debounce_removeLine);
            debounce_removeLine = setTimeout(() => {
                debounce_counter = 12;
                drawLine();
            }, 80);
        })
        document.addEventListener('mousedown', (e) => {
            pointer.circRadius = 6;
            drawLine();
        })
        document.addEventListener('mouseup', (e) => {
            pointer.circRadius = 8;
            drawLine();
        })

        function drawLine() {
            pointer.updateCrds();

            points.push({
                x: pointer.tx,
                y: pointer.ty
            });
            while (points.length > total) {
                points.shift();
                if (points.length > gap) {
                    for (var i = 0; i < 5; i++) {
                        points.shift();
                    }
                }
            }
            var pointsArr = points.map(point => `${point.x},${point.y}`);
            polyPoints = pointsArr.join(' ');
            polyline!.setAttribute('points', polyPoints);

            // circle
            circleX = String(pointer.x);
            circleY = String(pointer.y);
            circleR = String(pointer.scale * pointer.circRadius);

            circle!.setAttribute('cx', circleX);
            circle!.setAttribute('cy', circleY);
            circle!.setAttribute('r', circleR);

            if (debounce_counter > 0) {
                debounce_counter--;
                requestAnimationFrame(drawLine);
            }
        }
    })

    return (
        <>
            <S.Layout>
                <svg>
                    <S.Circle cx="0" cy="0" r="8" />
                    <S.Polyline points="" />
                </svg>
            </S.Layout>
        </>
    );
}