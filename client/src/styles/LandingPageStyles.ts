import styled from "styled-components";
import { devices } from "./Sizes";

export const LandingPageStyle = styled.div`
  margin-bottom: 130px;
`;

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  height: 40px;
  background-color: var(--white);

  h1 {
    letter-spacing: 3px;
    cursor: pointer;
  }
`;

export const CarouselStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  // margin: 64px 32px;
  padding: 32px 0px;
  height: calc(100vh - 300px);

  .swiper {
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary-dark);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary-dark);
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .swiper img {
      margin: 0 auto;
      width: auto;
      height: 100%;
      opacity: 0.8;
  }

  @media ${devices.mobile} {
    .swiper img {
      width: 100%;
      height: auto;
    }
  }
`;

export const FeaturesStyles = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  padding: 48px 0;
  width: 100%;
  height: 130px;
  background-color: var(--primary-light);

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .feature img {
    margin-bottom: 16px;
    width: 40px;
    height: auto;
  }

  button {
    display: block;
    margin: 32px auto 0 auto;
    padding: 10px 32px;
  }

  @media ${devices.mobile} {
    .features {
        display: flex;
        flex-direction: column;
    }

    .features > * + * {
        margin-top: 32px;
    }
  }
`;
