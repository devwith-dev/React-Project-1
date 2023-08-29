import React, { useState } from "react";
import "./Section_5.css";
import { Link } from "react-router-dom";
import { FaAngleRight} from "react-icons/fa6";

import vlog1 from "../images/Blogs/gal_1.jpg.jpg";
import vlog2 from "../images/Blogs/gal_2.jpg.jpg";
import vlog3 from "../images/Blogs/gal_3.jpg.jpg";
import vlog4 from "../images/Blogs/gal_4.jpg.jpg";

export const Section_5 = () => {
  const [details, setDetails] = useState([
    {
      key: 1,
      img: vlog1,
      date: "May 14,2020",
      heading: "Far far away, behind the word mountains",
      descript:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
      link: "#",
    },
    {
      key: 2,
      img: vlog2,
      date: "May 14,2020",
      heading: "Far far away, behind the word mountains",
      descript:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
      link: "#",
    },
    {
      key: 3,
      img: vlog3,
      date: "May 14,2020",
      heading: "Far far away, behind the word mountains",
      descript:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
      link: "#",
    },
    {
      key: 4,
      img: vlog4,
      date: "May 14,2020",
      heading: "Far far away, behind the word mountains",
      descript:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
      link: "#",
    },
  ]);

  return (
    <div className="section5">
      <span>BLOG</span>
      <h2>Recent Posts</h2>
      <div className="blogs">
        {details.map((each, index) => (
          <div className="blog-card" key={index}>
            <img key={each.id} src={each.img} />
            <div className="blog-text">
              <p style={{ fontSize: "12px", marginTop: "20px" }}>{each.date}</p>
              <Link to="/blog">
                <h2>{each.heading}</h2>
              </Link>
              <p style={{ marginBottom: "15px" }}>{each.descript}</p>
              <Link to="/blog">
                <span>Read More<FaAngleRight/></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
