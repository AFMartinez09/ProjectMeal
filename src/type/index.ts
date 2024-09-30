export type Category = {
  // La respuesta cuando se llaman todos los platos
  strCategory: string;
}

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string; 
}

export type SearchForm = {
  search: string;
};

export type MealDetails = {
  // se hace para hacer un objeto dinamico
  [key: string]: string;
};