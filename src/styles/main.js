import styled from "styled-components";
import colors from "./colors";
import { NavbarInner } from "./components/navbar";
import { SidebarInner } from "./components/sidebar";

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  padding: 20px 30px;
  background: ${colors.mainBc};
`;
export const SidebarStyled = styled.div`
  padding: 30px;
  width: 290px;
  position: fixed;
  top: 20px;
  bottom: 5px;
  left: 30px;
  background: ${colors.white};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  z-index: 1050;
  overflow: hidden;
  scroll-behavior: smooth;
  ${SidebarInner}
`;
export const NavbarStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  border-top-right-radius: 30px;
  width: 100%;
  height: 60px;
  margin-left: 290px;
  padding-right: 30px;
  line-height: 60px;
  z-index: 100;
  ${NavbarInner}
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 96vh;
  padding: 15px;
  margin-left: 290px;
  padding-top: 60px;
  background: ${colors.bc};
  // @media (max-width: 1024px) {
  //   & {
  //     padding-left: 70px;
  //     padding-right: 0;
  //   }
  // }
`;
