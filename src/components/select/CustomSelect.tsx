import styled from "styled-components";
import { device } from "../../styles/media";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
}: SelectProps) => {
  return (
    <SelectContainer>
      <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </StyledSelect>
    </SelectContainer>
  );
};

export default CustomSelect;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: none;
  width: auto;
  max-width: 400px;
  @media ${device.tablet} {
    width: 350px;
    min-width: 350px;
  }
  font-family: "Roboto", sans-serif;
`;

const StyledSelect = styled.select`
  cursor: pointer;
  font-weight: 600;
  font-family: "Roboto", sans-serif !important;
  background-color: ${({ theme }) => theme.cardGame};
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.logoHover};
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
