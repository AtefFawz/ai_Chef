"use client";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
interface buttons {
  content?: React.ReactNode;
  bg?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  onClick?: () => void;
  size?: string;
  mainWidth?: string;
}
export default function Buttons({
  content,
  bg,
  border,
  borderColor,
  textColor,
  onClick,
  size,
  mainWidth,
}: buttons) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
      initial={{ scaleX: 0, opacity: 0, y: 60 }}
      transition={{ duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      className={`rounded-4xl  border-${border} bg-[${bg}] border-[${borderColor}] cursor-pointer overflow-hidden text-nowrap w-full`}
      style={{ width: size, backgroundColor: bg }}
    >
      <Button
        sx={{
          color: textColor,
          padding: "10px 10px",
          minWidth: mainWidth,
          fontSize: "10px",
          fontWeight: "bold",
        }}
        onClick={onClick}
        className="w-full h-full "
      >
        {content}
      </Button>
    </motion.div>
  );
}
