import colors from "../colors";

export const NavbarInner = `
  display: flex;
  width: 100%;
  justify-content: space-between;
  ul{
      display:flex;
      list-style:none;
  }
  .navbar__tab{
      margin: 0px 4px;
      cursor:pointer;
    }
    .navbar__tab--active{
        color: red;
    }
    .navbar__unit-tab{
        cursor:pointer;
        margin: 0px 4px;

  }
  .navbar__unit-tab--active{
      color: red;
  }
`;
