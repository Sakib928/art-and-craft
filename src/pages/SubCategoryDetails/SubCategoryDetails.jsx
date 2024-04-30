import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SubCategoryDetails = () => {
  const subCat = useParams();
  console.log(subCat);
  const [subCategoryItems, setSubCategoryItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/crafts/${subCat.subCategory}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubCategoryItems(data);
      });
  });
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      {subCategoryItems.map((item) => {
        const {
          itemName,
          photoURL,
          subCategory,
          shortDescription,
          price,
          rating,
          prcessingTime,
        } = item;
        return (
          <div
            key={item._id}
            className="card lg:card-side bg-base-100 shadow-xl mb-6"
          >
            <figure>
              <img src={photoURL} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{itemName}</h2>
              <p className="font-bold text-sm">{subCategory}</p>
              <div>
                <p className="max-w-sm">{shortDescription}</p>
                <p className="mt-8">Price : {price}</p>
                <p>Rating : {rating}</p>
                <p>Processing Time : {prcessingTime}</p>
              </div>
              <div className="card-actions ">
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubCategoryDetails;
