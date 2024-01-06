import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommentsSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch("https://sardorfarhodogli.pythonanywhere.com/comments/")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: true,
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
            <p>{item.comment.slice(0, 50)}</p>
            <div className="commenter">
              <h3>{item.name}</h3>
              <h4>{item.job}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentsSlider;
