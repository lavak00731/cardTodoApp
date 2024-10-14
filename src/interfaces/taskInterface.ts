
export interface taskInterface  {
    id: number
    name: string,
    initDate: Date,
    dueDate: Date,
    category: string,
    comment: string,
    tags: string[],
}