import { useState } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { AdminListContainer } from "../../styles/admin";
import FilterSearchBar from "../../util/common/model/FilterSearchBar";
import AdminAddDialog from "./AdminAddDialog";

export default function AdminDisplayContainer({ selectedSideBarTab }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AdminListContainer>
      <Stack spacing={2}>
        <Typography variant="h6">
          {"System Configuration || " + selectedSideBarTab}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <FilterSearchBar myLabel="Filter Admin" />
          <Button
            startIcon={<BiPlusCircle />}
            variant="contained"
            onClick={handleClickOpen}
          >
            ADD
          </Button>
        </Stack>
        {/* Create a component with a grid to represent a table */}
        {/* Make it a util component and pass in props to make it dynamic */}
        <Box></Box>
      </Stack>
      {open && (
        <AdminAddDialog
          dialogTitle=""
          dialogContent=""
          openOrClose={open}
          handleClose={handleClose}
        />
      )}
    </AdminListContainer>
  );
}
