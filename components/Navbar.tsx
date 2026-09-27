export default function Navbar() {
    return (
        <div className="border-b border-zinc-800 p-5 flex justify-between font-black">
            <div className="">
                Javed Ak<span className="text-red-500">.</span>
            </div>
            <div className="flex gap-5">
                <div className="cursor-pointer ">About</div>
                <div>Education</div>
                <div>Experiences</div>
                <div>Contact</div>
            </div>
        </div>
    )
}