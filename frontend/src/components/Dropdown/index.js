import "./index.css";
import { useCallback, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Dropdown({
  label,
  defaultValue,
  onChange: userOnChange,
  items,
  parseItem,
  isLoading,
  loadingLabel,
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? null);

  const onChange = useCallback(
    (selectedItem) => {
      if (selectedItem === null) {
        return;
      }

      userOnChange(selectedItem);
      setSelectedValue(selectedItem);
    },
    [userOnChange]
  );

  console.log(selectedValue);

  return (
    <div className="dropdown-container">
      <Autocomplete
        value={selectedValue}
        onChange={onChange}
        options={items.map((item) => parseItem(item).label)}
        loading={isLoading}
        loadingText={loadingLabel}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: { width: 200 },
            }}
          />
        )}
      />
    </div>
  );
}

export default Dropdown;
