import React from "react";
import { useParams } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { InternalBlog } from "./InternalBlog";
import { useNavigate } from "react-router-dom";

export const Tour = () => {
  let slug = useParams();
  let navigate = useNavigate();

  let [data, setData] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  let [placeImages, setPlaceImages] = React.useState([]);

  const getTourDetails = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://api.zostel.com/api/v1/stay/destinations/${slug.slug}/`
      );
      let data = await res.json();
      console.log(data.destination);
      setData(data.destination);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  function createMakeup() {
    return { __html: data.description };
  }

  // {data.operators.map((item) => {
  //     console.log(item)
  // })}

  React.useEffect(() => {
    getTourDetails();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          sx={{ marginTop: "100px" }}
        />
      ) : (
        ""
      )}

      <div
        style={{
          "background-image": `url("https://img.cdn.zostel.com/zostel/gallery/images/10vEzZsmTGOYrdrMxt1t4A/kolad-20220509201522.jpg")`,
          width: "100%",
          height: "1000px",
          marginBottom: "50px",
        }}
      >
        <Text
          fontSize="5xl"
          fontWeight="bold"
          sx={{ marginBottom: "100px", paddingTop: "350px", color: "white" }}
        >
          {data.name}
        </Text>
      </div>
      <Text fontSize="5xl" fontWeight="bold" sx={{ marginBottom: "20px" }}>
        Welcome to <p style={{ color: "#f15824" }}>{data.name}</p>
      </Text>
      <Box sx={{ display: "flex", alignItems: "center", margin: "0 300px" }}>
        <Text
          sx={{ textAlign: "center" }}
          fontSize="1xl"
          dangerouslySetInnerHTML={createMakeup()}
        />
      </Box>
      <Text fontSize="5xl" fontWeight="bold" sx={{ margin: "20px" }}>
        {" "}
        Stays aroung <span style={{ color: "#f15824" }}>{data.name}</span>{" "}
      </Text>

      {/* Hotel Details */}

      <Box
        style={{
          marginLeft: "100px",
          marginTop: "50px",
          display: "flex",
          position: "relative",
        }}
      >
        <img
          style={{ borderRadius: "20px" }}
          src={
            "https://img.cdn.zostel.com/zostel/gallery/images/7x147f3PQmOuOrb_o1ez1A/zostel-aurangabad-20201105103524.jpg?w=700"
          }
          alt=""
        />
        <Box
          borderRadius="lg"
          overflow="hidden"
          borderWidth="2px"
          sx={{
            width: "50%",
            height: "60%",
            position: "absolute",
            right: "150px",
            top: "90px",
            backgroundColor: "white",
            zIndex: "1",
            padding: "10px",
            boxShadow: "2px 2px 2px grey",
          }}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            sx={{ margin: "10px", color: "grey", textAlign: "left" }}
          >
            Zostel
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            sx={{ margin: "10px", textAlign: "left" }}
          >
            Zostel {data.name}
          </Text>
          <Text
            fontSize="lg"
            fontWeight="bold"
            sx={{ margin: "10px", textAlign: "left" }}
          >
            Stay with us at Zostel Aurangabad, the only backpacker hostel of{" "}
            {data.name}. Centrally-located, fun, social and affordable place to
            hang out with travellers from around the world.
          </Text>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              sx={{ margin: "10px", textAlign: "left" }}
            >
              Starting from ₹549
            </Text>
            <Button
              size="lg"
              sx={{
                marginRight: "30px",
                backgroundColor: "#f15824",
                color: "white",
              }}
              _hover={{
                bg: "white",
                color: "#f15824",
                border: "1px solid #f15824",
              }}
              onClick={() => navigate(`/hotel/${data.slug}`)}
            >
               View  <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Box>

      <InternalBlog />
    </>
  );
};
