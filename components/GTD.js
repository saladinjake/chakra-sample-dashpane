import { ReactElement, useEffect } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  VStack,
  useColorModeValue,
  Flex
} from "@chakra-ui/react"

import FakeChart from "./FakeChart"

export const GettingStarted = ({ children, ...props }) => {
  
  return (
    <Accordion mt="-15px" ml="-10px"  w="100%"  
    boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)"
    height="100vh"
    border="2px solid #eaeaea"

    >
  <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
         Overview Pane
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

       <HStack>
           <Box w="100%">
               <FakeChart/>
           </Box>
       </HStack>
     



     
      <Flex align="column"  >
      
         <Box p="10px" w="50%" ml="-20px"   boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        background="var(--chakra-colors-gray-100)">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
         </Box>
         <Box w="50%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
         </Box>
          
      </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
          Transactions Sucessful
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
          Transaction Pending
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
          Mining Team list
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
          Trading Bots
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>



   <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
      Notifications
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>



   <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
        Records/History
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton h="40px" boxShadow="10px 4px 12px 0 rgba(0, 0, 0, 0.05)">
        <Box flex="1" textAlign="left" fontSize="12px">
       
         Hi Eugene, this is just a sample demo for you. Thanks for reaching out to me and apologies for not being available, Wish me luck !!
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
       

  )
}


