import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Spinner, Text } from '@chakra-ui/react'

export const Tour = () => {
    let slug = useParams()
   

    let [data, setData] = React.useState([])
    let [loading, setLoading] = React.useState(false)
    let [hotelImages, setHotelImages] = React.useState([])

    const getTourDetails = async() => {
        setLoading(true)
        try {
            let res = await fetch(`https://api.zostel.com/api/v1/stay/destinations/${slug.slug}/`)
            let data = await res.json()
            console.log(data.destination)
            setData(data.destination)
            setHotelImages(data.images)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
        
    }

    
    function createMakeup(){
        return {__html: data.description}
    }
   
    React.useEffect(() => {
        getTourDetails()
    }, [])


    console.log(typeof(hotelImages))

    return (
        <>
        {loading ? <Spinner 
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        sx={{ marginTop:"100px" }}
        />  : ""}
        
        <Text fontSize='5xl' fontWeight="bold" sx={{ marginBottom:"20px"}} >Welcome to <p style={{ color: "#f15824" }}>{data.name}</p></Text>
        <Box sx={{ display:"flex", alignItems:"center", margin:"0 300px" }}>
        <Text sx={{textAlign: "center"}} fontSize='1xl' dangerouslySetInnerHTML={createMakeup()} />
        </Box>
        <Text fontSize='5xl' fontWeight="bold" sx={{ margin:"20px"}}> Stays aroung <span style={{ color: "#f15824" }}>{data.name}</span> </Text>
        
        </>
    ) 
    
}