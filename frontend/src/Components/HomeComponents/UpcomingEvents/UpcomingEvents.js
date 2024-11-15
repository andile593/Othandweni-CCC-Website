import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./UpcomingEvents.css";
import img1 from "../../../Assets/ben-white-W8Qqn1PmQH0-unsplash.jpg";

const UpcomingEvents = () => {
  // use swiper slide per view swiper.js
  return (
    <div className="upe-container">
      <h2 className="section-title roboto-bold">Upcoming Events</h2>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          740: { slidesPerView: 2 },
        }}
        spaceBetween={10}
        className="mySwiper events"
      >
        <SwiperSlide className="event-container">
          <img src={img1} alt="A bible" className="event-image" />
          <div className="event-info">
            <h3 className="event-title roboto-bold">Community outreach day</h3>
            <div className="event-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#007AFF"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
              </svg>
              <p className="date roboto-regular">Saturday, October 19, 2024</p>
            </div>
            <div className="event-location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#007AFF"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <p className="location roboto-regular">
                5537 Motsweni St, Duduza, Brakpan, 1494
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="event-container">
          <img src={img1} alt="A bible" className="event-image" />
          <div className="event-info">
            <h3 className="event-title roboto-bold">Community outreach day</h3>
            <div className="event-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#007AFF"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
              </svg>
              <p className="date roboto-regular">Saturday, October 19, 2024</p>
            </div>
            <div className="event-location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#007AFF"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <p className="location roboto-regular">
                5537 Motsweni St, Duduza, Brakpan, 1494
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="event-container">
          <img src={img1} alt="A bible" className="event-image" />
          <div className="event-info">
            <h3 className="event-title roboto-bold">Community outreach day</h3>
            <div className="event-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#007AFF"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
              </svg>
              <p className="date roboto-regular">Saturday, October 19, 2024</p>
            </div>
            <div className="event-location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#007AFF"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <p className="location roboto-regular">
                5537 Motsweni St, Duduza, Brakpan, 1494
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UpcomingEvents;
