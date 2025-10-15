import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="section-title roboto-bold">Our Services</h2>
      <div className="service-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#007AFF"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
        </svg>
        <div className="title-cont">
          <h4 className="title roboto-medium">Sunday worship: </h4>
          <p className="service-time roboto-regular"> 9:00 AM & 11:00 AM</p>
        </div>
        <p className="service-info roboto-regular">
          Join us for dynamic worship, uplifting music, and an inspiring message
          that will strengthen your faith.
        </p>
      </div>
      <div className="service-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#007AFF"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
        </svg>
        <div className="title-cont">
          <h4 className="title roboto-medium">Midweek Bible Study: </h4>
          <p className="service-time roboto-regular"> Wednesdays at 7:00 PM</p>
        </div>
        <p className="service-info roboto-regular">
          Dive deeper into the Word as we explore scripture, grow in
          understanding, and encourage one another in our spiritual journeys.
        </p>
      </div>
      <div className="service-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#007AFF"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
        </svg>
        <div className="title-cont">
          <h4 className="title roboto-medium">Youth & Children's Ministry:</h4>
          <p className="service-time roboto-regular">Sundays at 9:00 AM</p>
        </div>
        <p className="service-info roboto-regular">
          Join us for dynamic worship, uplifting music, and an inspiring message
          that will strengthen your faith.
        </p>
      </div>
    </div>
  );
};

export default Services;
