import { useAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  LandingPageStyle,
  HeaderStyles,
  CarouselStyles,
  FeaturesStyles,
} from "styles/LandingPageStyles";

import calendarView from "../images/carousel/calendar-view.png";
import searchView from "../images/carousel/search-view.png";
import lessonPlans from "../images/sidebar/lesson-plans.svg";
import search from "../images/sidebar/search.svg";
import courses from "../images/sidebar/courses.svg";

const features = [
  {
    img: lessonPlans,
    text: "Plan Lessons On The Go",
  },
  {
    img: search,
    text: "Search Lessons By Tags",
  },
  {
    img: courses,
    text: "Lessons Organized Automatically",
  },
];

function LandingPage() {
  const { isCheckingAuth, user } = useAuth();
  const navigate = useNavigate();

  return (
    <LandingPageStyle>
      <HeaderStyles>
        <h1 onClick={() => navigate("/my-notum")}>Notum</h1>
        {isCheckingAuth ? (
          <p>{user?.name}</p>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </HeaderStyles>
      <CarouselStyles>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <div className="img-container">
              <img src={calendarView} alt="Notum Calendar View" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={searchView} alt="Notum Calendar View" />
            </div>
          </SwiperSlide>
        </Swiper>
      </CarouselStyles>
      <FeaturesStyles>
        <div className="features">
          {features.map((feature, index) => {
            return (
              <div className="feature" key={index}>
                <img src={feature.img} alt={feature.text} />
                <h4>{feature.text}</h4>
              </div>
            );
          })}
        </div>
        <button onClick={() => navigate("/signup")}>Get Started!</button>
      </FeaturesStyles>
    </LandingPageStyle>
  );
}

export default LandingPage;
