const ItemCard = ({ item }) => {
  const { photoURL, itemName, currentStock, price, rating } = item;
  return (
    <div>
      <div className="lg:hover:scale-105 transition-all duration-500 card w-96 bg-base-100 shadow-xl mx-auto rounded-none h-full">
        <figure>
          <img src={photoURL} alt={itemName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <div className="font-medium">
            <p>Price : {price}</p>
            <p>Rating : {rating}</p>
          </div>
          <div className="card-actions">
            <div className="badge badge-outline">{currentStock}</div>
          </div>
          <div className="card-actions my-auto ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
