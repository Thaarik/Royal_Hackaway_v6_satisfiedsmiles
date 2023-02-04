import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  transition: all 0.5s ease;
  height: ${(props) => (props.extendNavbar ? "100vh" : "75px")};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: #91e5f6;
  opacity: ${(props) => (props.extendNavbar ? "0.9" : "1")};
  box-shadow: 0px 1px 5px #f3f0f0;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Center = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavItems = styled.div`
  margin: 20px;
`;
const Text = styled.p`
  font-size: ${(props) => (props.extendNavbar ? "26px" : "15px")};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HamburgerButton = styled.button`
  width: 70px;
  height: 75px;
  background: none;
  border: 0px;
  color: black;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 480px) {
    display: none;
  }
`;
const HamburgerExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (min-width: 480px) {
    display: none;
  }
`;
const NavItemsHamb = styled.div`
  margin: 30px 10px;
  font-size: 46px;
`;
export default function Navbar() {
  let navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <Container extendNavbar={showLinks}>
        <Wrapper>
          <Left>Satisfied Smiles ツ</Left>
          <Center hamb={showLinks}>
            <NavItems>
              <Text onClick={() => navigate("/about-us")}>About Us</Text>
            </NavItems>
            <NavItems>
              <Text onClick={() => navigate("/contact-us")}>Contact Us</Text>
            </NavItems>
            <NavItems>
              <Text onClick={() => navigate("/register")}>Sign Up</Text>
            </NavItems>
            <NavItems>
              <Text onClick={() => navigate("/login")}>Login</Text>
            </NavItems>
            <NavItems>
              <Text onClick={() => navigate("/donation")}>Donate</Text>
            </NavItems>
          </Center>
          <HamburgerButton
            onClick={() => {
              setShowLinks((current) => !current);
            }}
          >
            {showLinks ? <>&#10005;</> : <>&#8801;</>}
          </HamburgerButton>
        </Wrapper>
        {showLinks && (
          <HamburgerExtendedContainer>
            <NavItemsHamb>
              <Text extendNavbar={showLinks}>Products</Text>
            </NavItemsHamb>
            <NavItemsHamb>
              <Text
                extendNavbar={showLinks}
                onClick={() => navigate("/about-us")}
              >
                About Us
              </Text>
            </NavItemsHamb>
            <NavItemsHamb>
              <Text
                extendNavbar={showLinks}
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </Text>
            </NavItemsHamb>
            <NavItemsHamb>
              <Text extendNavbar={showLinks}>Cart</Text>
            </NavItemsHamb>
          </HamburgerExtendedContainer>
        )}
      </Container>
    </>
  );
}
