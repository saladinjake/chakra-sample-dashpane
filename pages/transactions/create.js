import { Button } from "@chakra-ui/button";
import {
  Heading, HStack, SimpleGrid, VStack,
 Box, Divider, Flex  
} from "@chakra-ui/layout";
import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import  { useMutation } from 'react-query';

import { Input } from "../../components/Form/Input";

import { api, queryClient } from "../api/hello";
import { useRouter } from "next/router";


const createUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6, 'Password must be at least 6 characters long'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords entered must match')
})

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(async (user) => {
    const response = await api.post('transactions', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('transactions')
    }
  })


  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser = async (values) => {
    await createUser.mutateAsync(values);

    router.push('/transactions');
  }

  const { errors } = formState;

  return (
    <Box>
     

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="#eaeaea"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Add Transactions</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Full name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password-confirmation"
                type="password"
                label="Confirm password"
                error={errors.password_confirmation}
                {...register("password-confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
