import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 flex items-center justify-center gap-3">
            <span>📧 Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project idea, hiring inquiry, or collaboration proposal? Send a message directly to Amit Kumar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out, {name}! You can also email directly at{" "}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-400 underline">
                    {PERSONAL_INFO.email}
                  </a>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-100">Send a Message</h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Message:</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or job opportunity details here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Amit</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Details */}
          <div className="lg:col-span-5 bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-100">Direct Contact Information</h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block">Email Address</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 font-semibold hover:text-sky-400">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block">Current Location</span>
                  <span className="text-slate-200 font-semibold">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block">LinkedIn Profile</span>
                  <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="text-sky-400 font-semibold hover:underline">
                    linkedin.com/in/amit-kumar-898226267
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block">GitHub Portfolio</span>
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-sky-400 font-semibold hover:underline">
                    github.com/amit85447
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
