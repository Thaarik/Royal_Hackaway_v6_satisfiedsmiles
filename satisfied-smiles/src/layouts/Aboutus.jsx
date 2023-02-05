import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: #386fa4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Abouttext = styled.div`
  width: 80vw;

  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: #fff;
`;

function Aboutus() {
  return (
    <Container>
      <Abouttext>
        A food donation company dedicated to reducing food waste and feeding
        those in need. Our mission is to collect excess, unsold food from
        businesses before it goes to waste and donate it to those who are
        hungry. We believe that no one should go hungry while perfectly good
        food goes to waste. By working with local businesses and community
        organizations, we can make a positive impact on both the environment and
        people's lives. Join us in our mission to create a waste-free world.
      </Abouttext>
    </Container>
  );
}

export default Aboutus;
