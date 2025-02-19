import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";

interface Props {
  icon: SvgIconComponent;
  title: string;
  url?: string;
}

function ContactEgg(prop: Props) {
  const theme = useTheme();

  return (
    <Box display={"flex"} flexWrap={"wrap"} alignItems={"baseline"} gap={theme.spacing(2)}>
      {<prop.icon sx={{ color: "#f5f5f5" }} />}
      <a href={prop.url ?? ""} target="_blank" rel="noopener noreferrer">
        <Typography>{prop.title}</Typography>
      </a>
    </Box>
  );
}

export default ContactEgg;
