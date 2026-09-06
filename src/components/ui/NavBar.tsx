import { HStack, Image, Text } from "@chakra-ui/react";
import webLogo from "../../assets/web_logo.png";

const NavBar = () => {
  return (
    <HStack bg="transparent">
      <Image src={webLogo} boxSize="60px" bg="transparent" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
