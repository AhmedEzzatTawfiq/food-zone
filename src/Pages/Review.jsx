import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "./SectionTitle";
import { Rating } from "@smastrom/react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle subheading="What Our Clients Say" heading="TESTIMONIALS" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              

              <div className="m-16 flex flex-col items-center">
              <Rating className="text-center mb-12" style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="text-6xl my-2" />
                <p className="text-center my-2">{review.details}</p>
                <h4 className="text-center text-yellow font-semibold">
                  {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
