import {taskInterface } from "./taskInterface";

export interface cardContextInterface {
    tasks: taskInterface[],
    isLoading: boolean
}