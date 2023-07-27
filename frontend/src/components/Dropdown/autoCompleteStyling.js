import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";

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
  "& label": {
    // Add your label text styles here
    color: "#808080",
  },
});