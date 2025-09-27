import React, { useRef, useState, useEffect } from "react";
import { AchievementsData } from "../../constants/index";
import { AchievementsVideo } from "../../assets/Videos";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Achievements() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    const videoEl = videoRef.current;

    if (videoEl) {
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);

      videoEl.addEventListener("pause", handlePause);
      videoEl.addEventListener("play", handlePlay);

      return () => {
        videoEl.removeEventListener("pause", handlePause);
        videoEl.removeEventListener("play", handlePlay);
      };
    }
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left: Video Card */}
          <div className="relative w-full">
            <div
              className="relative rounded-2xl overflow-hidden aspect-video group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={videoRef}
                src={AchievementsVideo}
                className="w-full h-full object-cover"
                controls={false}
              />

              {/* Play Button (only when paused) */}
              {!isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg">
                    <FaPlay className="w-4 h-4 text-black ml-1" />
                  </span>
                </button>
              )}

              {/* Pause Button (only when playing & hovered) */}
              {isPlaying && isHovered && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg">
                    <FaPause className="w-4 h-4 text-black" />
                  </span>
                </button>
              )}
            </div>

            {/* Caption */}
            <div className="absolute -bottom-10 left-1/4 bg-white text-center rounded-lg shadow-md px-6 py-4">
              <h3 className="font-bold text-gray-900">
                Making Career Impact Together
              </h3>
              <p className="text-sm text-gray-600">Founder, MH Master Hub</p>
            </div>
          </div>

          {/* Right: Stats Section */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              A Journey of Achievement <br className="hidden md:block" /> and
              Digital Growth
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {AchievementsData.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.color} rounded-lg p-6 text-center shadow`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {item.value}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
