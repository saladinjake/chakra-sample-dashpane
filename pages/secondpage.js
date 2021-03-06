import React from "react"
import TradeFairSidebar from '../components/Sidebar'
import { Flex, Text, 
  IconButton, useColorModeValue,
  HStack,VStack,Box

   } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { NavTabs } from "../components/NavTabs"
import  {TopNav } from '../components/TopNav'


export default function Page2() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"],
  )
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]
  return (
    <>
  
    <Flex w="100%">
      <HStack w="full" minH="100vh" alignItems="stretch" spacing={2}  align="flex-start">
      <VStack align="flex-start"  ml="-20px">
         <TradeFairSidebar />    
      </VStack>
      <VStack w="full" h="full">
       <TopNav/>
        Build something awesome
      </VStack> 
      </HStack>

    </Flex>
    </>
  )
}
