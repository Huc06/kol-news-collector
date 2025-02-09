"use client"

interface KOL {
  name: string
  followers: number
  engagement: number
}

interface TopKOLsProps {
  kols: KOL[]
}

export default function TopKOLs({ kols }: TopKOLsProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Top KOLs</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Followers</th>
              <th className="p-3">Engagement Rate</th>
            </tr>
          </thead>
          <tbody>
            {kols.map((kol, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-750">
                <td className="p-3">{kol.name}</td>
                <td className="p-3">{kol.followers.toLocaleString()}</td>
                <td className="p-3">{kol.engagement.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

