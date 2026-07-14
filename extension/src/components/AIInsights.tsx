import {
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
  ChevronRight,
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
    <div className="mt-5 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/70 backdrop-blur-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15">
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>

          <div>
            <h3 className="text-base font-semibold text-white">
              AI Developer Insights
            </h3>

            <p className="text-xs text-zinc-400">
              Generated from repository analysis
            </p>
          </div>
        </div>

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          AI
        </span>
      </div>

      <div className="space-y-5 p-5">

        {/* Summary */}
        <div>
          <h4 className="mb-3 text-base font-semibold text-white">
            Summary
          </h4>

          <div className="rounded-xl border border-zinc-700 bg-zinc-800/40 p-4">
            <p className="text-sm leading-7 text-zinc-300">
              {summary}
            </p>
          </div>
        </div>

        {/* Strengths + Growth */}
        <div className="grid grid-cols-2 gap-4">

          {/* Strengths */}
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 transition-all duration-200 hover:border-green-500/40">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              </div>

              <h4 className="text-base font-semibold text-green-300">
                Strengths
              </h4>
            </div>

            <div className="space-y-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2"
                >
                  <ChevronRight className="mt-0.5 h-4 w-4 text-green-400 flex-shrink-0" />

                  <p className="text-sm text-zinc-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Growth */}
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 transition-all duration-200 hover:border-yellow-500/40">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/15">
                <TrendingUp className="h-4 w-4 text-yellow-400" />
              </div>

              <h4 className="text-base font-semibold text-yellow-300">
                Growth
              </h4>
            </div>

            <div className="space-y-2">
              {growthOpportunities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2"
                >
                  <ChevronRight className="mt-0.5 h-4 w-4 text-yellow-400 flex-shrink-0" />

                  <p className="text-sm text-zinc-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Next Milestone */}
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 transition-all duration-200 hover:border-violet-500/40">

          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15">
              <Target className="h-4 w-4 text-violet-300" />
            </div>

            <h4 className="text-base font-semibold text-violet-300">
              Next Milestone
            </h4>
          </div>

          <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
            <p className="text-sm leading-6 text-zinc-300">
              {nextMilestone}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}