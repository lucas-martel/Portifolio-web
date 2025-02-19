import { Box, Chip, Stack, useTheme } from "@mui/material";
import SelectHability from "./components/SelectHability/SelectHability";
import { useState } from "react";
import { motion } from "framer-motion";

function Habilidades() {
  const theme = useTheme();
  const [habs, setHabs] = useState<string[]>([]);

  const onChangeSelectHability = (titles: string[]) => {
    setHabs(titles);
  };

  return (
    <Box width={"100%"} minHeight={theme.spacing(40)}>
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(44, 62, 80, 0.3) 0%, rgba(98, 5, 75, 0.6) 40%)",
        }}
        width={"100%"}
        height="auto"
        paddingTop={theme.spacing(1)}
        display="flex"
        justifyContent="center"
        marginBottom={theme.spacing(4)}
      >
        <SelectHability onChangeSelectHability={onChangeSelectHability} />
      </Box>

      <Stack
        spacing={{ xs: 4, sm: 10 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {habs.map((h) => (
          <motion.div
            key={h}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            style={{ display: "inline-flex", flexBasis: "25%" }}
          >
            <Chip
              label={h}
              sx={{
                width:"100%",
                fontWeight: "600",
                background:
                  "linear-gradient(45deg, rgba(9, 10, 11, 1) 0%, rgba(18, 20, 22, 1) 40%)",
                // marginBottom: theme.spacing(10),
              }}
            />
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}

export default Habilidades;
