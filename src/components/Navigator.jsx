import React from "react";
import styled from "styled-components";
import { main } from "./Colors";
import { react, swift } from "../images";
import { MdHome, MdPerson, MdOutlineStar, MdMonitor } from "react-icons/md";

const Navigator = () => {
  return (
    <S.container>
      <S.glass>
        <S.inner>
          <S.name>Se Jun</S.name>
          <br />
          <S.position>Front End Developer</S.position>
          {/*  */}
          <S.navBtn style={{ marginTop: "3.12rem" }}>
            <MdHome
              style={{ width: "1.5rem", height: "1.5rem" }}
              color="white"
            />
            <S.navTitle>Home</S.navTitle>
          </S.navBtn>

          {/*  */}
          <S.navBtn style={{ marginTop: "1rem" }}>
            <MdPerson
              style={{ width: "1.5rem", height: "1.5rem" }}
              color="white"
            />
            <S.navTitle>About</S.navTitle>
          </S.navBtn>
          {/*  */}
          <S.navBtn style={{ marginTop: "1rem" }}>
            <MdOutlineStar
              style={{ width: "1.5rem", height: "1.5rem" }}
              color="white"
            />
            <S.navTitle>EXPERIENCE</S.navTitle>
          </S.navBtn>
          {/*  */}
          <S.navBtn style={{ marginTop: "1rem" }}>
            <MdMonitor
              style={{ width: "1.5rem", height: "1.5rem" }}
              color="white"
            />
            <S.navTitle>PORTFOLIO</S.navTitle>
          </S.navBtn>
          {/*  */}
        </S.inner>
        <S.outer>
          <img src={react} alt="logo" />
          <img src={swift} alt="logo" style={{ marginLeft: "1rem" }} />
        </S.outer>
      </S.glass>
    </S.container>
  );
};

const S = {
  container: styled.div`
    background-color: ${main};
    border-radius: 3.125rem 3.125rem 0 0;
    width: 18.25rem;
    height: 22.375rem;
  `,

  glass: styled.div`
    width: 18.3125rem;
    height: 26.5rem;
    border-radius: 3.125rem;
    background: linear-gradient(
      141deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(199, 199, 199, 0.3) 100%
    );
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
  `,
  inner: styled.div`
    padding-top: 2.13rem;
    margin-left: 1.87rem;
  `,
  name: styled.span`
    color: #fff;
    font-size: 3.125rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  `,
  position: styled.span`
    color: #fff;
    font-size: 0.9375rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3.13rem;
  `,

  navBtn: styled.div`
    display: flex;
    align-items: flex-end;
  `,
  navTitle: styled.span`
    color: #fff;
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 0.94rem;
  `,
  outer: styled.div`
    padding-top: 4.125rem;
    padding-inline: 2.2rem;
    float: right;
  `,
};

export default Navigator;