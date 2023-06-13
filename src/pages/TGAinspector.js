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
          onClick={() => BackScroll("TGA")}
        >
          <ImageAnim
            width={48}
            src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/M3rh-Back2.png"
          />
        </Link>
        <TextAnim fontSize={[3, 4, 5]} fontWeight="500" textAlign="center">
          TGA Inspector
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
              src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/MYRs-TGA.png"
            />
          </Card>
          <TextAnim
            mt={["-24px", "-64px", "-64px", "-64px"]}
            fontWeight={300}
            mx={"auto"}
          >
            2023 • Mixed Reality
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
              I collaborated with the Extended Reality and AI teams at Tahakom
              to develop the TGA Inspector, a mixed reality app for the
              Transport General Authority inspectors. The app was designed to
              enhance their work efficiency by utilizing mixed reality. My role
              was to design the interactions and implement the UI in Unity.
            </TextAnim>
          </Box>

          <Box mt={3}>
            <TextAnim fontWeight={600} mx={[2, 2, 4]} mt={3}>
              {" "}
              Video
            </TextAnim>
          </Box>
          <Card
            borderRadius={12}
            border={6}
            borderColor="#ffff"
            mt={3}
            mb={6}
            width={1}
          >
            <ResponsiveEmbed src="https://www.youtube.com/embed/j4FhzOijdPc" />
          </Card>
        </Flex>
      </Card>
    </Flex>
  </SectionsWrapper>
);
