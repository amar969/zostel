import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Select,
  Textarea,
  Button
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Billing } from "./Billing";
import { useNavigate } from "react-router";

export const Booking = () => {
  const [input, setInput] = React.useState("");
  const [name, setName]  = React.useState("")
  const [contact, setContact]  = React.useState(0)
  const [add, setAdd] = React.useState("")
  const [gender, setGender] = React.useState("Male")

  let navigate = useNavigate()

  const handleName = (e) => {
      setName(e.target.value)
  }
  
  const handleNumber = (e) => {
    setContact(e.target.value)
  }

  const handleAdd = (e) => {
    setAdd(e.target.value)
  }

  const handleGender = (e) => {
      setGender(e.target.value)
  } 


  const handleInputChange = (e) => setInput(e.target.value);

  
  
  const postData = async() => {

    const payload = {
        "name": name,
        "number" : contact, 
        "add": add,  
        "gender":gender,
        "email" : input
      }

      let res = await fetch("http://localhost:8888/api/v1/zostel", {
          method:"POST", 
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
      })
      let data = await res.json()
      console.log(data)
  }

  React.useEffect(() => {
      postData()
  }, [])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          marginTop: "50px",
          fontWeight: "bold",
        }}
      >
        <Box sx={{ width: "50%", margin: "0 100px" }}>
          <Text textAlign="left" fontSize="4xl"> <ArrowBackIcon/> Confirm your Booking </Text>
          
          <Box >
            <FormControl onSubmit={() => postData()} >
              {/* name */}
              <FormLabel marginTop="10px" >Name</FormLabel>
              <Input sx={{ border:"2px solid" }}  placeholder='Enter your Full Name' type="text" value={name} onChange={(e) => {handleName(e)}}/>

              <FormLabel marginTop="10px" >Gender</FormLabel>
              <Select  sx={{ border:"2px solid" }} value={gender} onChange={(e) => handleGender(e) }>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>

              <FormLabel marginTop="10px" >Email</FormLabel>
              <Input  sx={{ border:"2px solid" }} placeholder='Enter your Email' type="email" value={input} onChange={handleInputChange} />
              

              <FormLabel marginTop="10px" >Number</FormLabel>
              <Input  sx={{ border:"2px solid" }} type="number" value={contact} onChange={(e) => handleNumber(e)} />
        
              <FormLabel marginTop="10px" >Address</FormLabel>
              <Textarea  sx={{ border:"2px solid" }} value={add} placeholder='Enter your Address' onChange={(e) => {handleAdd(e)}}/>

            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
            <Button >Reserve</Button>
        </Box>
      </Box>
    </>
  );
};
