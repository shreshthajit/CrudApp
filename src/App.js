import React from "react";
import "/home/shreshthajit/Desktop/Live_Projects_react/Customized-fluid-project-with-webpack-and-react/src/App.css";
import "/home/shreshthajit/Desktop/Live_Projects_react/Customized-fluid-project-with-webpack-and-react/src/App.scss";
// import "/home/shreshthajit/Desktop/Live_Projects_react/Customized-fluid-project-with-webpack-and-react/src/sass/index.scss";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Responsive from "./component/Slick-slider";
import { motion } from "framer-motion";
import Images from "./Images";
import { useState, useRef, useEffect } from "react";
const App = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth);
    // console.log(carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div class="container">
      <button class="btn btn-secondary text-white font-md dropdown-toggle">
        Text
      </button>

      <p class="mb-2">Figma Buttons</p>
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="row gap-1">
        <div class="col-12-xs col-6-md col-12-lg">
          <div class="card p-0">
            <div className="row">
              <div className="col-12-xs col-6-md col-2-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle-left ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-1-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-left "></button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-left "></button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-left"></button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md  dropdown-toggle-left "></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row gap-1">
        <div class="col-12-xs col-6-md col-12-lg">
          <div class="card p-0">
            <div className="row">
              <div className="col-12-xs col-6-md col-2-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md dropdown-toggle-left ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-1-lg">
                <div className="row p-1">
                  <button class="btn-primary text-white font-md dropdown-toggle-left "></button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-md-light text-white font-md dropdown-toggle-left "></button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-lg-light text-white font-md dropdown-toggle-left"></button>
                </div>
                <div className="row p-1">
                  <button class="btn-primary-none text-white font-md  dropdown-toggle-left "></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row gap-1 pt-4">
        <div class="col-12-xs col-6-md col-12-lg">
          <div class="card p-0">
            <div className="row">
              <div className="col-12-xs col-6-md col-2-lg">
                <div className="row p-1">
                  <button class="btn-akira-red text-white font-md dropdown-toggle ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-md-light text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-lg-light text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-none text-white font-md dropdown-toggle  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-akira-red text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-md-light text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-lg-light text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-none text-white font-md dropdown-toggle-mixed  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-akira-red text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-md-light text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-lg-light text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-none text-white font-md dropdown-toggle-down  ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-3-lg">
                <div className="row p-1">
                  <button class="btn-akira-red text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-md-light text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-lg-light text-white font-md dropdown-toggle-left  ">
                    Text
                  </button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-none text-white font-md dropdown-toggle-left ">
                    Text
                  </button>
                </div>
              </div>

              <div className="col-12-xs col-6-md col-1-lg">
                <div className="row p-1">
                  <button class="btn-akira-red text-white font-md dropdown-toggle-left "></button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-md-light text-white font-md dropdown-toggle-left "></button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-lg-light text-white font-md dropdown-toggle-left"></button>
                </div>
                <div className="row p-1">
                  <button class="btn-akira-red-none text-white font-md  dropdown-toggle-left "></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Responsive />

      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {Images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default App;
