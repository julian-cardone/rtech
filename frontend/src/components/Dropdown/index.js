import { useCallback, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { CustomAutocomplete } from "./autoCompleteStyling";

function Dropdown({
  defaultValue,
  onChange: userOnChange,
  items,
  parseItem,
  isLoading,
  loadingLabel,
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? null);
  console.log(selectedValue);

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
  );
}

export default Dropdown;
