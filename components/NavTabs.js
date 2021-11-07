import { Tabs, TabList, TabPanels,
 Tab, TabPanel,VStack, Box ,Flex
} from "@chakra-ui/react"

import { GettingStarted } from  "./GTD"


import  {TopNav } from './TopNav'
export const NavTabs = () => {

  
  // 1. Create the component
  function DataTabs({ data }) {
    return (
      <>
       <TopNav/>
      <Tabs  w="100%" mt="-10px">
        <TabList h="1em">
          {data.map((tab, index) => (
            <Tab  fontSize="10px" key={index}>{tab.label}</Tab>
          ))}
          <Tab fontSize="10px" >Hello</Tab>
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}


          <TabPanel>
            


      <Flex align="column"  >
      
         <Box p="10px" w="70%" ml="-20px"   boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        background="var(--chakra-colors-gray-100)">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
         </Box>
         <Box w="30%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
         </Box>
          
      </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

      </>
    )
  }

  // 2. Create an array of data
  const tabData = [
    {
      label: "Dashboard",
      content: <GettingStarted/>,
    },
    {
      label: "Profile",
      content:
        "build somethin awesome",
    },
     {
      label: "Wallet",
      content:
        "build somethin awesome",
    },
  ]

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />
}