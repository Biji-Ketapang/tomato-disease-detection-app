import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import PerformanceSummaryCards from "./PerformanceSummaryCards";
import ClassPerformanceTable from "./ClassPerformanceTable";
import ErrorRateBarChart from "./ErrorRateBarChart";
import MisclassificationHeatmap from "./MisclassificationHeatmap";
import TrainingHistoryChart from "./TrainingHistoryChart";
import InsightComponent from "./InsightComponent";

export default function ModelPerformanceVisualization() {
  const [performanceSummary, setPerformanceSummary] = useState(null);
  const [misclassificationHeatmap, setMisclassificationHeatmap] =
    useState(null);
  const [errorRateData, setErrorRateData] = useState(null);
  const [trainingHistory, setTrainingHistory] = useState(null);
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [summaryRes, heatmapRes, errorRes, historyRes, insightRes] =
          await Promise.all([
            fetch("/data/evaluation/performance_summary.json"),
            fetch("/data/evaluation/misclassification_heatmap.json"),
            fetch("/data/evaluation/error_rate_per_class.json"),
            fetch("/data/evaluation/training_history.json"),
            fetch("/data/evaluation/insight.json"),
          ]);

        const summaryData = await summaryRes.json();
        const heatmapData = await heatmapRes.json();
        const errorData = await errorRes.json();
        const historyData = await historyRes.json();
        const insightData = await insightRes.json();

        setPerformanceSummary(summaryData);
        setMisclassificationHeatmap(heatmapData);
        setErrorRateData(errorData);
        setTrainingHistory(historyData);
        setInsight(insightData);
      } catch (error) {
        console.error("Error loading visualization data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="relative mt-12 p-6 rounded-xl shadow-lg overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-[#cfeac7]
          to-white

          dark:bg-gradient-to-b
          dark:from-[#1a1f1a]
          dark:to-[#1c1c1c]
        "
      />

      <h2 className="text-3xl md:text-4xl font-medium mt-20 text-center">
        Model Performance Visualization
      </h2>

      {/* 1. Performance Summary Cards */}
      {performanceSummary && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Overall Model Performance
          </h3>
          <PerformanceSummaryCards data={performanceSummary} />
        </div>
      )}

      {/* 2. Class Performance Table & Error Rate Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {performanceSummary && (
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <ClassPerformanceTable data={performanceSummary} />
          </div>
        )}
        {errorRateData && (
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <ErrorRateBarChart data={errorRateData} />
          </div>
        )}
      </div>

      {/* 3. Misclassification Heatmap */}
      {misclassificationHeatmap && (
        <div className="mb-10">
          <MisclassificationHeatmap data={misclassificationHeatmap} />
        </div>
      )}

      {/* 4. Training History: Accuracy & Loss */}
      {trainingHistory && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <TrainingHistoryChart
              data={trainingHistory}
              metric="accuracy"
              title="Training vs Validation Accuracy"
            />
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <TrainingHistoryChart
              data={trainingHistory}
              metric="loss"
              title="Training vs Validation Loss"
            />
          </div>
        </div>
      )}

      {/* 5. Insight */}
      {insight && (
        <div className="mb-10">
          <InsightComponent data={insight} />
        </div>
      )}
    </div>
  );
}
