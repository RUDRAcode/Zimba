import Chicken_tango from "../../assets/thumb-chicken_tango.png";
import Veg_masala from "../../assets/thumb-veg_masala.png";
import Crunchy_Bites from "../../assets/zimba_crunchy_bites.png";
import Magic_masala from "../../assets/zimba_magic_masala.png"
import Mast_masala from "../../assets/zimba_mast_masala.png"
import Instant_Chowmein from "../../assets/zimba_nowChow.png"
import Chicken_ready_to_eat from "../../assets/Zimba_Ready_to_eat.png"
import Tasty_masala from "../../assets/zimba_tasty_Masala.png"
import Product_Card from "../product_card";

export default function Noodles() {
  const prod_images = [
    { img: Chicken_tango, name: "Chicken Tango" },
    { img: Veg_masala, name: "Veg Masala" },
    { img: Crunchy_Bites, name: "Zimba Crunchy Bites" },
    { img: Magic_masala, name: "Zimba Magic Masala" },
    { img: Mast_masala, name: "Zimba Mast Masala" },
    { img: Instant_Chowmein, name: "Ready To Eat" },
    { img: Chicken_ready_to_eat, name: "Ready To Eat (Non-Veg)" },
    { img: Tasty_masala, name: "Zimba Tasty Masala" },
  ];
  return (
    <>
      {prod_images.map((prod, index) => {
        return (
          <>
            <Product_Card img={prod.img} name={prod.name} />
          </>
        );
      })}
    </>
  );
}
