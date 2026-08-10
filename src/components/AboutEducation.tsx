import React from "react";
import { GraduationCap, Map, BarChart2, Brain, Satellite, CheckCircle, Award } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center justify-center gap-3">
            <span>👨‍💻 About Me & Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging spatial thinking, geography, data analytics, and modern artificial intelligence to transform complex information into meaningful insights.
          </p>
        </div>

        {/* Story Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-sky-500/40 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                The Convergence of <span className="text-sky-400">Geography</span>, <span className="text-blue-400">Data</span>, and <span className="text-purple-400">AI</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I hold a <strong className="text-white">Bachelor of Arts (BA) in Geography</strong> from Government Degree College, Nagrota Bagwan, Himachal Pradesh. Over time, I extended my academic background in physical geography and cartography into technical data domains including <strong className="text-sky-300">Python, Data Analytics, Machine Learning, Deep Learning, GIS and Remote Sensing</strong>.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                I enjoy cleaning and analyzing complex datasets, engineering features, training machine learning models, creating interactive dashboards, and connecting spatial geography with cutting-edge computer vision for land cover classification and environmental change detection.
              </p>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                  <Map className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">🗺️ Spatial Thinking</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Demographic, cartographic, and environmental spatial understanding.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                  <BarChart2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">📊 Data Analytics</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Data cleaning, SQL querying, EDA, and Power BI dashboards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                  <Brain className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">🤖 AI & Machine Learning</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Regression, classification, Random Forest, PyTorch neural networks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                  <Satellite className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">🛰️ GIS & Remote Sensing</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Multispectral satellite analysis & LULC segmentation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline Showcase */}
            <div className="lg:col-span-5 bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 relative">
              <div className="flex items-center gap-3 pb-4 border-b border-[#30363d] mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100">Academic Background</h4>
                  <p className="text-xs text-sky-400 font-medium">Undergraduate Degree</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-sky-500/40 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-sky-500 ring-4 ring-[#0d1117]" />
                  <h5 className="text-sm font-bold text-slate-100">{PERSONAL_INFO.education.degree}</h5>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">{PERSONAL_INFO.education.college}</p>
                  <p className="text-xs text-slate-500">{PERSONAL_INFO.education.location}</p>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                    {PERSONAL_INFO.education.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
