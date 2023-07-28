import styled from "@emotion/styled";
import { AppBar, Toolbar, Button } from "@mui/material";

// these custom components are used in the Navigation component
// the custom button is also used for the 'view more' button

export const CustomAppBar = styled(AppBar)({
  position: "fixed",
  color: "default",
  height: "58px",
  zIndex: 40,
  boxShadow: "none",
  backgroundColor: "#f5f5f5",
});

export const CustomToolbar = styled(Toolbar)({
  color: "#696969",
  minHeight: "58px !important",
  height: "58px !important",
  padding: "0px 16px !important",
});

export const CustomButton = styled(Button)({
  fontSize: "15px",
  fontFamily: "'Roboto', sans-serif",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  textDecoration: "none !important",
  textShadow: "0.3px 0.3px 0px rgba(105, 105, 105, 0.8)",
  fontStretch: "semi-condensed",
  padding: "0 0",
  marginLeft: "7px",
});
