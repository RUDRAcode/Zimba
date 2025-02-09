import zimba_Chocolate from "../../assets/zimba_chocolate.png";
import Mixed_fruit from "../../assets/zimba_mixedFruit.png";
import vanilla from "../../assets/zimba_vanilla.png";
import Product_Card from "../product_card";

export default function Cakes() {
  const prod_images = [
    { img: zimba_Chocolate, name: "Chocolate Cake" },
    { img: Mixed_fruit, name: "Mixed Fruit Cake" },
    { img: vanilla, name: "Vanilla Bhujia" },
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
