import Header from "../../components/Header/Header";
import Categories from "../../components/Main/Categories";
import CraftItems from "../../components/Main/CraftItems";
import Slider from "../../components/Main/Slider";
import WhyChooseUs from "../../components/Main/WhyChooseUs";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Scribble-Home</title>
      </Helmet>
      <div>
        <Header></Header>
        <CraftItems></CraftItems>
        <WhyChooseUs></WhyChooseUs>
        <Categories></Categories>
        <Slider></Slider>
      </div>
    </HelmetProvider>
  );
};

export default Home;
