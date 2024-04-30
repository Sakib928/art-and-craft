import { useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const ItemDetails = () => {
  const item = useLoaderData();
  const {
    itemName,
    photoURL,
    subCategory,
    price,
    rating,
    shortDescription,
    prcessingTime,
    customization,
    currentStock,
  } = item;
  return (
    <HelmetProvider>
      <Helmet>
        <title>Item Details</title>
      </Helmet>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={photoURL} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{itemName}</h2>
            <p className="font-bold text-sm">{subCategory}</p>
            <p className="max-w-sm">{shortDescription}</p>
            <div>
              <p>Price : {price}</p>
              <p>Rating : {rating}</p>
              <p>Processing Time : {prcessingTime}</p>
              <p>Customization : {customization}</p>
              <p>Current Stock : {currentStock}</p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ItemDetails;
