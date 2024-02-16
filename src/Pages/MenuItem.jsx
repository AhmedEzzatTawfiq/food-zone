/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-5 m-6">
      <div className="mr-4">
        <h3 className="uppercase font-bold mb-2">{name}</h3>
        <img
          style={{ borderRadius: "0px 50px 50px 50px", maxHeight: "10rem", minHeight:"7rem", maxWidth: "10rem", minWidth:"7rem" }}
          src={image}
          alt=""
          className="w-[120px] h-[120px]"
        />
      </div>
      <div>
        <p className="" style={{ maxWidth: "25rem", minWidth: "10rem" }}>
          {recipe}
        </p>
        <p className="text-yellow-500 font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
