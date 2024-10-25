import { createContext } from "react";
import { tagInterface } from "../interfaces/tagInterface";

export const tagsContext = createContext<tagInterface[]>([]);