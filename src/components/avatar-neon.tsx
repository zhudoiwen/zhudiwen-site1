"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function AvatarNeon() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative size-24 md:size-32 rounded-full overflow-hidden shadow-[inset_0_-8px_10px_#8fdfff1f]">
      <span
        className={cn(
          "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <img
        src={imageError ? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%231a1a2e' width='200' height='200'/%3E%3Ctext fill='%23fff' font-size='32' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${DATA.initials}%3C/text%3E%3C/svg%3E` : DATA.avatarUrl}
        alt={DATA.name}
        className="w-full h-full object-cover rounded-full"
        onError={() => setImageError(true)}
      />
    </div>
  );
}