import SectionTitle from "./SectionTitle";
import FeaturedImg from "../assets/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="my-12 my-featured py-8 bg-fixed text-white">
      <section id="about" className="mt-5">
        <SectionTitle heading="Our restaurant" />
        <div className="md:flex justify-center items-center gap-5 md:p-8 bg-black text-white bg-opacity-30">
          <div>
            <img src={FeaturedImg} alt="" />
          </div>
          <div className="p-2">
            <p>November 7, 2024</p>
            <h4 className="text-bold my-2">WHERE CAN I GET MORE</h4>
            <p>
              Continue your journey through our menu with our enticing range of
              main courses, where each dish is a masterpiece of culinary
              craftsmanship. From succulent meats and fresh seafood to vibrant
              vegetarian options, our mains are designed to captivate the senses
              and leave a lasting impression.
            </p>
            <button className="btn btn-outline uppercase mt-4 border-0 border-b-2">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
