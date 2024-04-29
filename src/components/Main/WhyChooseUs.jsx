import { HiCursorClick } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi2";
import { FaCalculator } from "react-icons/fa6";
const WhyChooseUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-24 text-center capitalize ">
        why choose us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body place-items-center">
            <HiCursorClick className="text-6xl" />
            <h2 className="card-title ">Quick Selection</h2>
            <p>Navigate through items effortlessly</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body place-items-center">
            <HiShoppingBag className="text-6xl" />
            <h2 className="card-title ">Convenient packing</h2>
            <p>Durable packaging with eco friendly items</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body place-items-center">
            <FaCalculator className="text-6xl" />
            <h2 className="card-title ">Caluculated Delivery</h2>
            <p>Fast and efficient delivery in low cost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
