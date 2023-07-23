import React from "react";
import ReactApexChart from "react-apexcharts";

function Analytics() {
  const chartData = {
    options: {
      chart: {
        id: "column-chart",
      },
      xaxis: {
        title: {
          text: "Hours Focused",
        },
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      dataLabels: {
        enabled: true,
      },
    },
    series: [
      {
        name: "You",
        data: [2, 6, 1, 0, 4, 5, 9],
      },
    ],
  };

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={200}
    />
  );
}

export default Analytics;
