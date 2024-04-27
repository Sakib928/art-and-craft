import Lottie from "lottie-react";
import animationData from "../../../src/assets/images/artist.json";
import { Fade, Zoom } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="h-[550px] bg-blue-700 flex flex-col md:flex-row justify-between items-center">
      <div>
        <Zoom>
          <h1 className="text-6xl text-white font-extrabold">
            {" "}
            Welcome to Scribble
          </h1>
        </Zoom>
        <Fade>
          <p className="font-medium">
            {" "}
            Explore our gallery and let the colors of creativity paint your
            world with joy
          </p>
        </Fade>
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
