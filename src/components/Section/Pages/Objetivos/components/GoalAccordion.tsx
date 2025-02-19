import { useTheme } from "@mui/system";
import {
  InfoAccordion,
  InfoAccordionDetails,
  InfoAccordionSummary,
} from "./styledComponents/InfoAccordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { motion } from "framer-motion";
import { ObjetivoInfo } from "../../../../../datas/Objetivos";

// interface Prop {
//   summary: string;
//   details: string;
// }

function GoalAccordion(prop: ObjetivoInfo) {
  const theme = useTheme();
  const [isExpanded, setExpanded] = useState(false);

  const onHoverStart = () => {
    setExpanded(true);
  };

  const onHoverEnd = () => {
    setExpanded(false);
  };

  const onClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <motion.div onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
      <InfoAccordion
        sx={{ mb: theme.spacing(2) }}
        expanded={isExpanded}
        onClick={onClick}
      >
        <InfoAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ color: "black" }}
        >
          {prop.summary}
        </InfoAccordionSummary>
        <InfoAccordionDetails sx={{ color: "black" }}>
          {prop.details}
        </InfoAccordionDetails>
      </InfoAccordion>
    </motion.div>
  );
}

export default GoalAccordion;
