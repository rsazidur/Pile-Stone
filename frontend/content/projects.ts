export type Project = {
    slug: string;
    title: string;
    place: string;
    dia: string;
    quantity: number;
    date: string;
};

export const projects: Project[] = [
    {
        slug: "sample-project-1",
        title: "Sample Project 1",
        place: "Dhaka",
        dia: "500mm",
        quantity: 120,
        date: "2024-06",
    },
];
