import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 60px;
`;

const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Language = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  font-weight: 300;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type="" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "1rem" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KAKON.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
        </Right>
        <MenuItem>
          <Badge badgeContent={5} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
