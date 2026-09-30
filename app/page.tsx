import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/ui/SocialMedia";

export default function Home() {
  return (
      <div className="">
        <section id="hero" className="scroll-mt-24 flex flex-col flex-1 gap-3 items-center justify-center font-sans h-screen">
          <div className="text-4xl font-black">Hey, What's Up!!</div>
          <div className="text-center">I'm working on it, pls come later or contact on <a href="mailto:contact.javedak@gmail.com" className="underline">contact.javedak@gmail.com</a></div>
          <SocialMedia />
        </section>
        {/* <section id="about" className="scroll-mt-24 h-screen">
          About Content
        </section>
        <section id="education" className="scroll-mt-24 h-screen">
          Education Content
        </section>
        <section id="experience" className="scroll-mt-24 h-screen">
          Experience Content
        </section>
        <section id="contact" className="scroll-mt-24 h-screen">
          Contact Content
        </section> */}
      </div>
  );
}
