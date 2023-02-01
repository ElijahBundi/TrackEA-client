import { Button, Card, CardMedia, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Contact from "../../Assets/Contact.png";

function GetInTouch() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
        bgcolor: "#202021",
      }}
    >
      <Box
        sx={{
          padding: "60px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Container
          sx={{
            color: "#e6dcc6",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h2">Get in touch!</Typography>
          <Typography
            sx={{
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            Find out how our products can help you be more productive
          </Typography>
          <Button variant="contained" size="large">
            CONTACT US
          </Button>
        </Container>
        <Container
          sx={{
            color: "#e6dcc6",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Typography
              sx={{
                letterSpacing: "1px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              PHONE :
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              (123) 456-7890
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Typography
              sx={{
                letterSpacing: "1px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              EMAIL :
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              hello@trackea.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Typography
              sx={{
                letterSpacing: "1px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              SOCIALS :
            </Typography>
            <Box
            sx={{
                display: 'flex',
                gap: 2
            }}
            >
              <FacebookOutlinedIcon />
              <LinkedCameraOutlinedIcon />
              <ShareOutlinedIcon />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          padding: "50px 0px",
        }}
      >
        <Card
          sx={{
            flex: 1,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <CardMedia
            component="img"
            height="400px"
            image={Contact}
            alt="Contact Us"
          />
        </Card>
      </Box>
    </Box>
  );
}

export default GetInTouch;
