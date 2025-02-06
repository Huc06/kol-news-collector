import { Filter } from "lucide-react"

export default function MainContent() {
  // This would typically come from your data fetching logic
  const articles = [
    { id: 1, title: "The Future of AI in Social Media", author: "Tech_KOL", date: "2023-11-01" },
    { id: 2, title: "Blockchain: Beyond Cryptocurrency", author: "Crypto_Expert", date: "2023-11-02" },
    { id: 3, title: "Sustainable Energy Solutions", author: "GreenTech_Guru", date: "2023-11-03" },
    // ... more articles
  ]

  return (
    <main className="flex-1 p-8">
      <div className="mb-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Data Visualization</h2>
        <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Placeholder for data visualization</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Collected News Articles</h2>
          <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-700">
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="p-3">{article.title}</td>
                  <td className="p-3">{article.author}</td>
                  <td className="p-3">{article.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

