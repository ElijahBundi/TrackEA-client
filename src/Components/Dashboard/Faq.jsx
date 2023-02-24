import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../utils/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcons from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { color } from "@mui/system";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse, commodi velit natus, suscipit dignissimos vero quibusdam nobis
            expedita quam, accusamus dolorum fuga consequuntur harum voluptatum
            unde dolores veniam. Ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse, commodi velit natus, suscipit dignissimos vero quibusdam nobis
            expedita quam, accusamus dolorum fuga consequuntur harum voluptatum
            unde dolores veniam. Ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse, commodi velit natus, suscipit dignissimos vero quibusdam nobis
            expedita quam, accusamus dolorum fuga consequuntur harum voluptatum
            unde dolores veniam. Ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse, commodi velit natus, suscipit dignissimos vero quibusdam nobis
            expedita quam, accusamus dolorum fuga consequuntur harum voluptatum
            unde dolores veniam. Ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse, commodi velit natus, suscipit dignissimos vero quibusdam nobis
            expedita quam, accusamus dolorum fuga consequuntur harum voluptatum
            unde dolores veniam. Ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
