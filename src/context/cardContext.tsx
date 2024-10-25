import { createContext } from "react";
import { cardContextInterface } from "../interfaces/cardContextInterface";

// { tasks, isLoading }

export const cardContext = createContext<cardContextInterface | undefined>(undefined);