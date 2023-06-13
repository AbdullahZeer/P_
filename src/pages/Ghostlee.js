import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import ResponsiveEmbed from "react-responsive-embed";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700');
    font-family: 'Work Sans', sans-serif;
  }
`;
const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const VidBox = styled.iframe`
  border: 2px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;

const VidBoxAnim = posed(VidBox)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
});

const TextAnim = posed(Text)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
});

const ImageAnim = posed(Image)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
});

const SectionsWrapper = styled.div`
  margin-top: 80px;
`;

const BackScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default () => (
  <SectionsWrapper>
    <Flex justifyContent={"center"}>
      <Card
        p={3}
        fontSize={[2, 3, 4]}
        width={960}
        color="#ffff"
        className={"parallelogramCard"}
      >
        <Link
          style={{ textDecoration: "none", color: "#ffff" }}
          to="/"
          onClick={() => BackScroll("Ghostlee")}
        >
          <ImageAnim
            width={48}
            src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/M3rh-Back2.png"
          />
        </Link>
        <TextAnim fontSize={[3, 4, 5]} fontWeight="500" textAlign="center">
          Ghostlee
        </TextAnim>

        <Flex
          mb={3}
          flexDirection={"column"}
          flexWrap="wrap"
          justifyContent={"center"}
        >
          <Card mx="auto">
            <ImageAnim
              width={300}
              src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/DKX8-Ghostlee_W.png"
            />
          </Card>
          <TextAnim
            mt={["-24px", "-64px", "-64px", "-64px"]}
            fontWeight={300}
            mx={"auto"}
          >
            2023 • Mobile
          </TextAnim>
        </Flex>

        <Flex
          flexDirection={"column"}
          flexWrap="wrap"
          justifyContent={"left"}
          mt={3}
        >
          <Box mt={3}>
            <TextAnim
              className={"text-block"}
              fontWeight={200}
              mx={[2, 2, 4]}
              mt={2}
            >
              {" "}
              In collaboration with{" "}
              <a
                style={{ textDecoration: "none", color: "#4075c9" }}
                href="https://tableknightgames.com"
                target="_blank"
              >
                TableKnightGames
              </a>
              , I contributed to{" "}
              <a
                style={{ textDecoration: "none", color: "#4075c9" }}
                href="https://tableknightgames.com/ghostlee/"
                target="_blank"
              >
                Ghostlee
              </a>
              , a social media app that enables users to leave AR messages at
              specific geo-locations. My responsibilities included designing the
              message creation and placement feature, designing the onboarding
              flow, creating the VFX and shaders for the ghost avatar, and
              implementing the UI in Unity.
            </TextAnim>
          </Box>

          <Box mt={3}>
            <TextAnim fontWeight={600} mx={[2, 2, 4]} mt={3}>
              {" "}
              Onboarding and message creation
            </TextAnim>
          </Box>
          <Card
            borderRadius={12}
            border={6}
            borderColor="#ffff"
            mt={3}
            mb={3}
            width={1}
          >
            <ResponsiveEmbed src="https://www.youtube.com/embed/QXadKyIOLUo" />
          </Card>

          <Box mt={3}>
            <TextAnim fontWeight={600} mx={[2, 2, 4]} mt={3}>
              {" "}
              Ghost base shader and VFX
            </TextAnim>
          </Box>
          <Flex mb={6} flexWrap="wrap" justifyContent={"center"}>
            <Card mt={1} p={2}>
              <ImageAnim
                width={"300px"}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/qVDD-VFX.gif"
                borderRadius={8}
              />
            </Card>
            <Card mt={1} p={2}>
              <ImageAnim
                width={"300px"}
                hight={"900px"}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/k4r4-VFX2.gif"
                borderRadius={8}
              />
            </Card>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  </SectionsWrapper>
);
