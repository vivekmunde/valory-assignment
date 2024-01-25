import React from "react";
import styled from "styled-components";

const StyedContent = styled.div`
  padding: 1rem 0;
`;

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyedContent>{children}</StyedContent>;
};

export default Content;
