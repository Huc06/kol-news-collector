"use client"

import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

interface SentimentData {
  positive: number
  neutral: number
  negative: number
}

interface SentimentAnalysisProps {
  data: SentimentData
}

export default function SentimentAnalysis({ data }: SentimentAnalysisProps) {
  const chartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [data.positive, data.neutral, data.negative],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sentiment Analysis",
      },
    },
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sentiment Analysis</h2>
      <div className="h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  )
}

