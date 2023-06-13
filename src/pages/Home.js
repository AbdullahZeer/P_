import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const StyledHeading = styled(Heading)({
  textAlign: "center",
  marginTop: "20vh",
  fontWeight: "500",
  fontSize: "3em"
});

const SubHeading = styled(Heading)({
  textAlign: "center",
  marginTop: "10px",
  fontWeight: "300"
});

const SectionsWrapper = styled.div`
  margin-top: 80px;
`;

const SectionBox = styled(Box)({
  textAlign: "center"
});

const LeftSectionBox = styled(Box)({
  textAlign: "center",
  borderRadius: "30px 0px 0px 5px"
});

const StyledCard = styled(Card)({
  transform: "skewY(3deg)",
  border: "1px solid",
  padding: "10px",
  boxShadow: "5px 10px red"
});

const RightSectionBox = styled(Box)({
  textAlign: "center",
  borderRadius: "0px 30px 5px 0px"
});

const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 2em;
  text-align: center;
  margin-top: -10px;
`;

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default () => (
  <div>
    <SectionsWrapper id="Heading">
      <Heading
        mb={5}
        textAlign="center"
        fontWeight="400"
        fontSize={5}
        color={"#e5e7eb"}
      >
        Work
      </Heading>
      <Flex justifyContent="center">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          textAlign={"center"}
          width={[1, 1, 0.5]}
        >
          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/Ghostlee"
            onClick={() => handleClickScroll("Heading")}
            id={"/Ghostlee"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              Ghostlee
            </Text>
            <Text textAlign="center">2023 • Mobile </Text>
            <Card
              className="parallelogram"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                className={"imageCard"}
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/DKX8-Ghostlee_W.png"
              />
            </Card>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/TGAinspector"
            onClick={() => handleClickScroll("Heading")}
            id={"/TGAinspector"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              TGA Inspector
            </Text>
            <Text textAlign="center">2023 • Mixed Reality </Text>
            <Card
              className="parallelogram1"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                className={"imageCard"}
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/MYRs-TGA.png"
              />
            </Card>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/DrivingSchool"
            onClick={() => handleClickScroll("Heading")}
            id={"/DrivingSchool"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              Driving School
            </Text>
            <Text textAlign="center">2022 • Mobile </Text>
            <Card
              className="parallelogram2"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/qDL1-Tahakom_w.png"
                borderRadius={8}
              />
            </Card>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/ARboard"
            onClick={() => handleClickScroll("Heading")}
            id={"/ARboard"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              National Day Board
            </Text>
            <Text textAlign="center">2022 • Mobile </Text>
            <Card
              className="parallelogram3"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/U9DE-Emblem_of_Saudi_Arabia.png"
                borderRadius={8}
              />
            </Card>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/P5VR"
            onClick={() => handleClickScroll("Heading")}
            id={"/P5VR"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              Persona 5 VR
            </Text>
            <Text textAlign="center">2022 • PC </Text>
            <Card
              className="parallelogram1"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/TM4P-Persona_5_VR_logo.png"
                borderRadius={8}
              />
            </Card>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/Hoplay"
            onClick={() => handleClickScroll("Heading")}
            id={"/Hoplay"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              Hoplay
            </Text>
            <Text textAlign="center">2020 • Mobile </Text>
            <Card
              className="parallelogram"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/uxin-Hoplay_w.png"
                borderRadius={8}
              />
            </Card>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#ffff" }}
            to="/GlitchyJRPG"
            onClick={() => handleClickScroll("Heading")}
            id={"/GlitchyJRPG"}
          >
            <Text
              textColor={"#ffff"}
              fontWeight={"400"}
              fontSize={[5, 5]}
              textAlign={"center"}
            >
              Glitchy JRPG
            </Text>
            <Text textAlign="center">2020 • PC </Text>
            <Card
              className="parallelogram5"
              bg="#fffff"
              borderRadius={12}
              mx={2}
              my={2}
              width={[256, 320]}
              p={4}
              boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
              <Image
                width={[1]}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/bcEz-JPRG.png"
                borderRadius={8}
              />
            </Card>
          </Link>
        </Flex>
      </Flex>
    </SectionsWrapper>
  </div>
);
