import { ReactNode } from "react";

export type ObjetivoInfo = {
  summary: string;
  details: ReactNode;
};

export const ObjetivosData: ObjetivoInfo[] = [
  {
    summary: "Formação em Engenharia de software",
    details:
      "Finalizando no ano de 2025 ou 2026 a faculdade em engenharia de software pela universidade federal do amazonas(UFAM).",
  },
  {
    summary: "Trabalhar na área de desenvolvimento web",
    details:
      "Buscando oportunidade para usar minhas habilidades técnicas e sociais em uma empresa na área de desenvolvimento. Aprender mais sobre trabalho em equipe, resolver problemas comuns ou desafiadores que a área proporcione.",
  },
  {
    summary: "Finalizar Jogos em unity",
    details:
      "Finalizar a criação do meu projeto para deploy em uma plataforma de jogos online. Jogo feito em unity usando c# como linguagem.",
  },
  {
    summary: "Me tornar um jogador melhor de fortnite",
    details:
      "Ganhei uma vez no fortnite, porém quero aperfeiçoar minhas habilidades técnicas no jogo",
  },
];
