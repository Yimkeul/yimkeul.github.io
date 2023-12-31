import React from "react";
import styled from "styled-components";
import { point, WorksBox } from "../components";
import { WebData } from "../assets/PortfolioData";

const PortfolioWeb = () => {
  return (
    <S.container>
      <S.inner>
        <S.section>
          <S.subTitle>Web</S.subTitle>
          <S.bar />
        </S.section>
        {/*  */}
        {WebData.map((data, i) => {
          return (
            <WorksBox
              key={i}
              img={data.Img}
              Title={data.Title}
              SubTitle={data.SubTitle}
              Desc1={data.Desc1}
              Desc2={data.Desc2}
              isDeploy={data.IsDeploy}
              link={data.link}
            />
          );
        })}
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    border-radius: 3.125rem;
    background: #fff;
    float: right;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
      height: auto;
      float: none;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      height: auto;
      float: none;
    }
  `,
  inner: styled.div`
    margin-block: 3.25rem;
    padding-inline: 3.88rem;
    @media screen and (max-width: 1023px) {
      margin: 0;
      padding-block: 3rem;
      padding-inline: 2rem;
    }
  `,
  section: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  bar: styled.div`
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${() => point};
    border-radius: 1.25rem;
  `,
  content: styled.div`
    margin-top: 2.87rem;
    flex: 1;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
  `,
  row: styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  subTitle: styled.h5`
    margin: 0;
  `,
};

export default PortfolioWeb;
