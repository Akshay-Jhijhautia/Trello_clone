import { useState } from "react";
import { styled } from "@mui/system";
import { Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Checklist from "../Checklists/Checklist";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "95%",
  margin: "5px",
  borderRadius: "10px",
  backgroundColor: "grey",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "100%",
  color: "white",
}));

const SingleCard = ({ name, deleteACardFromTheList, id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCard>
      <CardContentWrapper>
        <div onClick={() => handleOpen()}>{name}</div>
        <DeleteIcon
          sx={{ cursor: "pointer" }}
          onClick={() => deleteACardFromTheList(id)}
        />
      </CardContentWrapper>
      <Checklist cardId={id} modal={open} handleClose={handleClose} />
    </StyledCard>
  );
};

export default SingleCard;
