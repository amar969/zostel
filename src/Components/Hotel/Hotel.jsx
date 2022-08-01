import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import { HotelCard } from "./HotelCard";

export const Hotel = () => {
  let location = useParams();
  
  console.log(location);

  let amenities = [
    "Lockers",
    "Free Wi-Fi",
    "Air-conditioning",
    "In-house Activities",
    "Breakfast (Extra)",
    "Linen Included",
    "Hot water",
    "Card Payment Accepted",
    "24/7 Reception",
    "Bedside Lamps",
    "Storage Facility",
    "Shower",
    "Laundry Services (Extra)",
    "Common Television",
    "Common hangout area",
    "Extra bed on request",
    "Towels on rent",
  ];


  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "10px",
          margin: "auto",
          marginTop: "50px",
          borderRadius: "10px",
          gridTemplateRows: "repeat(4,1fr)",
          width: "80%",
          height: "80%",
        }}
      >
        <Box
          sx={{
            gridColumnStart: "1",
            gridColumnEnd: "5",
            gridRowStart: "1",
            gridRowEnd: "5",
          }}
        >
          <img
            src="https://img.cdn.zostel.com/zostel/gallery/images/7x147f3PQmOuOrb_o1ez1A/zostel-aurangabad-20201105103524.jpg?w=1280"
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </Box>
        <img
          style={{ borderRadius: "10px" }}
          src="https://img.cdn.zostel.com/zostel/gallery/images/Naz8nD7YTcKKFgmtJcBbHg/zostel-aurangabad-tv-area-20201105103528.jpg?w=1280"
          alt=""
        />
        <img
          style={{ borderRadius: "10px" }}
          src="https://img.cdn.zostel.com/zostel/gallery/images/-UQ1AE23QtGdJj1MyJ9NyQ/zostel-aurangabad-alley-20201105103530.jpg?w=1280"
          alt=""
        />
        <img
          style={{ borderRadius: "10px" }}
          src="https://img.cdn.zostel.com/zostel/gallery/images/41rRAup6Qh2WEFUvrbzStg/zostel-aurangabad-8-bed-mixed-dorm-20201105103519.jpg?w=1280"
          alt=""
        />
        <img
          style={{ borderRadius: "10px" }}
          src="https://img.cdn.zostel.com/zostel/gallery/images/KKQUvDOKTN6t23hHg8bLsg/zostel-aurangabad-reception-20201105103533.jpg?w=1280"
          alt=""
        />
      </Box>
      <Box
        style={{
          display: "flex",
          margin: "auto",
          marginTop: "50px",
          width: "80%",
          height: "80%",
          gap: "20px",
        }}
      >
        <Box sx={{ textAlign: "left", width: "50%" }}>
          <Text fontSize="5xl" sx={{ fontWeight: "bold", color: "#f15824" }}>
            Zostel {location.id.toUpperCase()}
          </Text>
          <Text>
            Zostel {location.id}, the liveliest backpacker hostel in Aurangabad,
            is located just 7 km from the Aurangabad Airport and 3.4 km from
            Aurangabad Railway station. Don’t mistake Aurangabad to be just the
            land of Ajanta & Ellora Caves and explore the cultural heritage it
            holds so dearly. Besides this, there are old forts and more for the
            history lovers, art galleries and museums for the art lovers and the
            endless Food scene for the foodies! Take a walk at Siddarth Garden
            while the sun sets and you will realise you have found a place you
            will never want to leave. Come and stay at our cosy hostel and
            experience Aurangabad like a local!
          </Text>
        </Box>

        <Box sx={{ width: "50%" }}>
          <Text fontSize="3xl" textAlign="left" fontWeight="bold">
            Amenities
          </Text>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridTemplateRows: "repeat(6, 1fr)",
              gap: "10px",
              marginTop: "10px",
              textAlign: "left",
            }}
          >
            {amenities.map((item) => {
              return (
                <>
                  <Text> {item} </Text>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>

     <HotelCard /> 
     
    </>
  );
};
