import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default function ErrorRateBarChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || !chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    
    const option = {
      title: {
        text: data.title,
        left: 'center',
        textStyle: {
          color: '#4B5563',
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function(params) {
          const value = params[0].value;
          return `${params[0].name}<br/>Error Rate: ${(value * 100).toFixed(2)}%`;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.class_names.map(name => name.replace(/_/g, ' ')),
        axisLabel: {
          rotate: 45,
          color: '#6B7280',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: '#D1D5DB'
          }
        }
      },
      yAxis: {
        type: 'value',
        name: 'Error Rate',
        nameTextStyle: {
          color: '#6B7280'
        },
        axisLabel: {
          formatter: function(value) {
            return (value * 100).toFixed(1) + '%';
          },
          color: '#6B7280'
        },
        splitLine: {
          lineStyle: {
            color: '#E5E7EB',
            type: 'dashed'
          }
        }
      },
      series: [
        {
          name: 'Error Rate',
          type: 'bar',
          data: data.error_rates.map((rate, index) => ({
            value: rate,
            itemStyle: {
              color: index < 3 ? '#EF4444' : 
                     index < 6 ? '#F59E0B' : 
                     '#10B981'
            }
          })),
          label: {
            show: true,
            position: 'top',
            formatter: function(params) {
              return (params.value * 100).toFixed(1) + '%';
            },
            color: '#374151',
            fontSize: 12
          },
          barWidth: '60%'
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
  }, [data]);

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Error Rate per Class
      </h3>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}