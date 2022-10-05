import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import React from "react";
import "./Carousel.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

import faroe from "../../img/faroe.jpg";
import iceland from "../../img/iceland.jpg";
import finland from "../../img/finland.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      width={"100%"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
      animations={{
        slidingAnimation: "fade",
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>
            Search your favorite <br /> place.
          </Title>
          <Subtitle>Check out the best nordic tour here.</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        className="test_slide"
        label="Faroe Island's - choose your destination"
        background={{
          backgroundImageSrc: faroe,
        }}
      />

      <Slide
        label="Iceland - choose your destination"
        background={{
          backgroundImageSrc: iceland,
        }}
      />

      <Slide
        // shouldRenderMask
        label="Finland - choose your destination"
        background={{
          backgroundImageSrc: finland,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
