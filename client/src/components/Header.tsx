import { Stack } from "@mui/material";
import styled from "styled-components";
import logo from "assets/logo.png";
import { SignInOut } from "./SignInOut";

const Header = () => {
  return (
    <Stack
      p={1}
      boxShadow="0 2px 2px 0 rgba(0, 0, 0, .24);"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <LogoImg src={logo} alt="logo" />
      <SignInOut />
    </Stack>
  );
};

export default Header;

const LogoImg = styled.img`
  width: 100px;
`;
