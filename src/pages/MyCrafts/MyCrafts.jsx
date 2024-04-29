import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaPenToSquare } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const filterMail = user?.email;

  const [mycraft, setMyCraft] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/mycrafts/${filterMail}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyCraft(data);
      });
  });

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
                <button
                  onClick={() => navigate(`/update/${item._id}`)}
                  className="btn btn-primary"
                >
                  <FaPenToSquare />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary hover:bg-red-400 border-none"
                >
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
