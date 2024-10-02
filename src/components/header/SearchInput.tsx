import styled from "styled-components";
import { StyledIcon } from "../logo";
import { IoIosSearch } from "react-icons/io";
import { device } from "../../styles/media";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
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
    console.log("jio");

    if (formData.gameName !== "") {
      navigate(`/results?search=${encodeURIComponent(formData.gameName)}`);
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <input
        type="text"
        name="gameName"
        value={formData.gameName}
        onChange={handleChange}
        className="search-input"
        placeholder="Buscar videojuego..."
        autoComplete="off"
      />
      <StyledIcon className="input-logo">
        <IoIosSearch onClick={handleSubmit} />
      </StyledIcon>
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

  .search-input {
    padding: 0 40px 0px 20px;
    height: 70%;
    width: 100%;
    font-weight: bold;
    font-size: 13px;
    background-color: ${({ theme }) => theme.card};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
  }

  .input-logo {
    /* background-color: red; */
    position: absolute;
    right: 10px;
    transform: scale(0.8);
  }

  /* .search-input {
    padding: 0 10px;
    height: 70%;
    width: 100%;
    font-weight: bold;
    font-size: 13px;
    background-color: ${({ theme }) => theme.card};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
  }
  .input-logo {
    position: absolute;
    right: 0;
    margin-right: 5px;
  } */
`;
