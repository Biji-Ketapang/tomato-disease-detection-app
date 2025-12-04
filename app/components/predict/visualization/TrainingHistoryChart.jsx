import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default function TrainingHistoryChart({ data, metric, title }) {
  const chartRef = useRef(null);
  const isDarkMode = document.documentElement.classList.contains('dark');

  useEffect(() => {
    if (!data || !chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    
    const trainingData = metric === 'accuracy' ? data.training_accuracy : data.training_loss;
    const validationData = metric === 'accuracy' ? data.validation_accuracy : data.validation_loss;
    const yAxisName = metric === 'accuracy' ? 'Accuracy' : 'Loss';
    
    const option = {
      title: {
        text: title,
        left: 'center',
        textStyle: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563',
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['Training', 'Validation'],
        top: '10%',
        textStyle: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.epochs,
        name: 'Epoch',
        nameTextStyle: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563'
        },
        axisLabel: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563'
        },
        axisLine: {
          lineStyle: {
            color: isDarkMode ? '#4B5563' : '#D1D5DB'
          }
        }
      },
      yAxis: {
        type: 'value',
        name: yAxisName,
        nameTextStyle: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563'
        },
        axisLabel: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563',
          formatter: metric === 'accuracy' ? function(value) {
            return (value * 100).toFixed(1) + '%';
          } : undefined
        },
        splitLine: {
          lineStyle: {
            color: isDarkMode ? '#4B5563' : '#E5E7EB',
            type: 'dashed'
          }
        }
      },
      series: [
        {
          name: 'Training',
          type: 'line',
          data: trainingData,
          itemStyle: {
            color: '#3B82F6'
          },
          lineStyle: {
            width: 3
          },
          symbol: 'circle',
          symbolSize: 6,
          smooth: true
        },
        {
          name: 'Validation',
          type: 'line',
          data: validationData,
          itemStyle: {
            color: '#EF4444'
          },
          lineStyle: {
            width: 3
          },
          symbol: 'circle',
          symbolSize: 6,
          smooth: true
        }
      ]
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [data, metric, title, isDarkMode]);

  return (
    <div>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}