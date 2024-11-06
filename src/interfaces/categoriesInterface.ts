import { categoryInterface } from "./categoryInterface";
export interface categoriesInterface {
    categoriesList: categoryInterface[] | undefined,
    setCategoriesList: (categories:categoryInterface[], category: categoryInterface) => void,
    isLoading: boolean
}