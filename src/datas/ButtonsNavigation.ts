import SobreMim from "../components/Section/Pages/SobreMim/SobreMim";
import Habilidades from "../components/Section/Pages/Habilidades/Habilidades";
import Objetivos from "../components/Section/Pages/Objetivos/Objetivos";
import Projetos from "../components/Section/Pages/Projetos/Projetos";
import Contato from "../components/Section/Pages/Contato/Contato";

export type ButtonNavigation = {
  title: string;
  tag: React.ElementType;
  id: string;
  hasMarginBotton: boolean;
};

export const ButtonNavigationData: ButtonNavigation[] = [
  { title: "Sobre Mim", tag: SobreMim, id: "sobre", hasMarginBotton: true },
  {
    title: "Habilidades",
    tag: Habilidades,
    id: "habilidades",
    hasMarginBotton: true,
  },
  {
    title: "Objetivos",
    tag: Objetivos,
    id: "objetivos",
    hasMarginBotton: true,
  },
  { title: "Projetos", tag: Projetos, id: "projetos", hasMarginBotton: true },
  { title: "Contato", tag: Contato, id: "contato", hasMarginBotton: false },
];
