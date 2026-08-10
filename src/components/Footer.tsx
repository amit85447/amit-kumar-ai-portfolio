import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#30363d] py-10 bg-[#0d1117] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-semibold text-slate-300">
            Designed & Developed by <span className="text-sky-400">Amit Kumar</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Data Analyst | AI/ML Specialist | GIS & Remote Sensing • Himachal Pradesh, India
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-white hover:border-sky-500 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-rose-400 hover:border-rose-500 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
