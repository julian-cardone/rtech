import { useCallback, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { CustomAutocomplete } from "./autoCompleteStyling";

/*
this is the dropdown component for the list of schools. 
it contains an autocomplete component from material ui
values seelcted will change trigger fetches for the corresponding endpoint

Description of the props:
defaultValue is the NO_SCHOOL object which represents the 'all schools' endpoint
onChange is the function passed in to swtich endpoints
items is the array of the books currently memoized 
parseItem is the method to extract informatino from each book
isLoading is the loading state for the schools in the dropdown (ie: cannot select school when they are being fetched) 

A word about the menu open/close functionality:
a reference to the menu textfield is created
when a click event occurs, checks to see if the click is outside of the referenced area
if so, it closes the menu
*/

function Dropdown({
  defaultValue,
  onChange: userOnChange,
  items,
  parseItem,
  isLoading,
  loadingLabel,
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? null);

  const [open, setOpen] = useState(false);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        //good practice when working with refs or any potential nullable objects: a safety check
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target) &&
        !event.target.classList.contains("MuiAutocomplete-option")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const onChange = useCallback(
    (event, selectedItem) => {
      if (selectedItem === null) {
        return;
      }

      userOnChange(selectedItem);
      setSelectedValue(selectedItem);
    },
    [userOnChange]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "110px",
        zIndex: "50",
        backgroundImage: "inherit",
        position: "fixed",
        display: "flex",
      }}
    >
      <CustomAutocomplete
        value={selectedValue}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={onChange}
        options={items}
        getOptionLabel={(item) => parseItem(item).label}
        loading={isLoading}
        loadingText={loadingLabel}
        style={{ display: "flex", alignItems: "center" }}
        renderInput={(params) => (
          <TextField
            ref={autocompleteRef}
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: { width: 250, height: 42 },
            }}
          />
        )}
      />
    </div>
  );
}

export default Dropdown;
