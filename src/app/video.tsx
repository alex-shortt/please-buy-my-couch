"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function Video() {
  const playOnRelease = useRef(true);
  const dragging = useRef(false);
  const [holding, setHolding] = useState(false);
  const [playing, setPlaying] = useState(false);
  const lastTouchX = useRef(0);

  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video.current) return;

    const onDown = (e: Event) => {
      dragging.current = true;
      setHolding(true);
      if (!video.current) return;
      e.preventDefault();
      video.current.pause();
      setPlaying(false);
      if (e instanceof TouchEvent) {
        lastTouchX.current = e.touches[0].clientX;
      }
    };
    const onMove = (x: number) => {
      if (!video.current) return;
      if (!video.current.paused) return;
      if (!dragging.current) return;
      let newTime = video.current.currentTime + x / 100;
      if (newTime < 0) newTime = video.current.duration + newTime;
      if (newTime > video.current.duration)
        newTime = newTime - video.current.duration;
      video.current.currentTime = newTime;
    };
    const onMouseMove = (e: MouseEvent) => onMove(e.movementX);
    const onTouchMove = (e: TouchEvent) => {
      const deltaX = e.touches[0].clientX - lastTouchX.current;
      onMove(deltaX);
      lastTouchX.current = e.touches[0].clientX;
    };
    const onUp = () => {
      dragging.current = false;
      setHolding(false);
      if (!video.current) return;
      if (playOnRelease.current) {
        video.current.play();
        setPlaying(true);
      }
    };

    video.current.playbackRate = 0.75;

    video.current.addEventListener("mousedown", onDown);
    video.current.addEventListener("touchstart", onDown);
    video.current.addEventListener("mousemove", onMouseMove);
    video.current.addEventListener("touchmove", onTouchMove);
    video.current.addEventListener("mouseup", onUp);
    video.current.addEventListener("touchend", onUp);

    return () => {
      if (!video.current) return;
      video.current.removeEventListener("mousedown", onDown);
      video.current.removeEventListener("touchstart", onDown);
      video.current.removeEventListener("mousemove", onMouseMove);
      video.current.removeEventListener("touchmove", onTouchMove);
      video.current.removeEventListener("mouseup", onUp);
      video.current.removeEventListener("touchend", onUp);
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!video.current) return;
    if (video.current.paused) {
      video.current.play();
      setPlaying(true);
      playOnRelease.current = true;
    } else {
      video.current.pause();
      setPlaying(false);
      playOnRelease.current = false;
    }
  }, []);

  return (
    <>
      <div className="video-player relative">
        <video
          ref={video}
          className={
            "w-full object-contain max-h-[65vh] bg-black " +
            (holding ? "cursor-grabbing" : "cursor-grab")
          }
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://d1htv66kutdwsl.cloudfront.net/ceae2206-131a-4fc2-970f-877e418ac0ae/26346a69-4db8-4f8a-8bde-f464331f4daa.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute bottom-0 p-2 cursor-pointer text-white z-10"
          onClick={togglePlay}
        >
          {playing && <PauseIcon height={32} />}
          {!playing && <PlayIcon height={32} />}
        </div>
      </div>
      <div className="text-center mt-4 flex items-center justify-center">
        <ArrowLeftIcon height="1em" />
        <p className="mx-4">Drag to Rotate</p>
        <ArrowRightIcon height="1em" />
      </div>
    </>
  );
}
