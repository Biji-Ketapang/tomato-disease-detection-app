import React from 'react';

export default function PerformanceSummaryCards({ data }) {
  const metrics = [
    { 
      label: 'Overall Accuracy', 
      value: (data.overall_accuracy * 100).toFixed(2) + '%',
      description: 'Total correct predictions',
      color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
    },
    { 
      label: 'Macro F1-Score', 
      value: data.macro_f1.toFixed(4),
      description: 'Harmonic mean of precision and recall',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
    },
    { 
      label: 'Macro Precision', 
      value: data.macro_precision.toFixed(4),
      description: 'Average precision across all classes',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
    },
    { 
      label: 'Macro Recall', 
      value: data.macro_recall.toFixed(4),
      description: 'Average recall across all classes',
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
    },
    { 
      label: 'Weighted F1', 
      value: data.weighted_f1.toFixed(4),
      description: 'F1-score weighted by support',
      color: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
    },
    { 
      label: 'Misclassification Rate', 
      value: (data.confusion_matrix_metrics.misclassification_rate * 100).toFixed(2) + '%',
      description: 'Total incorrect predictions',
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className={`p-4 rounded-lg ${metric.color}`}>
          <div className="text-sm font-medium mb-1">{metric.label}</div>
          <div className="text-2xl font-bold mb-2">{metric.value}</div>
          <div className="text-xs opacity-80">{metric.description}</div>
        </div>
      ))}
    </div>
  );
}