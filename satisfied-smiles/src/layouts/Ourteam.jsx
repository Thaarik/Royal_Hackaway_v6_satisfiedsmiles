import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import team1 from "./../assets/images/shubham-dhage-t0Bv0OBQuTg-unsplash.jpg";
const settings = {
  dots: false,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Container = styled.div`
  height: 500px;
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  width: 100vw;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin:50px 0;
`;
const profiles = [
  {
    id: 1,
    name: "Michael Scott",
    bio: "That's what she said!",
    img: team1,
  },
  {
    id: 2,
    name: "Jim Halpert",
    bio: "That's what she said!",
    img: team1,
  },
  {
    id: 3,
    name: "Pam Beasely",
    bio: "That's what she said!",
    img: team1,
  },
  {
    id: 4,
    name: "Dwight K. Schrute",
    bio: "That's what she said!",
    img: team1,
  },
  {
    id: 5,
    name: "Kevin Malone",
    bio: "That's what she said!",
    img: team1,
  },
];

function Ourteam() {
  return (
    <>
        <Text> Our Team </Text>
        <Container>
      <Slider {...settings} style={{overflow:"hidden",}}>
        {profiles.map((profile) => (
          <Card key={profile.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="100"
                image={profile.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {profile.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.bio}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Container>
    </>
    
  );
}

export default Ourteam;
