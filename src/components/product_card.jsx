import { motion ,inView     } from "motion/react";

export default function Product_Card({img,name}) {
  // const [count, setCount] = useState(0);
  // const countFunc = (type) => {
  //   if (type == "dec" && count > 0) {
  //     setCount((prev) => prev - 1);
  //   } else if (type == "inc" && count <= 100) {
  //     setCount((prev) => prev + 1);
  //   }
  //   return;
  // };
  return (
    <motion.div 
    initial={{scale:0}}
    animate={{scale:1,}}
    transition={{duration:0.4}}
    className="w-full h-[25rem] max-w-[350px] border-[1px] border-b-4 border-r-4 rounded-2xl bg-white p-2 mb-3 mr-1">
      <div className="w-full h-full">
        <div className="flex px-2">
          <span className="text-xl font-semibold mr-auto line-clamp-1 h-[2rem] ">
            {name}
          </span>
          <span className="text-xl flex items-center">
            <i class="fa-regular fa-heart"></i>
          </span>
        </div>
        <div className="w-full h-[19rem]">
          <img src={img} className="h-full w-full object-cover" />
        </div>
        {/* <div className="flex justify-between px-2">
          <span className="text-xl font-serial font-semibold">&#8377;12</span>
          <div className="border-2 border-b-4 rounded-xl overflow-hidden">
            <span onClick={() => countFunc("dec")} className="p-2 border-r-2">
              <i class="fa-solid fa-minus"></i>
            </span>
            <span className="p-3 text-base font-Lexend">{count}</span>
            <span onClick={(e) => countFunc("inc")} className="p-2 border-l-2">
              <i class="fa-solid fa-plus"></i>
            </span>
          </div>
          <span className="text-xl">
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
        </div> */}
      </div>
    </motion.div>
  );
}
