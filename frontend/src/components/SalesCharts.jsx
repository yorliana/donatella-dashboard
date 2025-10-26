import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

export default function SalesCharts({ ventasHoy }) {
  // Datos para gráfico de barras: ventas por sabor
  const saborData = [];
  const colorMap = ["#f43f5e", "#ec4899", "#f97316", "#3b82f6", "#10b981"];

  ventasHoy.forEach(f => {
    f.items.forEach(item => {
      const existing = saborData.find(d => d.name === item.sabor);
      if (existing) existing.value += 1;
      else saborData.push({ name: item.sabor, value: 1 });
    });
  });

  // Datos para gráfico de línea: total ingresos
  const ingresosData = ventasHoy.map((f, idx) => ({
    name: `Venta ${idx+1}`,
    total: f.total,
  }));

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      <div className="bg-white p-4 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-2 text-center">🍩 Ventas por sabor</h2>
        <PieChart width={250} height={250}>
          <Pie data={saborData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {saborData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorMap[index % colorMap.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-2 text-center">💰 Ingresos por venta</h2>
        <BarChart width={250} height={250} data={ingresosData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#f43f5e" />
        </BarChart>
      </div>
    </div>
  );
}
