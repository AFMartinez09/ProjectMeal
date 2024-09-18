import { Container, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { IoSearch } from "react-icons/io5";

type Props = {}

const Header = ({}: Props) => {
  return (
  <Container maxW="3xl" mt="1" >
    <InputGroup borderColor="gray.600">
      <InputLeftElement pointerEvents='none'>
      <IoSearch color="gray.600"/>
      </InputLeftElement >
      <Input type='text' placeholder='Intenta con "chicken" ó "beans"' />
    </InputGroup>
  </Container>
  )
}

export default Header