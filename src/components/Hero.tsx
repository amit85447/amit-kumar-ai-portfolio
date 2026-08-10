import React from "react";
import { Github, Linkedin, Mail, Download, MapPin, ArrowUpRight, Sparkles, Code, Globe, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  return (
    <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open to Data & AI Opportunities in India & Remote</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Amit Kumar
                </span>{" "}
                👋
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-sky-300/90 leading-snug">
                Data Analyst | AI/ML Enthusiast | GIS & Remote Sensing
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Geography graduate passionate about Data Analytics, Python, Machine Learning, Deep Learning, GIS and Remote Sensing. I enjoy transforming complex spatial and tabular data into actionable intelligence and building practical interactive applications.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d]">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Himachal Pradesh, India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d]">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Spatial Science & AI Integration</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-blue-500 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#161b22] border border-[#30363d] text-slate-200 font-semibold text-xs hover:border-sky-500/50 hover:bg-slate-800/80 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </a>

              <button
                onClick={onOpenAiAssistant}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold text-xs hover:bg-purple-500/25 transition-all"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Ask AI Assistant</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] text-slate-300 hover:text-white hover:border-sky-500 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] text-slate-300 hover:text-sky-400 hover:border-sky-500 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] text-slate-300 hover:text-rose-400 hover:border-rose-500 transition-all"
                title="Email Amit"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Profile Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-2xl text-slate-200 space-y-6">
                {/* Avatar Graphic Frame */}
                <div className="relative flex flex-col items-center text-center pt-2">
                  <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-slate-800 via-sky-950 to-purple-950 p-1.5 border-2 border-sky-500/40 shadow-xl overflow-hidden group">
                    <div className="w-full h-full rounded-xl bg-[#0d1117] flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                        AK
                      </div>
                      <div className="mt-2 px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono font-semibold">
                        Geo-AI Analyst
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mt-4">Amit Kumar</h3>
                  <p className="text-xs text-sky-400 font-medium">Data Analyst & Geospatial Engineer</p>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" /> BA Geography • Python • PyTorch
                  </p>
                </div>

                {/* Skill Matrix Badges */}
                <div className="space-y-2.5 pt-2 border-t border-[#30363d]">
                  <div className="flex justify-between text-xs font-semibold text-slate-400">
                    <span>Core Domain Matrix</span>
                    <span className="text-sky-400">100% Verified</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "SQL", "Pandas", "Scikit-Learn", "PyTorch", "Power BI", "GIS", "Remote Sensing", "Streamlit"].map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-[#0d1117] border border-[#30363d] text-xs font-medium text-slate-300 hover:border-sky-500 hover:text-sky-300 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d] text-center">
                    <span className="block text-xl font-extrabold text-sky-400">8+</span>
                    <span className="text-[11px] text-slate-400 font-medium">Projects Built</span>
                  </div>
                  <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d] text-center">
                    <span className="block text-xl font-extrabold text-purple-400">4+</span>
                    <span className="text-[11px] text-slate-400 font-medium">Domain Pillars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
