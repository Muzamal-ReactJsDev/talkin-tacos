import React from "react";
import Navbar from "../Navbar/NavBar";
import BelowNav from "../BelowNav/BelowNav";
import Banner from "../Banner/Banner";
import MostPopular from "../Most_popular/MostPopular";
import OrderDirectly from "../Order-Directly/OrderDirectly";
import Featuring from "../Featuring/Featuring";
import FeaturingFeaturingCard from "../Featuring/Featuring";
import ScrollerImages from "../ScrollerImages/ScrollerImages";
import TopDishes from "../TopDishes/TopDishes";
import Location from "../Location/Location";
import OrderCard from "../OrderCard/OrderCard";
import Footer from "../Footer/Footer";

const Header = () => {
  const BelowNavDetails =
    "Join Talkin Tacos Rewards, win $500! Be entered in a drawing to win on 9/1";
  return (
    <>
      <br />
      <br />
      <br />
      <div className="mt-3">
        <BelowNav BelowNavDetails={BelowNavDetails} />
      </div>
      <div>
        <Banner />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <MostPopular />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <OrderDirectly />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <FeaturingFeaturingCard />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <ScrollerImages />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <TopDishes />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Location />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <OrderCard />
      </div>
    </>
  );
};

export default Header;
