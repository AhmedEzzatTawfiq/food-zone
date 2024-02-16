import breast from "../assets/Breast .jpg";
import cheesepizza from "../assets/chessepizza.jpg";
import checken from "../assets/chicken.jpg";
import SectionTitle from "./SectionTitle";

const Recommended = () => {
  return (
    <section>
      <SectionTitle subheading="Should Try" heading="Chef recommendations" />
      <section className="flex justify-center" style={{flexWrap: "wrap"}}>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4">
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={breast} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Duck Breast</h2>
              <p className="text-center mb-4">
                Tender roasted duck breast served pink, accompanied by creamy
                gratin potato.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={cheesepizza} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Cheese Pizza</h2>
              <p className="text-center">
                Dive into a delectable pizza topped with tangy goat cheese,
                roasted duck breast.{" "}
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl" style={{alignSelf: "center"}}>
            <figure>
              <img src={checken} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Chicken Avocado</h2>
              <p className="text-center">
                Indulge in a hearty salad featuring tender pan-roasted chicken,
                creamy avocado.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Recommended;
