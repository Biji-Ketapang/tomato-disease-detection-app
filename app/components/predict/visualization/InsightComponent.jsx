import React from 'react';

export default function InsightComponent({ data }) {
  const insights = data.classification_insights;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Model Performance Insights
      </h3>

      <div className="space-y-6">
        {/* Overall Performance */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Overall Performance
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {insights.overall_performance.summary}
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
            {insights.overall_performance.key_observations.map((obs, idx) => (
              <li key={idx}>{obs}</li>
            ))}
          </ul>
        </div>

        {/* Best Performing Classes */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Best Performing Classes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.best_performing_classes.ranking.map((item, idx) => (
              <div key={idx} className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <div className="font-bold text-green-700 dark:text-green-300">
                  {item.class.replace(/_/g, ' ')}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                  {item.reason}
                </div>
                <div className="text-xs text-green-500 dark:text-green-500 mt-2">
                  Error Rate: {item.error_rate || 'N/A'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Classes Needing Improvement */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Classes Needing Improvement
          </h4>
          <div className="space-y-4">
            {insights.classes_needing_improvement.priority_list.map((item, idx) => (
              <div key={idx} className="border-l-4 border-red-500 pl-4 py-2">
                <div className="font-bold text-red-700 dark:text-red-300">
                  {item.class.replace(/_/g, ' ')}
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.issues.map((issue, i) => (
                    <li key={i}>{issue}</li>
                  ))}
                </ul>
                {item.recommendation && (
                  <div className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    💡 {item.recommendation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Data Distribution */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Data Distribution Insights
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {insights.data_distribution_insights.note}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
              <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Largest Class
              </div>
              <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                {insights.data_distribution_insights.class_imbalance.largest_class}
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg">
              <div className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                Smallest Class
              </div>
              <div className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
                {insights.data_distribution_insights.class_imbalance.smallest_class}
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="text-sm font-medium text-red-700 dark:text-red-300">
              Concern
            </div>
            <div className="text-sm text-red-600 dark:text-red-400">
              {insights.data_distribution_insights.class_imbalance.concern}
            </div>
          </div>
        </div>

        {/* Practical Recommendations */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Practical Recommendations
          </h4>
          <div className="space-y-2">
            {insights.practical_recommendations.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-400">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}