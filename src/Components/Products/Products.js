import React from "react";
import PopularItems from "./PopularItems/PopularItems";
import Tacos from "./Tacos/Tacos";
import Entrees from "./Entrees/Entrees";
import Sides from "./Sides/Sides";
import LightMenu from "./LightMenu/LightMenu";
import Desert from "./Desert/Desert";
import HomeMade from "./HomeMade/HomeMade";
import Beverages from "./Beverages/Bevarages";
import Navbar from "../Navbar/NavBar";
import ProductHeader from "./ProductHeader/ProductHeader"
import BelowNav from "../BelowNav/BelowNav";
import Ordering from "./Ordering/Ordering";
import TopPics from "./Top-Pics/TopPics";
import ProductsBar from "./ProductsBars/ProductsBar";

const Products = ({selectedLocationAddress}) => {
  console.log("first",selectedLocationAddress)
  const Menudata =
    "Join Brickell Rewards to get free items when you order here →";
  return (
    <>
      <br />
      <br />
      <br />
      <div className="mt-3">
        <BelowNav  Menudata={Menudata} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <Ordering selectedLocationAddress={selectedLocationAddress} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <ProductsBar />
      </div>
      <br />
      <br />
      <br />
      <div>
        <TopPics />
      </div>
      <br />
      <br />
      <br />
      <div>
        <PopularItems />
      </div>
      <div>
        <Tacos />
      </div>
      <div>
        <Entrees />
      </div>
      <div>
        <Sides />
      </div>
      <div>
        <LightMenu />
      </div>
      <div>
        <Desert />
      </div>
      <div>
        <HomeMade />
      </div>
      <div>
        <Beverages />
      </div>
    </>
  );
};

export default Products;
