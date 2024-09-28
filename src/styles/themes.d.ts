import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    textHover: string;
    textBody: string;
    header: string;
    background: string;
    card: string;
    button: string;
    buttonHover: string;
    logo: string;
    logoHover: string;
    cardGame: string;
    cardGameOpaque: string;
    cardGameGradient: string;
    bodyBackgroundGradient: string;
  }
}
