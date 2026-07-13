import {
<<<<<<< HEAD
  TrendingUp,
  
=======
  Brain,
  CheckCircle2,
  TrendingUp,
  Target,
>>>>>>> 0535b9d (new changes)
} from "lucide-react";

import {
RepoForkedIcon,
} from "@primer/octicons-react";

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
    <div className="mt-5 rounded-xl border border-zinc-700 bg-zinc-900/60 p-5 space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-400/30">

<<<<<<< HEAD
<div className="flex items-center justify-between border-b border-zinc-700 pb-3">

  <div className="flex items-center gap-2">
    

    <h3 className="font-semibold font-sans text-zinc-100">
      AI Insights
    </h3>
  </div>

  <Badge className="bg-violet-900/30 border border-violet-700 text-violet-300">
    Developer
  </Badge>

</div>
=======
      <div className="flex items-center gap-2">
        <Brain className="h-5 w-5 text-violet-500" />
        <h3 className="font-semibold text-white">
          AI Analysis
        </h3>
      </div>
>>>>>>> 0535b9d (new changes)

      <p className="text-sm leading-6 text-gray-300">
        {summary}
      </p>

<<<<<<< HEAD
      <div className="space-y-3">

<h4 className="mb-3 flex items-center gap-2 font-semibold text-zinc-100">
  <TrendingUp size={16}/>
  Strengths
</h4>

        {strengths.map((item) => (
<div
  key={item}
  className="flex items-start gap-3 rounded-lg border border-green-800/40 bg-green-900/10 p-3 text-sm text-zinc-300"
>

        <span>{item}</span>
          </div>
        ))}

      </div>

      <div className="space-y-3">

        <h4 className="mb-3 flex items-center gap-2 font-semibold text-zinc-100">
          <RepoForkedIcon
            size={16}
          />
          Weaknesses
        </h4>

        {weaknesses.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-lg border border-yellow-800/40 bg-yellow-900/10 p-3 text-sm text-zinc-300"
          >

          <span>{item}</span>
          </div>
        ))}
=======
      <div>
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          Key Strengths
        </h4>

        <div className="space-y-2">
          {strengths.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-lg bg-zinc-800/50 px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:bg-zinc-800"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              <span>{item}</span>
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
          {growthOpportunities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-lg bg-zinc-800/50 px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:bg-zinc-800"
            >
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Target className="h-4 w-4 text-violet-400" />
          <h4 className="font-semibold text-violet-300">
            Next Milestone
          </h4>
        </div>
>>>>>>> 0535b9d (new changes)

        <p className="text-sm leading-6 text-gray-300">
          {nextMilestone}
        </p>
      </div>

    </div>
  );
}