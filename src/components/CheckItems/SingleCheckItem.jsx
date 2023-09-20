import { useState } from "react";
import { Card, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Button } from "@mui/material";

import checkItemApi from "../../services/checkItemApi";

const SingleCheckItem = ({
  name,
  deleteACheckItem,
  id,
  checklistId,
  cardId,
  state,
}) => {
  const [isChecked, setChecked] = useState(state === "complete");

  const handleCheckBox = () => {
    let checkState = !isChecked ? "complete" : "incomplete";
    checkItemApi
      .updateCheckItem(cardId, id, checkState)
      .then(() => {
        setChecked(!isChecked);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="checklist">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isChecked} onClick={handleCheckBox} />}
          label={name}
        />
      </FormGroup>

      <Button
        fontSize="small"
        style={{ color: "red" }}
        onClick={() => deleteACheckItem(id, checklistId)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default SingleCheckItem;
