import { AnimatePresence, delay, motion } from "motion/react";
import { useState } from "react";
import bhujia_1 from "../assets/Bhujia_1.png";
import MenuCarousel from "./MenuCarousal";

export default function Menu_cards({ products, delay }) {
  const { product_type, products_name } = products;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", delay: `${delay}` }}
        className="w-full border-2 border-b-[6px] p-3 rounded-xl border-r-4 flex   bg-white mb-4 md:mr-4 md:max-w-[350px] lg:max-w-[450px] xl:max-w-[600px]"
      >
        <div className="w-full h-full flex flex-col justify-between md:w-2/3">
          <div>
            <div className="text-start">
              <span className="text-3xl font-Lexend p-1">{product_type}</span>
            </div>
            <div className="h-64 p-2">
              <div className="w-full h-full">
                {products_name.map((val, index) => {
                  return (
                    <>
                      <div className="w-full h-1/2 border-b-2 flex flex-col justify-evenly">
                        <div className="flex justify-between">
                          <span className="text-xl font-mono font-bold">
                            {val.name}
                          </span>
                        </div>
                        <div className="w-full overflow-hidden">
                          <span className="text-sm text-balance font-semibold">
                            {val.description}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-10 bg-black flex justify-center items-center rounded-lg">
            <span className="text-white font-Lexend cursor-pointer">
              Show More
            </span>
          </div>
        </div>
        <div className=" w-1/3 h-full hidden md:flex md:items-center">
          <MenuCarousel/>
        </div>
      </motion.div>
    </>
  );
}
