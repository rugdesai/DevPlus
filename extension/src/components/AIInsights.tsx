import {
  CheckCircle2,
  TrendingUp,
  Target,
} from "lucide-react";



interface Props {
  summary: string;
  strengths: string[];
  growthOpportunities: string[];
  nextMilestone: string;
}

export default function AIInsights({
  summary,
  strengths,
  growthOpportunities,
  nextMilestone,
}: Props) {
  return (
    <div className="mt-5 rounded-xl border border-zinc-700 bg-zinc-900/60 p-5 space-y-5">

      <div className="flex items-center justify-between border-b border-zinc-700 pb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold font-sans text-white">
            AI Insights
          </h3>
            <span className="text-sm font-medium text-zinc-300">
                Developer
            </span>
        </div>
      </div>

      <div>
        <h4 className="mb-2 font-semibold text-zinc-100">
          Summary
        </h4>

        <p className="text-sm text-gray-300 leading-6">
          {summary}
        </p>
      </div>

      <div className="rounded-md border border-zinc-700 bg-transparent p-4 flex flex-col gap-3">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          Strengths
        </h4>

<ul className="flex flex-col gap-2 list-disc pl-5 marker:text-zinc-500">
  {strengths.map((item: string) => (
    <li key={item} className="text-sm font-medium text-zinc-200">
      {item}
    </li>
  ))}
</ul>
      </div>

      <div className="rounded-md border border-zinc-700 bg-transparent p-4 flex flex-col gap-3">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-yellow-400">
          <TrendingUp className="h-4 w-4" />
          Growth Opportunities
        </h4>

<ul className="flex flex-col gap-2 list-disc pl-5 marker:text-zinc-500">
  {growthOpportunities.map((item: string) => (
    <li key={item} className="text-sm font-medium text-zinc-200">
      {item}
    </li>
  ))}
</ul>
      </div>

      <div className="rounded-md border border-zinc-700 bg-transparent p-4 flex flex-col gap-3">
        <h4 className="mb-2 flex items-center gap-2 font-semibold text-violet-300">
          <Target className="h-4 w-4" />
          Next Milestone
        </h4>

        <p className="text-sm text-gray-300">
          {nextMilestone}
        </p>
      </div>

    </div>
  );
}