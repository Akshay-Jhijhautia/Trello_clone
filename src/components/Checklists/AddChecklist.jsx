import { TextField, Button } from "@mui/material";

const AddChecklist = ({ handleInput }) => {
  return (
    <TextField
      label="Create a new Checklist"
      variant="outlined"
      fullWidth
      onKeyDown={(event) => handleInput(event)}
    />
  );
};

export default AddChecklist;
