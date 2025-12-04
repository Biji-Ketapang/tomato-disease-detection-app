import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default function MisclassificationHeatmap({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || !chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    
    const option = {
      title: {
        text: data.title,
        subtext: data.description,
        left: 'center',
        textStyle: {
          color: '#4B5563',
          fontSize: 16,
          fontWeight: 'bold'
        },
        subtextStyle: {
          color: '#6B7280',
          fontSize: 12
        }
      },
      tooltip: {
        position: 'top',
        formatter: function(params) {
          const x = params.data[0];
          const y = params.data[1];
          const value = params.data[2];
          return `
            True: ${data.class_names[x].replace(/_/g, ' ')}<br/>
            Predicted: ${data.class_names[y].replace(/_/g, ' ')}<br/>
            Error: ${value.toFixed(2)}%
          `;
        }
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        top: '20%'
      },
      xAxis: {
        type: 'category',
        data: data.class_names.map(name => name.replace(/_/g, ' ')),
        splitArea: {
          show: true
        },
        axisLabel: {
          rotate: 45,
          color: '#6B7280'
        }
      },
      yAxis: {
        type: 'category',
        data: data.class_names.map(name => name.replace(/_/g, ' ')),
        splitArea: {
          show: true
        },
        axisLabel: {
          color: '#6B7280'
        }
      },
      visualMap: {
        min: 0,
        max: Math.max(...data.matrix.flat()),
        calculable: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        textStyle: {
          color: '#6B7280'
        },
        inRange: {
          color: ['#FFFFFF', '#FEF3C7', '#F59E0B', '#EF4444']
        }
      },
      series: [{
        name: 'Misclassification',
        type: 'heatmap',
        data: data.matrix.flatMap((row, i) => 
          row.map((value, j) => [i, j, value])
        ),
        label: {
          show: true,
          formatter: function(params) {
            return params.data[2] > 0 ? params.data[2].toFixed(1) : '';
          },
          color: '#1F2937'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [data]);

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Misclassification Patterns
      </h3>
      <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
    </div>
  );
}