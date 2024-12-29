// import React from "react";
import styled from "styled-components";

// interface ViewMoreButtonProps {
//   isExpanded: boolean;
// }

// export const ViewMoreButton = ({ isExpanded }: ViewMoreButtonProps) => {
//   return <ViewMore>{isExpanded ? "Ver menos" : "Ver más"}</ViewMore>;
// };

export const ViewMore = styled.div`
  box-sizing: content-box;
  cursor: pointer;
  align-self: flex-end;
  text-align: center;
  background-color: ${({ theme }) => theme.card};
  padding: 3px 8px;
  width: 100px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.textBody};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 0.5px solid transparent;
  transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.textBody};
    background-color: ${({ theme }) => theme.background};
  }
`;
