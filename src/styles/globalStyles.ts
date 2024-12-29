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
   
 }

 a{
    color: inherit;
    text-decoration: none;
 }

 hr{
   height: 0px;
    border: none;
    border-top: ${({ theme }) => `0.5px solid ${theme.text}`};

 }

 option{
   font-family: 'Roboto', sans-serif;
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




`;

export default GlobalStyles;
