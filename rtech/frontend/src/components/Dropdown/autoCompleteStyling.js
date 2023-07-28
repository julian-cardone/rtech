import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";

// this is all the stylingn for the custom autocomplete dropdown menu

export const CustomAutocomplete = styled(Autocomplete)({
  "& .MuiOutlinedInput-root": {
    position: "relative",
    "& fieldset": {
      borderColor: "transparent", // Remove the default outline
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Remove the outline on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Remove the outline when focused
    },
    "&::after": {
      content: "''",
      position: "absolute",
      right: 40,
      top: "50%",
      height: "65%",
      width: 1,
      backgroundColor: "#1976d2", // Blue vertical line color
      transform: "translateY(-50%)",
    },
  },
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(25, 118, 210, 0.05)", // Blue tint background
    borderBottom: "2px solid #1976d2", // Blue underline at the bottom
    paddingBottom: 2, // Space between the underline and the menu
    borderBottomLeftRadius: 0, // Bottom left corner with 0px radius
    borderBottomRightRadius: 0, // Bottom right corner with 0px radius
  },
  "& .MuiAutocomplete-clearIndicator": {
    display: "none", // Hide the clear icon
  },
  "&& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#808080",
    fontSize: "16px",
    fontFamily: "Rubik, sans-serif",
    position: "relative",
    bottom: "6px",
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "blue", // Replace with your desired arrow color
    cursor: "pointer", // Set the cursor to a pointer on hover
  },
  "&& .css-wb57ya-MuiFormControl-root-MuiTextField-root": {
    width: "266px",
  },
});
