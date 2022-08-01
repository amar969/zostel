import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import { useNavigate} from "react-router-dom"; 

export const Billing = (props) => {

    let navigate = useNavigate()

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

    return(

        <>
        <Box>
              <Text fontSize="xl" fontWeight="bold" > {property.title} x {props.count}</Text>
              <Box sx={{ display:"flex", justifyContent:"space-between" }} >
                <Box>
                    <Text fontSize="lg" textAlign="left" fontWeight="bold" paddingTop="10px" > ₹{property.formattedPrice * props.count} x {props.count} </Text>
                    <Text fontSize="lg"  textAlign="left" fontWeight="bold" paddingTop="10px">Tax</Text>
                    <Text fontSize="lg"  textAlign="left" fontWeight="bold" paddingTop="10px">Total (tax inc.)</Text>
                    <Text fontSize="lg"  textAlign="left" fontWeight="bold" paddingTop="10px">Payable now</Text>
                    
                    
                </Box>
                <Box>
                    <Text fontSize="lg" textAlign="left" fontWeight="bold" paddingTop="10px"> ₹{property.formattedPrice * props.count} </Text>
                    <Text fontSize="lg" textAlign="left" fontWeight="bold" paddingTop="10px"> ₹{property.tax * props.count} </Text>
                    <Text fontSize="lg" textAlign="left" fontWeight="bold" paddingTop="10px">₹{ Math.round((property.formattedPrice + property.tax) * props.count, 2) }</Text>
                    <Text fontSize="lg" textAlign="left" fontWeight="bold" paddingTop="10px" >₹{ Math.round((((property.formattedPrice + property.tax) * props.count) * 0.2), 2) }</Text>
                </Box>
                
              </Box>
              <Box
                    as="button"
                    borderRadius="md"
                    bg="tomato"
                    color="white"
                    px={165}
                    h={45}
                    sx={{ marginTop:"20px" }}
                    
                  >
                   <Text fontWeight="bold" onClick={() => navigate("/booking")} >Book Now</Text> 
                  </Box>
          </Box>
        </>
    )
}