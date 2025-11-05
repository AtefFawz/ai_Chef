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
  const btnStyle = {
    backgroundColor: active ? "#D9EF78" : "transparent",
    padding: "20px 8px",

    borderRadius: "99999px",
    border: "1px solid #213D34 ",
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
          expandIcon={
            <span style={btnStyle}>
              {" "}
              <ArrowDownwardIcon />
            </span>
          }
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
