import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const SmallButton = styled(Button)({
  padding: "4px",
  minWidth: "auto",
  height: "24px",
  marginBottom: "3px",
  marginLeft: "3px",
});

const AddCard = ({ handleInput }) => {
  return (
    <>
      <TextField
        label="+ Create a new card"
        variant="outlined"
        fullWidth
        onKeyDown={(event) => handleInput(event)}
      />
    </>
  );
};

export default AddCard;
