import BlurFade from "@/components/magicui/blur-fade";
import { RainbowHeading } from "@/components/magicui/rainbow-heading";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <PulsatingButton>造梦工坊🔨</PulsatingButton>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <RainbowHeading className="text-3xl font-bold tracking-tighter sm:text-4xl">赴一场创造与热爱的邀约🪁</RainbowHeading>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            我参与过各种项目，从简单的网站到复杂的Web应用程序。以下是我最喜欢的一些作品。
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}

