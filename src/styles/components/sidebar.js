import styled from "styled-components";
import colors from "../colors";

export const SidebarInner = `
   .sidebar__top-block{
    // background: red;
   }
   .sidebar__img{
       margin-top: 20px;
       img{
           width: 100%;
       }
   }
   .sidebar__gradus{
       position: relative;
       font-size: 88px;
       font-weight: 300;
       margin-left: 40px;
       margin-bottom: 20px;
   }
   .sidebar__gradus-unit{
       position: absolute;
       top: 7px;
       left: 50%;
       font-size: 41px;
       font-weight: 400;
    }
    .navbar__gradus-symbol{
       font-weight: 700;

   }
   .sidebar__date{
        font-size: 18px;
        font-weight: 500;
        color: ${colors.text};
        padding-bottom: 20px;
        border-bottom: solid 1px ${colors.lightBorder};
   }
   .sidebar__time{
        font-size: 15px;
        font-weight: 500;
        color: ${colors.lightText}
   }
   .sidebar__foot{
       margin-top: 10px;
   }
   .sidebar__row{
       display: flex;
       margin: 10px 0px;
   }
   .sidebar__icon{
       margin-right: 10px;
   }
   .sidebar__country-img{
       width: 100%;
       height: 100px;
       img{
           height: 100%;
           width: 100%;
           border-radius: 20px;
           object-fit: cover;
       }
   }
   .sidebar__head{
    display: flex;
   }
   .sidebar__search-input{
       border-width: 0;
       outline-width: 0;
        font-size: 13px;
   }
   .sidebar__search-icon{
       width: 15px;
       height: 15px;
       margin-right: 10px;
   }
   .sidebar__close-icon{
       width: 15px;
       height: 15px;
       transform: rotate(45deg);
       border-radius: 50%;
       &:hover{
           background: #1a1a1a;
           color: #ffffff;
           cursor: pointer;
           line{
               stroke: #ffffff;
           }
           transition: all 0.4s;
       }
   }
`;
