import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, User, Bot, RefreshCw } from "lucide-react";
import { ChatMessage } from "../types";

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      role: "assistant",
      content:
        "Hello! 👋 I am Amit Kumar's AI Portfolio Assistant. Feel free to ask me anything about Amit's technical skills, Geography background, ML projects, or availability for data roles!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What are Amit's core technical skills?",
    "Tell me about Amit's BA Geography background.",
    "What projects has Amit built?",
    "Is Amit open for entry-level roles?",
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || "Thank you for asking! Amit is a dedicated Data Analyst and AI/ML enthusiast.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Amit is a Data Analyst & AI/ML Specialist proficient in Python, SQL, Machine Learning, PyTorch, and GIS Remote Sensing.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl max-w-lg w-full h-[620px] flex flex-col relative shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-[#0d1117] border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <span>Amit's AI Assistant</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Online</span>
              </h3>
              <p className="text-[11px] text-slate-400">Ask questions about skills, projects & background</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#161b22] border border-[#30363d] text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 ${
                  msg.role === "user"
                    ? "bg-sky-500 text-white"
                    : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                }`}
              >
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                  msg.role === "user"
                    ? "bg-sky-600 text-white rounded-tr-none"
                    : "bg-[#0d1117] border border-[#30363d] text-slate-200 rounded-tl-none"
                }`}
              >
                <p>{msg.content}</p>
                <span className="block text-[10px] text-slate-400 mt-1 text-right">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
              <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
              <span>AI is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="p-3 bg-[#0d1117] border-t border-[#30363d] flex flex-wrap gap-1.5">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-lg bg-[#161b22] border border-[#30363d] text-[11px] text-slate-300 hover:border-purple-500 hover:text-purple-300 transition-all text-left"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-[#161b22] border-t border-[#30363d] flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask AI about Amit..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 bg-[#0d1117] border border-[#30363d] rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
