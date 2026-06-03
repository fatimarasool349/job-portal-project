import React from "react";

function AISidePanel({ application }) {
  if (!application) return null;

  const score = application.matchScore || 0;

  const getLabel = () => {
    if (score >= 70) return "Strong Match";
    if (score >= 40) return "Moderate Match ";
    return "Weak Match ";
  };

  const getColor = () => {
    if (score >= 70) return "text-blue-800 bg-blue-50";
    if (score >= 40) return "text-blue-600 bg-blue-50";
    return "text-gray-600 bg-gray-50";
  };

  return (
    <div className="lg:col-span-4 space-y-6">
      <div className="sticky top-6 space-y-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
          <h3 className="text-sm text-gray-500 mb-2">AI Verdict</h3>

          <div className={`px-3 py-2 rounded-xl font-semibold ${getColor()}`}>
            {getLabel()}
          </div>

          <div className="mt-4 text-sm text-gray-600 ">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Match Score</span>

              <span className="font-bold">{score}%</span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                style={{ width: `${score}%` }}
                className="h-full bg-linear-to-r from-blue-400 to-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
          <h3 className="font-semibold text-gray-800 mb-3">
            Top Matched Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {application.matchedSkills?.length ? (
              application.matchedSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-400">No matched skills found</p>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
          <h3 className="font-semibold text-gray-800 mb-3">
            Key Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {application.missingSkills?.slice(0, 4).map((skill, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISidePanel;
