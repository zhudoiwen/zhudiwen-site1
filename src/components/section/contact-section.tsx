"use client";
import { useState } from "react";
import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { RainbowHeading } from "@/components/magicui/rainbow-heading";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { DATA } from "@/data/resume";
import { Copy, Check, MessageCircle } from "lucide-react";
import { BorderBeam } from "@/registry/magicui/border-beam";
import { AnimatedGradientText } from "@/registry/magicui/animated-gradient-text";

export default function ContactSection() {
  const [showWechat, setShowWechat] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyWechat = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(DATA.contact.wechat.id);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = DATA.contact.wechat.id;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  const closeModal = () => {
    setShowWechat(false);
  };

  return (
    <>
      <div className="rounded-xl p-10 relative transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground active:scale-[0.98] cursor-pointer shadow-[inset_0_-8px_10px_#8fdfff1f]">
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
        <div className="absolute -top-4 z-10 left-1/2 -translate-x-1/2">
          <PulsatingButton>联系我📞</PulsatingButton>
        </div>
        <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="relative flex flex-col items-center gap-4 text-center">
          <RainbowHeading className="text-3xl font-bold tracking-tighter sm:text-5xl">联系我📞</RainbowHeading>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            想聊聊？直接在 douyin 「文海星辰」上给我发私信{" "}
            <Link
              href={DATA.contact.social.X.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              提出您的问题
            </Link>{" "}
            ，我会尽快回复。所有推销信息将被忽略。
          </p>
          {/* 微信联系按钮 */}
          <button
            onClick={() => setShowWechat(true)}
            className="mt-4 relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] shadow-[inset_0_-8px_10px_#8fdfff1f]"
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

            <span className="relative z-10">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </span>
            <AnimatedGradientText className="relative z-10 font-medium">微信联系</AnimatedGradientText>
          </button>
        </div>
      </div>

      {/* 微信弹窗 */}
      {showWechat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* 弹窗内容 */}
          <div
            className="relative max-w-sm w-full mx-4 p-6 rounded-2xl cursor-pointer shadow-[inset_0_-8px_10px_#8fdfff1f]"
            onClick={closeModal}
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

            <div className="relative">
              {/* 二维码图片 */}
              <div className="relative w-52 h-52 mx-auto mb-4" onClick={closeModal}>
                <img
                  src={DATA.contact.wechat.qrcode}
                  alt="微信二维码"
                  className="w-full h-full object-contain rounded-xl cursor-pointer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%231a1a2e' width='200' height='200'/%3E%3Ctext fill='%23fff' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E微信二维码%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              {/* 微信号复制 */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-white font-medium">{DATA.contact.wechat.id}</span>
                <button
                  onClick={handleCopyWechat}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  title="复制微信号"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
