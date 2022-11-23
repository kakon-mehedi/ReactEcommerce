import React from "react";
import styled from "styled-components";

const TopbarText = styled.div`
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center !important;
  height: 30px;
  font-weight: 300;
`;

const Topbar = () => {
  return <TopbarText>Super Deal! Free Shipping on Orders Over $50</TopbarText>;
};

export default Topbar;
