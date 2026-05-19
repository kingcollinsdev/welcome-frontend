import type { Item } from "../types/item";

export const mockItems: Item[] = [
    {
        id: 1,
        name: "Welcome Cards",
        category: "Cards",
        quantity: 40,
        minimumRequired: 150,
        location: "Ushering Cabinet",
    }, 
    {
        id: 2,
        name: "Communion Cups",
        category: "Communion",
        quantity: 500,
        minimumRequired: 300,
        location: "Ushering Cabinet",
    },
    {
        id: 3,
        name: "Pens",
        category: "Stationery",
        quantity: 15,
        minimumRequired: 30,
        location: "Ushering Cabinet",
    },
    {
        id: 4,
        name: "Usher Badges",
        category: "Ushering",
        quantity: 0,
        minimumRequired: 20,
        location: "Team Leader Bag",
    },
]