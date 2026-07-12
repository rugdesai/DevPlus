import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Repo {
  language: string;
}

interface Props {
  repositories: Repo[];
}

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#14B8A6",
];

export default function LanguageChart({ repositories }: Props) {
    const counts = repositories.reduce((acc, repo) => {
    if (!repo.language) return acc;

    acc[repo.language] = (acc[repo.language] || 0) + 1;

    return acc;
    }, {} as Record<string, number>);

    const total = Object.values(counts).reduce(
    (sum, value) => sum + value,
    0
    );

    const data = Object.entries(counts)
    .map(([name, value]) => ({
        name,
        value,
        percentage: Number(((value / total) * 100).toFixed(1)),
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
      <h3 className="mb-3 font-semibold">
        📈 Language Distribution
      </h3>

      <div className="h-64">

        <ResponsiveContainer width={250} height={250}>
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip/>

          </PieChart>
        </ResponsiveContainer>
        </div>
        <div className="mt-5 space-y-2">
  {data.map((item, index) => (
    <div
      key={item.name}
      className="flex items-center justify-between rounded-md px-2 py-1 hover:bg-gray-100"
    >
      <div className="flex items-center gap-2">
        <div
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor:
              COLORS[index % COLORS.length],
          }}
        />

        <span className="text-sm font-medium">
          {item.name}
        </span>
      </div>

      <span className="text-sm text-gray-500">
        {((item.value / repositories.length) * 100).toFixed(1)}%
      </span>
    </div>
  ))}
</div>
      </div>
    
  );
}