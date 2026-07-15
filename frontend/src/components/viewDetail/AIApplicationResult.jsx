import React from "react";
import {
  CheckCircle2,
  CircleDashed,
  Sparkles,
} from "lucide-react";

function AIApplicationResult({ application }) {
  if (!application) {return null;}

  const score = application.matchScore || 0;

  const stopWords = [
    "with",
    "and",
    "knowledge",
    "experience",
    "understanding",
    "control",
    "management",
    "skill",
    "skills",
  ];

  const matchedSkills =
    application.matchedSkills?.filter(
      (skill) =>
        !stopWords.includes(skill.toLowerCase())
    ) || [];

  const missingSkills =
    application.missingSkills?.filter(
      (skill) =>
        !stopWords.includes(skill.toLowerCase())
    ) || [];

  const getScoreTextColor = () => {
    if (score >= 70) {return "text-blue-600";}
    if (score >= 40) {return "text-blue-500";}
    return "text-gray-600";
  };

  const getMessage = () => {
    if (score >= 70)
      {return "Your resume aligns well with this position.";}
    if (score >= 40)
      {return "You meet several requirements but could improve a few key skills.";}
    return "Consider strengthening the missing skills before applying.";
  };

  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-blue-600" />
          <h2 className="font-semibold text-gray-900">
            AI Resume Match
          </h2>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Analysis based on your resume and job requirements.
        </p>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">
              Match Score
            </h3>
            <p className="text-sm text-gray-500">
              Overall compatibility
            </p>
          </div>

          <span
            className={`text-3xl font-bold ${getScoreTextColor()}`}
          >
            {score}%
          </span>
        </div>

        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
          <p className="text-sm text-blue-800">
            {getMessage()}
          </p>
        </div>

        {(matchedSkills.length > 0 ||
          missingSkills.length > 0) && (
          <div className="mt-5 space-y-5">
            {matchedSkills.length > 0 && (
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-blue-600"
                  />
                  <h4 className="font-medium text-gray-900">
                    Matching Skills
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {matchedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {missingSkills.length > 0 && (
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <CircleDashed
                    size={16}
                    className="text-gray-500"
                  />
                  <h4 className="font-medium text-gray-900">
                    Skills to Improve
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {missingSkills.length > 0 && (
          <div className="mt-5 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-500">
              Improving these skills can help increase your compatibility with similar jobs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIApplicationResult;