import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">KOL News Collector</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-400">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>
    </header>
  )
}

