import React from "react";
import styled from "styled-components";

const InnerContainer = styled.div`
    min-width: 600px;
    margin: 1rem;
`;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="v-flex v-flex-row v-justify-content-center">
        <InnerContainer>
            {children}
        </InnerContainer>
    </div>
  );
};

export default Container;
