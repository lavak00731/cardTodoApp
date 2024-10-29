import { categoryInterface } from "./categoryInterface";
export interface categoriesInterface {
    categoriesList: categoryInterface[],
    setCategoriesList: (categories:categoryInterface[], category: categoryInterface) => void,
    isLoading: boolean
}