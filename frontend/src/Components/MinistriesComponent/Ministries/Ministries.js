import "./Ministries.css";

const Ministries = () => {
  return (
    <div className="ministries-container">
      <h3 className="intro-text roboto-medium">
        We believe in building a community through our ministries where people
        can grow in faith, form deep relationships, and serve others. Whether
        you’re young or old, there’s a place for you at Othandweni Ethiopian
        Christians Church.
      </h3>

      <div className="ministry-groups">
        <div className="ministry">
          <div className="ministry-image image1"></div>
          <div className="ministry-content">
            <h3 className="ministry-title roboto-bold">Youth Ministry</h3>
            <p className="ministry-description roboto-light">
              Our Youth Ministry is a dynamic and energetic group that meets
              every week to grow in faith, build friendships, and make a
              difference in the world.
            </p>
            <p className="meeting-content roboto-light">
              <b>Meeting:</b> Sunday at 10 AM
            </p>
            <p className="location-content roboto-light">
              <b>Location:</b> 5537 Motsweni St, Duduza, Brakpan, 1494
            </p>
            <button className="ministry-cta cta1 roboto-bold">
              Join the Youth Group
            </button>
          </div>
        </div>
        <div className="ministry">
          <div className="ministry-image image2"></div>
          <div className="ministry-content">
            <h3 className="ministry-title roboto-bold">Women’s Ministry</h3>
            <p className="ministry-description roboto-light">
              Our Women’s Ministry is a space where women of all ages come
              together to encourage one another, share experiences, and grow in
              faith.
            </p>
            <p className="meeting-content roboto-light">
              <b>Meeting:</b> Wednesdays at 6 PM
            </p>
            <p className="location-content roboto-light">
              <b>Location:</b> 5537 Motsweni St, Duduza, Brakpan, 1494
            </p>
            <button className="ministry-cta cta2 roboto-bold">
            Connect with the Women’s Ministry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
