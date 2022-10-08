import styled from "@emotion/styled";

type ListType = {
  select: boolean;
  toggle: boolean;
};

type ToggleType = {
  toggle: boolean;
};

type IconType = {
  color: string;
};

type TextType = {
  color: string;
  toggle: boolean;
};

export const bg = styled.div`
  background: #3d4152;
  min-height: 100vh;
`;

export const Navigation = styled.div<ToggleType>`
  position: fixed;
  inset: 20px 0 20px 20px;
  width: ${(e) => (e.toggle ? "250px" : "75px")};
  background: #fff;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    width: 100%;
  }
`;

export const MenuToggle = styled.div<ToggleType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 23px;
  ::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: ${(e) =>
      e.toggle ? "translateY(0px) rotate(45deg)" : "translateY(-8px)"};
    transition: 0.5s;
  }
  ::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: ${(e) =>
      e.toggle ? "translateY(0px) rotate(-45deg)" : "translateY(8px)"};
    transition: 0.5s;
    box-shadow: ${(e) => (e.toggle ? "0 0 0 #333" : "0 -8px 0 #333")};
  }
`;

export const List = styled.li<ListType>`
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  transition: 0.5s;
  transform: translateX(
    ${(e) => (e.select ? (e.toggle ? "10px" : "30px") : "")}
  );
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    text-decoration: none;
  }
`;

export const Icon = styled.span<IconType>`
  --clr: ${(e) => e.color};
  position: relative;
  display: block;
  min-width: 55px;
  height: 55px;
  line-height: 60px;
  transition: 0.5s;
  border-radius: 10px;
  font-size: 1.75em;
  color: ${(e) => (e.color ? "#fff" : "#222")};
  background-color: var(--clr);
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    filter: blur(8px);
    opacity: ${(e) => (e.color ? "0.5" : "0")};
    transition: 0.5s;
  }
`;

export const Text = styled.span<TextType>`
  position: relative;
  padding: 0 15px;
  height: 60px;
  display: flex;
  align-items: center;
  color: ${(e) => e.color};
  opacity: ${(e) => (e.toggle ? 1 : 0)};
  visibility: ${(e) => (e.toggle ? "visible" : "hidden")};
  transition: 0.5s;
`;
