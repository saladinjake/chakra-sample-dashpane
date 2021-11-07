import NextLink from "next/link";
import { RiAddLine } from "react-icons/ri";
import { useState } from "react";
import { Button, Checkbox, 
  Icon, Box, Flex, Heading, Text, 
  Table, Tbody, Td, Th, Thead, Tr, 
  useBreakpointValue, Spinner,
  IconButton, useColorModeValue,
  HStack,VStack,
   Link 
 } from "@chakra-ui/react";


import TradeFairSidebar from '../../components/Sidebar'


import { Pagination } from "../../components/Pagination/index";
import { useTransactions } from "../api/trades/hooks/useTransactions";
import { queryClient, api } from "../api/hello";

import { TopNav } from "../../components/TopNav"
export default function TransactionsList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useTransactions(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function getTransactions(userId) {
    await queryClient.prefetchQuery(['transactions', userId], async () => {
      const response = await api.get(`transactions/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 
    })
  }

  return (


    <>
    <Flex w="100%" >
      <HStack w="full" minH="100vh" alignItems="stretch" spacing={2}  align="flex-start">
      <VStack align="flex-start"  ml="-5px">
         <TradeFairSidebar />
      </VStack>
      <VStack w="full" h="full">
        <TopNav/>
        <hr w="100%"/>
        <Box  borderRadius={8}  w="100%" >
          <Flex mb="8" justify="space-between" >
            <Heading size="lg" fontWeight="normal">
              Transactions
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
            </Heading>

            <NextLink href="/transactions/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Topup Wallet
              </Button>
            </NextLink>


            <NextLink href="/transactions/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
               
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Buy Coin
              </Button>
            </NextLink>


            <NextLink href="/transactions/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
              
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Sell Coin
              </Button>
            </NextLink>

          </Flex>
          <hr w="100%" bg="#000"/>

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Failed to fetch your transactions data.</Text>
            </Flex>

          ) : (
            <>
              <Table colorScheme="whiteAlpha" w="100%" >
                <Thead w="100%">
                  <Tr>
                    <Th px={["4", "4", "6"]} color="#000" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Transaction ID</Th>
                    <Th>Gateway</Th>
                    { isWideVersion && <Th>Transaction Date</Th> }
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody h="300px" overflowY="scroll">
                  {data.transactions.map(tx => {
                    return (
                      <Tr key={tx.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                           

                             <Link color='purple.400' onMouseEnter={() => getTransactions(tx.id)}>
                              <Text fontWeight="bold">{tx.name}</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">{tx.email}</Text>
                          </Box>
                        </Td>

                        <Td>
                          <Link color='purple.400' onMouseEnter={() => getTransactions(tx.id)}>
                               Etherum Gateway
                            </Link>
                        </Td>
                        { isWideVersion && <Td>{tx.createdAt}</Td> }
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
     
    
      </VStack> 
      </HStack>
    </Flex>
    </>
  );
}
