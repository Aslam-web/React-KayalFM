import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function FilterSearchBar({myLabel}) {
  return (
    <>
      <TextField
        sx={{ maxWidth: "200px", height:"20px" }}
        size="small"
        label={myLabel}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <BiSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
