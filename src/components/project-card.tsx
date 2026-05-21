/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useCallback } from "react";
import Markdown from "react-markdown";

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
      onError={() => setImageError(true)}
    />
  );
};

const VideoModal = ({ src, onClose }: { src: string; onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playError, setPlayError] = useState(false);

  // 确保视频路径是正确的mp4格式，移除任何可能的错误后缀
  const correctSrc = src.endsWith('.mp4') ? src : src.replace(/\.[^/.]+$/, '.mp4');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // 强制设置src为正确的mp4路径，避免任何缓存或路径错误
    video.src = correctSrc;
    video.load();
    
    const handleCanPlay = async () => {
      setIsLoaded(true);
      try {
        await video.play();
      } catch (err) {
        // 移动端自动播放限制，等待用户点击播放按钮
      }
    };
    
    const handleError = () => {
      setPlayError(true);
    };
    
    video.addEventListener('canplay', handleCanPlay, { passive: true });
    video.addEventListener('error', handleError, { passive: true });
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.pause();
      video.src = "";
      video.load();
    };
  }, [correctSrc]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] inline-block"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          loop
          muted={false}
          controls
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5-page"
          x5-video-orientation="portrait"
          x5-playsinline="true"
          x5-video-player-fullscreen="false"
          controlsList="nodownload"
          preload="none"
          className={`max-w-full max-h-[90vh] rounded-lg object-contain transform-gpu ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={correctSrc} type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" />
          您的浏览器不支持视频播放
        </video>
        {playError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white p-8 text-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="mb-2">视频播放失败</p>
            <p className="text-sm text-white/70 mb-4">如果在微信中无法播放，请点击右上角「...」选择「在浏览器打开」</p>
            <a 
              href={src} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 rounded text-white text-sm hover:bg-blue-600 transition-colors"
            >
              点击下载视频观看
            </a>
          </div>
        )}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
          aria-label="关闭视频预览"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const AutoPlayVideo = ({ src }: { src: string }) => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  // 确保视频路径正确
  const correctSrc = src.startsWith('/videos/') ? src : `/videos/${src.split('/').pop()}`;

  return (
    <>
      <div className="relative w-full h-full cursor-pointer" onClick={handleOpenModal} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          onCanPlay={() => videoRef.current?.play().catch(() => {})}
        >
          <source src={correctSrc} type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" />
        </video>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>
      {showModal && <VideoModal src={correctSrc} onClose={handleCloseModal} />}
    </>
  );
};

interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  dates,
  tags,
  image,
  video,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full rounded-xl overflow-hidden relative shadow-[inset_0_-8px_10px_#8fdfff1f]",
        className
      )}
    >
       <span
         className="animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/40 via-[#9c40ff]/40 to-[#ffaa40]/40 bg-[length:300%_100%] p-[1px]"
         style={{
           mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
           maskComposite: "subtract",
           transform: "translate3d(0, 0, 0)",
           willChange: "background-position",
         }}
       />
      <div className="relative w-full aspect-video overflow-hidden">
        {video ? (
          <AutoPlayVideo src={video} />
        ) : image ? (
          <ProjectImage src={image} alt={title} />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
          <time className="text-xs text-muted-foreground">{dates}</time>
        </div>
        <div className="text-xs flex-1 prose prose-sm max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};