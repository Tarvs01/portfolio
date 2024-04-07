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
        id: 1,
        name: "Connect Four",
        description: "An online version of the popular Connect Four game with PVP and PVC modes. The PVC features a briliant AI opponent",
        gitLink: "https://github.com/Tarvs01/Connect_Four",
        externalLink: "https://connect-four-jm2y.onrender.com",
        toolsUsed: ["React", "CSS", "Framer Motion"]
    },
    {
        id: 2,
        name: "Blizzard Clone",
        description: "A clone of the official Blizzard website homepage. Built with React",
        gitLink: "https://github.com/Tarvs01/Blizzard-Clone",
        externalLink: "https://blizzard-clone.onrender.com",
        toolsUsed: ["React", "CSS", "Framer Motion"]
    },
    {
        id: 3,
        name: "Rock Paper Scissors",
        description: "The first iteration of RPS. This features the classic rock paper scissors game played against the computer.",
        gitLink: "https://github.com/Tarvs01/rock-paper-scissors",
        externalLink: "https://rock-paper-scissors-fm.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 4,
        name: "Rock Paper Scissors Lizzard Spock",
        description: "The second iteration of RPS. This improves on the basic rock paper scissors game by adding two more elements",
        gitLink: "https://github.com/Tarvs01/RPSLS",
        externalLink: "https://rpsls-ijlf.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 5,
        name: "Calculator",
        description: "A web based calculator for performing basic arithmetic operations. It comes with themes.",
        gitLink: "https://github.com/Tarvs01/Frontend-Mentor-Calculator",
        externalLink: "https://calculator-b4n6.onrender.com",
        toolsUsed: ["HTML", "CSS", "Javascript", "SCSS"]
    },
    {
        id: 6,
        name: "Evasive Submit",
        description: "A form with a submit button that evades the user until all input fields are correctly filled.",
        gitLink: "https://github.com/Tarvs01/Evasive-Submit",
        externalLink: "https://evasive-submit.onrender.com",
        toolsUsed: ["React", "CSS", "SCSS"]
    }
]