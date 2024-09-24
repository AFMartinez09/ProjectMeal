import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Meal } from "../type";

type Props = {
  meal: Meal;
  // no hay necesidad de pasarle ningún parámetro
  openRecipe: () => void;
};

const MealCard = ({ meal, openRecipe }: Props) => {
  return (
    <Card maxW="md" m="2">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Stack margin="3" spacing="3">
          <Heading size="md">
            <Text>{meal.strMeal}</Text>
          </Heading>
        </Stack>
      </CardBody>
      <Button onClick={openRecipe} bg="blue.600" color="whitesmoke" m={2}>
        SHOW RECIPE
      </Button>
    </Card>
  );
};

export default MealCard;
