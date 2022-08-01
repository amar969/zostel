import React from "react";
import { Box, Text, Image, Badge, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Billing } from "./Billing";

export const HotelCard = () => {
  const [count, setCount] = React.useState(1);
  const [click, setClick] = React.useState(false);



  const property = {
    imageUrl:
      "https://img.cdn.zostel.com/zostel/gallery/images/0xh1a-KdRqW7CCg8cTNz6g/8-bed-mixed-dorm-20201112104616.jpg?w=200",
    imageAlt: "Rear view of modern home with pool",
    beds: 8,
    baths: 1,
    title: "8 Bed Mixed Dorm (Shared Washroom)",
    formattedPrice: 599,
    reviewCount: 34,
    rating: 4,
    tax: 143.76
  };

  const handleClick = (value) => {
    if (count > 1) setClick(true);
    else if (count < 8) setClick(true);
    else setClick(false);
  };

  const handleDecrement = () => {
    if (count < 2) return;
    else {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count == 8) return;
    else setCount(count + 1);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#e2e8f0", marginTop:"50px" }}>
        <Box sx={{ display: "flex", justifyContent:"space-between" }} >
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              textAlign="left"
              sx={{ paddingTop: "50px", paddingLeft: "150px" }}
            >
              Book Your Stay
            </Text>
            <Text textAlign="left" sx={{ paddingLeft: "150px" }}>
              Select from a range of beautiful rooms
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="bold" sx={{ paddingRight: "550px", paddingTop: "50px" }} > Summary </Text>
            <Text textAlign="left" fontWeight="bold" > 1 night </Text>
          </Box>
        </Box>

        <Box sx={{ display: "flex", margin: "20px 150px", paddingTop: "20px" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1,1fr)",
              gap: "10px",

              borderRadius: "10px",
              gridTemplateRows: "repeat(4,1fr)",
              width: "60%",
              height: "60%",
            }}
          >
            <Box
              maxW="xlg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              sx={{
                display: "flex",
                width: "90%",
                textAlign: "left",
                backgroundColor: "white",
              }}
            >
              <Box>
                <Image
                  sx={{ height: "100%" }}
                  src={property.imageUrl}
                  alt={property.imageAlt}
                />
              </Box>

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="orange">
                    Available
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  <Text fontSize="2xl"> {property.title}</Text>
                </Box>

                <Box sx={{ textAlign: "left" }}>
                  <Text fontSize="xl" fontWeight="bold">
                  ₹{property.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / night
                    </Box>
                  </Text>
                </Box>

                <Text sx={{ textAlign: "left" }}>
                  A bed in 8 Bed Mixed Dorm (Shared Washroom)
                </Text>
                <Box
                  display="flex"
                  mt="2"
                  alignItems="center"
                  sx={{ justifyContent: "space-between" }}
                >
                  <Box>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                  <Box
                    as="button"
                    borderRadius="md"
                    bg="tomato"
                    color="white"
                    textAlign="center"
                    px={4}
                    h={8}
                    onClick={() => handleClick()}
                  >
                    {click ? (
                      <>
                        <p>
                          <span
                            style={{ padding: "5px",  textAlign:"center" }}
                            onClick={() => handleIncrement()}
                          >
                            +
                          </span>
                          <span
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              padding: "10px",
                              textAlign:"center"
                            }}
                          >
                            {count}
                          </span>
                          <span
                            style={{ padding: "5px",  textAlign:"center" }}
                            onClick={() => handleDecrement()}
                          >
                            -
                          </span>
                        </p>
                      </>
                    ) : (
                      "Select unit"
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        
         { click ? 
            
            <Billing count={count} /> 
          : ""
        }

        </Box>
      </Box>
    </>
  );
};
