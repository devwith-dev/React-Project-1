import React from "react";
import { Carousel } from "antd";
import "./Section_4.css";
// import Faq from "react-faq-component";
import Faq from "./Faq";
import person1 from "../images/Testimonails/person-1.jpg";
import person2 from "../images/Testimonails/person-2.jpg";
import person3 from "../images/Testimonails/person-3.jpg";

// const data = {
//   rows: [
//     {
//       title: "How to download and register?",
//       content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
//     },
//     {
//       title: "How to create your paypal account?",
//       content:
//         "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth",
//     },
//     {
//       title: "How to link your paypal and bank account?",
//       content: `When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. `,
//     },
//     {
//       title: "We are better than others?",
//       content:
//         "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
//     },
//   ],
// };

// const styles = {
//   // bgColor: 'white',
//   titleTextColor: "black",
//   rowTitleColor: "#fc8621",
//   // rowContentColor: 'grey',
//   // arrowColor: "red",
// };

// const config = {
//   animate: true,
//   arrowIcon: "V",
//   openOnload: 0,
//   expandIcon: "+",
//   collapseIcon: "-",
// };

export const Section_4 = () => {
  return (
    <div className="section4">
      <div className="testimonials">
        <span>HAPPY CUSTOMER</span>
        <h2>Testimonials</h2>
        <Carousel autoplay dots={false}>
          <div className="car_div">
            <img src={person1} className="review-img"></img>
            <h3>John Doe</h3>
            <span>Product Designer at Apple</span>
            <div className="quote">“</div>
            <p>
              "When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline of Alphabet Village and the subline of her own road,
              the Line Lane. Pityful a rethoric question ran over her cheek,
              then she continued her way"
            </p>
          </div>
          <div className="car_div">
            <img src={person2} className="review-img"></img>
            <h3>John Doe</h3>
            <span>Designer at Meta</span>
            <div className="quote">“</div>
            <p>
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean."
            </p>
          </div>
          <div className="car_div">
            <img src={person3} className="review-img"></img>
            <h3>John Doe</h3>
            <span>CEO, Founder</span>
            <div className="quote">“</div>
            <p>
              "A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth."
            </p>
          </div>
        </Carousel>
      </div>
      <div className="faq">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <Faq />
        {/* <div className="faq-main">
          <Faq data={data} styles={styles} config={config} />
        </div> */}
      </div>
    </div>
  );
};
