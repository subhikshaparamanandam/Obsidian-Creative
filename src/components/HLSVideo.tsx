import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { cn } from "../lib/utils";

interface HLSVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const HLSVideo = ({
  src,
  className,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: HLSVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch((e) => console.log("Autoplay blocked", e));
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // For Safari and iOS which support HLS natively
      video.src = src;
      video.onloadstart = () => {
        if (autoPlay) {
          video.play().catch((e) => console.log("Autoplay blocked", e));
        }
      };
    }
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={cn("w-full h-full object-cover", className)}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
    />
  );
};
