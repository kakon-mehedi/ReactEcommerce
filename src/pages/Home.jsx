import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Topbar from "../components/Topbar";

const HomeWrapper = styled.div``;

const Home = () => {
  return (
    <HomeWrapper>
      <Topbar />
      <Navbar />
      <Slider />
    </HomeWrapper>
  );
};

export default Home;
