import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { SearchForm } from "../type";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

const Header = ({ onSubmit }: Props) => {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container maxW="3xl" mt="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup borderColor="gray.600">
          <InputLeftElement pointerEvents="none">
            <IoSearch color="gray.600" />
          </InputLeftElement>
          <Input
          focusBorderColor={!!formState.errors.search ? "crimson" : "blue.400"}
            isInvalid= {!!formState.errors.search}
            {...register("search", { required: true })}
            type="text"
            placeholder='Intenta con "chicken" ó "beans"'
          />
          <Button type="submit" bgColor="blue.600" color="whitesmoke" ml={1}>Buscar</Button>
        </InputGroup>
      </form>
    </Container>
  );
};

export default Header;
