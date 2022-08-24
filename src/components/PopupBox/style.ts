import styled from "@emotion/styled";

type ActiceType = {
  active: boolean;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1a242a;
`;

export const container = styled.div<ActiceType>`
  position: relative;
  width: ${(e) => (e.active ? "400px" : "0px")};
  height: ${(e) => (e.active ? "400px" : "0px")};
  background: #37444b;
  border-radius: 25px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    opacity: ${(e) => (e.active ? " 1" : "0")};
    content: "";
    position: absolute;
    bottom: -15px;
    width: 40px;
    height: 40px;
    background: #37444b;
    border-radius: 5px;
    transform: rotate(45deg);
    transition: ${(e) => (e.active ? "0.5s" : "")};
  }
`;

export const toggleBtn = styled.div<ActiceType>`
  position: absolute;
  bottom: ${(e) => (e.active ? "-90px" : "-20px")};
  transform: ${(e) => (e.active ? "rotate(135deg)" : "")};
  min-width: 60px;
  height: 60px;
  background: ${(e) => (e.active ? "#ff5a57" : "#0bcf9c")};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  ::before {
    content: "+";
    color: #fff;
  }
`;

export const content = styled.div<ActiceType>`
  min-width: 400px;
  padding: 40px;
  color: #fff;
  opacity: ${(e) => (e.active ? " 1" : "0")};
  transition: 0.5s;
  transition-delay: ${(e) => (e.active ? " 0.5s" : "")};
  transform: ${(e) => (e.active ? " scale(1)" : "scale(0)")};
`;
