import { Box, Typography, useTheme } from "@mui/material";
import Avatar from "../../../../assets/avatar3dflavia.png";
import { SobreMimData } from "../../../../datas/SobreMim";

function SobreMim() {
  const theme = useTheme();

  return (
    <Box min-height={theme.spacing(60)} marginX={theme.spacing(3)}>
      <Box
        component="img"
        src={Avatar}
        alt="Flavia feliz"
        width={theme.spacing(30)}
        height="auto"
        sx={{ float: "left" }}
      />
      <Typography
        sx={{ whiteSpace: "pre-line" }}
        color="black"
      >
        {SobreMimData.text}
      </Typography>
    </Box>
  );
}

export default SobreMim;
