import { styled } from "@mui/system";
import { Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Cards from "../Cards/Cards";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "15%",
  height: "auto",
  margin: "20px",
  float: "left",
  borderRadius: "10px",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "top",
  height: "100%",
  color: "grey",
}));

const List = ({ name, deleteOneList, id }) => {
  return (
    <StyledCard>
      <CardContentWrapper>
        <div>{name}</div>
        <DeleteIcon
          sx={{ cursor: "pointer" }}
          onClick={() => deleteOneList(id)}
        />
      </CardContentWrapper>
      <Cards listId={id} />
    </StyledCard>
  );
};

export default List;
