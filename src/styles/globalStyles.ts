import { createGlobalStyle } from "styled-components";
import { device, deviceMax } from "./media";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
}
textarea:focus, input:focus{
    outline: none;
}

 body{
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.3s, color 0.3s;
    /* max-width: 1440px; */
 }

 a{
    color: inherit;
    text-decoration: none;
 }

 .logo{
   width: 30px;
   height: 30px;
   font-weight: bold;
   font-size: 30px;
  /* cursor: pointer; */
  color: ${({ theme }) => theme.logo};
  
  transition: color 1000ms ease-in;
  
 }

 .logo:hover {
    color: yellow;
  }

 .hide-on-mobile{
   @media ${deviceMax.laptop}{
      display: none;
   }
 }

 .hide-on-desktop{
   @media ${device.laptop}{
      display: none;
   }
 }

 .mobile{
   @media ${device.laptop}{
      background-color: red;
   }
 }

 .desktop{
   @media ${device.laptop}{
      background-color: blue;
   }
 }


`;

export default GlobalStyles;
