
import { getGithubTopLinguagens } from "../services/github";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell,Legend } from "recharts";
import "../styles/graficos.css"
function LanguagePieCards({largura, altura, margem}) {
   
   const [dados, setDados] = useState([]);
   useEffect(() => {
    getGithubTopLinguagens(4).then(linguagens => {
      const resultado = Object.entries(linguagens).map(
        ([name, bytes]) => ({
          name,
          value: bytes
        })
      );

      setDados(resultado);
    });
  }, []);

const renderLabel = ({ name, percent, x, y, index }) => {
  return (
    <text 
      x={x} 
      y={y} 
      fill={`hsl(${(index * 137.5) % 360}, 70%, 50%)`}
      textAnchor={x > 250 ? 'start' : 'end'}
      dominantBaseline="middle"
      fontFamily="League Spartan"
      fontWeight="bold"
      fontSize="16"
    >
      {name} {(percent * 100).toFixed(0)}%
    </text>
  );
};
    return (
        <PieChart width={largura} height={altura} margin={margem} className="language-graph">
          <Pie
            data={dados}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            fill="#8884d8"
            label ={renderLabel}
            labelLine={true}
            >
            {dados.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`hsl(${(index * 137.5) % 360}, 70%, 50%)`}
              />
            ))}
          </Pie>
          <Legend/>
        </PieChart>
    );
}

export default LanguagePieCards;