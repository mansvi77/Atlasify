 import { FaLongArrowAltRight } from "react-icons/fa";

export const Herosection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div className="earth-container">
            <img
              src="/images/pexels-pixabay-41953.jpg"
              alt="Rotating earth"
              className="rotating-earth"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
