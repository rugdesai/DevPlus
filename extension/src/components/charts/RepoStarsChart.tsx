import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Repo {
  name: string;
  stars: number;
}

interface Props {
  repositories: Repo[];
}

export default function RepoStarsChart({
  repositories,
}: Props) {
  const data = [...repositories]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

    console.log("RepoStarsChart", data);

  return (
    <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
      <h3 className="mb-3 font-semibold">
         Top Starred Repositories
      </h3>

      <div style={{ width: 250, height: 250 }}>
        <ResponsiveContainer width={250} height={250}>
          <BarChart
            data={data}
            layout="vertical"
          >
            <XAxis type="number" />

            <YAxis
              type="category"
              dataKey="name"
              width={90}
            />

            <Tooltip />

            <Bar
              dataKey="stars"
              radius={[6, 6, 0, 0]}
              fill="#60A5FA"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}