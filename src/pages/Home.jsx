import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const HomeWrapper = styled.div``;

const Home = () => {
  return (
    <HomeWrapper>
      <Topbar />
      <Navbar />
    </HomeWrapper>
  );
};

export default Home;
