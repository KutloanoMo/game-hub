import { HStack, Image, Text } from "@chakra-ui/react";
import webLogo from "../assets/web_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch: (searchText:string)=>void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
      <Image src={webLogo} boxSize="60px" bg="transparent" borderRadius="10px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
