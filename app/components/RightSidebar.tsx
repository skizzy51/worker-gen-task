import Image from "next/image"
import { BiMessage } from "react-icons/bi"
import { FiPhone } from "react-icons/fi"
import { PiChats } from "react-icons/pi"
import Copilot from "../assets/microsoft-copilot.svg"

export default function RightSidebar() {
    return (
        <div className="w-[3%] max-[850px]:hidden flex flex-col items-center gap-y-5 pt-2.5 h-full flex-shrink-0">
            <Image src={Copilot} width={18} height={18} alt="Copilot" />
            <PiChats />
            <FiPhone />
            <BiMessage />
        </div>
    )
}
