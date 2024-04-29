import Header from "../../components/Header/Header";
import Categories from "../../components/Main/Categories";
import CraftItems from "../../components/Main/CraftItems";
import WhyChooseUs from "../../components/Main/WhyChooseUs";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <CraftItems></CraftItems>
      <WhyChooseUs></WhyChooseUs>
      <Categories></Categories>
    </div>
  );
};

export default Home;
