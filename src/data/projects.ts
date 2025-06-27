interface JobCard {
    id: number,
    name: string;
    description: string;
    gitLink?: string;
    externalLink: string;
    toolsUsed: string[];
}

export const projects: JobCard[] = [
    {
        id: 0,
        name: "Connect Four",
        description: "An online version of the popular Connect Four game with PVP and PVC modes. The PVC features a briliant AI opponent",
        gitLink: "https://github.com/Tarvs01/Connect_Four",
        externalLink: "https://connect-four-jm2y.onrender.com",
        toolsUsed: ["React", "CSS", "Framer Motion"]
    },
    {
        id: 1,
        name: "GetReponse Clone",
        description: "A clone of the official GetResponse website homepage. Built with vanilla across the board ",
        toolsUsed: ["HTML","CSS", "Javascript"],
        gitLink: "https://github.com/Tarvs01/Getresponse-Clone",
        externalLink: "https://get-response-clone.onrender.com"
    },
    {
        id: 2,
        name: "Save Them All",
        description: "This website is aimed at drawing attention to the plights of endangered animals and efforts being put by both government and non government organizations to ensure their conservation.",
        toolsUsed: ["React", "jQuery", "Javascript", "CSS", "Node"],
        gitLink: "https://github.com/Tarvs01/Save-Them-All",
        externalLink: "https://save-them-all.onrender.com/"
    },
    {
        id: 3,
        name: "Blizzard Clone",
        description: "A clone of the official Blizzard website homepage. Built with React",
        gitLink: "https://github.com/Tarvs01/Blizzard-Clone",
        externalLink: "https://blizzard-clone.onrender.com",
        toolsUsed: ["React", "CSS", "Framer Motion"]
    },
    {
        id: 4,
        name: "GameHub",
        description: "Game hub is a gamer centered website where gamers can get gaming news and get access to new and old games through stores.",
        gitLink: "https://github.com/Tarvs01/Game-Hub",
        externalLink: "https://gamehub-xlyq.onrender.com/",
        toolsUsed: ["React", "CSS", "Javascript"]
    },
    {
        id: 5,
        name: "Rock Paper Scissors",
        description: "The first iteration of RPS. This features the classic rock paper scissors game played against the computer.",
        gitLink: "https://github.com/Tarvs01/rock-paper-scissors",
        externalLink: "https://rock-paper-scissors-fm.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 6,
        name: "Rock Paper Scissors Lizzard Spock",
        description: "The second iteration of RPS. This improves on the basic rock paper scissors game by adding two more elements",
        gitLink: "https://github.com/Tarvs01/RPSLS",
        externalLink: "https://rpsls-ijlf.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 7,
        name: "Calculator",
        description: "A web based calculator for performing basic arithmetic operations. It comes with themes.",
        gitLink: "https://github.com/Tarvs01/Frontend-Mentor-Calculator",
        externalLink: "https://calculator-b4n6.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 8,
        name: "Evasive Submit",
        description: "A form with a submit button that evades the user until all input fields are correctly filled.",
        gitLink: "https://github.com/Tarvs01/Evasive-Submit",
        externalLink: "https://evasive-submit.onrender.com",
        toolsUsed: ["React", "CSS", "SCSS"]
    }
]