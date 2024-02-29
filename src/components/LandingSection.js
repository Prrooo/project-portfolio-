import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from '../images/passportHarsh.png'

const greeting = "Hello, I am Harsh Malik!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Segun Adebayo"
        src={image}
      />
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
