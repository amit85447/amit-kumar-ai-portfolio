import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Assistant Chatbot Endpoint for Amit's Portfolio
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Fallback offline intelligent response when API key is missing
      const lower = message.toLowerCase();
      let reply = "Hello! I am Amit Kumar's AI Portfolio Assistant. ";
      if (lower.includes("skills") || lower.includes("python") || lower.includes("tech")) {
        reply += "Amit specializes in Python, SQL, Pandas, NumPy, Scikit-learn, PyTorch, Power BI, Streamlit, GIS, Remote Sensing, and LULC classification.";
      } else if (lower.includes("project") || lower.includes("cyber") || lower.includes("geo")) {
        reply += "Amit has built featured projects including AI Cyber Attack Detection, Candidate Selection System, GeoVision AI (LULC), GeoChange AI (Satellite Change Detection), and Student Result Prediction.";
      } else if (lower.includes("education") || lower.includes("geography") || lower.includes("degree")) {
        reply += "Amit holds a BA in Geography from Government Degree College, Nagrota Bagwan, Himachal Pradesh, combining spatial reasoning with modern Data Analytics and AI.";
      } else if (lower.includes("contact") || lower.includes("hire") || lower.includes("email")) {
        reply += "You can reach Amit at amitsarotri@gmail.com, or connect with him on LinkedIn and GitHub!";
      } else {
        reply += "Amit is a Data Analyst & AI/ML Enthusiast from Himachal Pradesh, India. How can I help you explore his work today?";
      }

      res.json({ reply, source: "rule-based-fallback" });
      return;
    }

    const systemInstruction = `
You are the AI Assistant for Amit Kumar's professional portfolio. Speak politely, accurately, and professionally as an ambassador for Amit.
Key Information about Amit:
- Full Name: Amit Kumar
- Location: Himachal Pradesh, India
- Role/Headline: Data Analyst | AI/ML Enthusiast | GIS & Remote Sensing
- Education: Bachelor of Arts (BA) in Geography from Government Degree College, Nagrota Bagwan, Himachal Pradesh.
- Core Skills:
  * Programming: Python, SQL
  * Data Analytics: Pandas, NumPy, Excel, Matplotlib, Seaborn, Power BI, EDA, Data Cleaning
  * Machine Learning: Scikit-learn, Regression, Classification, Random Forest, KNN, Model Evaluation, Feature Engineering
  * Deep Learning: PyTorch
  * GIS & Remote Sensing: Spatial Analysis, Satellite Image Processing, Land Use / Land Cover (LULC) Classification, Change Detection
  * Development & Tools: Streamlit, Tkinter, MySQL, Git, GitHub
- Projects:
  1. AI-Based Cyber Attack Detection (Network traffic analysis with Scikit-learn)
  2. AI-Based Candidate Selection System (Recruitment candidate evaluator with PyTorch & Streamlit)
  3. Student Result Prediction & Analytics (Academic performance ML model & dashboard)
  4. Student Attendance Management System (Desktop GUI app with Tkinter & Excel integration)
  5. Weather Forecast Application (Interactive weather analytics with open APIs & Streamlit)
  6. AI Voice Assistant (Python voice automation & speech recognition)
  7. GeoVision AI – LULC Classification (Geospatial deep learning for satellite Land Use/Land Cover)
  8. GeoChange AI – Satellite Change Detection (Satellite image comparison for environmental changes)
- Contact: amitsarotri@gmail.com, LinkedIn & GitHub available.
- Career Status: Fresher seeking entry-level Data Analyst, AI/ML Engineer, or GIS Specialist roles.
Keep answers helpful, structured, concise, and enthusiastic about data science, geospatial analytics, and software development.
`;

    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction,
      },
    });

    // Replay simple dialogue history if present
    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.role === "user") {
          await chat.sendMessage({ message: item.content });
        }
      }
    }

    const response = await chat.sendMessage({ message });
    res.json({ reply: response.text, source: "gemini-ai" });
  } catch (error: any) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: "Failed to generate AI response.", details: error?.message });
  }
});

