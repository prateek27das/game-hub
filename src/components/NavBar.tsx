import { HStack, Image } from "@chakra-ui/react";
import React from "react";
// import logo from "../assets/flower.png";
import logo from "../assets/logo.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
