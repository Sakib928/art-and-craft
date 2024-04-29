import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const filterMail = user?.email;

  useEffect(() => {
    fetch(
      `https://10-painting-server-btwfjmcxw-sakib928s-projects.vercel.app/mycrafts/${filterMail}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h1>My Crafts </h1>
    </div>
  );
};

export default MyCrafts;
