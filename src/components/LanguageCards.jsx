
import { getGithubRepositorios } from "../services/github";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell,Tooltip,Legend } from "recharts";

function LanguageCards({largura, altura, margem}) {
   
   const [dados, setDados] = useState([]);
   useEffect(() => {
    getGithubRepositorios().then(repos => {
      const linguagens = {};

      repos.forEach(repo => {
        if (repo.language) {
          linguagens[repo.language] =
            (linguagens[repo.language] || 0) + 1;
        }
      });

      const resultado = Object.entries(linguagens).map(
        ([name, value]) => ({
          name,
          value
        })
      );

      setDados(resultado);
    });
  }, []);

const renderLabel = ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`;
    return (
        <PieChart width={largura} height={altura} margin={margem}>
          <Pie
            data={dados}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label ={renderLabel}
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

export default LanguageCards;