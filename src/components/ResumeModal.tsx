import React from "react";
import { X, Download, FileText, CheckCircle2, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/pdf summary download if file isn't present
    const resumeText = `
====================================================
AMIT KUMAR - RESUME
Data Analyst | AI/ML Enthusiast | GIS & Remote Sensing
Location: Himachal Pradesh, India
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
====================================================

SUMMARY:
Geography graduate passionate about Data Analytics, Python, Machine Learning, Artificial Intelligence, GIS and Remote Sensing. Transforming complex spatial and numerical data into actionable insights and building practical intelligent applications.

EDUCATION:
- Bachelor of Arts (BA) in Geography
  Government Degree College, Nagrota Bagwan, Himachal Pradesh, India

TECHNICAL SKILLS:
- Programming: Python, SQL
- Data Analytics: Pandas, NumPy, Excel, Matplotlib, Seaborn, Power BI, EDA, Data Cleaning
- Machine Learning: Scikit-learn, Regression, Classification, Random Forest, KNN, Feature Engineering
- Deep Learning: PyTorch, Neural Networks, Computer Vision
- GIS & Remote Sensing: Spatial Analysis, Satellite Image Processing, LULC Classification, Change Detection
- Development: Streamlit, Tkinter, MySQL, Git, GitHub

FEATURED PROJECTS:
1. AI-Based Cyber Attack Detection
2. AI-Based Candidate Selection System
3. Student Result Prediction & Analytics
4. Student Attendance Management System
5. Weather Forecast Application
6. AI Voice Assistant
7. GeoVision AI – LULC Classification
8. GeoChange AI – Satellite Change Detection
====================================================
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Amit_Kumar_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl bg-[#0d1117] border border-[#30363d] text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between border-b border-[#30363d] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Amit Kumar — Official Resume</h3>
              <p className="text-xs text-sky-400 font-medium">Data Analyst | AI/ML Enthusiast | GIS & RS</p>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-lg hover:from-sky-400 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 text-slate-200 space-y-5 font-sans">
          <div className="border-b border-[#30363d] pb-4 space-y-2">
            <h2 className="text-2xl font-bold text-slate-100">Amit Kumar</h2>
            <p className="text-xs text-sky-400 font-semibold">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-400" /> Himachal Pradesh, India</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> {PERSONAL_INFO.email}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Professional Summary</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{PERSONAL_INFO.bio}</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Education</h4>
            <div className="text-xs space-y-1">
              <p className="font-bold text-slate-100">{PERSONAL_INFO.education.degree}</p>
              <p className="text-slate-400">{PERSONAL_INFO.education.college}, {PERSONAL_INFO.education.location}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Key Technical Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn", "PyTorch", "Power BI", "GIS", "Remote Sensing", "Streamlit", "Tkinter"].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-[#161b22] border border-[#30363d] text-[11px] text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