// Text To Speech Endpoint for Voice Welcome
app.post("/api/tts", async (req, res) => {
  try {
    const { text } = req.body;
    const ai = getGeminiClient();

    const speechPrompt = text || "Welcome to my portfolio! Hey, my name is Amit Kumar. I am a Data Analyst and AI and Machine Learning enthusiast from Himachal Pradesh, India.";

    if (!ai) {
      res.json({ success: false, fallbackToWebSpeech: true, text: speechPrompt });
      return;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: `Say warmly and professionally: ${speechPrompt}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Puck" },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (base64Audio) {
      res.json({ success: true, audioBase64: base64Audio, mimeType: "audio/pcm;rate=24000" });
    } else {
      res.json({ success: false, fallbackToWebSpeech: true, text: speechPrompt });
    }
  } catch (err: any) {
    console.error("TTS error:", err);
    res.json({ success: false, fallbackToWebSpeech: true, text: req.body?.text || "Welcome to Amit Kumar's portfolio" });
  }
});

// Interactive Project Simulations Endpoint
app.post("/api/simulate/cyber-attack", (req, res) => {
  const { packetSize, duration, failedLogins, protocol } = req.body;

  const size = Number(packetSize) || 500;
  const dur = Number(duration) || 10;
  const logins = Number(failedLogins) || 0;

  // Simple explainable ML heuristics simulation
  let anomalyScore = (logins * 25) + (size > 1500 ? 30 : 5) + (dur < 2 ? 20 : 0);
  if (protocol === "UDP" && size > 2000) anomalyScore += 25;

  anomalyScore = Math.min(99.9, Math.max(1.2, anomalyScore));

  let classification = "Normal Traffic";
  let threatType = "None";
  let confidence = (90 + Math.random() * 8).toFixed(1);

  if (anomalyScore > 75) {
    classification = "Malicious / Anomaly Detected";
    threatType = logins > 3 ? "Brute Force / Credential Stuffing" : "DDoS Attack Vector";
  } else if (anomalyScore > 40) {
    classification = "Suspicious Traffic";
    threatType = "Port Scan / Reconnaissance";
  }

  res.json({
    anomalyScore: anomalyScore.toFixed(1),
    classification,
    threatType,
    confidence: `${confidence}%`,
    featuresAnalyzed: { packetSize: `${size} bytes`, duration: `${dur}s`, failedLogins: logins, protocol: protocol || "TCP" },
  });
});

app.post("/api/simulate/candidate-evaluator", (req, res) => {
  const { pythonScore, mlScore, sqlScore, geographyBackground, projectCount } = req.body;

  const py = Number(pythonScore) || 80;
  const ml = Number(mlScore) || 75;
  const sql = Number(sqlScore) || 70;
  const proj = Number(projectCount) || 3;

  let weightedScore = (py * 0.35) + (ml * 0.35) + (sql * 0.20) + Math.min(proj * 3, 10);
  if (geographyBackground) weightedScore += 5; // Bonus for Spatial Thinking capability!

  weightedScore = Math.min(100, Math.max(10, weightedScore));

  let status = "Consider with Training";
  let recommendation = "Good foundation. Encouraged to build 2 more end-to-end ML projects.";

  if (weightedScore >= 85) {
    status = "Highly Recommended for Interview";
    recommendation = "Strong proficiency in Python, ML, and Analytics. Excellent alignment for Data Analyst / AI Specialist positions.";
  } else if (weightedScore >= 70) {
    status = "Recommended";
    recommendation = "Solid technical aptitude and domain knowledge. Ready for technical interview screening.";
  }

  res.json({
    overallScore: weightedScore.toFixed(1),
    status,
    recommendation,
    breakdown: {
      python: `${py}/100`,
      machineLearning: `${ml}/100`,
      sql: `${sql}/100`,
      projectsBonus: `+${Math.min(proj * 3, 10)} pts`,
      gisSpatialBonus: geographyBackground ? "+5 pts" : "0 pts",
    },
  });
});

// Express + Vite Integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
