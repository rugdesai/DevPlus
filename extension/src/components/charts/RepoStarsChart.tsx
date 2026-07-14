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
    .slice(0, 5)
    .map(repo => ({
      ...repo,
      shortName: repo.name.length > 12 ? repo.name.slice(0, 12) + "..." : repo.name,
    }));

    console.log("RepoStarsChart", data);

return (
    <div className="mt-6 rounded-xl border border-zinc-800 bg-[#0d1117] p-5">
      <h3 className="mb-4 text-sm font-semibold text-zinc-100">
         Top Starred Repositories
      </h3>

      {/* Bulletproof Responsive Wrapper */}
      <div className="w-full relative" style={{ height: "250px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 15,
              left: 10, // Extra breathing room for the Y-Axis labels
              bottom: 0,
            }}
          >
            {/* XAxis handles the numbers (Stars) */}
            <XAxis 
              type="number" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            {/* YAxis handles the categories (Repo Names) */}
            <YAxis
              type="category"
              dataKey="shortName"
              width={100} // Increased width so names don't get cut off
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="stars"
              name="Stars"
              // [top-left, top-right, bottom-right, bottom-left]
              // Rounds the right side of the horizontal bars
              radius={[0, 4, 4, 0]} 
              fill="#60A5FA"
              barSize={24} // Prevents horizontal bars from getting too thick
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}