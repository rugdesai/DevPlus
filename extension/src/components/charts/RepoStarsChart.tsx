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

  return (
    <div className="mt-6">
      <h3 className="mb-3 font-semibold">
        ⭐ Top Starred Repositories
      </h3>

      <div className="h-72">
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
              radius={[0, 6, 6, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}