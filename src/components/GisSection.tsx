import React, { useState } from "react";
import { Satellite, Globe, Layers, ArrowRight, Activity, Sparkles, Sliders } from "lucide-react";

export const GisSection: React.FC = () => {
  const [nirValue, setNirValue] = useState(0.75);
  const [redValue, setRedValue] = useState(0.12);

  // Spectral Vegetation Index formula = (NIR - Red) / (NIR + Red)
  const specIndex = ((nirValue - redValue) / (nirValue + redValue)).toFixed(3);
  const indexNum = Number(specIndex);

  let vegetationHealth = "Dense Tropical / Forest Canopy";
  let healthColor = "text-emerald-400";
  if (indexNum < 0) {
    vegetationHealth = "Water Body / Snow Cover";
    healthColor = "text-sky-400";
  } else if (indexNum < 0.2) {
    vegetationHealth = "Bare Soil / Urban Built-up";
    healthColor = "text-amber-400";
  } else if (indexNum < 0.5) {
    vegetationHealth = "Moderate Shrubs & Grasslands";
    healthColor = "text-lime-400";
  }

  return (
    <section id="gis" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center justify-center gap-3">
            <span>🗺️ Geography, GIS & Remote Sensing</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Uniting spatial science with deep learning to process satellite rasters, calculate spectral indices, and detect environmental land changes over time.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 space-y-3 hover:border-sky-500/50 transition-all">
            <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400 w-fit border border-sky-500/30">
              <Satellite className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">🛰️ Remote Sensing</h3>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Satellite Image Processing (Sentinel-2 & Landsat)</li>
              <li>• Multispectral & Hyperspectral Band Composites</li>
              <li>• Vegetation & Environmental Spectral Indices</li>
              <li>• Earth Observation Data Pipelines</li>
            </ul>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 space-y-3 hover:border-sky-500/50 transition-all">
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 w-fit border border-purple-500/30">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">🗺️ Spatial Analysis</h3>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Vector Shapefiles & Raster Grid Manipulation</li>
              <li>• Land Use / Land Cover (LULC) Mapping</li>
              <li>• Bi-temporal Satellite Change Detection</li>
              <li>• Demographics & Terrain Topography</li>
            </ul>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 space-y-3 hover:border-sky-500/50 transition-all">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 w-fit border border-emerald-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">🤖 GeoAI & Machine Learning</h3>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• PyTorch CNNs for Satellite Pixel Segmentation</li>
              <li>• Deep Learning Feature Extraction</li>
              <li>• Automated Land Cover Classification</li>
              <li>• Predictive Spatial Analytics</li>
            </ul>
          </div>
        </div>

        {/* Interactive Spectral Index Calculator Simulator */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
            <Sliders className="w-6 h-6 text-emerald-400" />
            <div>
              <h3 className="text-lg font-bold text-slate-100">Interactive Spectral Vegetation Calculator Simulator</h3>
              <p className="text-xs text-slate-400">Formula: Index = (Near-Infrared - Red) / (Near-Infrared + Red)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex justify-between">
                  <span>Near-Infrared Reflectance (NIR - Band 8):</span>
                  <span className="text-emerald-400 font-mono font-bold">{nirValue.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  min="0.01"
                  max="0.99"
                  step="0.01"
                  value={nirValue}
                  onChange={(e) => setNirValue(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex justify-between">
                  <span>Red Band Reflectance (Red - Band 4):</span>
                  <span className="text-rose-400 font-mono font-bold">{redValue.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  min="0.01"
                  max="0.99"
                  step="0.01"
                  value={redValue}
                  onChange={(e) => setRedValue(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 text-center space-y-3">
              <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">Computed Spectral Score</span>
              <span className={`text-4xl font-extrabold font-mono ${healthColor}`}>{specIndex}</span>
              <div className="pt-2 border-t border-[#30363d]">
                <span className="text-xs text-slate-400 block">Classified Land Surface Cover:</span>
                <span className={`text-sm font-bold ${healthColor} mt-1 block`}>{vegetationHealth}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Progression Ribbon */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-4 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-center">
          <span className="text-sky-400">Geography Degree</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-purple-400">GIS & Cartography</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-emerald-400">Remote Sensing</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-amber-400">Data & AI Models</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-rose-400">Geospatial Insights</span>
        </div>
      </div>
    </section>
  );
};
