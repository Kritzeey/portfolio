import { Label } from "~/components/ui/label";
import type { Route } from "./+types/contact";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { Github, Linkedin } from "lucide-react";

const WEB3_FORMS_KEY = process.env.WEB3_FORMS_KEY;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Val's Portfolio | Contact" },
    { name: "description", content: "Contact page." },
  ];
}

export default function Contact() {
  return (
    <main className="p-8 gap-8 h-dvh w-full items-center justify-center grid grid-cols-2">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="gap-8 rounded-2xl col-span-1 p-8 w-full max-w-4xl flex flex-col bg-white/5 border-2 border-purple-400"
      >
        <input type="hidden" name="access_key" value={WEB3_FORMS_KEY}></input>

        <span className="w-full text-center text-4xl font-bold">
          Contact Me
        </span>

        <div className="flex flex-col gap-4">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" placeholder="John Doe" required />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="email">E-mail</Label>
          <Input
            name="email"
            id="email"
            placeholder="johndoe@email.com"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="subject">Subject</Label>
          <Textarea
            name="subject"
            id="subject"
            placeholder="johndoe@email.com"
            required
          />
        </div>

        <Button className="cursor-pointer" type="submit">
          Send
        </Button>
      </form>

      <div className="w-full col-span1 flex flex-col">
        <div className="w-full p-4 border-2 border-purple-400 rounded-2xl gap-4 flex flex-col">
          <span className="flex w-full items-center justify-center text-2xl font-bold">
            Connect With Me
          </span>

          <div className="w-full justify-center flex gap-4">
            <div>
              <Link to="https://github.com/Kritzeey">
                <div className="border-2 border-purple-400 rounded-2xl flex items-center justify-center size-16">
                  <Github className="size-8" />
                </div>
              </Link>
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/valhize">
                <div className="border-2 border-purple-400 rounded-2xl flex items-center justify-center size-16">
                  <Linkedin />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
