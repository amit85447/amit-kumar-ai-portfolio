import React, { useState } from "react";
import { Search, Code2, BarChart3, Brain, Cpu, Globe2, Wrench, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export const SkillsGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-blue-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center gap-3">
              <span>🛠️ Technical Skills & Tools</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Comprehensive toolkit across programming, data analytics, machine learning, deep learning, GIS & development.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch, GIS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#161b22] border border-[#30363d] rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = cat.skills.filter((s) =>
              s.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 backdrop-blur-md hover:border-sky-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-[#30363d] mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0d1117] border border-[#30363d] group-hover:scale-110 transition-transform">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <h3 className="text-base font-bold text-slate-100">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {filteredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-medium hover:bg-sky-500/20 hover:border-sky-400 transition-all"
                      >
                        <Check className="w-3 h-3 text-sky-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#30363d]/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Category Proficiency</span>
                  <span className="text-emerald-400 font-semibold">Ready for Industry Projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
