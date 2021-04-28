import colors from "../colors";

export const NavbarInner = `
  display: flex;
  width: 100%;
  justify-content: space-between;
  ul{
      display:flex;
      align-items: center;
      
      list-style:none;
  }
  .navbar__tab{
      color: ${colors.lightText};
      margin: 0px 10px;
      cursor:pointer;
      padding-bottom: 0;
      font-weight: 500;
      height: 50px;
    }
    .navbar__tab--active{
        border-bottom: 1px solid #333;
        color: ${colors.text};
    }
    .navbar__unit-tabs{
        margin-top: 10px;
    }
    .navbar__unit-tab{
        cursor:pointer;
        margin: 0px 4px;
        width: 35px;
        height: 35px;
        font-size: 15px;
        font-weight: 500;
        border-radius: 50%;
        background: #ffffff;
        display: flex;
        color: #333;
        justify-content: center;
        align-items: center;
        position: relative;
  } 
  .navbar__gradus-symbol{
      position: absolute;
      left:3px;
      bottom:-8px;
  }
  .navbar__unit-tab--active{
      color: #ffffff;
      background: #333;
  }
`;
