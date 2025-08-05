import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Val's Portfolio | Contact" },
    { name: "description", content: "Contact page." },
  ];
}

export default function Contact() {
  return (
    <main className="p-8 gap-8 h-dvh w-full items-center justify-center grid grid-cols-2">
      <form className="rounded-2xl col-span-1 p-4 w-full max-w-4xl flex flex-col bg-white/5 border-2 border-purple-400">
        <span className="text-4xl font-bold">Contact Me</span>
      </form>
      <div className="col-span1 rounded-2xl p-4 border-purple-400 border-2">
        Test
      </div>
    </main>
  );
}
