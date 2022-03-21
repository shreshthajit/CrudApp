import React from "react";
 import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "/home/shreshthajit/Desktop/Live_Projects_react/Customized-fluid-project-with-webpack-and-react/src/component/Slick-slider.css";
import Images from "/home/shreshthajit/Desktop/Live_Projects_react/Customized-fluid-project-with-webpack-and-react/src/Images.js";

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className="container justify-content-center">
        {/* <div className="ml-4 mr-4">
            <h1>1</h1>
          </div >
          <div className="ml-4 mr-4">
            <h1>2</h1>
          </div>
          <div className="ml-4 mr-4">
            <h1>3</h1>
          </div>
          <div className="ml-4 mr-4">
            <h1>4</h1>
          </div>
          <div className="ml-4 mr-4">
            <h1>5</h1>
          </div> */}

        {Images.map((image) => {
          return (
            <div className="items">
              <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Responsive;
