import { useEffect,useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getGithubTodasLinguagens } from "../services/githubService.js";
import "../styles/graficos.css"

function LanguageBarCards({ altura = 400 }) {
  const [dados, setDados] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 740);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 740);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    async function carregar() {
      const linguagens = await getGithubTodasLinguagens();
      const total = Object.values(linguagens).reduce((acc, v) => acc + v, 0);

      const formatado = Object.entries(linguagens)
        .map(([name, value]) => ({
          name,
          value: Math.round((value / total) * 100),
        }))
        .sort((a, b) => b.value - a.value);

      setDados(formatado);
    }

    carregar();
  }, []);

  return (
    <div className="language-bar" style={{ width: "100%", height: altura }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dados}
          layout="vertical"
          margin={{
            top: 20,
            right: isMobile ? 30 : 60,
            left: isMobile ? -20 : 20,
            bottom: 10,
          }}
        >
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{
              fill: "#fff",
              fontSize: isMobile ? 10 : 12,
              fontFamily: "League Spartan",
              fontWeight: "bold",
            }}
          />

          <YAxis
            type="category"
            dataKey="name"
            width={isMobile ? 70 : 100}
            tick={({ x, y, payload, index }) => (
              <text
                x={x}
                y={y}
                dy={4}
                textAnchor="end"
                fill={`hsl(${(index * 137.5) % 360}, 70%, 50%)`}
                fontSize={isMobile ? 11 : 14}
                fontFamily="League Spartan"
                fontWeight="bold"
              >
                {payload.value}
              </text>
            )}
          />
         { isMobile && ( <Tooltip
            formatter={(value) => `${value}%`}
            cursor={{ fill: "rgba(255,255,255,0.05)"
             }}
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                borderRadius: "8px",
                fontFamily: "League Spartan",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}

          />)
}
          <Bar dataKey="value">
            {dados.map((_, index) => (
              <Cell
                key={index}
                fill={`hsl(${(index * 137.5) % 360}, 70%, 50%)`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguageBarCards;