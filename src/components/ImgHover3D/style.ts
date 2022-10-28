import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #2f364f;
`;

export const Box = styled.div`
  width: 640px;
  height: 360px;
  transform: rotate(-25deg) skew(25deg);
  transition: 0.5s;
  display: flex;
  :hover {
    transform: rotate(-25deg) skew(-25deg) translateY(-20px);
    span {
      :nth-child(odd) {
        transform: skewY(25deg);
        box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5);
      }
      :nth-child(even) {
        transform: skewY(-25deg);
        box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  width: 25%;
  height: 100%;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png);
  background-size: cover;
  background-position: calc(-160px * var(--i));
  display: block;
  transition: 0.5s;
  pointer-events: none;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  :first-child {
    border-left: 5px solid #fff;
  }
  :last-child {
    border-right: 5px solid #fff;
  }
`;
