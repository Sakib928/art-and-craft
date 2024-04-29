import cat1 from "../../assets/images/mountain_canvas.jpg";
import cat2 from "../../assets/images/pencil.jpg";
import cat3 from "../../assets/images/animal.jpg";
import cat4 from "../../assets/images/oil_portrai.jpg";
import cat5 from "../../assets/images/charcoal-fig.jpg";
import cat6 from "../../assets/images/superhero.jpg";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  const handleCategory = (e) => {
    let address = e.target.innerText;
    address = address.replace(" ", "_");
    console.log(address);
    navigate(`/crafts/${address}`);
  };
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-24 mb-8">
        Art Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
        <div
          style={{
            backgroundImage: `url(${cat1})`,
          }}
          className={`h-80 w-96 hover:bg-black/65 bg-blend-darken flex place-items-center justify-center `}
        >
          <h1
            onClick={handleCategory}
            className="font-bold text-3xl text-white hover:text-blue-500 underline"
          >
            Landscape Painting
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(${cat2})`,
          }}
          className={`h-80 w-96 hover:bg-black/65 bg-blend-darken flex place-items-center justify-center `}
        >
          <h1
            onClick={handleCategory}
            className="font-bold text-3xl text-white hover:text-blue-500 underline"
          >
            Portrait Drawing
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(${cat3})`,
          }}
          className={`h-80 w-96 hover:bg-black/65 bg-blend-darken flex place-items-center justify-center `}
        >
          <h1
            onClick={handleCategory}
            className="font-bold text-3xl text-white hover:text-blue-500 underline"
          >
            Watercolour Painting
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(${cat4})`,
          }}
          className={`h-80 w-96 hover:bg-black/65 bg-blend-darken flex place-items-center justify-center `}
        >
          <h1
            onClick={handleCategory}
            className="font-bold text-3xl text-white hover:text-blue-500 underline"
          >
            Oil Painting
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(${cat5})`,
          }}
          className={`h-80 w-96 hover:bg-black/65 bg-blend-darken flex place-items-center justify-center `}
        >
          <h1
            onClick={handleCategory}
            className="font-bold text-3xl text-white hover:text-blue-500 underline"
          >
            Charcoal Sketching
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(${cat6})`,
          }}
          className={`h-80 w-96 hover:bg-black/65 bg-blend-darken flex place-items-center justify-center `}
        >
          <h1
            onClick={handleCategory}
            className="font-bold text-3xl text-white hover:text-blue-500 underline"
          >
            Cartoon Drawing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
