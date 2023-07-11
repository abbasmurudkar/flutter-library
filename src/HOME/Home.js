import React from "react";
import { styled } from "styled-components";
import LOGO from "../ASSETS/Logo.png";
import { Link } from "react-router-dom";

import "../global.css";

import Banner from "./Components/Banner";
import Users from "./Components/Users";
import Footer from "./Components/Footer";

const Navs = [
  {
    p: "Browse",
    Link: "/admin",
  },
  {
    p: "Extension",
    Link: "/admin",
  },
  {
    p: "Creators",
    Link: "/admin",
  },
];
const Home = () => {
  return (
    <div className="Content">
      <NavBar>
        <div className="logo">
          <img alt="Loading" src={LOGO} />
          <p>CodeFly</p>
        </div>
        <div className="Navigations">
          {Navs.map((items, key) => {
            return (
              <div key={key}>
                <Link to={items.Link}>
                  <p>{items.p}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </NavBar>
      <Banner/>
      <Users/>
      
     <Footer/>
    </div>
  );
};

export default Home;
const Content = styled.div``;
const NavBar = styled.div`
  border: 2px solid #181818;
  width: 100%;
  padding: 12px 20px 12px 27px;
  z-index: 1;
  position: fixed;
  display: inline-flex;
  align-items: center;
  gap: 58px;
  .logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: stretch;
  }
  p {
    margin-left: 2px;
    padding: 5px;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
  }
  .Navigations {
    display: inline-flex;
    padding: 12px 23.41px 11px 24px;
    gap: 59.59px;
    p {
      font-weight: 600;
      font-style: normal;
      font-size: 16px;
      line-height: normal;
    }
    a {
      text-decoration: none;
      transition: 0.3s all ease-out;
      :hover {
        transform: scale(1.1);
      }
    }
  }`;

  

