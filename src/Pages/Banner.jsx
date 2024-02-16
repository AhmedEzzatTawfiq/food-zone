import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../src/assets/img1.png";
import img2 from "../../src/assets/img2.jpg";
import img3 from "../../src/assets/img3.png";
import img4 from "../../src/assets/img4.jpg";
import img5 from "../../src/assets/img5.jpg";
import img6 from "../../src/assets/img6.png";

const Banner = () => {
  return (
    <div className="w-full mx-auto text-center">
      <Carousel>
        <div>
          <img src={img1} style={{ maxHeight: "42rem"}} />
        </div>
        <div>
          <img src={img2} style={{ maxHeight: "42rem"}}  />
        </div>
        <div>
          <img src={img3} style={{ maxHeight: "42rem"}}  />
        </div>
        <div>
          <img src={img4} style={{ maxHeight: "42rem"}}  />
        </div>
        <div>
          <img src={img5} style={{ maxHeight: "42rem"}}  />
        </div>
        <div>
          <img src={img6} style={{ maxHeight: "42rem"}}  />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
