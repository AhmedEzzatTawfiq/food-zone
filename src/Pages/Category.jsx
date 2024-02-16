import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

//import images here
import slide1 from "../../src/assets/slide1.avif";
import slide2 from "../../src/assets/slide2.avif";
import slide3 from "../../src/assets/slide3.avif";
import slide4 from "../../src/assets/slide4.avif";
import slide5 from "../../src/assets/slide5.avif";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <div id="contact" className="w-5/6 mx-auto border my-5">
      <SectionTitle
        subheading="From 10:00am to 11:00pm"
        heading="order online"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 mx-auto">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{backgroundColor: "lavenderblush"}}
            >
              <SwiperSlide>
                <div className="slide-container pb-14">
                  <img src={slide1} alt="" className="slide-image" />
                  <h3 className="lg:text-xl uppercase text-center lg:font-bold -mt-8 lg:-mt-12 sm:-mt-8 text-white">
                    Pizza
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-container">
                  <img src={slide2} alt="" className="slide-image" />
                  <h3 className="lg:text-xl uppercase text-center lg:font-bold -mt-8 lg:-mt-12 sm:-mt-8 text-white">
                    Burger
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-container">
                  <img src={slide3} alt="" className="slide-image" />
                  <h3 className="lg:text-xl uppercase text-center lg:font-bold -mt-8 lg:-mt-12 sm:-mt-8 text-white">
                    Pasta
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-container">
                  <img src={slide4} alt="" className="slide-image" />
                  <h3 className="lg:text-xl uppercase text-center lg:font-bold -mt-8 lg:-mt-12 sm:-mt-8 text-white">
                    Dessert
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-container">
                  <img src={slide5} alt="" className="slide-image" />
                  <h3 className="lg:text-xl uppercase text-center lg:font-bold -mt-8 lg:-mt-12 sm:-mt-8 text-white">
                    Chicken
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-black my-12">
        <h4 className="py-20 text-center text-3xl text-white">
          Call Us: +88 0192345678910
        </h4>
      </div>
    </div>
  );
};

export default Category;
