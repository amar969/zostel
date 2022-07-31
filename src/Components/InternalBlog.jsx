import React from 'react'
import { Text, Box } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/react'

export const InternalBlog = () => {
   
    const property = {
          imageUrl: 'https://bit.ly/2Z4KKcF',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Modern home in city center in the heart of historic Los Angeles',
          formattedPrice: '$1,900.00',
          reviewCount: 34,
          rating: 4,
          para: "Things to do in Aurangabad. Ajanta Ellora Caves. Lon",
          name: "Amarjeet"
    }

    return (
   <>
   <Box sx={{ display:"flex", flexDirection:"column", backgroundColor:"grey", justifyContent:"center", alignItems:"center", padding:"50px", marginTop:"100px" }} >
   <Text fontSize="4xl" fontWeight="bold">Latest Reads</Text>
   <Box  sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
   <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' sx={{ backgroundColor:"white" }}>
   <img src={property.imageUrl} alt={property.imageAlt} />
   <Box sx={{ margin:"10px" }}>
   <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
    >
          <Text fontSize="2xl">{property.title}</Text>
    </Box>

    <Box fontWeight='semibold' noOfLines={1}>
    <Text fontSize="md"> {property.para}</Text>
    </Box>
    </Box>
    <Box sx={{ display: "flex", margin: "10px", justifyContent:"center"}} >
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    <Text sx={{ margin: "10px" }}> {property.name} </Text>
    </Box>
   </Box>
   </Box>
   </Box>
   </>

  )
}
