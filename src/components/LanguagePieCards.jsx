import { getGithubTopLinguagens } from "../services/githubService.js";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts";
import "../styles/graficos.css";

function LanguagePieCards({ altura = 320, margem }) {
  const [dados, setDados] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 740);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 740);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getGithubTopLinguagens(4).then(linguagens => {
      const resultado = Object.entries(linguagens).map(([name, bytes]) => ({
        name,
        value: bytes
      }));
      setDados(resultado);
    });
  }, []);

  const totalValue = dados.reduce((acc, curr) => acc + curr.value, 0);

  const renderLabel = ({ name, percent, x, y, cx }) => {
    if (isMobile) return null;

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="middle"
        fontFamily="League Spartan"
        fontWeight="bold"
        fontSize="14"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="language-graph" style={{ width: "100%", height: isMobile ? 320 : altura }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={margem}>
          {isMobile && (
            <Tooltip
              formatter={(value) => {
                const porcento = totalValue > 0 ? ((value / totalValue) * 100).toFixed(0) : 0;
                return [`${porcento}%`, "Uso"];
              }}
              contentStyle={{
                backgroundColor: "rgba(51, 51, 51, 0.9)",
                border: "none",
                borderRadius: "12px",
                fontFamily: "League Spartan",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
              }}
              itemStyle={{ color: "#fff" }}
            />
          )}
          <Pie
            data={dados}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={isMobile ? 75 : 100}
            innerRadius={isMobile ? 45 : 0}
            label={renderLabel}
            labelLine={!isMobile}
            stroke="none"
          >
            {dados.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={`hsl(${(index * 137.5) % 360}, 70%, 50%)`} 
                style={{ outline: 'none' }}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ 
              paddingTop: "10px", 
              fontFamily: "League Spartan", 
              fontWeight: "bold", 
              color: "#fff",
              fontSize: isMobile ? "12px" : "14px"
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguagePieCards;