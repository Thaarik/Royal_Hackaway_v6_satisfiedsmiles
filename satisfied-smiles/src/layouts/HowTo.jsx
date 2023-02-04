import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
`;
const Title = styled.h2`
  text-align: center;
  margin: 60px 0;
`;

export default function HowTo() {
  let navigate = useNavigate();

  return (
    <>
      <Title>How can you help?</Title>
      <Container>
        <Card sx={{ minWidth: 275 }}>
          <CardActionArea onClick={() => navigate("/donation")}>
            <CardMedia
              component="img"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>Click the Donate Button</CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardActionArea onClick={() => navigate("/donation")}>
            <CardMedia
              component="img"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>Fill up your details</CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardActionArea onClick={() => navigate("/contact-us")}>
            <CardMedia
              component="img"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>Wait for our team to pick up the food</CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}
