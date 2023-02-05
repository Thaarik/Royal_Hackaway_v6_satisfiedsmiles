import React from "react";
import styled from "styled-components";
import HeaderImg from "../assets/images/food-donation.jpg";
import { mobile } from "./../responsive";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #cae9ff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ "flex-direction": "column-reverse", height: "750px" })}
`;

const TaglineBox = styled.div`
  width: 700px;
  ${mobile({ width: "300px" })};
`;

const Tagline = styled.h1`
  font-size: 36px;
  color: #133c55;
  text-align: left;
  ${mobile({ "font-size": "28px" })};
`;

const Brief = styled.p`
  overflow-wrap: break-word;
  text-align: left;
  padding: 20px 0;
`;

const ImgBox = styled.img`
  width: 500px;
  box-shadow: -55px -55px 0 -40px #133c55, 55px 55px 0 -40px #133c55;
  ${mobile({ "max-width": "80%" })}
`;

function Header() {
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <TaglineBox>
          <Tagline>Give away food to those in need</Tagline>
          <Tagline>and</Tagline>
          <Tagline>be part of a better world</Tagline>
          <Brief>
            A significant impact on reducing food waste and feeding those in
            need, thereby contributes to a more sustainable and equitable world.
            By providing access to nutritious meals, food donations can also
            improve health outcomes and overcome poverty, promoting social and
            economic development.
          </Brief>
          <Button variant="outlined" onClick={() => navigate("/about-us")}>
            Learn more ⇥
          </Button>
        </TaglineBox>
        <ImgBox src={HeaderImg} />
      </Container>
    </>
  );
}

export default Header;
