import { MainProjectData } from "../types/types"

export const mainProjects: MainProjectData[] = [
    {
        id: 0,
        title: "Drinks.ng",
        description: "Drinks.ng is a site connecting drinks sellers to buyers. It gives buyers the chance to order from a close seller and to compare prices betwen sellers. I worked with the team as a frontend developer.",
        img: "drinks_ng.png",
        tools: ["Nuxt", "TailwindCSS", "TypeScript"],
        gitLink: "",
        externalLink: "https://drinks.ng/",
    },
    {
        id: 1,
        title: "Sparkle Dashboard",
        description: "This project features a frontend dashboard for a fictional company Sparkle. It contains essential features and can be adapted to suit the needs of a seperate company.",
        img: "sparkle-dashboard.png",
        tools: ["React", "CSS", "TypeScript"],
        gitLink: "https://github.com/Tarvs01/dashboard",
        externalLink: "https://sparkle-dashboard.netlify.app/"
    },
    {
        id: 2,
        title: "Equally AI",
        description: "Equally AI aims to make websites more accessible by ensuring compliance with all web accessibility guidelines. I worked with the team as a frontend developer",
        img: "equally_ai.png",
        tools: ["React", "TailwindCSS", "TypeScript"],
        gitLink: "",
        externalLink: "https://equally.ai/",
    },
]