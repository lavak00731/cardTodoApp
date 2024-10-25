import { createContext } from "react";
import { categoryInterface } from "../interfaces/categoryInterface";

//interface lo que pongo en value del provider
export const categoryContext = createContext<categoryInterface[]>([]);