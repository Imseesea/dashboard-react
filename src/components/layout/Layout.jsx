import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Title from "../common/Tilte";
import History from "../common/History";
import { Box, Flex, Spacer, Input, IconButton } from "@chakra-ui/react";
import {
  BellIcon,
  MoonIcon,
  InfoOutlineIcon,
  SearchIcon,
} from "@chakra-ui/icons";

const Layout = ({ title, pagename, children }) => {
  // const { pagename, children } = props;
  return (
    <Wrap>
      <Header />
      <main id="main">
        <Flex>
          <Box p="0 0 35px 10px" bg={"Secondary-grey-300"}>
            <History pagename={pagename} />
            <Title title={title} />
          </Box>
          <Spacer />
          <Box
            bg="white"
            borderRadius="70px"
            width="422px"
            height="61px"
            padding="10px"
          >
            <Flex justifyContent="space-around" alignItems="center">
              <IconButton
                bg="white"
                aria-label="Search database"
                icon={<SearchIcon />}
              />{" "}
              <Input
                width="214px"
                height="41px"
                bg="#F4F7FE"
                border="none"
                placeholder="Search"
                borderRadius="70px"
              />
              <BellIcon color="#A3AED0" width="25px" height="25px" />
              <MoonIcon color="#A3AED0" width="20px" height="20px" />
              <InfoOutlineIcon color="#A3AED0" width="20px" height="20px" />
            </Flex>
          </Box>
        </Flex>
        {children}
      </main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 290px;
  background: var(--secondary-grey-300, #f4f7fe);
  #main {
    min-height: 100vh;
    padding: 50px 20px;
  }
`;

export default Layout;
