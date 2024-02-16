
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recommended from "./Recommended";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      
      <Banner />
      <Category />
      <Banner2 />
      <PopularMenu/>
      <Recommended />
      <Featured />
      <Review />

    </div>
  );
};

export default Home;
