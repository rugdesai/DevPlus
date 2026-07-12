import {
  Brain,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

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

      <div className="flex items-center gap-2">
        <Brain className="h-5 w-5 text-violet-500" />

        <h3 className="font-semibold">
          AI Insights
        </h3>
      </div>

      <p className="text-sm text-gray-400">
        {summary}
      </p>

      <div>

        <h4 className="mb-2 font-medium text-green-500">
          Strengths
        </h4>

        {strengths.map((item) => (
          <div
            key={item}
            className="flex gap-2 text-sm"
          >
            <CheckCircle2
              className="h-4 w-4 text-green-500 mt-1"
            />

            {item}
          </div>
        ))}

      </div>

      <div>

        <h4 className="mb-2 font-medium text-yellow-500">
          Weaknesses
        </h4>

        {weaknesses.map((item) => (
          <div
            key={item}
            className="flex gap-2 text-sm"
          >
            <AlertTriangle
              className="h-4 w-4 text-yellow-500 mt-1"
            />

            {item}
          </div>
        ))}

      </div>

    </div>
  );
}