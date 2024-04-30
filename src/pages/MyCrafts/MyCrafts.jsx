import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaPenToSquare } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoIosArrowDropdown } from "react-icons/io";
import { Helmet, HelmetProvider } from "react-helmet-async";
const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const filterMail = user?.email;

  const [mycraft, setMyCraft] = useState([]);
  const [showCraft, setShowCraft] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://10-painting-server-7d9x24lfq-sakib928s-projects.vercel.app/mycrafts/${filterMail}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyCraft(data);
        setShowCraft(data);
      });
  }, [filterMail]);

  const handleDelete = (_id) => {
    // console.log(_id);
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
        fetch(
          `https://10-painting-server-7d9x24lfq-sakib928s-projects.vercel.app/delete/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = showCraft.filter((item) => item._id !== _id);
              setShowCraft(remaining);
              setMyCraft(remaining);
            }
          });
      }
    });
  };
  const handleAll = () => {
    setMyCraft(showCraft);
    // console.log(mycraft);
  };

  const handleCustomizable = () => {
    const newShow = showCraft.filter((item) => item.customization === "yes");
    // console.log(newShow);
    setMyCraft(newShow);
  };

  const handleNonCustomizable = () => {
    const newShow = showCraft.filter((item) => item.customization === "no");
    // console.log(newShow);
    setMyCraft(newShow);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>My arts and crafts</title>
      </Helmet>
      <div>
        <div className="dropdown mb-24 flex justify-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort <IoIosArrowDropdown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleAll}>
              <a>All</a>
            </li>
            <li onClick={handleCustomizable}>
              <a>Customizable</a>
            </li>
            <li onClick={handleNonCustomizable}>
              <a>Non-Customizable</a>
            </li>
          </ul>
        </div>
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
    </HelmetProvider>
  );
};

export default MyCrafts;
