import { useRef } from "react";
import "./App.css";
import FloatMenu from "./components/FloatMenu/FloatMenu";
import Section from "./components/Section/Section";
import { ButtonNavigationData } from "./datas/ButtonsNavigation";
import Teste from "./components/Section/Pages/Teste";
import { Box, useTheme } from "@mui/material";
import SobreMim from "./components/Section/Pages/SobreMim/SobreMim";
import Habilidades from "./components/Section/Pages/Habilidades/Habilidades";

function App() {
  const theme = useTheme();

  const sectionsRefs = {
    sobre: useRef<HTMLDivElement>(null),
    habilidades: useRef<HTMLDivElement>(null),
    objetivos: useRef<HTMLDivElement>(null),
    projetos: useRef<HTMLDivElement>(null),
    contato: useRef<HTMLDivElement>(null),
  };

  const onClickOption = (sectionName: keyof typeof sectionsRefs) => {
    const sectionRef = sectionsRefs[sectionName];
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FloatMenu
        title="Eng. Civil"
        subTitle="Flavia Colares"
        onClickOption={onClickOption}
        buttons={ButtonNavigationData}
      />
      <Box height={theme.spacing(12)}></Box>
      <Section title="Sobre Mim" ref={sectionsRefs.sobre} marginBottom={theme.spacing(25)}>
        <SobreMim />
      </Section>
      <Section title="Habilidades" ref={sectionsRefs.habilidades} marginBottom={theme.spacing(25)}>
        <Habilidades />
      </Section>
      <Section title="Objetivos" ref={sectionsRefs.objetivos} marginBottom={theme.spacing(25)}>
        <Teste />
      </Section>
      <Section title="Projetos" ref={sectionsRefs.projetos} marginBottom={theme.spacing(25)}>
        <Teste />
      </Section>
      <Section title="Contato" ref={sectionsRefs.contato}>
        <Teste />
      </Section>
    </>
  );
}

export default App;
