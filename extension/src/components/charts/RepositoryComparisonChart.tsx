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
    .slice(0, 5);

  return (
    <div className="mt-6">
      <h3 className="mb-3 font-semibold">
        ⭐ Repository Popularity
      </h3>

      <div className="h-72">
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
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="stars"
              name="Stars"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="forks"
              name="Forks"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}