import React, { useState, useEffect } from "react";
import ApexChart from "./ApexChart";

function Data() {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.terriblytinytales.com/test.txt"
      );
      const text = await response.text();
      const wordsMap = text
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .split(/\s+/)
        .reduce((map, word) => {
          map[word] = (map[word] || 0) + 1;
          return map;
        }, {});
      const wordsList = Object.keys(wordsMap)
        .map((word) => ({ word, count: wordsMap[word] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 20);
      setWords(wordsList);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div className="chart-wrapper">
        {isLoading ? (
          <div className="loader"><div></div><div></div><div></div><div></div></div>
        ) : (
          <div className="graph">
            <h1
              style={{ textAlign: "center", color: "white", fontSize: "2rem" }}
            >
              Word Frequency Graph
            </h1>
            <ApexChart data={words} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Data;
