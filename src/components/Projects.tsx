import React, { useState } from "react";
import { FolderGit2, Github, ExternalLink, Play, Sparkles, Filter, Code } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import { Project } from "../types";

interface ProjectsProps {
  onOpenSimulator: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenSimulator }) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "🤖 AI & Machine Learning" },
    { id: "gis-remote-sensing", label: "🛰️ GIS & Remote Sensing" },
    { id: "data-analytics", label: "📊 Data Analytics" },
    { id: "dev-tools", label: "💻 Desktop & Dev Tools" },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center gap-3">
              <span>🚀 Featured Portfolio Projects</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Explore 8 end-to-end applications across Machine Learning, Data Analytics, Satellite GIS, and Desktop Tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#161b22] p-1.5 rounded-2xl border border-[#30363d]">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 backdrop-blur-md hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.hasSimulator && (
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px] font-bold shrink-0 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-400" /> Interactive Simulator
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{project.desc}</p>

                {project.detailedDesc && (
                  <p className="text-[11px] text-slate-400 leading-relaxed italic bg-[#0d1117] p-3 rounded-xl border border-[#30363d]/60">
                    "{project.detailedDesc}"
                  </p>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-[#0d1117] border border-[#30363d] text-slate-300 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-[#30363d] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white hover:underline"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repository</span>
                </a>

                {project.hasSimulator ? (
                  <button
                    onClick={() => onOpenSimulator(project.id)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500 hover:text-white transition-all text-xs font-bold shadow-md"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Live Simulator</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-500 italic">Live Demo Ready</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
