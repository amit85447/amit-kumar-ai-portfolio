import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles, CheckCircle2, RefreshCw } from "lucide-react";

export const VoiceWelcome: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [speechSource, setSpeechSource] = useState<"gemini-tts" | "web-speech" | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const welcomeText =
    "Welcome to my portfolio! Hey, my name is Amit Kumar. I am a Data Analyst and AI/Machine Learning enthusiast from Himachal Pradesh, India. I have a background in Geography and a strong interest in Data Analytics, Artificial Intelligence, Machine Learning, GIS and Remote Sensing. I love working with data, building intelligent solutions and transforming complex information into meaningful insights. Feel free to explore my skills, projects and professional journey. Thank you for visiting my portfolio!";

  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  const handleToggleVoice = async () => {
    if (isPlaying) {
      stopAllAudio();
      return;
    }

    setLoading(true);
    setAudioPlayed(true);

    try {
      // First try Gemini TTS server endpoint
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: welcomeText }),
      });

      const data = await response.json();

      if (data.success && data.audioBase64) {
        setSpeechSource("gemini-tts");
        const audioUrl = `data:${data.mimeType || "audio/mp3"};base64,${data.audioBase64}`;
        if (!audioRef.current) {
          audioRef.current = new Audio(audioUrl);
        } else {
          audioRef.current.src = audioUrl;
        }

        audioRef.current.onended = () => setIsPlaying(false);
        audioRef.current.onerror = () => fallbackWebSpeech();
        await audioRef.current.play();
        setIsPlaying(true);
        setLoading(false);
      } else {
        fallbackWebSpeech();
      }
    } catch (err) {
      console.warn("Falling back to browser speech synthesis...", err);
      fallbackWebSpeech();
    }
  };

  const fallbackWebSpeech = () => {
    if (!("speechSynthesis" in window)) {
      setLoading(false);
      alert("Audio synthesis is not supported in this browser, but you can read the introduction below!");
      return;
    }

    window.speechSynthesis.cancel();
    setSpeechSource("web-speech");

    const utterance = new SpeechSynthesisUtterance(welcomeText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = "en-IN"; // Prefer Indian English accent if available

    utterance.onstart = () => {
      setIsPlaying(true);
      setLoading(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setLoading(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, []);

  return (
    <div className="glass-card bg-[#161b22]/90 border border-[#30363d] rounded-2xl p-5 mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-sky-500/50 transition-all">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <Volume2 className="w-6 h-6 text-sky-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                👋 Audio Welcome Greeting
              </h3>
              {speechSource === "gemini-tts" && (
                <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" /> Gemini Voice AI
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
              Listen to Amit Kumar's personalized intro speech summarizing his background in Geography, Data Analytics, AI/ML, and GIS.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={handleToggleVoice}
            disabled={loading}
            className={`w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg ${
              isPlaying
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30"
                : "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 shadow-sky-500/25"
            }`}
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Generating Voice...</span>
              </>
            ) : isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause Audio Welcome</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Play Voice Welcome</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Audio Wave Visualizer & Transcript reveal */}
      {audioPlayed && (
        <div className="mt-4 pt-4 border-t border-[#30363d]/80 animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
              {isPlaying ? (
                <>
                  <span className="flex gap-1 items-end h-3">
                    <span className="w-1 bg-emerald-400 h-2 animate-bounce" />
                    <span className="w-1 bg-emerald-400 h-3 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 bg-emerald-400 h-1 animate-bounce [animation-delay:0.4s]" />
                  </span>
                  <span>Audio Playing...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-400">Audio Ready / Paused</span>
                </>
              )}
            </span>
            <span className="text-[11px] text-slate-500 italic">
              {speechSource === "gemini-tts"
                ? "Powered by Gemini TTS"
                : speechSource === "web-speech"
                ? "Browser Speech Engine"
                : "Audio Engine"}
            </span>
          </div>

          <div className="bg-[#0d1117]/80 rounded-xl p-3 border border-[#30363d] text-xs text-slate-300 leading-relaxed font-mono">
            "{welcomeText}"
          </div>
        </div>
      )}
    </div>
  );
};
