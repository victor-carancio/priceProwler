import styled from "styled-components";
import { StyledStoreIcon } from "./logo";

interface CustomBtnProps {
  text: string;
  icon?: JSX.Element;
}

const CustomBtn = ({ text, icon }: CustomBtnProps) => {
  return (
    <Button>
      <StyledStoreIcon size="18">{icon && icon}</StyledStoreIcon>
      <p>{text}</p>
    </Button>
  );
};

const Button = styled.div`
  /* background-color: red; */
  border-radius: 3px;
  width: auto;
  height: 25px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  align-items: center;
  gap: 10px;
  p {
    font-size: 12px;
    font-weight: bold;
  }
`;

export default CustomBtn;
