import { createContext } from "react";
import { categoriesInterface } from "../interfaces/categoriesInterface";

//interface lo que pongo en value del provider
export const categoryContext = createContext<categoriesInterface | undefined>(undefined);