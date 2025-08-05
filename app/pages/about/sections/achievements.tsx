import { useGSAP } from "@gsap/react";
import { achievements } from "lib/constants";
import AchievementIcon from "~/components/achievement-icon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Achievements() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#achievements",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#achievements",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section className="h-[50vh] w-full flex flex-col items-center justify-center gap-12">
      <span id="achievements" className="text-4xl font-bold">
        My Achievements
      </span>
      <div id="achievements" className="flex flex-col w-full">
        {achievements.map((achievement) => (
          <AchievementIcon
            key={achievement.id}
            title={achievement.title}
            link={achievement.link}
            img={achievement.image}
          ></AchievementIcon>
        ))}
      </div>
    </section>
  );
}
