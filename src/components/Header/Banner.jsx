import Lottie from "lottie-react";
import animationData from "../../../src/assets/images/artist.json";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[550px] bg-blue-700 flex flex-col md:flex-row justify-between items-center">
      <div className="p-4">
        <Fade>
          <h1 className="text-4xl lg:text-6xl text-white font-extrabold">
            {" "}
            Welcome to Scribble
          </h1>
        </Fade>
        <Fade>
          <p className="font-medium">
            {" "}
            Explore our gallery and let the colors of creativity paint your
            world with joy
          </p>
        </Fade>
        <button
          onClick={() => navigate("/all-crafts")}
          className="mt-4 btn btn-outline text-white"
        >
          View All Crafts
        </button>
      </div>
      <div>
        <Lottie
          animationData={animationData}
          className="h-[400px] md:h-[450px] w-[400px] md:w-[450px]"
        ></Lottie>
      </div>
    </div>
  );
};

export default Banner;
