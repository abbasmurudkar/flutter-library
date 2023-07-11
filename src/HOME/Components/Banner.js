import React from "react";
import { styled } from "styled-components";
import icon from "../../ASSETS/Frame.png";
import banner from "../../ASSETS/netflix.jpg";
const Banner = () => {
  return (
    <Poster>
      <div className="Header">
        <h1>Open Source UI</h1>
        <h1>elements for any project</h1>
        <p>
          Create share and use
          <img src={icon} alt="loading" />
          beautiful custom
        </p>
        <p>elements made with css</p>
      </div>
      <div className="Carousel">
        <div className="ban-img"></div>
        <button className="btn btn-hov">Browse all elements</button>
      </div>
    </Poster>
  );
};

export default Banner;
const Poster = styled.div`
  width: 100%;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  .Carousel {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 824px;
    .ban-img {
      height: 700px;
      width: 100%;
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(23, 23, 23, 100)
        ),
        url(${banner});
    }
  }
  .Header {
    padding: 120px 108px 80px 108px;
    h1 {
      text-align: center;
      font-weight: 700;
      line-height: 60px;
      font-size: 45px;
      padding: 5px;
    }
    p {
      color: #9ca3af;
      font-size: 14px;
      text-align: center;
      font-weight: 600;
      line-height: 22.4px;
    }
  }
`;