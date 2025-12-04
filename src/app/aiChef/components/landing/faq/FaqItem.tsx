import { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { faqDataType } from "./data/FaqData";
export default function FaqItem({ faqData }: { faqData: faqDataType }) {
  const [active, setActive] = useState(false);
  const handelClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <motion.article
      variants={faqData.animated}
      onClick={handelClick}
      className={`rounded-3xl ${active ? "bg-red-400" : "bg-transparent"} `}
    >
      <Accordion
        sx={{
          backgroundColor: active ? "#F1F2ED" : "transparent",
          padding: "16px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="h3">{faqData.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faqData.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </motion.article>
  );
}
