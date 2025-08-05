import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "~/components/split-text";

export default function Description() {
  useGSAP(() => {
    const timeline1 = gsap.timeline();
    const timeline2 = gsap.timeline();

    timeline1.fromTo(
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

    timeline1.to("#profile-image", {
      y: 20,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    timeline2.fromTo(
      "#text-one",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
    );

    timeline2.fromTo(
      "#text-two",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
    );

    timeline2.fromTo(
      "#text-three",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
    );
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
        <SplitText
          text="About Me"
          className="text-4xl font-bold"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <span id="text-one" className="text-xl">
          👋 Hello there! I am a second year computer science student at
          Universitas Indonesia.
        </span>
        <span id="text-two" className="text-xl">
          🌐 I like to mess around with both frontend and backend development.
        </span>
        <span id="text-three" className="text-xl">
          📖 I like learning new things and solving problems! I always strive to
          be the better version of myself.
        </span>
      </div>
    </section>
  );
}
