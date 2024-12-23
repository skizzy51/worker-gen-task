"use client"
import {
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaChevronUp,
    FaLinkedin,
} from "react-icons/fa6"
import { MdOutlineContactMail } from "react-icons/md"
import profile1 from "../assets/profile-pic-1.png"
import profile2 from "../assets/profile-pic-3.png"
import profile3 from "../assets/profile-pic-2.png"
import profile4 from "../assets/profile-pic-4.png"
import profile5 from "../assets/profile-pic-5.png"
import Check from "../assets/check.png"
import Award from "../assets/trophy.png"
import Radio from "../assets/radio.png"
import { IoCloseOutline, IoShield } from "react-icons/io5"
import Image from "next/image"
import { VscSend, VscSparkleFilled } from "react-icons/vsc"
import { GoPencil } from "react-icons/go"
import { HiOutlineHandThumbDown, HiOutlineHandThumbUp } from "react-icons/hi2"
import { GiPieChart } from "react-icons/gi"
import { useState } from "react"
import { heroData } from "../data/data"

export default function EngageModal({ setEngageModal, activeLead }: any) {
    const [aboutOpen, setAboutOpen] = useState(true)
    const [leadIndex, setLeadIndex] = useState(activeLead.leadIndex)
    // console.log(activeLead)

    return (
        <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-30 bg-transparent">
            <div className="w-[55%] max-[850px]:w-[80%] max-[500px]:w-[90%] h-[85%] rounded-2xl p-[3px] relative bg-gradient-to-r to-[#9144b7] via-lightBlue-400 from-indigo-600">
                <div className="w-full h-full flex flex-col pt-4 p-4 max-[850px]:p-3 overflow-y-auto custom-scrollbar rounded-xl bg-neutral-50">
                    {leadIndex < heroData.length - 1 ? (
                        <div className="h-full flex items-center absolute -right-5">
                            <button
                                onClick={() =>
                                    setLeadIndex((num: number) => num + 1)
                                }
                                className=" p-3 rounded-full border bg-white"
                            >
                                <FaChevronRight color="#3b82f6" size={16} />
                            </button>
                        </div>
                    ) : null}
                    {leadIndex > 0 ? (
                        <div className="h-full flex items-center absolute -left-5">
                            <button
                                onClick={() =>
                                    setLeadIndex((num: number) => num - 1)
                                }
                                className=" p-3 rounded-full border bg-white"
                            >
                                <FaChevronLeft color="#3b82f6" size={16} />
                            </button>
                        </div>
                    ) : null}
                    <div className="flex justify-between items-center px-2 max-[500px]:p-0">
                        <h2 className="flex items-start pl-2 text-sm font-semibold">
                            <MdOutlineContactMail size={22} />
                            &nbsp; {heroData[leadIndex].leadTitle}
                        </h2>
                        <IoCloseOutline
                            onClick={() => setEngageModal(false)}
                            className="cursor-pointer"
                            size={20}
                        />
                    </div>

                    <div className="w-full flex items-center gap-x-1 border rounded-xl py-2 px-3 max-[500px]:p-1.5 mt-4 bg-white">
                        <Image
                            src={
                                leadIndex === 0
                                    ? profile1
                                    : leadIndex === 1
                                    ? profile2
                                    : leadIndex === 2
                                    ? profile3
                                    : leadIndex === 3
                                    ? profile4
                                    : leadIndex === 4
                                    ? profile5
                                    : profile1
                            }
                            width={40}
                            height={40}
                            className="rounded-full max-[500px]:size-[35px]"
                            alt="profile"
                        />
                        <div className="flex flex-col">
                            <h5 className="font-semibold text-sm">
                                {heroData[leadIndex].name}
                            </h5>
                            <span className="text-xs flex items-start">
                                <FaLinkedin size={13} color="#2563eb" />
                                &nbsp; | {heroData[leadIndex].position},{" "}
                                {heroData[leadIndex].companyName}
                            </span>
                        </div>
                    </div>

                    <div className="pt-2.5 pl-2.5 rounded-xl flex flex-col flex-1 mt-3 gap-y-2 bg-gradient-to-br from-white via-neutral-100 to-transparent">
                        <div className="flex max-[500px]:flex-col items-center justify-between w-[98%] rounded-xl p-3 py-2.5 max-[850px]:p-2 text-xs max-[850px]:text-[10px] bg-gradient-to-r from-blue-50 via-indigo-100 to-violet-100">
                            <div className="flex items-center gap-x-2 max-w-[70%] max-[850px]:max-w-[60%] max-[500px]:max-w-full">
                                <VscSparkleFilled
                                    color="#7c3aed"
                                    size={16}
                                    className="flex-shrink-0"
                                />
                                <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                                    {heroData[leadIndex].leadDescription}
                                </span>
                            </div>
                            <div className="flex max-[500px]:w-full max-[500px]:justify-between max-[500px]:mt-1.5 gap-x-1.5 items-center text-xs">
                                <button className="flex items-center max-[500px]:w-[50%] truncate gap-x-1 text-[.65rem] flex-shrink-0 px-1.5 py-0.5 rounded border bg-white">
                                    <GoPencil
                                        size={14}
                                        className="flex-shrink-0"
                                    />
                                    Edit
                                </button>
                                <button className="flex items-center max-[500px]:w-[50%] truncate gap-x-1 text-[.65rem] flex-shrink-0 px-1.5 py-0.5 rounded text-white bg-gradient-to-r from-blue-700 to-violet-600">
                                    <VscSend
                                        size={14}
                                        className="flex-shrink-0"
                                    />
                                    Approve and send
                                </button>
                            </div>
                        </div>

                        <div className="w-full flex gap-x-3 text-xs items-baseline shadow shadow-black/15 rounded pt-2.5 pl-3.5 bg-white">
                            <button className="pb-2 border-b-[3px] border-transparent">
                                Engage
                            </button>
                            <button className="pb-2 border-b-[3px] border-b-blue-500">
                                Research
                            </button>
                        </div>

                        <div className="w-[98%] p-3 rounded-xl bg-white">
                            <div className="px-3 max-[850px]:p-2 py-2 pb-3 rounded-xl relative bg-gradient-to-r from-indigo-50 to-indigo-50/50">
                                <div className="p-1.5 -top-3 -right-3 absolute rounded-l-xl bg-white">
                                    <VscSparkleFilled
                                        color="#7c3aed"
                                        size={22}
                                    />
                                </div>
                                <span className="text-[13px] bg-gradient-to-r from-blue-800 to-violet-800 text-transparent bg-clip-text">
                                    Why i picked this lead
                                </span>
                                <ol className="text-xs max-[500px]:text-[10px] list-disc ml-5">
                                    {heroData[leadIndex].reasonForPicking.map(
                                        (reason: string, index: number) => (
                                            <li key={index} className="">
                                                {reason}
                                            </li>
                                        )
                                    )}
                                </ol>
                                <div className="flex max-[850px]:overflow-x-auto custom-scrollbar gap-x-1.5 gap-y-1.5 h-[4rem] max-[850px]:h-[3rem] mt-3 max-[850px]:mt-1.5">
                                    <div className="h-full flex gap-x-3 items-center p-3 max-[850px]:p-1.5 min-w-[10rem] rounded-xl shadow-sm shadow-black/20 bg-white">
                                        <Image
                                            src={Check}
                                            className="h-full w-auto"
                                            width={150}
                                            height={150}
                                            alt="decision-icon"
                                        />
                                        <div className="flex flex-col justify-between h-full text-xs">
                                            <p className="">Decision Maker</p>
                                            <p className="text-base max-[850px]:text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                                                Yes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-full flex gap-x-3 items-center p-3 max-[850px]:p-1.5 min-w-[10rem] rounded-xl shadow-sm shadow-black/20 bg-white">
                                        <Image
                                            src={Award}
                                            className="h-full w-auto"
                                            width={150}
                                            height={150}
                                            alt="decision-icon"
                                        />
                                        <div className="flex flex-col justify-between h-full text-xs">
                                            <p className="">
                                                Potential deal value
                                            </p>
                                            <p className="text-base max-[850px]:text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                                                {
                                                    heroData[leadIndex]
                                                        .potentialDealValue
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-full flex gap-x-3 items-center p-3 max-[850px]:p-1.5 min-w-[10rem] rounded-xl shadow-sm shadow-black/20 bg-white">
                                        <Image
                                            src={Radio}
                                            className="h-full w-auto"
                                            width={150}
                                            height={150}
                                            alt="decision-icon"
                                        />
                                        <div className="flex flex-col justify-between h-full text-xs">
                                            <p className="">Intent</p>
                                            <p className="text-base max-[850px]:text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                                                {heroData[leadIndex].intent}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between max-[500px]:flex-col max-[500px]:items-center gap-y-1.5 mt-3">
                                <div className="h-4 flex gap-x-1 text-[.55rem]">
                                    <div className="flex items-center px-1 rounded bg-neutral-100 border">
                                        <IoShield
                                            className="text-amber-500"
                                            size={10}
                                        />
                                    </div>
                                    <div className="h-full rounded flex bg-neutral-100 border">
                                        <span className="px-1">1</span>
                                        <div className="border-l flex items-center px-1">
                                            <GiPieChart
                                                size={10}
                                                color="#2563eb"
                                            />
                                            &nbsp; <span>D365 Sales</span>
                                        </div>
                                    </div>
                                    <div className="h-full rounded px-1 bg-neutral-100 border">
                                        +2
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <span className="text-[.55rem] rounded border bg-neutral-100 p-0.5">
                                        AI-generated content may be incorrect
                                    </span>
                                    <HiOutlineHandThumbUp size={12} />
                                    <HiOutlineHandThumbDown size={12} />
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className="rounded-xl p-3 text-xs cursor-pointer border bg-white"
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">
                                    About Jane
                                </span>
                                {aboutOpen ? (
                                    <FaChevronUp size={12} />
                                ) : (
                                    <FaChevronDown size={12} />
                                )}
                            </div>
                            <p
                                className={`${
                                    aboutOpen
                                        ? " max-[1150px]:line-clamp-3 line-clamp-4"
                                        : "hidden"
                                }`}
                            >
                                {heroData[leadIndex].aboutThem}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex text-xs max-[500px]:text-[10px] font-medium">
                            <span className="text-gray-600 pr-3 max-[500px]:pr-1.5 border-r-2">
                                Showing 1 of {heroData.length}
                            </span>
                            <span className="text-blue-600 pl-3 max-[500px]:pl-1.5">
                                Show all
                            </span>
                        </div>

                        <div className="flex justify-center gap-x-1 items-center">
                            {heroData.map((num, index) => (
                                <div
                                    className={`${
                                        index === leadIndex
                                            ? "w-8 rounded-xl bg-indigo-600"
                                            : "rounded-full bg-gray-300"
                                    } size-[5px]`}
                                    key={index}
                                ></div>
                            ))}
                        </div>

                        <div className="flex items-center gap-x-3">
                            <HiOutlineHandThumbUp className="size-[18px] max-[500px]:size-[14px]" />
                            <HiOutlineHandThumbDown className="size-[18px] max-[500px]:size-[14px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
