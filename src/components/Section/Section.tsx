import React, { forwardRef } from "react";
import { Box, Divider, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
  marginBottom?: string;
}

// Usar React.forwardRef para permitir que o componente aceite `ref`
const Section = forwardRef<HTMLDivElement, Props>(
  ({ id, title, children, marginBottom }, ref) => {
    const theme = useTheme();
    return (
      <Box
        id={id}
        ref={ref}
        sx={{ scrollMarginTop: theme.spacing(9) }}
        marginBottom={marginBottom ?? 0}
      >
        <motion.h1
          style={{
            justifySelf: "center",
            fontWeight: 500,
            color: theme.palette.text.primary,
          }}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "keyframes", delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <Divider
          component={"div"}
          orientation="horizontal"
          role="presentation"
          sx={{
            width: "40%",
            borderWidth: 1,
            borderColor: "rgba(98, 5, 75, 0.6)",
            justifySelf: "center",
            marginBottom: theme.spacing(5)
          }}
        />
        {children}
      </Box>
    );
  }
);

export default Section;
