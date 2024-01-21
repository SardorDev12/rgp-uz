import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoPerson } from "react-icons/io5";

const CommentsSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch("http://back.rgp.uz/comments/")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="slider-content">
            <p className="comment">{item.comment}</p>
            <div className="commenter">
              <IoPerson />
              <div className="commenter-info">
                <h3>{item.name}</h3>
                <h4>{item.job}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentsSlider;
