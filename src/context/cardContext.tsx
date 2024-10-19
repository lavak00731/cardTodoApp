import { createContext } from "react";
import { taskInterface } from "../interfaces/taskInterface";

export const cardContext = createContext<taskInterface[]>([]);