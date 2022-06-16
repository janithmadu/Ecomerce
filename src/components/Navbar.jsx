import { Badge, MailLock, Search } from "@mui/icons-material";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Searchcontainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  height: 20px;
  display: flex;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  
  
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchcontainer>
            <Input/>
            <Search style={{color:"gray"}} />
          </Searchcontainer>
        </Left>
        <Center>
          <Logo>Janith.</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <MenuItems>
            <Badge color="secondary" badgeContent={10}>
              <MailLock />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
