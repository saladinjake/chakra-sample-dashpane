import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout"

import { LoadingProgressProvider } from '../components/LoadSkeleton'




function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <LoadingProgressProvider>
     <Layout>
      <Component {...pageProps} />
      </Layout>
      </LoadingProgressProvider>
    </ChakraProvider>
  )
}

export default MyApp
