import React from "react";
import styled from "styled-components";

// const PC = window.innerWidth > 1024;

const Home = () => {
  return <S.container>{/* <p>h</p> */}</S.container>;
};

const S = {
  container: styled.div`
    width: 54.375rem;
    height: 35.56531rem;
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 50px 0px rgba(190, 4, 255, 0.1);
    margin-bottom: 5rem;
    @media screen and (min-width: 1024px) {
      float: right;
    }
  `,
};

export default Home;
