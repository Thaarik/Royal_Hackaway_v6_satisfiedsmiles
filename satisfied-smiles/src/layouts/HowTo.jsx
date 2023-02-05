import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import howto1 from "./../assets/images/Screenshot 2023-02-05 113104.png"
import howto2 from "./../assets/images/photo_2023-02-05_12-02-17.jpg"
import howto3 from "./../assets/images/photo_2023-02-05_12-08-17.jpg"
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
  color: #caf0f8;
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
              image={howto1}
              alt="donation button"
            />
            <CardContent>1. Click the "Donate Now" Button</CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardActionArea onClick={() => navigate("/donation")}>
            <CardMedia
              component="img"
              height="200"
              image={howto2}
              alt="Fill up your details"
            />
            <CardContent>2. Fill up your details</CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardActionArea onClick={() => navigate("/contact-us")}>
            <CardMedia
              component="img"
              height="200"
              image={howto3}
              alt="green iguana"
            />
            <CardContent>3. Wait for our team to pick up the food</CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}
