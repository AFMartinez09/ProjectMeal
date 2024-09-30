import { useState } from "react";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { Category, Meal, MealDetails, SearchForm } from "./type";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const url = "https://www.themealdb.com/api/json/v1/1";

const mealList = `${url}/list.php?c=list`;

const makeMealUrl = (category: Category) =>
  `${url}/filter.php?c=${category.strCategory}`;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);
  const { loading, data } = useHttpData<Category>(mealList);

  const {
    loading: loadingMeal,
    setLoading: setLoadingMeal,
    data: dataMeal,
    setData: setMeals,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (searchForm: SearchForm) => {
    const searchUrl = `${url}/search.php?s=${searchForm.search}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(searchUrl)
      .then(({ data }) => {
        setMeals(data.meals);
      })
      .finally(() => setLoadingMeal(false));
  };

  const { fetch, loading: loadingMealDetails, data: mealDetailData } = useFetch<MealDetails>();

  const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${url}/lookup.php?i=${meal.idMeal}`);
  };

  console.log({ dataMeal });

  return (
    <>
      <Grid
        templateAreas={`"header header"
                    "nav main"`}
        gridTemplateRows={"60px 1fr"}
        // sm: header: hidden and the rest 1fr
        // md: show header and the rest 1fr
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        <GridItem
          zIndex="1"
          pos="sticky"
          top="0"
          pl="2"
          bg="gray.300"
          area={"header"}
        >
          <Header onSubmit={searchApi} />
        </GridItem>
        <GridItem
          pos="sticky"
          top="60px"
          p="5"
          bg="gray.100"
          area={"nav"}
          height="calc(100vh - 60px)"
          overflowY="auto"
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>
        <GridItem pl="4" bg="gray.50" area={"main"}>
          <MainContent
            loading={loadingMeal}
            meals={dataMeal}
            openRecipe={searchMealDetails}
          />
        </GridItem>
      </Grid>
      <RecipeModal
        data={mealDetailData}
        isOpen={isOpen}
        onClose={onClose}
        loading={loadingMealDetails}
      />
    </>
  );
}

export default App;
