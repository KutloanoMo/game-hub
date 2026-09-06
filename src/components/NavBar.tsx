import { HStack, Image, Text } from "@chakra-ui/react";
import webLogo from "../assets/web_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={webLogo} boxSize="60px" bg="transparent" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
