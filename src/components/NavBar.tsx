import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/flower.png'
import { px } from 'framer-motion'
import ColorModeSwitch from './ColorModeSwitch'

function NavBar() {
  return (
    <HStack justifyContent= 'space-between' padding='10px'>
        <Image src = {logo} boxSize='60px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}
 
export default NavBar 