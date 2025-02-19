export type HabilityInfo = {
  habType: string;
  titles: string[];
};

export type Hability = {
  infos: HabilityInfo[];
};

export const HabilityData: Hability = {
  infos: [
    {
      habType: "Técnicas em frontend",
      titles: ["nextjs", "react", "mockapi", "javascript", "axios"],
    },
    {
      habType: "Técnicas em backend",
      titles: [
        "nodejs",
        "prisma",
        "mongodb",
        "mysql",
        "express",
        "wasp Top 10",
        "postman",
      ],
    },
    {
      habType: "Ferramentas",
      titles: ["vscode", "docker", "docker-compose", "ngrok", "git", "github"],
    },
    {
      habType: "soft skills",
      titles: [
        "boa comunicação",
        "gosto de trabalho em equipe",
        "empatia",
        "ótimo ouvinte",
      ],
    },
    {
      habType: "Idiomas",
      titles: ["portugues(nativo)", "Ingles(intermediário), espanho(básico)"],
    },
  ],
};
