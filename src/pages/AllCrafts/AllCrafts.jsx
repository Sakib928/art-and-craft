import { useEffect } from "react";

const AllCrafts = () => {
  useEffect(() => {
    fetch("http://localhost:5000/allcrafts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Allcrafts</h1>
    </div>
  );
};

export default AllCrafts;
