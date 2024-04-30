import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AllCrafts = () => {
  const { loadedItems } = useContext(AuthContext);
  console.log(loadedItems);
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Sub category</th>
              <th>Price $</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* table row starts */}
            {loadedItems.map((item) => {
              const { photoURL, itemName, subCategory, price } = item;
              return (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{itemName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{subCategory}</td>
                  <td>{price}</td>
                  <th>
                    <button
                      onClick={() => handleViewDetails(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      details
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCrafts;
