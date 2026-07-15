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
  // 1. BULLETPROOF DATA PREPARATION
  const data = [...repositories]
    .sort((a, b) => (Number(b.stars) || 0) - (Number(a.stars) || 0))
    .slice(0, 5)
    .map(repo => ({
      ...repo,
      // Force it to be a valid number, fallback to 0 if it's broken or undefined
      stars: Number(repo.stars) || 0, 
      forks: Number(repo.forks) || 0,
      shortName: repo.name.length > 10 ? repo.name.slice(0, 10) + "..." : repo.name,
    }));

  // Log exactly what Recharts is seeing
  console.log("Recharts Data:", data);

  return (
    <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
      <h3 className="mb-3 font-semibold text-zinc-100">
         Repository Popularity
      </h3>

      <div className="w-full relative" style={{ height: "250px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} strokeOpacity={0.15} stroke="#a1a1aa" />
            
            <XAxis 
              dataKey="shortName" 
              axisLine={false} 
              tickLine={false} 
              dy={10}
              tick={{ fontSize: 10, fill: "#a1a1aa" }}                
            />

            <YAxis 
              axisLine={false}
              tickLine={false}
              width={35}
              tick={{ fontSize: 10, fill: "#a1a1aa" }}                
            />

            <Tooltip 
              cursor={{ fill: '#3f3f46', opacity: 0.4 }}
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
              itemStyle={{ color: '#e4e4e7' }}
            />

            <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px', color: '#e4e4e7' }} />

            {/* 2. BULLETPROOF BARS: minPointSize guarantees they never vanish */}
            <Bar
              dataKey="stars"
              name="Stars"
              radius={[4, 4, 0, 0]}
              fill="#60A5FA"
              minPointSize={3} 
            />

            <Bar
              dataKey="forks"
              name="Forks"
              radius={[4, 4, 0, 0]}
              fill="#A78BFA"
              minPointSize={3} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}