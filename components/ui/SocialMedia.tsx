import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function SocialMedia(){
    return (
        <div className="flex gap-3">
            <a href="https://x.com/javedakhtar_dev" target="_blank" className="border border-red-500 p-2 rounded-full hover:scale-105 transformation-all">
                <FaXTwitter />
            </a>
            <a href="https://linkedin.com/in/javedakhtar-dev" target="_blank" className="border border-red-500 p-2 rounded-full hover:scale-105 transformation-all">
                <FaLinkedin />
            </a>
            <a href="https://github.com/javedakhtar-dev" target="_blank" className="border border-red-500 p-2 rounded-full hover:scale-105 transformation-all">
                <FaGithub />
            </a>
        </div>
    )
}