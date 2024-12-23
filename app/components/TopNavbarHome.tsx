import { AiOutlineLineChart } from "react-icons/ai"
import { BsMicrosoftTeams, BsThreeDotsVertical } from "react-icons/bs"
import { CiCircleList } from "react-icons/ci"
import { FaChevronDown } from "react-icons/fa6"
import { IoMdAdd } from "react-icons/io"
import { IoFilter } from "react-icons/io5"
import { PiColumnsPlusLeft } from "react-icons/pi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { TbClockShare } from "react-icons/tb"
import { VscRefresh, VscShare } from "react-icons/vsc"

export default function TopNavbarHome() {
    return (
        <div className="w-full top-nav flex max-[850px]:flex-col max-[850px]:h-fit max-[850px]:m-0 px-2.5 max-[375px]:px-1.5 py-1 h-11 rounded shadow-md mt-3.5 text-gray-500 shadow-black/5 bg-white">
            <button className="flex items-center gap-x-1.5">
                <span className="text-xs font-semibold">My open leads</span>
                <FaChevronDown size={12} />
            </button>

            <div className="flex max-[850px]:flex-wrap max-[850px]:justify-around gap-x-4 max-[375px]:gap-x-1 max-[375px]:justify-center ml-auto">
                <button className="flex items-center gap-x-1 flex-shrink-0">
                    <AiOutlineLineChart size={16} />
                    <span className="text-xs font-medium">Show chart</span>
                </button>
                <button className="flex items-center gap-x-1">
                    <CiCircleList size={16} className="text-blue-500" />
                    <span className="text-xs font-medium">Focused view</span>
                </button>
                <button className="flex items-center gap-x-1">
                    <IoMdAdd size={16} className="text-green-400" />
                    <span className="text-xs font-medium">New</span>
                </button>
                <button className="flex items-center gap-x-1">
                    <VscRefresh size={16} />
                    <span className="text-xs font-medium">Refresh</span>
                </button>
                <button className="flex items-center gap-x-1">
                    <BsMicrosoftTeams size={16} className="text-blue-600" />
                    <span className="text-xs font-medium">Collaborate</span>
                </button>
                <button className="flex items-center gap-x-1">
                    <RiDeleteBin6Line size={16} />
                    <span className="text-xs font-medium pr-1.5 border-r border-r-gray-500">
                        Delete
                    </span>
                    <FaChevronDown size={10} />
                </button>
                <button className="max-[375px]:hidden">
                    <BsThreeDotsVertical />
                </button>
                <div className="flex gap-x-2 items-stretch text-black">
                    <button className="flex items-center px-2.5 max-[375px]:px-1.5 rounded gap-x-1 border-2 border-black/10">
                        <TbClockShare className="max-[375px]:size-[14px]" />
                        <span className="text-xs max-[375px]:text-[10px] font-medium">
                            Smart data
                        </span>
                    </button>
                    <button className="flex items-center px-2.5 max-[375px]:px-1.5 rounded gap-x-1 border-2 border-black/10">
                        <IoFilter className="max-[375px]:size-[14px]" />
                        <span className="text-xs max-[375px]:text-[10px] font-medium">
                            Edit filters
                        </span>
                    </button>
                    <button className="flex items-center px-2.5 max-[375px]:px-1.5 rounded gap-x-1 border-2 border-black/10">
                        <PiColumnsPlusLeft className="max-[375px]:size-[14px]" />
                        <span className="text-xs max-[375px]:text-[10px] font-medium">
                            Edit columns
                        </span>
                    </button>
                    <button className="flex items-center px-2.5 max-[375px]:px-1.5 rounded bg-blue-600">
                        <VscShare
                            color="white"
                            className="mr-1.5 max-[375px]:mr-0.5"
                        />
                        <div className="pl-1.5 max-[375px]:pl0.5 border-l border-l-white">
                            <FaChevronDown color="white" size={10} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
