import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Banner = () => {
  const { theme } = useContext(AuthContext);
  console.log(theme);
  //   const bannerBg = {theme == light ? 'bg-white' : 'bg-blue-700'}
  return (
    <div
      className={`h-[550px] bg-blue-700 ${
        theme === "light" ? "bg-white" : "bg-blue-700"
      }`}
    ></div>
  );
};

export default Banner;
