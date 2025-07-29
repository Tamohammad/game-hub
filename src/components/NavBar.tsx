import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60px" borderRadius="50%" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
