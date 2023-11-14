import profile from "../../assets/superman.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I am Batman!</span> Your hero!
          </h1>
          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium sit corporis modi omnis magnam reprehenderit ipsa
            asperiores rerum debitis iusto assumenda dolor repudiandae vero,
            quam minima voluptatem pariatur qui officiis. Esse qui, itaque autem
            delectus velit omnis repellat? Magni porro eius laudantium, ex
            obcaecati soluta distinctio nihil quos error eos sunt nostrum
            accusamus blanditiis minus dicta quia quasi laborum. Fuga.
          </p>
          <Link to="/about" className="button">
            More about me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}

export default Home;
