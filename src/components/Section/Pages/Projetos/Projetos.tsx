import { Box, Typography, useTheme } from "@mui/material";
import GradientCircularProgress from "../../../Progress/GradientCircularProgress";
import {
  projetosData,
  projetosEmDesenvolvimento,
} from "../../../../datas/ProjetosData";
import GoalAccordion from "../Objetivos/components/GoalAccordion";

function Projetos() {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      height={"auto"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      {projetosData.map((data) => (
        <GoalAccordion
          summary={data.summary}
          details={data.details}
          key={data.summary}
        />
      ))}

      <GradientCircularProgress size={theme.spacing(7)} />
      <Typography variant="body2">
        Outros Projetos em desenvolvimento...
      </Typography>
      {projetosEmDesenvolvimento.map((data) => (
        <GoalAccordion
          summary={data.summary}
          details={data.details}
          key={data.summary}
        />
      ))}
    </Box>
  );
}

export default Projetos;
