import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "./../responsive";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled.div`
  transition: all 0.5s ease;
  height: ${(props) => (props.extendNavbar ? "100vh" : "100px")};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: #cae9ff;
  opacity: ${(props) => (props.extendNavbar ? "0.9" : "1")};
  /* box-shadow: 0px 1px 5px #f3f0f0; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-style: italic;
  color: #133c55;
  display: flex;
  align-items: center;
  margin-left: 80px;
  ${mobile({ "justify-content": "flex-start" })}
`;

const Pages = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const NavItems = styled.div`
  margin: 20px;
`;

const Span = styled.div`
  margin: 5px;
`;

const Text = styled.p`
  font-size: ${(props) => (props.extendNavbar ? "26px" : "15px")};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #386fa4;
  }
`;

const HamburgerButton = styled.button`
  width: 70px;
  height: 75px;
  background: none;
  border: 0px;
  color: #133c55;
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
const NavItemsHB = styled.div`
  margin: 30px 10px;
  font-size: 32px;
`;
export default function Navbar() {
  let navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <Container extendNavbar={showLinks}>
        <Wrapper>
          <Title>Satisfied Smiles ツ</Title>
          <Pages hamburger={showLinks}>
            <NavItems>
              <Text onClick={() => navigate("/about-us")}>About</Text>
            </NavItems>
            <NavItems>
              <Text onClick={() => navigate("/contact-us")}>Contact</Text>
            </NavItems>
            <NavItems>
              <Button variant="outlined" onClick={() => navigate("/donation")}>
                Donate Now <Span />
                <FavoriteBorderIcon />
              </Button>
            </NavItems>
          </Pages>
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
            <NavItemsHB>
              <Text
                extendNavbar={showLinks}
                onClick={() => navigate("/about-us")}
              >
                About Us
              </Text>
            </NavItemsHB>
            <NavItemsHB>
              <Text
                extendNavbar={showLinks}
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </Text>
            </NavItemsHB>
            <NavItemsHB>
              <Text
                extendNavbar={showLinks}
                onClick={() => navigate("/donation")}
              >
                Donate
              </Text>
            </NavItemsHB>
          </HamburgerExtendedContainer>
        )}
      </Container>
    </>
  );
}
