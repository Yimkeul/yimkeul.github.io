import React, { useState } from "react";
import styled from "styled-components";
import { point, main, purple, SkillSet, InfoBox } from "../components";
import { profile } from "../images";
import {
  MdPerson,
  MdOutlineDateRange,
  MdEmail,
  MdLink,
  MdPlayArrow,
} from "react-icons/md";

const About = () => {
  const [isMore, setMore] = useState(false);
  const handleMore = () => {
    setMore(!isMore);
  };
  return (
    <S.container id="about">
      <S.inner>
        <S.section>
          About Me
          <S.bar />
        </S.section>
        <S.row>
          <S.imgBox>
            <img src={profile} alt="profile" />
          </S.imgBox>
          <S.content>
            <S.title>안녕하세요 👋🏻</S.title>
            <S.desc>
              개발로 즐거운 경험을 제공하기 위해 노력하는 개발자 이세준입니다.
              <br /> 다양한 도구와 기술을 습득하고 활용해 문제를 유연하게 대응할
              수 있는 개발자로 성장하고자 합니다.
            </S.desc>
            {isMore ? (
              <>
                <S.infoLabel
                  onClick={() => handleMore()}
                  style={{ cursor: "pointer" }}
                >
                  <MdPlayArrow
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      transform: "rotate(90deg)",
                    }}
                    color={purple}
                  />
                  <S.moreText>더보기</S.moreText>
                </S.infoLabel>
                <br />
                <SkillSet />
              </>
            ) : (
              <S.infoLabel
                onClick={() => handleMore()}
                style={{ cursor: "pointer" }}
              >
                <MdPlayArrow
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  color={purple}
                />
                <S.moreText>더보기</S.moreText>
              </S.infoLabel>
            )}
            <S.line />
            <S.infoBox>
              <S.row>
                <S.infoArea1>
                  <InfoBox icon={<MdPerson />} desc={"이세준 Lee SeJun"} />
                  <InfoBox icon={<MdOutlineDateRange />} desc={"1999.02.10"} />
                  <InfoBox icon={<MdEmail />} desc={"leesjun29@gmail.com"} />
                </S.infoArea1>
                <S.infoArea2>
                  <S.hyperLink
                    href="https://github.com/yimkeul"
                    target="_blank"
                  >
                    <InfoBox icon={<MdLink />} desc={"github"} />
                  </S.hyperLink>
                  {/* <S.hyperLink href="https://velog.io/@yimkeul" target="_blank">
                    <InfoBox icon={<MdLink />} desc={"velog"} />
                  </S.hyperLink> */}
                  <S.hyperLink
                    href="https://www.linkedin.com/in/%EC%84%B8%EC%A4%80-%EC%9D%B4-209456248/"
                    target="_blank"
                  >
                    <InfoBox icon={<MdLink />} desc={"linked In"} />
                  </S.hyperLink>
                </S.infoArea2>
              </S.row>
            </S.infoBox>
          </S.content>
        </S.row>
      </S.inner>
    </S.container>
  );
};

const S = {
  hyperLink: styled.a`
    text-decoration: none;
    &:hover {
      color: ${() => point};
    }
  `,

  container: styled.div`
    width: 52rem;
    min-height: 30rem;
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(161, 117, 255, 0.3);
    margin-bottom: 5rem;
    float: right;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
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
  row: styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }
  `,
  imgBox: styled.div`
    margin-top: 2.87rem;
    margin-right: 2.87rem;
    @media screen and (max-width: 1023px) {
      margin-right: 0;
      align-self: center;
    }
  `,
  content: styled.div`
    width: 30.75rem;
    margin-top: 2.87rem;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
  `,

  title: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  desc: styled.div`
    width: 30.75rem;
    color: black;
    font-size: 1.2rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    margin-block: 1.5rem;
    @media screen and (max-width: 1023px) {
      width: auto;
      margin-top: 0.5rem;
      font-weight: 500;
      line-height: 2rem;
    }
  `,
  line: styled.div`
    width: 100%;
    height: 0.125rem;
    background: #cdcdcd;
    margin-top: 1.13rem;
  `,
  infoBox: styled.div`
    margin-top: 2.13rem;
  `,
  infoLabel: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,

  infoArea1: styled.div`
    flex: 2;
    @media screen and (max-width: 1023px) {
      flex: 1;
    }
  `,
  infoArea2: styled.div`
    flex: 1;
  `,
  moreText: styled.span`
    background: ${() => main};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.5rem;
  `,
  cerBox: styled.div`
    color: #000;
    font-size: 0.9375rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 1.8rem;
    white-space: pre-line;
  `,
};

export default About;
