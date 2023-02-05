import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import styled from "styled-components";
import MissionImg1 from "./../assets/images/tim-marshall-cAtzHUz7Z8g-unsplash.jpg";
import MissionImg2 from "./../assets/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import MissionImg3 from "./../assets/images/joel-muniz-3k3l2brxmwQ-unsplash.jpg";
const MissionTitle = styled.h2`
  font-size: 46px;
  text-align: center;
  margin-top: 120px;
  margin-bottom:40px;
`;
function Mission() {
  return (
    <Container sx={{ width: "100vw" }}>
      <MissionTitle>Our Mission</MissionTitle>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345, margin: "30px 60px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="100"
              image={MissionImg1}
              alt="Building a better future through the power of food donation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Building a better future through the power of food donation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We take more optimistic and forward-looking approach. By
                emphasizing the "power" of food donation, we suggests that food
                donation is not just a way to address immediate needs, but also
                a means of creating a better future. The focus is on the
                potential of food donation to bring about positive change and
                improve communities.
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
              alt="Feeding the hungry, one meal at a time"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feeding the hungry, one meal at a time
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The importance of small actions and the impact they can have. By
                donating just one meal, individuals can make a difference in
                someone's life and help combat hunger. We focus on the
                individual and their ability to make a positive impact through
                food donation.
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
              alt="Reducing food waste and nourishing communities in need."
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reducing food waste and nourishing communities in need.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We highlight the dual benefits of food donation - reducing food
                waste and feeding those who are hungry. By donating surplus or
                unsold food, individuals and businesses can not only reduce the
                amount of waste they generate, but also help nourish communities
                in need. We give the importance of sustainability and
                responsibility in food donation
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}

export default Mission;
