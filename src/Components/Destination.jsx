import React from "react";
import { Grid, GridItem, Link, Spinner} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react"
import {Text} from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom";

export const Destination = () => {

  let navigate = useNavigate()
  
  const [tours, setTours] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  const fetchTour = async () => {
      setLoading(true)
    try {
      let res = await fetch("https://api.zostel.com/api/v1/stay/destinations/");
      let data = await res.json();
      console.log(data.destinations);
      setTours(data.destinations)
      setLoading(false)
    } catch (error) {
        console.log(error)
    }
  };

  React.useEffect(() => {
    fetchTour()
  }, [])


  return (
  <>
  {loading ? <Spinner 
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  sx={{ marginTop:"100px" }}
  /> : 
  <Box sx={{ marginTop:"100px" }} >
    <Text fontSize='4xl' fontWeight="bold" sx={{ marginBottom:"20px"}}>Explore <span style={{ color: "#f15824" }} >Destinations</span></Text>
    <Box sx={{ display: 'flex', justifyContent: "center", marginLeft:"78px", marginRight:"78px" }}>
        
        <Grid templateColumns={`repeat(4, 1fr)`} gap={6} >
        {tours.map((item) => {
            return(
                <>
                <Link to="Tour">
                <GridItem w="100%" h="300" pos="relative" onClick={() => navigate(`/Tour/${item.slug}`)}>
                        <Text fontSize='2xl' fontWeight="bold" color="white" pos="absolute" bottom="2" p={4}>{item.name}</Text>
                        <img src={item.images[0].image} style={{ width:"100%", height:"100%", borderRadius:"10px" }} alt="" />
                </GridItem>
                </Link>
                </>
            )
        })}
        </Grid>

        
    </Box>
    </Box>
    }
  </>
  );
};
