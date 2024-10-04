import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Andrew!";
const bio1 = "Soy Front end Developer";
const bio2 = "Me especializo en React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=11" />
      <Heading size="lg" color="white">
        {greeting}
      </Heading>
      <Heading size="md" color="white">
        {bio1}
      </Heading>
      <Heading size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;