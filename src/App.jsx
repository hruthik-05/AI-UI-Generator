import { useState } from "react";
import ChatPanel from "./components/Chatpanel.jsx";
import CodeEditorPanel from "./components/CodeEditorPanel.jsx";
import PreviewPanel from "./components/PreviewPanel.jsx";

export default function App() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
        color: "#f8fafc",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "20px 32px",
          fontSize: "22px",
          fontWeight: "700",
          background:
            "linear-gradient(90deg, rgba(99,102,241,0.9), rgba(236,72,153,0.9))",
          letterSpacing: "0.5px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        }}
      >
        🚀 AI UI Studio
      </div>

      {/* MAIN */}
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: "28px",
          gap: "28px",
        }}
      >
        {/* LEFT PANEL */}
        <GlassCard width="28%">
          <SectionTitle color="#818cf8">💬 AI Chat</SectionTitle>

          <ChatPanel
            setCode={setCode}
            setExplanation={setExplanation}
            setHistory={setHistory}
          />

          <div style={{ marginTop: "24px" }}>
            <SectionTitle color="#c084fc" small>
              🕓 Recent Requests
            </SectionTitle>

            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {history.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setCode(item.code)}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    background:
                      "linear-gradient(90deg, rgba(99,102,241,0.15), rgba(236,72,153,0.15))",
                    transition: "0.2s",
                  }}
                >
                  {item.input}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* CENTER PANEL */}
        <GlassCard width="36%">
          <SectionTitle color="#f472b6">🧠 Code Editor</SectionTitle>

          <div style={{ flex: 1 }}>
            <CodeEditorPanel code={code} setCode={setCode} />
          </div>
        </GlassCard>

        {/* RIGHT PANEL */}
        <GlassCard flex={1}>
          <SectionTitle color="#22d3ee">🎨 Live Preview</SectionTitle>

          <div style={{ flex: 1, overflow: "auto", marginBottom: "18px" }}>
            <PreviewPanel code={code} />
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "16px",
            }}
          >
            <SectionTitle small color="#94a3b8">
              🧠 AI Design Reasoning
            </SectionTitle>

            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                maxHeight: "140px",
                overflowY: "auto",
                opacity: 0.9,
              }}
            >
              {explanation || "Design reasoning will appear here."}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

function GlassCard({ children, width, flex }) {
  return (
    <div
      style={{
        width,
        flex,
        display: "flex",
        flexDirection: "column",
        padding: "22px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
        transition: "0.3s",
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children, color, small }) {
  return (
    <div
      style={{
        fontWeight: 600,
        fontSize: small ? "14px" : "16px",
        marginBottom: "16px",
        color,
      }}
    >
      {children}
    </div>
  );
}
