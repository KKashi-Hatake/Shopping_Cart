import React from "react";
import { Flex, Center, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";




const Header = () => {
const {cart}=useSelector(state=>state.cart)


  return (
    <Flex w={"full"} h={"8vh"} bgColor={"rgb(237,86,21)"}>
      <Center>
        <HStack
          fontWeight={"700"}
          ml={"2vw"}
          w={"95vw"}
          justifyContent={"space-between"}
          fontFamily={" 'Roboto', sans-serif"}
        >
          <Text fontSize={"1rem"}>LOGO HERE.</Text>
          <HStack>
            <Link
              to="/"
              style={{
                fontWeight: "500",
                color: "black",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              Home
            </Link>

            <Link to="/cart">
              <AiOutlineShoppingCart
                size={"30"}
                style={{
                  color: "black",
                }}
              />
              <Text
                fontSize={"0.8rem"}
                h={"15px"}
                w={"15px"}
                borderRadius={"50%"}
                textAlign={"center"}
                bgColor={"white"}
                pos={"absolute"}
                top={"4vh"}
                right={"3vw"}
              >
                {cart.length}
              </Text>
            </Link>
          </HStack>
        </HStack>
      </Center>
    </Flex>
  );
};

export default Header;

// border={"2px solid black"}
