import React from 'react'
import { styled } from 'styled-components'
import user from "../../ASSETS/user1.png";
import icon2 from "../../ASSETS/icon2.png";
import user2 from "../../ASSETS/user2.png";
import user3 from "../../ASSETS/user3.png";
import user4 from "../../ASSETS/user4.png";
import user5 from "../../ASSETS/user5.png";
import user6 from "../../ASSETS/user6.png";
import {Tag } from "rsuite";
const Users = () => {
const users = [
        {
          tag:"1",
          img:user,
          name:"alexurix",
          logo:icon2,
          no:"36",
          post:"posts",
          likes:"60505"
        },
        {
          tag:"2",
          img:user2,
          name:"mrhyddenn",
          logo:icon2,
          no:"49",
          post:"posts",
          likes:"57860"
        },
        {
          tag:"3",
          img:user3,
          name:"andrew-demchenk0",
          logo:icon2,
          no:"118",
          post:"posts",
          likes:"60505"
        },
        {
          tag:"4",
          img:user4,
          name:"Praashoo7",
          logo:icon2,
          no:"39",
          post:"posts",
          likes:"49920"
        },
        {
          tag:"5",
          img:user5,
          name:"satyamchaudh..",
          logo:icon2,
          no:"35",
          post:"posts",
          likes:"53460"
        },
        {
          tag:"6",
          img:user6,
          name:"Nawsome",
          logo:icon2,
          no:"41",
          post:"posts",
          likes:"58240"
        }
      
      ]

  return (
    
    <TextualContent>
    <div className="text">
      <div className="community box">
        <h1>2,272</h1>
        <p>
          Community-made UI
          <br />
          elements
        </p>
      </div>
      <div className="commercial box">
        <h1>100%</h1>
        <p>
          Free for personal and
          <br />
          commercial use
        </p>
      </div>
      <div className="contributer box">
        <h1>32,717</h1>
        <p>
          Contributer to the
          <br />
          community
        </p>
      </div>
    </div>
    <div className="Creators">
      <div className="Headers">
        <h2>Creators</h2>
      </div>
       <div className="Users" >
      {users.map((items,key)=>{
          return<div className="user-details">
            <div className="logo">
              <Tag>
                <p style={{ background: "transparent", color: "black" }}>{items.tag}</p>
              </Tag>
              <img src={items.img} alt="loading" />
            </div>
            <div className="info">
              <p>{items.name}</p>
              <div className="likes">
              <img src={items.logo} alt="loading" />
              <p style={{ display: "inline-block", marginLeft: "5px" }}>
                {items.likes}
              </p>
              </div>
            </div>
            <div className="posts">
              <h3>{items.no}</h3>
              <p>{items.post}</p>
            </div>
          </div>
      })
    }
    </div>
      </div>
    <div className="Discord"><p>See all</p></div>
  </TextualContent>
  )
}

export default Users

const TextualContent = styled.div`
  width: 100%;
  z-index: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .Discord{
      p{
        font-weight: 600;
        font-size: 18px;
        height: 19px;
        line-height: 24px;
        margin-top:15px;
        cursor:pointer;
      }
    }
  .text {
    padding: 50px 400px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    flex-shrink: 0;
    .box {
      width: 180px;
      height: 117px;
      text-align: center;
      gap: 8px;
      p {
        font-size: 14px;
        color: #9c9c9c;
        line-height: 20px;
        font-weight: 400;
      }
      h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
  .Creators {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Headers {
      text-align: center;
    }
  }
  .Users {
    width: 1100px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 355px 360px 350px;
    gap: 20px;
    .user-details {
      width: 340px;
      height: 110px;
      flex-shrink: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .logo {
        width: 70px;
        height: 100%;
        .rs-tag-default {
          position: relative;
          top: 7px;
          right: 10px;
        }
        img {
          width: 100%;
          height: 60px;
        }
      }
      .info{
        width: 100px;
        height: 100%;
        text-align: left;
        justify-content: center;
        display: flex;
        flex-direction: column;
        p{
          display: block;
          font-weight: 600;
          line-height: normal;
        }
        .likes{
          display: flex;
        }
      }
    }
    .posts{
      border-left: 1px solid #9C9C9C;
      width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 22px;
      p{
        color: #9C9C9C;
      }

    }
    
  }
  
`;