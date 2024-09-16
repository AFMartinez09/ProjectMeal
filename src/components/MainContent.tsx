import { Meal } from "../type";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

type Props = {
  meals: Meal[];
  loading: boolean;
};

const MainContent = ({ meals, loading }: Props) => {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {meals.map(m => (
              <Card key={m.idMeal} maxW="xs" m="2">
              <CardBody>
                <Image
                  src={m.strMealThumb}
                  alt={m.strMeal}
                  borderRadius="lg"
                />
                <Stack margin="3" spacing="3">
                  <Heading size="md">{m.strMeal}</Heading>
                </Stack>
              </CardBody>
                <Button bg="blue.600" color="whitesmoke" m={2}>
                  SHOW RECIPE
                </Button>
            </Card>
      ))}
    </SimpleGrid>
  );
};

export default MainContent;
