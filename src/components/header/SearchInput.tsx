import styled from "styled-components";
import { StyledIcon } from "../logo";
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { device } from "../../styles/media";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  onClick: () => void;
}

const SearchInput = ({ onClick }: SearchInputProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gameName: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement>
  ) => {
    event.preventDefault();
    // console.log("jio");

    if (formData.gameName !== "") {
      navigate(`/results?search=${encodeURIComponent(formData.gameName)}`);
      setFormData({ ...formData, gameName: "" });
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="gameName"
        value={formData.gameName}
        onChange={handleChange}
        className="search-input"
        placeholder="Buscar videojuego..."
        autoComplete="off"
      />
      <InputLogoContainer>
        <StyledIcon>
          <IoFilterSharp onClick={onClick} />
        </StyledIcon>
        <StyledIcon className="input-logo">
          <IoIosSearch onClick={handleSubmit} />
        </StyledIcon>
      </InputLogoContainer>
    </InputContainer>
  );
};

export default SearchInput;

const InputContainer = styled.form`
  width: 100%;
  max-width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${device.laptop} {
    height: 50px;
    width: 800px;
  }
`;

const Input = styled.input`
  padding: 0 40px 0px 20px;
  height: 70%;
  width: 100%;
  font-weight: bold;
  font-size: 13px;
  background-color: ${({ theme }) => theme.card};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  /* .input-logo {
    position: absolute;
    right: 10px;
    transform: scale(0.8);
  } */
`;

const InputLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  right: 10px;
  transform: scale(0.8);
`;
