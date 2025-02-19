import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ByeFromFlavia from "../../../../assets/eu.png";
import { ContatosData } from "../../../../datas/Contato";
import ContactEgg from "./components/ContactEgg/ContactEgg";
import { motion, MotionStyle } from "framer-motion";

function Contato() {
  const theme = useTheme();
  const isLess = useMediaQuery(theme.breakpoints.down("sm"));
  const isDownXs = useMediaQuery(theme.breakpoints.down("xs"));

  const dynamicStyle: MotionStyle = {
    position: "absolute",
    ...(isLess ? { top: 0 } : { bottom: 0 }),
    left: 0,
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-end"}
      width={"100%"}
      // height={theme.spacing(50)}
      position={"relative"}
      pr={theme.spacing(4)}
      pt={theme.spacing(4)}
    >
      <motion.img
        style={dynamicStyle}
        src={ByeFromFlavia}
        alt="Flavia feliz"
        width={theme.spacing(isDownXs ? 20 : 30)}
        height="auto"
        initial={{ left: theme.spacing(isLess ? -10 : -20) }}
        whileInView={{ left: theme.spacing(0) }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      />

      <Box width={"50%"} mb={theme.spacing(5)}>
        <Typography whiteSpace={"pre-line"} textAlign={"center"}>
          {`Oi, você chegou no fim da página, para entrar em contato comigo,
          utilize os contatos abaixo.\n
          Obrigada!`}
        </Typography>
      </Box>
      <Box
        height={"60%"}
        display={"flex"}
        maxWidth={theme.spacing(50)}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {ContatosData.map((data) => (
          <ContactEgg
            key={data.title}
            title={data.title}
            icon={data.icon}
            url={data.url ?? ""}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Contato;
