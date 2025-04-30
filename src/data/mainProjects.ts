import { MainProjectData } from "../types/types"

export const mainProjects: MainProjectData[] = [
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
        title: "Save Them All",
        description: "This website is aimed at drawing attention to the plights of endangered animals and efforts being put by both government and non government organizations to ensure their conservation.",
        img: "save-them-all.png",
        tools: ["React", "jQuery", "Javascript", "CSS", "Node"],
        gitLink: "https://github.com/Tarvs01/Save-Them-All",
        externalLink: "https://save-them-all.onrender.com/"
    },
    {
        id: 3,
        title: "GetReponse Clone",
        description: "This project is a clone of the official getResponse Homepage. This was my first ever major project and it contained many styling and responsiveness challenges that made the project worthwhile. The official website updates frequently and I try to implement changes whenever I notice them. ",
        img: "get-response.png",
        tools: ["HTML","CSS", "Javascript"],
        gitLink: "https://github.com/Tarvs01/Getresponse-Clone",
        externalLink: "https://get-response-clone.onrender.com"
    }
]