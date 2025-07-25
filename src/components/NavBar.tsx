import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/Logo.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px" />
      <Text>NavBor</Text>
    </HStack>
  );
};

export default NavBar;
