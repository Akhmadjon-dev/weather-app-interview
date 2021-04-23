import styled from "styled-components";
import colors from "./colors";

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
`;
export const SidebarStyled = styled.div`
  width: 290px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: ${colors.white};
  z-index: 1050;
  overflow-y: auto;
  scroll-behavior: smooth;
`;
export const NavbarStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 290px;
  padding-right: 30px;
  line-height: 60px;
  z-index: 100;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 15px;
  padding-left: 190px;
  padding-top: 60px;
  background: ${colors.bc};
  @media (max-width: 1024px) {
    & {
      padding-left: 70px;
      padding-right: 0;
    }
  }
`;
