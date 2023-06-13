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
          onClick={() => BackScroll("Hoplay")}
        >
          <ImageAnim
            width={48}
            src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/M3rh-Back2.png"
          />
        </Link>
        <TextAnim fontSize={[3, 4, 5]} fontWeight="500" textAlign="center">
          Hoplay
        </TextAnim>

        <Flex mb={3} flexDirection={"column"} flexWrap="wrap">
          <Card mx="auto">
            <ImageAnim
              width={300}
              src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/uxin-Hoplay_w.png"
            />
          </Card>
          <TextAnim
            mt={["-24px", "-64px", "-64px", "-64px"]}
            fontWeight={300}
            mx={"auto"}
          >
            2020 • Mobile
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
              <a
                style={{ textDecoration: "none", color: "#4075c9" }}
                href="https://apps.apple.com/sa/app/hoplay-arab-gamers-community/id1445347307"
                target="_blank"
              >
                Hoplay
              </a>{" "}
              is a platform that allows gamers to create and join communities of
              like-minded players and enjoy games together. I was part of the
              Hoplay team as a UX/UI designer who worked on improving the user
              experience and interface of the platform.
            </TextAnim>
          </Box>

          <Box mt={3}>
            <TextAnim fontWeight={600} mx={[2, 2, 4]} mt={3}>
              {" "}
              Main Screens
            </TextAnim>
          </Box>
          <Flex mb={6} flexWrap="wrap" justifyContent={"center"}>
            <Card mt={1} p={2}>
              <ImageAnim
                width={"300px"}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/wrxv-Hoplay_mian.jpg"
                borderRadius={8}
              />
            </Card>
            <Card mt={1} p={2}>
              <ImageAnim
                width={"300px"}
                hight={"900px"}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/tFyb-Hoplay_Overwatch.jpg"
                borderRadius={8}
              />
            </Card>
            <Card mt={1} p={2}>
              <ImageAnim
                width={"300px"}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/xg6M-Hoplay_timeline.jpg"
                borderRadius={8}
              />
            </Card>
            <Card mt={1} p={2}>
              <ImageAnim
                width={"300px"}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/Hdbu-Hoplay_profile.jpg"
                borderRadius={8}
              />
            </Card>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  </SectionsWrapper>
);
