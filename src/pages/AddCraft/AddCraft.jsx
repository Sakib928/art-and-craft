import { useRef } from "react";

const AddCraft = () => {
  const subCategoryRef = useRef();
  const customizationRef = useRef();
  const stockRef = useRef();
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const subCategory = subCategoryRef.current.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = customizationRef.current.value;
    const prcessingTime = form.prcessingTime.value;
    const currentStock = stockRef.current.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const photoURL = form.photoURL.value;

    const craftItem = {
      itemName,
      subCategory,
      shortDescription,
      price,
      rating,
      customization,
      prcessingTime,
      currentStock,
      userName,
      userEmail,
      photoURL,
    };
    console.log(craftItem);
    fetch("http://localhost:5000/allcrafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="p-24">
      <h1 className="text-3xl font-extrabold text-center mb-8">Add a craft </h1>
      <form onSubmit={handleAddItem}>
        {/* single row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Item Name</span>
              </div>
              <input
                name="itemName"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Select Sub category</span>
            </div>
            <select
              ref={subCategoryRef}
              className="select w-full  input-bordered"
            >
              <option disabled selected>
                Landscape Painting
              </option>
              <option>Portrait Drawing</option>
              <option>Portrait Drawing</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>
          </div>
        </div>
        {/* single row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <textarea
            required
            name="shortDescription"
            className="textarea textarea-ghost w-full md:w-1/2 border input-bordered"
            placeholder="Short Description"
          ></textarea>

          <div className="form-control md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                name="price"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* single row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                name="rating"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Customization</span>
            </div>
            <select
              ref={customizationRef}
              className="select w-full  input-bordered"
            >
              <option disabled selected>
                yes
              </option>
              <option>no</option>
            </select>
          </div>
        </div>
        {/* single row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                name="prcessingTime"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Stock Status</span>
            </div>
            <select ref={stockRef} className="select w-full  input-bordered">
              <option disabled selected>
                In stock
              </option>
              <option>Made to order</option>
              <option>Out of stock</option>
            </select>
          </div>
        </div>
        {/* single row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Your Name</span>
              </div>
              <input
                name="userName"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Your Email</span>
              </div>
              <input
                name="userEmail"
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <div className="form-control w-full ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Product Image</span>
              </div>
              <input
                name="photoURL"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="ADD COFFEE"
          className="btn mt-4 btn-block"
        />
      </form>
    </div>
  );
};

export default AddCraft;
