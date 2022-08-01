import React from "react";
import { Box, Image, Input, FormLabel, Button, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ZostelHome = () => {
  let navigate = useNavigate();
  const [cities, setCities] = React.useState("Select Destinations");

  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        <Image
          sx={{ width: "100%" }}
          src="https://zostel-clone-kerrybli.vercel.app/static/media/landingpage5.1e3c61e6.svg"
        />

        <Box
          sx={{
            position: "absolute",
            top: "150px",
            left: "450px",
            width: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <p>Zostel</p>
            </Box>
            <Box sx={{ width: "50%" }}>
              <p>Zostel Homes</p>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Box sx={{ width: "30%" }}>
              <FormLabel>SELECT DESTIONATION</FormLabel>

              <Select>
                <option value="Select Destination">{cities}</option>

                <option value="ALLEPPEY">ALLEPPEY</option>
                <option value="AURANGABAD">AURANGABAD</option>
                <option value="BANGALORE">BANGALORE</option>
                <option value="BAROT (RAJGUNDHA)">BAROT (RAJGUNDHA)</option>
                <option value="BIR 2.0">BIR 2.0</option>
                <option value="CHENNAI">CHENNAI</option>
                <option value="CHITKUL">CHITKUL</option>
                <option value="COORG">COORG</option>
                <option value="DALHOUSIE">DALHOUSIE</option>
                <option value="DELHI">DELHI</option>
                <option value="GANGTOK">GANGTOK</option>
                <option value="GOKARNA">GOKARNA</option>
                <option value="JAIPUR">JAIPUR</option>
                <option value="JAISALMER">JAISALMER</option>
                <option value="JODHPUR">JODHPUR</option>
                <option value="KATHMANDU">KATHMANDU</option>
                <option value="KOCHI">KOCHI</option>
                <option value="KODAIKANAL">KODAIKANAL</option>
                <option value="KOLAD">KOLAD</option>
                <option value="LEH">LEH</option>
                <option value="MANALI">MANALI</option>
                <option value="MCLEODGANJ">MCLEODGANJ</option>
                <option value="MUKTESHWAR">MUKTESHWAR</option>
                <option value="MUMBAI">MUMBAI</option>
                <option value="MUNNAR">MUNNAR</option>
                <option value="MUSSOORIE">MUSSOORIE</option>
                <option value="MYSORE">MYSORE</option>
                <option value="OOTY">OOTY</option>
                <option value="PANCHGANI">PANCHGANI</option>
                <option value="POKHARA">POKHARA</option>
                <option value="PUSHKAR">PUSHKAR</option>
                <option value="RISHIKESH 2.0">RISHIKESH 2.0</option>
                <option value="SHANGARH">SHANGARH</option>
                <option value="SISSU">SISSU</option>
                <option value="SPITI">SPITI</option>
                <option value="UDAIPUR">UDAIPUR</option>
                <option value="VAGAMON">VAGAMON</option>
                <option value="VARKALA">VARKALA</option>
                <option value="WAYANAD">WAYANAD</option>
              </Select>
            </Box>

            <Box sx={{ width: "30%", marginLeft:"20px" }}>
              <FormLabel>CHECK IN</FormLabel>
              <Input
                style={{ color: "#F1563F" }}
                className="py-2 btn  btn  col-2  bg-white"
                type="date"
                max="2023-01-20"
                name=""
                id=""
              />
            </Box>
            <Box sx={{ width: "30%", marginLeft:"20px" }}>
              <FormLabel>CHECK OUT</FormLabel>
              <Input
                style={{ color: "#F1563F" }}
                className=" py-2 btn col-2 bg-white"
                type="date"
                name=""
                id=""
              />
            </Box>

            <Button
              size="md"
              sx={{
                marginRight: "30px",
                backgroundColor: "#f15824",
                color: "white",
                marginTop: "30px",
                marginLeft:"18px"
              }}
              _hover={{
                bg: "white",
                color: "#f15824",
                border: "1px solid #f15824",
              }}
              onClick={() => {navigate("/Tour/aurangabad")}}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          textAlign: "left",
          margin: "50px 150px",
        }}
      >
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://zostel-clone-kerrybli.vercel.app/static/media/karapuzha.3ba27f73.svg" />

          <Box p="6">
            <Box display="flex" alignItems="baseline"></Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              KARAPUZHA, WAYANAD
            </Box>

            <Box>
              A close-knit holiday immersed in nature awaits you at this petite
              Zostel Home, located in the lush green milieus of Wayanad’s
              Karapuzha lake. Blending flavours of both traditional and modern
              architecture, this homestay offers a laidback experience for
              travellers and digital nomads. Here, vast balconies invite in
              serenity, a blooming garden helps......
            </Box>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://zostel-clone-kerrybli.vercel.app/static/media/thirunelly.f083520d.svg" />

          <Box p="6">
            <Box display="flex" alignItems="baseline"></Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              THIRUNELLY, WAYANAD
            </Box>

            <Box>
              A traditional cottage nestled in a hilly forest area, Zostel Home
              Wayanad is your quaint hideaway in Kerala’s wilderness. It
              features a common room with indoor games, a bonfire area, a
              restaurant, and a garden for a social holiday. Outside, activities
              like wildlife safaris, treks, and visits to sightseeing spots will
              keep you engaged. While at the Home, you can look........
            </Box>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://zostel-clone-kerrybli.vercel.app/static/media/pushkar.195cf8e7.svg" />

          <Box p="6">
            <Box display="flex" alignItems="baseline"></Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              PUSHKAR, RAJASTHAN
            </Box>

            <Box>
              A traditional cottage nestled in a hilly forest area, Zostel Home
              Wayanad is your quaint hideaway in Kerala’s wilderness. It
              features a common room with indoor games, a bonfire area, a
              restaurant, and a garden for a social holiday. Outside, activities
              like wildlife safaris, treks, and visits to sightseeing spots will
              keep you engaged. While at the Home, you can look........
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
