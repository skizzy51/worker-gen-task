"use client"
import Image from "next/image"
import Copilot from "../assets/microsoft-copilot.svg"
import profile1 from "../assets/profile-pic-1.png"
import profile2 from "../assets/profile-pic-3.png"
import profile3 from "../assets/profile-pic-2.png"
import profile4 from "../assets/profile-pic-4.png"
import profile5 from "../assets/profile-pic-5.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { VscSparkleFilled } from "react-icons/vsc"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { FcCdLogo } from "react-icons/fc"
import { useState } from "react"
import { heroData, reducedHeroData } from "../data/data"
import { Tooltip } from "@mui/material"

export default function HeroSection({ setEngageModal, setActiveLead }: any) {
    const [currentIndexes, setCurrentIndexes] = useState([0, 1])
    const [page, setPage] = useState(0)

    const currentItems = heroData.filter((_, index) =>
        currentIndexes.includes(index)
    )

    const next = () => {
        setCurrentIndexes((prev) => {
            const startIndex = prev[1] + 1 // Start from the next index
            return heroData
                .slice(startIndex, startIndex + 2)
                .map((_, i) => startIndex + i)
        })
    }

    const previous = () => {
        setCurrentIndexes((prev) => {
            const startIndex = Math.max(prev[0] - 2, 0) // Ensure we don't go below 0
            return heroData
                .slice(startIndex, startIndex + 2)
                .map((_, i) => startIndex + i)
        })
    }

    return (
        <div className="mt-3 w-full p-[2px] rounded-xl shadow-lg shadow-black/15 bg-gradient-to-r from-[#9144b7] via-lightBlue-400 to-indigo-600">
            <div className="w-full h-full rounded-xl bg-white px-5 p-7 max-[850px]:p-3.5">
                <div className="flex justify-between gap-x-3">
                    <h1 className="flex flex-wrap text-base font-semibold">
                        <Image
                            src={Copilot}
                            width={25}
                            height={25}
                            alt="Copilot"
                        />
                        &nbsp; Hi Mona,&nbsp;
                        <span className="text-indigo-600">68%</span>
                        &nbsp;of goal achieved and rest can be achieved by
                        focusing on 20 top leads.
                    </h1>

                    <div className="">{/* space for progress bar */}</div>
                </div>

                <div className="flex mt-5 max-[850px]:mt-2 max-[850px]:flex-col">
                    <div className="w-[69%] max-[850px]:w-full relative pr-8 max-[850px]:pr-0 max-[850px]:pb-4 border-r-2 border-black/10 max-[850px]:border-0 text-gray-500">
                        <h3 className="text-sm max-[850px]:text-xs font-medium">
                            Copilot has pinpointed 5 key leads that show strong
                            purchase intent and are actively engaging. These
                            leads need your focus.
                        </h3>
                        <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-y-2 items-center relative gap-x-3 mt-3">
                            {currentIndexes[currentIndexes.length - 1] !==
                            heroData.length - 1 ? (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        next()
                                        setPage((page) => page + 1)
                                    }}
                                    className="absolute -right-5 z-20 rounded-full w-fit p-2 border border-black/10 bg-white"
                                >
                                    <FaChevronRight color="#3b82f6" />
                                </button>
                            ) : null}
                            {currentIndexes[0] !== 0 ? (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        previous()
                                        setPage((page) => page - 1)
                                    }}
                                    className="absolute -left-4 z-20 rounded-full w-fit p-2 border border-black/10 bg-white"
                                >
                                    <FaChevronLeft color="#3b82f6" />
                                </button>
                            ) : null}
                            {currentItems.map((lead: any, index: number) => (
                                <Tooltip
                                    title="Click to view lead"
                                    placement="top"
                                    key={index}
                                >
                                    <div
                                        onClick={() => {
                                            setEngageModal(true)
                                            setActiveLead({
                                                ...lead,
                                                leadIndex:
                                                    heroData.indexOf(lead),
                                            })
                                        }}
                                        className="flex flex-col h-full gap-y-2.5 relative cursor-pointer justify-center flex-shrink-0 p-2.5 text-xs rounded-lg border border-black/10"
                                    >
                                        <div className="flex items-center gap-x-1.5">
                                            <Image
                                                src={
                                                    heroData.indexOf(lead) === 0
                                                        ? profile1
                                                        : heroData.indexOf(
                                                              lead
                                                          ) === 1
                                                        ? profile2
                                                        : heroData.indexOf(
                                                              lead
                                                          ) === 2
                                                        ? profile3
                                                        : heroData.indexOf(
                                                              lead
                                                          ) === 3
                                                        ? profile4
                                                        : heroData.indexOf(
                                                              lead
                                                          ) === 4
                                                        ? profile5
                                                        : profile1
                                                }
                                                width={26}
                                                height={26}
                                                className="rounded-full"
                                                alt="profile"
                                            />
                                            <div className="flex flex-col gap-y-1">
                                                <span className="text-black font-semibold">
                                                    {lead.name}
                                                </span>
                                                <span className="font-light">
                                                    {lead.position} .{" "}
                                                    {lead.companyName}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative w-full rounded-lg p-2 bg-gradient-to-r space-y-1 from-indigo-50 to-indigo-50/50">
                                            <div className="absolute -top-1.5 -right-1.5 p-1.5 rounded-l-lg bg-white">
                                                <VscSparkleFilled
                                                    color="#6366f1"
                                                    size={14}
                                                />
                                            </div>
                                            <span className="flex gap-x-1 text-black font-semibold">
                                                <MdOutlineMarkEmailUnread
                                                    size={14}
                                                />
                                                {lead.leadTitle}
                                            </span>
                                            <p className="text-black line-clamp-2">
                                                {lead.leadDescription}
                                            </p>
                                        </div>

                                        <p className="ml-1.5">
                                            Expand business . High buying intent
                                        </p>
                                    </div>
                                </Tooltip>
                            ))}
                        </div>
                        <div className="flex justify-center w-full gap-x-0.5 items-center absolute bottom-0">
                            {reducedHeroData.map((num: any, index: number) => (
                                <div
                                    className={`${
                                        index === page
                                            ? "w-8 rounded-xl bg-indigo-600"
                                            : "rounded-full bg-gray-300"
                                    } size-1`}
                                    key={index}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[31%] max-[850px]:w-full pl-8 max-[850px]:p-0">
                        <h3 className="text-sm font-medium text-gray-500">
                            Other key activities
                        </h3>
                        <div className="flex flex-col gap-y-2 mt-3 text-xs">
                            {[1, 2].map((num) => (
                                <div
                                    key={num}
                                    className="w-full px-4 py-2 space-y-1 rounded-lg shadow border border-black/10"
                                >
                                    <div className="flex items-center gap-x-1">
                                        <div className="p-2 rounded-full bg-gray-200">
                                            <FcCdLogo size={18} />
                                        </div>
                                        <div className="flex flex-col gap-y-0.5 truncate">
                                            <span className="font-semibold truncate">
                                                Cafe A100 for Woodland Bank
                                            </span>
                                            <span className="text-[.6rem] truncate">
                                                Woodland Bank . $280,000 . 8
                                                days to close
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full relative p-2 flex items-center gap-x-1 rounded-lg bg-gradient-to-r from-black/5 to-black/[2%]">
                                        <div className="absolute -top-1.5 -right-1.5 p-1 rounded-l-lg bg-white">
                                            <VscSparkleFilled
                                                color="#6366f1"
                                                size={14}
                                            />
                                        </div>
                                        <MdOutlineMarkEmailUnread />
                                        <span className="text-[.6rem] truncate">
                                            Review draft and reply to Chris
                                            Naido
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs mt-2 font-semibold cursor-pointer text-blue-600">
                            Show all key activities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
