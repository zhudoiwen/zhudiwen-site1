"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useContext, useRef, useEffect, useCallback } from "react";
import { BorderBeam } from "@/registry/magicui/border-beam";

interface DockContextValue {
  pointerX: ReturnType<typeof useMotionValue<number>>;
}

const DockContext = React.createContext<DockContextValue | null>(null);

const BASE_SIZE = 44;
const HOVER_SIZE = 62;
const HOVER_OFFSET = -16;
const NEIGHBOR_OFFSET = -4;
const NEIGHBOR_SCALE = 1.08;

const SpringConfig = {
  mouse: { type: "spring" as const, stiffness: 500, damping: 12, mass: 0.08 },
  touch: { type: "spring" as const, stiffness: 600, damping: 8, mass: 0.05 },
};

interface DockProps {
  className?: string;
  children: React.ReactNode;
}

export function Dock({ className, children }: DockProps) {
  const pointerX = useMotionValue(Infinity);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((clientX: number) => {
    pointerX.set(clientX);
  }, [pointerX]);

  const handlePointerLeave = useCallback(() => {
    pointerX.set(Infinity);
  }, [pointerX]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX);
    };

    const handleMouseLeave = () => {
      handlePointerLeave();
    };

    const handleTouchMove = (e: TouchEvent) => {
      handlePointerMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      handlePointerLeave();
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handlePointerMove, handlePointerLeave]);

  return (
    <DockContext.Provider value={{ pointerX }}>
      <div
        ref={containerRef}
        className={cn(
          "relative h-14 px-3 py-1.5 w-fit mx-auto flex items-center gap-1.5 rounded-full touch-none shadow-[inset_0_-8px_10px_#8fdfff1f]",
          className
        )}
        style={{
          touchAction: "none",
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
        {children}
      </div>
    </DockContext.Provider>
  );
}

interface DockItemProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function DockItem({ className, children, href, onClick }: DockItemProps) {
  const childrenArray = React.Children.toArray(children);
  const label = childrenArray.find((child) => React.isValidElement(child) && (child as React.ReactElement).type === DockLabel);
  const icon = childrenArray.find((child) => React.isValidElement(child) && (child as React.ReactElement).type === DockIcon);

  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockItem must be used within a Dock component");
  }

  const { pointerX } = context;

  const distance = useTransform(pointerX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useSpring(
    useTransform(distance, [-100, -50, 0, 50, 100], [
      BASE_SIZE,
      BASE_SIZE * NEIGHBOR_SCALE,
      HOVER_SIZE,
      BASE_SIZE * NEIGHBOR_SCALE,
      BASE_SIZE,
    ]),
    SpringConfig.mouse
  );

  const yOffset = useSpring(
    useTransform(distance, [-100, -50, 0, 50, 100], [
      0,
      NEIGHBOR_OFFSET,
      HOVER_OFFSET,
      NEIGHBOR_OFFSET,
      0,
    ]),
    SpringConfig.mouse
  );

  const ItemContent = (
    <motion.div
      ref={ref}
      style={{ width: size, height: size, y: yOffset }}
      className={cn(
        "relative flex items-center justify-center rounded-full cursor-pointer select-none touch-manipulation",
        className
      )}
      onClick={onClick}
    >
      {/* 水晶图标容器 - 内部100%透明 */}
      <div
        className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: "transparent",
          border: "0.5px solid transparent",
        }}
      >
        {/* 图标边框高光 */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: "0.5px solid transparent",
            background: `
              linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.5) 0%,
                rgba(255, 255, 255, 0.08) 25%,
                rgba(255, 255, 255, 0.02) 50%,
                rgba(255, 255, 255, 0.08) 75%,
                rgba(255, 255, 255, 0.5) 100%
              ) border-box`,
            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />
        <BorderBeam duration={99} size={30} />
        {icon}
      </div>
      {label}
    </motion.div>
  );

  if (href && !onClick) {
    return (
      <a
        href={href}
        className="block touch-manipulation"
      >
        {ItemContent}
      </a>
    );
  }

  return ItemContent;
}

interface DockIconProps {
  className?: string;
  children: React.ReactNode;
}

export function DockIcon({ className, children }: DockIconProps) {
  return (
    <div className={cn("w-6 h-6 flex items-center justify-center", className)}>
      {children}
    </div>
  );
}

interface DockLabelProps {
  className?: string;
  children: React.ReactNode;
}

export function DockLabel({ className, children }: DockLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 4 }}
      whileHover={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md text-xs font-medium",
        "bg-neutral-800 text-white shadow-lg",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
