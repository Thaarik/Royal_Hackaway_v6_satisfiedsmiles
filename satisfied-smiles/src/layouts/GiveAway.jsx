import React from "react";
import styled from "styled-components";
import Vouchers from "./../assets/images/coupons/757.jpg";
import Supermarket from "./../assets/images/supermarket/7612.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Container = styled.div`
  height: 600px;
  background-color: #133c55;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h3`
  margin-top: 60px;
  margin-bottom: 20px;
  color: #caf0f8;
  font-size: 32px;
`;

const ImgBox = styled.img`
  width: 35%;
`;

const Text = styled.p`
  color: #133c55;
  overflow-wrap: break-word;
`;

const ContentImg = styled.img`
  margin: 20px auto;
  width: 400px;
`;

export default function Giveaway() {
  return (
    <>
      <Container>
        <Content>
          <Title>Get free vouchers as you donate</Title>
          <Card
            sx={{ width: 530 }}
            variant="outlined"
            style={{ backgroundColor: "#caf0f8" }}
          >
            <CardContent>
              <Text>
                Give 10kg food in total and gain vouchers up to 50% for your
                purchase at your local supermarket
              </Text>
            </CardContent>
          </Card>

          <ContentImg src={Supermarket} />
        </Content>

        <ImgBox src={Vouchers} />
      </Container>
    </>
  );
}
