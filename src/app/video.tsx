"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Video() {
  const playOnRelease = useRef(true);
  const dragging = useRef(false);
  const [holding, setHolding] = useState(false);
  const [playing, setPlaying] = useState(false);

  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video.current) return;

    const onMouseDown = () => {
      dragging.current = true;
      setHolding(true);
      if (!video.current) return;
      video.current.pause();
      setPlaying(false);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!video.current) return;
      if (!video.current.paused) return;
      if (!dragging.current) return;
      let newTime = video.current.currentTime + e.movementX / 100;
      if (newTime < 0) newTime = video.current.duration + newTime;
      if (newTime > video.current.duration)
        newTime = newTime - video.current.duration;
      video.current.currentTime = newTime;
    };
    const onMouseUp = () => {
      dragging.current = false;
      setHolding(false);
      if (!video.current) return;
      if (playOnRelease.current) {
        video.current.play();
        setPlaying(true);
      }
    };

    video.current.playbackRate = 0.75;

    video.current.addEventListener("mousedown", onMouseDown);
    video.current.addEventListener("mousemove", onMouseMove);
    video.current.addEventListener("mouseup", onMouseUp);

    return () => {
      video.current?.removeEventListener("mousedown", onMouseDown);
      video.current?.removeEventListener("mousemove", onMouseMove);
      video.current?.removeEventListener("mouseup", onMouseUp);
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
      <div className="relative">
        <video
          ref={video}
          className={
            "w-full object-cover " +
            (holding ? "cursor-grabbing" : "cursor-grab")
          }
          autoPlay
          loop
          muted
        >
          <source
            src="https://d1htv66kutdwsl.cloudfront.net/ceae2206-131a-4fc2-970f-877e418ac0ae/26346a69-4db8-4f8a-8bde-f464331f4daa.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute bottom-0 p-2 cursor-pointer"
          onClick={togglePlay}
        >
          {playing ? "playing" : "paused"}
        </div>
      </div>
      <div className="text-center mt-4">&lt; Drag to Rotate &gt;</div>
    </>
  );
}
