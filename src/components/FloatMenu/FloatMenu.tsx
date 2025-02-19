import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { ButtonNavigation } from "../../datas/ButtonsNavigation";
import StyledNavigationMenu from "./styledComponents/StyledNavigationMenu";
import { Link } from "react-scroll";

interface Prop {
  title: string;
  subTitle: string;
  buttons: ButtonNavigation[];
}

function FloatMenu({ title, subTitle, buttons }: Prop) {
  const theme = useTheme();

  return (
    <StyledNavigationMenu>
      <Box>
        <Typography
          fontSize={theme.spacing(2)}
          color="textPrimary"
          fontWeight={900}
          fontFamily="Poppins, sans-serif"
        >
          {title}
        </Typography>
        <Typography
          fontSize={theme.spacing(1)}
          fontFamily="Poppins, sans-serif"
          color="textPrimary"
          marginLeft={"1em"}
          fontWeight={700}
        >
          {subTitle}
        </Typography>
      </Box>
      <Stack direction={"row"} alignSelf={"flex-end"}>
        {buttons.map((data, index) => (
          <Button key={index} variant="text">
            <Link
              style={{ width: "100%", height: "100%" }}
              to={data.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              {data.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </StyledNavigationMenu>
  );
}

export default FloatMenu;
