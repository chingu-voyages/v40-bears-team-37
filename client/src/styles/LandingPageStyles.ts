import styled from "styled-components";
import { devices } from "./Sizes";

export const LandingPageStyle = styled.div`
  img {
    display: flex;
    margin: 0 auto;
    width: 60%;
    height: auto;
    opacity: 0.8;
  }
`;

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: var(--white);

  h1 {
    letter-spacing: 3px;
    cursor: pointer;
  }
`;

export const CarouselStyles = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary-dark);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary-dark);
  }
`;

export const FeaturesStyles = styled.div`
  margin-top: 64px;
  padding: 48px 0;
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
