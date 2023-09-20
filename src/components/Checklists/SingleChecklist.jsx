import React from "react";
import { Button } from "@mui/material";

import Checkitem from "../CheckItems/Checkitem";

const SingleChecklist = ({ name, deleteAChecklist, id, cardId }) => {
  return (
    <div className="checkitem">
      <div className="checklist">
        <h2>{name}</h2>
        <Button onClick={() => deleteAChecklist(id)}>Delete</Button>
      </div>
      <Checkitem checklistId={id} cardId={cardId} />
    </div>
  );
};

export default SingleChecklist;
