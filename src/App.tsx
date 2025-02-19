import { motion } from "framer-motion";
import FloatMenu from "./components/FloatMenu/FloatMenu";
import Section from "./components/Section/Section";
import { ButtonNavigationData } from "./datas/ButtonsNavigation";
import { Box, useMediaQuery, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  const isLessThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box width={isLessThanLg ? "100vw" : "50vw"} ml={"auto"} mr={"auto"}>
      <FloatMenu
        title="LC"
        subTitle="Lucas Martel"
        buttons={ButtonNavigationData}
      />
      {ButtonNavigationData.map((data) => (
        <motion.div
          key={`sect21${data.id}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Section
            id={data.id}
            title={data.title}
            ref={null}
            marginBottom={theme.spacing(data.hasMarginBotton ? 10 : 0)}
          >
            {<data.tag />}
          </Section>
        </motion.div>
      ))}
    </Box>
  );
}

export default App;
