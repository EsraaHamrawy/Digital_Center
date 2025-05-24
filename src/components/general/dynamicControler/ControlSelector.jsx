/* eslint-disable react/prop-types */
import { FormControl, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

const ControlSelector = ({
  name,
  control,
  defaultValue,
  options,

  extendOnChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth>
          <Select
            {...field}
            onChange={(e) => {
              field.onChange(e);
              if (extendOnChange) {
                extendOnChange(e);
              }
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default ControlSelector;
