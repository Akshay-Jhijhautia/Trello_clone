import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "15%",
  height: "140px",
  margin: "20px",
  float: "left",
  borderRadius: "10px",
  cursor: "pointer",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: "flex",
  alignItems: "top",
  height: "100%",
  color: "grey",
}));

const Board = ({ id, img, name }) => {
  return (
    <>
      <Link to={`/lists/${id}`}>
        <StyledCard
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "100%",
            backgroundSize: "cover",
          }}
        >
          <CardContentWrapper>
            <div>{name}</div>
          </CardContentWrapper>
        </StyledCard>
      </Link>
    </>
  );
};

export default Board;
