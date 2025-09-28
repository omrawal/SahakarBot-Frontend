import React, { useState } from "react";
import { ENDPOINTS } from "../config/urls";
import maharashtraFlag from "../assets/Flag_of_Maharashtra.png";

function HousingSocietyChatbot() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendQuestion(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    // Show pending message immediately
    setChatHistory([
      ...chatHistory,
      { question: input, answer: "..." }
    ]);

    try {
      const res = await fetch(ENDPOINTS.QUERY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: input,
          chat_history: chatHistory,
        }),
      });
      const { answer, error } = await res.json();
      
      // Update the last message with the actual response
      setChatHistory(prev => [
        ...prev.slice(0, -1),
        { question: input, answer: answer || error || "No answer returned." }
      ]);
    } catch (err) {
      // Update the last message with error
      setChatHistory(prev => [
        ...prev.slice(0, -1),
        { question: input, answer: "Sorry, server error." }
      ]);
    }
    setInput("");
    setLoading(false);
  }

  return (
    <div style={{ 
      maxWidth: 450, 
      margin: "2rem auto", 
      padding: 24, 
      background: "#f5fafd", 
      borderRadius: 10,
      height: "80vh", // Set a fixed height
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: 16
      }}>
        <img 
          src={maharashtraFlag} 
          alt="Maharashtra Flag" 
          style={{
            height: "40px",
            width: "auto",
            objectFit: "contain"
          }}
        />
        <h2 style={{ 
          color: "#1976d2",
          margin: 0
        }}>Maharashtra Housing Society Laws Chatbot</h2>
      </div>
      <div style={{ 
        minHeight: 180,
        marginBottom: 18, 
        background: "#fff", 
        borderRadius: 8, 
        padding: 10, 
        boxShadow: "0 2px 10px #eee",
        flex: 1, // Take remaining space
        overflowY: "auto", // Make scrollable
        overflowX: "hidden"
      }}>
        {chatHistory.map((c, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: "bold", color: "#054b73" }}>Q: {c.question}</div>
            <div style={{ marginLeft: 8, color: "#23608b" }}>
              A: {c.answer === "..." ? 
                <span style={{ color: "#bbb" }}>Thinking...</span> : 
                c.answer}
            </div>
          </div>
        ))}
        {!loading && chatHistory.length === 0 && 
          <span style={{ color: "#aaa" }}>Start by asking a society law question.</span>}
      </div>
      
      <form onSubmit={sendQuestion} style={{ 
        display: "flex", 
        gap: 6,
        marginTop: "auto" // Push to bottom
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Your question..."
          style={{ 
            flex: 1, 
            borderRadius: 6, 
            padding: "10px 12px", 
            fontSize: 15,
            opacity: loading ? 0.7 : 1
          }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          style={{ 
            background: "#1976d2", 
            color: "white", 
            border: "none", 
            borderRadius: 6, 
            padding: "8px 16px",
            opacity: loading || !input.trim() ? 0.7 : 1,
            cursor: loading || !input.trim() ? "not-allowed" : "pointer"
          }}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default HousingSocietyChatbot;