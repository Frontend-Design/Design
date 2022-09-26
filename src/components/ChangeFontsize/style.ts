import styled from "@emotion/styled";

type BtnType = {
  font: boolean;
};

type ContentType = {
  size: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  flex-direction: column;
  margin: 20px auto;
  padding: 0 20px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const Content = styled.div<ContentType>`
  font-size: ${(e) => e.size + "em"};
  color: #4444;
  h2,
  p {
    transition: 0.5s;
  }
`;

export const Btn = styled.span<BtnType>`
  padding: 0 10px;
  display: inline-flex;
  background: ${(e) => (e.font ? "#444" : "#ddd")};
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
  :nth-child(2) {
    font-size: 1.5em;
  }
  :nth-child(3) {
    font-size: 2em;
  }
`;
