import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BuyPackCollectionWrapper,
  BuyPackSectionWrapper,
  BuyPackSlider,
  BuyPackTextWrapper,
  BuyPackWrapper,
} from "./styles";
import { Navigation } from "swiper";
import { BuyCard } from "../../components";
import { BuyDetailsSection } from "./BuyDetailsSection";
import { useNavigate } from "react-router-dom";

export const BuyPackSection: React.FC = () => {
  const navigate = useNavigate();
  const [detailsView, setDetailsView] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>("");

  useEffect(() => {
    setCurrentUser(localStorage.getItem("auth"));
  }, []);

  const handleBuyClick = (id: string | number) => {};

  const handleCardClick = (id: string | number) => {
    currentUser ? setDetailsView(true) : navigate("/signup");
  };

  const handleDetailsClose = () => {
    setDetailsView(false);
  };

  return (
    <BuyPackSectionWrapper isview={detailsView ? "true" : undefined}>
      <BuyPackWrapper>
        <h2>Buy Card Packs</h2>
        <BuyPackCollectionWrapper>
          <BuyPackTextWrapper>
            <h3>Main Collection</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam lorem ipsum lia. aliqua dolor do amet sint.
              Velit officit.
            </p>
          </BuyPackTextWrapper>
          <BuyPackSlider>
            <Swiper
              slidesPerView={3}
              spaceBetween={42}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {[...new Array(5)].map((item, key) => (
                <SwiperSlide key={key}>
                  <BuyCard
                    cardType="standard"
                    price={50}
                    onBuyClick={handleBuyClick}
                    onCardClick={handleCardClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </BuyPackSlider>
        </BuyPackCollectionWrapper>
        <BuyPackCollectionWrapper>
          <BuyPackTextWrapper>
            <h3>Holiday Collection</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam lorem ipsum lia. aliqua dolor do amet sint.
              Velit officit.
            </p>
          </BuyPackTextWrapper>
          <BuyPackSlider>
            <Swiper
              slidesPerView={3}
              spaceBetween={42}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {[...new Array(5)].map((item, key) => (
                <SwiperSlide key={key}>
                  <BuyCard
                    cardType="standard"
                    price={50}
                    onBuyClick={handleBuyClick}
                    onCardClick={handleCardClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </BuyPackSlider>
        </BuyPackCollectionWrapper>
        <BuyPackCollectionWrapper>
          <BuyPackTextWrapper>
            <h3>Sports Collection</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam lorem ipsum lia. aliqua dolor do amet sint.
              Velit officit.
            </p>
          </BuyPackTextWrapper>
          <BuyPackSlider>
            <Swiper
              slidesPerView={3}
              spaceBetween={42}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {[...new Array(5)].map((item, key) => (
                <SwiperSlide key={key}>
                  <BuyCard
                    cardType="standard"
                    price={50}
                    onBuyClick={handleBuyClick}
                    onCardClick={handleCardClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </BuyPackSlider>
        </BuyPackCollectionWrapper>
        <BuyDetailsSection
          id={"1"}
          isView={detailsView}
          onClose={handleDetailsClose}
        />
      </BuyPackWrapper>
    </BuyPackSectionWrapper>
  );
};
