import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  flex-direction: ${(props) => props.fd || "row"};
`;
