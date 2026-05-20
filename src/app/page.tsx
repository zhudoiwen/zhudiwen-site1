/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { RainbowHeading } from "@/components/magicui/rainbow-heading";
import { IconCloudDemo } from "@/components/magicui/icon-cloud";
import AvatarNeon from "@/components/avatar-neon";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/registry/magicui/border-beam";
import { AnimatedGradientText } from "@/registry/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <RainbowButton variant="outline">Hi，我是朱棣文✨</RainbowButton>
              </BlurFade>
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <AvatarNeon />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <RainbowHeading className="text-xl font-bold">平生自述🖊️</RainbowHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <RainbowHeading className="text-xl font-bold">序章与征途⚓️</RainbowHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <RainbowHeading className="text-xl font-bold">成长轨迹🚀</RainbowHeading>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                {education.href === "#" ? (
                  <div className="flex items-center gap-x-3 justify-between rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-muted hover:text-foreground px-3 py-2 -mx-3 cursor-pointer">
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <div className="size-8 md:size-10 rounded-full flex-none relative overflow-hidden shadow-[inset_0_-4px_6px_#8fdfff1f]">
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
                            src={education.logoUrl}
                            alt={education.school}
                            className="w-full h-full rounded-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="size-8 md:size-10 rounded-full flex-none relative overflow-hidden shadow-[inset_0_-4px_6px_#8fdfff1f]">
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
                          <div className="w-full h-full rounded-full bg-muted" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none">
                          {education.school}
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-muted hover:text-foreground active:scale-[0.96] active:-translate-y-0.5 px-3 py-2 -mx-3"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <div className="size-8 md:size-10 rounded-full flex-none relative overflow-hidden shadow-[inset_0_-4px_6px_#8fdfff1f]">
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
                            src={education.logoUrl}
                            alt={education.school}
                            className="w-full h-full rounded-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="size-8 md:size-10 rounded-full flex-none relative overflow-hidden shadow-[inset_0_-4px_6px_#8fdfff1f]">
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
                          <div className="w-full h-full rounded-full bg-muted" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                )}
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <RainbowHeading className="text-xl font-bold">武器库⚒️</RainbowHeading>
          </BlurFade>
          <IconCloudDemo />
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
      <section className="py-8">
        <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]" style={{ overflow: "hidden", width: "fit-content" }}>
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
          <AnimatedGradientText className="text-sm font-medium">
            Bloom and smile every day.🎉
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </section>
    </main>
  );
}