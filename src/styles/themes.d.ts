import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    textHover: string;
    header: string;
    background: string;
    card: string;
    button: string;
    buttonHover: string;
    logo: string;
    logoHover: string;
    cardGameGradient: string;
  }
}
