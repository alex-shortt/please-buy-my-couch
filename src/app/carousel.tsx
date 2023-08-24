"use client";

import { PRICE_STR } from "@/app/config";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);

  const lastClick = useRef(0);

  const scroll = useCallback((direction: "left" | "right") => {
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
  }, []);

  useEffect(() => {
    if (!carousel.current) return;

    const interval = setInterval(() => {
      if (Date.now() - lastClick.current < 1000) return;
      scroll("right");
    }, 5000);

    return () => clearInterval(interval);
  }, [scroll]);

  const manualScroll = useCallback(
    (dir: "left" | "right") => {
      lastClick.current = Date.now();
      scroll(dir);
    },
    [scroll],
  );

  return (
    <div className="w-full h-56 relative flex items-center text-3xl">
      <div className="cursor-pointer" onClick={() => manualScroll("left")}>
        <ChevronLeftIcon height="1em" />
      </div>
      <div
        ref={carousel}
        className="flex-1 h-full overflow-hidden whitespace-nowrap"
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
      <div className="cursor-pointer" onClick={() => manualScroll("right")}>
        <ChevronRightIcon height="1em" />
      </div>
    </div>
  );
}

function CarouselItem() {
  function reloadPage() {
    location.reload();
    window.scrollTo(0, 0);
  }

  return (
    <div className="carousel-item inline-block w-96 h-full">
      <div
        className="w-full h-full flex flex-col px-8 cursor-pointer"
        onClick={reloadPage}
      >
        <img
          src="/splat_snip.jpg"
          className="w-full h-24 bg-purple-300 flex-1 object-cover"
        />
        <p className="font-light text-base mt-2 mb-1 text-gray-600">
          Victorian Couch
        </p>
        <p className="font-light text-sm text-gray-500">{PRICE_STR}</p>
      </div>
    </div>
  );
}
