import { Card, CardMedia, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import products1 from "../../Assets/Products1.png";
import products2 from "../../Assets/Products2.png";
import products3 from "../../Assets/Products3.png";

function Products() {
  return (
    <Box
      sx={{
        bgcolor: "#2a292b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "150px 0px",
      }}
    >
      <Box
        sx={{
          color: "#e6dcc6",
        }}
      >
        <Typography variant="h1">All Products</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Box
          sx={{
            padding: "50px 0px 20px",
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardMedia
              component="img"
              height="200px"
              width="150px"
              image={products1}
              alt="phone monitoring"
            />
          </Card>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px 0px 5px",
              color: "#e6dcc6",
              letterSpacing: "1px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Phone Monitoring
          </Typography>
          <Typography
            sx={{
              width: 250,
              textAlign: "center",
              color: "#e6dcc6",
              fontSize: "18px",
            }}
          >
            Monitor any android or ios phone from & at your comfort.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "50px 0px 20px",
            // alignItems: 'center',
            // display: 'flex',
            // flexDirection: 'column'
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardMedia
              component="img"
              height="200px"
              width="150px"
              image={products2}
              alt="phone monitoring"
            />
          </Card>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px 0px 5px",
              color: "#e6dcc6",
              letterSpacing: "1px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Vehicle Monitoring
          </Typography>
          <Typography
            sx={{
              width: 250,
              textAlign: "center",
              color: "#e6dcc6",
              fontSize: "18px",
            }}
          >
            Monitor movement of your vehicle or equipment realtime.{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "50px 0px 20px",
            // alignItems: 'center',
            // display: 'flex',
            // flexDirection: 'column'
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardMedia
              component="img"
              height="200px"
              width="150px"
              image={products3}
              alt="phone monitoring"
            />
          </Card>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px 0px 5px",
              color: "#e6dcc6",
              letterSpacing: "1px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Track ToDo List
          </Typography>
          <Typography
            sx={{
              width: 250,
              textAlign: "center",
              color: "#e6dcc6",
              fontSize: "18px",
            }}
          >
            Monitor assignments assigned and assignments done.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
