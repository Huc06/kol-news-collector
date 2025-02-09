import { PieChart, BarChart, Users } from "lucide-react"

interface SidebarProps {
  setSelectedTopic: (topic: string) => void
}

export default function Sidebar({ setSelectedTopic }: SidebarProps) {
  const topics = ["All", "Technology", "Cryptocurrency", "Sustainability"]

  return (
    <aside className="w-64 bg-gray-800 p-4 h-screen">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <PieChart className="text-blue-400" />
              <span>Topic Distribution</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <BarChart className="text-green-400" />
              <span>Sentiment Analysis</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <Users className="text-yellow-400" />
              <span>Top KOLs</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Filter by Topic</h3>
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic}>
              <button
                onClick={() => setSelectedTopic(topic)}
                className="w-full text-left hover:bg-gray-700 p-2 rounded"
              >
                {topic}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
        <ul className="space-y-2">
          <li>Total Articles: 1,000</li>
          <li>Unique KOLs: 50</li>
          <li>Trending Topics: 5</li>
        </ul>
      </div>
    </aside>
  )
}

