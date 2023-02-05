import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import styled from "styled-components";
import MissionImg1 from "./../assets/images/tim-marshall-cAtzHUz7Z8g-unsplash.jpg"
import MissionImg2 from "./../assets/images/larm-rmah-AEaTUnvneik-unsplash.jpg"
import MissionImg3 from "./../assets/images/joel-muniz-3k3l2brxmwQ-unsplash.jpg"
const MissionTitle = styled.h2`
  font-size: 46px;
  text-align:center ;
  margin:30px 0;
`;
function Mission() {
  return (
    <Container sx={{width:'100vw'}} >
    <MissionTitle>Our Mission</MissionTitle>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345, margin: "30px 60px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="100"
              image={MissionImg1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "30px 60px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="100"
              image={MissionImg2}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "30px 60px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="100"
              image={MissionImg3}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}

export default Mission;
