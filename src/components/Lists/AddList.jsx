import { styled } from "@mui/system";
import { Card, CardContent, TextField } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  width: "15%",
  height: "100px",
  margin: "20px",
  float: "left",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const AddList = ({ handleInput, listInput, inputValue }) => {
  return (
    <StyledCard onClick={listInput}>
      <CardContentWrapper>
        {!inputValue && <div>Add a new list</div>}
        {inputValue && (
          <>
            <div>Add a new list</div>{" "}
            <TextField
              variant="outlined"
              onKeyDown={(event) => handleInput(event)}
            />
          </>
        )}
      </CardContentWrapper>
    </StyledCard>
  );
};

export default AddList;
