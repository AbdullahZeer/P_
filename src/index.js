import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Flex, Heading, Card, Text, Image } from "rebass";
import posed, { PoseGroup } from "react-pose";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "./styles.css";
import Home from "./pages/Home";
import TGAinspector from "./pages/TGAinspector";
import DrivingSchool from "./pages/DrivingShcool";
import ARboard from "./pages/ARboard";
import P5VR from "./pages/P5VR";
import Hoplay from "./pages/Hoplay";
import GlitchyJRPG from "./pages/GlitchyJRPG";
import Ghostlee from "./pages/Ghostlee";
import ScrollToTop from "./ScrollToTop";

const RouteContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 300, beforeChildren: true },
  exit: { y: 100, opacity: 0 }
});

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Montserrat:wght@300;400;700&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;

const StyledHeading = styled(Heading)({
  textAlign: "center",
  marginTop: "20vh",
  fontWeight: "500",
  fontSize: "3em"
});

const SubHeading = styled(Heading)({
  textAlign: "center",
  marginTop: "10px",
  fontWeight: "400"
});

const ImageAnim = posed(Image)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
});

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => (
  <Route
    render={({ location }) => (
      <ScrollToTop>
        <div className="App halftone7">
          <Flex
            mb={-6}
            flexDirection="row"
            mx="auto"
            alignItems="center"
            justifyContent="center"
          >
            <Card Card p={2} mx="auto">
              <ImageAnim
                width={400}
                src="https://uploads.codesandbox.io/uploads/user/648211a0-b6c9-4560-bfa6-059c03932054/qNqe-Abdullahzeer_No+bg.png"
              />
            </Card>
          </Flex>

          <Card Card p={2} with={360}>
            <StyledHeading color={"#ffff"}>Abdullah Alzeer</StyledHeading>
            <SubHeading
              mb={3}
              color={"#ffff"}
              textAlign={"center"}
              fontSize={[4, 5]}
            >
              UX/UI Designer
            </SubHeading>
            <SubHeading
              color={"#e5e7eb"}
              textAlign={"center"}
              fontSize={[3, 4]}
            >
              bridging art and tech to create immersive and fun experiences
            </SubHeading>
          </Card>

          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} key="home" />
                <Route path="/Ghostlee" component={Ghostlee} key="Ghostlee" />
                <Route
                  path="/TGAinspector"
                  component={TGAinspector}
                  key="TGAinspector"
                />
                <Route
                  path="/DrivingSchool"
                  component={DrivingSchool}
                  key="DrivingSchool"
                />
                <Route path="/ARboard" component={ARboard} key="ARboard" />
                <Route path="/P5VR" component={P5VR} key="P5VR" />
                <Route
                  path="/GlitchyJRPG"
                  component={GlitchyJRPG}
                  key="GlitchyJRPG"
                />
                <Route path="/Hoplay" component={Hoplay} key="Hoplay" />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </div>
      </ScrollToTop>
    )}
  />
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter background-color={"black"}>
    <App />
  </BrowserRouter>,
  rootElement
);
