import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bhujia_1 from "../assets/Bhujia_1.png";
import bhujia_2 from "../assets/Bhujia_2.png";
import diet_chidwa from "../assets/diet_chidwa.png";
import thumb_veg_masala from "../assets/thumb-veg_masala.png";


const MenuCarousel = () => {
  const images = [bhujia_1, bhujia_2, diet_chidwa, thumb_veg_masala];

  const duplicateImages = [...images, ...images];
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="absolute w-full flex flex-col"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        style={{ y: "0%" }}
      >
        {duplicateImages.map((img, i) => (
          <div key={i} className="w-full h-full">
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-[200px] object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenuCarousel;
