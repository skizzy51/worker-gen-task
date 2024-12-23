"use client"
import { IoCloseOutline } from "react-icons/io5"
import Copilot from "../assets/microsoft-copilot.svg"
import Image from "next/image"
import { FaChevronUp } from "react-icons/fa6"
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi"
import { useAppContext } from "../context/AppContext"
import { TiUserOutline } from "react-icons/ti"
import { useState } from "react"
import { GrDocumentText } from "react-icons/gr"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2"
import { LiaCopy } from "react-icons/lia"
import { MdOutlineDirections } from "react-icons/md"

export default function AgentSkill() {
    const { setAgentSkillOpen } = useAppContext()
    const [showDetails, setShowDetails] = useState(true)

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center z-30 w-screen h-screen backdrop-blur-sm bg-black/40">
            <div className="w-[65%] h-[85%] max-[500px]:w-[90%] max-[850px]:w-[75%] flex flex-col rounded-xl p-6 max-[850px]:p-3 max-[850px]:px-4 bg-white">
                <div className="w-full mt-3 max-[500px]:mt-1">
                    <IoCloseOutline
                        size={26}
                        onClick={() => setAgentSkillOpen(false)}
                        className="ml-auto cursor-pointer"
                    />
                </div>

                <div className="flex items-center gap-x-2.5 mt-6 max-[850px]:mt-0">
                    <Image
                        src={Copilot}
                        width={24}
                        height={24}
                        className="max-[375px]:size-[20px]"
                        alt="Copilot"
                    />
                    <h2 className="font-semibold max-[375px]:text-sm">
                        Agent skill
                    </h2>
                </div>

                <div
                    onClick={() => setShowDetails(!showDetails)}
                    className="rounded-lg p-5 max-[850px]:p-3 border space-y-3 max-[850px]:space-y-1 shadow-md mt-3 max-[850px]:mt-1.5 cursor-pointer"
                >
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm max-[500px]:text-xs text-gray-700 font-semibold">
                            Check if on-hand inventory will allow all sales
                            orders to ship without delay
                        </h4>
                        <FaChevronUp size={14} />
                    </div>

                    {showDetails && (
                        <p className="text-sm max-[850px]:text-xs max-[500px]:text-[10px] flex items-center gap-2 max-[850px]:gap-1 flex-wrap">
                            When
                            <span className="flex items-center gap-x-0.5 w-fit text-blue-500 bg-sky-100 rounded-[100px] p-2">
                                <TiUserOutline className="size-[17px] max-[500px]:size-[10px] flex-shrink-0" />{" "}
                                any vendor
                            </span>
                            sends an email with changes to
                            <span className="flex items-center gap-x-0.5 w-fit text-blue-500 bg-sky-100 rounded-[100px] p-2">
                                <GrDocumentText className="size-[17px] max-[500px]:size-[10px] flex-shrink-0" />{" "}
                                confirmed purchase orders
                            </span>
                            , check if the resulting
                            <span className="flex items-center gap-x-0.5 w-fit text-blue-500 bg-sky-100 rounded-[100px] p-2">
                                <HiOutlineBars3CenterLeft className="size-[17px] max-[500px]:size-[10px] flex-shrink-0" />{" "}
                                on-hand inventory
                            </span>
                            will allow
                            <span className="flex items-center gap-x-0.5 w-fit text-blue-500 bg-sky-100 rounded-[100px] p-2">
                                <LiaCopy className="size-[17px] max-[500px]:size-[10px] flex-shrink-0" />{" "}
                                all sales orders
                            </span>
                            to
                            <span className="flex items-center gap-x-0.5 w-fit text-blue-500 bg-sky-100 rounded-[100px] p-2">
                                <MdOutlineDirections className="size-[17px] max-[500px]:size-[10px] flex-shrink-0" />{" "}
                                ship without delay
                            </span>
                            . If so,
                            <span className="flex items-center gap-x-0.5 w-fit text-blue-500 bg-sky-100 rounded-[100px] p-2">
                                <MdOutlineDirections className="size-[17px] max-[500px]:size-[10px] flex-shrink-0" />{" "}
                                update the purchase order
                            </span>
                            to reflect the change
                        </p>
                    )}
                </div>

                <div className="mt-7 max-[850px]:mt-3 space-y-3 max-[500px]:space-y-1">
                    <div className="flex gap-x-2.5 items-center">
                        <PiMicrosoftOutlookLogoDuotone
                            size={26}
                            className="max-[375px]:size-[20px]"
                            color="#3b82f6"
                        />
                        <h2 className="font-semibold max-[850px]:text-sm">
                            Enable email access
                        </h2>
                    </div>

                    <p className="max-[850px]:text-xs">
                        Allow the agent to access email inboxes to read mail
                        from known vendors
                    </p>

                    <div className="w-full flex gap-x-2 max-[850px]:text-xs">
                        <input
                            type="text"
                            className="outline-none border rounded-md flex-1"
                        />
                        <button className="font-medium px-6 max-[500px]:px-2 py-1.5 rounded-md bg-blue-600 text-white">
                            Allow access
                        </button>
                    </div>
                </div>

                <div className="flex justify-end gap-x-2 mt-auto max-[850px]:text-xs">
                    <button
                        disabled
                        className="font-medium px-6 py-1.5 rounded-md bg-blue-600 text-white disabled:bg-gray-100 disabled:text-black/30"
                    >
                        Activate
                    </button>
                    <button
                        onClick={() => setAgentSkillOpen(false)}
                        className="font-medium px-6 py-1.5 rounded-md border"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
