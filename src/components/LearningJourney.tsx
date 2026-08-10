import React from "react";
import { GraduationCap, Code, BarChart2, Brain, Cpu, Satellite, Briefcase, CheckCircle2 } from "lucide-react";
import { JOURNEY_STEPS } from "../data/portfolioData";

export const LearningJourney: React.FC = () => {
  const getStepIcon = (iconName?: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-emerald-400" />;
      case "BarChart2":
        return <BarChart2 className="w-5 h-5 text-blue-400" />;
      case "BrainCircuit":
        return <Brain className="w-5 h-5 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case "Satellite":
        return <Satellite className="w-5 h-5 text-amber-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center justify-center gap-3">
            <span>🚀 My Learning & Growth Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The chronological progression from academic Geography to Data Analytics, Machine Learning engineering, and Satellite GeoAI.
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sm:p-8 relative">
          <div className="relative border-l-2 border-[#30363d] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#0d1117] border-2 border-sky-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-sky-500 transition-all">
                  <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:bg-white" />
                </div>

                <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-5 hover:border-sky-500/50 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d]">
                        {getStepIcon(step.icon)}
                      </div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    {step.period && (
                      <span className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[10px] font-bold">
                        {step.period}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-slate-400">{step.subtitle}</p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
