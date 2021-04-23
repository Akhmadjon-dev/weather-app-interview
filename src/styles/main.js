import styled from "styled-components";
import colors from "./colors";

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 15px;
  padding-left: 190px;
  padding-top: 60px;
  background: ${colors.white};
  @media (max-width: 1024px) {
    & {
      padding-left: 70px;
      padding-right: 0;
    }
  }
`;
