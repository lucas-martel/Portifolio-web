import { Box, Chip, useTheme } from "@mui/material";
import SelectHability from "./components/SelectHability/SelectHability";
import { useState } from "react";

function Habilidades() {
  const theme = useTheme();
  const [habs, setHabs] = useState<string[]>([]);

  const onChangeSelectHability = (titles: string[]) => {
    setHabs(titles);
  };

  return (
    <Box width={"100%"} height={theme.spacing(40)}>
      <Box
        sx={{ background: "linear-gradient(90deg, #000000 0%, #62054B 100%)" }}
        width={"100%"}
        height="auto"
        paddingTop={theme.spacing(1)}
        display="flex"
        justifyContent="center"
        marginBottom={theme.spacing(4)}
      >
        <SelectHability onChangeSelectHability={onChangeSelectHability} />
      </Box>

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent="space-around"
        marginBottom={theme.spacing(10)}
      >
        {habs.map((h) => (
          <Chip
            label={h}
            key={`habs${h}`}
            sx={{
              color: "black",
              fontWeight: "600",
              background: "linear-gradient(135deg, #b0b0b0, #ff99cc)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Habilidades;
