"use client";

import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-2 py-2 text-white shadow-lg hover:bg-zinc-800"
        >
            <FaArrowCircleUp color="red" size={'1.5em'}/>
        </button>
    );
}