import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <div className="flex flex-col flex-1 items-center justify-center font-sans h-screen">
        <div className="text-4xl font-black">Hey, What's Up!!</div>
        <div>I'm working on it, pls come later or contact on <a href="mailto:contact.javedak@gmail.com" className="underline">contact.javedak@gmail.com</a></div>
      </div>
  );
}
