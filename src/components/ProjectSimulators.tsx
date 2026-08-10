import React, { useState } from "react";
import { X, Play, RefreshCw, ShieldAlert, UserCheck, CloudSun, Satellite, Layers, ArrowRight, Activity, Award } from "lucide-react";

interface ProjectSimulatorsProps {
  activeSimulator: string | null;
  onClose: () => void;
}

export const ProjectSimulators: React.FC<ProjectSimulatorsProps> = ({ activeSimulator, onClose }) => {
  if (!activeSimulator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl space-y-6">
        {/* Modal Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl bg-[#0d1117] border border-[#30363d] text-slate-400 hover:text-white hover:border-rose-500 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {activeSimulator === "cyber-attack-detection" && <CyberAttackSimulator />}
        {activeSimulator === "candidate-selection-system" && <CandidateSelectionSimulator />}
        {activeSimulator === "weather-forecast-app" && <WeatherSimulator />}
        {(activeSimulator === "geovision-ai" || activeSimulator === "geochange-ai") && (
          <GeospatialAiSimulator type={activeSimulator} />
        )}
        {activeSimulator === "student-result-prediction" && <StudentResultSimulator />}
        {activeSimulator === "student-attendance-management" && <AttendanceSimulator />}
        {activeSimulator === "ai-voice-assistant" && <VoiceAssistantSimulator />}
      </div>
    </div>
  );
};

/* ---------------------------------------------------- */
/* 1. CYBER ATTACK SIMULATOR */
/* ---------------------------------------------------- */
const CyberAttackSimulator: React.FC = () => {
  const [packetSize, setPacketSize] = useState(850);
  const [duration, setDuration] = useState(5);
  const [failedLogins, setFailedLogins] = useState(2);
  const [protocol, setProtocol] = useState("TCP");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSimulate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/simulate/cyber-attack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packetSize, duration, failedLogins, protocol }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
        <div className="p-3 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">AI Cyber Attack Detection Simulator</h3>
          <p className="text-xs text-slate-400">Interactive ML network flow analysis model testing anomaly detection heuristics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>Packet Size (Bytes):</span>
            <span className="text-sky-400">{packetSize} B</span>
          </label>
          <input
            type="range"
            min="64"
            max="4000"
            value={packetSize}
            onChange={(e) => setPacketSize(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>Flow Duration (Sec):</span>
            <span className="text-sky-400">{duration} s</span>
          </label>
          <input
            type="range"
            min="0.1"
            max="30"
            step="0.5"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>Failed Logins:</span>
            <span className="text-rose-400">{failedLogins}</span>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={failedLogins}
            onChange={(e) => setFailedLogins(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">Network Protocol:</label>
          <select
            value={protocol}
            onChange={(e) => setProtocol(e.target.value)}
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="TCP">TCP (Transmission Control Protocol)</option>
            <option value="UDP">UDP (User Datagram Protocol)</option>
            <option value="ICMP">ICMP (Ping/Control)</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSimulate}
        disabled={loading}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2 hover:from-rose-400 hover:to-amber-500 transition-all shadow-lg"
      >
        {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
        <span>Run Machine Learning Inspection</span>
      </button>

      {result && (
        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Classification Outcome:</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                Number(result.anomalyScore) > 60
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {result.classification}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d]">
              <span className="text-slate-500 block">Anomaly Risk Score</span>
              <span className="text-lg font-extrabold text-sky-400">{result.anomalyScore} / 100</span>
            </div>
            <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d]">
              <span className="text-slate-500 block">Diagnosed Threat Type</span>
              <span className="text-sm font-bold text-amber-400">{result.threatType}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------------------------------------------------- */
/* 2. CANDIDATE SELECTION SIMULATOR */
/* ---------------------------------------------------- */
const CandidateSelectionSimulator: React.FC = () => {
  const [pythonScore, setPythonScore] = useState(85);
  const [mlScore, setMlScore] = useState(80);
  const [sqlScore, setSqlScore] = useState(75);
  const [geographyBackground, setGeographyBackground] = useState(true);
  const [projectCount, setProjectCount] = useState(4);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleEvaluate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/simulate/candidate-evaluator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pythonScore, mlScore, sqlScore, geographyBackground, projectCount }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
        <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
          <UserCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">AI Candidate Evaluation System</h3>
          <p className="text-xs text-slate-400">Screen applicant profile metrics, technical proficiencies, and geospatial alignment.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>Python Proficiency:</span>
            <span className="text-sky-400">{pythonScore} / 100</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={pythonScore}
            onChange={(e) => setPythonScore(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>Machine Learning & PyTorch:</span>
            <span className="text-purple-400">{mlScore} / 100</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={mlScore}
            onChange={(e) => setMlScore(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>SQL & Data Analytics:</span>
            <span className="text-emerald-400">{sqlScore} / 100</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={sqlScore}
            onChange={(e) => setSqlScore(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex justify-between">
            <span>Portfolio Projects Built:</span>
            <span className="text-amber-400">{projectCount} Projects</span>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={projectCount}
            onChange={(e) => setProjectCount(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
        <span className="text-xs font-semibold text-slate-300">BA Geography / Spatial Science Degree Alignment:</span>
        <button
          onClick={() => setGeographyBackground(!geographyBackground)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            geographyBackground
              ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
              : "bg-slate-800 text-slate-400 border border-slate-700"
          }`}
        >
          {geographyBackground ? "✓ Yes (+5 Spatial Bonus)" : "No"}
        </button>
      </div>

      <button
        onClick={handleEvaluate}
        disabled={loading}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg"
      >
        {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Award className="w-4 h-4" />}
        <span>Evaluate Candidate Fit Score</span>
      </button>

      {result && (
        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Candidate Evaluation Metric:</span>
            <span className="text-2xl font-extrabold text-sky-400">{result.overallScore} / 100</span>
          </div>

          <p className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg font-medium">
            Status: {result.status}
          </p>

          <p className="text-xs text-slate-300 leading-relaxed italic">{result.recommendation}</p>
        </div>
      )}
    </div>
  );
};

/* ---------------------------------------------------- */
/* 3. WEATHER SIMULATOR */
/* ---------------------------------------------------- */
const WeatherSimulator: React.FC = () => {
  const [city, setCity] = useState("Kangra, HP");

  const weatherData: Record<string, any> = {
    "Kangra, HP": { temp: "26°C", condition: "Partly Cloudy", humidity: "62%", wind: "12 km/h", forecast: "Favorable for GIS outdoor survey" },
    "Shimla, HP": { temp: "18°C", condition: "Pleasant & Clear", humidity: "55%", wind: "15 km/h", forecast: "Mild mountain breeze" },
    "Mandi, HP": { temp: "28°C", condition: "Sunny", humidity: "58%", wind: "8 km/h", forecast: "Clear skies" },
  };

  const curr = weatherData[city] || weatherData["Kangra, HP"];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
        <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <CloudSun className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">Weather Forecast & Climatology Simulator</h3>
          <p className="text-xs text-slate-400">Interactive meteorological data visualizer for Himachal Pradesh regions.</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300">Select Region in Himachal Pradesh:</label>
        <div className="grid grid-cols-3 gap-2">
          {["Kangra, HP", "Shimla, HP", "Mandi, HP"].map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                city === c
                  ? "bg-sky-500/20 text-sky-300 border-sky-500"
                  : "bg-[#0d1117] text-slate-400 border-[#30363d] hover:border-slate-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3 bg-[#161b22] rounded-xl border border-[#30363d]">
          <span className="text-[11px] text-slate-500 block">Temperature</span>
          <span className="text-2xl font-extrabold text-amber-400">{curr.temp}</span>
        </div>
        <div className="p-3 bg-[#161b22] rounded-xl border border-[#30363d]">
          <span className="text-[11px] text-slate-500 block">Condition</span>
          <span className="text-xs font-bold text-slate-200 mt-1 block">{curr.condition}</span>
        </div>
        <div className="p-3 bg-[#161b22] rounded-xl border border-[#30363d]">
          <span className="text-[11px] text-slate-500 block">Humidity</span>
          <span className="text-base font-bold text-sky-400">{curr.humidity}</span>
        </div>
        <div className="p-3 bg-[#161b22] rounded-xl border border-[#30363d]">
          <span className="text-[11px] text-slate-500 block">Wind Speed</span>
          <span className="text-base font-bold text-emerald-400">{curr.wind}</span>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------- */
/* 4. GEOSPATIAL AI (LULC & SATELLITE CHANGE) SIMULATOR */
/* ---------------------------------------------------- */
const GeospatialAiSimulator: React.FC<{ type: string }> = ({ type }) => {
  const [bandCombo, setBandCombo] = useState("False Color (NIR-Red-Green)");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
        <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
          <Satellite className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">
            {type === "geovision-ai" ? "GeoVision AI – Satellite LULC Segmenter" : "GeoChange AI – Bi-temporal Change Detector"}
          </h3>
          <p className="text-xs text-slate-400">Deep learning satellite raster band spectral analysis simulator.</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300">Spectral Band Composite Mode:</label>
        <select
          value={bandCombo}
          onChange={(e) => setBandCombo(e.target.value)}
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
        >
          <option value="False Color (NIR-Red-Green)">False Color (NIR - Red - Green) - Highlights Healthy Vegetation</option>
          <option value="True Color (RGB)">True Color (Red - Green - Blue) - Natural Optical</option>
          <option value="Multispectral Index">Multispectral Vegetation Index Spectrum</option>
        </select>
      </div>

      <div className="relative rounded-2xl bg-[#0d1117] border border-[#30363d] p-6 h-48 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-center text-xs text-slate-400 z-10">
          <span className="font-mono text-sky-400">Sentinel-2 Tile: HP_Dharamsala_2026.tif</span>
          <span className="bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/30 text-[10px] font-bold">
            PyTorch CNN Model Active
          </span>
        </div>

        {/* Mock Satellite Spectral Bars */}
        <div className="space-y-2 my-auto z-10">
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Dense Pine & Mixed Forest (Vegetation)</span>
              <span className="text-emerald-400 font-bold">54.2%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-500 w-[54.2%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Urban Built-up & Infrastructure</span>
              <span className="text-rose-400 font-bold">18.6%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-rose-500 w-[18.6%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>River Bodies & Hydro GIS</span>
              <span className="text-sky-400 font-bold">12.4%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-sky-500 w-[12.4%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------- */
/* FALLBACK SIMULATORS */
/* ---------------------------------------------------- */
const StudentResultSimulator: React.FC = () => (
  <div className="space-y-4 text-slate-200">
    <h3 className="text-lg font-bold text-slate-100">Student Result Prediction Engine</h3>
    <p className="text-xs text-slate-400">Simulates academic pass/fail likelihood based on historical internal assessment scores.</p>
    <div className="p-4 bg-[#0d1117] rounded-xl border border-[#30363d] text-xs space-y-2">
      <div className="flex justify-between"><span>Input Test Average:</span><span className="text-sky-400 font-bold">78%</span></div>
      <div className="flex justify-between"><span>Attendance Rate:</span><span className="text-emerald-400 font-bold">88%</span></div>
      <div className="pt-2 border-t border-[#30363d] flex justify-between font-bold text-emerald-300">
        <span>Predicted Distinction Likelihood:</span><span>91.4%</span>
      </div>
    </div>
  </div>
);

const AttendanceSimulator: React.FC = () => (
  <div className="space-y-4 text-slate-200">
    <h3 className="text-lg font-bold text-slate-100">Tkinter & Excel Attendance Manager</h3>
    <p className="text-xs text-slate-400">Desktop GUI architecture with automated sheet logging and attendance percentage reports.</p>
    <div className="p-4 bg-[#0d1117] rounded-xl border border-[#30363d] text-xs font-mono text-emerald-400">
      [SUCCESS] Exported attendance_log_2026.xlsx with 120 student records!
    </div>
  </div>
);

const VoiceAssistantSimulator: React.FC = () => (
  <div className="space-y-4 text-slate-200">
    <h3 className="text-lg font-bold text-slate-100">AI Voice Assistant Engine</h3>
    <p className="text-xs text-slate-400">Processes speech audio input into structured automation triggers.</p>
    <div className="p-4 bg-[#0d1117] rounded-xl border border-[#30363d] text-xs space-y-2">
      <p className="text-purple-300 font-mono">"Jarvis, open weather map for Kangra"</p>
      <p className="text-slate-400">→ Executed: Browser redirect to open weather API endpoint</p>
    </div>
  </div>
);
