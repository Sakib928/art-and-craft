import Header from "../../components/Header/Header";
import Categories from "../../components/Main/Categories";
import CraftItems from "../../components/Main/CraftItems";
import Slider from "../../components/Main/Slider";
import WhyChooseUs from "../../components/Main/WhyChooseUs";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <CraftItems></CraftItems>
      <WhyChooseUs></WhyChooseUs>
      <Categories></Categories>
      <Slider></Slider>
    </div>
  );
};

export default Home;
