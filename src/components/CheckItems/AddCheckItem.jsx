import { TextField, Button } from "@mui/material";

const AddCheckItem = ({ handleInput }) => {
  return (
    <TextField
      label="Add Item"
      variant="outlined"
      style={{
        width: "20%",
        marginTop: "10px",
        marginBottom: "10px",
        border: "1px solid",
      }}
      onKeyDown={(event) => handleInput(event)}
    />
  );
};

export default AddCheckItem;
