import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Description() {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      "#profile-image",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
    );

    timeline.to("#profile-image", {
      y: 20,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section
      id="description"
      className="grid grid-cols-2 p-32 h-dvh w-full gap-4 items-center justify-center"
    >
      <div className="col-span-1 flex items-center justify-center">
        <div
          id="profile-image"
          className="opacity-0 size-72 border-2 rounded-2xl border-purple-400 overflow-hidden rotate-12"
        >
          <img src="/rian.png" className="-rotate-12 scale-150" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <span className="text-4xl font-medium">About Me</span>
        <span className="text-xl">
          👋 Hello there! I am a second year computer science student at
          Universitas Indonesia.
        </span>
        <span className="text-xl">
          I like to mess around with both frontend and backend development.
        </span>
        <span className="text-xl">
          I like learning new things and solving problems! I always strive to be
          the better version of myself.
        </span>
      </div>
    </section>
  );
}
