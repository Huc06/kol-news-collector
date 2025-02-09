"use client"

import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import SentimentAnalysis from "./SentimentAnalysis"
import TopKOLs from "./TopKOLs"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Article {
  id: number
  title: string
  author: string
  date: string
  topic: string
  sentiment: "positive" | "neutral" | "negative"
}

interface KOL {
  name: string
  followers: number
  engagement: number
}

interface MainContentProps {
  searchTerm: string
  selectedTopic: string
}

export default function MainContent({ searchTerm, selectedTopic }: MainContentProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [topKOLs, setTopKOLs] = useState<KOL[]>([])

  useEffect(() => {
    // Simulating API call to fetch articles
    const fetchArticles = async () => {
      // In a real application, this would be an API call
      const mockArticles: Article[] = [
        {
          id: 1,
          title: "The Future of AI in Social Media",
          author: "Tech_KOL",
          date: "2023-11-01",
          topic: "Technology",
          sentiment: "positive",
        },
        {
          id: 2,
          title: "Blockchain: Beyond Cryptocurrency",
          author: "Crypto_Expert",
          date: "2023-11-02",
          topic: "Cryptocurrency",
          sentiment: "neutral",
        },
        {
          id: 3,
          title: "Sustainable Energy Solutions",
          author: "GreenTech_Guru",
          date: "2023-11-03",
          topic: "Sustainability",
          sentiment: "positive",
        },
        {
          id: 4,
          title: "The Rise of Decentralized Finance",
          author: "DeFi_Analyst",
          date: "2023-11-04",
          topic: "Cryptocurrency",
          sentiment: "positive",
        },
        {
          id: 5,
          title: "AI Ethics in the Modern World",
          author: "AI_Ethicist",
          date: "2023-11-05",
          topic: "Technology",
          sentiment: "negative",
        },
      ]
      setArticles(mockArticles)

      // Simulating API call to fetch top KOLs
      const mockKOLs: KOL[] = [
        { name: "Tech_KOL", followers: 500000, engagement: 5.2 },
        { name: "Crypto_Expert", followers: 450000, engagement: 4.8 },
        { name: "GreenTech_Guru", followers: 400000, engagement: 4.5 },
        { name: "DeFi_Analyst", followers: 350000, engagement: 4.2 },
        { name: "AI_Ethicist", followers: 300000, engagement: 3.9 },
      ]
      setTopKOLs(mockKOLs)
    }

    fetchArticles()
  }, [])

  useEffect(() => {
    const filtered = articles.filter(
      (article) =>
        (selectedTopic === "All" || article.topic === selectedTopic) &&
        article.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredArticles(filtered)
  }, [articles, searchTerm, selectedTopic])

  const chartData = {
    labels: ["Technology", "Cryptocurrency", "Sustainability"],
    datasets: [
      {
        label: "Number of Articles",
        data: [
          articles.filter((a) => a.topic === "Technology").length,
          articles.filter((a) => a.topic === "Cryptocurrency").length,
          articles.filter((a) => a.topic === "Sustainability").length,
        ],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Article Distribution by Topic",
      },
    },
  }

  const sentimentData = {
    positive: articles.filter((a) => a.sentiment === "positive").length,
    neutral: articles.filter((a) => a.sentiment === "neutral").length,
    negative: articles.filter((a) => a.sentiment === "negative").length,
  }

  return (
    <main className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Topic Distribution</h2>
          <div className="h-64">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        <SentimentAnalysis data={sentimentData} />
      </div>

      <div className="mb-8">
        <TopKOLs kols={topKOLs} />
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Collected News Articles</h2>
          <div className="text-sm text-gray-400">
            Showing {filteredArticles.length} of {articles.length} articles
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-700">
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">Date</th>
                <th className="p-3">Topic</th>
                <th className="p-3">Sentiment</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article) => (
                <tr key={article.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="p-3">{article.title}</td>
                  <td className="p-3">{article.author}</td>
                  <td className="p-3">{article.date}</td>
                  <td className="p-3">{article.topic}</td>
                  <td className="p-3">{article.sentiment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

