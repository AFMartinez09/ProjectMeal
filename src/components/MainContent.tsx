import { Meal } from "../type";
import { SimpleGrid } from "@chakra-ui/react";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void;
};

const MainContent = ({ meals, loading, openRecipe }: Props) => {
  // show 10 loading cards then show cards (uploaded)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {/* show skeleton when loading is true */}
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      
      {!loading && meals.map((m) => (
        // esta es la manera correcta para que funcione el modal y no openRecipe{openRecipe}
        <MealCard openRecipe = {() => openRecipe(m)} key={m.idMeal} meal={m} />
      ))}
    </SimpleGrid>
  );
};

export default MainContent;
