import Footer from "./Footer/Footer";
import Header from "./HeaderComponent/Header";
import "./HomePage.style.css";
import HomePageBodyP from "./HomePageBody/HomePageBodyP";
import BodyContaint from "./MiddleComponent/MiddleComponent";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <BodyContaint />
      <HomePageBodyP />
      <Footer />
    </div>
  );
};

export default HomePage;
