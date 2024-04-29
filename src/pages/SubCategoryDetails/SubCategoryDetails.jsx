import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubCategoryDetails = () => {
  const subCat = useParams();
  console.log(subCat);
  const [subCategoryItems, setSubCategoryItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/crafts/${subCat.subCategory}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>subcategory details</h1>
    </div>
  );
};

export default SubCategoryDetails;
