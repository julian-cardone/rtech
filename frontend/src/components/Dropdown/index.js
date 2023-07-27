import { useCallback, useState } from "react";
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
    // <div className="dropdown-container">
      <CustomAutocomplete
        value={selectedValue}
        onChange={onChange}
        options={items}
        getOptionLabel={(item) => parseItem(item).label}
        loading={isLoading}
        loadingText={loadingLabel}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: { width: 250, height: 42 },
            }}
          />
        )}
      />
    // </div>
  );
}

export default Dropdown;
