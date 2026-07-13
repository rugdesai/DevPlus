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
  "#7DD3FC",
  "#C4B5FD",
  "#6EE7B7",
  "#FCD34D",
  "#FDBA74",
  "#F9A8D4",
  "#CBD5E1",
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
      <h3 className="mb-3 font-semibold font-sans">
         Language Distribution
      </h3>

      <div className="h-64 flex items-center justify-center">

        <ResponsiveContainer width={250} height={250}>
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
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
      </div>
    
  );
}