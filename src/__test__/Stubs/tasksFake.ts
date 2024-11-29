import { taskInterface } from "../../interfaces/taskInterface";
const tasksFake: taskInterface[] = [
    {
        "id": 1,
        "name": "Prepare drawing",
        "initDate": "10/14/2024",
        "dueDate": "11/25/2024",
        "category": "Development",
        "comment": "Some odd task",
        "tags": ["sample1"]
    },
    {
        "id": 2,
        "name": "Prepare picture",
        "initDate": "10/12/2024",
        "dueDate": "12/25/2024",
        "category": "Design",
        "comment": "Designing something",
        "tags": ["sample2"]
    },
    {
        "id": 3,
        "name": "Prepare Book",
        "initDate": "10/11/2024",
        "dueDate": "12/25/2024",
        "category": "Ready for Development",
        "comment": "Ready to start development",
        "tags": ["sample3", "sample1"]
    }
]

export default tasksFake;