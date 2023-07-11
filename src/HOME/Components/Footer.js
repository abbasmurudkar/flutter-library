import React from "react";
import { styled } from "styled-components";
import logo from "../../ASSETS/Logo.png";
import Instagram from "@rsuite/icons/legacy/Instagram";
import Twitter from "@rsuite/icons/legacy/Twitter";
import Discrod from "../../ASSETS/btnlogo.png";
const Footer = () => {
  return (
    <Content>
    <BottomFooter>
      <div className="footer-box">
        <div className="info">
          <div className="box">
            <div className="logo">
              <img src={logo} alt="loading" />
              <p className="paragraph"> CodeFly</p>
            </div>
            <p className="footer-info">
              Universe of UI; Hundreds of Open
              <br /> Source UI elements
            </p>
          </div>
          <div className="box2">
            {<Instagram />}
            {<Twitter />}
            <img src={Discrod} alt="loading" />
          </div>
        </div>
        <div className="privacy">
          <div className="content-1">
            <p className="paragraph">information</p>
            <p className="para">Post guidelines</p>
          </div>
          <div className="content-2">
          <p className="paragraph">Legal</p>
          <p className="para">Terms and Conditions</p>
          <p className="para">Privacy policy</p>
          <p className="para">Cookie policy</p>
          <p className="para">Disclaimer</p>
          </div>
        </div>
      </div>
    </BottomFooter>
    <div className="rights">
      <p>© 2023 Pixel Galaxies. All rights reserved. - Uiverse.io</p>
    </div>
    </Content>
  );
};

export default Footer;
const Content = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
.rights{
  width: 90%;
  height: 50px;
  p{
    line-height: 20px;
    font-size: 14px;
    color: #6B7280;
    padding:20px;
    
  }

  
}
`;
const BottomFooter = styled.div`
  width: 100%;
  margin-top: 150px;
  height: 327.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 327.5px;
  .footer-box {
    width: 90%;
    padding: 64px 32px 65px 32px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .info {
      width: 469.33px;
      height: 222.72px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .box {
        display: flex;
        flex-direction: column;
        height: 100px;
        justify-content: space-evenly;
      }
      p {
        display: inline-block;
      }
      .logo {
        justify-content: start;
      }
      .footer-info {
        font-size: 16px;
        color: #9c9c9c;
      }
      .box2 {
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 20px;
        svg {
          margin: 10px;
          color: #9c9c9c;
          cursor: pointer;
        }
        img {
          margin: 10px;
          cursor: pointer;
        }
      }
    }
    .privacy {
      width: 970.67px;
      height: 222.72px;
      display: flex;
      justify-content: end;
      .content-1 {
        width: 218.67px;
        display: flex;
        flex-direction: column;
        padding-right: 10px;
       
      }

      .content-2 {
        width: 218.67px;
        display: flex;
        flex-direction: column;
        padding:0px 2px 21px 0px;
      }
    }
  }
  .para {
          font-size: 14px;
          font-weight: 400;
          margin-top: 25px;
          display: inline-flex;
          color: #F2F2F2;
          cursor: pointer;
          transition: 0.2s all ease-in-out;
        }
        .para:hover{
              transform: scale(1.1);
            }
`;
