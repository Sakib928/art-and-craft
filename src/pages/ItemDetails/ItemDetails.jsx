import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
  const item = useLoaderData();
  const {
    itemName,
    photoURL,
    subCategory,
    price,
    rating,
    shortDescription,
    processingTime,
    customization,
    currentStock,
  } = item;
  return (
    <div>
      <h1>item details</h1>
    </div>
  );
};

export default ItemDetails;
