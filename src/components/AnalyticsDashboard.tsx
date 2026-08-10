import React, { useState } from "react";
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { BarChart3, Download, RefreshCw, Filter, Layers, TrendingUp } from "lucide-react";
import { ANALYTICS_DATA } from "../data/portfolioData";

export const AnalyticsDashboard: React.FC = () => {
  const [chartType, setChartType] = useState<"area" | "line" | "bar">("area");
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(["Kangra", "Shimla", "Mandi"]);

  const districtColors: Record<string, string> = {
    Kangra: "#38bdf8", // Sky
    Shimla: "#c084fc", // Purple
    Mandi: "#34d399", // Emerald
    Kullu: "#fbbf24", // Amber
    Solan: "#f43f5e", // Rose
  };

  const allDistricts = ["Kangra", "Mandi", "Shimla", "Kullu", "Solan"];

  const toggleDistrict = (district: string) => {
    if (selectedDistricts.includes(district)) {
      if (selectedDistricts.length > 1) {
        setSelectedDistricts(selectedDistricts.filter((d) => d !== district));
      }
    } else {
      setSelectedDistricts([...selectedDistricts, district]);
    }
  };

  const totalPoints = ANALYTICS_DATA.length * allDistricts.length;
  let sumValues = 0;
  ANALYTICS_DATA.forEach((rec) => {
    allDistricts.forEach((d) => {
      sumValues += (rec as any)[d] || 0;
    });
  });
  const avgValue = (sumValues / totalPoints).toFixed(1);

  const downloadCSV = () => {
    const headers = ["Month", ...allDistricts];
    const rows = ANALYTICS_DATA.map((r) => [r.month, r.Kangra, r.Mandi, r.Shimla, r.Kullu, r.Solan].join(","));
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Amit_Kumar_Regional_Analytics.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="analytics" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center gap-3">
            <span>📊 End-to-End Data Analytics Workflow & Dashboard</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Data Collection → Data Cleaning → Preprocessing → EDA → SQL Analysis → Interactive Visualization → Insights
          </p>
        </div>

        {/* Workflow Pipeline Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 backdrop-blur-md space-y-4">
          <h3 className="text-sm font-bold text-sky-400 uppercase tracking-wider">🔄 Analytics Pipeline Architecture</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs">
            {[
              "1. Collection",
              "2. Cleaning",
              "3. Preprocess",
              "4. EDA",
              "5. SQL Queries",
              "6. Visuals",
              "7. ML Models",
              "8. Insights",
            ].map((step, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-slate-300 font-semibold">
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* KPI Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#161b22] border border-[#30363d] p-5 rounded-2xl">
            <span className="text-xs text-slate-500 font-semibold block">Total Data Points</span>
            <span className="text-2xl font-extrabold text-sky-400 mt-1 block">{totalPoints} Records</span>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] p-5 rounded-2xl">
            <span className="text-xs text-slate-500 font-semibold block">Average Metric Index</span>
            <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">{avgValue} Units</span>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] p-5 rounded-2xl">
            <span className="text-xs text-slate-500 font-semibold block">Districts Tracked</span>
            <span className="text-2xl font-extrabold text-purple-400 mt-1 block">{allDistricts.length} Regions</span>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] p-5 rounded-2xl flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-semibold block">Export Dataset</span>
            <button
              onClick={downloadCSV}
              className="mt-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold hover:bg-sky-500 hover:text-white transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download CSV</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Recharts Chart Area */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#30363d]">
            <div>
              <h3 className="text-lg font-bold text-slate-100">Regional Performance Trends (Himachal Pradesh)</h3>
              <p className="text-xs text-slate-400">Interactive multi-district temporal breakdown.</p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Chart Type Selector */}
              <div className="flex items-center gap-1 bg-[#0d1117] p-1 rounded-xl border border-[#30363d]">
                {(["area", "line", "bar"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setChartType(t)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                      chartType === t
                        ? "bg-sky-500 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* District Toggles */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold mr-2">Filter Districts:</span>
            {allDistricts.map((district) => {
              const active = selectedDistricts.includes(district);
              return (
                <button
                  key={district}
                  onClick={() => toggleDistrict(district)}
                  className={`px-3 py-1.5 rounded-xl border font-semibold transition-all ${
                    active
                      ? "bg-[#0d1117] text-white border-sky-500/80 shadow-md"
                      : "bg-[#0d1117]/50 text-slate-500 border-[#30363d]"
                  }`}
                  style={{
                    borderColor: active ? districtColors[district] : undefined,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block mr-1.5"
                    style={{ backgroundColor: districtColors[district] }}
                  />
                  {district}
                </button>
              );
            })}
          </div>

          {/* Render Recharts */}
          <div className="h-80 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "area" ? (
                <AreaChart data={ANALYTICS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                  <XAxis dataKey="month" stroke="#8b949e" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#8b949e" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#161b22", borderColor: "#30363d", borderRadius: "12px", color: "#f0f6fc" }}
                  />
                  <Legend />
                  {selectedDistricts.map((d) => (
                    <Area
                      key={d}
                      type="monotone"
                      dataKey={d}
                      stroke={districtColors[d]}
                      fill={districtColors[d]}
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  ))}
                </AreaChart>
              ) : chartType === "line" ? (
                <LineChart data={ANALYTICS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                  <XAxis dataKey="month" stroke="#8b949e" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#8b949e" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#161b22", borderColor: "#30363d", borderRadius: "12px", color: "#f0f6fc" }}
                  />
                  <Legend />
                  {selectedDistricts.map((d) => (
                    <Line
                      key={d}
                      type="monotone"
                      dataKey={d}
                      stroke={districtColors[d]}
                      strokeWidth={2.5}
                      dot={{ r: 4 }}
                    />
                  ))}
                </LineChart>
              ) : (
                <BarChart data={ANALYTICS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                  <XAxis dataKey="month" stroke="#8b949e" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#8b949e" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#161b22", borderColor: "#30363d", borderRadius: "12px", color: "#f0f6fc" }}
                  />
                  <Legend />
                  {selectedDistricts.map((d) => (
                    <Bar key={d} dataKey={d} fill={districtColors[d]} radius={[4, 4, 0, 0]} />
                  ))}
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
