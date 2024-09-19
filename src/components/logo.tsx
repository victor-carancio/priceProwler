import styled from "styled-components";
import { IconBaseProps, IconContext } from "react-icons";

import { FaSteam, FaXbox } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { StoreTypes } from "../types";

interface ProviderProps {
  className?: string;
  children: JSX.Element;
  color?: string;
  store?: string;
  size?: string;
}

const Provider = ({
  className,
  children,
  color,
  store,
  size,
}: ProviderProps) => (
  <IconContext.Provider value={{ className, color, size }}>
    {store ? StoreIcons[store as StoreTypes] : children}
  </IconContext.Provider>
);

export const StyledIcon = styled(Provider)<IconBaseProps>`
  font-size: 27px;

  cursor: pointer;
  color: ${({ theme }) => theme.logo};
  transition: color 300ms ease, transform 200ms ease;
  &:hover {
    color: ${({ theme }) => theme.logoHover};
    transform: scale(1.1);
  }
`;

export const StyledStoreIcon = styled(Provider)<IconBaseProps>`
  font-size: ${({ size }) => `${size ? size : "24"}px `};
  /* height: 35px; */
  /* width: 35px; */

  cursor: pointer;
  color: ${({ theme }) => theme.logo};
  transition: color 300ms ease, transform 200ms ease;
  &:hover {
    color: ${({ theme }) => theme.logoHover};
    transform: scale(1.1);
  }
`;

const StoreIcons: Record<StoreTypes, JSX.Element> = {
  [StoreTypes.STEAM_STORE]: <FaSteam color="#f2ecff" />,
  [StoreTypes.EPIC_STORE]: <SiEpicgames color="#f2ecff" />,
  [StoreTypes.XBOX_STORE]: <FaXbox color="#f2ecff" />,
};
