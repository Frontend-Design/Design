import styled from "@emotion/styled";

type Active = {
  active: boolean;
};

export const EnvelopeWrapper = styled.div`
  min-height: 100vh;
  background-color: #a8e2ff;
`;

export const Envelope = styled.div`
  position: relative;
  width: 280px;
  height: 180px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  top: 150px;
  background-color: #00334c;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Front = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: 3;
`;

export const Flap = styled(Front)<Active>`
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-bottom: 82px solid transparent;
  border-top: 98px solid #00334c;
  transform-origin: top;

  transform: ${(e) => (e.active ? "rotatex(180deg)" : "rotatex(0deg)")};
  transition: ${(e) =>
    e.active
      ? "transform 0.4s ease, z-index 0.6s"
      : "transform 0.4s 0.6s ease, z-index 1s"};
  z-index: ${(e) => (e.active ? "1" : "5")};
`;

export const Pocket = styled(Front)`
  border-left: 140px solid #0077b2;
  border-right: 140px solid #0077b2;
  border-bottom: 90px solid #006da3;
  border-top: 90px solid transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Letter = styled.div<Active>`
  position: relative;
  background-color: #fff;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0, 0, 0, 0.12);
  transform: ${(e) => (e.active ? "translatey(-60px)" : "translatey(0px)")};
  transition: ${(e) =>
    e.active
      ? "transform 0.4s 0.6s ease, z-index 0.6s"
      : "transform 0.4s ease, z-index 1s"};
  z-index: ${(e) => (e.active ? "2" : "1")};
  :after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 25%,
      rgba(215, 227, 239, 0.7) 55%,
      rgba(215, 227, 239, 1) 100%
    );
  }
`;

export const Words = styled.div`
  position: absolute;
  left: 10%;
  width: 80%;
  height: 14%;
  background-color: #eeeff0;
  :nth-child(1) {
    top: 15%;
    width: 20%;
    height: 7%;
  }
  :nth-child(2) {
    top: 30%;
  }
  :nth-child(3) {
    top: 50%;
  }
  :nth-child(4) {
    top: 70%;
  }
`;

export const Reset = styled.div`
  position: relative;
  top: 200px;
  text-align: center;
  button {
    font-weight: 800;
    font-style: normal;
    transition: all 0.1s linear;
    -webkit-appearance: none;
    background-color: transparent;
    border: solid 2px #0077b2;
    border-radius: 4px;
    color: #0077b2;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    margin: 5px;
    padding: 10px;
    line-height: 1em;
    text-decoration: none;
    min-width: 120px;
    outline: none;
    :hover {
      background-color: #0077b2;
      color: #fff;
    }
  }
`;
