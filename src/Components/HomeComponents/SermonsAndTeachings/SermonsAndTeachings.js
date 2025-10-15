import "./SermonsAndTeachings.css";

const SermonsAndTeachings = () => {
  return (
    <div className="sermons-container">
      <h2 className="section-title roboto-bold">Sermons & Teachings</h2>
      <div className="card-container">
        <div className="card">
          <div className="front-card">
            <p className="label roboto-medium">Recent Sermon</p>
            <h1 className="card-title roboto-bold">
              Walking in Faith, Not Fear
            </h1>
            <p className="card-description roboto-light">
              Discover how to trust God in uncertain times and live boldly by
              faith, not fear.
            </p>
            <div className="card-details">
              <div className="details">
                <p className="pastor-name roboto-medium">Pastor Mashinini</p>
                <p className="card-date roboto-light">
                  Sunday, October 6, 2024
                </p>
              </div>
              <button className="card-btn roboto-bold">Watch Now</button>
            </div>
          </div>
          <div className="back-card"></div>
        </div>
        <div className="card">
          <div className="front-card frcard2">
            <p className="label roboto-medium">Teaching Series</p>
            <h1 className="card-title roboto-bold">
            The Power of Prayer
            </h1>
            <p className="card-description roboto-light">
            Dive into this in-depth series as we explore the different aspects of prayer—how to pray, why it matters, and how it can transform your life.
            </p>
            <div className="card-details">
              <div className="details">
                <p className="pastor-name roboto-medium">Ongoing</p>
            
              </div>
              <button className="card-btn roboto-bold">Series</button>
            </div>
          </div>
          <div className="back-card bkcard2"></div>
        </div>
      </div>
    </div>
  );
};

export default SermonsAndTeachings;
