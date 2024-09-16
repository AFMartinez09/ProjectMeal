import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { Category, Meal } from "./type";
import useHttpData from "./hooks/useHttpData";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);
  const { loading, data } = useHttpData<Category>(url);
  const { loading: loadingMeal, data: dataMeal } = useHttpData<Meal>(
    makeMealUrl(defaultCategory)
  );

  console.log({ dataMeal });

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"60px 1fr"}
      // sm: header: hidden and the rest 1fr
      // md: show header and the rest 1fr
      gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      fontSize={14}
    >
      <GridItem zIndex="1" pos="sticky" top="0" pl="2" bg="gray.300" area={"header"}>
        <Header />
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
        <MainContent loading={loadingMeal} meals={dataMeal} />
      </GridItem>
    </Grid>
  );
}

export default App;
