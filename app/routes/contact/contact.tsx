import type { Route } from "../../pages/contact/+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Val's Portfolio | Contact" },
    { name: "description", content: "Contact page." },
  ];
}

export default function Contact() {
  return (
    <main className="h-dvh w-full flex items-center justify-center">
      This is the contact page
    </main>
  );
}
