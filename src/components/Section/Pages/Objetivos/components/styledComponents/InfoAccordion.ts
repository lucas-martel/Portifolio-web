import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export const InfoAccordion = styled(Accordion)({
  background:
    "linear-gradient(0deg, rgba(44, 62, 80, 0.2) 0%, rgba(98, 5, 75, 0.2) 40%)",
});

export const InfoAccordionSummary = styled(AccordionSummary)({
  color: "white",
});

export const InfoAccordionDetails = styled(AccordionDetails)({
  color: "white",
});
