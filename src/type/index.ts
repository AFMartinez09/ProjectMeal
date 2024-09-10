export type Category = {
  // La respuesta cuando se llaman todos los platos
  strCategory: string;
}

export type CategoriesResponse = {
  meals: Category[];
}