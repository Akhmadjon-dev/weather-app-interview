import styled from "styled-components";
import colors from "../colors";

export default styled.div`
  padding: 30px;

  .section__card-block {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section__card {
    background: #fff;
    border-radius: 22px;
    width: 120px;
    min-height: 160px;
    margin: 0px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .section__card-img {
    width: 60%;
    height: 60px;
    object-fit: cover;
    margin: 6px 0px;
  }
  .section__card-title {
    font-size: 17px;
    font-weight: 500;
  }
  .section__gradus {
    font-size: 14px;
    color: ${colors.lightText};
  }
  .section__gradus-light {
    margin-right: 5px;
    color: ${colors.text};
  }
`;
