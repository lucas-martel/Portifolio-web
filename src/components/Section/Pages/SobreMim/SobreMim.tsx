import { Box, Typography, useTheme } from "@mui/material";
import Avatar from "../../../../assets/eu.png";
import { SobreMimData } from "../../../../datas/SobreMim";

function SobreMim() {
  const theme = useTheme();

  return (
    <Box min-height={theme.spacing(60)} marginX={theme.spacing(3)}>
      <Box
        component="img"
        src={Avatar}
        alt="Imagem de lucas"
        width={theme.spacing(30)}
        height="auto"
        sx={{ float: "left" }}
      />
      <Typography sx={{ whiteSpace: "pre-line" }} >
        {SobreMimData.text}
      </Typography>
    </Box>
  );
}

export default SobreMim;
