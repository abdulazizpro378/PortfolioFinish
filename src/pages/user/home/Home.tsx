import {Link} from "react-router-dom";
import Profile from "../../../assets/images/abupro1.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./home.scss"

const Home = () => {
  return (
    <section className="home section grid">
      <img
        src={Profile}
        alt=""
        className="home__img"
      />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            I'am Abdulaziz Web devoloper
          </h1>
          <p className="home__desription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cumque aspernatur soluta.
          </p>
          <Link to="/about" className="button">
            More About <span className="button__icon"><FaArrowRight /></span>
          </Link>
        </div>
      </div>

      <div className="color__block">
      </div>
    </section>
  );
};

export default Home;
