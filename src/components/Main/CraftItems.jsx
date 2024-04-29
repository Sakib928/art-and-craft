import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import ItemCard from "./ItemCard";
import { AuthContext } from "../../provider/AuthProvider";
const CraftItems = () => {
  const { loadedItems } = useContext(AuthContext);
  const showItem = loadedItems.slice(0, 6);
  console.log(showItem);
  return (
    <div>
      <h1
        className="text-4xl text-center"
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "bold" }}
      >
        Choose your favorite{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Landscape Painting",
              "Portrait Drawing",
              "Watercolour Painting",
              "Oil Painting",
              "Charcoal Sketching",
              "Cartoon Drawing",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <h1 className="text-4xl font-bold text-center mt-6 mb-4">
        Our Craft Items
      </h1>
      <p className="text-center max-w-[600px] mx-auto mb-8">
        Our craft items encompass a colorful array, from vibrant yarns to
        intricate beads, inspiring creativity and delight in every project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto md:gap-4">
        {showItem.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
