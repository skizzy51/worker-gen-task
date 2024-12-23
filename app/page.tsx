"use client"
import Image from "next/image"
import TopNavbarHome from "./components/TopNavbarHome"
import HeroSection from "./components/HeroSection"
import { GridColDef } from "@mui/x-data-grid"
import TableComponent from "./components/TableComponent"
import Copilot from "./assets/microsoft-copilot.svg"
import { useState } from "react"
import EngageModal from "./components/EngageModal"
import AgentSkill from "./components/AgentSkill"
import { useAppContext } from "./context/AppContext"
import { tableData } from "./data/data"
import { Tooltip } from "@mui/material"

export default function Home() {
    const { agentSkillOpen } = useAppContext()
    const [engageModal, setEngageModal] = useState(false)
    const [activeLead, setActiveLead] = useState({})
    const [searchInput, setSearchInput] = useState("")

    const columns: GridColDef[] = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerClassName: "border-none",
            cellClassName: "text-blue-700",
        },
        { field: "topic", headerName: "Topic", flex: 1 },
        { field: "status", headerName: "Status reason", flex: 1 },
        { field: "date", headerName: "Created on", flex: 1 },
    ]

    function Search() {
        const filtered = tableData.filter((data) =>
            data.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        return filtered
    }

    return (
        <div className="w-full h-screen overflow-y-auto custom-scrollbar pl-3.5 max-[850px]:p-2">
            {engageModal ? (
                <EngageModal
                    setEngageModal={setEngageModal}
                    activeLead={activeLead}
                />
            ) : null}

            {agentSkillOpen && <AgentSkill />}

            <TopNavbarHome />

            <HeroSection
                setEngageModal={setEngageModal}
                setActiveLead={setActiveLead}
            />

            <div className="mt-2 shadow-md border border-black/10 bg-white">
                <div className="w-full pl-3 pt-3">
                    <div className="w-[25%] max-[850px]:w-[60%] max-[425px]:w-[90%] h-7 p-[1.5px] rounded-md bg-gradient-to-r from-[#9144b7] via-lightBlue-400 to-indigo-600">
                        <Tooltip title="Click to search" placement="right">
                            <div className="w-full h-full flex gap-x-2 px-2.5 rounded bg-white">
                                <input
                                    type="text"
                                    value={searchInput}
                                    onChange={(e) =>
                                        setSearchInput(e.target.value)
                                    }
                                    placeholder="Sort, filter and search with Copilot"
                                    className="flex-1 h-full text-xs outline-none bg-white"
                                />
                                <Image
                                    src={Copilot}
                                    width={18}
                                    height={18}
                                    alt="Copilot"
                                />
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <TableComponent rows={Search()} columns={columns} />
            </div>
        </div>
    )
}
{
    /* <IoLogoFreebsdDevil /> */
}
