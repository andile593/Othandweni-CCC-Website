import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Sermons.css";

const Sermons = () => {
  return (
    <>
      <div className="sermons-block-container">
        <h2 className="section-title roboto-bold">Featured Sermons</h2>
        <Swiper slidesPerView={"auto"} spaceBetween={30} className="sermons-card-container mySwiper">
          <SwiperSlide className="featured sermon-card1">
            <p className="label roboto-medium">Sermon</p>
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
              <button className="featured-color card-btn roboto-bold">
                Watch Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="featured sermon-card2">
            <p className="label roboto-medium">Teaching Series</p>
            <h1 className="card-title roboto-bold">The Power of Prayer</h1>
            <p className="card-description roboto-light">
              Dive into this in-depth series as we explore the different aspects
              of prayer—how to pray, why it matters, and how it can transform
              your life.
            </p>
            <div className="card-details">
              <div className="details">
                <p className="pastor-name roboto-medium">Ongoing</p>
              </div>
              <button className="featured-color card-btn roboto-bold">
                Series
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sermons-block-container">
        <h2 className="section-title roboto-bold">Recent Sermons</h2>
        <Swiper slidesPerView={"auto"} spaceBetween={30} className="sermons-card-container mySwiper">
          <SwiperSlide className="recent sermon-card1">
            <p className="label roboto-medium">Sermon</p>
            <h1 className="card-title roboto-bold">
              Overcoming Doubt Through Faith
            </h1>
            <p className="card-description roboto-light">
              Discover how to trust God in uncertain times and live boldly by
              faith, not fear.
            </p>
            <div className="card-details">
              <div className="details">
                <p className="pastor-name roboto-medium">Pastor Mashinini</p>
                <p className="card-date roboto-light">
                  Sunday, September 29, 2024
                </p>
              </div>
              <button className="recent-color card-btn roboto-bold">
                Watch Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="recent sermon-card2">
            <p className="label roboto-medium">Teaching Series</p>
            <h1 className="card-title roboto-bold">The Power of Prayer</h1>
            <p className="card-description roboto-light">
              Dive into this in-depth series as we explore the different aspects
              of prayer—how to pray, why it matters, and how it can transform
              your life.
            </p>
            <div className="card-details">
              <div className="details">
                <p className="pastor-name roboto-medium">Ongoing</p>
              </div>
              <button className="recent-color card-btn roboto-bold">
                Series
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sermons-block-container">
        <h2 className="section-title roboto-bold">Teaching Series</h2>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          className="sermons-card-container mySwiper"
        >
          <SwiperSlide className="bg1 teachings-card">
            <h2 className="teaching-card-title roboto-bold">
              The Power of Prayer
            </h2>
            <div className="teaching-details">
              <p className="teaching-description roboto-regular">
                6-part Series
              </p>
              <button className="teaching-cta roboto-bold">View Series</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg2 teachings-card">
            <h2 className="teaching-card-title roboto-bold">
              The Power of Prayer
            </h2>
            <div className="teaching-details">
              <p className="teaching-description roboto-regular">
                8-part Series
              </p>
              <button className="teaching-cta roboto-bold">View Series</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sermons;
