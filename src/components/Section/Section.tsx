import React, { forwardRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
  marginBottom?: string;
}

// Usar React.forwardRef para permitir que o componente aceite `ref`
const Section = forwardRef<HTMLDivElement, Props>(
  ({ title, children, marginBottom }, ref) => {
    const theme = useTheme();
    return (
      <Box
        ref={ref}
        sx={{ scrollMarginTop: theme.spacing(10) }}
        marginBottom={marginBottom ?? 0}
      >
        <Typography variant="h4" sx={{ justifySelf: "center" }}>
          {title}
        </Typography>
        {children}
      </Box>
    );
  }
);

export default Section;
