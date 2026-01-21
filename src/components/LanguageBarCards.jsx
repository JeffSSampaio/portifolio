import { useEffect,useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getGithubTodasLinguagens } from "../services/github";
import "../styles/graficos.css"

function LanguageBarCards({largura, altura}) {
    const [dados, setDados] = useState([]);
     useEffect(() => {
    async function carregar() {
      const linguagens = await getGithubTodasLinguagens();
      const total = Object.values(linguagens).reduce((acc, v) => acc + v, 0);
      const formatado = Object.entries(linguagens)
        .map(([name, value]) => ({
          name,
          value:Math.round((value / total)*100)
        }))
        .sort((a, b) => b.value - a.value); 

      setDados(formatado);
    }

    carregar();
  }, []);
    return(
        <div className="language-graph" style={{ width: largura || '100%', height: altura || 400 }}>
          <ResponsiveContainer width="100%" height="100%" >
            <BarChart data={dados} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
              <XAxis type="number"
              domain={[0,100]}
              tickFormatter={(value)=>`${value}%`}
              interval={2}
              ticks={[0,20,40,50,60,80,100]}
              tick={({ x, y, payload }) => (
             <text x={x} y={y + 5} textAnchor="middle" fill={"#fff"} fontSize={12} fontFamily="League Spartan" fontWeight="bold">
             {payload.value}%
            </text>
  )}
/>
              <YAxis dataKey="name" type="category" width={100}
              tick={({ x, y, payload, index }) => (
             <text x={x} y={y} dy={4} textAnchor="end" fill={`hsl(${(index * 137.5) % 360}, 70%, 50%)`} fontSize={14} fontFamily="League Spartan" fontWeight="bold">
                {payload.value}
              </text>
                )}
/>

              <Bar dataKey="value" fill="#8884d8">
                {dados.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
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