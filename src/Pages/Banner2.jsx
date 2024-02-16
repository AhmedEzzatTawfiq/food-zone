import banner2 from "../assets/chef.jpg";

const Banner2 = () => {
  return (
    <div className="w-5/6 mx-auto text-center my-10 relative">
      <img src={banner2} alt="" />
      <div className="bg-white border md:absolute bottom-0 sm:p-2 sm:m-0 md:m-8">
        <h2 className="uppercase font-bold mb-0 mt-2">Food Zone</h2>
        <p className="p-2">
          At Food Zone, we pride ourselves on delivering not just a meal, but an
          unforgettable dining experience. Our dedicated staff is committed to
          ensuring your satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Banner2;
