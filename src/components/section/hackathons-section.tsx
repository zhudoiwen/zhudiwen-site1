"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect, useCallback } from "react";
import { RainbowHeading } from "@/components/magicui/rainbow-heading";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { X } from "lucide-react";

const hackathonData = [
  {
    id: 1,
    title: "项目作品一",
    description: "精心打造的创意项目",
    image: "1.png"
  },
  {
    id: 2,
    title: "项目作品二",
    description: "用心雕琢的设计作品",
    image: "2.png"
  },
  {
    id: 3,
    title: "项目作品三",
    description: "独具匠心的创作成果",
    image: "3.png"
  },
  {
    id: 4,
    title: "项目作品四",
    description: "精益求精的技术结晶",
    image: "4.png"
  },
  {
    id: 5,
    title: "项目作品五",
    description: "创新前沿的技术探索",
    image: "5.png"
  },
  {
    id: 6,
    title: "项目作品六",
    description: "匠心独运的设计方案",
    image: "6.png"
  },
  {
    id: 7,
    title: "项目作品七",
    description: "跨界融合的创意实践",
    image: "7.png"
  },
  {
    id: 8,
    title: "项目作品八",
    description: "用户体验的深度优化",
    image: "8.png"
  },
  {
    id: 9,
    title: "项目作品九",
    description: "持续进化的迭代升级",
    image: "9.png"
  },
];

export default function HackathonsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const lastTouchXRef = useRef(0);
  const lastScrollLeftRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isPausedRef = useRef(false);

  const animate = useCallback((currentTime: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (!lastTimeRef.current) lastTimeRef.current = currentTime;
    const deltaTime = Math.min(currentTime - lastTimeRef.current, 100);
    lastTimeRef.current = currentTime;

    if (!isDraggingRef.current && !isPausedRef.current) {
      const speed = 0.8;
      scrollPositionRef.current += speed * deltaTime * 0.05;
      scrollContainer.scrollLeft = scrollPositionRef.current;

      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
        scrollContainer.scrollLeft = 0;
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    animationFrameRef.current = requestAnimationFrame(animate);

    const handleTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      lastTouchXRef.current = e.touches[0].clientX;
      lastScrollLeftRef.current = scrollContainer.scrollLeft;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();

      const currentTouchX = e.touches[0].clientX;
      const deltaX = currentTouchX - lastTouchXRef.current;
      const newScrollLeft = lastScrollLeftRef.current - deltaX;

      scrollContainer.scrollLeft = newScrollLeft;
      scrollPositionRef.current = newScrollLeft;
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastTouchXRef.current = e.clientX;
      lastScrollLeftRef.current = scrollContainer.scrollLeft;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - lastTouchXRef.current;
      const newScrollLeft = lastScrollLeftRef.current - deltaX;

      scrollContainer.scrollLeft = newScrollLeft;
      scrollPositionRef.current = newScrollLeft;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        scrollPositionRef.current = scrollContainer.scrollLeft;
      }
    };

    scrollContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
    scrollContainer.addEventListener("touchmove", handleTouchMove, { passive: false });
    scrollContainer.addEventListener("touchend", handleTouchEnd);
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animate]);

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <section id="hackathons" className="overflow-hidden py-12">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <RainbowHeading className="text-3xl font-bold tracking-tighter sm:text-4xl">以热爱为舟⛵️赴创造之海</RainbowHeading>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
              以热爱驱动创造，以专注打磨细节。
              在探索与实践中不断突破，把每一份灵感，都酿成独有的作品。
            </p>
          </div>
        </div>

        {/* 无限轮播容器 */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="relative flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              touchAction: "pan-x",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* 双重内容实现无限滚动 */}
            {[...hackathonData, ...hackathonData].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(item.image, item.title)}
              >
                {/* 液态玻璃卡片 */}
                <div
                  className="relative w-72 h-44 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] shadow-[inset_0_-8px_10px_#8fdfff1f]"
                  style={{
                    background: "transparent",
                    border: "none",
                    overflow: "hidden",
                  }}
                >
                  <span
                    className="animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />

                  {/* 图片内容 */}
                  <div className="relative w-full h-full p-1">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 全屏图片预览弹窗 */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            {/* 图片容器 */}
            <div 
              className="relative p-4 rounded-2xl shadow-[inset_0_-8px_10px_#8fdfff1f]" 
              onClick={(e) => e.stopPropagation()}
              style={{ display: "inline-block", maxWidth: "90vw", maxHeight: "85vh" }}
            >
              <span
                className="animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />
              <div className="relative bg-slate-900/80 rounded-xl overflow-hidden" onClick={closeModal} style={{ display: "inline-block" }}>
                <img
                  src={selectedImage}
                  alt=""
                  className="max-w-[85vw] max-h-[75vh] object-contain cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
