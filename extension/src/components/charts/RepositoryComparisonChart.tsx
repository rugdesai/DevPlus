import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

interface Repository {
  name: string;
  stars: number;
  forks: number;
}

interface Props {
  repositories: Repository[];
}

export default function RepositoryComparisonChart({
  repositories,
}: Props) {
  const data = [...repositories]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
  .map(repo => ({
    ...repo,
    shortName:
      repo.name.length > 10
        ? repo.name.slice(0, 10) + "..."
        : repo.name,
  }));

  return (
    <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
      <h3 className="mb-3 font-semibold">
         Repository Popularity
      </h3>

      <div style={{ width: 250, height: 250 }}>
        <ResponsiveContainer width={250} height={250}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid     
                vertical={false}
                strokeOpacity={0.15} 
            />

            <XAxis dataKey="shortName" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="stars"
              name="Stars"
              radius={[6, 6, 0, 0]}
              fill="#60A5FA"
            />

            <Bar
              dataKey="forks"
              name="Forks"
              radius={[6, 6, 0, 0]}
              fill="#A78BFA"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}