import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 360px;
  background-color: #133c55;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterDetails = styled.div`
  margin: 30px;
  width: 350px;
`;

const Title = styled.h1`
  color: #cae9ff;
`;

const List = styled.li`
  text-decoration: none;
  color: #cae9ff;
  cursor: pointer;

  &:hover {
    color: #91e5f6;
  }
`;

export default function Footer() {
  return (
    <>
      <Container>
        <FooterDetails>
          <Title>Satisfied Smiles ツ</Title>
          <p style={{ color: "#cae9ff" }}>
            We deliver food by picking it up right from where you are and
            provide it those who are in need. We also check the quality of the
            food before giving away. Contact us to get more information on how
            you can be a part of this.
          </p>
        </FooterDetails>
        <FooterDetails>
          <ul>
            <List>Facebook</List>
            <List>Twitter</List>
            <List>Instagram</List>
            <List>LinkedIn</List>
          </ul>
        </FooterDetails>
        <FooterDetails>
          <ul>
            <List>158 South Road, London, N135NU</List>
            <List>07xxxxxxxxx</List>
            <List>service@satisfiedsmiles.co.uk</List>
          </ul>
        </FooterDetails>
      </Container>
    </>
  );
}
