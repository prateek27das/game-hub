import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/flower.png'
import { px } from 'framer-motion'

function NavBar() {
  return (
    <HStack>
        <Image src = {logo} boxSize='60px'/>
        <Text>Navbar</Text>
    </HStack>
  )
}
 
export default NavBar 