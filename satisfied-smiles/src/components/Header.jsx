import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #cae9ff;
  display: flex;
`;
const Tagline = styled.div`
  margin: 100px;
`;

function Header() {
  return (
    <>
      <Container>
        <Tagline>
          <h3>Give away food to those in need</h3>
          <h1>and</h1>
          <h3>be part of a better world</h3>
        </Tagline>
      </Container>
    </>
  );
}

export default Header;
