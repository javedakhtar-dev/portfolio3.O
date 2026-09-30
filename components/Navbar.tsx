import Link from "next/link";
import HamBurger from "./features/HamBurger";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 p-5 flex justify-between items-center font-black">
            <div className="text-2xl">
                <Link href="/">Javed Ak<span className="text-red-500">.</span></Link>
            </div>
            <div className="md:flex gap-5 hidden md:block">
                <a href={"#about"} className="cursor-pointer">About</a>
                <a href={"#education"} className="cursor-pointer">Education</a>
                <a href={"#experience"} className="cursor-pointer">Experiences</a>
                <a href={"#contact"} className="cursor-pointer">Contact</a>
            </div>
            <div className="md:hidden">
                <HamBurger />
            </div>
        </div>
    )
}