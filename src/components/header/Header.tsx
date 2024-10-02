import styled from "styled-components";
import { IoIosMenu, IoIosSearch, IoIosSunny, IoIosMoon } from "react-icons/io";

import { IoMdPerson } from "react-icons/io";
import { StyledIcon } from "../logo";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { toggleTheme } from "../../store/slices/uiSlice";
import { device } from "../../styles/media";
import { useState } from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  const dispatch = useAppDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const theme = useAppSelector((state) => state.ui.theme);

  const searchInputToggle = () =>
    setOpenSearch(() => (openSearch ? false : true));

  return (
    <>
      <HeaderContainer>
        <StyledIcon>
          <IoIosMenu />
        </StyledIcon>
        <div className="hide-on-mobile">
          <SearchInput />
        </div>
        <Nav>
          <div className="hide-on-desktop">
            <StyledIcon>
              <IoIosSearch onClick={searchInputToggle} />
            </StyledIcon>
          </div>

          <ThemeSwitch onClick={() => dispatch(toggleTheme())}>
            <StyledIcon>
              {theme === "light" ? <IoIosSunny /> : <IoIosMoon />}
            </StyledIcon>
          </ThemeSwitch>
          <Auth>
            <StyledIcon>
              <IoMdPerson />
            </StyledIcon>
          </Auth>
        </Nav>
      </HeaderContainer>
      <SearchOverlay $isOpen={openSearch}>
        <SearchInput />
      </SearchOverlay>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 25px;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.header};
  z-index: 100;
  @media ${device.laptop} {
    padding: 0 40px;
  }
`;

interface SearchOverlayProps {
  $isOpen?: boolean;
}

export const SearchOverlay = styled.div<SearchOverlayProps>`
  width: 100%;
  padding: 0 25px;
  height: ${(props) => (props.$isOpen ? "50px" : "0")};
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  overflow: hidden;
  transition: height 100ms ease-in-out;
  @media ${device.laptop} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  @media ${device.laptop} {
    gap: 20px;
  }
`;

const ThemeSwitch = styled.div``;

const Auth = styled.div``;
