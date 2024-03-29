import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  top: 0;
  width: 250px;
  height: 250px;
  display: block;
  background: #000;
  border-radius: 50%;
  transform-origin: 125px 0;
  transform: rotate(calc(90deg * var(--i)));
  filter: blur(80px);
  opacity: 0.75;
  :nth-child(1) {
    background: #01b2fe;
  }
  :nth-child(2) {
    background: #ff008c;
  }
  :nth-child(3) {
    background: #ffcd00;
  }
  :nth-child(4) {
    background: #00c456;
  }
`;

export const Glass = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 1px solid #fff;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transform: skewX(345deg);
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px;
  font-weight: 400;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  color: #333;
  text-align: end;
  i {
    font-weight: 300;
    font-size: 0.75em;
    font-style: normal;
  }
`;
