import { Box, Button, Stack, Typography } from "@mui/material";
import { ButtonNavigation } from "../../datas/ButtonsNavigation";
import StyledNavigationMenu from "./styledComponents/StyledNavigationMenu";

type SectionName = "sobre" | "habilidades" | "objetivos" | "projetos" | "contato"; // Tipando as seções

interface Prop {
  title: string;
  subTitle: string;
  buttons: ButtonNavigation;
  onClickOption: (sectionName: SectionName) => void;
}

function FloatMenu({ title, subTitle, buttons, onClickOption }: Prop) {
  return (
    <StyledNavigationMenu>
      <Box>
        <Typography
          fontSize={"1em"}
          color="textPrimary"
          fontFamily={"Kalam, cursive"}
        >
          {title}
        </Typography>
        <Typography
          fontSize={"0.7em"}
          color="textPrimary"
          fontFamily={"Kalam, cursive"}
          marginLeft={"1em"}
        >
          {subTitle}
        </Typography>
      </Box>
      <Stack direction={"row"} alignSelf={"flex-end"}>
        {buttons.titles.map((title, index) => (
          <Button key={index} variant="text" onClick={()=> onClickOption(title as SectionName)}>
            {title}
          </Button>
        ))}
      </Stack>
    </StyledNavigationMenu>
  );
}

export default FloatMenu;
