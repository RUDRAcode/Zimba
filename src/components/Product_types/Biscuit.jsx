import Bhujia_1 from "../../assets/Bhujia_1.png";
import Bhujia_2 from "../../assets/Bhujia_2.png";
import Bhujia_3 from "../../assets/Bhujia_3.png";
import diet_chidwa from "../../assets/diet_chidwa.png";
import potato_crunch from "../../assets/potato_crunch.png";
import popCorn from "../../assets/zimba_Popcorn.png";
import Product_Card from "../product_card";

export default function Biscuit() {
  const prod_images = [
    { img: Bhujia_1, name: "Magic Bhujia" },
    { img: Bhujia_2, name: "Chicken Noodle Bhujia" },
    { img: Bhujia_3, name: "Chicken Bhujia" },
    { img: diet_chidwa, name: "Diet Chidwa" },
    { img: popCorn,name:'Zimba Popcorn'},
    { img: potato_crunch,name:'Potato Crunch'},
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
