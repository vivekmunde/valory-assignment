import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin-bottom: 1rem;
`;

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledHeader className="v-flex v-flex-row v-justify-content-center">
      {children}
    </StyledHeader>
  );
};

export default Header;
