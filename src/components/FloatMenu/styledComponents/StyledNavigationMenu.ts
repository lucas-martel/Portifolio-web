import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledNavigationMenu = styled(Box)({
  position: "sticky",
  zIndex: 10,
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  background:
    "linear-gradient(0deg, rgba(44, 62, 80, 0.99) 0%, rgba(98, 5, 75, 0.99) 100%)",
  width: "100%",
  borderBottomLeftRadius: "2em",
  borderBottom: "1px solid rgba(98, 5, 75, 1)",
  paddingLeft: "2em",
  marginBottom: "2em"
});

export default StyledNavigationMenu;
