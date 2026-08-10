import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { VoiceWelcome } from "./components/VoiceWelcome";
import { AboutEducation } from "./components/AboutEducation";
import { SkillsGrid } from "./components/SkillsGrid";
import { Projects } from "./components/Projects";
import { ProjectSimulators } from "./components/ProjectSimulators";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { GisSection } from "./components/GisSection";
import { LearningJourney } from "./components/LearningJourney";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AiAssistantModal } from "./components/AiAssistantModal";
import { ResumeModal } from "./components/ResumeModal";
import { MessageSquare, ArrowUp } from "lucide-react";

export default function App() {
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSimulator, setActiveSimulator] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Container */}
      <main className="space-y-12">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />

        {/* Voice Welcome Audio Player Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VoiceWelcome />
        </div>

        {/* About & Education */}
        <AboutEducation />

        {/* Technical Skills */}
        <SkillsGrid />

        {/* Featured Projects with Live Simulators */}
        <Projects onOpenSimulator={(id) => setActiveSimulator(id)} />

        {/* Data Analytics Dashboard */}
        <AnalyticsDashboard />

        {/* GIS & Remote Sensing */}
        <GisSection />

        {/* Learning Journey Timeline */}
        <LearningJourney />

        {/* Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for AI Assistant */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-white hover:border-sky-500 transition-all shadow-xl"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <button
          onClick={() => setAiAssistantOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-sky-500 text-white font-bold text-xs shadow-2xl hover:scale-105 transition-all group"
        >
          <MessageSquare className="w-5 h-5 text-purple-200 group-hover:animate-bounce" />
          <span className="hidden sm:inline">Ask AI Assistant</span>
        </button>
      </div>

      {/* AI Assistant Chat Modal */}
      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Project Test Simulator Modal */}
      <ProjectSimulators
        activeSimulator={activeSimulator}
        onClose={() => setActiveSimulator(null)}
      />
    </div>
  );
}
