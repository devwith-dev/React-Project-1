import React, { useRef } from "react";
import { Carousel } from "antd";
import image from "../images/about_1.jpg";
import "./Section_3.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Section_3() {
  const ref = useRef();
  return (
    <div className="section3">
      <div className="section-top">
        <div className="text">
          <span>WHAT WE SERVE</span>
          <h2>We Provide Top Destinations</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div />
        <div className="buttons">
          <button
            onClick={() => {
              ref.current.prev();
            }}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => {
              ref.current.next();
            }}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="carousel">
        <Carousel autoplay slidesToShow={3} ref={ref} dots={false}>
          <div className="carousel_div">
            <img style={{ height: "500px", width: "415px" }} src={image} />
            <p href="3">Enjoy the beauty of Maldives</p>
            <span>Maldives, Republic Maldives</span>
            <div className="price">
              <span>$499</span>
            </div>
          </div>
          <div className="carousel_div">
            <img style={{ height: "500px", width: "415px" }} src={image} />
            <p href="3">Enjoy the beauty of Maldives</p>
            <span>Maldives, Republic Maldives</span>
            <div className="price">
              <span>$499</span>
            </div>
          </div>
          <div className="carousel_div">
            <img style={{ height: "500px", width: "415px" }} src={image} />
            <p href="3">Enjoy the beauty of Maldives</p>
            <span>Maldives, Republic Maldives</span>
            <div className="price">
              <span>$499</span>
            </div>
          </div>
          <div className="carousel_div">
            <img style={{ height: "500px", width: "415px" }} src={image} />
            <p href="3">Enjoy the beauty of Maldives</p>
            <span>Maldives, Republic Maldives</span>
            <div className="price">
              <span>$499</span>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
