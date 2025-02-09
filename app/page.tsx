"use client"

import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("All")

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex">
        <Sidebar setSelectedTopic={setSelectedTopic} />
        <MainContent searchTerm={searchTerm} selectedTopic={selectedTopic} />
      </div>
    </div>
  )
}

