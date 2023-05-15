import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function ApexChart({ data }) {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        style: {
          fontSize: "1.4em",
          colors: "white",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
          fontSize: "1rem",
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);

  useEffect(() => {
    if (data.length > 0) {
      const categories = data.map((obj) => obj.word);
      const values = data.map((obj) => obj.count);

      let fontSize = "1.2em";
      if (window.innerWidth < 426) {
        fontSize = "0.8em";
      }

      setOptions({
        ...options,
        xaxis: {
          categories: categories,
          labels: {
            style: {
              fontSize: fontSize,
              colors: "white",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "white",
              fontSize: fontSize,
            },
          },
        },
        colors: ["#008FFB"],
      });

      setSeries([
        {
          data: values,
        },
      ]);
    }
  }, [data]);

  return (
    <div className="chart-container">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
}

export default ApexChart;
