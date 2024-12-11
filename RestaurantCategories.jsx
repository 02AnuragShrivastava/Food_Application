import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-slate-100 shadow-md p-4 mx-auto my-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantCategories;
