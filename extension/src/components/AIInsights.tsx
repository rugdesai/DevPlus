import {
  CheckCircle2,
  TrendingUp,
  Target,
} from "lucide-react";

import Badge from "./Badge";

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
          <h3 className="font-semibold text-white">
            AI Insights
          </h3>
        </div>

        <Badge>Developer</Badge>
      </div>

      <div>
        <h4 className="mb-2 font-semibold text-zinc-100">
          Summary
        </h4>

        <p className="text-sm text-gray-300 leading-6">
          {summary}
        </p>
      </div>

      <div>
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          Strengths
        </h4>

        <div className="space-y-2">
          {strengths.map((item: string) => (
            <div
              key={item}
              className="rounded-lg bg-green-900/20 border border-green-700/30 px-3 py-2 text-sm text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-yellow-400">
          <TrendingUp className="h-4 w-4" />
          Growth Opportunities
        </h4>

        <div className="space-y-2">
          {growthOpportunities.map((item: string) => (
            <div
              key={item}
              className="rounded-lg bg-yellow-900/20 border border-yellow-700/30 px-3 py-2 text-sm text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-violet-700/30 bg-violet-900/20 p-4">
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