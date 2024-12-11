import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Menu_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${Menu_URL}restaurantId=${resId}`);
    const json = await data.json();

    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>

      <h2 className="font-bold text-xl">Menu</h2>
      {categories.map((category) => (
        <RestaurantCategories data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
