 export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">

        {/* World card comes first */}
        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">World</p>
            <p>
              <span className="card-description">Capital: </span>
              No Capital
            </p>
            <p>
              <span className="card-description">Population: </span>
              8,000,000,000
            </p>
            <p>
              <span className="card-description">Interesting Facts: </span>
              The world population reached approximately 8 billion in 2022.
            </p>
          </div>
        </div>

        {/* Other country cards come after */}
        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">India</p>
            <p>
              <span className="card-description">Capital: </span>
              New Delhi
            </p>
            <p>
              <span className="card-description">Population: </span>
              1,464,000,000
            </p>
            <p>
              <span className="card-description">Interesting Facts: </span>
              India is the second most populous country in the world.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">Brazil</p>
            <p>
              <span className="card-description">Capital: </span>
              Brasília
            </p>
            <p>
              <span className="card-description">Population: </span>
              217,000,000
            </p>
            <p>
              <span className="card-description">Interesting Facts: </span>
              Brazil is the largest country in South America and the fifth largest in the world.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">Australia</p>
            <p>
              <span className="card-description">Capital: </span>
              Canberra
            </p>
            <p>
              <span className="card-description">Population: </span>
              26,000,000
            </p>
            <p>
              <span className="card-description">Interesting Facts: </span>
              Australia is the world's largest island and smallest continent.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">France</p>
            <p>
              <span className="card-description">Capital: </span>
              Paris
            </p>
            <p>
              <span className="card-description">Population: </span>
              65,000,000
            </p>
            <p>
              <span className="card-description">Interesting Facts: </span>
              France is the most visited country in the world.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">Egypt</p>
            <p>
              <span className="card-description">Capital: </span>
              Cairo
            </p>
            <p>
              <span className="card-description">Population: </span>
              115,000,000
            </p>
            <p>
              <span className="card-description">Interesting Facts: </span>
              Egypt is home to the ancient pyramids, one of the Seven Wonders of the Ancient World.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
