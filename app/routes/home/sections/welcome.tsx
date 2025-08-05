import { useEffect } from "react";
import Orb from "~/components/orb";
import SplitText from "~/components/split-text";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Welcome() {
  useGSAP(() => {
    gsap.fromTo(
      "#fade-in",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,

        delay: 0.5,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section
      id="welcome"
      className="h-dvh w-full flex flex-col gap-4 items-center justify-center relative"
    >
      <Orb
        hoverIntensity={0}
        rotateOnHover={false}
        hue={0}
        forceHoverState={false}
      />

      <div className="absolute flex items-center justify-center flex-col gap-8">
        <SplitText
          text="Hello!"
          className="text-8xl font-bold"
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

        <div id="fade-in" className="opacity-0">
          <span className="text-3xl font-medium">I'm Valerian, a (future)</span>
          &nbsp;
          <span className="text-3xl font-medium bg-purple-400 px-1 py-0.5">
            Web Developer
          </span>
        </div>
      </div>
    </section>
  );
}
