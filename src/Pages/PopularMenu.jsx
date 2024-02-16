import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data?.filter(
          (item) => item.category === "popular"
        );
        setMenu(popularItems);
      });
  }, []);
  return (
    <section id="menu">
      <SectionTitle
        subheading="Check it out"
        heading="from our menu"
      ></SectionTitle>

      <div className="md:grid grid-cols-2 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-full mx-auto text-center my-5">
        <button className="btn btn-outline uppercase border-0 border-b-2 mb-12">view full menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
