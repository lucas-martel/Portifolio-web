import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledNavigationMenu = styled(Box)({
  position: "fixed",
  zIndex: 10,
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(0deg, #000000 0%, #62054B 100%)",
  width: "100%",
  borderBottomRightRadius: "20px",
});

export default StyledNavigationMenu;
