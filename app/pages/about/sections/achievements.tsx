import { achievements } from "lib/constants";
import AchievementIcon from "~/components/achievement-icon";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="h-[50vh] w-full flex flex-col items-center justify-center gap-12"
    >
      <span className="text-4xl font-bold">My Achievements</span>
      <div className="flex flex-col w-full">
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
