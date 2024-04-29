import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaPenToSquare } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const filterMail = user?.email;

  const [mycraft, setMyCraft] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mycrafts/${filterMail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCraft(data);
      });
  });

  return (
    <div>
      {mycraft.map((item) => {
        const {
          photoURL,
          itemName,
          price,
          rating,
          customization,
          currentStock,
        } = item;
        return (
          <div
            key={item._id}
            className="card card-side bg-base-100 shadow-xl mb-6"
          >
            <figure>
              <img src={photoURL} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{itemName}</h2>
              <div>
                <p>Price : {price}$</p>
                <p>Rating : {rating}</p>
                <p>Customization : {customization}</p>
                <p>Status : {currentStock}</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <FaPenToSquare />
                </button>
                <button className="btn btn-primary hover:bg-red-400 border-none">
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCrafts;
