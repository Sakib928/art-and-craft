import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AllCrafts = () => {
  const { loadedItems } = useContext(AuthContext);
  console.log(loadedItems);
  return (
    <div>
      <h1>Allcrafts</h1>
    </div>
  );
};

export default AllCrafts;
