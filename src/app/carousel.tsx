"use client";

import { PRICE_STR } from "@/app/config";
import { useRef } from "react";

export default function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carousel.current) return;

    const width = carousel.current.children[0].clientWidth;
    const scrollAmount = direction === "left" ? -width : width;

    const childrenSize = carousel.current.children.length * width;
    const clientWidth = carousel.current.clientWidth;
    const maxScroll = childrenSize - clientWidth;
    const curScroll = carousel.current.scrollLeft;

    const newScroll = curScroll + scrollAmount;
    if (curScroll == 0 && direction === "left") {
      carousel.current.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else if (curScroll === maxScroll && direction === "right") {
      carousel.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-36 relative">
      <div
        className="absolute top-[50%] left-0 translate-y-[-50%] translate-x-[-100%] cursor-pointer"
        onClick={() => scroll("left")}
      >
        LEFT
      </div>
      <div
        ref={carousel}
        className="w-full h-full overflow-hidden whitespace-nowrap"
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
      <div
        className="absolute top-[50%] right-0 translate-y-[-50%] translate-x-[100%] cursor-pointer"
        onClick={() => scroll("right")}
      >
        RIGHT
      </div>
    </div>
  );
}

function CarouselItem() {
  return (
    <div className="carousel-item inline-block w-64 h-full bg-blue-400">
      <div className="w-full h-12 bg-purple-300" />
      <p>Victorian Couch</p>
      <p>{PRICE_STR}</p>
    </div>
  );
}
