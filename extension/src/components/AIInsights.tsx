import {
  TrendingUp,
  
} from "lucide-react";

import {
RepoForkedIcon,
} from "@primer/octicons-react";

import Badge from "./Badge";

interface Props {
  summary: string;
  strengths: string[];
  weaknesses: string[];
}

export default function AIInsights({
  summary,
  strengths,
  weaknesses,
}: Props) {
  return (
    <div className="mt-5 rounded-xl border p-4 space-y-4">

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

      <p className="text-sm text-gray-400">
        {summary}
      </p>

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

      </div>

    </div>
  );
}