"use client"
import { Tooltip } from "@mui/material"
import { BsBoxSeam, BsPinAngle } from "react-icons/bs"
import { FaBars, FaChevronDown } from "react-icons/fa6"
import { FiFileText, FiUser } from "react-icons/fi"
import { HiOutlinePhoneMissedCall } from "react-icons/hi"
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5"
import {
    LuFileClock,
    LuFileDigit,
    LuLayoutDashboard,
    LuNotebook,
    LuNotebookPen,
} from "react-icons/lu"
import {
    MdListAlt,
    MdOutlineAccountBalanceWallet,
    MdOutlineCampaign,
    MdSupportAgent,
} from "react-icons/md"
import { RxClipboardCopy } from "react-icons/rx"
import { useAppContext } from "../context/AppContext"

export default function Sidebar() {
    const { setAgentSkillOpen } = useAppContext()

    return (
        <div className="w-[11%] max-[850px]:w-fit flex flex-col overflow-y-auto custom-scrollbar-low-opacity bg-neutral-100 border-r-2 border-r-black/10 text-gray-600">
            <button className="p-3">
                <FaBars className="flex-shrink-0" size={16} />
            </button>

            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <IoHomeOutline className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Home
                    </span>
                </div>
            </button>

            <button className="flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full">
                    <IoTimeOutline className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate text-left">
                        Recent
                    </span>
                    <FaChevronDown
                        className="flex-shrink-0 ml-auto max-[850px]:hidden"
                        size={14}
                    />
                </div>
            </button>

            <button className="flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full">
                    <BsPinAngle className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate text-left">
                        Pinned
                    </span>
                    <FaChevronDown
                        className="flex-shrink-0 ml-auto max-[850px]:hidden"
                        size={14}
                    />
                </div>
            </button>

            {/* My work */}
            <h6 className="font-semibold max-[850px]:hidden text-xs mt-5 mb-1 px-3">
                My work
            </h6>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <HiOutlineRocketLaunch
                        className="flex-shrink-0"
                        size={18}
                    />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Sales accelerator
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <LuLayoutDashboard className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Dashboards
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <LuNotebookPen className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Activities
                    </span>
                </div>
            </button>

            {/* Customers */}
            <h6 className="font-semibold max-[850px]:hidden text-xs mt-5 mb-1 px-3">
                Customers
            </h6>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <MdOutlineAccountBalanceWallet
                        className="flex-shrink-0"
                        size={18}
                    />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Accounts
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <FiUser className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Contacts
                    </span>
                </div>
            </button>

            {/* Agent skill */}
            <Tooltip
                title="Click to open Agent skill modal"
                placement="bottom"
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [0, -7],
                                },
                            },
                        ],
                    },
                }}
                arrow
                onClick={() => setAgentSkillOpen(true)}
            >
                <button className="flex items-center gap-x-2.5  pl-2 pr-3 py-2 w-full font-medium rounded-md bg-gradient-to-r from-violet-600 to-indigo-400 text-white">
                    <MdSupportAgent className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Agent skill
                    </span>
                </button>
            </Tooltip>

            {/* Sales */}
            <h6 className="font-semibold max-[850px]:hidden text-xs mt-5 mb-1 px-3">
                Sales
            </h6>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <HiOutlinePhoneMissedCall
                        className="flex-shrink-0"
                        size={18}
                    />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Leads
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <LuNotebook className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Opportunities
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <FiUser className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Competitors
                    </span>
                </div>
            </button>

            {/* Collateral */}
            <h6 className="font-semibold max-[850px]:hidden text-xs mt-5 mb-1 px-3">
                Collateral
            </h6>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <LuFileClock className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Quotes
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <FiFileText className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Orders
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <LuFileDigit className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Invoices
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <BsBoxSeam className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Products
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <RxClipboardCopy className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Sales literature
                    </span>
                </div>
            </button>

            {/* Marketing */}
            <h6 className="font-semibold max-[850px]:hidden text-xs mt-5 mb-1 px-3">
                Marketing
            </h6>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <MdListAlt className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Marketing lists
                    </span>
                </div>
            </button>
            <button className="group flex justify-center items-center pl-1 pr-3 py-2 w-full hover:bg-white">
                <div className="flex gap-x-2.5 pl-1 items-center w-full group-hover:border-l-4 group-hover:border-l-blue-500">
                    <MdOutlineCampaign className="flex-shrink-0" size={18} />
                    <span className="max-[850px]:hidden text-xs truncate">
                        Quick Campaigns
                    </span>
                </div>
            </button>
        </div>
    )
}
